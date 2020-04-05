import React, { useCallback } from 'react';

function ContextMenuItem({
  children, onClick, disabled, preventClose, attributes
}) {
  const handleClickEvent = useCallback(e => {
    if (disabled) return;
    onClick(e);

    if (!preventClose) {
      Object.keys(window.contextMenus).forEach(contextMenu => {
        window.contextMenus[contextMenu].hideMenu();
      });
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
