import * as code from './keycode'
export const isDelete = (e: KeyboardEvent) => {
  return (e.code === code.BACKSPACE || e.code === code.DELETE);
};
