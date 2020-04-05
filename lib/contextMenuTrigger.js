import React, { useEffect, useRef } from 'react';

function ContextMenuTrigger({
  children, id, attributes, disable, renderTag, disableIfShiftIsPressed
}) {
  const menuTrigger = useRef(null);

  useEffect(() => {
    if (!disable) {
      menuTrigger.current.addEventListener('contextmenu', e => {
        if (disableIfShiftIsPressed && e.shiftKey) return;

        e.preventDefault();

        Object.keys(window.contextMenus).forEach(contextMenu => {
          window.contextMenus[contextMenu].hideMenu();
        });

        window.contextMenus[id].showMenu(e.clientY, e.clientX);
      }, false);
    }

    return () => {
      document.removeEventListener('click');
      menuTrigger.current.removeEventListener('contextmenu');
      document.removeEventListener('contextmenu');
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
