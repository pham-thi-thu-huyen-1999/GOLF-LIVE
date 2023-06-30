import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CardItem from '@Component/commons/CardItem'
import { Grid, Pagination, Virtual } from "swiper";
import {useGlobalState} from "@Dto/states"

import {
    ListPostsWrapper,
    ListPostsInner,
    ListPostsContent,
    StyleGroupPost,
    StyleTitleList, StylePagination,
    StyleContentList
} from '@Component/global/ListPosts/style'
import { Container, ContainerChildren } from '../../../styles/container'
import Heading from "@Component/commons/Heading";
import { findAllNews } from "graphQL/news";
import { Get } from "@Dto/Api";

const ListPosts = ({ relatived = false, category = "news", classPagination }) => {
    const [media] = useGlobalState("media");
    const [posts, setNewPosts] = useState([])
    const [page, setPage] = useState(1)
    const [arrPage, setArrPage] = useState([])
    const [findNews, setFindNews] = useState({});
    const limit = 24;
    const groupBy = (objectArray, size) => {
        let arrays = [];
        for (let i = 0; i < objectArray.length; i += size) {
            arrays.push(objectArray.slice(i, i + size));
        }
        return arrays
    }

    const callAPINews = async () => {
        const { data } = await Get({ query: findAllNews({ page, limit, category }) })
        let newData = [...posts, ...data.findAllNewsInCMS.docs];
        setArrPage(groupBy(newData, relatived ? 3 : (media === "mobile" ? 2 : media === "tablet" ? 4 : 6)))
        setNewPosts(newData)
        setFindNews(data.findAllNewsInCMS)
    }

    useEffect(() => {
        callAPINews()
    }, [page])

    const onChangePage = e => {
        if (e.swipeDirection === "next") {
            if (page < findNews.pages) {
                setPage(page + 1)
            }
        }
    }

    const paginationRelative= {
        el: `.${classPagination}`,
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: true,
    }
    return <ListPostsWrapper $relatived={relatived}>
        <Container>
            <StyleContentList>
                {/* {!relatived &&
                    <StyleTitleList>
                        <Heading tagName="h3" color="green">{category}</Heading>
                    </StyleTitleList>} */}
                <ListPostsInner>
                    <StylePagination className={classPagination} $relatived={relatived}></StylePagination>
                    <ListPostsContent $relatived={relatived}>
                        <Swiper
                            slidesPerView={1}
                            // grid={{
                            //     rows: 2
                            // }}
                            spaceBetween={30}
                            pagination={paginationRelative}
                            allowSlideNext={true}
                            // breakpoints={{
                            //     992: {
                            //         slidesPerView: 3,
                            //     },
                            //     375: {
                            //         slidesPerView: 2,
                            //     },
                            //     320: {
                            //         slidesPerView: 1,
                            //     },
                            // }}
                            modules={[Grid, Pagination]}
                            className="mySwiper"
                            onSlideChange={onChangePage}
                        >
                            {/* {!!posts && posts.map((item, index) => (
                            <SwiperSlide key={`${item._id}-${index}`} virtualIndex={index}><CardItem data={item}/></SwiperSlide>
                        ))} */}
                            {
                                arrPage.length > 0 && arrPage.map((item, index) => {
                                    return <SwiperSlide key={`${item._id}-${index}`} virtualIndex={index}>
                                        <StyleGroupPost>
                                            {
                                                !!item && item.map((cardItem, index) => (
                                                    <CardItem data={cardItem} />
                                                ))
                                            }
                                        </StyleGroupPost>
                                    </SwiperSlide>
                                })
                            }
                        </Swiper>
                    </ListPostsContent>
                </ListPostsInner>
            </StyleContentList>
        </Container>
    </ListPostsWrapper >
}

export default ListPosts
