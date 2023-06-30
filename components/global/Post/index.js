import React, { useEffect, useState } from "react";
import {
    PostWrapper,
    PostInner,
    PostContent,
    NavStyle,
    PostImageWrapper,
    PostImageInnerItem,
    PostImageInner,
    PostImageContentInner,
    DatePost,
    HeadingPost,
    PostImageInnerImg,
    PostImageContent,
    StyleLinkSource
} from '@Component/global/Post/style'
import { Container, ContainerChildren } from '@Styles/container'
import ImageComp from "@Component/commons/Image";
import Heading from "@Component/commons/Heading";
import ShareWith from "@Component/global/ShareWith";
import moment from "moment";
import useTranslation from "next-translate/useTranslation";
import { googleTranslate } from "utils/googleTranslate";
const Post = ({ posts, data }) => {
    const [title, setTitle]  = useState(posts.title)
    const [content, setContent]  = useState(posts.content)
    const newDate = moment(posts?.date).format("YYYY-MM-DD")
    const { t, lang } = useTranslation();
    useEffect(() => {
        if (lang) {
            if (posts) {
                googleTranslate.translate(`${title}`, lang, function (err, translation) {
                    if (err) return
                    setTitle(translation.translatedText)
                });
                googleTranslate.translate(`${content}`, lang, function (err, translation) {
                    if (err) return
                    setContent(translation.translatedText)
                });
            }
        }
    }, [])
    return <PostWrapper>
        <Container>
                <PostInner>
                    <PostContent>
                        {posts && (
                            <>
                                <PostImageWrapper>
                                    <PostImageInner>
                                        <PostImageInnerImg>
                                            {posts?.image ? 
                                            <img src={posts?.image} alt="" /> : null}
                                            {/* <ImageComp img={posts?.image} alt="image-Post" objectFit='cover' /> */}
                                        </PostImageInnerImg>
                                        <PostImageInnerItem>
                                            <DatePost>
                                                {newDate}
                                            </DatePost>
                                            <HeadingPost>
                                                <Heading
                                                    tagName="h2"
                                                    mode="heading-h2"
                                                >
                                                    {title}
                                                </Heading>
                                            </HeadingPost>
                                        </PostImageInnerItem>
                                    </PostImageInner>
                                    <PostImageContent>
                                        <PostImageContentInner dangerouslySetInnerHTML={{ __html: content }} />
                                        {posts.category === "news" &&
                                        <StyleLinkSource>{t("common:source")}: <a href={`https://${posts.source}`} target="_blank">{posts.source}</a></StyleLinkSource> }
                                    </PostImageContent>
                                </PostImageWrapper>
                            </>
                        )}
                        <ShareWith data={data} />
                    </PostContent>
                </PostInner>
        </Container>
    </PostWrapper>
}

export default Post
