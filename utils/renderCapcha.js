export const renderCapcha = () => {
    let charsArray =
        "0123456789";
    let lengthOtp = 4;
    let captcha = [];
    for (let i = 0; i < lengthOtp; i++) {
        let index = Math.floor(Math.random() * charsArray.length);
        if (captcha.indexOf(charsArray[index]) === -1)
            captcha.push(charsArray[index]);
        else i--;
    }
    return captcha.join("")
}