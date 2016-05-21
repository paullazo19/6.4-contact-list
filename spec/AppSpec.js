import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../modules/App';

jest.unmock('../modules/App');

describe('List View Spec', () => {
  it('contains hello text', () => {
    var appRendered = TestUtils.renderIntoDocument(
      <App/>
    );
    var heading = TestUtils.findRenderedDOMComponentWithClass(appRendered, "heading");
    expect(heading.textContent).toEqual("Hello!");
  });

  it('retrieves data from specific URL', () => {
    expect(listViewData).toEqual('http://api.randomuser.me/?format=json');
  });
})
