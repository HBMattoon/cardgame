//generate a deck of the cards class based of of stored info (not sure how yet...)
let cardList = require('./../../tempCardList.json');
const {Card, CreatureCard, ActionCard} = require('./card.js');

class Deck {
  constructor(cardArray, name, id, owner){
    this.cardArray = cardArray,
    this.name = name,
    this.id = id,
    this.deckList = []
    this.owner = owner;
  }

  //TODO look into storing deck list in db, and get rid of cardArray and just use deck id

  genDeck(){
    //card array will be array of touples, [[cardId, cardAmount]]
    const cards = this.cardArray;
    for(let x = 0; x < cards.length; x++){
      for(let y = 0; y < cards[x][1]; y++){
        let newCard = this.cardFactory(cards[x][0]);
        this.deckList.push(newCard);
      }
    }
  }

  //TODO update once cards are stored in db
  verifyCardExists(cardId){
    const card = cardList[0].cardsById[cardId];
    if(card){
      return card;
    } else {
      return undefined;
    }
  }

  cardFactory(cardId){
    const card = this.verifyCardExists(cardId)
    let producedCard;
    if(card){
      if(card.type === 'creature'){
        producedCard = new CreatureCard(card.name, card.art, card.type, card.id, this.owner, card.attack, card.defence, card.keywords, card.abilities)
      } else if(card.type === 'action'){
        producedCard = new ActionCard(card.name, card.art, card.type, card.id, this.owner, card.abilities)
      }
    } else {
      //TODO handle case: card does not exist
    }
    return producedCard;
  }

  //todo: research better shuffling methods
  shuffleDeck(){
    console.log('shuffling...\n');
    let myArr = this.deckList;
    let result = [];
    while(myArr.length > 0){
      let i = Math.floor(Math.random() * myArr.length)
      result.push(myArr[i]);
      myArr.splice(i, 1);
    }
    this.deckList = result

  }

  logCards(){
    this.deckList.map(card => {
      console.log(card.name);
    })
    console.log('\n')
  }

  draw(){
    return this.deckList.pop();
  }


}

//test junk (delete later)
const myCardIds = [
  ['001',4],
  ['002',5]
]
const myDeck = new Deck(myCardIds, 'coolDeck', '002', "mr hen")
myDeck.genDeck();
myDeck.logCards();
myDeck.shuffleDeck();
myDeck.logCards();
myDeck.draw();
myDeck.logCards();
//tests over

module.exports = {
  Deck
}
