const staging = process.env.NODE_ENV === "production"

let baseUrl = "/"

if(staging){
    baseUrl = '/'
}

const GlobalFonts = `
    @font-face {
        font-family: 'Lato Hairline';
        src: url('${baseUrl}font/Lato-HairlineItalic.eot');
        src: url('${baseUrl}font/Lato-HairlineItalic.eot?#iefix') format('embedded-opentype'),
            url('${baseUrl}font/Lato-HairlineItalic.woff2') format('woff2'),
            url('${baseUrl}font/Lato-HairlineItalic.woff') format('woff'),
            url('${baseUrl}font/Lato-HairlineItalic.ttf') format('truetype');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Lato';
        src: url('${baseUrl}font/Lato-Bold.eot');
        src: url('${baseUrl}font/Lato-Bold.eot?#iefix') format('embedded-opentype'),
            url('${baseUrl}font/Lato-Bold.woff2') format('woff2'),
            url('${baseUrl}font/Lato-Bold.woff') format('woff'),
            url('${baseUrl}font/Lato-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Lato';
        src: url('${baseUrl}font/Lato-BoldItalic.eot');
        src: url('${baseUrl}font/Lato-BoldItalic.eot?#iefix') format('embedded-opentype'),
            url('${baseUrl}font/Lato-BoldItalic.woff2') format('woff2'),
            url('${baseUrl}font/Lato-BoldItalic.woff') format('woff'),
            url('${baseUrl}font/Lato-BoldItalic.ttf') format('truetype');
        font-weight: bold;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Lato';
        src: url('${baseUrl}font/Lato-Light.eot');
        src: url('${baseUrl}font/Lato-Light.eot?#iefix') format('embedded-opentype'),
            url('${baseUrl}font/Lato-Light.woff2') format('woff2'),
            url('${baseUrl}font/Lato-Light.woff') format('woff'),
            url('${baseUrl}font/Lato-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Lato';
        src: url('${baseUrl}font/Lato-LightItalic.eot');
        src: url('${baseUrl}font/Lato-LightItalic.eot?#iefix') format('embedded-opentype'),
            url('${baseUrl}font/Lato-LightItalic.woff2') format('woff2'),
            url('${baseUrl}font/Lato-LightItalic.woff') format('woff'),
            url('${baseUrl}font/Lato-LightItalic.ttf') format('truetype');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Lato';
        src: url('${baseUrl}font/Lato-BlackItalic.eot');
        src: url('${baseUrl}font/Lato-BlackItalic.eot?#iefix') format('embedded-opentype'),
            url('${baseUrl}font/Lato-BlackItalic.woff2') format('woff2'),
            url('${baseUrl}font/Lato-BlackItalic.woff') format('woff'),
            url('${baseUrl}font/Lato-BlackItalic.ttf') format('truetype');
        font-weight: 900;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Lato';
        src: url('${baseUrl}font/Lato-Italic.eot');
        src: url('${baseUrl}font/Lato-Italic.eot?#iefix') format('embedded-opentype'),
            url('${baseUrl}font/Lato-Italic.woff2') format('woff2'),
            url('${baseUrl}font/Lato-Italic.woff') format('woff'),
            url('${baseUrl}font/Lato-Italic.ttf') format('truetype');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Lato';
        src: url('${baseUrl}font/Lato-Regular.eot');
        src: url('${baseUrl}font/Lato-Regular.eot?#iefix') format('embedded-opentype'),
            url('${baseUrl}font/Lato-Regular.woff2') format('woff2'),
            url('${baseUrl}font/Lato-Regular.woff') format('woff'),
            url('${baseUrl}font/Lato-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Lato Hairline';
        src: url('${baseUrl}font/Lato-Hairline.eot');
        src: url('${baseUrl}font/Lato-Hairline.eot?#iefix') format('embedded-opentype'),
            url('${baseUrl}font/Lato-Hairline.woff2') format('woff2'),
            url('${baseUrl}font/Lato-Hairline.woff') format('woff'),
            url('${baseUrl}font/Lato-Hairline.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Lato';
        src: url('${baseUrl}font/Lato-Black.eot');
        src: url('${baseUrl}font/Lato-Black.eot?#iefix') format('embedded-opentype'),
            url('${baseUrl}font/Lato-Black.woff2') format('woff2'),
            url('${baseUrl}font/Lato-Black.woff') format('woff'),
            url('${baseUrl}font/Lato-Black.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
    @keyframes marquee{
        0%{transform: translateX(100vw);}
        100%{transform: translateX(-100vw);}
    }
`
export default GlobalFonts
