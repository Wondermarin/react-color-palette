/// <reference types="react" />
import { Color } from "./Color.interface";
export interface HueProps {
    readonly width: number;
    readonly color: Color;
    readonly onChange: React.Dispatch<React.SetStateAction<Color>>;
    readonly onUpdated: (color: Color) => void;
}
