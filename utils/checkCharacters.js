/**
 * check password correct format
 */
const checkPassword = (text) => {
    let isCheck = false;
    if (text) {
        if (text.length >= 8) {
            isCheck = /[a-z]/.test(text) && /[A-Z]/.test(text) && /\d/.test(text)
        }
    }
    return isCheck
}
/**
 * check login id correct format
 */
const checkUserName = (text) => {
    let isCheck = false;
    if (text) {
        if (text.length < 4) return isCheck
        else {
            isCheck = /[a-zA-Z]/.test(text);
        }
    }
    return isCheck
}

export { checkPassword, checkUserName }