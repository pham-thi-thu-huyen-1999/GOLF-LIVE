export const findAllPromotion = (page = 1, limit = 10) => `
{
    findAllPromotion(page: ${page}, limit:${limit}){
        docs{
            _id
            title
            image
            description
            sub_description
            date
            category
        }
        total
    }
}
`
