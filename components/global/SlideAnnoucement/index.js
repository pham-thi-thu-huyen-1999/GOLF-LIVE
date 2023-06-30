import {
    SlideAnnoucementStyle, StyleListAnnoucementText
} from './style'
import {useEffect, useState} from "react";
import Marquee from "@Component/global/Marquee";
const SlideAnnoucement = ({announcements}) => {
    const [timeDuration,setTimeDuration] = useState(32)
    const DATA_LIST = announcements?.map((announcements,index)=>{
        return announcements.title
    })
    useEffect(()=>{
        if(window.matchMedia('(max-width: 767px)').matches)
            setTimeDuration(10)
    },[])
    return <SlideAnnoucementStyle>
        <div className='marquee'>
            <Marquee list={DATA_LIST} time={timeDuration} toLeft customCopy={10} $startFrom={`100vw`} />
        </div>
    </SlideAnnoucementStyle>
}

export default SlideAnnoucement
