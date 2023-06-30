import {
    FormItems,
    FormItemsInput,
    FormSubmit, StylesDetailInner,
    StylesIconClose,
    TitleLogin,
    StyleTextError
} from "./style";
import { setOverflowState } from "@Dto/states";
import { Close, Email, EyeHideIcon, EyeIcon, Lock, User } from "@Component/commons/Icon";
import Button from "@Component/commons/Button";
import { useState } from "react";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import { validateFormSubmit } from 'store/validateFormSubmit';
import { checkStaging } from 'utils/checkStaging';
import { useRouter } from 'next/router';
import { checkPassword } from "utils/checkCharacters";
import { useEffect } from "react";
import { StyleIconEye } from "@Component/global/login/style";
const md5 = require('md5');

const ResetpasswordModal = ({ slug }) => {
    const { t } = useTranslation();
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({});
    const router = useRouter();
    const [showHidePsssword, setShowHidePsssword] = useState({});
    const saveData = ({ name, value }) => {
        let result = values

        result = { ...result, [name]: value }

        setValues(prevState => {
            return { ...prevState, ...result }
        })
    }
    const rules = {
        password: values.password,
        confirm_password: values.confirm_password,
    }

    const onSubmitResetPass = async (event) => {
        const data = {
            reset_id: slug,
            password: values.password,
            confirm_password: values.confirm_password,
        }
        const validate = await validateFormSubmit(data, rules, t)
        if (validate) {
            if (validate.validate) {
                await axios(`${checkStaging()}api/validate`, {
                    data: {
                        data: {
                            reset_id: slug,
                            password: md5(values.password)
                        },
                        mode: "reset_password"
                    },
                    method: "POST"
                }).then((res) => {
                    if (res.data?.reset_password?.children[0]?.status_code?.content === "00") {
                        // redirec to page login
                        setOverflowState('change-password_success')
                    } else {
                        setErrors({ confirm_password: res.data?.reset_password?.children[1]?.status_text?.content })
                    }
                    return res
                })
            } else {
                setErrors(validate.errors)
            }
        }
        event.preventDefault()
    }
    useEffect(() => {
        setErrors({
            ...errors,
            password: t("common:requestFormatPassword")
        })
    }, [])

    const checkInputValue = () => {
        if (values.password) {
            if (!checkPassword(values.password)) {
                setErrors(prevState => {
                    return {
                        ...prevState,
                        password: "8 to 20 characters. Must inclucle both uppercase, lowercase letters and a number."
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
    useEffect(() => {
        checkInputValue()
    }, [values])
    return <>
        <StylesDetailInner $wide={true}>
            <TitleLogin $small={true}>{t("common:resetPassword")}</TitleLogin>
            <StylesIconClose onClick={() => {
                router.push("/")
            }}>
                <Close />
            </StylesIconClose>
            <FormItems>
                <FormItemsInput $error={errors?.password}>
                    <label htmlFor={'password'}>
                        <Lock />
                        <input id={'password'}
                            placeholder={t("common:newPassword")}
                            name={'password'}
                            type={showHidePsssword.password ? 'text' : 'password'}
                            onInput={(event) => {
                                saveData({
                                    name: "password",
                                    "value": event.target.value
                                })
                            }}
                        />
                        <StyleIconEye onClick={() => onSetPassword("password")}>
                            {showHidePsssword.password ?
                                <EyeIcon /> : <EyeHideIcon />
                            }
                        </StyleIconEye>
                    </label>
                    {errors?.password && <StyleTextError>{errors.password}</StyleTextError>}
                </FormItemsInput>
                <FormItemsInput $error={errors?.confirm_password}>
                    <label htmlFor={'confirm_password'}>
                        <Lock />
                        <input id={'confirm_password'}
                            placeholder={t("common:confirmNewPass")}
                            name={'confirm_password'}
                            type={showHidePsssword.confirm_password ? 'text' : 'password'}
                            onInput={(event) => {
                                saveData({
                                    name: "confirm_password",
                                    "value": event.target.value
                                })
                            }}
                        />
                        <StyleIconEye onClick={() => onSetPassword("confirm_password")}>
                            {showHidePsssword.confirm_password ?
                                <EyeIcon /> : <EyeHideIcon />
                            }
                        </StyleIconEye>
                    </label>
                    {errors?.confirm_password && <StyleTextError>{errors.confirm_password}</StyleTextError>}
                </FormItemsInput>
            </FormItems>
            <FormSubmit>
                <Button bg={'green'} type={'submit'} onClick={onSubmitResetPass}>
                    {t("common:update")}
                </Button>
            </FormSubmit>
        </StylesDetailInner>
    </>
}

export default ResetpasswordModal
