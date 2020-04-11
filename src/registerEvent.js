import uniqueId from './helper';

const callbacks = {};

const handleShowEvent = e => {
  for (const id in callbacks) {
    callbacks[id].showMenu(e);
  }
};

const handleHideEvent = e => {
  for (const id in callbacks) {
    callbacks[id].hideMenu(e);
  }
};

window.addEventListener('MENU_SHOW', handleShowEvent);
window.addEventListener('MENU_HIDE', handleHideEvent);

const registerCallback = (showMenu, hideMenu) => {
  const id = uniqueId();

  callbacks[id] = {
    showMenu,
    hideMenu
  };

  return id;
};

const returnCallback = () => callbacks;

export { registerCallback, returnCallback };
