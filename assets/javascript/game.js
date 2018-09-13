// Global Variables
//  ============================================
// Arrays and Variables for initiating Data
var $wins = $('#wins');
var $loss = $('#loss');
var $randomNum = $('#randomNum');
var $playerNum = $('#playerNum');

var $airElement = $('#air');
var $earthElement = $('#earth');
var $waterElement = $('#water');
var $fireElement = $('#fire');

// Counters
var winCount = 0;
var lossCount = 0;
var playerNumCount = 0;

// Random
var airRandom = Math.floor(Math.random()* 12) + 1;
var earthRandom = Math.floor(Math.random()* 12) + 1;
var waterRandom = Math.floor(Math.random()* 12) + 1;
var fireRandom = Math.floor(Math.random()* 12) + 1;

console.log($fireElement)

var random = Math.floor(Math.random() * 120) + 19;

console.log(airRandom, earthRandom, waterRandom, fireRandom, random);
// Functions
//  ============================================

function init() {
    $('#airElement').on('click','img', function() {
        playerNumCount += airRandom;
        $('playerNum').html(playerNumCount);
    });



    // Testing / Debugging
    // console.log($);
}
// Main Process
//  ============================================
init()