import React, { useRef, useEffect, useState } from 'react';
import { registerCallback, hideCallback } from './registerEvent';

function ContextMenu({
  children, id
}) {
  const contextMenuEl = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const showMenu = e => {
    const { position: { clientX, clientY } } = e;

    setVisible(true);
    contextMenuEl.current.style.top = `${clientY + 2}px`;
    contextMenuEl.current.style.left = `${clientX + 2}px`;
  };

  const hideMenu = () => {
    setVisible(false);
  };

  useEffect(() => {
    registerCallback(id, showMenu, hideMenu);

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

      hideCallback();
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

      hideCallback();
    });
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="contextmenu"
          ref={contextMenuEl}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default ContextMenu;
