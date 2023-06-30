import styled from "styled-components";
import tw from "twin.macro";

export const MastheadAboutWrapper = styled.div`
    ${tw`relative h-[380px] w-full mb-[38px] md:h-auto`}
`

export const ImageWrapper = styled.div`&>div{position:static;}
    ${tw`h-full`}
    img{
        ${tw`rounded-[10px] w-full h-full object-cover`}
    }
`

export const MastheadContent = styled.div`
    ${tw`absolute top-[211px] right-[88px] bg-black bg-opacity-[0.8] text-white px-[68px] py-[60px] text-justify w-[512px] h-[320px] rounded-[10px] flex items-center 
    lg:top-[50px] lg:right-[50px]
    md:top-1/2 
    md:right-1/2 md:w-full 
    md:h-[90%] md:static md:mt-[24px] md:bg-[transparent] md:text-black md:p-0`}
`

