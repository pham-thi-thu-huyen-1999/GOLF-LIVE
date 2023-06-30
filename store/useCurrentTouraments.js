import { Get } from "@Dto/Api";
import { useState, useEffect } from "react";

const useCurrentTouraments = () => {
    const [currentTournames, setCurrentTournames] = useState([])
    const query = `
        {
            finAllCurrentTournaments{
                _id,
                __typename,
                tournament_name
            }
        }
    `;
    const callCurrentTour = async () => {
        const { data } = await Get({ query })
        setCurrentTournames(data.finAllCurrentTournaments)
    }
    useEffect(() => {
        callCurrentTour()
    }, [])
    return {
        currentTournames
    }
}

export default useCurrentTouraments


