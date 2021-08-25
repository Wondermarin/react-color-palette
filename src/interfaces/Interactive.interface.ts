export interface InteractiveProps {
  readonly className: string;
  readonly style?: React.CSSProperties;
  readonly onChange: (x: number, y: number, completed?: boolean) => void;
  readonly children: React.ReactNode;
}

export interface InteractiveCoordinates {
  x: number;
  y: number;
}
