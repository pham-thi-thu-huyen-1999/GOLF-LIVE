import {
  StyleFAQ, MastheadWrapper, LeftContent, RightContent, StyleTitle,
  StyleItemFAQ, StyleIconClick, StyleContentDetail, StyleLineTitle, StyleListFaq, StyleButtonSeemore
} from "./style";
import {useState, useEffect, useRef} from "react";

import tw from "twin.macro";
import {StyleHeading} from "@Component/commons/Heading/style";

const FAQComp = ({data}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [faqsData, setFaqsData] = useState(data);
  const [showMore, setShowMore] = useState(false);
  const ref = useRef(null)

  const onShowContent = (index, active) => {
    let newFaqs = faqsData;
    newFaqs = faqsData.map((item, indexFaq) => {
      if (indexFaq === index) {
        item.active = !item.active;
      }else{
        item.active = false
      }
      return item;
    });
    setFaqsData(newFaqs)
  };

  useEffect(() => {
    const checkWindowMedia = window.matchMedia('(max-width: 992px)').matches
    if(faqsData.length < 5){
      setShowMore(true)
    }
    checkWindowMedia && setIsMobile(true)

  }, [])

  return <StyleFAQ>
    <MastheadWrapper>
      <LeftContent>
        <StyleHeading $mode={'heading-h1'}>
          FAQ
        </StyleHeading>
      </LeftContent>
      <RightContent>
        <StyleListFaq>
          {faqsData.length > 0 && faqsData.map((item, index) => {
            return <StyleItemFAQ key={`faq-${index}`}
                                 className={item.active ? "active" : ""}>
              <StyleLineTitle onClick={() => onShowContent(index, item.active)}>
                {/* {item.icon} */}
                <StyleTitle>{item.title}</StyleTitle>

              </StyleLineTitle>
              <StyleContentDetail dangerouslySetInnerHTML={{ __html: item.content}} />
            </StyleItemFAQ>
          })}
        </StyleListFaq>
      </RightContent>
    </MastheadWrapper>
  </StyleFAQ>
}

export default FAQComp;
