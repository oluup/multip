import React, { Component } from "react";
import t from "tcomb-form";

// Forms
import { CreateOptions, CreateSchema } from "../../src/forms/Create";

export default class CreateAssets extends Component {
  state = {
    value: {},
  };

  onSubmit() {
    const value = this.form.getValue();

    if (value) {
      console.log(value);
    }
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div className="container">
        <t.form.Form
          ref={(form) => (this.form = form)}
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          type={CreateSchema}
          options={CreateOptions}
        />

        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onSubmit.bind(this)}
        >
          Save
        </button>
      </div>
    );
  }
}
