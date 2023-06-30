

import { useQuery, gql } from "@apollo/client";

const getToursByTitle = (name, title, reqJson) => {
    const query = `{
        ${name}(_title: "${title}"){
            ${reqJson}
        }
    }`
    const { data, fetching, error } = useQuery(gql`${query}`);

    return {
        data: data,
        isLoading: fetching,
        isError: error
    }
}

export { getToursByTitle }
