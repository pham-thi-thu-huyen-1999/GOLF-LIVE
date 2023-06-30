export const findAboutUs = () => {
    return `
        {
            findAboutUs {
                _id
                title
                image_masthead
                image_feature
                description
                feature_title
                feature_content
                feature_content_stringtify
            }
        }
    `
}