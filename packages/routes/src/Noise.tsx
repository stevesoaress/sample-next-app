//

import React, { Component } from "react";
import { NextPageContext } from "next";
import Head from "next/head";

//

import { Lorem0 } from "@sample-next-app/ui";

//

//
export class NoiseRoute extends Component<NextPageContext, {}> {
  render(): JSX.Element {
    return (
      <>
        <Head>
          <title>Sample Next App - Noise</title>
        </Head>

        <h1>Hello from @sample-next-app/ui</h1>

        Some noise here
        <Lorem0 />
      </>
    );
  }
}
