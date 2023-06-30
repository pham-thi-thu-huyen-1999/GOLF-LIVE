import cc, { number } from 'currency-codes'
import Select from 'react-select';
import { getTimezoneList } from "country-timezone-list";
import {
    FormItems,
    FormItemsInput,
    FormSubmit, StylesDetailInner,
    StylesIconClose,
    TitleLogin,
    StyleTextError,
    StyleCapcha, FormFlex, StyleCommit,
    StyleIconEye
} from "@Component/global/login/style";
import { setOverflowState } from "@Dto/states";
import { Close, Email, EyeHideIcon, EyeIcon, Lock, User } from "@Component/commons/Icon";
import Button from "@Component/commons/Button";
import { useEffect, useState } from "react";
import useValidateLogin from "../../../store/useValidateLogin";
import logIn from "@Component/global/login/LogIn";
import axios from "axios";
import { validateFormSubmit } from '../../../store/validateFormSubmit';
import { checkStaging } from '../../../utils/checkStaging';
import useTranslation from "next-translate/useTranslation";
import { renderCapcha } from 'utils/renderCapcha';
import { CURRENCIES, maxlengthTextInput } from 'utils/constants';
import { checkPassword, checkUserName } from 'utils/checkCharacters';
const md5 = require('md5');

const SignUp = ({ data }) => {
    const { t } = useTranslation();
    const [values, setValues] = useState({});
    const tzs = getTimezoneList();
    const [errors, setErrors] = useState({});
    const [captchaCode, setCapcha] = useState("");
    const [checkSubmission, setCheckSubmission] = useState(false);
    const [showHidePsssword, setShowHidePsssword] = useState({});
    const OPTIONS_TIME_ZONES = tzs.map(tz => {
        return { value: tz.offset, label: tz.offset }
    })

    const OPTIONS_TIME_ZONES_REMOVE_DUPLICATE = OPTIONS_TIME_ZONES.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === OPTIONS_TIME_ZONES.findIndex(obj => {
            return JSON.stringify(obj) === _value;
        });
    });

    const hideShow = (name) => {
        showHidePsssword[name] = !showHidePsssword[name]
        setShowHidePsssword({ ...showHidePsssword })
    }


    const saveData = ({ name, value }) => {
        let result = values
        result = { ...result, [name]: value }

        setValues(prevState => {
            return { ...prevState, ...result }
        })
    }
    const rules = {
        login_id: values.login_id,
        password: values.password,
        confirm_password: values.confirm_password,
        name: values.name,
        email: values.email,
        timezone: values.timezone?.value,
        currency: values.currency?.value,
        verifyCode: values.verifyCode
    }
    const onSubmitSignup = async (event) => {
        const dataVer = {
            login_id: values?.login_id?.toLowerCase(),
            password: values.password,
            confirm_password: values.confirm_password,
            name: values.name,
            email: values.email,
            timezone: values.timezone?.value,
            currency: values.currency?.value,
            verifyCode: values.verifyCode,
            captchaCode: captchaCode
        }
        const validate = await validateFormSubmit(dataVer, rules, t)
        if (validate) {
            if (validate.validate && checkSubmission) {
                const data = {
                    login_id: values.login_id.toLowerCase(),
                    password: md5(values.password),
                    confirm_password: md5(values.confirm_password),
                    name: values.name,
                    email: values.email,
                    timezone: values.timezone?.value,
                    currency: values.currency?.value,
                    referrer_code: values.referrer_code
                }
                await axios(`${checkStaging()}api/validate`, {
                    data: {
                        data,
                        mode: "signup"
                    },
                    method: "POST"
                }).then((res) => {
                    const { status_code } = res.data?.signup?.children[0]
                    const { status_text } = res.data?.signup?.children[1]
                    if (res.data?.signup?.children[0]?.status_code?.content === "00") {
                        setOverflowState('signup-success')
                    } else if (status_code.content === "60.18") { // login_id / password same
                        setErrors({ ...errors, password: status_text.content })
                    }
                })
            } else {
                setErrors(validate.errors)
            }
        }
        event.preventDefault()
    }
    const renderTimezonedefault = () => {
        let timeZones = OPTIONS_TIME_ZONES_REMOVE_DUPLICATE.filter(item => item.value === "+08:00")
        return timeZones[0]
    }
    function createCaptcha() {
        document.getElementById('captcha').innerHTML = "";
        const newCapcha = renderCapcha()
        let canv = document.createElement("canvas");
        canv.id = "captcha";
        canv.width = 95;
        canv.height = 60;
        let ctx = canv.getContext("2d");
        ctx.font = "20px Georgia";
        ctx.textAlign = "center"
        ctx.strokeStyle = "red"
        ctx.strokeText(newCapcha, 95 / 2, 38);
        setCapcha(newCapcha)
        document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
    }
    /**
     * check error format when change login_id or password
     */
    const checkInputValue = () => {
        if (values.login_id) {
            if (checkUserName(values.login_id)) {
                setErrors(prevState => {
                    return { ...prevState, login_id: "" }
                })
            } else {
                setErrors(prevState => {
                    return { ...prevState, login_id: t("common:requestFormatUserName") }
                })
            }
        } if (values.password) {
            if (!checkPassword(values.password)) {
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

    useEffect(() => {
        checkInputValue()
    }, [values])

    useEffect(() => {
        setErrors({
            ...errors,
            login_id: t("common:requestFormatUserName"),
            password: t("common:requestFormatPassword")
        })
        setValues(prevState => {
            return { ...prevState, timezone: renderTimezonedefault() }
        })
        createCaptcha()
    }, [])
    return <>
        <StylesDetailInner $wide={true}>
            <TitleLogin $small={true}>{t("common:openAccount")}</TitleLogin>
            <StylesIconClose onClick={() => {
                setOverflowState('')
            }}>
                <Close />
            </StylesIconClose>
            <FormItems $cols={2}>
                <FormItemsInput $error={errors?.login_id}>
                    <label htmlFor={'login_id'}>
                        <User />
                        <input id={'login_id'}
                            placeholder={`${t("common:button.login")} ID`}
                            name={'login_id'}
                            type={'text'}
                            maxlength={maxlengthTextInput}
                            onInput={(event) => {
                                saveData({
                                    name: "login_id",
                                    "value": event.target.value
                                })
                            }}
                        />
                    </label>
                    {errors?.login_id ? <StyleTextError>{errors.login_id}</StyleTextError> : ""}
                </FormItemsInput>
                <FormItemsInput $error={errors?.name}>
                    <label htmlFor={'name'}>
                        <User />
                        <input id={'name'}
                            placeholder={t("common:name")}
                            name={'name'}
                            type={'text'}
                            onInput={(event) => {
                                saveData({
                                    name: "name",
                                    "value": event.target.value
                                })
                            }}
                        />
                    </label>
                    {errors?.name && <StyleTextError>{errors.name}</StyleTextError>}
                </FormItemsInput>
                <FormItemsInput $error={errors?.password}>
                    <label htmlFor={'password'}>
                        <Lock />
                        <input id={'password'}
                            placeholder={t("common:password")}
                            name={'password'}
                            type={showHidePsssword?.password ? 'text' : "password"}
                            onInput={(event) => {
                                saveData({
                                    name: "password",
                                    "value": event.target.value
                                })
                            }}
                        />
                        <StyleIconEye onClick={() => hideShow("password")}>
                            {showHidePsssword?.password ?
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
                            placeholder={t("common:confirmPass")}
                            name={'confirm_password'}
                            type={showHidePsssword?.confirm_password ? 'text' : "password"}
                            maxlength={maxlengthTextInput}
                            onInput={(event) => {
                                saveData({
                                    name: "confirm_password",
                                    "value": event.target.value
                                })
                            }}
                        />
                        <StyleIconEye onClick={() => hideShow("confirm_password")}>
                            {showHidePsssword?.confirm_password ?
                                <EyeIcon /> : <EyeHideIcon />
                            }
                        </StyleIconEye>
                    </label>
                    {errors?.confirm_password && <StyleTextError>{errors.confirm_password}</StyleTextError>}
                </FormItemsInput>
                <FormItemsInput $error={errors?.email}>
                    <label htmlFor={'email'}>
                        <Email />
                        <input id={'email'}
                            placeholder={t("common:email")}
                            name={'email'}
                            type={'email'}
                            onInput={(event) => {
                                saveData({
                                    name: "email",
                                    "value": event.target.value
                                })
                            }}
                        />
                    </label>
                    {errors?.email && <StyleTextError>{errors.email}</StyleTextError>}
                </FormItemsInput>
                <FormItemsInput $error={errors?.currency}>
                    <label htmlFor={'currency'}>
                        <Select
                            className="basic-single"
                            theme={(theme) => ({
                                ...theme,
                                borderColor: 'transparent',
                            })}
                            width={'100%'}
                            classNamePrefix="select"
                            defaultValue={[{ value: '', label: t("common:currency") }, ...CURRENCIES][0]}
                            isSearchable={true}
                            name="currency"
                            id={'currency'}
                            options={CURRENCIES}
                            onChange={(value) => {
                                saveData({
                                    name: "currency",
                                    "value": value
                                })
                            }}
                        />
                    </label>
                    {errors?.currency && <StyleTextError>{errors.currency}</StyleTextError>}
                </FormItemsInput>
                <FormItemsInput $error={errors?.timezone}>
                    <label htmlFor={'timezone'}>
                        <Select
                            width={'100%'}
                            theme={(theme) => ({
                                ...theme,
                                borderColor: 'transparent',
                            })}
                            className="basic-single"
                            classNamePrefix="select"
                            defaultValue={renderTimezonedefault()}
                            isSearchable={true}
                            name="timezone"
                            id={'timezone'}
                            options={OPTIONS_TIME_ZONES_REMOVE_DUPLICATE}
                            onChange={(value) => {
                                saveData({
                                    name: "timezone",
                                    "value": value
                                })
                            }}
                        />
                    </label>
                    {errors?.timezone && <StyleTextError>{errors.timezone}</StyleTextError>}
                </FormItemsInput>
                <FormItemsInput $error={errors?.referrer_code}>
                    <label htmlFor={'referrer_code'}>
                        <input id={'referrer_code'}
                            placeholder={t("common:referCode")}
                            name={'referrer_code'}
                            type={'text'}
                            onInput={(event) => {
                                saveData({
                                    name: "referrer_code",
                                    "value": event.target.value
                                })
                            }}
                        />
                    </label>
                    {errors?.referrer_code && <StyleTextError>{errors.referrer_code}</StyleTextError>}
                </FormItemsInput>
                <FormFlex>
                    <FormFlex>
                        <StyleCapcha id="captcha">
                        </StyleCapcha>
                        <FormItemsInput>
                            <label htmlFor={'verifyCode'}>
                                <input id={'cpatchaTextBox'}
                                    placeholder={t("common:verifyCode")}
                                    name={'verifyCode'}
                                    type={'text'}
                                    onInput={(event) => {
                                        saveData({
                                            name: "verifyCode",
                                            "value": event.target.value
                                        })
                                    }}
                                />
                            </label>
                            {errors?.verifyCode ? <StyleTextError>{errors.verifyCode}</StyleTextError> : null}
                        </FormItemsInput>
                    </FormFlex>

                </FormFlex>
                <FormFlex>
                    <StyleCommit>
                        <input type="checkbox" name="checkSubmission"
                            value={checkSubmission} onChange={() => {
                                setCheckSubmission(!checkSubmission)
                                saveData({
                                    name: "checkSubmission",
                                    value: !checkSubmission
                                })
                            }} />
                        <label for="vehicle1">{t("common:submissionText")}</label>
                    </StyleCommit>
                </FormFlex>
            </FormItems>
            <FormSubmit>
                <Button bg={'green'} type={'submit'} onClick={onSubmitSignup} disabled={!checkSubmission}>
                    {t("common:button.signUp")}
                </Button>
            </FormSubmit>
        </StylesDetailInner>
    </>
}

export default SignUp
