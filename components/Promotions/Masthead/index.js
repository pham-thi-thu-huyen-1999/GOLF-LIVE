import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageContent from './ImageContent'
import { Pagination, Autoplay } from "swiper";

import {
    MastheadWrapper,
    MastheadInner,
    MastheadContent,
} from './style'
const Masthead = ({ pros }) => {
    const paginationPromo = {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: true,
    }
    return <MastheadWrapper>
        <MastheadInner>
            <MastheadContent>
                {pros?.length && <Swiper
                    pagination={paginationPromo}
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
                    {pros?.slice(0, 3).map((item, index) => {
                        return <SwiperSlide key={`${item._id}${index}`}><ImageContent data={item} /></SwiperSlide>
                    })}
                </Swiper>}
            </MastheadContent>
            <div className="swiper-pagination"></div>
        </MastheadInner>
    </MastheadWrapper>
}

export default Masthead
