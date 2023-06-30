import tw, { styled } from "twin.macro";

export const StyleHeading = styled.div`
  ${tw`
    uppercase
  `}
  ${(props) => {
    switch (props.$mode) {
      case "heading-h1":
        return tw`
          text-extra-bold
          font-body
          font-extra-bold
          md:text-[24px]
          md:leading-[29px]
        `;
      case "heading-h2":
        return tw`
          text-semi-bold
          font-body
          font-extra-bold
          md:text-medium
          md:leading-[22px]
        `;
      case "heading-h3":
        return tw`
          text-bold
          font-body
          font-extra-bold
          md:text-medium
      `;
      case "heading-h4":
        return tw`
          text-medium
          font-body
          font-extra-bold
        `;
      case "heading-h5":
        return tw`
          text-normal
          font-body
          font-extra-bold
          md:text-thin
      `;
    }
  }}
  ${props => {
    if (props.$color) {
      switch (props.$color) {
        case "green":
          return tw`
              text-green
            `
        case "white":
          return tw`
              text-white
            `
        case "gray":
          return tw`
              text-gray
            `
        case "gray-500":
          return tw`text-gray-500`
      }
    }
  }}
  ${props => {
    if(props.$row){
      return `
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      `
    }
  }}
`;