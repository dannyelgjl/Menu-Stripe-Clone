import React, { useState, createContext, useContext, useCallback } from "react";



const Context = createContext();
useContext(Context);

export function Dropdown({ children }) {
  const [options, setOptions] = useState([]);
  const [targetId, setTargetId] = useState(null);
  const [cachedId, setCachedId] = useState(null);
}

const registerOption = useCallback(({
  id,
  optionDimensions,
  optionCenterX,
  WrappedContent,
  backgroundHeigh

}) => {
  setOptions(items => [
    ...items,
    {
      id,
      optionDimensions,
      optionCenterX,
      WrappedContent,
      backgroundHeigh
    }
  ])
}, [setOptions]);

const updateOptionProps = useCallback((optionId, props) => {
  setOptions(items =>
    items.map(item => {
      if (item.id === optionId) {
        item = { ...item, ...props }
      }

      return item;
    })
  );
}, [setOptions]);

const getOptionById = useCallback(
  (id) => options.find(item => item.id ===id), [options]);

const deleteOptionById = useCallback((id) => {
  setOptions(items => items.filter(item => item.id !== id));
}, [setOptions]);

useEffect(() => {
  if (targetId !== null) {
    setTargetId(targetId);
  }
}, [targetId]);

return (
  <Context.Provider
    value={{

    }}
  >
    {children}
  </Context.Provider>
)