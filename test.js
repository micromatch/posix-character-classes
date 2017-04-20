'use strict';

require('mocha');
var assert = require('assert');
var posix = require('./');

describe('posix-character-classes', function() {
  it('should export an object', function() {
    assert(posix);
    assert.equal(typeof posix, 'object');
  });

  it('should compile to regex character classes', function() {
    Object.keys(posix).forEach(function(key) {
      assert.doesNotThrow(function() {
        new RegExp('[' + posix[key] + ']');
      });
    });
  });
});
