import { useCallback, useLayoutEffect, useRef, useState } from "react";

interface ISize {
  readonly width: number;
  readonly height: number;
}

interface IPosition {
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly bottom: number;
}

const getElementDimensions = (element: Element): ISize => {
  const rect = element.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
  };
};

export function useBoundingClientRect<T extends HTMLElement>(): [React.RefObject<T>, ISize, () => IPosition] {
  const ref = useRef<T>(null);

  const [size, setSize] = useState<ISize>({ width: 1, height: 1 });

  useLayoutEffect(() => {
    const onWindowResize = () => {
      if (!ref.current) return;
      setSize(getElementDimensions(ref.current));
    };
    const onElementResize: ResizeObserverCallback = ([{ contentBoxSize }]) => {
      setSize({
        height: contentBoxSize[0].blockSize,
        width: contentBoxSize[0].inlineSize,
      });
    };

    window.addEventListener("resize", onWindowResize, false);

    const observer = new ResizeObserver(onElementResize);

    if (ref.current) observer.observe(ref.current);

    return () => {
      window.removeEventListener("resize", onWindowResize, false);
      observer.disconnect();
    };
  }, []);

  const getPosition = useCallback(() => {
    const { left = 1, right = 1, top = 1, bottom = 1 } = ref.current?.getBoundingClientRect() ?? ({} as DOMRect);

    return { left, right, top, bottom };
  }, []);

  return [ref, size, getPosition];
}
