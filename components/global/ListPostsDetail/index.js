import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CardItem from '@Component/commons/CardItem'
import { Pagination } from "swiper";


import { 
    ListPostsDetailWrapper, 
    ListPostsDetailInner,
    ListPostsDetailContent,
    NavStyle
} from '@Component/global/ListPostsDetail/style'
import { Container } from '../../../styles/container'
const ListPostsDetailDetail = ({posts}) => {
    return <ListPostsDetailWrapper>
        <Container>
            <ListPostsDetailInner>
                <NavStyle></NavStyle>
                <ListPostsDetailContent className="col-span-10">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={15}
                        pagination={{
                          clickable: true,
                        }}
                        breakpoints={{
                            992: {
                              slidesPerView: 3,
                                spaceBetween: 61,
                            },
                          }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {!!posts && posts.slice(0,7).map((item,index) => (
                            <SwiperSlide key={item._id.$oid}><CardItem data={item}/></SwiperSlide>
                        ))}
                    </Swiper>
                </ListPostsDetailContent>
            </ListPostsDetailInner>
        </Container>
    </ListPostsDetailWrapper>
}

export default ListPostsDetailDetail
