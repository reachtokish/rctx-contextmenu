import React, { useRef, useEffect } from 'react';
import { takeAction } from './registerEvent';

function ContextMenuTrigger({
  children, id
}) {
  const menuTrigger = useRef(null);

  useEffect(() => {
    menuTrigger.current.addEventListener('contextmenu', e => {
      e.preventDefault();

      const { clientX, clientY } = e;
      const opts = {
        position: {
          clientY,
          clientX
        },
        targetElem: e.target,
        id
      };

      takeAction(opts);
    }, false);

    return () => {
      menuTrigger.current.removeEventListener('contextmenu');
    };
  }, []);

  return (
    <div
      className="menu-trigger"
      ref={menuTrigger}
    >
      {children}
    </div>
  );
}

export default ContextMenuTrigger;
