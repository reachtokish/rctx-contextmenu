import React, { useCallback } from 'react';
import { trigger, MENU_HIDE } from './trigger';

function ContextMenuItem({
  children, onClick, disabled, preventClose, attributes, id
}) {
  const handleClickEvent = useCallback(e => {
    if (disabled) return;
    onClick(e);

    if (!preventClose) {
      const opts = {
        position: null,
        targetElem: null,
        id
      };

      trigger(MENU_HIDE, opts);
    }
  });

  return (
    <div
      className={`contextmenu__item${disabled ? ' contextmenu__item--disabled' : ''}`}
      onClick={handleClickEvent}
      {...attributes}
    >
      {children}
    </div>
  );
}

export default ContextMenuItem;

ContextMenuItem.defaultProps = {
  onClick: () => null,
  disabled: false,
  preventClose: false,
  attributes: {}
};
