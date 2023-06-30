import {
    StyleHeader, StyleLogo, StyleContentHeader, StyleHeaderRight,
    StyleText, StyleNavigation, StyleLogoText, StyleNav, StyleNavList
} from "./style";
import Image from "../../commons/Image";
import logoGolf from "/public/images/IGX-main.png";
import Button from "../../commons/Button";
import { Container } from "@Styles/container"
import DropdownCountries from "./DropdownCountries"
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import { HamburgerIcon } from "@Component/commons/Icon";
import Link from "next/link";
import { setOverflowState } from "@Dto/states";
import useTranslation from 'next-translate/useTranslation'
import { countries } from "../../../utils/constants";
import logoGolfChina from "/public/images/logo-GL-china.png";
import logoGolfChinaMb from "/public/images/logo-GL-china-mb.png";
import { useRouter } from "next/router";

const Header = ({ data }) => {
    const CHECK_MODE = process.env.MODE !== 'mmm';
    const [isMobile, setIsMobile] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const { t, lang } = useTranslation()
    const [isChina, setIschina] = useState(false);
    const {pathname} = useRouter()

    useEffect(() => {
        const checkWindowMedia = window.matchMedia('(max-width: 992px)').matches
        if (checkWindowMedia) return setIsMobile(true)
    }, [])
    const onShowModal = (isShowModal) => {
        if (isShowModal) {
            document.getElementsByTagName('body')[0].classList.add('overflow-hidden')
        } else {
            document.getElementsByTagName('body')[0].classList.remove('overflow-hidden')
        }
        setShowModal(!showModal)
    }
    function onScrollShowHeader() {
        let headerClass = refHeader.current
        setScrollY(window.pageYOffset);
        if (scrollY < window.pageYOffset) {
            headerClass = headerClass.classList.add("header-scrolling")
        } else {
            headerClass = headerClass.classList.remove("header-scrolling")
        }
    }

    useEffect(() => {
        if ((lang === "zh-CN") || (lang === "zh-TW")) {
            setIschina(true)
        } else {
            setIschina(false)
        }
    }, [lang])

    const logoGolfLive = isChina ? logoGolfChinaMb : logoGolf;
    return <StyleHeader>
        <Container>
            <StyleContentHeader>
                {isMobile && <StyleNavigation onClick={() => onShowModal(!showModal)}>
                    <HamburgerIcon />
                </StyleNavigation>
                }
                {isMobile ?
                    <Navbar isShow={showModal} onSclose={() => onShowModal(!showModal)} /> : ""}
                <StyleLogoText>
                    <StyleLogo>
                        <Link href={'/'}>
                            <a><Image img={logoGolfLive} alt="golf" width={isMobile ? "150px" : "230px"} height={!isMobile ? (isChina ? "70px" : "40px") : "34px"} objectPosition={"left"} /></a>
                        </Link>
                    </StyleLogo>
                    {!isChina && <StyleText>
                        International Golf Exchange
                    </StyleText>}
                </StyleLogoText>
                <StyleHeaderRight>
                    {
                        !isMobile && (<StyleNavList>
                                <StyleNav  $activeLink={pathname === "/promotions"}>
                                    <Link href="/promotions">
                                        Promotion
                                    </Link>
                                </StyleNav>
                                <StyleNav $activeLink={pathname === "/about"}>
                                    <Link href="/about">
                                        About Us
                                    </Link>
                                </StyleNav>
                                <StyleNav $activeLink={pathname === "/faq"}>
                                    <Link href="/faq">
                                        FAQ
                                    </Link>
                                </StyleNav>
                            </StyleNavList>
                        )
                    }

                    {
                        CHECK_MODE ? <Button bg="black" onClick={(event) => {
                            event.preventDefault()
                            setOverflowState('signup')
                        }} type="submit">
                            {t('common:button.signUp')}
                        </Button> : <></>
                    }
                    <Button bg="blue" onClick={(event) => {
                        event.preventDefault()
                        setOverflowState('login')
                    }} type="submit">
                        {t('common:button.login')}
                    </Button>
                    <DropdownCountries countries={countries} />
                </StyleHeaderRight>
            </StyleContentHeader>
        </Container>
    </StyleHeader>
}

export default Header





