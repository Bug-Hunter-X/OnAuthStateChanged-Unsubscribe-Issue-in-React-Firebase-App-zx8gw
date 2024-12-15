# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener in React applications.  The problem arises when the unsubscribe function isn't properly called, leading to persistent listeners even after the component is unmounted. This can result in memory leaks and unexpected behavior.

## Problem Description

The `onAuthStateChanged` listener remains active even after the component where it's used is unmounted. This is because the unsubscribe function returned by `onAuthStateChanged` isn't invoked.

## Solution

The solution involves ensuring the unsubscribe function is called when the component unmounts using a cleanup function within a React effect. This guarantees that the listener is detached, preventing memory leaks and ensuring correct behavior.

## How to reproduce

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the app using `npm start`.
4. Observe the console logs to see that the listener continues to trigger even after navigating away from the authentication-related page.

## How to fix

Refer to the `bugSolution.js` for the corrected code.