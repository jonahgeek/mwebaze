import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import Layout from "../components/Layout";

function Library() {
  return (
    <>
      <Layout secondaryPage>
        <Row>
          <Col xs={12}>
            I read a lot of <strong>unrelated books</strong>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default Library;
