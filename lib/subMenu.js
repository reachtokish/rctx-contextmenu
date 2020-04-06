import React from 'react';
import ContextMenuItem from './contextMenuItem';

function Submenu({ children, title }) {
  return (
    <div className="submenu">
      <ContextMenuItem>{title}</ContextMenuItem>
      <div className="submenu__item">
        {children}
      </div>
    </div>
  );
}

export default Submenu;

Submenu.defaultProps = {
  title: 'Sub Menu'
};
