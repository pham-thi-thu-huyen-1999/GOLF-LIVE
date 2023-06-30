import axios from "axios"

export const Get = async ({query,url=''}) => {
    const urlFetch = url !== '' ? url : process.env.GRAPHQL_URL
    const response = await fetch(urlFetch, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query}),
    })
    return await response.json()
}

export const GetStatic = async ({query,path=''}) => {
    const response = await Get({query,url:path})
    return response
}
export const GetDataByPath = async (path) => {
    const urlFetch = `http://golf.easywork.com.sg/api/${path}`;
    let data = null;
    await axios.get(urlFetch)
    .then(res => {
      if(res){
        data = res.data
      }
    }).catch(function (error) {
        return error
    })
    return data
}
