import Heading from "@Component/commons/Heading";
import { StyleInfors, StyleNameDate, StyleFullName, StyleDetails, StyleItemDetail, StyleStatus } from "./style";
import useTranslation from "next-translate/useTranslation";
const Infors = ({ fullName, dates, par, prizeMoney }) => {
    const { t } = useTranslation()
    return <StyleInfors>
        <StyleNameDate>
            <StyleFullName>
                <Heading mode="heading-h5" tagName="h5">
                    {fullName}
                </Heading>
            </StyleFullName>
        </StyleNameDate>
        <StyleDetails>
            {dates && <StyleItemDetail>{t(`common:${dates}`)}: {}</StyleItemDetail>}
            {par && <StyleItemDetail>{t(`common:${par}`)}: {par}</StyleItemDetail>}
            {prizeMoney && <StyleItemDetail>
                {t("common:prizeMoney")}: {prizeMoney}
            </StyleItemDetail>}
        </StyleDetails>
    </StyleInfors>
}
export default Infors