/** Created by ge on 6/23/16. */
import React, {Component, PropTypes} from "react";
import PropsTable from "./react-component-props-table";

/* this is how you load the metaData using react-docgen */
import componentAST from "!!react-docgen!./react-component-props-table";

var {number, string} = PropTypes;
export default class HappySandwichMakerExample extends Component {
  render() {
    /* the `.table-container` here is to allow overflow-x */
    return (
      <div className="table-container horizontal-scroll">
        <PropsTable propMetaData={componentAST.props}/>
      </div>
    );
  }
}
