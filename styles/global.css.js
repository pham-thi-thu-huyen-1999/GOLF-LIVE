import { createGlobalStyle } from 'styled-components';
import BaseCss from './base.css';
import GlobalFonts from './font.css';
import Normalize from './normalize.css';
import "swiper/css";
// import "swiper/css/grid";
import "swiper/css/pagination";

const GlobalStyle = createGlobalStyle`
    ${BaseCss}
    ${GlobalFonts}
    ${Normalize}
`;
 
export default GlobalStyle;