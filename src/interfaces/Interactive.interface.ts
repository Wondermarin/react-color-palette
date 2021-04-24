export interface InteractiveProps {
  readonly className: string;
  readonly style?: React.CSSProperties;
  readonly onChange: (x: number, y: number) => void;
  readonly children: React.ReactNode;
}
