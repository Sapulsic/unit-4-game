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

// console.log($fireElement)

var random = Math.floor(Math.random() * 120) + 19;

console.log(airRandom, earthRandom, waterRandom, fireRandom, random);
// Functions
//  ============================================
$(document).ready(function (){

    
    function init() {
        debugger;
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
        
        
        
        // Testing / Debugging
        // console.log($);
    }
    // Main Process
    //  ============================================
    init()



});