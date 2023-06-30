export const findAllFaq = () => {
    return `
    {
        findAllFaq {
          _id
          title
          content
          content_stringtify
        }
    }
    `
}