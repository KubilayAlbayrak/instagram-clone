import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  Entypo,
  Feather,
  FontAwesome,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import { Video } from 'expo-av';
import { COLOR } from '../../globalStyles';

export interface PostCardProps {
  post: any;
  searchPressed: boolean;
}

const videos = [
  require('../../../assets/videos/video1.mp4'),
  require('../../../assets/videos/video4.mp4'),
  require('../../../assets/videos/video13.mp4'),
  require('../../../assets/videos/video16.mp4'),
  require('../../../assets/videos/video20.mp4'),
];

const PostCard: React.FC<PostCardProps> = ({ post, searchPressed }) => {
  const videoRef = useRef<Video>(null);

  const [selectedDot, setSelectedDot] = useState<number>(0);
  const [status, setStatus] = useState({});

  const handleScroll = (event: any) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );
    if (slide !== selectedDot) {
      setSelectedDot(slide);
    }
  };

  return (
    <View
      style={searchPressed ? styles.cardContainerGrid : styles.cardContainer}
    >
      {!searchPressed && (
        <View style={styles.cardHeader}>
          <View style={{ margin: wp(3) }}>
            <Text style={styles.userNameText}>{post.userName}</Text>
            <Text>{post.location}</Text>
          </View>
          <Entypo
            name='dots-three-horizontal'
            size={20}
            color='black'
            style={{ margin: wp(3) }}
          />
        </View>
      )}
      <ScrollView
        horizontal={!searchPressed ? true : false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => handleScroll(event)}
        scrollEventThrottle={16}
      >
        <View
          style={searchPressed ? styles.gridView : { flexDirection: 'row' }}
        >
          {post.content.map((image: any, index: number) => {
            if (image.fileType === 'image/jpeg') {
              return (
                <Image
                  key={index}
                  source={{ uri: image.url }}
                  style={
                    searchPressed ? styles.cardImageGrid : styles.cardImage
                  }
                />
              );
            }

            return (
              <Video
                key={index}
                ref={videoRef}
                style={searchPressed ? styles.cardImageGrid : styles.cardImage}
                source={videos[image.id]}
                shouldPlay
                isMuted
                onPlaybackStatusUpdate={setStatus}
              />
            );
          })}
        </View>
      </ScrollView>
      {!searchPressed && (
        <View style={styles.cardFooter}>
          <View style={styles.likeIcons}>
            <Feather
              name='heart'
              size={24}
              color='black'
              style={{ marginLeft: wp(2) }}
            />
            <FontAwesome name='comment-o' size={24} color='black' />
            <Feather name='send' size={24} color='black' />
            {post.content.length > 1 && (
              <View style={styles.pagination}>
                {post.content.map((i: any, k: any) => {
                  return (
                    <Octicons
                      key={k}
                      name='dot-fill'
                      size={15}
                      color={k === selectedDot ? COLOR.primary : '#888'}
                      style={{ marginLeft: wp(1) }}
                    />
                  );
                })}
              </View>
            )}
            <MaterialIcons
              name='save-alt'
              size={24}
              color='black'
              style={{
                flexDirection: 'row-reverse',
                marginRight: wp(60),
                marginLeft: wp(3),
              }}
            />
          </View>
          <Text style={styles.likeCountText}>{post.likeCount} beğenme</Text>
          <View style={{ flexDirection: 'row', marginLeft: wp(3) }}>
            <Text style={styles.userNameFooterText}>{post.userName}</Text>
            <Text>{post.comment}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardContainerGrid: {
    flex: 1,
    flexWrap: 'nowrap',
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(60),
    width: wp(100),
  },
  cardFooter: {
    flex: 2,
  },
  video: {
    width: wp(100),
    height: hp(60),
  },
  userNameText: {
    fontSize: wp(3.5),
    fontWeight: '600',
  },
  likeIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1),
  },
  likeCountText: {
    fontWeight: 'bold',
    margin: wp(3),
  },
  userNameFooterText: {
    fontWeight: 'bold',
    marginRight: wp(2),
  },
  cardImage: {
    width: wp(100),
    height: hp(60),
    resizeMode: 'contain',
  },
  cardImageGrid: {
    width: wp(100) / 3,
    height: hp(17),
  },
  pagination: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    width: wp(100),
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridView: {
    flexDirection: 'row',
  },
});

export default PostCard;
