
const getPage = (size, page) => {
    const limit = size ? size : 3;
    const offset = page ? page * limit : 0;
    return {limit, offset}
}

module.exports = {getPage};