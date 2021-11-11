export interface InteractiveOnChangeProps {
  readonly x: number;
  readonly y: number;
  readonly complete?: boolean;
}

export interface InteractiveProps {
  readonly className: string;
  readonly style?: React.CSSProperties;
  readonly onChange: ({ x, y, complete }: InteractiveOnChangeProps) => void;
  readonly children: React.ReactNode;
}
