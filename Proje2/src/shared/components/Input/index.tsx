import React from 'react';
//Third Party
import {TextInput} from 'react-native-paper';
import { InputType } from './interface';

const Input = ({
  label = '',
  placeholder = '',
  value = '',
  onChangeText = () => {},
  primaryColor = '#aaa',
  onFocus = () => null,
  onBlur = () => null,
  keyboardType = 'default',
  backgroundColor = '#fff',
  style,
  secureTextEntry = false,
  dense = false,
  autoCapitalize = 'none',
  multiline = false,
  textAlign = 'left',
  outlineColor = '#ddd',
  left = null,
  right = null,
  maxLength = undefined,
  mode = 'flat',
  activeUnderlineColor = undefined,
  theme = null,
  editable = true,
} : InputType) => {
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      mode={mode}
      onChangeText={onChangeText}
      style={[{backgroundColor: backgroundColor}, style]}
      activeOutlineColor={primaryColor}
      outlineColor={outlineColor}
      onFocus={onFocus}
      onBlur={onBlur}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      scrollEnabled={false}
      dense={dense}
      multiline={multiline}
      focusable={true}
      textAlign={textAlign}
      left={left}
      right={right}
      maxLength={maxLength}
      value={value}
      activeUnderlineColor={activeUnderlineColor}
      theme={theme}
      editable={editable}
    />
  );
};

export default Input;
