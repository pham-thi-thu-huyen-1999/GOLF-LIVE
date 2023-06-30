
const BaseCss = `
    body {
        font-family: 'Lato', 'sans-serif';
        overflow-x: hidden;
        &.overflow-hidden{
            overflow: hidden;
        }
    }
    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    
    * {
        box-sizing: border-box;
    }
    ul,li{
        list-style-type: none;
    }

`

export default BaseCss