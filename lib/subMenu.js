import React from 'react';
import ContextMenuItem from './contextMenuItem';

function SubMenu({ children, title }) {
  return (
    <div className="submenu">
      <ContextMenuItem>{title}</ContextMenuItem>
      <div className="submenu__item">
        {children}
      </div>
    </div>
  );
}

export default SubMenu;

SubMenu.defaultProps = {
  title: 'Sub Menu'
};
