//

import { Component } from "react";
import { NextPageContext } from "next";
import Head from "next/head";

//

export class IndexRoute extends Component<NextPageContext, {}> {
  render(): JSX.Element {
    return (
      <>
        <Head>
          <title>Sample Next App</title>
        </Head>
      </>
    );
  }
}
