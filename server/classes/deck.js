//generate a deck of the cards class based of of stored info (not sure how yet...)
let cardList = require('./../../tempCardList.json');
const {Card, CreatureCard} = require('./card.js');

class Deck {
  constructor(cardArray, name, id){
    this.cardArray = cardArray,
    this.name = name,
    this.id = id,
    this.deckList = []
  }

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
        producedCard = new CreatureCard(card.name, card.art, card.type, card.id, card.attack, card.defence, card.keywords, card.abilities)
      } else if(card.type === 'action'){
        //do thing TODO
        producedCard = 'there was an issue';
      }
    }

    return producedCard;
  }
}

//tests
const myCardIds = [
  ['001',4],
  ['001',5]
]
const myDeck = new Deck(myCardIds, 'coolDeck', '002')
myDeck.genDeck();
console.log(myDeck.deckList)

module.exports = {
  Deck
}
