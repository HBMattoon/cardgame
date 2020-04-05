//generate a deck of the cards class based of of stored info (not sure how yet...)
let cardList = require('./../../tempCardList.json');
const {Card, CreatureCard, ActionCard} = require('./card.js');

class Deck {
  constructor(name, id, owner){
    this.name = name,
    this.id = id,
    this.deckList = []
    this.owner = owner;
  }

  //TODO look into storing deck list in db, and get rid of cardArray and just use deck id

  genCardArray(deckId){
    return new Promise((res, err)=> {
      const cardArr = cardList[0].decksById[deckId];
      if(cardArr){
        res(cardArr)
      } else {
        err('deck does not exist')
      }
    });
  }


  //this looks super ugly, fix it
  genDeck(){

    return new Promise((res, err) => {
      this.genCardArray(this.id)
      .then(async(cardArr) => {
        const loop = async () => {
          for(let i = 0; i < cardArr.length; i++){
            for(let j = 0; j < cardArr[i][1]; j++){

              await this.verifyCardExists(cardArr[i][0])
              .then(card => this.cardFactory(card))
              .then(newCard => this.deckList.push(newCard))
              .catch(errMsg => {
                err('error 001: ', errMsg);
              })

            }
          }
        }
        await loop();
        res(this.deckList);
      })
      .catch(msg => {
        err('error 002: ', msg);
      })
    })
  }

  //TODO update once cards are stored in db
  verifyCardExists(cardId){
    return new Promise((res, err)=> {
      const cardObj = cardList[0].cardsById[cardId];
      //console.log(cardObj);
      if(cardObj){
        res(cardObj)
      } else {
        err('card does not exist')
      }
    });
  }

  cardFactory(card){
    return new Promise((res, err) => {
      let producedCard;
      if(card.type === 'creature'){
        producedCard = new CreatureCard(card.name, card.art, card.type, card.id, this.owner, card.attack, card.defence, card.keywords, card.abilities)
      } else if(card.type === 'action'){
        producedCard = new ActionCard(card.name, card.art, card.type, card.id, this.owner, card.abilities)
      } else {
        err('card Type Does Not Exist')
      }
      res(producedCard);
    });
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

// //test junk (delete later)
// const myCardIds = [
//   ['001',4],
//   ['002',5]
// ]
// const myDeck = new Deck('coolDeck', '002', "mr hen")
// myDeck.genDeck()
// .then(() => {
//   myDeck.shuffleDeck();
//   myDeck.logCards();
// })



module.exports = {
  Deck
}
