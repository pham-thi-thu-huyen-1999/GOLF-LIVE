import {
    FormItems,
    FormItemsInput,
    FormSubmit, StylesDetailInner,
    StylesIconClose,
    TitleDescription,
    TitleLogin,
    StyleTextError,
    StyleTextForgot,
    StyleCapcha, FormFlex, StyleIconEye
} from "@Component/global/login/style";
import { Close, EyeHideIcon, EyeIcon, Lock, User } from "@Component/commons/Icon";
import Button from "@Component/commons/Button";
import { useEffect, useState } from "react";
import { useValidateLogin } from "../../../store/useValidateLogin";
import axios from "axios";
import { checkStaging } from "../../../utils/checkStaging";
import useTranslation from "next-translate/useTranslation";
import { setOverflowState, setData } from "@Dto/states";
import { renderCapcha } from "utils/renderCapcha";
import { publicIpv4 } from 'public-ip';
let md5 = require('md5');

const LogIn = ({ }) => {
    const CHECK_MODE = process.env.MODE !== 'mmm'
    const CHECK_STAGING = process.env.MODE_STAGING && process.env.MODE_STAGING === "staging"
    const { t, lang } = useTranslation()
    const [values, setValues] = useState({})
    let [errors, setErrors] = useState({});
    const [isMobile, setIsMobile] = useState(false);
    const [captchaCode, setCapcha] = useState("")
    const [showHidePsssword, setShowHidePsssword] = useState(false)
    const saveData = ({ name, value }) => {
        let result = values

        result = { ...result, [name]: value }

        setValues(prevState => {
            return { ...prevState, ...result }
        })
    }
    const loginByOTP = async (otp, url) => {
        document.body.insertAdjacentHTML('beforebegin',
            `<form style="display: nonel;" name="myForm" method="POST" action=${url}>
            <input type="hidden" name="otp_id" value=${otp} />
            <input type="hidden" name="login_id" value=${values.username} />
            <input type="hidden" name="lang" value=${lang} />
            <input type="hidden" name="source" value=${ CHECK_STAGING ? "http://13.250.182.197" : (CHECK_MODE ? "https://www.igx360.com" : "https://www.igx18.com")} />
        </form>`)
        document.querySelector("form").submit()
    }
    function createCaptcha() {
        document.getElementById('captcha').innerHTML = "";
        //clear the contents of captcha div first
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
    useEffect(() => {
        createCaptcha()
        const checkWindowMedia = window.matchMedia('(max-width: 992px)').matches
        if (checkWindowMedia) return setIsMobile(true)
    }, [])

    const rules = {
        login_id: values.username,
        password: values.password,
        verifyCode: values.verifyCode
    }

    const onsubmit = async () => {
        const dataVer = {
            login_id: values.username.toLowerCase(),
            password: values.password,
            verifyCode: values.verifyCode,
            captchaCode: captchaCode
        }
        const validate = useValidateLogin(dataVer, rules, t)
        if (validate) {
            if (validate.validate) {
                setErrors(validate.errors)
                const data = {
                    login_id: values.username.toLowerCase(),
                    password: md5(values.password),
                    device_type: isMobile ? "MOBILE" : "WEB"
                }
                const address = await publicIpv4()
                await axios(`${checkStaging()}api/sign-in`, {
                    data: {
                        data,
                        address
                    },
                    method: "POST"
                }).then((res) => {
                    if (res?.data?.login?.children) {
                        const { status_code } = res?.data?.login?.children[0]
                        const { status_text } = res?.data?.login?.children[1]
                        if (status_code.content === "00") { // success
                            const { game_server } = res?.data?.login?.children[3]
                            const urlString = Object.values(game_server.children[0])[0]
                            const url1 = (Object.keys(urlString)[0]).split("A[")
                            const url2 = (url1[1].split("]]"))
                            const { otp_id } = res?.data?.login?.children[2]
                            loginByOTP(otp_id.content, url2[0])
                        } else if (status_code.content === "88") { // request force change password
                            setOverflowState('force_password')
                            setData({ login_id: values.username })
                        } else if (status_code.content === "61.01") { // login is not found
                            let textError = status_text.content.split(": ")
                            setErrors({ ...validate.errors, login_id: `Login ID ${t("common:notFound")}` })
                        } else { // pass is wrong
                            let textError = status_text.content.split(": ")
                            setErrors({ ...validate.errors, password: textError[1] })
                        }
                    }
                    return res
                })
            } else {
                setErrors(validate.errors)
            }
        }
    }
    const onSubmitForgetPass = async () => {
        setOverflowState('forget_password')
    }
    return <>
        <StylesDetailInner>
            <TitleLogin>
                {t("common:welcome")}</TitleLogin>
            <TitleDescription>{t("common:loginToContinue")}</TitleDescription>
            <StylesIconClose onClick={() => {
                setOverflowState('')
            }}>
                <Close />
            </StylesIconClose>
            <FormItems>
                <FormItemsInput $error={errors?.login_id}>
                    <label htmlFor={'username'}>
                        <User />
                        <input id={'username'}
                            placeholder={t("common:userName")}
                            name={'username'}
                            type={'text'}
                            onInput={(event) => {
                                saveData({
                                    name: "username",
                                    "value": event.target.value
                                })
                            }}
                        />
                    </label>
                    {errors.login_id && <StyleTextError>{errors.login_id}</StyleTextError>}
                </FormItemsInput>
                <FormItemsInput $error={errors?.password}>
                    <label htmlFor={'password'}>
                        <Lock />
                        <input id={'password'}
                            placeholder={t("common:password")}
                            name={'password'}
                            type={showHidePsssword ? "type" : 'password'}
                            onInput={(event) => {
                                saveData({
                                    name: "password",
                                    "value": event.target.value
                                })
                            }}
                        />
                        <StyleIconEye onClick={() => setShowHidePsssword(!showHidePsssword)}>
                            {showHidePsssword ?
                                <EyeIcon /> : <EyeHideIcon />
                            }
                        </StyleIconEye>
                    </label>
                    {errors?.password ? <StyleTextError>{errors.password}</StyleTextError> : null}
                </FormItemsInput>
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
            </FormItems>

            <FormSubmit>
                <Button bg={'green'} type={'submit'} onClick={onsubmit}>
                    {t("common:button.login")}
                </Button>
            </FormSubmit>
            {
                CHECK_MODE ?
                    <StyleTextForgot onClick={onSubmitForgetPass}>
                        <span>{t("common:forgotPass")}</span>
                    </StyleTextForgot> : <></>
            }
        </StylesDetailInner>
    </>
}

export default LogIn
