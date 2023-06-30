import styled from "styled-components";
import tw from "twin.macro";

export const FeatureWrapper = styled.div`
    ${tw`mt-[120px] lg:mt-[48px]`}
`

export const FeatureContain = styled.div`
    ${tw`grid grid-cols-2 lg:grid-cols-12 lg:gap-24px md:grid-cols-1`}
`

export const FeatureImg = styled.div`
    ${tw`col-span-1 lg:col-span-4 md:col-span-1 flex items-center`}
    img{
        ${tw`rounded-[10px] w-full h-auto`}
    }
`

export const FeatureImgWrap = styled.div`
${tw`relative pr-[72px] lg:pr-0`}
    &>div{
        position:static;
        
    }
`

export const FeatureContent = styled.div`${tw`col-span-1 lg:col-span-8 flex justify-center flex-col md:col-span-1`}`

export const FeatureTitle = styled.div`${tw`text-bold  pb-24px border-0 border-b border-solid border-black mb-48px inline-block pr-32px max-w-[216px] lg:mb-24px`}`

export const FeatureDescription = styled.div`
    ${tw`max-w-[428px]`}
    p{
        ${tw`mb-32px last:mb-0 lg:mb-16px`}
    }
`
