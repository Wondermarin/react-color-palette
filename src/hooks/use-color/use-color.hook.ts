import { useCallback, useEffect, useState } from "react";

import { ColorService, type IColor } from "@/services/color";

type TSetPartialStateAction<T> = Partial<T> | ((prevState: T) => Partial<T>);

export function useColor(initialColor: string): [IColor, React.Dispatch<TSetPartialStateAction<IColor>>] {
  const [color, setColor] = useState(ColorService.convert("hex", initialColor));

  const dispatchColor = useCallback((valueOrFunc: Partial<IColor> | ((color: IColor) => Partial<IColor>)) => {
    if (typeof valueOrFunc === "function") {
      setColor((p) => {
        return ColorService.convertIfNeeded(valueOrFunc(p));
      });
    } else {
      setColor(ColorService.convertIfNeeded(valueOrFunc));
    }
  }, []);

  useEffect(() => {
    setColor(ColorService.convert("hex", initialColor));
  }, [initialColor]);

  return [color, dispatchColor];
}
