import Link from 'next/link'
import {
    ImageContentWrapper,
    ImageContentItem,
    ImageContentInner,
    Description,
    HeadingMasthead
} from './style'
import Heading from '@Component/commons/Heading'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import { googleTranslate } from 'utils/googleTranslate'
import { ContainerPromotion } from '../style';

const ImageContent = ({ data }) => {

    let url = '/news/' + data.title.toLowerCase().replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '-')
    const { t, lang } = useTranslation()
    const [title, setTitle] = useState(data.title)
    const [description, setDes] = useState(data.description)

    // useEffect(() => {
    //     if (lang) {
    //         googleTranslate.translate(`${title}`, lang, function (err, translation) {
    //             if (err) return
    //             setTitle(translation.translatedText)
    //         });
    //         googleTranslate.translate(`${description}`, lang, function (err, translation) {
    //             if (err) return
    //             setDes(translation.translatedText)
    //         });
    //     }
    // }, [])
    return <ImageContentWrapper $background={data.image}>
        <ContainerPromotion>
            <ImageContentInner>
                <ImageContentItem>
                    <HeadingMasthead>
                        <Heading
                            tagName="h2"
                            mode="heading-h2"
                        >
                            <Link href="#">
                                <a>
                                    {title}
                                </a>
                            </Link>
                        </Heading>
                    </HeadingMasthead>
                    <Description dangerouslySetInnerHTML={{ __html: description }} />
                </ImageContentItem>
            </ImageContentInner>
        </ContainerPromotion>
    </ImageContentWrapper>
}

export default ImageContent
