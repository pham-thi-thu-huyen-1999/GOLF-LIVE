import styled from "styled-components";

export const MarqueeContainer = styled.div`
  position: relative;
  width: 100vw;
  padding: 8px 0;
  overflow: hidden;
  ${(props)=>{
    if(props.$startFrom){
        return `
      @keyframes moveLeft-${props.$startFrom} {
        from {
          transform: translateX(${props.$startFrom});
        }
      }
      `
    }else{
        return `
      @keyframes moveLeft {
        from {
          transform: translateX(0);
        }
      }
      `
    }
}}
  
`;

export const MarqueeArea = styled.div`
  display: inline-block;
  white-space: nowrap;
  transform: translateX(-${(props) => props.move}px);
  animation-duration:${(props) => props.time}s;
  animation-play-state: inherit;
  animation-direction:${(props) => (props.toRight ? " reverse" : "")};
  animation-iteration-count: infinite;
  animation-timing-function:linear;
  ${(props)=>{
    if(props.$startFrom){
        return `
      animation-name: moveLeft-${props.$startFrom} ;
      `
    }else{
        return `
            animation-name: moveLeft;
      `
    }
}}
`;

export const MarqueeItem = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 32px;
  &:before{
    content:'';
    width:8px;
    height:8px;
    border-radius:50%;
    background:white;
    position:absolute;
    left: -16px;
    top: 2px;
    transform: translateY(50%);
  }
`;
