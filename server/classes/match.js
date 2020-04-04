const {Card, CreatureCard} = require('./card.js');
const {Deck} = require('./deck.js')

//playzone/game/match final name?

/**
  playerObjExample = {
    'name': string,
    'id': string,
    'deckId': string
  }
 */

 //phases -> draw, play, attack, response (special phase for adding cards in response to other cards being played)


class Match {
  constructor(playerOneObj, playerTwoObj){
    this.p1Name = playerOneObj.name;
    this.p1Id = playerOneObj.id;
    this.p1deck = playerOneObj.deckId;
    this.p2Name = playerTwoObj.name;
    this.p2Id = playerTwoObj.id;
    this.p2deck = playerTwoObj.deckId;
    //turn, phase
    this.playzone =
  }

}



