import { Platform, StyleSheet, StatusBar } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLOR } from '../../globalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(100),
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  textInputStyle: {
    backgroundColor: COLOR.searchTextInputBackgroundColor,
    borderRadius: wp(10),
    width: wp(80),
    height: hp(5),
    marginRight: wp(5),
    marginBottom: hp(3),
  },
});

export default styles;
