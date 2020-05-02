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

function ExampleOne() {
  return (
    <div>
      <h2 className="title">
        Basic example
      </h2>
      <div className="music-box-holder">
        {tracks.map(({ id, trackName, artist, album, duration }) => (
          <ContextMenuTrigger id="context-menu-1" className="music-box" key={id}>
            <div className="music-box-left">
              <div className="music-icon">
                <MusicIcon />
              </div>
              <p>MP3</p>
            </div>
            <div className="music-box-right">
              <h3>{trackName}</h3>
              <p>{artist}</p>
              <p>{album}</p>
              <span>{duration}</span>
            </div>
          </ContextMenuTrigger>
        ))}
      </div>
      <ContextMenu id="context-menu-1">
        <ContextMenuItem>
          <img src={playIcon} alt="ico" />
          Play
        </ContextMenuItem>
        <ContextMenuItem>
          <img src={addToList} alt="Ico" />
          Add to Media Player List
        </ContextMenuItem>
        <ContextMenuItem>
          <img src={openWith} alt="Ico" />
          Open With...
        </ContextMenuItem>
        <ContextMenuItem>
          <img src={deleteIco} alt="Ico" />
          Delete
        </ContextMenuItem>
        <ContextMenuItem>
          <img src={copy} alt="Ico" />
          Copy
        </ContextMenuItem>
        <ContextMenuItem>
          <img src={rename} alt="Ico" />
          Rename
        </ContextMenuItem>
        <ContextMenuItem disabled={true}>
          <img src={restore} alt="Ico" />
          Restore Previous Version
        </ContextMenuItem>
        <ContextMenuItem>
          <img src={send} alt="Ico" />
          Send to
        </ContextMenuItem>
        <ContextMenuItem>
          <img src={scan} alt="Ico" />
          Scan with Windows Defender
        </ContextMenuItem>
        <ContextMenuItem>
          <img src={properties} alt="Ico" />
          Properties
        </ContextMenuItem>
      </ContextMenu>
    </div>
  )
}

export default ExampleOne;
