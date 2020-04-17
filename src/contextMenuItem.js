import React, { useCallback, useRef } from 'react';
import { callHideEvent } from './registerEvent';

function ContextMenuItem({
  children, onClick, disabled, preventClose, attributes, onItemHover, onItemHoverOut
}) {
  const contextMenuItem = useRef(null);

  const handleClickEvent = useCallback(e => {
    if (disabled) return;
    onClick(e);

    if (!preventClose) callHideEvent();
  });

  return (
    <div
      className={`contextmenu__item${disabled ? ' contextmenu__item--disabled' : ''}`}
      onClick={handleClickEvent}
      {...attributes}
      ref={contextMenuItem}
    >
      {children}
    </div>
  );
}

export default ContextMenuItem;

ContextMenuItem.defaultProps = {
  disabled: false,
  preventClose: false,
  attributes: {},
  onClick: () => null,
  onItemHover: () => null
};
