/* eslint-disable */

import React from 'react/addons';
import TestUtils from 'react/lib/ReactTestUtils';
import FormGroupFile from 'components/form-group-file';
import FormGroup from 'components/form-group';
import _ from 'lodash';

var $R = require('rquery')(_, React);

describe('Input', () => {
  it('renders without problems', () => {
    const formGroupFile = TestUtils.renderIntoDocument(
      <FormGroupFile
        itemId='testId'
        itemName='testName'
        label='testLabel'
      />
    ).render();
    formGroupFile.should.to.exist;
  });

  it('should add default class', () => {
    const formGroupFile = TestUtils.renderIntoDocument(
      <FormGroupFile
        itemId='testId'
        itemName='testName'
        label='testLabel'
      />
    ).render();
    formGroupFile.props
      .should.have.property('className')
        .which.contain('form-group-file__wrapper');
  });

  it('should combine classes', () => {
    const formGroupFile = TestUtils.renderIntoDocument(
      <FormGroupFile
        itemId='testId'
        itemName='testName'
        label='testLabel'
        className='test'
      />
    ).render();
    formGroupFile.props
      .should.have.property('className')
        .which.contain('test');
  });

  it('should render input[type=file]', () => {
    const formGroupFile = TestUtils.renderIntoDocument(
      <FormGroupFile
        itemId='testId'
        itemName='testName'
        label='testLabel'
      />
    ).render();
    formGroupFile.props.children
      .should.contain.a.thing.with.property('type', 'input')
      .and.contain.a.thing.with.deep.property('props.type', 'file')
  });

  it('should render warning if prop showWarning = true', () => {
    const formGroupFile = TestUtils.renderIntoDocument(
      <FormGroupFile
        itemId='testId'
        itemName='testName'
        label='testLabel'
        showWarning={true}
      />
    ).render();
    formGroupFile.props.children
      .should.contain.a.thing
        .with.deep.property('props.className', 'form-group-file__warning')
  });
});
