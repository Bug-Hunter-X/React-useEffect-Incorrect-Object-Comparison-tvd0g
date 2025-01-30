# React useEffect Incorrect Object Comparison

This repository demonstrates a common error in React's `useEffect` hook when dealing with object comparisons.  The provided `bug.js` file showcases the incorrect implementation, leading to potential infinite loops or missed updates.  `bugSolution.js` provides the corrected implementation.

## Problem
The original code attempts to compare objects directly using the strict equality (`!==`) operator within the `useEffect` dependency array.  This comparison fails to detect changes within the object itself, only identifying changes in object reference.

## Solution
The solution uses a deep comparison library or a custom deep comparison function to reliably detect changes within the object's properties.  This ensures the `useEffect` hook fires only when necessary changes occur.

## How to Run
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npm start`.