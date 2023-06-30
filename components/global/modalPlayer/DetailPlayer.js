import {
    StyleAvt,
    StylesDetailPlayer,
    TitlePlayer,
    StylesDetailPlayerContent,
    StylesHeaderInfo,
} from "./style";

import Breadcrumb from "@Component/commons/Breadcrumb";
import PlayCardContent from "./PlayCardContent";

const DetailPlayer = (data) => {

    return <>
        <StylesDetailPlayer >
        <StyleAvt $image={data.data?.avatar} />
        <StylesDetailPlayerContent>
            <Breadcrumb />
            <TitlePlayer>{data.data?.full_name}</TitlePlayer>
            <StylesHeaderInfo>
                <span>{data.data?.header_info?.info_1}</span>
                <span>{data.data?.header_info?.info_2}</span>
            </StylesHeaderInfo>
        </StylesDetailPlayerContent>
    </StylesDetailPlayer>
    <PlayCardContent data={data.data} />
</>
}

export default DetailPlayer
