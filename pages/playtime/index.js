import PlayTime from '@containers/PlayTime'
import Head from 'next/head'
import React, { Fragment } from 'react'

function index() {
    return (
        <Fragment>
            <Head>
                               <title>{"Robox Exclusive"}</title>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
                    crossorigin="anonymous"></script>
            </Head>
            <PlayTime />
        </Fragment>
    )
}

export default index
