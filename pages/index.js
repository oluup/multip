import React, { Component } from "react";
import Link from 'next/link';

export default class Index extends Component {
  render() {
    return (
      <div className="container text-center mt-50">

        <Link href="/create/assets">
          <a className="btn btn-success mr-15">Create Assets</a>
        </Link>

        <Link href="/create/tuple">
          <a className="btn btn-warning">Create Tuple[]</a>
        </Link>
      </div>
    );
  }
}
