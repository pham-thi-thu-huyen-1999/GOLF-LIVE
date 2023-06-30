const findNewsByTitle = (title) =>{
    return '{\n' +
        '  findNewsByTitle(title:"'+title+'"){\n' +
        '    _id,\n' +
        '    title,\n' +
        '    date,\n' +
        '    description,\n' +
        '    image,\n' +
        '    content\n' +
        '    source\n' +
        '    category\n' +
        '  }\n' +
        '}'
}

export default findNewsByTitle
