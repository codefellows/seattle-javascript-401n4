'use strict';

const util = require('util');
const LL = require('./lib/linked-list');

let ll1 = new LL();
ll1.append('one');
ll1.append('two');
ll1.append('three');
ll1.append('four');
ll1.append('five');

ll1.print();
console.log('break!!!!!!\n\n')
ll1.remove(2);
ll1.print();

var four = ll1.find('four');
console.log(four);

var ll2 = new LL(four);
ll2.print();
