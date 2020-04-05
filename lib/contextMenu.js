import React, { useRef, useEffect } from 'react';
import registerEvent from './registerEvent';

function ContextMenu({ children, id }) {
  const contextMenuEl = useRef(null);

  // const showMenu = (clientY, clientX) => {
  //   contextMenuEl.current.style.display = 'block';
  //   contextMenuEl.current.style.top = `${clientY + 2}px`;
  //   contextMenuEl.current.style.left = `${clientX + 2}px`;
  // };

  // const hideMenu = () => {
  //   contextMenuEl.current.style.display = 'none';
  // };

  // window.contextMenus = {
  //   ...window.contextMenus,
  //   [id]: {
  //     showMenu,
  //     hideMenu
  //   }
  // };

  registerEvent(id, contextMenuEl);

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
  });

  return (
    <div id={`${id}-menu`} className="contextmenu" ref={contextMenuEl}>
      {children}
    </div>
  );
}

export default ContextMenu;
