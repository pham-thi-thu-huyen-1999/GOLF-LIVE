import { useEffect, useState } from 'react';
import { 
  ButtonBackToTop
} from '@Component/global/BackToTop/style'
import { ArrowUpIcon } from '@Component/commons/Icon';
function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  
  return (
    <>
       {showButton && (
        <ButtonBackToTop onClick={scrollToTop} className="back-to-top">
          <ArrowUpIcon/>
        </ButtonBackToTop>
      )}
    </>
  );
}

export default BackToTopButton;