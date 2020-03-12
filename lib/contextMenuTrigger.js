import React, { useState, useEffect, useRef } from 'react';

function ContextMenuTrigger({ children, id }) {
  const menuTrigger = useRef(null);

  useEffect(() => {
    const contextElem = document.querySelectorAll('.menu-trigger');
    const contextMenuDiv = document.getElementById(`${id}-menu`);

    const eventFunc = (e) => {
      e.preventDefault();
      contextMenuDiv.style.display = 'block';
      contextMenuDiv.style.top = `${e.clientY + 2}px`;
      contextMenuDiv.style.left = `${e.clientX + 2}px`;
    };

    // document.addEventListener('contextmenu', (evt) => {
    //   let targetElement = evt.target;
    //   do {
    //     if (targetElement === contextMenuDiv) {
    //       return;
    //     }
    //     targetElement = targetElement.parentNode;
    //   }
    //   while (targetElement);
    //   contextMenuDiv.style.display = 'none';
    // });

    // open context menu
    if (document.addEventListener) {
      for (let i = 0; i < contextElem.length; i += 1) {
        contextElem[i].addEventListener('contextmenu', eventFunc, false);
      }
    }
    else {
      contextElem.attachEvent('oncontextmenu', () => {
        window.event.returnValue = false;
        contextMenuDiv.style.display = 'block';
      });
    }

    // detect click outside
    document.addEventListener('click', (evt) => {
      let targetElement = evt.target;
      do {
        if (targetElement === contextMenuDiv) {
          return;
        }
        targetElement = targetElement.parentNode;
      }
      while (targetElement);
      contextMenuDiv.style.display = 'none';
    });

    // document.addEventListener('contextmenu', (evt) => {
    //   let targetElement = evt.target;
    //   do {
    //     if (targetElement.classList && targetElement.classList.contains('menu-trigger')) {
    //       return;
    //     }
    //     targetElement = targetElement.parentNode;
    //   }
    //   while (targetElement);
    //   contextMenuDiv.style.display = 'none';
    // });

    return () => {
      document.removeEventListener('click');
      if (document.addEventListener) {
        for (let i = 0; i < contextElem.length; i += 1) {
          contextElem[i].removeEventListener('contextmenu', eventFunc, false);
        }
      }
      else {
        contextElem.removeEvent('oncontextmenu');
      }
    };
  }, []);

  return (
    <div className="menu-trigger" ref={menuTrigger}>{children}</div>
  );
}

export default ContextMenuTrigger;
