import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger } from 'src';
import { MusicIcon } from '../icons';
import tracks from '../tracks';
import playIcon from '../assets/images/menu-icons/interface.svg';
import addToList from '../assets/images/menu-icons/multimedia.svg';
import openWith from '../assets/images/menu-icons/shapes-and-symbols.svg';
import deleteIco from '../assets/images/menu-icons/delete.svg';
import copy from '../assets/images/menu-icons/copy.svg';
import rename from '../assets/images/menu-icons/tool.svg';
import restore from '../assets/images/menu-icons/ui.svg';
import send from '../assets/images/menu-icons/communications.svg';
import scan from '../assets/images/menu-icons/miscellaneous.svg';
import properties from '../assets/images/menu-icons/commerce-and-shopping.svg';

function ExampleSeven() {
  return (
    <div>
      <h2 className="title">
        Nested Trigger example
      </h2>
      <ContextMenuTrigger id="menuOne">
        <div className="nested">
          I have a nested context
          <ContextMenuTrigger id="menuTwo">
            <div className="nested_item">
              I am nested context
            </div>
          </ContextMenuTrigger>
        </div>
      </ContextMenuTrigger>
      <ContextMenu id="menuOne">
        <ContextMenuItem>Menu 1 of 1</ContextMenuItem>
        <ContextMenuItem>Menu 2 of 1</ContextMenuItem>
        <ContextMenuItem>Menu 3 of 1</ContextMenuItem>
        <ContextMenuItem>Menu 4 of 1</ContextMenuItem>
        <ContextMenuItem>Menu 5 of 1</ContextMenuItem>
      </ContextMenu>
      <ContextMenu id="menuTwo">
        <ContextMenuItem>Menu 1 of 2</ContextMenuItem>
        <ContextMenuItem>Menu 2 of 2</ContextMenuItem>
        <ContextMenuItem>Menu 3 of 2</ContextMenuItem>
        <ContextMenuItem>Menu 4 of 2</ContextMenuItem>
        <ContextMenuItem>Menu 5 of 2</ContextMenuItem>
      </ContextMenu>
    </div>
  )
}

export default ExampleSeven;
