import dynamic from "next/dynamic";
import { ApolloProvider } from "@apollo/client";
import NextNProgress from 'nextjs-progressbar';
import client from "@Dto/apollo-client"
import Global from "@Data/global/index.js";
import {BigContainer, SideBarWrapper} from "@Styles/container";
import {useState, useEffect, useRef} from "react";
import Router from 'next/router';
import {setMedia, useGlobalState} from "@Dto/states"
const GlobalStyle = dynamic(() => import("@Styles/global.css"));
const Header = dynamic(() => import("@Component/global/Header"));
const Footer = dynamic(() => import("@Component/commons/Footer"));
const Login = dynamic(() => import("@Component/global/login"))
const Navbar = dynamic(() => import("@Component/global/Navbar"));
const Transition = dynamic(() => import("@Component/global/Transition"));
const LoadingScreen = dynamic(() => import("@Component/global/LoadingScreen"));
import { LiveChatWidget } from '@livechat/widget-react'
import { publicIpv4 } from 'public-ip';
import axios from 'axios'
import setLanguage from 'next-translate/setLanguage'
import { useRouter } from 'next/router'
import { checkShowSideMenu } from "utils/checkShowSideMenu";
import { useWidgetIsReady } from "@livechat/widget-react";
import {LiveChatMini} from "@Component/LiveChatMini/style";
import SlideAnnoucement from "@Component/global/SlideAnnoucement";
import { findAllNews } from "graphQL/news";
import { Get } from "@Dto/Api";

function MyApp({ Component, pageProps }) {

  const [isMobile, setIsMobile] = useState(false)
  const [loading, setLoading] = useState(false);
  const { locales } = useRouter()
  const [showSidebar] = useGlobalState('sidebarDisplay')
  const [stateLiveChat,setStateLiveChat] = useState('minimized')
  
  const [announcements,setAnnouncements] = useState([])

  // const refLiveChat = useRef(null)
  Router.onRouteChangeStart = () => {
    // Some page has started loading
    // Set state to pass to loader props
    window.scrollTo(0,0)
    setLoading(true)
  };

  Router.onRouteChangeComplete = () => {
    // Some page has finished loading
    // Set state to pass to loader props
    setLoading(false)
  };

  const checkRouter = async () => {
    const address = await publicIpv4()
    await axios({
      url: `https://ipinfo.io/${address}/json?token=827c934cc5fa25`
    })
    .then((res) => {
      if(res){
        const { country } = res.data;
        const renderLanguage = locales.find(locale => {
          return locale.includes(country)
        })
        if(renderLanguage){
          setLanguage(renderLanguage)
        }
      }
    }).catch(function (error) {
      console.log(error)
    })
  }
  useEffect(() => {
    const checkWindowMedia = window.matchMedia('(max-width: 992px)').matches
    const checkWindowMediaSmall = window.matchMedia('(max-width: 640px)').matches
    if(checkWindowMediaSmall) {
      setMedia("mobile")
    }
    else if (checkWindowMedia) {
      setMedia("tablet")
      return setIsMobile(true)
    }
    callDataAnnoucement()
  }, [])
  const callDataAnnoucement = async () => {
    const { data } = await Get({ query: findAllNews({ page: 1, limit: 5, category: "announcements" }) });
    setAnnouncements(data?.findAllNewsInCMS?.docs)
  }
  useEffect(() => {
    checkRouter()
    // console.log(refLiveChat)
  }, [])

  function onVisibilityChanged(data) {
    switch (data.visibility) {
      case "maximized":
        setStateLiveChat("maximized")
        break;
      case "minimized":
        setStateLiveChat("minimized")
        break;
      case "hidden":
        setStateLiveChat("hidden")
        break;
    }
  }

  const onClickLiveChatMini = () => {
    setStateLiveChat("maximized")
    // LiveChat.openWidget();
  }

  return <ApolloProvider client={client}>
    <GlobalStyle />
    <Header data={Global.header} />
    {announcements?.length > 0 &&
      <SlideAnnoucement announcements={announcements}/>}
    <LiveChatMini onClick={onClickLiveChatMini}>
      <p>Live Chat</p>
    </LiveChatMini>
    <LiveChatWidget license="14295186" group="0" visibility={stateLiveChat} onVisibilityChanged={(data)=>{onVisibilityChanged(data)}}/>
    <BigContainer className={!showSidebar ? 'none-sidebar hidden-ball' : ''}>
      {
        showSidebar ? <>
          <SideBarWrapper>
            {!isMobile && <Navbar />}
          </SideBarWrapper>
          <NextNProgress color="#91BD12" />
        </> : <></>
      }

      {
        !loading ? <>
          <Transition>
            <Component {...pageProps} global={Global} />
          </Transition>
        </> : <LoadingScreen />
      }
    </BigContainer>
    <Login data={{
      'login': Global.login,
      'signup': Global.signup
    }} />
    <Footer data={Global.footer} />
  </ApolloProvider>
}

export default MyApp
