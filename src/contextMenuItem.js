import React from 'react';

function ContextMenuItem({
  children, id
}) {
  return (
    <div
      className="contextmenu__item"
    >
      {children}
    </div>
  );
}

export default ContextMenuItem;
