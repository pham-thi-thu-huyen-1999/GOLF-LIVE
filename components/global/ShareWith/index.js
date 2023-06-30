import Link from 'next/link'
import { 
    ShareWithWrapper, 
    ShareWithInner, 
    ShareWithContent,
    ShareWithContentText,
    ShareWithSocialMedia,
    ShareWithSocialMediaItem,
} from '@Component/global/ShareWith/style'
import * as Icon from '@Component/commons/Icon'
import { Container } from '../../../styles/container'
const ShareWith = ({data}) => {
    return <ShareWithWrapper>
            <ShareWithInner>
                {/* <ShareWithContent>
                    <ShareWithContentText>
                        {data?.shareWith}
                    </ShareWithContentText>
                    <ShareWithSocialMedia>
                        {data?.socialMedia.map((item,index) => {
                            let Img = Icon[item?.icon]
                            return <ShareWithSocialMediaItem key={`ShareWith-social-${index}`}>
                                <Link href={item?.urlIcon}>
                                    <a target="_blank" rel="noopener">
                                        <Img/>
                                    </a>
                                </Link>
                            </ShareWithSocialMediaItem>
                        })}
                    </ShareWithSocialMedia>
                </ShareWithContent> */}
            </ShareWithInner>
    </ShareWithWrapper>
}

export default ShareWith
