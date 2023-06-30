
import Items from "./Items";
import { StyleDropdownHeading, StyleDropDownItem, StyleDropDown, StyleBigTitle, StyleIconHeading } from "./style";

import { CurrentTour, Ranking, Tour } from "../Icon/index";
import { useState, useEffect } from "react";

const DropDownItem = ({ data, onSclose }) => {
    const [isShow, setIsShow] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [selectShowDetails, setSelectShowDetails] = useState(0)
    const onShowItemDropdown = () => {
        setIsShow(!isShow)
    }

    useEffect(() => {
        const checkWindowMedia = window.matchMedia('(max-width: 992px)').matches
        if (checkWindowMedia) return setIsMobile(true)
    }, [])
    const renderIcon = (type) => {
        switch (type) {
            case "currentTournament":
                return <CurrentTour />
            case "ranking":
                return <Ranking />
            case "tours":
                return <Tour />
            default:
                break;
        }
    }
    return <StyleDropDown>
        <StyleDropdownHeading onClick={onShowItemDropdown}>
            <StyleIconHeading>{renderIcon(data.type)}</StyleIconHeading>
            <StyleBigTitle>
                {data.name}
            </StyleBigTitle>
        </StyleDropdownHeading>
        {data?.items?.length > 0 &&
            <StyleDropDownItem>
                {data.items.map((item, index) => {
                    return <Items key={`dropdown-item-${index}`}
                        data={item} index={index} onShowDetails={() => setSelectShowDetails(index)} selectShowDetails={selectShowDetails}
                        selected={index===selectShowDetails}
                        onSclose={onSclose}
                    />
                })}
            </StyleDropDownItem>
        }
    </StyleDropDown>
}
export default DropDownItem
