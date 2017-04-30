import React, { Component } from 'react'
import { observer, Provider } from 'mobx-react'
import Head from 'next/head'
import styled from 'styled-components'
import state from '../state'

const PageWrapper = styled.div`
  padding: 3em 2em 7em;
`

@observer
class Page extends Component {

  render() {

    return (
      <div className="root-wrapper">
        <Head>
          <title>Daniel Dunderfelt</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="https://fonts.googleapis.com/css?family=Rubik+Mono+One|Work+Sans:100,300,400,700" rel="stylesheet" />
          {/*<link rel='shortcut icon' type='image/x-icon' href='/static/favicon.png'/>*/}
          <meta property="og:title" content="Media Match LIVE"/>
          <meta property="og:description" content="Website for the Media Match app with live statistics."/>
          <meta property="og:image" content="https://mediamatch.live/static/mediamatch_share.jpg"/>
          <meta property="og:url" content="https://mediamatch.live"/>
          <meta name="twitter:card" content="summary_large_image"/>

          <meta property="og:site_name" content="Media Match LIVE"/>
          <meta name="twitter:image:alt" content="Media Match LIVE"/>
        </Head>

        <Provider store={ state() }>
          <PageWrapper>
            { this.props.children }
          </PageWrapper>
        </Provider>

        <style jsx global>{`
          html {
            font-family: 'Work Sans', sans-serif;
            font-weight: 400;
          }
          body {
            margin: 0;
            background: #efefef;
          }
          * {
            box-sizing: border-box;
          }
          h1 {
            font-family: 'Rubik Mono One', sans-serif;
          }
          .root-wrapper {
            height: 100%;
          }
        `}</style>
      </div>
    )
  }
}

export default Page
