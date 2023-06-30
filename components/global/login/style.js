import tw from 'twin.macro'
import styled from 'styled-components'

export const TitleLogin =  styled.div`
    ${tw`text-extra-bold
    uppercase
    pt-[18px]
    md:pt-[30px]
    text-center`}
    ${(props)=>{
        if(props.$small){
            return tw`text-bold text-green md:text-medium`
        }else{
            return tw`text-extra-bold text-white md:text-semi-bold`
        }
    }}
`;

export const TitleDescription =  tw.div`
    uppercase
    text-green
    text-center
`;
export const TitleDescriptionModal =  tw.div`
    uppercase
    text-green
    text-center
    text-bold
    font-bold
`;

export const StyleModalLogin =  styled.div`
    ${tw`
        fixed
        top-0
        left-0
        w-full
        h-full
        z-20
    `}
    ${props => {
        if(props.$active){
            return tw`flex justify-center`
        }else{
            return tw`hidden`
        }
    }}
`;
export const StyleIconEye = tw.div`cursor-pointer`
export const StylesDetailInner =  styled.div`
    ${tw`relative xl:px-[15px]`}
    ${(props)=>{
        if(props.$wide){
            return tw`max-w-[880px]`
        }else{
            return tw`max-w-[473px]`
        }
    }}
`;

export const StylesLoginModalBox =  styled.div`
    ${tw`
        bg-[transparent]
        rounded-[8px] 
        relative
        z-2
        max-h-[91.5vh] 
        sm:max-h-screen 
        relative 
        mx-auto
        z-[20]
        min-w-[400px]
        lg:overflow-y-auto`
    }
    &::-webkit-scrollbar {
        width: 0;
    }
`;

export const StylesIconClose =  styled.i`
    ${tw`
        absolute 
        top-[0px] 
        right-[0px]
        md:top-[8px] 
        md:right-[8px] 
        cursor-pointer 
        flex
    `}
    svg{
        ${tw`h-[29.7px] w-[29.7px] opacity-100 hover:opacity-80`}
    }
`;

export const StyleModalLoginWapper =  tw.div`
    flex
    items-center
    justify-center
    lg:items-center
    relative 
    z-20
    w-full 
    h-full
`;

export const StyleOverlay  =  tw.div`
    absolute
    cursor-pointer
    bg-black
    opacity-[0.9]
    top-[0]
    left-[0]
    w-screen
    h-screen
    z-1
`;

export const FormItems = styled.div`
    ${tw`
        mt-[32px]
    `}
    ${(props) => {
        if(!props.$cols){
            return tw` flex flex-col space-y-[20px]`
        }else if(props.$cols === 2){
            return tw`grid grid-cols-2 lg:grid-cols-1 gap-[20px] md:gap-[15px]`
        }    
    }}
`

export const FormItemsInput = styled.div`
    label{
        ${tw`
            flex
            justify-start
            items-center 
            w-full
            xl:w-full 
            h-[60px]
            py-[18.75px] 
            md:py-[13px]
            md:h-[45px]
            mx-auto
            px-[38px] 
            bg-white 
            rounded-[61px]
        `}
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active{
            -webkit-box-shadow: 0 0 0 30px white inset !important;
        }
        svg{
            ${tw`w-[30px]`}
        }
        input{
            ${tw`bg-[transparent] border-none ml-[25px] focus:outline-none`}
            width: calc(100% - 55px);
        }
        .basic-single{
            ${tw`w-full`}
            [class*="control"]{
                border: none; 
                outline: none;
                &:focus{
                    border: none;
                }
            }
        }
        ${props => {
            if(props.$error){
                return `border: 2px solid red;`
            }
        }}
    }
    .select__menu {
        &-list{
            ${tw`h-[200px] overflow-auto`}
        }
    }
`

export const FormSubmit = styled.div`
    ${tw`w-[182px] mx-auto mt-[32px] mb-[24px]`}
    a{
        ${tw`text-medium w-[182px] h-[45px]`}
    }
`


const StyleSuccess = tw.div`
    bg-white
    rounded-[5px]
    overflow-hidden
`
const StyleIcon = styled.div`
    ${
        tw`
            flex
            justify-center
            bg-green
            p-[24px]
        `
    }
    img {
        ${
            tw`
                w-[100px]
                h-[100px]
            `
        }

    }

`
const StyleText = styled.div`
    ${
        tw`p-[24px] text-center`
    }
`
const StyleTextDesSuccess = tw.div`
    mx-auto
    mt-[20px]
    max-w-[300px]
`
const StyleTextError = tw.div`
    pt-[10px]
    text-red
    text-center
    capitalize
    max-w-[400px]
`
const StyleTextDes = tw.div`text-white text-medium max-w-[459px] m-auto mt-[24px] text-center`
const StyleTextForgot = styled.div`
    ${tw`cursor-pointer text-green text-normal text-center`}
    span{
        ${tw`border-0 border-solid border-b-[0.05px] border-green`}
    }
`
const StyleTextWarning = styled.div`
    ${tw`cursor-pointer text-white text-normal text-center max-w-[400px] mx-auto mt-[0px]`}
    span{
        ${tw`border-0 border-solid border-b-[0.05px] border-green`}
    }
`
const StyleCapcha = tw.div`
    ml-auto
    max-w-[200px]
    bg-white
    rounded-[10px]
    flex
    items-center
    justify-center
    p-[10px]
    h-[60px]
    md:h-[45px]
    sm:p-[5px]
`

const FormFlex = styled.div`
    ${tw`flex flex-row-reverse gap-[10px] justify-between`}
    ${FormItemsInput}{
        label{
            ${tw`max-w-[300px]`}
        }
    }
`
const StyleButtonSuccess = tw.div`max-w-[100px] m-auto mt-[24px]`
const StyleCommit = styled.div`
    ${tw`lg:max-w-[400px]`}
    label {
        ${tw`text-white ml-[20px]`}
    }
`
export { StyleSuccess, StyleIcon, StyleText, StyleTextError, StyleTextDes,
    StyleTextForgot,FormFlex, StyleTextDesSuccess, StyleCapcha, StyleButtonSuccess, StyleTextWarning, StyleCommit }