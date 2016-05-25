// __tests__/Contact-test.js
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import DetailView from '../modules/DetailView';

jest.unmock('../modules/DetailView');

describe('Detail view', () => {

  it('contains the name of the selected contact', () => {
    var stubbedParams = {
      firstName: "Ron"
    }
    var listRendered = TestUtils.renderIntoDocument(
      <DetailView params={stubbedParams}/>
    )
    var detailName = TestUtils.findRenderedDOMComponentWithClass(listRendered, "detailView__contactName");

    expect(detailName.textContent).toContain("Ron");
  });
});
