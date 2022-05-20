import { useEffect, useState } from "react";

export const useStateWithProps = <T>(defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState(() => defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return [value, setValue];
};
