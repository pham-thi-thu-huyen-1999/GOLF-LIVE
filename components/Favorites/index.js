import { Container } from "@Styles/container";
import Players from "./Players";
import { StyleToursDetail, StyleDate, StyleSort, StylePlayersBySlug } from "./style"
import useTranslation from "next-translate/useTranslation";
import useFavorite from "../../store/useFavorite";
import { useEffect } from "react";

const Favorite = ({ currentTournames, favorites, onChangeLocalStorage }) => {
  const { t } = useTranslation()
  const { setFavorites } = useFavorite();

  const keyFavs = Object.keys(favorites);
  const renderSlugByName = (name) => {
    return name.toLowerCase().replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '_')
  }
  const checkIsCurrent = (mySlug) => {
    let isCheck = currentTournames.findIndex(tour => {
      return renderSlugByName(tour.tournament_name) === mySlug
    })
    return isCheck !== -1
  }
  const renderArrayFavIsCurrent = () => {
    let favKeys = Object.keys(favorites)
    let newfavorites = {}
    favKeys.forEach(favKey => {
      if (checkIsCurrent(favKey)) {
        newfavorites[favKey] = favorites[favKey]
      }
    })
    setFavorites(newfavorites)
  }
  useEffect(() => {
    if (currentTournames?.length) {
      renderArrayFavIsCurrent()
    }
  }, [favorites])

  return <StyleToursDetail>
    <Container>
      {/* <StyleSort>
        <StyleDate>
          {t("common:today")} 25.11
        </StyleDate>
      </StyleSort> */}
      {keyFavs.map((slugName, index) => {
        if (favorites[slugName]?.items?.length) {
          return <StylePlayersBySlug key={`${slugName}-${index}`}>
            <Players list={favorites[slugName].items}
              infors={favorites[slugName].infors} slugName={slugName}
              onChangeLocalStorage={(items) => onChangeLocalStorage(slugName, items, favorites[slugName].infors)} />
          </StylePlayersBySlug>
        } else return
      })}
    </Container>
  </StyleToursDetail>
}
export default Favorite
