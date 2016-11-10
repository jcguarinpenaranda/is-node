let isNode = require('../index');
let assert = require('assert');
let is = require('is');

describe('Is Node', function(){

  it('should be a function', function(){
    assert.ok(is.function(isNode));
  })

  it('should say it is node', function(){
    assert.ok(isNode());
  })

})