import Link from 'next/link'
import {
    CardItemWrapper,
    CardItemContent,
    CardItemInner,
    Description,
    HeadingMasthead,
    CardItemImg,
    ContentItem
} from './style'
import Heading from '@Component/commons/Heading'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import { googleTranslate } from 'utils/googleTranslate'


const CardItem = ({ data }) => {
    let url = '/promotions/' + data.title.toLowerCase().replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '-')
    const { t, lang } = useTranslation()
    const [title, setTitle] = useState(data.title)
    const [description, setDescription] = useState(data.description)
    // useEffect(() => {
    //     if (lang === lang) {
    //         googleTranslate.translate(`${title}`, lang, function (err, translation) {
    //             if (err) return
    //             setTitle(translation.translatedText)
    //         });
    //     }
    // }, [])
    return <CardItemWrapper key={`${data.id}`} >
        <CardItemInner>
            <CardItemImg>
                {data?.image ?
                    <img src={data?.image} alt="" /> : null}
            </CardItemImg>
            <CardItemContent>
                <HeadingMasthead>
                    <Heading tagName="h4" mode="heading-h4" color="green">
                        {title}
                    </Heading>
                </HeadingMasthead>
                <Description>
                    {description}
                </Description>
            </CardItemContent>
        </CardItemInner>
    </CardItemWrapper>
}

export default CardItem
