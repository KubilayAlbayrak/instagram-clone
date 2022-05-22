import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';

export interface HomeScreenHeaderProps {
  setSearchPressed: Dispatch<SetStateAction<boolean>>;
}

const HomeScreenHeader: React.FC<HomeScreenHeaderProps> = ({
  setSearchPressed,
}) => {
  const INSTAGRAM_ICON = require('../../../assets/instagram-icon.png');

  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={INSTAGRAM_ICON} style={styles.icon} />
        <Text
          style={{ marginTop: wp(3.5), fontSize: wp(5), fontWeight: 'bold' }}
        >
          Instagram
        </Text>
      </View>
      <TouchableOpacity onPress={() => setSearchPressed(true)}>
        <Feather
          name='search'
          size={24}
          color='black'
          style={{ margin: wp(3) }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    width: wp(100),
    height: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#888',
    borderBottomWidth: 0.3,
  },
  icon: {
    width: wp(8),
    height: wp(8),
    margin: wp(3),
  },
});
