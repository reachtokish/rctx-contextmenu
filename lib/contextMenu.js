import React from 'react';
// import ReactDom from 'react-dom';

// const Component = ({ children, id }) => (
//   <div id={id} className="context_menu">

//   </div>
// );

function ContextMenu({ children, id }) {
  return (
    <div id={`${id}-menu`} className="contextmenu">
      {children}
    </div>
  );
  // return ReactDom.createPortal(<Component id={id} />, document.querySelector('body'));
}

export default ContextMenu;
