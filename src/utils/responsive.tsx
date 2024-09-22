import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

// Default guideline sizes are based on standard ~5" screen mobile device (375*812)
// Dimentions -  for a global reference taking iphone 6/6s/7/8 (375*667)
// Also SSK XD design width is 375*812

const guidelineBaseWidth = 375;
let guidelineBaseHeight = 812;
if (Platform.OS === 'android') {
  const hgt = StatusBar.currentHeight;

  if (hgt !== undefined) {
    guidelineBaseHeight = guidelineBaseHeight + hgt;
  }
}

function responsiveHeight(size: number): number {
  return Math.round((longDimension / guidelineBaseHeight) * size);
}

function responsiveSize(size: number): number {
  return Math.round((shortDimension / guidelineBaseWidth) * size);
}

const responsive = { height: responsiveHeight, size: responsiveSize };

export { responsive };
