import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from 'src';
import linkIco from 'example/src/assets/images/link.svg';

function PreventCloseItemClick() {
  return (
    <div id="appendTo">
      <h2 className="title">
        <a href="#disableMenuItem"><img src={linkIco} alt="link" /></a>
        Prevent closing context menu on item click
      </h2>
      <ContextMenuTrigger
        id="my-context-menu-4"
      >
        <div className="box">
          Right Click On Me
        </div>
      </ContextMenuTrigger>

      <ContextMenu
        id="my-context-menu-4"
      >
        <ContextMenuItem preventClose={true}>Menu item 1</ContextMenuItem>
        <ContextMenuItem preventClose={true}>Menu item 2</ContextMenuItem>
        <ContextMenuItem preventClose={true}>Menu item 3</ContextMenuItem>
        <ContextMenuItem preventClose={true}>Menu item 4</ContextMenuItem>
      </ContextMenu>
    </div>
  )
}

export default PreventCloseItemClick;
