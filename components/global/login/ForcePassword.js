import {
    FormItems,
    FormItemsInput,
    FormSubmit, StylesDetailInner,
    StylesIconClose,
    TitleDescription,
    TitleLogin,
    StyleTextError,
    StyleTextWarning,
    StyleIconEye
} from "@Component/global/login/style";
import { Close, EyeHideIcon, EyeIcon, Lock, User } from "@Component/commons/Icon";
import Button from "@Component/commons/Button";
import { useState } from "react";
import axios from "axios";
import { checkStaging } from "../../../utils/checkStaging";
import useTranslation from "next-translate/useTranslation";
import { setOverflowState, useGlobalState } from "@Dto/states";
import { useEffect } from "react";
import { maxlengthTextInput } from "utils/constants";
import { checkPassword } from "utils/checkCharacters";
import { validateFormSubmit } from "store/validateFormSubmit";
const md5 = require('md5');

const ForcePassword = ({ }) => {
    const { t, lang } = useTranslation();
    const [values, setValues] = useState({});
    let [errors, setErrors] = useState({});
    const [data] = useGlobalState('data');
    const [showHidePsssword, setShowHidePsssword] = useState({});
    const saveData = ({ name, value }) => {
        let result = values

        result = { ...result, [name]: value }

        setValues(prevState => {
            return { ...prevState, ...result }
        })
    }

    const rules = {
        current_password: values.current_password,
        password: values.new_password,
        confirm_password: values.confirm_password
    }
    const onsubmit = async (event) => {
        const dataVer = {
            current_password: values.current_password,
            password: values.new_password,
            confirm_password: values.confirm_password
        }

        const validate = await validateFormSubmit(dataVer, rules, t)

        if (validate) {
            if (validate.validate) {
                const data = {
                    login_id: values.login_id,
                    current_password: md5(values.current_password),
                    new_password: md5(values.new_password)
                }
                await axios(`${checkStaging()}api/validate`, {
                    data: {
                        data,
                        mode: "force_change_password"
                    },
                    method: "POST"
                }).then((res) => {
                    if (res.data) {
                        const { status_code } = res.data?.force_change_password?.children[0]
                        const { status_text } = res.data?.force_change_password?.children[1]
                        if (status_code.content === "00") {
                            // success
                            setOverflowState('change-password_success')
                        } else if (status_code.content === "61.00") {
                            // Login ID not found 
                            setErrors({ ...errors, login_id: status_text.content })
                        } else if (status_code.content === "61.04") {
                            // Current Password wrong 
                            setErrors({ ...errors, current_password: status_text.content })
                        } else {
                            // Login & New Password same
                            setErrors({ ...errors, new_password: status_text.content })
                        }
                    }
                })
            } else {
                setErrors(validate.errors)
            }
            event.preventDefault()
        }
    }
    /**
     * change error when enter password
     */
    const checkInputValue = () => {
        if (values.new_password) {
            if (!checkPassword(values.new_password)) {
                setErrors(prevState => {
                    return {
                        ...prevState,
                        password: t("common:requestFormatPassword")
                    }
                })
            } else {
                setErrors(prevState => {
                    return {
                        ...prevState,
                        password: ""
                    }
                })
            }
        }
    }
    const onSetPassword = (name) => {
        showHidePsssword[name] = !showHidePsssword[name]
        setShowHidePsssword({ ...showHidePsssword })
    }
    /**
     * set show error password init
     */
    useEffect(() => {
        setErrors({
            ...errors,
            password: t("common:requestFormatPassword")
        })
        values.login_id = data.login_id
    }, [])

    useEffect(() => {
        checkInputValue()
    }, [values])
    return <>
        <StylesDetailInner>
            <TitleLogin $small={true}>
                {t("common:changePassword")}</TitleLogin>
            <StyleTextWarning>{t("common:changePasswordWarning")}</StyleTextWarning>
            <StylesIconClose onClick={() => {
                setOverflowState('')
            }}>
                <Close />
            </StylesIconClose>
            <FormItems>
                <FormItemsInput>
                    <label htmlFor={'current_password'}>
                        <Lock />
                        <input id={'current_password'}
                            placeholder={t("common:currentPassword")}
                            name={'current_password'}
                            type={showHidePsssword.current_password ? "text" : "password"}
                            onInput={(event) => {
                                saveData({
                                    name: "current_password",
                                    "value": event.target.value
                                })
                            }}
                        />
                        <StyleIconEye onClick={() => onSetPassword("current_password")}>
                            {showHidePsssword.current_password ?
                                <EyeIcon /> : <EyeHideIcon />
                            }
                        </StyleIconEye>
                    </label>
                    {errors && errors.current_password ? <StyleTextError>{errors.current_password}</StyleTextError> : null}
                </FormItemsInput>
                <FormItemsInput>
                    <label htmlFor={'new_password'}>
                        <Lock />
                        <input id={'new_password'}
                            placeholder={t("common:newPassword")}
                            name={'new_password'}
                            type={showHidePsssword?.new_password ? "text" : "password"}
                            maxLength={maxlengthTextInput}
                            onInput={(event) => {
                                saveData({
                                    name: "new_password",
                                    "value": event.target.value
                                })
                            }}
                        />
                        <StyleIconEye onClick={() => onSetPassword("new_password")}>
                            {showHidePsssword.new_password ?
                                <EyeIcon /> : <EyeHideIcon />
                            }
                        </StyleIconEye>
                    </label>
                    {errors && errors.password ? <StyleTextError>{errors.password}</StyleTextError> : null}
                </FormItemsInput>
                <FormItemsInput $error={errors?.confirm_password}>
                    <label htmlFor={'new_password_confirm'}>
                        <Lock />
                        <input id={'new_password_confirm'}
                            placeholder={t("common:confirmPass")}
                            name={'confirm_password'}
                            type={showHidePsssword.new_password_confirm ? "text" : 'password'}
                            onInput={(event) => {
                                saveData({
                                    name: "confirm_password",
                                    "value": event.target.value
                                })
                            }}
                        />
                        <StyleIconEye onClick={() => onSetPassword("new_password_confirm")}>
                            {showHidePsssword.new_password_confirm ?
                                <EyeIcon /> : <EyeHideIcon />
                            }
                        </StyleIconEye>
                    </label>
                    {errors?.confirm_password && <StyleTextError>{errors.confirm_password}</StyleTextError>}
                </FormItemsInput>
            </FormItems>
            <FormSubmit>
                <Button bg={'green'} type={'submit'} onClick={onsubmit}>
                    {t("common:update")}
                </Button>
            </FormSubmit>
        </StylesDetailInner>
    </>
}

export default ForcePassword
