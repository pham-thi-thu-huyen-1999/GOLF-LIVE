import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { StyleCountries, StyleSelected, StyleModalSelect, StyleItem, StyleName } from "./style";
import Image from "../../../commons/Image";
import { checkStaging } from "utils/checkStaging";
import { IconDown, IconUp } from "@Component/commons/Icon";
import { ScrollBar } from "@Styles/scroll";
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation';
import ReactCountryFlag from "react-country-flag"
import setLanguage from 'next-translate/setLanguage'

const DropdownCountries = ({ countries = [], showCountries }) => {
    const { lang, t } = useTranslation();
    const refModalCountry = useRef();
    const renderItemByCountry = () => {
        let newdata = countries.filter(item => item?.value === lang)[0]
        return newdata
    }
    const [showModal, setShowModal] = useState(false);

    const variants = {
        hidden: { opacity: 0, y: -10, transition: { duration: 0.5, y: 10, x: 0 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }
    const country = useMemo(() => {
        return renderItemByCountry()
    }, [lang])
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          if (refModalCountry.current && !refModalCountry.current.contains(event.target)) {
            setShowModal(false)
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    return <StyleCountries $showCountries={showCountries} ref={refModalCountry}>
        <StyleSelected onClick={() => setShowModal(!showModal)}>
            <ReactCountryFlag
                countryCode={country.logo}
                svg
                style={{
                    width: '20px',
                    height: '20px',
                }}
                title={country.name}
            />
            <StyleName>{t(`common:${country.name}`)}</StyleName>
            {showModal ? <IconDown stroke={showCountries ? "#fff" : "black"}/> : <IconUp stroke={showCountries ? "#fff" : "black"}/>}
        </StyleSelected>
        <StyleModalSelect
            $show={showModal}
            animate={showModal ? "visible" : "hidden"}
            variants={variants}>
            <ScrollBar>
                {countries.map((item, index) => {
                    return <Link href="#" locale={item.value} key={index}>
                        <StyleItem
                            key={index}
                            value={index}
                            onClick={() => { setLanguage(item.value), setShowModal(false) }}
                            $selected={item.value === lang}
                        >
                            {item.name}
                        </StyleItem>
                    </Link>
                })}
            </ScrollBar>
        </StyleModalSelect>
    </StyleCountries>
}

export default DropdownCountries





