import { useCallback, useEffect, useMemo, useState } from "react";

export function useBoundingClientRect<T extends HTMLElement>(node: T | null) {
  const [resizeCounter, setResizeCounter] = useState(0);

  const onResize = useCallback(() => setResizeCounter((resizeCounter) => resizeCounter + 1), []);

  useEffect(() => {
    window.addEventListener("resize", onResize, false);

    return () => {
      window.removeEventListener("resize", onResize, false);
    };
  }, [onResize]);

  return useMemo(() => {
    if (!node) return { width: 1, height: 1, left: 1, top: 1 };

    const { width, height, left, top } = node.getBoundingClientRect();

    return { width, height, left, top };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node, resizeCounter]);
}
