import { setTotalFavorites } from "@Dto/states";
import {useEffect, useState} from "react";

const useFavorite = () => {
    const KEY = 'favorites'
    const [favorites, setFavorites] = useState({});
    const [totalFav, setTotalFav] = useState(0)
    const renderTotalFavorites = () => {
        let totalNumber = 0;
        if(favorites){
            const favKeys = Object.keys(favorites)
            favKeys.forEach(item => {
              totalNumber = totalNumber + favorites[item].items.length
            })
        }
     
        return totalNumber
    }
    useEffect(() => {
        let favoritesInit = {}
        let getLocal = localStorage.getItem(KEY)
        if(!getLocal){
            localStorage.setItem(KEY, JSON.stringify(favoritesInit))
        }else {
            favoritesInit = JSON.parse(getLocal)
        }
        setFavorites(favoritesInit)
    }, [])
    useEffect(() => {
        setTotalFavorites(renderTotalFavorites())
        if(JSON.stringify(favorites) !== JSON.stringify({})){
            localStorage.setItem(KEY, JSON.stringify(favorites))
            setTotalFav(renderTotalFavorites())
            setFavorites(favorites)
        }
    }, [favorites])

    return {favorites,setFavorites, totalFav}
}

export default useFavorite


