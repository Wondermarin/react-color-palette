import { useEffect, useState } from "react";

export const useStateWithProps = <T>(defaultValue: T) => {
  const [value, setValue] = useState(() => defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return [value, setValue];
};
