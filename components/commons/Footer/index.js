import Link from 'next/link'
import {
    FooterWrapper,
    FooterInner,
    FooterFollow,
    FooterItem,
    FooterContent,
    FooterListItem,
    FooterLink,
    FooterFollowText,
    FooterSocialMedia,
    FooterSocialMediaItem,
    FooterItemText,
    FooterLogo,
    FooterGroupFollow
} from '@Component/commons/Footer/style'
import * as Icon from '@Component/commons/Icon'
import { Container } from '../../../styles/container'
import Logo from '../../../public/images/IGX-footer.png'
import LogoGaming from '../../../public/images/footer-logo1.png'
import ImageComp from "@Component/commons/Image";
import imgGaming from "../../../public/images/gamingPdf-1.jpg"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation';

import logoGolfChinaFooter from "/public/images/logo-GL-china-footer.png";
import logoGolfChinaFooterMb from "/public/images/logo-GL-china-footer-mb.png";

const Footer = ({ data }) => {
    const CHECK_MODE = process.env.MODE !== 'mmm';
    const { t: trans, lang } = useTranslation()
    const [isOpen, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isChina, setIschina] = useState(false);
    useEffect(() => {
        const checkWindowMedia = window.matchMedia('(max-width: 992px)').matches
        if (checkWindowMedia) return setIsMobile(true)
    }, [])
    useEffect(() => {
        let html = document.querySelector('html')
        if (isOpen) {
            html.style.overflow = "hidden"
        } else {
            html && (html.removeAttribute("style"))
        }
    }, [isOpen])

    useEffect(() => {
        if ((lang === "zh-CN") || (lang === "zh-TW")) {
            setIschina(true)
        } else {
            setIschina(false)
        }
    }, [lang])
    const renderSocial = () => {
        let social = data.socialMedia
        if (CHECK_MODE) { // igx360
            social = data.socialMedia
        } else { // igx18
            social = data.socialMedia18
        }
        return social
    }
    const logoFooter = (isChina ? (!isMobile ? logoGolfChinaFooter : logoGolfChinaFooterMb) : Logo)
    const objectPosition = (isChina ? (!isMobile ? "center" : "left") : "left")

    return <><FooterWrapper>
        <Container>
            <FooterInner>
                <FooterContent>
                    <Link href={data?.urlHomePage}>
                        <FooterLink>
                            <ImageComp img={logoFooter} width={"166px"} height={"35px"} objectPosition={objectPosition} />
                        </FooterLink>
                    </Link>
                    <FooterListItem>
                        {/* {data?.listItem.map((item,index) => (
                            <FooterItem key={`footer-item-${index}`}>
                                <Link href={item?.url}>
                                    <FooterItemText target="_blank" rel="noopener">{item?.text}</FooterItemText>
                                </Link>
                            </FooterItem>
                        ))} */}
                        {trans("common:footer.copyright")}
                    </FooterListItem>
                </FooterContent>
                <FooterFollow>
                    <FooterGroupFollow>
                        <FooterFollowText>
                            {trans("common:footer.followus")}
                        </FooterFollowText>
                        <FooterSocialMedia>
                            {renderSocial().map((item, index) => {
                                let Img = Icon[item?.icon]
                                return <FooterSocialMediaItem key={`footer-social-${index}`}>
                                    <Link href={item?.urlIcon}>
                                        <a target="_blank" rel="noopener">
                                            <Img />
                                        </a>
                                    </Link>
                                </FooterSocialMediaItem>
                            })}
                        </FooterSocialMedia>
                    </FooterGroupFollow>
                    <FooterLogo onClick={() => setOpen(true)}>
                        <ImageComp img={LogoGaming} width="154px" height="51px" />
                    </FooterLogo>
                </FooterFollow>
            </FooterInner>
        </Container>
        {isOpen && (
            <Lightbox
                mainSrc={imgGaming.src}
                onCloseRequest={() => setOpen(false)}
                mainSrcThumbnail="loading"
            />
        )}
    </FooterWrapper>
    </>
}
export default Footer
