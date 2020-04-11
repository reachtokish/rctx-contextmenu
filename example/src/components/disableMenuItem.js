import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from 'src';
import linkIco from 'example/src/assets/images/link.svg';

function DisableMenuItem() {
  return (
    <div id="appendTo">
      <h2 className="title">
        <a href="#disableMenuItem"><img src={linkIco} alt="link" /></a>
        Disable menu item
      </h2>
      <ContextMenuTrigger
        id="my-context-menu-3"
      >
        <div className="box">
          Right Click On Me
        </div>
      </ContextMenuTrigger>

      <ContextMenu
        id="my-context-menu-3"
      >
        <ContextMenuItem>Disabled Item 1</ContextMenuItem>
        <ContextMenuItem disabled={true}>Disabled Item 2</ContextMenuItem>
        <ContextMenuItem>Disabled Item 3</ContextMenuItem>
        <ContextMenuItem>Disabled Item 4</ContextMenuItem>
      </ContextMenu>
    </div>
  )
}

export default DisableMenuItem;
