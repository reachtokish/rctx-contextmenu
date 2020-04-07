import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from '../../../lib';
import linkIco from '../assets/images/link.svg';

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
        appendTo={document.querySelector('body')}
      >
        <ContextMenuItem>Menu item 1</ContextMenuItem>
        <ContextMenuItem disabled={true}>Menu item 1</ContextMenuItem>
        <ContextMenuItem>Menu item 1</ContextMenuItem>
        <ContextMenuItem>Menu item 1</ContextMenuItem>
      </ContextMenu>
    </div>
  )
}

export default DisableMenuItem;
