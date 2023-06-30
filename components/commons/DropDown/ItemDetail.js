
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link'
import { useState, useEffect } from "react";
import { googleTranslate } from "utils/googleTranslate";
const ItemDetail = ({ item, href }) => {
    const [text, setText] = useState("");
    const { lang } = useTranslation();

    // useEffect(() => {
    //     if (lang) {
    //         if (item) {
    //             googleTranslate.translate(`${item}`, lang, function (err, translation) {
    //                 if (err) return
    //                 setText(translation.translatedText)
    //             });
    //         }
    //     }
    // }, [lang])

    return <>
        <Link href={href} prefetch={false}>{item}</Link>
    </>

}
export default ItemDetail
