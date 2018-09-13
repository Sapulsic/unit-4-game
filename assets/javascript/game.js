// Global Variables
//  ============================================
// Arrays and Variables for initiating Data
var $wins = $('#wins');
var $loss = $('#loss');
var $randomNum = $('#randomNum');
var $playerNum = $('#playerNum');
var $startGame = $('#startGame');
var $winCount = $('winCount');

var $airElement = $('#air');
var $earthElement = $('#earth');
var $waterElement = $('#water');
var $fireElement = $('#fire');

// Counters
var winCounter = 0;
var lossCounter = 0;
var playerNumCount = 0;

// Random
var airRandom = Math.floor(Math.random()* 12) + 1;
var earthRandom = Math.floor(Math.random()* 12) + 1;
var waterRandom = Math.floor(Math.random()* 12) + 1;
var fireRandom = Math.floor(Math.random()* 12) + 1;

// console.log($fireElement)

var random = Math.floor(Math.random() * 120) + 19;

console.log(airRandom, earthRandom, waterRandom, fireRandom);
// Functions
//  ============================================
$(document).ready(function (){

    
    function init() {
        // debugger;
        $('#air').on('click', function() {
            playerNumCount += airRandom;
            $('#playerNum').text(playerNumCount); 
        });
        
        $('#earth').on('click', function() {
            playerNumCount += earthRandom;
            $('#playerNum').html(playerNumCount);
        });
        
        $('#water').on('click', function() {
            playerNumCount += waterRandom;
            $('#playerNum').html(playerNumCount);
        });
        
        $('#fire').on('click', function() {
            playerNumCount += fireRandom;
            $('#playerNum').html(playerNumCount);
        });

        $('#startGame').on('click', function() {
            $('#randomNum').text(random);
            gameStart();
        });
    }
    
    function gameStart() {
        // debugger;
        // var random = Math.floor(Math.random() * 120) + 19;
        // $('#startGame').on('click', function() {
        //     $('#randomNum').text(random);
        //     // init()
        // })

        if(playerNumCount == random) {
            winCounter++;
            $('#wins').text('You Win!');
            $('#winCount').text('Wins: ' + winCounter);
            newGame();
        }
        else if(playerNumCount > random) {
            lossCounter++;
            $('#loss').text('You Lost!');
            $('#lossCount').text('Losses: ' + lossCounter);
            newGame()
        };
    }
    
    // function newGame() {
    //     playerNumCount = 0;

    //     airRandom = Math.floor(Math.random()* 12) + 1;
    //     earthRandom = Math.floor(Math.random()* 12) + 1;
    //     waterRandom = Math.floor(Math.random()* 12) + 1;
    //     fireRandom = Math.floor(Math.random()* 12) + 1;

    //     random = Math.floor(Math.random() * 120) + 19;
        
    // };
    
    // Testing / Debugging
    // console.log(airRandom, earthRandom, waterRandom, fireRandom, random);

    // Main Process
    //  ============================================
    init()
    // gameStart()


});