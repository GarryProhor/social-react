interface ThemeColors{
    blue: string;
    black: string;
    darkGrey: string;
    gray: string;
    lightGray: string;
    white: string;
    error: string;
}

export interface Theme{
    colors: ThemeColors
}

export interface StyledInputProps{
    active: boolean;
    valid: boolean;
    theme: Theme;
    color?:string;
}

export interface ValidatedInputState{
    active: boolean;
    valid: boolean;
    typeIn: boolean;
    labelActive: boolean;
    labelColor: string;
    value: string;
}

export interface Dob{
    month:number;
    day:number;
    year:number;
}