/* global watchout, describe, it, expect, should */

describe('watchout()', function () {
  'use strict';

  it('appends an svg to the body', function () {
    expect($('svg').length).to.equal(1);
    expect($('circle').length).to.equal(5);
  });

  // Add more assertions here
});
