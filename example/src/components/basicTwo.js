import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from 'src';
import linkIco from 'example/src/assets/images/link.svg';

function BasicTwo() {
  return (
    <div id="basic">
      <h2 className="title">
        <a href="#basic"><img src={linkIco} alt="link" /></a>
        Basic example
      </h2>
      <ContextMenuTrigger
        id="my-context-menu-2"
      >
        <div className="box">
          Right Click On Me
        </div>
      </ContextMenuTrigger>

      <ContextMenu id="my-context-menu-2">
        <ContextMenuItem>BasicTwo Menu Item 1</ContextMenuItem>
        <ContextMenuItem>BasicTwo Menu Item 2</ContextMenuItem>
        <ContextMenuItem>BasicTwo Menu Item 3</ContextMenuItem>
        <ContextMenuItem>BasicTwo Menu Item 4</ContextMenuItem>
      </ContextMenu>
    </div>
  )
}

export default BasicTwo;
