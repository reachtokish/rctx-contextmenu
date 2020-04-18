import React, { useCallback, useRef } from 'react';
import classnames from 'classnames';
import { callHideEvent } from './registerEvent';

function ContextMenuItem({
  children, onClick, disabled, preventClose, attributes, className
}) {
  const contextMenuItem = useRef(null);

  const handleClickEvent = useCallback(e => {
    if (disabled) return;
    onClick(e);

    if (!preventClose) callHideEvent();
  });

  return (
    <div
      className={
        classnames(
          'contextmenu__item',
          {
            'contextmenu__item--disabled': disabled
          },
          ...className.split(' ')
        )
      }
      // className={`contextmenu__item${disabled ? ' contextmenu__item--disabled' : ''}`}
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
  className: '',
  onClick: () => null,
  onItemHover: () => null
};
