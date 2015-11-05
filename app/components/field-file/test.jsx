/* eslint-disable */

import React from 'react/addons';
import TestUtils from 'react/lib/ReactTestUtils';
import FormGroupFile from 'components/form-group-file';
import FormGroup from 'components/form-group';
import $ from 'jquery';

let element;

describe('Input', () => {

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  })

  it('renders without problems', () => {
    const formGroupFile = TestUtils.renderIntoDocument(
      <FormGroupFile
        label='testLabel'
      />
    ).render();
    formGroupFile.should.to.exist;
  });

  it('should add default class', () => {
    const formGroupFile = TestUtils.renderIntoDocument(
      <FormGroupFile
        label='testLabel'
      />
    ).render();
    formGroupFile.props
      .should.have.property('className')
        .which.contain('form-group-file');
  });

  it('should combine classes', () => {
    const formGroupFile = TestUtils.renderIntoDocument(
      <FormGroupFile className='test' />
    ).render();
    formGroupFile.props
      .should.have.property('className')
        .which.contain('test', 'form-group-file');
  });

  it('should render input[type=file]', () => {
    React.render(<FormGroupFile />, element);
    $(element).find('input[type="file"]').should.have.length(1)
  });

  it('should render warning if prop isWrong = true', () => {
    const formGroupFile = TestUtils.renderIntoDocument(
      <FormGroupFile
        label='testLabel'
        isWrong={true}
      />
    ).render();
    formGroupFile.props.children
      .should.contain.a.thing
        .with.deep.property('props.className', 'form-group-file__warning')
  });
});
