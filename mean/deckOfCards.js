// Assignment: Deck of Cards
// Create a Card class. A card should have the following functionality:

// Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
// Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
// Each Card should have a numerical value (1-13)
// Each Card should have a show method (log the card's information to the console)

class Card {                            //"class" indicates that we are building an object (aka constructing a class)
    constructor(suit, name, value){     //"constructor is a blue print"
        this.suit = suit;                      
        this.name = name;
        this.value = value;
    }
    show(){
        console.log(`${this.name} of ${this.suit}`);
    }
}

//test
// let Unicorn = new Card("Uni", "five", "5")
// Unicorn.show();

// Create a Deck class. A deck should have the following functionality:

class Deck {
    constructor(){
        this.cards = this.reset();
        this.shuffle();
        this.shuffle();
        this.shuffle();
        this.shuffle();
    }
    reset(){
        let result = [];
        ["Spades", "Clubs", "Hearts", "Diamonds"].forEach(suitElement => {
            ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"].forEach((cardElement, index) => {
                result.push(new Card(suitElement, cardElement, index + 1))
            })
        });
        return result
    }
    shuffle(){
        for(let i = 51; i > 0; i--){
            let randomizedDeck = Math.floor(Math.random() * i);
            let temp = this.cards[randomizedDeck];
            this.cards[randomizedDeck] = this.cards[i];
            this.cards[i] = temp;
        }
    }
    deal(){
        return this.cards.pop();
    }
}

let deck = new Deck()
//console.log(deck)
//console.log(deck.cards)
// console.log(deck.deal());
// console.log(deck.deal());
// console.log(deck.deal());
// console.log(deck.deal());
// console.log(deck.deal());

// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();
// deck.deal();


// console.log(deck)

// The Deck should contain the 52 standard Cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random Card
// Deal should return the Card that was dealt and remove it from the Deck

// Now create a Player class. A Player should have the following functionality:

// The Player should have a name
// The Player should have a hand (an array of cards taken from a Deck)
// The Player should be able to take a Card (use the deck.deal method)
// The Player should be able to discard a Card

class Player{
    constructor(name, deck = new Deck()){
        this.name = name;
        this.hand = [];
        let num = 5;
        while(num -- > 0){
            this.deal(deck);
        }
    }
    deal(deck){
        this.hand.push(deck.deal());
    }
    discard(){
        return this.hand.pop();
    }
}

newPlayer = new Player("Charlie");
console.log(newPlayer);

newPlayer.discard();
newPlayer.discard();
newPlayer.discard();

console.log(newPlayer)

newPlayer.deal();
newPlayer.deal();
newPlayer.deal();