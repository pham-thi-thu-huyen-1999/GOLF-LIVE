import Link from 'next/link'
import {
    CardItemWrapper,
    CardItemContent,
    CardItemInner,
    Description,
    ButtonMasthead,
    DateMasthead,
    HeadingMasthead,
    CardItemImg
} from '@Component/commons/CardItem/style'
import Heading from '@Component/commons/Heading'
import ImageComp from '../Image'
import Button from '../Button'
import useTranslation from 'next-translate/useTranslation'
import moment from 'moment';
import { useEffect, useState } from 'react'
import { googleTranslate } from 'utils/googleTranslate'
import { StyleButtonLink } from '../ImageContent/style'


const CardItem = ({ data }) => {
    let url = `/${data.category}/` + data.title.toLowerCase().replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '-')
    const { t, lang } = useTranslation()
    const newDate = moment(data?.date).format("YYYY-MM-DD")
    const [title, setTitle] = useState(data.title)
    useEffect(() => {
        if (lang === lang) {
            googleTranslate.translate(`${title}`, lang, function (err, translation) {
                if (err) return
                setTitle(translation.translatedText)
            });
        }
    }, [])
    return <CardItemWrapper>
        <Link href={url}>
            <CardItemInner>
                <CardItemImg>
                    {data?.image ?
                        <img src={data?.image} alt="" /> : null}
                    {/* <ImageComp img={data?.image} alt="image-masthead" objectFit='cover' /> */}
                </CardItemImg>
                <CardItemContent>
                    <DateMasthead>
                        {newDate}
                    </DateMasthead>
                    <HeadingMasthead>
                        <Heading tagName="h4" mode="heading-h4">
                            {title}
                        </Heading>
                    </HeadingMasthead>
                    <ButtonMasthead>
                        <StyleButtonLink>{t("common:button.viewMore")}</StyleButtonLink>
                    </ButtonMasthead>
                </CardItemContent>
            </CardItemInner>
        </Link>
    </CardItemWrapper>
}

export default CardItem
