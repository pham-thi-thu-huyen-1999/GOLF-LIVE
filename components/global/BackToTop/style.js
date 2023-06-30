import tw from "twin.macro";
import styled from "styled-components";

export const ButtonBackToTop = styled.button`
  &.back-to-top {
   ${tw`bg-red-800 w-[48px] h-[48px] fixed bottom-[100px] right-[50px] lg:right-[12px] cursor-pointer border-0 z-10 rounded-full`}
 }
 &.back-to-top:hover {
   ${tw`bg-red`}
`;
