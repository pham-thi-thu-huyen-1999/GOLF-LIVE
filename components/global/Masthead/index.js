import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageContent from '@Component/commons/ImageContent'
import { Pagination, Autoplay } from "swiper";

import {
    MastheadWrapper,
    MastheadInner,
    MastheadContent,
    NavStyle,
    MastheadBg
} from '@Component/global/Masthead/style'
import { Container } from '@Styles/container'
import ImageComp from "@Component/commons/Image";
import bgImage from "/public/images/masthead-bg.png"
import bgImageMb from "/public/images/masthead-bg-mb.png"
const Masthead = ({ posts }) => {
    return <MastheadWrapper>
        <MastheadBg>
            <ImageComp img={bgImage} imgMb={bgImageMb} alt="bg-masthead" objectFit="cover" />
        </MastheadBg>
        <Container>
            <MastheadInner>
                <MastheadContent>
                    {posts?.length && <Swiper
                        pagination={{
                            clickable: true
                        }}
                        spaceBetween={30}
                        // autoplay={
                        //     {
                        //         delay: 3000,
                        //         waitForTransition: 3000
                        //     }
                        // }
                        loopAdditionalSlides={0}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                        loop={true}
                    >
                        {posts?.slice(0, 6).map((item, index) => {
                            return <SwiperSlide key={`${item._id}${index}`}><ImageContent data={item} /></SwiperSlide>
                        })}
                    </Swiper>}
                </MastheadContent>
            </MastheadInner>
        </Container>
    </MastheadWrapper>
}

export default Masthead
