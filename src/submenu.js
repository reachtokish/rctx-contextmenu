import React, { useCallback, useState, useRef } from 'react';
import ContextMenuItem from './contextMenuItem';

function Submenu({ children, title }) {
  const [submenuStyle, setSubmenuStyle] = useState(null);
  const submenuEl = useRef(null);
  const submenuItem = useRef(null);

  const calculateSubmenuPos = useCallback(e => {
    const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = window;
    const {
      left: itemLeft, top: itemTop, width: itemWidth, height: itemHeight
    } = submenuItem.current.getBoundingClientRect();
    const {
      width: submenuWidth, height: submenuHeight
    } = submenuEl.current.getBoundingClientRect();
    let style = {
      opacity: 1
    };

    if (((itemTop + submenuHeight + itemHeight) > windowInnerHeight)) {
      style = {
        ...style,
        top: 'inherit',
        bottom: '0'
      };
    }
    if ((itemLeft + submenuWidth + itemWidth) > windowInnerWidth) {
      style = {
        ...style,
        left: 'inherit',
        right: '100%'
      };
    }

    setSubmenuStyle(style);
  });

  const hideSubmenu = useCallback(() => {
    const style = {
      opacity: 0
    };

    setSubmenuStyle(style);
  });

  return (
    <div
      className="submenu"
      onMouseOver={() => calculateSubmenuPos()}
      onMouseOut={() => hideSubmenu()}
      onFocus={() => null}
      onBlur={() => null}
      ref={submenuItem}
    >
      <ContextMenuItem
        // onItemHover={e => calculateSubmenuPos(e)}
        // onItemHoverOut={() => hideSubmenu()}
      >
        {title}
      </ContextMenuItem>
      <div
        className="submenu__item"
        ref={submenuEl}
        style={submenuStyle}
      >
        {children}
      </div>
    </div>
  );
}

export default Submenu;

Submenu.defaultProps = {
  title: 'Sub Menu'
};
