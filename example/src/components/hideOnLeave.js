import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from 'src';
import linkIco from 'example/src/assets/images/link.svg';

function HideOnLeave() {
  return (
    <div id="basic">
      <h2 className="title">
        <a href="#basic"><img src={linkIco} alt="link" /></a>
        Hide On Leave
      </h2>
      <ContextMenuTrigger
        id="my-context-menu-3"
        disableIfShiftIsPressed={true}
      >
        <div className="box">
          Right Click On Me
        </div>
      </ContextMenuTrigger>

      <ContextMenu
        id="my-context-menu-3"
        hideOnLeave={true}
      >
        <ContextMenuItem>Hide Menu Item 1</ContextMenuItem>
        <ContextMenuItem>Hide Menu Item 2</ContextMenuItem>
        <ContextMenuItem>Hide Menu Item 3</ContextMenuItem>
        <ContextMenuItem>Hide Menu Item 4</ContextMenuItem>
      </ContextMenu>
    </div>
  )
}

export default HideOnLeave;
