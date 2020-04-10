import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from '../../../lib';
import linkIco from '../assets/images/link.svg';

function Basic() {
  return (
    <div id="basic">
      <h2 className="title">
        <a href="#basic"><img src={linkIco} alt="link" /></a>
        Basic example
      </h2>
      <ContextMenuTrigger
        id="my-context-menu-1"
      >
        <div className="box">
          Right Click On Me
        </div>
      </ContextMenuTrigger>

      <ContextMenu id="my-context-menu-1">
        <ContextMenuItem>Basic Menu Item 1</ContextMenuItem>
        <ContextMenuItem>Basic Menu Item 2</ContextMenuItem>
        <ContextMenuItem>Basic Menu Item 3</ContextMenuItem>
        <ContextMenuItem>Basic Menu Item 4</ContextMenuItem>
      </ContextMenu>
    </div>
  )
}

export default Basic;
