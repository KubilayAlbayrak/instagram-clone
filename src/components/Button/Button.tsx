import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  Image,
} from 'react-native';
import { COLOR } from '../../globalStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Callback = () => any;
export interface ButtonProps {
  title?: string;
  onPress: Callback;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  buttonStyle,
  buttonTextStyle,
}) => (
  <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
    <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.primary,
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(0.5),
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: hp(1.8),
  },
  closeButton: {
    width: wp(5),
    height: wp(5),
  },
});

export default Button;
