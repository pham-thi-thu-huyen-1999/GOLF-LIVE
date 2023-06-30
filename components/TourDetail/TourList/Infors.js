import Heading from "@Component/commons/Heading";
import { StyleInfors, StyleNameDate, StyleFullName, StyleDetails, StyleItemDetail, StyleStatus } from "./style";
import useTranslation from "next-translate/useTranslation";
const Infors = ({ fullName, dates, par, prizeMoney,tournament_status }) => {
    const { t } = useTranslation()
    return <StyleInfors>
        <StyleNameDate>
            <StyleFullName>
                <Heading mode="heading-h5" tagName="h5">
                    {fullName}
                </Heading>
            </StyleFullName>
            {tournament_status && <StyleStatus>
                {tournament_status}
            </StyleStatus>}
        </StyleNameDate>
        <StyleDetails>
            {dates && <StyleItemDetail>{t("common:dates")}: {dates}</StyleItemDetail>}
            {par && <StyleItemDetail>{t("common:modal.par")}: {par}</StyleItemDetail>}
            {prizeMoney && <StyleItemDetail>
                {t("common:prizeMoney")}: {prizeMoney}
            </StyleItemDetail>}
        </StyleDetails>
    </StyleInfors>
}
export default Infors
