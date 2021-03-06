/**
 * These tiles can switch the options of another tile
 *
 */

if (!RPG) var RPG = {};
if (!RPG.TileTypes) RPG.TileTypes = {};
if (!RPG.TileTypes['switch']) RPG.TileTypes['switch'] = {};
if (typeof exports != 'undefined') {
    Object.merge(RPG,require('../../Character/Character.js'));
    Object.merge(RPG,require('../../../server/Game/game.njs'));
    Object.merge(RPG,require('../../../server/Character/Character.njs'));
    var logger = RPG.Log.getLogger('Switch');
    module.exports = RPG;
}

/**
 * Options:
 * game : the game object which includes things like the user, universe, character, moveTo, dir etc
 * tiles : the array of tiles for which the tile type is being triggered
 * merged : contains the merged options of all the tiles
 * contents : contains the actual options for this specific TileType from the merged options. Use This Mostly.
 * event : [onBeforeEnter, onEnter, onLeave etc]
 * events : Contains all the results from the current round of TileType event triggers
 *
 * callback : MUST CALLBACK game will appear to hang if callback is not called.
 */

//RPG.TileTypes['switch'].onBeforeLeave = function(options,callback) {
//    callback();
//}

RPG.TileTypes['switch'].activate = function(options,callback) {
    var paths = null;
    var idx = 0;
    if (typeof exports == 'undefined') {
	//client
	if (!options.contents.auto) {
	    RPG.Switch.show(options,{
		success : function(switchState){
		    callback(switchState);
		},
		fail : function() {
		    callback({
			error : 'Canceled'
		    });
		}
	    });
	} else {
	    var lastTile = RPG.getLastByTileType(options.game.universe.maps[options.game.character.location.mapName],'switch',options.tiles);
	    if (!lastTile || !lastTile.path) {
		callback();
		return;
	    }
	    //automaically cycle through the states
	    idx = Object.keys(lastTile.tile.options['switch'].states).indexOf(options.contents.state);
	    state = Object.keys(lastTile.tile.options['switch'].states)[idx+1] || Object.keys(lastTile.tile.options['switch'].states)[0];
	    var ret = {};
	    //ret becomes like: { '["path","to","tile"]' : solution }
	    ret[JSON.encode(RPG.getLastByTileType(options.game.universe.maps[options.game.character.location.mapName],'switch',options.tiles).path)] = state;
	    callback({
		'switch' : ret
	    });
	}

    } else {
	//server
	var state = options.game.clientEvents.activate['switch'] && options.game.clientEvents.activate['switch'].state;
	if (!options.contents.auto) {
	    //automaically cycle through the states
	    idx = Object.keys(options.contents.states).indexOf(options.contents.state);
	    state = Object.keys(options.contents.states)[idx+1] || Object.keys(options.contents.states)[0];
	}

	if (!Object.keys(options.contents.states).contains(state)) {
	    callback();
	    return;
	}

	//aggragate all the paths for a single load from the db
	paths = [];
	options.contents.states[state].each(function(change){
	    paths.push(JSON.encode(change.path));
	});

	//make a call to the database since we cannot be assured the tiles will be in the cache
	RPG.Map.loadCache({
	    user : options.game.user,
	    mapID: options.game.character.location.mapID,
	    universe : options.game.universe,
	    paths : paths
	}, function(cache) {
	    if (cache.error) {
		callback({
		    error : cache.error
		});
		return;
	    }

	    var updateUni = {};
	    var errors = [];
	    //go through each statechange in the array
	    options.game.user.logger.trace('Activating Switch - state: ' + state + ' tile: '+JSON.encode(RPG.getLastByTileType(options.game.universe.maps[options.game.character.location.mapName],'switch',options.tiles).path));
	    RPG.getLastByTileType(options.game.universe.maps[options.game.character.location.mapName],'switch',options.tiles).tile.options['switch'].states[state].each(function(change) {
		var tile = Object.getFromPath(cache,change.path);
		if (!tile) return;

		var uni = RPG.getUpdateUniverse({
		    universe : options.game.universe,
		    mapName : options.game.character.location.mapName,
		    tilePaths : change.path,
		    point : options.game.character.location.point,
		    tileOptions : JSON.decode(change.options,true),
		    updateUniverse : updateUni
		});

		if (uni.error) {
		    errors.push(uni.error);
		}
	    });
	    if (errors && errors.length > 0) {
		callback({
		    error : errors
		});
		return;
	    }
	    //now store updated tiles
	    RPG.Universe.store({
		user : options.game.user,
		universe : updateUni
	    },function(universe) {
		if (universe.error) {
		    callback({
			error : universe.error
		    });
		    return;
		}
		//finally callback with the paths so that 'activateComplete' can use the list to remove tiles from the cache
		updateUni.options = {};//no universe options changed. remove it
		Object.each(updateUni.maps,function(map){
		    map.options = {};//no map options changed. remove it
		});
		callback({
		    //switchPaths : paths,
		    game : {
			universe : updateUni
		    }
		});
	    });
	});

    }
}

