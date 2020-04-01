//

import React, { Component } from "react";
import { NextPageContext } from "next";
import Head from "next/head";

//
export class HomeRoute extends Component<NextPageContext, {}> {
  render(): JSX.Element {
    return (
      <>
        <Head>
          <title>Sample Next App</title>
        </Head>

        <h1>Hello from @sample-next-app/ui</h1>

        <a href="/about">About page</a>
      </>
    );
  }
}
