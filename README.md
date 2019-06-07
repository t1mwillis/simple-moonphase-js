# simple-moonphase-js

[![npm](https://img.shields.io/npm/v/@t1mwillis/simple-moonphase-js.svg)](https://github.com/t1mwillis/simple-moonphase-js)

A simple tool to calculate the phase of the moon given a date.

## Install

```
$ npm install @t1mwillis/simple-moonphase-js
```

## Usage

```js
const moonPhase = require("@t1mwillis/simple-moonphase-js");

const date = new Date('June 07, 2019');

moonPhase(date);
//=> "Waxing Crescent"

moonPhase(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:3:41)
//    at <anonymous>:1:1
```
