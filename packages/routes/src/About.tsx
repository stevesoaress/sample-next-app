//

import React, { Component } from "react";
import { NextPageContext } from "next";
import Head from "next/head";

//
export class AboutRoute extends Component<NextPageContext, {}> {
  render(): JSX.Element {
    return (
      <>
        <Head>
          <title>Sample Next App - About</title>
        </Head>

        <h1>This is a test about page</h1>
        <a href="/">Home page</a>
      </>
    );
  }
}
