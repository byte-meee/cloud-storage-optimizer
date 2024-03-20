const cloud_storage_optimizer = require('cloud-storage-optimizer');
const cloud_safer_cli = require('cloud-safer-cli');
const axios = require('axios');
const bluebird = require('bluebird');
const request = require('request');
const xml2js = require('xml2js');
const sinon = require('sinon');
const moment = require('moment');
const jest = require('jest');
const web3 = require('web3');
const cheerio = require('cheerio');
const multer = require('multer');
const cors = require('cors');
const underscore = require('underscore');
const eslint = require('eslint');
const mocha = require('mocha');
const chalk = require('chalk');
const webpack = require('webpack');

const map = new Map();
map.set('foo', 'bar');
map.set('baz', 'qux');
console.log(`foo => ${map.get('foo')}`);

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));

const fs = require('fs');
fs.copyFile('source.txt', 'destination.txt', err => {
  if (err) throw err;
  console.log('File copied successfully');
});

const countOccurrences = (arr, val) => {
  return arr.reduce((acc, curr) => (curr === val ? acc + 1 : acc), 0);
};
console.log(countOccurrences([1, 2, 3, 4, 4, 4, 5], 4));

const zlib = require('zlib');
const input = 'Compress me!';
zlib.gzip(input, (err, buffer) => {
  if (!err) {
    console.log('Compressed data:', buffer.toString('base64'));
  }
});