import {
    StylePlayCard,
    TitleTablePlayerContent,
    TitleTablePlayerScroll,
    StylesHeaderStatistics,
    StylesHeaderStatisticsText,
    StylesDetailPlayerInner,
    StylesDetailPlayerHeader,
    StylesDetailPlayerInnerContent,
    StyleAvata,
    ImageCountry,
    StylesDetailPlayerInnerHeading,
    StylesWorldNumber,
    StylesCountryFlag
} from "./style";
import { StyleAvt, StylesDetailPlayer, StylesDetailPlayerContent, StylesHeaderInfo, TitlePlayer, TitleTablePlayer } from "../style"
import Table from "@Component/commons/Table";
import Breadcrumb from "@Component/commons/Breadcrumb";
import ImageComp from "@Component/commons/Image";
import TableDetail from "@Component/commons/TableDetail";
import ReactCountryFlag from "react-country-flag"
import useTranslation from "next-translate/useTranslation";

const PlayDetailRanking = ({ data }) => {
    const { events,statistics,country,world_number,avatar,player_name } = data;
    const {  t } = useTranslation();

    return <>
        <StylesDetailPlayerHeader>
            <StyleAvata>
                <ImageComp img={avatar} alt="avatar" objectFit="cover"/>
            </StyleAvata>
            <StylesDetailPlayerInner>
                <StylesDetailPlayerInnerHeading>
                    {/* <StylesCountryFlag>
                        <ReactCountryFlag
                            countryCode={"US" || country}
                            svg
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            title={country}
                        />
                    </StylesCountryFlag> */}
                    <TitlePlayer>{player_name}</TitlePlayer>
                </StylesDetailPlayerInnerHeading>
                <StylesDetailPlayerInnerContent>
                    <StylesHeaderStatistics>
                        <StylesHeaderStatisticsText>{t("common:statistics")}</StylesHeaderStatisticsText>
                        <StylesWorldNumber>{t("common:wordNumber")}<span>{world_number}</span></StylesWorldNumber>
                    </StylesHeaderStatistics>
                    <TableDetail list={statistics}/>
                </StylesDetailPlayerInnerContent>
            </StylesDetailPlayerInner>
        </StylesDetailPlayerHeader>
        <StylePlayCard>
            <TitleTablePlayerScroll>
                <TitleTablePlayerContent>
                    <Table list={events} mode={false}/>
                </TitleTablePlayerContent>
            </TitleTablePlayerScroll>
        </StylePlayCard>
    </>
}

export default PlayDetailRanking
