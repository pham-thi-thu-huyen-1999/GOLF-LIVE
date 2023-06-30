import {
    FormItems,
    FormItemsInput,
    FormSubmit, StylesDetailInner,
    StylesIconClose,
    TitleDescriptionModal,
    StyleTextError, StyleTextDes
} from "@Component/global/login/style";
import { Close, Email, Lock, User } from "@Component/commons/Icon";
import Button from "@Component/commons/Button";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { setOverflowState, useGlobalState } from "@Dto/states";
import { checkStaging } from "utils/checkStaging";
import axios from "axios";
import { useEffect } from "react";

const ForgetPassword = ({ }) => {
    const { t, lang } = useTranslation()
    const [values, setValues] = useState({})
    let [errors, setErrors] = useState({})
    let [desEmail, setDesEmail] = useState(t("common:desForgot"))
    const [code, setCode] = useState("")
    const saveData = ({ name, value }) => {
        let result = values

        result = { ...result, [name]: value }

        setValues(prevState => {
            return { ...prevState, ...result }
        })
    }
  
    const getLocation = () => {
        fetch('https://extreme-ip-lookup.com/json/')
            .then(res => res.json())
            .then(response => {
                if (response?.location) {

                    const { country, language } = response.location
                    let newCode = `${language.code}-${country.code}`
                    setCode(newCode)
                }
                return response
            })
            .catch((data, status) => {
                console.log('Request failed');
            })
    }
    useEffect(() => {
        getLocation()
    }, [])
    /**
     * params: email, lang, reset_url
     */
    const onsubmit = async (event) => {
        const data = {
            username: values.email,
            lang,
            reset_url: `${window.location.origin}${checkStaging()}${lang}/reset-password/`
        }
        if (!values.email) {
            setErrors({ email: `${t(`common:email`)} ${t(`common:errorValidates.required`)}` })
            event.preventDefault()
        } else {
            await axios(`${checkStaging()}api/validate`, {
                data: {
                    data,
                    mode: "forget_password"
                },
                method: "POST"
            }).then((res) => {
                if (res) {
                    const { forget_password } = res.data;
                    const { content } = forget_password.children[0].status_code;

                    if (forget_password) {
                        if (content === "00") {
                            setOverflowState('sendmail-success')
                        } else {
                            setErrors({ email: t("common:emailNotExist") })
                            setDesEmail(t("common:desForgot"))
                        }
                    }
                }
            })
        }
    }
    return <>
        <StylesDetailInner>
            <TitleDescriptionModal>{t("common:forgotPass")}</TitleDescriptionModal>
            <StylesIconClose onClick={() => {
                setOverflowState('')
            }}>
                <Close />
            </StylesIconClose>
            <FormItems>
                <FormItemsInput>
                    <label htmlFor={'email'}>
                        <Email />
                        <input id={'email'}
                            placeholder={t("common:enterEmailOrUsername")}
                            defaultValue={values.email}
                            name={'email'}
                            type={'text'}
                            onInput={(event) => {
                                saveData({
                                    name: "email",
                                    "value": event.target.value
                                })
                            }}
                        />
                    </label>
                    {errors.email && <StyleTextError>{errors.email}</StyleTextError>}
                </FormItemsInput>
            </FormItems>
            <StyleTextDes>{desEmail}</StyleTextDes>
            <FormSubmit>
                <Button bg={'green'} type={'submit'} onClick={onsubmit}>
                    {t("common:button.send")}
                </Button>
            </FormSubmit>
        </StylesDetailInner>
    </>
}

export default ForgetPassword
