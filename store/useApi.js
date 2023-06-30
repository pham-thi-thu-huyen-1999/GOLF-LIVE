
import useSWR from 'swr'
import { useQuery, gql } from "@apollo/client";
import { Get } from "@Dto/Api"
import { findAllNews } from 'graphQL/news';
import useTranslation from 'next-translate/useTranslation'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const getNewsData = async ({ page, limit }) => {
    const { data, error } = await Get({ query: findAllNews({ page, limit }) })
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
const getData = (path, name) => {
    const { data, error } = useSWR(`${path}`, fetcher)

    return {
        data: [{
            "name": name || "",
            "items": data
        }],
        isLoading: !error && !data,
        isError: error
    }
}

const GET_ALL_TODOS = `
    {
        finAllCurrentTournaments{
            _id,
            __typename,
            tournament_name
        }
            findAllTournamentRankings{
            _id,
            __typename,
            tournament_name,
            rankings {
                name
            }
        }
        findAllTours{
            cate_name,
            tournament_name,
            _id,
            __typename
        }
    }
`;
const getDataQuery = (query, name = "/") => {
    const { t } = useTranslation()
    const { data, fetching, error } = useQuery(gql`${GET_ALL_TODOS}`);
    return {
        data: [{
            "name": t("common:currentTournament"),
            "type": "currentTournament",
            "items": data && data.finAllCurrentTournaments
        }, {
            "name": t("common:ranking"),
            "type": "ranking",
            "items": data && data.findAllTournamentRankings
        },
        {
            "name": t("common:tours"),
            "type":"tours",
            "items": data && data.findAllTours
        }
        ],
        isLoading: fetching,
        isError: error
    }
}
export { getData, getNewsData, getDataQuery }
