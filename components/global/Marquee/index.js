import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import {MarqueeArea, MarqueeContainer, MarqueeItem} from "@Component/global/Marquee/style";



const getFillList = (list, copyTimes = 1) => {
    let newlist = [];
    for (let i = 0; i < copyTimes; i++) {
        newlist.push(...list);
    }

    return newlist;
};

const Marquee = ({ list, time, toRight,customCopy=null, ...props }) => {
    const marqueeContainer = useRef(null);
    const marqueeArea = useRef(null);
    const [moveLeft, setMoveLeft] = useState(0);
    const [showList, setShowList] = useState(list);
    const [realTime, setRealTime] = useState(time);

    useEffect(() => {
        const containerWidth = Math.floor(marqueeContainer.current.offsetWidth);
        const areaWidth = Math.floor(marqueeArea.current.scrollWidth);
        let copyTimes = Math.max(2, Math.ceil((containerWidth * 2) / areaWidth));
        if(customCopy !== null){
            copyTimes = customCopy
        }
        const newMoveLeft = marqueeContainer.current.offsetWidth + marqueeArea.current.scrollWidth ;
        const newRealTime =
            time * parseFloat((newMoveLeft / containerWidth).toFixed(2));

        setShowList(getFillList(list, copyTimes));
        setMoveLeft(newMoveLeft);
        setRealTime(newRealTime);
    }, [list,marqueeContainer]);

    return (
        <MarqueeContainer ref={marqueeContainer} {...props}>
            <MarqueeArea
                ref={marqueeArea}
                move={moveLeft}
                time={realTime}
                toRight={toRight}
                $startFrom={props.$startFrom}
            >
                {showList.map((item,index) => {
                    return <MarqueeItem key={`marquee-${index}`} dangerouslySetInnerHTML={{__html:item}}/>;
                })}
            </MarqueeArea>
        </MarqueeContainer>
    );
};

Marquee.defaultProps = {
    list: [],
    time: 10
};
export default Marquee;
