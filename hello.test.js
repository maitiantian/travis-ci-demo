'use strict';

var expect = require('chai').expect;
var hello = require('./hello');

describe('run hello.js', function() {
  it('should return "Hello maitiantian"', function() {
    expect(hello()).to.equal('Hello maitiantian');
  });
});
