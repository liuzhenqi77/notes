
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const siteConfig = require(process.cwd() + "/siteConfig.js");
const translate = require("../../server/translate.js").translate;

class About extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        <Container className="mainContainer documentContainer postContainer">
          <h1>About ME</h1>
          <img src={`${siteConfig.baseUrl}img/site_logo.png`} alt="site_logo"/>
          <p>
            About me.
          </p>
        </Container>
        <Container className="mainContainer">
          <h2>Contents of the website</h2>
          <p>
            contents
          </p>
        </Container>
        <Container className="mainContainer">
          <h2>Credits</h2>
          <p>
            Icon made by <a href="http://www.freepik.com/">Freepic</a> from <a href="http://www.flaticon.com/">www.flaticon.com</a> 
          </p>
        </Container>
        <br/>
      </div>
    );
  }
}

About.defaultProps = {
  language: "en"
};

module.exports = About;