import { StyleSheet } from 'react-native';
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
    backgroundColor: COLOR.backgroundColor,
  },
  logo: {
    width: wp(20),
    height: wp(20),
  },
  logoTitle: {
    fontSize: wp(5),
    fontWeight: '500',
  },
});

export default styles;
