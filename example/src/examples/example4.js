import React from 'react';
import { ContextMenu, ContextMenuItem, ContextMenuTrigger, Submenu } from 'src';
import { MusicIcon } from '../icons';
import tracks from '../tracks';

function ExampleFour() {
  return (
    <div>
      <h2 className="title">
        Submenu example
      </h2>
      <div className="music-box-holder">
        {tracks.map(({ id, trackName, artist, album, duration }) => (
          <ContextMenuTrigger id="context-menu-4" className="music-box" key={id}>
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
      <ContextMenu id="context-menu-4">
        <ContextMenuItem>Play</ContextMenuItem>
        <ContextMenuItem>Add to Media Player List</ContextMenuItem>
        <Submenu title="Open With">
          <ContextMenuItem>VS Code</ContextMenuItem>
          <ContextMenuItem>Sublime</ContextMenuItem>
          <ContextMenuItem>Vim</ContextMenuItem>
          <ContextMenuItem>Search Online</ContextMenuItem>
        </Submenu>
        <ContextMenuItem disabled={true}>Restore Previous Version</ContextMenuItem>
        <ContextMenuItem>Send to</ContextMenuItem>
        <ContextMenuItem>Scan with Windows Defender</ContextMenuItem>
        <ContextMenuItem>Properties</ContextMenuItem>
      </ContextMenu>
    </div>
  )
}

export default ExampleFour;
