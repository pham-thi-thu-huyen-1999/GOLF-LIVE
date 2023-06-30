import {useEffect} from "react";

const usePreventScrolling = ({active}) => {
    useEffect(() => {
        let html = document.querySelector('html')
        if(active){
            html && (html.style.overflow = "hidden")
        }else{
            html && (html.removeAttribute("style"))
        }
    },[active])
}

export default usePreventScrolling
