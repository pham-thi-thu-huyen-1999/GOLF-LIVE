import Link from 'next/link'
import {
    ImageContentWrapper,
    ImageContentItem,
    ImageContentInner,
    Description,
    ButtonMasthead,
    DateMasthead,
    HeadingMasthead,
    ImageContentImg,
    StyleButtonLink,
    StyleLabelCate
} from '@Component/commons/ImageContent/style'
import Heading from '@Component/commons/Heading'
import ImageComp from '../Image'
import Button from '../Button'
import useTranslation from 'next-translate/useTranslation'
import moment from 'moment';
import { useEffect, useState } from 'react'
import { googleTranslate } from 'utils/googleTranslate'

const ImageContent = ({ data }) => {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const checkWindowMedia = window.matchMedia('(max-width: 992px)').matches
        if (checkWindowMedia) return setIsMobile(true)
    }, [])

    let url = `/${data.category}/` + data.title.toLowerCase().replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '-')
    const { t, lang } = useTranslation()
    const newDate = moment(data?.date).format("YYYY-MM-DD")
    const [title, setTitle] = useState(data.title)
    const [description, setDes] = useState(data.description)

    useEffect(() => {
        if (lang) {
            googleTranslate.translate(`${title}`, lang, function (err, translation) {
                if (err) return
                setTitle(translation.translatedText)
            });
            googleTranslate.translate(`${description}`, lang, function (err, translation) {
                if (err) return
                setDes(translation.translatedText)
            });
        }
    }, [])
    return <ImageContentWrapper>
        <ImageContentInner>
            <Link href={url}>
                <ImageContentImg>
                    {data?.image ?
                        <img src={data.image} /> : ""}
                    {/* <ImageComp img={data.image} alt="image-masthead" height={!isMobile && '600px'} objectFit='cover' /> */}
                </ImageContentImg>
            </Link>
            <ImageContentItem>
                <DateMasthead>
                    {newDate}
                </DateMasthead>
                {data.category === "announcements" ?
                    <StyleLabelCate>
                        {data.category}
                    </StyleLabelCate> : null}
                <HeadingMasthead>
                    <Heading
                        tagName="h2"
                        mode="heading-h2"
                    >
                        <Link href={url}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </Heading>
                </HeadingMasthead>
                <Description dangerouslySetInnerHTML={{ __html: description }} />
                <ButtonMasthead>
                    <Link href={url} passHref>
                        <StyleButtonLink>{t("common:button.viewMore")}</StyleButtonLink>
                    </Link>
                </ButtonMasthead>
            </ImageContentItem>
        </ImageContentInner>
    </ImageContentWrapper>
}

export default ImageContent
