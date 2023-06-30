import { Balls, Screen } from "@Component/global/LoadingScreen/style";
import Head from "next/head";

const LoadingScreen = () => {
    return (<>
        <Head>
            <title>IGX2 | Loading</title>
        </Head>
        <Screen>
            <Balls>
                <div className="ball one"></div>
                <div className="ball two"></div>
                <div className="ball three"></div>
            </Balls>
        </Screen>
    </>
    );
};

export default LoadingScreen;
