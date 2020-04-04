/*
info {
  commander: Commander(class),
  units: num,
  schemes: Card(class)
}
*/
class Field {
 constructor(terrain, p1Info, p2Info){
   this.terrain = terrain;
   this.actions = [];
   this.p1Info = new PlayerInfo(p1Info);
   this.p2Info = new PlayerInfo(p2Info);
   this.neighbors = [];
 }

 updateTerrain(newTerrain){
   this.terrain = newTerrain;
 }
}

class PlayerInfo {
  constructor(info){
    this.commander = info.commander;
    this.units = info.units;
    this.schemes = info.schemes;
  }
}



module.exports = {
  Field
}
