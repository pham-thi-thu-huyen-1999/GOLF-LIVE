import { StyleColContent } from "@Component/commons/TableDetail/style";

import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

const HeadingItem = ({ item }) => {
    const { t } = useTranslation()

    return <StyleColContent>
        {t(`common:${item}`)}
    </StyleColContent>
}

export default HeadingItem
