import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { registerEvent, callHideEvent } from './registerEvent';
import AnimateComponent from './animateComponent';
import { throttle } from './helper';

function ContextMenu({
  children, id, appendTo, hideOnLeave, onMouseLeave, onHide, onShow, preventHideOnScroll,
  preventHideOnResize, attributes, className, animation
}) {
  const contextMenuEl = React.useRef(null);
  const [isVisible, setVisible] = React.useState(false);
  const [clientPosition, setClientPosition] = React.useState(null);

  const showMenu = e => {
    const { position } = e;

    setVisible(true);
    setClientPosition(position);
  };

  const hideMenu = () => {
    setVisible(false);
    if (onHide) onHide();
  };

  const handleMouseLeave = e => {
    e.preventDefault();

    onMouseLeave(e);

    if (hideOnLeave) callHideEvent(id);
  };

  const clickOutsideCallback = event => {
    if (contextMenuEl.current && !contextMenuEl.current.contains(event.target)) {
      callHideEvent(id);
    }
  };

  const contextMenuCallback = event => {
    let targetElement = event.target;

    do {
      if (targetElement.classList && targetElement.classList.contains('menu-trigger')) {
        return;
      }
      targetElement = targetElement.parentNode;
    }
    while (targetElement);

    callHideEvent(id);
  };

  const onScrollHideCallback = throttle(() => {
    callHideEvent(id);
  }, 200);

  const onResizeHideCallback = throttle(() => {
    callHideEvent(id);
  }, 200);

  React.useEffect(() => {
    registerEvent(id, showMenu, hideMenu);

    // detect click outside
    document.addEventListener('mousedown', clickOutsideCallback);

    // detect right click outside
    document.addEventListener('contextmenu', contextMenuCallback);

    // on scroll hide handled
    if (!preventHideOnScroll) {
      window.addEventListener('scroll', onScrollHideCallback);
    }

    // on resize hide handled
    if (!preventHideOnResize) {
      window.addEventListener('resize', onResizeHideCallback);
    }

    return () => {
      document.removeEventListener('mousedown', clickOutsideCallback);
      document.removeEventListener('contextmenu', contextMenuCallback);
      window.removeEventListener('scroll', onScrollHideCallback);
      window.removeEventListener('resize', onResizeHideCallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (isVisible) {
      const { clientY, clientX } = clientPosition;
      const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = window;
      const { offsetHeight: elemHeight, offsetWidth: elemWidth } = contextMenuEl.current;

      let newClientY = clientY;
      let newClientX = clientX;

      if (windowInnerHeight < clientY + elemHeight) newClientY = clientY - elemHeight;
      if (windowInnerWidth < clientX + elemWidth) newClientX = clientX - elemWidth;

      contextMenuEl.current.style.top = `${newClientY + 2}px`;
      contextMenuEl.current.style.left = `${newClientX + 2}px`;

      if (onShow) onShow();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, clientPosition]);

  const childrenWithProps = React.Children
    .map(children, child => React.cloneElement(child, { id }));

  const ContextComponent = () => (
    <div
      className={classnames('contextmenu', ...className.split(' '))}
      ref={contextMenuEl}
      onMouseLeave={handleMouseLeave}
      {...attributes}
    >
      {childrenWithProps}
    </div>
  );

  const PortalContextComponent = () => (
    ReactDOM.createPortal(
      <ContextComponent />,
      document.querySelector(appendTo)
    )
  );

  if (document.readyState === 'complete' && appendTo) {
    return animation ? (
      <AnimateComponent
        isVisible={isVisible}
        timeout={200}
        className={animation}
      >
        <PortalContextComponent />
      </AnimateComponent>
    ) : (
      <PortalContextComponent />
    );
  }

  return animation ? (
    <AnimateComponent
      isVisible={isVisible}
      timeout={200}
      className={animation}
    >
      <ContextComponent />
    </AnimateComponent>
  ) : <ContextComponent />;
}

export default ContextMenu;

ContextMenu.defaultProps = {
  appendTo: null,
  hideOnLeave: false,
  preventHideOnResize: false,
  preventHideOnScroll: false,
  attributes: {},
  className: '',
  animation: 'fade',
  onMouseLeave: () => null,
  onHide: () => null,
  onShow: () => null
};
