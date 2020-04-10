import React, { useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { throttle } from 'lodash';
import { registerCallback } from './registerEvent';
import { trigger, MENU_HIDE } from './trigger';

function ContextMenu({
  children, id, appendTo, hideOnLeave, onMouseLeave, preventHideOnResize, preventHideOnScroll
}) {
  const contextMenuEl = useRef(null);

  const handleMouseLeave = useCallback(e => {
    onMouseLeave(e);

    if (hideOnLeave) {
      const opts = {
        position: null,
        targetElem: null,
        id
      };

      trigger(MENU_HIDE, opts);
    }
  });

  const showMenu = e => {
    const { detail: { position: { clientX, clientY }, id: triggerId } } = e;

    contextMenuEl.current.style.display = 'none';
    if (triggerId === id) {
      contextMenuEl.current.style.display = 'block';
      contextMenuEl.current.style.top = `${clientY + 2}px`;
      contextMenuEl.current.style.left = `${clientX + 2}px`;
    }
  };

  const hideMenu = () => {
    contextMenuEl.current.style.display = 'none';
  };

  registerCallback(showMenu, hideMenu);

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

      const opts = {
        position: null,
        targetElem: null,
        id
      };

      trigger(MENU_HIDE, opts);
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

      const opts = {
        position: null,
        targetElem: null,
        id
      };

      trigger(MENU_HIDE, opts);
    });

    // hide on scroll
    if (!preventHideOnScroll) {
      window.addEventListener('scroll', throttle(() => {
        const opts = {
          position: null,
          targetElem: null,
          id
        };

        trigger(MENU_HIDE, opts);
      }, 1000, {
        leading: true
      }));
    }

    // hide on resize
    if (!preventHideOnResize) {
      window.addEventListener('resize', throttle(() => {
        const opts = {
          position: null,
          targetElem: null,
          id
        };

        trigger(MENU_HIDE, opts);
      }, 1000, {
        leading: true
      }));
    }

    return () => {
      document.removeEventListener('click');
      document.removeEventListener('contextmenu');
      window.removeEventListener('scroll');
      window.removeEventListener('resize');
    }
  });

  const childrenWithProps = React.Children
    .map(children, child => React.cloneElement(child, { id }));

  const Component = () => (
    <div
      className="contextmenu"
      ref={contextMenuEl}
      onMouseLeave={handleMouseLeave}
    >
      {childrenWithProps}
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
  onHide: () => null
};
