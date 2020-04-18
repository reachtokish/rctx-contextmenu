import React, { useRef, useCallback } from 'react';
import { callShowEvent, callHideEvent } from './registerEvent';

function ContextMenuTrigger({
  children, id, disableWhileShiftPressed, attributes
}) {
  const menuTrigger = useRef(null);

  const handleContextMenu = useCallback(e => {
    if (disableWhileShiftPressed && e.nativeEvent.shiftKey) {
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
  disableWhileShiftPressed: false
};
