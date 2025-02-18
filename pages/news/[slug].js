import dynamic from "next/dynamic";
import Head from "next/head";
import { Get } from "@Dto/Api";
import findNewsByTitle from "../../graphQL/findNewsByTitle";
const BackToTopButton = dynamic(() => import("@Component/global/BackToTop"))
const Post = dynamic(() => import("@Component/global/Post"))
const ListPosts = dynamic(() => import("@Component/global/ListPosts"));
import TableNodata from "@Component/commons/TableNodata";
import {setSidebarDisplay} from "@Dto/states";

const TournamentDetail = ({ initial, global, keyAPI }) => {
    let title = initial.data?.findNewsByTitle[0]?.title || 'Not Found'
    const posts = initial.data?.findNewsByTitle[0]
    setSidebarDisplay(true)
    return <>
        <Head>
            <title>IGX2 | News {title}</title>
            <meta name="description" content="Generated by Golf live page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            {posts ? <>
                <Post posts={posts} data={global.shareWith} />
                <ListPosts relatived={true} classPagination="swiper-pagination-relatived"/>
                <BackToTopButton />
            </> : <TableNodata />}
        </main>
    </>
}


export async function getServerSideProps({ query }) {

    let { slug } = query
    let mutateSlug = slug.replaceAll('-', '_')
    let initial = await Get({ query: findNewsByTitle(mutateSlug) });

    return {
        props: {
            initial,
            keyAPI: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY
        },
    }
}

export default TournamentDetail
