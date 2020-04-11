import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from 'src';
import linkIco from 'example/src/assets/images/link.svg';

function AppendTo() {
  return (
    <div id="appendTo">
      <h2 className="title">
        <a href="#appendTo"><img src={linkIco} alt="link" /></a>
        Append To
      </h2>
      <ContextMenuTrigger
        id="my-context-menu-2"
      >
        <div className="box">
          Right Click On Me
        </div>
      </ContextMenuTrigger>

      <ContextMenu
        id="my-context-menu-2"
        appendTo={document.querySelector('body')}
      >
        <ContextMenuItem>Appended Item 1</ContextMenuItem>
        <ContextMenuItem>Appended Item 2</ContextMenuItem>
        <ContextMenuItem>Appended Item 3</ContextMenuItem>
        <ContextMenuItem>Appended Item 4</ContextMenuItem>
      </ContextMenu>
    </div>
  )
}

export default AppendTo;
