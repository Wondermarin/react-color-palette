/// <reference types="react" />
import { Color } from "./Color.interface";
export interface UpperFloorProps {
    readonly color: Color;
    readonly hideHEX: boolean;
    readonly hideLabels: boolean;
    readonly onChange: React.Dispatch<React.SetStateAction<Color>>;
    readonly onUpdated: (color: Color) => void;
}
export interface LowerFloorProps {
    readonly color: Color;
    readonly hideRGB: boolean;
    readonly hideHSV: boolean;
    readonly alpha: boolean;
    readonly hideLabels: boolean;
    readonly onChange: React.Dispatch<React.SetStateAction<Color>>;
    readonly onUpdated: (color: Color) => void;
}
export interface FieldsProps {
    readonly color: Color;
    readonly hideHEX: boolean;
    readonly hideRGB: boolean;
    readonly hideHSV: boolean;
    readonly alpha: boolean;
    readonly hideLabels: boolean;
    readonly onChange: React.Dispatch<React.SetStateAction<Color>>;
    readonly onUpdated: (color: Color) => void;
}
