// Global Variables
//  ============================================
// Arrays and Variables for initiating Data
var winCount = $('#wins');
var lossCount = $('#loss');
var randomNumID = $('#randomNum');
var playerNum = $('#playerNum');

var airElement = $('#air');
var earthElement = $('#earth');
var waterElement = $('#water');
var fireElement = $('#fire');

// Counters
winsCount = 0;
lossCount = 0;
playerNum = 0;

// Random
airElement = Math.floor(Math.random()* 12) + 1;
earthElement = Math.floor(Math.random()* 12) + 1;
waterElement = Math.floor(Math.random()* 12) + 1;
fireElement = Math.floor(Math.random()* 12) + 1;

randomNumID = randomNum;
var randomNum = Math.floor(Math.random() * 120) + 19;

console.log(airElement, earthElement, waterElement, fireElement, randomNum);
// Functions
//  ============================================

function init() {
    $('#randomNum').text(randomNumID);
    $('#airElement').on('click');
    $('#earthElement').on('click');
    $('#waterElement').on('click');
    $('#fireElement').on('click');
}
console.log(randomNumID)
init()
// Main Process
//  ============================================

