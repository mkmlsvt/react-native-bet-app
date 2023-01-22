import { Dispatch, SetStateAction } from "react";

export interface InputType{
    label: string,
    placeholder : string,
    value: string,
    onChangeText: any,
    primaryColor?: string,
    onFocus ?: () => void,
    onBlur ?: () => void,
    keyboardType ?: | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
    backgroundColor ?: string,
    style?: {},
    secureTextEntry ?: boolean,
    dense ?: boolean,
    autoCapitalize ?:'none' | 'sentences' | 'words' | 'characters' | undefined;
    multiline ?: boolean,
    textAlign ?: 'left' | 'center' | 'right' | undefined;
    outlineColor ?: string,
    left ?: any,
    right ?: any,
    maxLength ?: number | undefined,
    mode ?: 'flat' | 'outlined' | undefined,
    activeUnderlineColor ?: string,
    theme ?: any,
    editable?: boolean,
}