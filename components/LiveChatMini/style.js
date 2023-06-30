import tw from "twin.macro";
import styled from "styled-components";

export const LiveChatMini = styled.div`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform:rotate(180deg);
    transform-origin:center center;
    color:white;
    position:fixed;
    bottom:48px;
    right:0;
    z-index:11;
    padding:24px 4px;
    line-height:110% !important;
    border-top-right-radius:110px;
    border-bottom-right-radius:110px;  
    ${tw`text-bold bg-[#2000f0] text-center text-[14px] hidden md:block`}
`
