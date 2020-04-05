import React, { useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { throttle } from 'lodash';
import registerEvent from './registerEvent';

function ContextMenu({
  children, id, appendTo, hideOnLeave, onMouseLeave, preventHideOnResize, preventHideOnScroll
}) {
  const contextMenuEl = useRef(null);

  registerEvent(id, contextMenuEl);

  const handleMouseLeave = useCallback(e => {
    onMouseLeave(e);
    if (hideOnLeave) {
      Object.keys(window.contextMenus).forEach(contextMenu => {
        window.contextMenus[contextMenu].hideMenu();
      });
    }
  });

  useEffect(() => {
    // detect click outside
    document.addEventListener('click', evt => {
      let targetElement = evt.target;

      do {
        if (targetElement === contextMenuEl.current) {
          return;
        }
        targetElement = targetElement.parentNode;
      }
      while (targetElement);

      contextMenuEl.current.style.display = 'none';
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

      contextMenuEl.current.style.display = 'none';
    });

    // hide on scroll
    if (!preventHideOnScroll) {
      window.addEventListener('scroll', throttle(() => {
        Object.keys(window.contextMenus).forEach(contextMenu => {
          window.contextMenus[contextMenu].hideMenu();
        });
      }, 1000, {
        leading: true
      }));
    }

    // hide on resize
    if (!preventHideOnResize) {
      window.addEventListener('resize', throttle(() => {
        Object.keys(window.contextMenus).forEach(contextMenu => {
          window.contextMenus[contextMenu].hideMenu();
        });
      }, 1000, {
        leading: true
      }));
    }
  });

  const Component = () => (
    <div
      className="contextmenu"
      ref={contextMenuEl}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
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
};
