import React, { useState, useEffect } from "react";
import CardItem from './CardItem'
import { useGlobalState } from "@Dto/states"
import {
    ListPostsWrapper,
    ListPostsInner,
    ListPostsContent,
} from './style'
import { Get } from "@Dto/Api";
import {findAllPromotion} from "../../../graphQL/findAllPromotion";
import InfiniteScroll from 'react-infinite-scroll-component';

const Promotions = ({ promotionList }) => {
    const [media] = useGlobalState("media");
    const [promotions, setPromotions] = useState(promotionList)
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1)

    const getMorePromotion = async () => {
        const {data} = await Get({ query: findAllPromotion(page + 1, 10) })
        const newPromotions = data.findAllPromotion?.docs;
        setPromotions((post) => [...post, ...newPromotions]);
        setPage(page + 1)
        setHasMore(newPromotions?.length>0)
    };

 
    return <ListPostsWrapper>
        <ListPostsInner>
            <ListPostsContent>
                <InfiniteScroll
                    dataLength={promotions?.length}
                    hasMore={hasMore}
                    next={getMorePromotion}
                    loader={''}
                >
                        {promotions.map((item, index) => {
                            return <CardItem key={`post-${index}`} data={item}/>
                        })} 
                </InfiniteScroll>
            </ListPostsContent>
        </ListPostsInner>
    </ListPostsWrapper >
}

export default Promotions
