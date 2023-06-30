import { StyleImageComponent } from "./style";
import Image from 'next/image'
import { useState, useEffect } from "react";
import { checkStaging } from 'utils/checkStaging'

const ImageComp = ({ img, imgMb, alt = "", width = "100%", height = "100%", objectFit = "contain", priority = false, quality=100, objectPosition="top" }) => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkWindowMedia = window.matchMedia('(max-width: 640px)').matches
    if (checkWindowMedia) return setIsMobile(true)
  }, [])
  let srcMobile = imgMb ? imgMb : img
  let loading = "lazy"
  if (priority) {
    loading = "eager"
  }
  return <>
    <StyleImageComponent $width={width} $height={height}>
      {img ?
        <Image
          loading={loading}
          src={!isMobile ? img : srcMobile}
          alt={alt}
          objectFit={objectFit}
          layout={'fill'}
          priority={priority}
          placeholder="blur"
          blurDataURL="https://via.placeholder.com/150"
          quality={quality}
          objectPosition={objectPosition}
        />
        : <Image
          src={`${checkStaging()}images/image-blur-placeholder.png`}
          loading={loading}
          layout={'fill'}
          width={width} height={height}
          objectFit="cover"
        />
      }
    </StyleImageComponent>
  </>
}
export default ImageComp
