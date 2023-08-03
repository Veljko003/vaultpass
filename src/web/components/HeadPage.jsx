import Head from "next/head"

const HeadPage = (props) => {
    const { pageTitle } = props;
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.svg" />
            <title>{pageTitle}</title>
        </Head>
    )
}

export default HeadPage