import axios from "axios";
import { useEffect, useState } from "react";

const useValidateLogin = (data, upinput, trans) => {
    const keysupinput = Object.keys(upinput)
    let errors = {}
    let textRequired = trans("common:errorValidates.required")
    const validatetorItem = (type, values) => {
        let error = null
        switch (type) {
            case "login_id":
                if (!values.login_id) {
                    error = `${trans("common:userName")} ${textRequired}`
                }
                return error
            case "password":
                if (!values.password) {
                    error = `${trans("common:password")} ${textRequired}`
                }
                return error
            case "verifyCode":
                if (!values.verifyCode) {
                    error = `verify code ${textRequired}`
                } else {
                    if (values.verifyCode !== values.captchaCode) {
                        error =  trans("common:errVerifyCode")
                    }
                }
                return error
            default:
                return error
        }
    }
    keysupinput.map(item => {
        if(validatetorItem(item, data)){
            errors[item] = validatetorItem(item, data)
            return validatetorItem(item, data)
        }
        return
    })
    return { validate: JSON.stringify(errors) === JSON.stringify({}), errors }
}

export { useValidateLogin }
