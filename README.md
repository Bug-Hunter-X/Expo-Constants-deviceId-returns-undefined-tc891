# Expo Constants.deviceId Returns Undefined

This repository demonstrates a common issue when using `Constants.deviceId` in Expo and provides a solution using the `useEffect` hook.

## Problem

Accessing `Constants.deviceId` too early in a component's lifecycle may result in an undefined value, leading to errors or unexpected behavior. This is because the device ID is retrieved asynchronously. 

## Solution

The provided solution utilizes the `useEffect` hook to access `Constants.deviceId` only after the component has mounted and the ID is available. The ID is fetched once, and it's subsequently accessible in the component. 

## Setup

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Start the Expo development server using `expo start`.