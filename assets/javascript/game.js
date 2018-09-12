// Global Variables
//  ============================================
// Arrays and Variables for initiating Data
var $winCount = $('#wins');
var $lossCount = $('#loss');
var $randomNum = $('#randomNum');
var $playerNum = $('#playerNum');

var $airElement = $('#air');
var $earthElement = $('#earth');
var $waterElement = $('#water');
var $fireElement = $('#fire');

// Counters
$winCount = 0;
$lossCount = 0;
$playerNum = 0;

// Random
$airElement = Math.floor(Math.random()* 12) + 1;
$earthElement = Math.floor(Math.random()* 12) + 1;
$waterElement = Math.floor(Math.random()* 12) + 1;
$fireElement = Math.floor(Math.random()* 12) + 1;

$randomNum = Math.floor(Math.random() * 120) + 19;

console.log($airElement, $earthElement, $waterElement, $fireElement, $randomNum);
// Functions
//  ============================================

function init() {
    $('#airElement').on('click','img', function() {
        $playerNum += $airElement;
        $('playerNum').html(playerNum);
    });

    $('#earthElement').on('click','img', function() {
        $playerNum += $earthElement;
        $('playerNum').html(playerNum);
    });

    $('#waterElement').on('click','img', function() {
        $playerNum += $waterElement;
        $('playerNum').html(playerNum);
    });

    $('#fireElement').on('click','img', function() {
        $playerNum += $fireElement;
        $('playerNum').html(playerNum);
    });

    // Testing / Debugging
    console.log($randomNum);
}
// Main Process
//  ============================================
init()