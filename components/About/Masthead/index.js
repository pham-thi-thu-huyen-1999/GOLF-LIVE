import ImageComp from "@Component/commons/Image";
import {ImageWrapper, MastheadAboutWrapper, MastheadContent} from "@Component/About/Masthead/style";
import {StyleHeading} from "@Component/commons/Heading/style";

export function Masthead({data}){
    return <>
        <MastheadAboutWrapper>
            {data?.image_masthead ?
                <ImageWrapper>
                    <img src={data.image_masthead} alt="golf-live-masthead" />
                </ImageWrapper> : null}
            <MastheadContent>
                <p dangerouslySetInnerHTML={{__html:data.description}} />
            </MastheadContent>
        </MastheadAboutWrapper>
        <StyleHeading $mode={'heading-h1'}>
            About Us
        </StyleHeading>
    </>
}