//RPG.TileTypes['switch'].onLeave = function(options,callback) {
//    callback();
//}

RPG.TileTypes['switch'].activateComplete = function(options,callback) {

    if (typeof exports != 'undefined' && options.events.activate.switchPaths) {
	//server-side

	//remove the tile from the current cached Universe so it will get reloaded from the database
	//and the client should receive any switched ones
	//	var paths = [];
	//
	//	//find and remove all tiles of the specified path
	//	options.events.activate.switchPaths.each(function(path){
	//	    path = JSON.decode(path);
	//	    paths.push(path);
	//	    var tiles = options.game.universe.maps[options.game.character.location.mapName].tiles;
	//	    RPG.EachTile(tiles, true, function(tile) {
	//		if (RPG.tilesContainsPath(tiles,path,[tile.row,tile.col])) {
	//		    RPG.removeAllTiles(tiles,[tile.row,tile.col]);
	//		}
	//	    });
	//	});
	//	//	RPG.removeCacheTiles(options.game.universe.maps[options.game.character.location.mapName].cache,paths);
	//	Object.erase(options.events.activate,'switchPaths');
	callback();

    } else {
	callback();
    }
}

/**
 * Client side disarm window
 */
RPG.Switch = new (new Class({

    /**
     * required options:
     * options : all the game/event/etc options
     *
     * callbacks
     * success : callback
     * fail : callback
     *
     */
    show : function(options,callbacks) {
	this.switchDialog = new Jx.Dialog.Confirm({
	    id : 'switchDialog',
	    label : 'Switch',
	    question : this.contentDiv = new Element('div'),
	    minimize : false,
	    destroyOnClose : true,
	    resizable : true,
	    maximizable : false,
	    height : 300,
	    width : 360,
	    onClose : function(dialog, value) {
		if (value && this.puzzle && this.puzzle.isSolved()) {
		    var ret = {};
		    //ret becomes like: { '["path","to","tile"]' : solution }
		    ret[JSON.encode(RPG.getLastByTileType(options.game.universe.maps[options.game.character.location.mapName],'switch',options.tiles).path)] = this.puzzle.solution;
		    callbacks && callbacks.success && callbacks.success({
			'switch' : ret
		    });
		    this.puzzle.toElement().destroy();
		} else {
		    callbacks && callbacks.fail && callbacks.fail();
		    this.puzzle.toElement().destroy();
		}
	    }.bind(this)
	});

	this.switchDialog.open();
	this.switchDialog.resize();

	if (!Object.getFromPath(RPG,['Puzzles','switch',options.contents.type])) {
	    this.switchDialog.setBusy(true);
	    require(['/client/Game/Puzzles/switch/'+options.contents.type+'.js'],function(){
		this.switchDialog.setBusy(false);
		this.puzzle = new RPG.Puzzles['switch'][options.contents.type](options,callbacks);
		this.contentDiv.adopt(this.puzzle.toElement());
	    }.bind(this));
	} else {
	    this.puzzle = new RPG.Puzzles['switch'][options.contents.type](options,callbacks);
	    this.contentDiv.adopt(this.puzzle.toElement());
	}
    }
}));