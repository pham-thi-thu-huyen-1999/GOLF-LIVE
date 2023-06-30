import axios from "axios";
import { useEffect, useState } from "react";
import { checkPassword, checkUserName } from "utils/checkCharacters";
import { checkStaging } from "../utils/checkStaging";

const validateFormSubmit = async (data, upinput, trans) => {
    const keysupinput = Object.keys(upinput)
    let errors = {}
    let textRequired = trans("common:errorValidates.required")
    const checkAPiExist = async (data, mode) => {
        const checkAPI = await axios(`${checkStaging()}api/validate`,
            {
                data: { data: { ...data }, mode: mode },
                method: "POST"
            })
            .then((res) => {
                if (res.data[mode]) {
                    return checkError(res.data[mode])
                }
            })
        return checkAPI
    }
    const checkError = (data) => {
        let error = ""
        if (data?.children[0]?.status_code?.content === '00') {
            return
        } else {
            error = data?.children[1]?.status_text?.content
        }
        return error
    }
    const validatetorItem = async (type, form) => {
        switch (type) {
            case "login_id":  // request check format login_id
                if (checkUserName(form.login_id)) {
                    if (!form.login_id) {
                        errors["login_id"] = `Login ID ${textRequired}`
                    } else {
                    const check = await checkAPiExist({ login_id: form.login_id }, "check_login_id")
                    if (check) {
                        errors["login_id"] = `Login ID ${trans("common:existed")}`;
                    }
                }
                } else {
                    errors["login_id"] = trans("common:requestFormatUserName")
                }
                return errors.login_id
            case "email":
                if (!form.email) {
                    errors["email"] = `${trans("common:email")} ${textRequired}`
                } else {
                    const check = await checkAPiExist({ email: form.email }, "check_email")
                    if (check) {
                        errors["email"] = check;
                    }
                }
                return errors.email
            case "current_password": // enter password old
                if (!form.current_password) {
                    errors["current_password"] = `${trans("common:currentPassword")} ${textRequired}`
                }
                return errors.current_password
            case "password":  // request check format password
                if (!checkPassword(form.password)) { // if format password allright
                    errors["password"] = trans("common:requestFormatPassword")
                }
                return errors.password
            case "confirm_password":
                if (!form.confirm_password) {
                    errors["confirm_password"] = `${trans("common:confirmPass")} ${textRequired}`
                } else if (form.confirm_password !== form.password) {
                    errors["confirm_password"] = trans("common:errorValidates.passwordMatch")
                }
                return errors.confirm_password
            case "name":
                if (!form.name) {
                    errors["name"] = `${trans("common:name")} ${textRequired}`
                }
                return errors.name
            case "timezone":
                if (!form.timezone) {
                    errors["timezone"] = `${trans("common:timeZone")} ${textRequired}`
                }
                return errors.timezone
            case "currency":
                if (!form.currency) {
                    errors["currency"] = `${trans("common:currency")} ${textRequired}`
                }
                return errors.currency
            case "referrer_code":
                if (!form.referrer_code) {
                    errors["referrer_code"] = `${trans("common:referCode")} ${textRequired}`
                }
                return errors.referrer_code
            case "verifyCode":
                if (!form.verifyCode) {
                    errors["verifyCode"] = `verify code ${textRequired}`
                } else {
                    if (form.verifyCode !== form.captchaCode) {
                        errors["verifyCode"] = trans("common:errVerifyCode")
                    } else {
                        errors["verifyCode"] = ""
                    }
                }
                return errors.verifyCode
            default:
                return errors
        }
    }

    const promises = keysupinput.map(async item => {
        const res = await validatetorItem(item, data)
        if (res) {
            return { [item]: res }
        }
    })

    const promisesAll = await Promise.all(promises)
    const renderError = promisesAll.filter(item => item)
    let renderErrObj = Object.assign({}, ...renderError)
    return { validate: JSON.stringify(renderErrObj) === JSON.stringify({}), errors: renderErrObj }
}

export { validateFormSubmit }
