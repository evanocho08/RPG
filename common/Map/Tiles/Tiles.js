/*This File is Generated in /server/Map/MapEditor.njs*/if (!RPG) var RPG = {};RPG.Tiles={"options":{"property":{"tileName":["/^[a-zA-Z0-9'.`_ ]+$/",1,50],"folderName":["/^[a-zA-Z0-9]+$/",1,50],"image":{"name":["property.js","teleportTo.js","Tiles.js","TileTypes.js","tileTypeTemplate.js","traverse.js","Utilities.js"],"size":[-200,200,100],"top":[-200,200,0],"left":[-200,200,0],"repeat":["no-repeat","repeat-x","repeat-y","repeat"]}}},"npc":{"options":{"attributes":{"hitpoints":[1,1000000,1],"disposition":["Friendly","Wary","Neutral","Angry","Hostile"],"roaming":{"canRoam":[true],"radius":[0,250,0]}}},"alien":{},"earth":{"animal":{"options":{"property":{"image":{"name":["M_monster01.png","M_monster02.png","M_monster03.png","M_monster04.png","M_monster06.png","M_monster07.png","M_monster09.png","M_monster11.png","M_monster12.png","M_monster13.png","M_monster14.png","M_monster15.png","M_monster16.png","M_monster17.png","M_monster18.png","M_monster19.png","M_monster20.png","M_monster21.png","M_monster22.png","M_monster23.png","M_monster24.png","M_monster25.png","M_monster26.png","M_monster27.png","M_monster28.png","M_monster29.png","M_monster30.png","M_monster31.png","M_monster32.png","M_monster33.png","M_monster34.png","M_monster35.png","M_monster36.png","M_monster38.png","M_monster39.png","M_monster40.png","M_monster41.png","M_monster42.png","M_monster43.png","M_monster44.png","M_monster46.png"]}}}},"character":{},"livestock":{"options":{"property":{"image":{"name":["M_monster05.png","M_monster08.png","M_monster10.png","M_monster37.png","M_monster45.png"]}}}},"monster":{}},"space":{}},"terrain":{"options":{"traverse":{"foot":{"cost":[-100,100,100]},"steed":{"cost":[-100,100,100]},"vehicle":{"cost":[-100,100,100]},"boat":{"cost":[-100,100,100]},"spaceship":{"cost":[-100,100,100]}}},"alien":{},"earth":{"liquid":{"options":{"traverse":{"foot":{"cost":[-100,100,5]},"steed":{"cost":[-100,100,100]},"vehicle":{"cost":[-100,100,100]},"boat":{"cost":[-100,100,5]},"spaceship":{"cost":[-100,100,100]}}},"deep":{"options":{"property":{"image":{"name":["1.gif","1.png","2.png"]}}}},"lava":{"options":{"property":{"image":{"name":["M_lava.png"]}}}},"river":{"options":{"property":{"image":{"name":["M_river_0.png","M_river_180.png","M_river_270.png","M_river_90.png","M_river_h.png","M_river_v.png","M_toxicriver_h.png"]}}}},"shallow":{"options":{"property":{"image":{"name":["1.gif","1.png","2.png"]}}}}},"solid":{"options":{"traverse":{"foot":{"cost":[-100,100,1]},"steed":{"cost":[-100,100,100]},"vehicle":{"cost":[-100,100,100]},"boat":{"cost":[-100,100,100]},"spaceship":{"cost":[-100,100,100]}}},"dirt":{"options":{"property":{"image":{"name":["1.png","2.png","3.png","4.png","5.png","6.png"]}}}},"grass":{"options":{"property":{"image":{"name":["1.png","2.png","3.png","4.png","5.png"]}}}},"ice":{"options":{"property":{"image":{"name":["1.png"]}}}},"rock":{"options":{"property":{"image":{"name":["1.png","2.png","3.png","4.png","5.png","6.png"]}}}},"sand":{"options":{"property":{"image":{"name":["1.png","2.png","3.png","4.png"]}}}},"snow":{"options":{"property":{"image":{"name":["1.png"]}}}},"swamp":{"options":{"property":{"image":{"name":["1.png"]}}}}}},"space":{"options":{"property":{"image":{"name":["1.png","2.png","3.png","4.png","5.png"]}}}}},"world":{"alien":{"tree":{"conifer":{"options":{"property":{"image":{"name":["f3.png"]}}}}}},"earth":{"building":{"options":{"teleportTo":{"warn":[true],"mapName":[],"generator":["","Terrain","Dungeon","House","Maze"],"point":[]}},"castle":{"options":{"property":{"image":{"name":["1.png"]}}}},"cathedral":{"options":{"property":{"image":{"name":["M_cathedral_01.png","M_cathedral_02.png","M_cathedral_03.png","M_cathedral_04.png","M_cathedral_05.png","M_cathedral_06.png","M_cathedral_07.png","M_cathedral_08.png","M_cathedral_09.png","M_cathedral_10.png","M_cathedral_11.png","M_cathedral_12.png","M_cathedral_13.png","M_cathedral_14.png","M_cathedral_15.png","M_cathedral_16.png","M_cathedral_17.png","M_cathedral_18.png","M_cathedral_19.png","M_cathedral_20.png","M_cathedral_21.png","M_cathedral_22.png","M_cathedral_23.png","M_cathedral_24.png","M_cathedral_25.png","M_cathedral_26.png","M_cathedral_27.png","M_cathedral_28.png","M_cathedral_29.png","M_cathedral_30.png","M_cathedral_31.png","M_cathedral_32.png","M_cathedral_33.png","M_cathedral_34.png","M_cathedral_35.png","M_cathedral_36.png","M_cathedral_37.png","M_cathedral_38.png","M_cathedral_39.png","M_cathedral_40.png","M_cathedral_41.png","M_cathedral_42.png","M_cathedral_43.png","M_cathedral_44.png","M_cathedral_45.png","M_cathedral_46.png","M_cathedral_47.png","M_cathedral_48.png","M_cathedral_49.png","M_cathedral_50.png","M_cathedral_51.png","M_cathedral_52.png","M_cathedral_53.png","M_cathedral_54.png","M_cathedral_55.png","M_cathedral_56.png","M_cathedral_57.png","M_cathedral_58.png","M_cathedral_59.png","M_cathedral_60.png","M_cathedral_61.png","M_cathedral_62.png","M_cathedral_63.png","M_cathedral_64.png","M_cathedral_65.png","M_cathedral_66.png","M_cathedral_67.png","M_cathedral_68.png","M_cathedral_69.png","M_cathedral_70.png","M_cathedral_71.png","M_cathedral_72.png","M_cathedral_73.png","M_cathedral_74.png","M_cathedral_75.png","M_cathedral_76.png","M_cathedral_77.png","M_cathedral_78.png","M_cathedral_79.png","M_cathedral_80.png","M_cathedral_81.png"]}}}},"cave":{"options":{"property":{"image":{"name":["c1.png","c2.png","c3.png","w1.png","w2.png"]}}}},"cityscape":{"options":{"property":{"image":{"name":["cityscape_01.png","cityscape_02.png","cityscape_03.png","cityscape_04.png","cityscape_05.png","cityscape_06.png","cityscape_07.png","cityscape_08.png","cityscape_09.png","cityscape_10.png","cityscape_11.png","cityscape_12.png","cityscape_13.png","cityscape_14.png","cityscape_15.png","cityscape_16.png","modernCity.png"]}}}},"house":{"options":{"property":{"image":{"name":["Bach.png","home-1.png","home-10.png","home-2.png","home-3.png","home-4.png","home-5.png","home-7.png","home-8.png","Home.png","Igloo.png","Malin-Residence-Chemosphere.png","Marae.png","M_church.png","M_home.png","M_home2.png","Property.png","Shoin-zukuri.png"]}}}},"hut":{"options":{"teleportTo":{"warn":[true],"mapName":[],"generator":["House"],"point":[]},"property":{"image":{"name":["h1.png","h2.png","h3.png","h4.png"]}}}},"island":{"options":{"property":{"image":{"name":["i1.png"]}}}},"monument":{"options":{"property":{"image":{"name":["Bigben.png","Colosseum.png","Egypt.png","Eiffel.png","Liberty.png","Tajmahal.png"]}}}},"office":{"options":{"property":{"image":{"name":["bank.png","bank2.png","Beehive.png","Cinema.png","Circus.png","City-(2).png","City.png","Coal-power-plant.png","Commercial-building.png","Drugstore-(2).png","Drugstore.png","Goverment.png","Hangar.png","Hospital.png","Museum.png","M_factory.png","M_library.png","M_lighthouse.png","M_office.png","M_shop.png","office.png","Post-office.png","Retail-shop-(2).png","Retail-shop.png","School-(2).png","School.png","shop.png","Stadium.png","Temple.png","University.png","Wedding-Chapel.png"]}}}},"ship":{"options":{"property":{"image":{"name":["p1.png"]}}}}},"door":{"options":{"traverse":{"foot":{"cost":[-100,100,1]},"steed":{"cost":[-100,100,100]},"vehicle":{"cost":[-100,100,100]},"boat":{"cost":[-100,100,100]},"spaceship":{"cost":[-100,100,100]}},"property":{"image":{"name":["d1.png"]}}},"brick":{"options":{"property":{"image":{"name":["e.png","n.png","s.png","w.png"]}}}},"brick2":{"options":{"property":{"image":{"name":["e.png","n.png","s.png","w.png"]}}}}},"fence":{"iron":{"options":{"property":{"image":{"name":["bi.png","blc.png","brc.png","fi.png","h.png","li.png","ri.png","ti.png","tlc.png","trc.png","v.png"]}}}},"options":{"property":{"image":{"name":["M_fence.png","M_milestone.png"]}}}},"floor":{"options":{"traverse":{"foot":{"cost":[-100,100,1]},"steed":{"cost":[-100,100,100]},"vehicle":{"cost":[-100,100,100]},"boat":{"cost":[-100,100,100]},"spaceship":{"cost":[-100,100,100]}},"property":{"image":{"name":["1.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","2.png","20.png","21.png","22.png","23.png","24.png","25.png","26.png","27.png","28.png","29.png","3.png","30.png","31.png","32.png","33.png","34.png","35.png","36.png","37.png","38.png","39.png","4.png","40.png","41.png","42.png","43.png","44.png","45.png","46.png","47.png","48.png","49.png","5.png","50.png","51.png","6.png","7.png","8.png","9.png"]}}}},"gate":{"iron":{"options":{"property":{"image":{"name":["g1.png","g2.png","g3.png","g4.png","g5.png"]}}}}},"glyphs":{"options":{"property":{"image":{"name":["a Arm Embossed.png","a Arm Inserted.png","a, glottal stop, Vulture Embossed.png","a, glottal stop, Vulture Inserted.png","Ankh Embossed.png","Ankh Inserted.png","b Leg Embossed.png","b Leg Inserted.png","Bee Embossed.png","Bee Inserted.png","d Hand Embossed.png","d Hand Inserted.png","dj Cobra Embossed.png","dj Cobra Inserted.png","Eye of Horus Embossed.png","Eye of Horus Inserted.png","f Viper Embossed.png","f Viper Inserted.png","g Jar Embossed.png","g Jar Inserted.png","h Reed Shelter Embossed.png","h Reed Shelter Inserted.png","h, emphatic, Wick Embossed.png","h, emphatic, Wick Inserted.png","i Reed Embossed.png","i Reed Inserted.png","k Basket Embossed.png","k Basket Inserted.png","kh Placenta Embossed.png","kh Placenta Inserted.png","khy Cow Belly Embossed.png","khy Cow Belly Inserted.png","Lotus Bud Embossed.png","Lotus Bud Inserted.png","Lotus Embossed .png","Lotus Inserted.png","Lute Embossed.png","Lute Inserted.png","m Owl Embossed.png","m Owl Inserted.png","n Wave Embossed.png","n Wave Inserted.png","p Reed Mat Embossed.png","p Reed Mat Inserted.png","Papyrus Embossed.png","Papyrus Inserted .png","q Hill Embossed.png","q Hill Inserted.png","r Mouth Embossed.png","r Mouth Inserted.png","s Folded Cloth Embossed.png","s Folded Cloth Inserted.png","Scarab Embossed.png","Scarab Inserted.png","Sedge Embossed.png","Sedge Inserted.png","sh Pool Embossed.png","sh Pool Inserted.png","t Loaf Embossed.png","t Loaf Inserted.png","tj Tether Embossed.png","tj Tether Inserted.png","w Quail Embossed.png","w Quail Inserted.png","y Double Reeds Embossed.png","y Double Reeds Inserted.png"]}}}},"misc":{"options":{"property":{"image":{"name":["cactus-icon.png","flag-icon.png","gear.png","icon.pendant.png","leaf.png","Mushroom-icon.png","M_present.png","M_pumpkin.png","M_tombstone.png","s1.png","theater-icon.png","tn_thunder_cloud.gif","wall.png"]}}}},"mountian":{"options":{"property":{"image":{"name":["1.png","2.png"]}}}},"road":{"options":{"traverse":{"foot":{"cost":[-100,100,1]},"steed":{"cost":[-100,100,100]},"vehicle":{"cost":[-100,100,100]},"boat":{"cost":[-100,100,100]},"spaceship":{"cost":[-100,100,100]}}},"asphalt":{"options":{"property":{"image":{"name":["bi.png","blc.png","brc.png","fi.png","h.png","li.png","ri.png","ti.png","tlc.png","trc.png","v.png"]}}}},"brick":{"options":{"property":{"image":{"name":["bi.png","blc.png","brc.png","fi.png","h.png","li.png","ri.png","ti.png","tlc.png","trc.png","v.png"]}}}},"brick2":{"options":{"property":{"image":{"name":["bi.png","blc.png","brc.png","fi.png","h.png","li.png","ri.png","ti.png","tlc.png","trc.png","v.png"]}}}},"dirt":{"options":{"property":{"image":{"name":["bi.png","blc.png","brc.png","fi.png","h.png","li.png","ri.png","ti.png","tlc.png","trc.png","v.png"]}}}},"rail":{"options":{"property":{"image":{"name":["fi.png","h.png","v.png"]}}}},"stone":{"options":{"property":{"image":{"name":["bi.png","blc.png","brc.png","fi.png","h.png","li.png","ri.png","ti.png","tlc.png","trc.png","v.png"]}}}},"wood":{"options":{"property":{"image":{"name":["bi.png","blc.png","brc.png","fi.png","h.png","li.png","ri.png","ti.png","tlc.png","trc.png","v.png"]}}}}},"room":{"castle":{"b":{"decor":{"options":{"property":{"image":{"name":["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"]}}}},"wall":{"options":{"property":{"image":{"name":["1.png","2.png","3.png"]}}}}},"i":{"options":{"traverse":{"foot":{"cost":[-100,100,1]},"steed":{"cost":[-100,100,100]},"vehicle":{"cost":[-100,100,100]},"boat":{"cost":[-100,100,100]},"spaceship":{"cost":[-100,100,100]}}},"kitchen":{"e":{"options":{"property":{"image":{"name":["1.png"]}}}},"n":{"options":{"property":{"image":{"name":["1.png","2.png","3.png","4.png"]}}}},"o":{"options":{"property":{"image":{"name":["1.png","2.png","3.png","4.png","5.png"]}}}},"s":{"options":{"property":{"image":{"name":["1.png"]}}}},"w":{"options":{"property":{"image":{"name":["1.png"]}}}}}},"t":{"options":{"property":{"image":{"name":["1.png","2.png"]}}}}},"house":{"b":{"decor":{"options":{"property":{"image":{"name":["1.png","2.png","3.png","4.png","5.png","6.png","7.png"]}}}},"wall":{"options":{"property":{"image":{"name":["1.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","2.png","20.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"]}}}}},"i":{"options":{"traverse":{"foot":{"cost":[-100,100,1]},"steed":{"cost":[-100,100,100]},"vehicle":{"cost":[-100,100,100]},"boat":{"cost":[-100,100,100]},"spaceship":{"cost":[-100,100,100]}}},"bedroom":{"e":{"options":{"property":{"image":{"name":["1.png"]}}}},"n":{"options":{"property":{"image":{"name":["1.png","2.png","3.png","4.png"]}}}},"o":{"options":{"property":{"image":{"name":["1.png"]}}}},"s":{"options":{"property":{"image":{"name":["1.png"]}}}},"w":{"options":{"property":{"image":{"name":["1.png"]}}}}},"kitchen":{"e":{"options":{"property":{"image":{"name":["1.png"]}}}},"n":{"options":{"property":{"image":{"name":["1.png","2.png","3.png","4.png"]}}}},"o":{"options":{"property":{"image":{"name":["1.png","2.png","3.png","4.png","6.png"]}}}},"s":{"options":{"property":{"image":{"name":["1.png"]}}}},"w":{"options":{"property":{"image":{"name":["1.png"]}}}}},"library":{"e":{"options":{"property":{"image":{"name":["1.png"]}}}},"n":{"options":{"property":{"image":{"name":["1.png","2.png","3.png","4.png","5.png"]}}}},"o":{"options":{"property":{"image":{"name":["1.png"]}}}},"s":{"options":{"property":{"image":{"name":["1.png"]}}}},"w":{"options":{"property":{"image":{"name":["1.png"]}}}}},"livingroom":{"e":{"options":{"property":{"image":{"name":["1.png"]}}}},"n":{"options":{"property":{"image":{"name":["1.png","2.png","3.png","4.png","5.png"]}}}},"o":{"options":{"property":{"image":{"name":["1.png"]}}}},"s":{"options":{"property":{"image":{"name":["1.png"]}}}},"w":{"options":{"property":{"image":{"name":["1.png"]}}}}}},"t":{"options":{"property":{"image":{"name":["1.png","10.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"]}}}}}},"shrub":{"options":{"traverse":{"foot":{"cost":[-100,100,1]},"steed":{"cost":[-100,100,100]},"vehicle":{"cost":[-100,100,100]},"boat":{"cost":[-100,100,100]},"spaceship":{"cost":[-100,100,100]}},"property":{"image":{"name":["1.png","2.png","3.png"]}}}},"sidewalk":{"options":{"property":{"traversableBy":{"foot":{"cost":[-100,100,1]},"steed":{"cost":[-100,100,0.75]},"vehicle":{"cost":[-100,100,0.25]}}}},"brick":{"options":{"property":{"image":{"name":["bi.png","blc.png","brc.png","fi.png","h.png","li.png","ri.png","ti.png","tlc.png","trc.png","v.png"]}}}},"brick2":{"options":{"property":{"image":{"name":["bi.png","blc.png","brc.png","fi.png","h.png","li.png","ri.png","ti.png","tlc.png","trc.png","v.png"]}}}},"dirt":{"options":{"property":{"image":{"name":["bi.png","blc.png","brc.png","fi.png","h.png","li.png","ri.png","ti.png","tlc.png","trc.png","v.png"]}}}},"stone":{"options":{"property":{"image":{"name":["bi.png","blc.png","brc.png","fi.png","h.png","li.png","ri.png","ti.png","tlc.png","trc.png","v.png"]}}}},"wood":{"options":{"property":{"image":{"name":["bi.png","blc.png","brc.png","fi.png","h.png","li.png","ri.png","ti.png","tlc.png","trc.png","v.png"]}}}}},"stair":{"options":{"property":{"image":{"name":["d.png","u.png"]}}}},"tree":{"options":{"traverse":{"foot":{"cost":[-100,100,1]},"steed":{"cost":[-100,100,100]},"vehicle":{"cost":[-100,100,100]},"boat":{"cost":[-100,100,100]},"spaceship":{"cost":[-100,100,100]}}},"conifer":{"options":{"property":{"image":{"name":["1.png","2.png","3.png"]}}}},"palm":{"options":{"property":{"image":{"name":["1.png","2.png"]}}}},"pine":{"options":{"property":{"image":{"name":["1.png","2.png"]}}}}}},"space":{"planets":{"options":{"property":{"image":{"name":["c1.png","e1.png","Eris1.png","j1.png","luna1.png","m1.png","mars1.png","n1.png","p1.png","sat1.png","sol1.png","u1.png","v1.png"]}}}}}}};if (typeof exports != "undefined") {module.exports = RPG;}