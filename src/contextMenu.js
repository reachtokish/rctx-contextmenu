import React, {
  useRef, useEffect, useState, useCallback
} from 'react';
import ReactDOM from 'react-dom';
// import { debounce } from 'lodash';
import { registerEvent, callHideEvent } from './registerEvent';
import { debounce } from './helper';

function ContextMenu({
  children, id, appendTo, hideOnLeave, onMouseLeave, onHide, onShow, preventHideOnScroll,
  preventHideOnResize
}) {
  const contextMenuEl = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const showMenu = e => {
    const { position: { clientX, clientY } } = e;

    setVisible(true);
    contextMenuEl.current.style.top = `${clientY + 2}px`;
    contextMenuEl.current.style.left = `${clientX + 2}px`;

    if (onShow) onShow();
  };

  const hideMenu = () => {
    setVisible(false);
    if (onHide) onHide();
  };

  const handleMouseLeave = useCallback(e => {
    e.preventDefault();

    onMouseLeave(e);

    if (hideOnLeave) callHideEvent();
  });

  useEffect(() => {
    registerEvent(id, showMenu, hideMenu);

    // detect click outside
    document.addEventListener('mousedown', event => {
      if (contextMenuEl.current && !contextMenuEl.current.contains(event.target)) {
        callHideEvent();
      }
    });

    // detect right click outside
    document.addEventListener('contextmenu', evt => {
      let targetElement = evt.target;

      do {
        if (targetElement.classList && targetElement.classList.contains('menu-trigger')) {
          return;
        }
        targetElement = targetElement.parentNode;
      }
      while (targetElement);

      callHideEvent();
    });

    // on scroll hide handled
    if (!preventHideOnScroll) {
      window.addEventListener('scroll', debounce(() => {
        callHideEvent();
      }, 100, true));
    }

    // on resize hide handled
    if (!preventHideOnResize) {
      window.addEventListener('resize', debounce(() => {
        callHideEvent();
      }, 1000, {
        leading: true
      }));
    }
  }, []);

  const childrenWithProps = React.Children
    .map(children, child => React.cloneElement(child, { id }));

  const Component = () => (
    <>
      {isVisible && (
        <div
          className="contextmenu"
          ref={contextMenuEl}
          onMouseLeave={handleMouseLeave}
        >
          {childrenWithProps}
        </div>
      )}
    </>
  );

  if (appendTo) {
    return ReactDOM.createPortal(
      <Component />,
      appendTo
    );
  }

  return <Component />;
}

export default ContextMenu;

ContextMenu.defaultProps = {
  appendTo: null,
  hideOnLeave: false,
  preventHideOnResize: false,
  preventHideOnScroll: false,
  onMouseLeave: () => null,
  onHide: () => null,
  onShow: () => null
};
