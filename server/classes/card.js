class Card {
  constructor(name, art, type, id, owner){
    this.type = type; //string
    this.name = name; //string
    this.art = art; //sting
    this.id = id; //sting
    this.owner = owner;
    this.hideOwner = true;
    this.hideOpponent = true
  }

  revealOwner(){
    this.hideOwner = false;
  }

  revealOpponent(){
    this.hideOpponent = false;
  }


}

class CreatureCard extends Card {
  constructor(name, art, type, id, owner, attack, defence, keywords, abilities){
    super(name, art, type, id, owner);
    this.attack = attack; //number
    this.tempAttack = attack;
    this.defence = defence; //number
    this.tempDefense = defence;
    this.keywords = keywords; //array of strings
    this.abilities = abilities; //array of promises?
  }

  tempBoost(attack, defence){
    this.tempAttack = attack;
    this.tempDefense = defence;
  }

  permBoost(attack, defence){
    this.attack = attack;
    this.defence = defence;
  }

  resetStats(){
    this.tempAttack = this.attack;
    this.tempDefense = this.defence;
  }

}

class ActionCard extends Card {
  constructor(name, art, type, id, owner, abilities){
    super(name, art, type, id, owner);
    this.abilities = abilities;
  }
}

 module.exports = {
   Card,
   CreatureCard,
   ActionCard
 }
