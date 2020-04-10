import React, { useEffect, useRef } from 'react';
import { MENU_SHOW, trigger } from './trigger';

function ContextMenuTrigger({
  children, id, attributes, disable, renderTag, disableIfShiftIsPressed
}) {
  const menuTrigger = useRef(null);

  useEffect(() => {
    if (!disable) {
      menuTrigger.current.addEventListener('contextmenu', e => {
        e.preventDefault();

        const { clientX, clientY } = e;

        if (disableIfShiftIsPressed && e.shiftKey) return;

        const opts = {
          position: {
            clientY,
            clientX
          },
          targetElem: e.target,
          id
        };

        trigger(MENU_SHOW, opts);
      }, false);
    }

    return () => {
      menuTrigger.current.removeEventListener('contextmenu');
    };
  }, []);

  return React.createElement(
    renderTag,
    {
      className: 'menu-trigger',
      ref: menuTrigger,
      ...attributes
    },
    children
  );
}

export default ContextMenuTrigger;

ContextMenuTrigger.defaultProps = {
  attributes: {},
  disable: false,
  renderTag: 'div',
  disableIfShiftIsPressed: false
};
