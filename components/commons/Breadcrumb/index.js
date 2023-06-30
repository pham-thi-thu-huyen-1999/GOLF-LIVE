import { StyleBreadcrumb, StyleItemBread } from "./style";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Breadcrumb = ({ title = "PGA TOUR" }) => {
  const { t } = useTranslation();

  return <StyleBreadcrumb>
    <StyleItemBread>
      <Link href="/">{t(`common:home`)}</Link>
    </StyleItemBread>
    <StyleItemBread>
      <Link href="#!">
        {title}
      </Link>
    </StyleItemBread>
  </StyleBreadcrumb>
}
export default Breadcrumb
