import React, { useRef, useCallback } from 'react';
import { callShowEvent, callHideEvent } from './registerEvent';

function ContextMenuTrigger({
  children, id, disableIfShiftIsPressed, attributes
}) {
  const menuTrigger = useRef(null);

  // useEffect(() => {
  //   menuTrigger.current.addEventListener('contextmenu', e => {
  //     // disableIfShiftIsPressed handled here
  //     if (disableIfShiftIsPressed && e.shiftKey) {
  //       callHideEvent();
  //       return;
  //     }
  //     e.preventDefault();

  //     const { clientX, clientY } = e;
  //     const opts = {
  //       position: {
  //         clientY,
  //         clientX
  //       },
  //       id
  //     };

  //     callShowEvent(opts);
  //   }, false);

  //   return () => {
  //     menuTrigger.current.removeEventListener('contextmenu');
  //   };
  // }, []);

  const handleContextMenu = useCallback(e => {
    if (disableIfShiftIsPressed && e.nativeEvent.shiftKey) {
      callHideEvent();
      return;
    }
    e.preventDefault();

    const { clientX, clientY } = e.nativeEvent;
    const opts = {
      position: {
        clientY,
        clientX
      },
      id
    };

    callShowEvent(opts);
  });

  return (
    <div
      className="menu-trigger"
      ref={menuTrigger}
      {...attributes}
      onContextMenu={e => handleContextMenu(e)}
    >
      {children}
    </div>
  );
}

export default ContextMenuTrigger;

ContextMenuTrigger.defaultProps = {
  attributes: {},
  disable: false,
  renderTag: 'div',
  disableIfShiftIsPressed: false
};
