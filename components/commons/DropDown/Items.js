
import { StyleItem, StyleItems, StyleItemDetail, StyleDropdownHeadingItem, StyleTitleItems, StyleIconDropdown } from "./style";
import { IconUp, IconDown } from "../Icon/index";
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import { googleTranslate } from "utils/googleTranslate";
import ItemDetail from "./ItemDetail";
const Items = ({ data, onShowDetails, selectShowDetails, index, onSclose, selected }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [cateName, setCateName] = useState("");
    const [tournamentName, setTournamentName] = useState("")
    const { lang } = useTranslation();
    const router = useRouter()
    useEffect(() => {
        const checkWindowMedia = window.matchMedia('(max-width: 992px)').matches
        if (checkWindowMedia) return setIsMobile(true)
    }, [])
    const variants = {
        hidden: { opacity: 0, y: -10, height: 0, margin: 0, transition: { duration: 0.5 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
    }
    let url1 = (item) => { return '/tournament/' + item.toLowerCase().replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '-') }
    let url2 = (item) => { return '/rankings/' + item.toLowerCase().replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '-') }

    const getSlug = (slug) => { return slug.toLowerCase().replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '-') }

    // useEffect(() => {
    //     if (lang) {
    //         if (data.cate_name) {
    //             googleTranslate.translate(`${data.cate_name}`, lang, function (err, translation) {
    //                 if (err) return
    //                 setCateName(translation.translatedText)
    //             });
    //         }
    //         if (data.tournament_name) {
    //             googleTranslate.translate(`${data.tournament_name}`, lang, function (err, translation) {
    //                 if (err) return
    //                 setTournamentName(translation.translatedText)
    //             });
    //         }
    //     }
    // }, [lang])
    return <StyleItemDetail>
        {data.cate_name ? <>
            <StyleDropdownHeadingItem onClick={() => onShowDetails(index)} $selected={selected}>
                <StyleTitleItems>
                    {data.cate_name}
                </StyleTitleItems>
                <StyleIconDropdown>
                    {selectShowDetails === index ? <IconDown stroke={isMobile ? "white" : "black"} />
                        : <IconUp stroke={isMobile ? "white" : "black"} />
                    }
                </StyleIconDropdown>
            </StyleDropdownHeadingItem>
            <StyleItems
                animate={selectShowDetails === index ? "visible" : "hidden"}
                variants={variants}>
                {data.tournament_name.map((item, index) => {
                    let url = '/tournament/' + item.toLowerCase().replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '-');
                    return <StyleItem key={`link-${index}`} onClick={onSclose} $activeLinkTour={router.query.slug === getSlug(item)} $activeLink={router.query.slug === getSlug(item)}>
                        <ItemDetail href={url} item={item}/>
                    </StyleItem>
                })}
            </StyleItems>
        </>
            : <StyleItem onClick={onSclose} $activeLink={router.query.slug === getSlug(data.tournament_name)}>
                {data.__typename === "CurrentTournaments" ?
                    <Link href={url1(data.tournament_name)} prefetch={false}>{data.tournament_name}</Link>
                    : <Link href={url2(data.tournament_name)}>{data.tournament_name}</Link>}
            </StyleItem>
        }
    </StyleItemDetail>
}
export default Items
