import Heading from "@Component/commons/Heading";
import { StyleInfors, StyleNameDate, StyleFullName, StyleDetails, StyleItemDetail, StyleStatus } from "./style";
import useTranslation from "next-translate/useTranslation";
const Infors = ({ infor }) => {
    const { tournament_fullname, dates, par, prize_money, tournament_status } = infor;
    const { t } = useTranslation()
    return <StyleInfors>
        <StyleNameDate>
            <StyleFullName>
                <Heading mode="heading-h5" tagName="h5">
                    {tournament_fullname}
                </Heading>
            </StyleFullName>
            {tournament_status && <StyleStatus>
                {tournament_status}
            </StyleStatus>}
        </StyleNameDate>
        <StyleDetails>
            {dates && <StyleItemDetail>{t("common:dates")}: {dates}</StyleItemDetail>}
            {par && <StyleItemDetail>{t("common:modal.par")}: {par}</StyleItemDetail>}
            {prize_money && <StyleItemDetail>
                {t("common:prizeMoney")}: {prize_money}
            </StyleItemDetail>}
        </StyleDetails>
    </StyleInfors>
}
export default Infors
