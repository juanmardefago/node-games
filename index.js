#!/usr/bin/env node

var game = process.argv[2];
var language = process.argv[3];
var supportedLanguages = ['en', 'es'];

if(!(language && supportedLanguages.includes(language))) {
  console.log("Defaulting to english language.")
  language = 'en';
} else {
  console.log("Language selected: " + language)
}

if (!game) {
  console.log('usage: node-games <game> [language]');
  console.log('');
  console.log('Games');
  console.log('- spacecraft');
  console.log('- snake');
  console.log('- tanks');
  console.log('');
  console.log('Languages');
  console.log('- en (English - default)');
  console.log('- es (Spanish)');
  return;
}

require('babel-polyfill');

require(__dirname + '/build/strings/' + language);

require(__dirname + '/build/' + game);
