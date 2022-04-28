// Copyright (c) 2022 Marcus Wehbi All rights reserved
// Created by: Marcus Wehbi
// Created on: April 2022
// This file contains the JS functions for index.html
"use strict"

// This function converts Degrees to Radians.
function convertDegToRad() {
    // get user input (degree)
    let degree = parseFloat(document.getElementById('deg').value)
    // define variable (radian) with formula
    let radian = degree * Math.PI / 180


    if (degree > 0 && degree < 90) {
        // display the results if an acute angle
        document.getElementById('radRes').innerHTML = "The angle in radians is " + radian.toFixed(2) + " and it is an acute angle."
    } else if (degree == 90) {
        // display the results if right angle
        document.getElementById('radRes').innerHTML = "The angle in radians is " + radian.toFixed(2) + " and it is a right angle."
    } else if (degree > 90 && degree < 180) {
        // display the results if obtuse angle
        document.getElementById('radRes').innerHTML = "The angle in radians is " + radian.toFixed(2) + " and it is an obtuse angle."
    } else if (degree == 180) {
        // display the results if straight line
        document.getElementById('radRes').innerHTML = "The angle in radians is " + radian.toFixed(2) + " and it is a straight angle."
    } else if (degree > 180 && degree < 361) {
        // display the results if reflex angle
        document.getElementById('radRes').innerHTML = "The angle in radians is " + radian.toFixed(2) + " and it is a reflex angle."
    } else {

    }

}


// This function converts radians to gradians.
function convertRadToGrad() {
    // get user input
    let Radian = parseFloat(document.getElementById('rad').value)


    // define variable (gradian) with formula
    let gradian = Radian * 200 / Math.PI


    if (gradian > 0 && gradian < 100) {
        // display the results if an acute angle
        document.getElementById('gradRes').innerHTML = "The angle in gradians is " + gradian.toFixed(2) + " and is an acute angle."

    } else if (gradian == 100) {
        // display the results if right angle
        document.getElementById('gradRes').innerHTML = "The angle in gradians is " + gradian.toFixed(2) + " and is a right angle."

    } else if (gradian > 100 && gradian < 200) {
        // display the results if obtuse angle
        document.getElementById('gradRes').innerHTML = "The angle in gradians is " + gradian.toFixed(2) + " and is an obtuse angle."

    } else if (gradian == 200) {
        // display the results if straight angle
        document.getElementById('gradRes').innerHTML = "The angle in gradians is " + gradian.toFixed(2) + " and is a straight angle."

    } else if (gradian > 200 && gradian < 401) {
        // display the results if reflex angle
        document.getElementById('gradRes').innerHTML = "The angle in gradians is " + gradian.toFixed(2) + " and is a reflex angle."

    } else {

    }

}