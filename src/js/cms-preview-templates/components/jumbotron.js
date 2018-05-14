import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title1, title2, subtitles} = this.props;
    return <div>
      <div className="pv5 pv6-l ph3 bg-center cover" style={{
        background: `linear-gradient(to right,rgba(2,43,58,.6),rgba(0,0,0,.4)),url('${image}') no-repeat fixed 100% 0/cover`
      }}>
        <div className="mw7 center">
          <div className="db mb3">
            <div className="mw7 relative mb3">
              <h1 className="f1 f1-l b di lh-title mb3 white mw6 ttc-l">
                { title1 } <br/> { title2 }
              </h1>
            </div>
            <div className="mw6 relative">
              
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
