import { useState, useEffect } from "react";

import keyCodes from "./keyCodes";

const getKeyName = code => keyCodes[code];

export const useShortcutEffect = (callback, shortcut) => {
  const [activeKeys, isShortcut] = useShortcut({ preventDefault: false });
  useEffect(() => {
    if (isShortcut(shortcut)) callback();
  }, [activeKeys]);
};

const useShortcut = ({ preventDefault = false }) => {
  const [activeKeys, setActiveKeys] = useState([]);

  const doPreventDefault = e => {
    if (preventDefault) e.preventDefault();
  };

  const handleKeydown = e => {
    doPreventDefault(e);
    if (
      keyCodes.hasOwnProperty(e.keyCode) &&
      !~activeKeys.indexOf(getKeyName(e.keyCode))
    ) {
      setActiveKeys([...activeKeys, getKeyName(e.keyCode)]);
    }
  };

  const handleKeyup = e => {
    doPreventDefault(e);
    setActiveKeys([]);
  };

  const isShortcut = shortcut =>
    shortcut.split("+").every(key => ~activeKeys.indexOf(key));

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [activeKeys]);

  return [activeKeys, isShortcut];
};

export default useShortcut;
