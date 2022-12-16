const { Schema, model } = require('mongoose');

// add ref to singleGame page. 
const gameSchema = new Schema(
    {
        gameName: {
            type: String,
            require: true,
        },
        date: {
            type: Date, 
            default: Date.now
        }, 

        time: {
            type: Date, 
            default: Date.now
        },

        sport: {
            type: String,
            required: true,
        }, 

        number_of_players: {
            type: Number, 
            min: 1, 
            max: 10
        },

        skill_level: {
            type: String,
            required: true,
        }, 

        location: {
            type: String,
            required: true,
        }, 

        gameCreator: {
            type: String,
            required: true,
        },
        
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
          },
    }, 
     
);

const Game = model('Game', gameSchema);

module.exports = Game;