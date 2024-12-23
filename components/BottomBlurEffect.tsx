import { StyleSheet, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { RadialGradient, Defs, Stop, Svg, Rect } from 'react-native-svg';
import Images from '@/utils/Images';

const { width, height } = Dimensions.get("window");

const BottomBlurEffect = () => {
  return (
    <View style={styles.container}>
      <Svg height={width * 0.5} width={width} style={styles.gradientContainer}>
        <Defs>
          <RadialGradient id="grad1" cx="50%" cy="100%" r="100%" fx="50%" fy="50%">
            <Stop offset="40%" stopColor="#F7B174" stopOpacity="0.5" />
            <Stop offset="100%" stopColor="#FFF" stopOpacity="0.9" />
          </RadialGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad1)" />
      </Svg>

      <Image source={Images.Texture} style={styles.textureImage} resizeMode="cover" />
    </View>
  );
};

export default BottomBlurEffect;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    top: height*0.75,
    width: width ,
    height: width, 
    backgroundColor: 'white',
  },
  gradientContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  textureImage: {
    width: width,
    height: width,
    opacity: 0.03,  
    position: 'absolute',
    borderRadius: 100,
  },
});
