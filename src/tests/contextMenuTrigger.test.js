import React from 'react';
import { shallow, mount } from 'enzyme';
import ContextMenuTrigger from '../contextMenuTrigger';

const ChildComponent = () => <div className="box">Right click on me</div>;

const setup = (props = {}) => {
  const component = shallow(
    <ContextMenuTrigger id="context-menu-1" {...props}>
      <ChildComponent />
    </ContextMenuTrigger>
  );

  return component;
};

describe('<ContextMenuTrigger /> Test', () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it('Should create a element with menu-trigger class', () => {
    const wrapper = component.find('.menu-trigger');
    expect(wrapper.length).toBe(1);
  });

  it('Div element should present inside <ContextMenuTrigger /> component', () => {
    const mountedComponent = mount(
      <ContextMenuTrigger>
        <ChildComponent />
      </ContextMenuTrigger>
    );

    const findDom = mountedComponent.find('.box');
    expect(findDom.length).toBe(1);
  });

  it('Should accept attributes', () => {
    component = setup({ attributes: { 'aria-label': 'Trigger' } });
    expect(component.find('.menu-trigger').prop('aria-label')).toBe('Trigger');
  });

  it('Should defaultProps disable defined', () => {
    expect(ContextMenuTrigger.defaultProps.disable).toBeDefined();
  });
});
