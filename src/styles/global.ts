import { createGlobalStyle } from 'styled-components';
import LatoBlack from '../assets/fonts/Lato-Black.ttf';
import LatoBlackItalic from '../assets/fonts/Lato-BlackItalic.ttf';
import LatoBold from '../assets/fonts/Lato-Bold.ttf';
import LatoBoldItalic from '../assets/fonts/Lato-BoldItalic.ttf';
import LatoItalic from '../assets/fonts/Lato-Italic.ttf';
import LatoLight from '../assets/fonts/Lato-Light.ttf';
import LatoLightItalic from '../assets/fonts/Lato-LightItalic.ttf';
import LatoRegular from '../assets/fonts/Lato-Regular.ttf';
import LatoThin from '../assets/fonts/Lato-Thin.ttf';
import LatoThinItalic from '../assets/fonts/Lato-ThinItalic.ttf';
import { Colors } from './colors';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}
body {
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 100;
  font-display: swap;
  src: local("Lato"), url(${LatoThinItalic}) format('truetype');
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: local("Lato"), url(${LatoLightItalic}) format('truetype');
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: local("Lato"), url(${LatoItalic}) format('truetype');
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: local("Lato"), url(${LatoBoldItalic}) format('truetype');
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: local("Lato"), url(${LatoBlackItalic}) format('truetype');
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: local("Lato"), url(${LatoThin}) format('truetype');
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local("Lato"), url(${LatoLight}) format('truetype');
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Lato"), url(${LatoRegular}) format('truetype');
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local("Lato"), url(${LatoBold}) format('truetype');
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: local("Lato"), url(${LatoBlack}) format('truetype');
}


  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding:0;
  margin:0;
  background-color: black;
  color: ${Colors.greyDark};
}
`;
