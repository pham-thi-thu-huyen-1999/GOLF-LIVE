import { useEffect, useState } from "react";
import {
  StyleComponnentNavbar, StyleListNavigation,
  StyleHeaderNavbar,
  StyleCloseButton,
  StyleHeadingFavorite,
  StyleNumberFavs
} from "./style";
import { getDataQuery } from "../../../store/useApi"
import DropDownItem from "@Component/commons/DropDown/DropdownItem";
import { ScrollBar } from "@Styles/scroll";
import { BigContainer } from "@Styles/container";
import {StyleHeader, StyleNav, StyleNavList} from "../Header/style";
import { FooterWrapper } from "@Component/commons/Footer/style";
import { CloseIcon, Start } from "@Component/commons/Icon";
import DropdownCountries from "../Header/DropdownCountries";
import { countries } from "../../../utils/constants"
import { StyleBigTitle, StyleDropdownHeading, StyleIconHeading } from "@Component/commons/DropDown/style";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useGlobalState } from "@Dto/states";
import useFavorite from "store/useFavorite";
import { useRouter } from "next/router";

const Navbar = ({ isShow, onSclose }) => {
  const { data } = getDataQuery();
  const { t } = useTranslation();
  const [totalFavorites] = useGlobalState("totalFavorites")
  const { totalFav } = useFavorite();
  const [heightBigContainer, setHeightBigContainer] = useState(0)
  const {pathname} = useRouter()
  useEffect(() => {
    setHeightBigContainer(document.querySelector(BigContainer) ? document.querySelector(BigContainer).offsetHeight : "auto")
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkWindowMedia = window.matchMedia('(max-width: 992px)').matches
    if (checkWindowMedia) return setIsMobile(true)
  }, [])
  useEffect(() => {
    const checkWindowMedia = window.matchMedia('(max-width: 992px)').matches
    function handleScroll() {
      if (!checkWindowMedia) {
        let newScroll = document.querySelector(`${StyleComponnentNavbar}`)
        let header = document.querySelector(`${StyleHeader}`)
        let footer = document.querySelector(`${FooterWrapper}`)
        const { scrollY, innerHeight } = window;

        if (scrollY >= (header.offsetHeight + 80)) {
          newScroll.classList.add("fixed")
          if ((scrollY + innerHeight + 212) >= footer.offsetTop) {
            newScroll.classList.add("fixed-nav")
          } else {
            newScroll.classList.remove("fixed-nav")
          }
        } else {
          newScroll.classList.remove("fixed")
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return _ => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return <>
    <StyleComponnentNavbar $isShowMobile={isShow}>
      {isShow && <StyleHeaderNavbar>
        <StyleCloseButton onClick={onSclose}>
          <CloseIcon />
        </StyleCloseButton>
        <DropdownCountries countries={countries} showCountries={true} />
      </StyleHeaderNavbar>}
      <ScrollBar $max={"100%"}>
        <StyleListNavigation>
          <div>
            {
              isMobile && (<StyleNavList>
                  <StyleNav onClick={onSclose} $activeLink={pathname === "/promotions"}>
                    <Link href="/promotions">
                      Promotion
                    </Link>
                  </StyleNav>
                  <StyleNav onClick={onSclose} $activeLink={pathname === "/about"}>
                    <Link href="/about">
                      About Us
                    </Link>
                  </StyleNav>
                  <StyleNav onClick={onSclose} $activeLink={pathname === "/faq"}>
                    <Link href="/faq">
                      FAQ
                    </Link>
                  </StyleNav>
                </StyleNavList>)
            }


            <Link href="/favorites">
              <StyleHeadingFavorite>
                <StyleIconHeading><Start stroke="" fill="#FFE600" /></StyleIconHeading>
                <StyleBigTitle>
                  {t("common:favorites")}
                </StyleBigTitle>
                {totalFavorites && totalFav > 0 ? <StyleNumberFavs>{totalFavorites}</StyleNumberFavs> : ""}
              </StyleHeadingFavorite>
            </Link>
          </div>
          {data?.length && data.map((item, index) => {
            return <DropDownItem key={`navigation-${index}`} data={item} onSclose={onSclose} />
          })}
        </StyleListNavigation>
      </ScrollBar>
    </StyleComponnentNavbar>
  </>
}

export default Navbar
