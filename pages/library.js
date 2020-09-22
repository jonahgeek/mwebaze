import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import Layout from "../components/Layout";
import { BOOKS } from "../constants/Books";

function Library() {
  return (
    <>
      <Layout secondaryPage>
        <div className="page-header">Library</div>
        <Row>
          <Col xs={12}>
            I read a lot of totally unrelated books, but you might find some
            interesting;
          </Col>
        </Row>
        <br />
        <Row>
          {BOOKS.map(({ title, author, link, imageUrl }) => (
            <Col xs={3}>
              <div className="card">
                <div className="card-body">
                  <img src={imageUrl} alt="" className="img-fit" />
                </div>
                <div className="card-footer">
                  <small>
                    {author}
                    <br />
                    <a href={link}>Check it out</a>
                  </small>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Layout>
    </>
  );
}

export default Library;
