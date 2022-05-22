import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  ViewStyle,
  KeyboardType,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLOR } from '../../globalStyles';
import { Feather, Octicons } from '@expo/vector-icons';

export interface TextInputProps {
  label?: string;
  textInputStyle?: ViewStyle;
  onChangeText?: (text: any) => any;
  isPassword?: boolean;
  placeholder?: string;
  value?: string;
  keyboardType?: KeyboardType;
  editable?: boolean;
  selectTextOnFocus?: boolean;
  onBlur?: any;
  onFocus?: any;
  autoFocus?: boolean;
  isSearch?: boolean;
}

const InputText: React.FC<TextInputProps> = ({
  label,
  textInputStyle,
  onChangeText,
  isPassword,
  placeholder,
  value,
  keyboardType,
  selectTextOnFocus,
  editable,
  onBlur,
  onFocus,
  autoFocus,
  isSearch,
}) => {
  const [isPasswordHide, setIsPasswordHide] = useState<boolean>(true);

  return (
    <View style={textInputStyle}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View style={isSearch ? styles.searchTextInput : styles.textInput}>
        {isSearch && (
          <View style={styles.showPasswordIconView}>
            <TouchableOpacity
              onPress={() => setIsPasswordHide(!isPasswordHide)}
            >
              <Feather name='search' size={18} color='black' />
            </TouchableOpacity>
          </View>
        )}
        <View style={[styles.textView, { width: isPassword ? '80%' : '100%' }]}>
          <TextInput
            onChangeText={onChangeText}
            style={styles.text}
            secureTextEntry={isPassword ? isPasswordHide : false}
            autoCapitalize='none'
            placeholder={placeholder ? placeholder : undefined}
            value={value && value}
            keyboardType={keyboardType ? keyboardType : 'default'}
            editable={editable ? editable : true}
            selectTextOnFocus={selectTextOnFocus ? selectTextOnFocus : true}
            onBlur={onBlur}
            onFocus={onFocus}
            autoFocus={autoFocus ? true : false}
          />
        </View>
        {isPassword && (
          <View style={styles.showPasswordIconView}>
            <TouchableOpacity
              onPress={() => setIsPasswordHide(!isPasswordHide)}
            >
              <Octicons
                name={isPasswordHide ? 'eye-closed' : 'eye'}
                size={24}
                color='gray'
                style={styles.isPasswordIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: hp(5),
    width: '100%',
    borderColor: COLOR.textInputBorder,
    borderWidth: hp(0.1),
    display: 'flex',
    flexDirection: 'row',
  },
  searchTextInput: {
    height: hp(5),
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: COLOR.textInputBorder,
    borderRadius: wp(3),
    marginBottom: hp(1.5),
    marginLeft: wp(3),
  },
  labelText: {
    fontSize: hp(1.8),
    color: '#000000',
    marginBottom: hp(1),
  },
  text: {
    color: COLOR.darkGray,
    fontSize: hp(2),
    marginLeft: wp(3.2),
  },
  isPasswordIcon: {
    height: hp(3),
    width: hp(3),
  },
  textView: {
    justifyContent: 'center',
  },
  showPasswordIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  datePickerBox: {
    display: 'flex',
    flexDirection: 'row',
    height: hp(4),
    width: wp(32),
  },
  calendarIcon: {
    height: hp(4),
    width: hp(4),
  },
  searchBarIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  searchBarIcon: {
    position: 'relative',
    width: wp(7),
    height: hp(4),
  },
  searchBox: {
    display: 'flex',
    flexDirection: 'row',
    height: hp(4),
    width: wp(40),
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  searchInput: {
    width: '90%',
    height: 30,
    borderBottomWidth: 1,
  },
});

export default InputText;
