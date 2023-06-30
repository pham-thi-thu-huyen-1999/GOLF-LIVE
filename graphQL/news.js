
const findAllNews = ({ page, limit, category='news' }) => {
    return `
        {findAllNewsInCMS(page: ${page}, limit: ${limit}, category: "${category}"){
        total
        page
        pages
        limit
        docs {
            _id
            title
            content
            date
            description
            image
            category
        }
      }}
   `
}

export { findAllNews }
