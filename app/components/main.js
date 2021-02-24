import React from "react";
import { connect } from "react-redux"

export class DummyClass extends React.Component {


    render() {
        <div>Welcome to my Dummy Data </div>
    }
}

export default connect(null , null)(DummyClass)