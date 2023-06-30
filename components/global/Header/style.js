import tw from 'twin.macro'
import styled from 'styled-components'

const StyleHeader = styled.div`
    ${tw`
        max-h-[140px]
        py-[30px]
        lg:px-[12px]
        lg:pt-[30px]
        lg:pb-[24px]
        w-full
        bg-white
        z-9
        border-0
        border-b
        border-solid
        border-black
        top-0
        lg:border-0
        relative
    `}
    transition: all .3s ease-in-out;
    transform: translateY(0);
    &.header-scrolling {
        transition: all .3s ease-in-out;
        transform: translateY(-100%);
    }
`
const StyleLogo = styled.div`
    ${tw`
        flex
        items-center
        lg:justify-start
        w-[210px]
        cursor-pointer
        lg:h-[26px]
        lg:w-auto
        lg:ml-[37px]
        sm:ml-[10px]
    `}
`
const StyleLogoText = styled.div``
const StyleText = tw.div`
    text-light
    leading-[17px]
    lg:ml-[37px]
    lg:text-thin
    sm:ml-[10px]
`
const StyleContentHeader = styled.div`
    ${tw`
        flex
        items-center
        lg:items-start
    `}
`
const StyleHeaderRight = styled.div`
    ${tw`
        flex-1
        flex
        justify-end
        items-center
        gap-[24px]
        lg:gap-x-[5px]
    `}
    a{
        ${tw`cursor-pointer`}
    }
`
const StyleDropDownCountries = styled.div`
    ml-[30px]
`

const StyleNavigation = styled.div`
    ${tw`
        flex
        items-center
        cursor-pointer
    `
    }
    .ham {
        ${tw`
            cursor-pointer
            w-[60px]
            ml-[-16px]
        `}
        -webkit-tap-highlight-color: transparent;
        transition: transform 400ms;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        &.active{
            .line{
                stroke: #fff;
            }
            .top {
                stroke-dashoffset: -98px;
            }
            .bottom {
                stroke-dashoffset: -138px;
              }
        }
        .top {
            stroke-dasharray: 40 139;
        }
        .bottom {
            stroke-dasharray: 40 180;
        }
    }
    .hamRotate.active {
        transform: rotate(45deg);
    }
    .hamRotate180.active {
        transform: rotate(180deg);
    }
    .line {
        fill:none;
        transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
        stroke:#000;
        stroke-width:5.5;
        stroke-linecap:round;
    }
`
const StyleItem = styled.option``

const StyleModalNavbar = styled.div`
    ${tw`
        h-0
        lg:bg-black
    `
    }
    transition: height 3s;
    transform: translateY(0);
    ${props => {
    if (props.$isShowMobile) {
        return "transition: height 3s; transform: translateY(100%);" && tw`
            lg:h-full
            opacity-100
        `}
    }
    }
`
const StyleNav = styled.li`
    ${tw`mx-[24px]`}
    ${props => {
        if(props.$activeLink){
            return tw`text-green uppercase`
        }
    }}
`
export const StyleNavList= styled.div`
    ${tw`flex lg:justify-center lg:mb-32px`}
`
export {
    StyleHeader, StyleLogo,
    StyleContentHeader, StyleHeaderRight,
    StyleDropDownCountries,
    StyleItem, StyleNavigation,
    StyleModalNavbar,
    StyleLogoText,
    StyleText, StyleNav
}
