import { StyleColHeading } from "@Component/commons/Table/style";
import useTranslation from "next-translate/useTranslation";

const HeadingItem = ({ item, mode }) => {
    const { t } = useTranslation();

    return <StyleColHeading $mode={mode}>
        {t(`common:${item}`)}
    </StyleColHeading>
}
export default HeadingItem
