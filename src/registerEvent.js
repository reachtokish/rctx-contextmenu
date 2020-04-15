import { uniqueId } from './helper';

const events = {};

let activeEvent = {};

const registerCallback = (id, showMenu, hideMenu) => {
  const _ = uniqueId();

  events[_] = {
    id,
    showMenu,
    hideMenu
  };

  return id;
};

const takeAction = opts => {
  if (activeEvent.hideMenu) activeEvent.hideMenu();
  Object.keys(events).forEach(key => {
    if (events[key].id && events[key].id === opts.id) {
      events[key].showMenu(opts);
      activeEvent = events[key];
    }
  });
};

const hideCallback = () => {
  if (activeEvent.hideMenu) activeEvent.hideMenu();
  activeEvent = {};
};

export { registerCallback, takeAction, hideCallback };
