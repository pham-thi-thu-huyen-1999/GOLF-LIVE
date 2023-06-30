import {
    FeatureContain,
    FeatureContent, FeatureDescription,
    FeatureImg,
    FeatureImgWrap, FeatureTitle,
    FeatureWrapper
} from "@Component/About/Feature/style";
import ImageComp from "@Component/commons/Image";

export default function  Feature({data}){

    return <>
        <FeatureWrapper>
            <FeatureContain>
                <FeatureImg>
                    <FeatureImgWrap>
                        <img src={data.image_masthead} alt={'golf-live-feature'}/>
                    </FeatureImgWrap>
                </FeatureImg>
                <FeatureContent>
                    <FeatureTitle>
                        <p>{data.feature_title}</p>
                    </FeatureTitle>
                    <FeatureDescription dangerouslySetInnerHTML={{__html:data.feature_content}} />
                </FeatureContent>
            </FeatureContain>
        </FeatureWrapper>
    </>
}
