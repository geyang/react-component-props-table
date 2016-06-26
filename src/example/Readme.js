/**
 * Created by ge on 6/24/16.
 */
import React from "react";
import Markdown from "react-markdownit";

import Highlight from "react-highlight";
import PropsTableExample from "../react-component-props-table.example";
import ExampleSource from "!!raw!../react-component-props-table.example";
import PropsTableMetaData from "!!react-docgen!../react-component-props-table";
import PropsTableSource from "!!raw!../react-component-props-table";

export default function Readme({}) {
  return (
    <Markdown stripIndent={true}>{`
      # Props Table for React ES6 Components

      [![github](https://img.shields.io/github/downloads/episodeyang/react-component-props-table/total.svg?style=flat-square&maxAge=2592000)]()

      A Table Component to visualize react-es6-metadata, used in conjunction with
      [react-docgen-loader](https://www.npmjs.com/package/react-docgen-loader).
      ## Usage

      ~~~shell
        npm install --save react-component-props-table
      ~~~

      ### Live Demo: how does the prop table look like?

      Here is a **live** example: the props table of the props table component itself.
      `}
      <PropsTableExample/>
      {`
      "This is amazing!" you say. "now, how is this table generated?"
      > &ldquo;Now, how is this table generated?&rdquo;

      Here is how.

      ### Usage Example

      The source code below is the actual example script.

      **Notice** that we are only passing the \`.props\` field of the metaData into
      the \`PropsTable\` component.

      `}
      <Highlight>{ExampleSource}</Highlight>
      {`
      #### More Details

      The \`webpack react-docgen-loader\` runs the \`react-docgen\` cli tool, and gets
      a metaData object in the form of the following example (loaded from source).
      `}
      <Highlight>{JSON.stringify(PropsTableMetaData, null, 4)}</Highlight>
      {`
      > &ldquo;How to write these meta data in a component?&rdquo; You ask.

      #### Component Comment String Example

      Questions can be directed to the \`react-docgen\` repository on GitHub. Here is a
      simple example for a pure function component written with ES6 syntax:

      `}
      <Highlight className="javascript">{PropsTableSource}</Highlight>
      {`
      You can test whether your component is written according to \`react-docgen\`'s liking
      by running the following:
      `}
      <div className="flex-column" style={{alignItems: "center", width: "100%"}}>
        <img width="90%" style={{maxWidth: "600px", flex: "0 0 auto"}}
             src="using-react-docgen-in-command-line-Screenshot-2016-06-26-15.40.38.png"/>
      </div>
      {`
      #### Issues and questions:

      Questions regarding react-docgen and how to write component doc strings,
      please submit them to the react-docgen issue tracker. Maintainers there are
      **very** responsive.

      Questions or issues wth this table component can be submitted on [Github issues](https://github.com/episodeyang/react-component-props-table/issues).

      ~~ Built with ❤️ ~~
      `}

    </Markdown>
  )
}
