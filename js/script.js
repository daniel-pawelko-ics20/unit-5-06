// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"



// Defining function that actives when user presses "calculate" Button
function userInputClick() {
  // Store input/requirements in variables
  const first = parseInt(document.getElementById("number1-entered").value)
  const second = parseInt(document.getElementById("number2-entered").value)
  let counter = 0;
  let final = 0;

  // Performs calculation and output
  if (second < 0) {
    while (counter != second) {
      final += first
      counter--
    }
    final = final-final-final
    document.getElementById('output').innerHTML = "Mupltiplicaiton: " + first + "x" + second + "=" + final 
    console.log(final)
  } else {
    while (counter != second) {
      final += first
      counter++
    }
    document.getElementById('output').innerHTML = "Mupltiplicaiton: " + first + "x" + second + "=" + final 
    console.log(final)
  }
}