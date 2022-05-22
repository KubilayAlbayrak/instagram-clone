import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StatusBar,
  RefreshControl,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles';
import axios from 'axios';
import { PostCard, HomeScreenHeader, TextInput } from '../../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import { postActions } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { reduxRootTypes } from '../../types';
import { Post } from '../../types/redux/post.redux.type';
import { postService } from '../../services';

export interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const postState = useSelector(
    (state: reduxRootTypes.RootStateType) => state.postState
  );
  const [searchText, setSearchText] = useState<string>('');
  const [searchValues, setsearchValues] = useState<Post[]>([]);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const [searchPressed, setSearchPressed] = useState<boolean>(false);
  const getPostFN = async () => {
    const response = await postService.getPosts();
    dispatch(postActions.setPosts(response.data));
  };

  useEffect(() => {
    const getSecureUserInfos = async () => {
      const email = await SecureStore.getItemAsync('email');
      const password = await SecureStore.getItemAsync('password');
    };
    getSecureUserInfos();

    getPostFN();
  }, []);

  const getItemLayout = (data: any, index: number) => ({
    length: 70,
    offset: 70 * index,
    index,
  });

  const onRefresh = () => {
    setRefreshing(true);
    getPostFN();
    setRefreshing(false);
  };

  const renderItem = ({ item }: any) => {
    return <PostCard post={item} searchPressed={searchPressed} />;
  };

  useEffect(() => {
    const searchByUsername = () => {
      if (searchText.length >= 1) {
        const filteredData = postState.posts.filter((el) =>
          el.userName.toLowerCase().includes(searchText.toLowerCase())
        );
        setsearchValues(filteredData);
      } else {
        setsearchValues([]);
      }
    };
    searchByUsername();
  }, [searchText]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        key={searchPressed ? 'gridFlatlist' : 'normalFlatlist'}
        data={
          searchText.length > 0 && searchPressed
            ? searchValues
            : postState.posts
        }
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        maxToRenderPerBatch={2}
        initialNumToRender={5}
        removeClippedSubviews={true}
        updateCellsBatchingPeriod={1000}
        windowSize={10}
        legacyImplementation={true}
        numColumns={searchPressed ? 3 : 1}
        columnWrapperStyle={
          searchPressed ? { flex: 1, flexWrap: 'wrap' } : undefined
        }
        getItemLayout={getItemLayout}
        ListHeaderComponent={
          !searchPressed ? (
            <HomeScreenHeader setSearchPressed={setSearchPressed} />
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: wp(100),
              }}
            >
              <TouchableOpacity onPress={() => setSearchPressed(false)}>
                <Ionicons
                  name='arrow-back'
                  size={28}
                  color='black'
                  style={{ marginTop: hp(2), marginLeft: wp(2) }}
                />
              </TouchableOpacity>
              <TextInput
                isSearch
                placeholder='Ara'
                value={searchText}
                onChangeText={(text: string) => setSearchText(text)}
              />
            </View>
          )
        }
        stickyHeaderIndices={!searchPressed ? [0] : undefined}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
