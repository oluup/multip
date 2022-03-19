import React, { Component } from "react";
import t from "tcomb-form";
import Web3 from "web3";
import { CopyToClipboard } from "react-copy-to-clipboard";

// Forms
import { TupleOptions, TupleSchema } from "../../src/forms/Tuple";

export default class CreateBulk extends Component {
  state = {
    value: {
      baseUrl: "https://public.nftstatic.com/static/nft/BSC/BRNFT/",
      royalty: 1,
    },

    json: null,
    copied: false,
  };

  onSubmit() {
    const value = this.form.getValue();

    if (value) {
      this.setState({
        json: JSON.stringify(
          value.assets.map(({ tokenId, price }) => {
            const meta_url = `${value.baseUrl}${tokenId}`;
            return [
              meta_url,
              Web3.utils.toWei(price.toString()),
              value.royalty,
            ];
          })
        ),
      });
    }
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    const { json, value, copied } = this.state;

    return (
      <div className="container">
        {json ? (
          <>
            <CopyToClipboard
              text={json}
              onCopy={() => this.setState({ copied: true })}
            >
              <span className="json-text">{json}</span>
            </CopyToClipboard>

            {copied && (
              <div className="copied">
                <span>Copied.</span>
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() =>
                  this.setState({
                    json: null,
                    value: {
                      ...value,
                      assets: [],
                    },
                  })
                }
              >
                Reload
              </button>
            </div>
          </>
        ) : (
          <>
            <t.form.Form
              ref={(form) => (this.form = form)}
              value={value}
              onChange={this.onChange.bind(this)}
              type={TupleSchema}
              options={TupleOptions}
            />

            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onSubmit.bind(this)}
            >
              Generate
            </button>
          </>
        )}
      </div>
    );
  }
}
