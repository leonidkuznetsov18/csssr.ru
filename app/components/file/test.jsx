/* eslint-disable */

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import File from 'components/file';

describe('file component', () => {
  it('renders without problems', () => {
    const file = TestUtils.renderIntoDocument(<File type='psd' />).render();
    file.should.to.exist;
  });

  it('should add default class', () => {
    const file = TestUtils.renderIntoDocument(<File type='psd' />).render();
    file.props.should.have.property('className').and.contain('file');
  });

  it('should render link if passed required props', () => {
    const testLink = '/testlink';
    const testText = 'testText'
    const file = TestUtils.renderIntoDocument(<File type='psd' filename={testText} link={testLink} />).render();
    file.props.children.should.contain.a.thing.with.property('type', 'a');
    file.props.children.should.contain.a.thing.with.deep.property('props.href', testLink);
    file.props.children.should.contain.a.thing.with.deep.property('props.children', testText);
  });

  it('should not render link if not passed required props', () => {
    const fileWithName = TestUtils.renderIntoDocument(<File type='psd' filename='test' />).render();
    fileWithName.props.children.should.not.contain.a.thing.with.property('type', 'a');

    const fileWithLink = TestUtils.renderIntoDocument(<File type='psd' link='/testlink' />).render();
    fileWithLink.props.children.should.not.contain.a.thing.with.property('type', 'a');
  });
});
