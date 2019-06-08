const assert = require('assert');
const customArray = require('../lib/customArray')


describe('customArray', () => {
    describe('intialize class', () => {
      it('should intialize array with 5 ones length', () => {
          var arr= new customArray(5,1);
        assert.equal(arr.length,5); 
      });
      it('should intialize array with 5 ones => valueat any index', () => {
          var arr= new customArray(5,1);
          assert.equal(arr[0],1); 
      });
    });
  });

  describe('intialize method', () => {
    it('calling initalize method', () => {
        var arr= new customArray(5);
        arr.initialize(1);
        assert.equal(arr[0],1); 
    });
  });

  describe('extend method', () => {
    it('calling extend method', () => {
        var arr= new customArray(5);
        arr.extend(10);
        assert.equal(arr.length,10); 
    });
  });

  describe('reduceSize method', () => {
    it('calling reduceSize method', () => {
        var arr= new customArray(5);
        arr.reduceSize(3);
        assert.equal(arr.length,3); 
    });
  });