import React from 'react';

function ContextMenu({ children, id }) {
  return (
    <div id={`${id}-menu`} className="contextmenu">
      {children}
    </div>
  );
}

export default ContextMenu;
