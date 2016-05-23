// __tests__/CheckboxWithLabel-test.js
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import detailView from '../modules/DetailView';

jest.unmock('../modules/DetailView');

describe('Detail view', () => {

  it('contains an unordered list', () => {
    // This places our component into our test to find off of
    TestUtils.renderIntoDocument(
      <ul/>
    )
    expect(TestUtils.isElement(<ul/>)).toBe(true);
  });




});
