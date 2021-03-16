import { useState } from "react";

// custome hook that saves items in localstorage
const useLocalStorageHook = (initialValue = "storedItem") => {
    // get the initally save item. If there is Node, default to an empty string
    const getStorage = () => {
        let stored = localStorage.getItem(initialValue);
        return stored ? stored : "";
    };
    
    const [state, setState] = useState(getStorage());
    
    // set setState to a new item passed in as props
  const setStorage = (item = "") => {
    localStorage.setItem(initialValue, JSON.stringify(item));
    return setState(item);
  };

  return { state, setState: setStorage };
};

export default useLocalStorageHook;
