import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";

export function useBoundingClientRect<T extends HTMLElement>(): [React.RefObject<T>, DOMRect] {
  const ref = useRef<T>(null);

  const [resizeCounter, setResizeCounter] = useState(0);

  const onResize = useCallback(() => setResizeCounter((resizeCounter) => resizeCounter + 1), []);

  useLayoutEffect(() => {
    window.addEventListener("resize", onResize, false);

    const observer = new ResizeObserver(onResize);

    if (ref.current) observer.observe(ref.current);

    return () => {
      window.removeEventListener("resize", onResize, false);
      observer.disconnect();
    };
  }, [onResize]);

  return useMemo(() => {
    const domRect = ref.current?.getBoundingClientRect() ?? ({} as DOMRect);

    return [ref, domRect];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resizeCounter]);
}
