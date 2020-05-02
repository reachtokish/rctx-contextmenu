import React from 'react';
import { CSSTransition } from 'react-transition-group';

const AnimateComponent = ({
  children, isVisible, timeout, className
}) => (
  <CSSTransition
    in={isVisible}
    timeout={timeout}
    classNames={className}
    unmountOnExit
  >
    {children}
  </CSSTransition>
);

export default AnimateComponent;
