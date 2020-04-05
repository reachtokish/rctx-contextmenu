import React, { useEffect, useRef } from 'react';

function ContextMenuTrigger({ children, id }) {
  const menuTrigger = useRef(null);

  useEffect(() => {
    menuTrigger.current.addEventListener('contextmenu', e => {
      e.preventDefault();

      Object.keys(window.contextMenus).forEach(contextMenu => {
        window.contextMenus[contextMenu].hideMenu();
      });

      window.contextMenus[id].showMenu(e.clientY, e.clientX);
    }, false);

    return () => {
      document.removeEventListener('click');
      menuTrigger.current.removeEventListener('contextmenu');
      document.removeEventListener('contextmenu');
    };
  }, []);

  return (
    <div className="menu-trigger" ref={menuTrigger}>{children}</div>
  );
}

export default ContextMenuTrigger;
