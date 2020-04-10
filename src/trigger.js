export const MENU_SHOW = 'MENU_SHOW';
export const MENU_HIDE = 'MENU_HIDE';

export const trigger = (type, opts) => {
  const event = new window.CustomEvent(type, { detail: opts });
  window.dispatchEvent(event);
};
