import React from "react";
import { Col, Row } from "react-flexbox-grid";
import { FaCircle } from "react-icons/fa";

import Layout from "../components/Layout";
import { PROJECTS } from "../constants/Projects";

function Projects() {
  return (
    <>
      <Layout secondaryPage>
        <div className="page-header">Projects</div>
        <div className="container">
          <p>
            I'm a developer & designer who mostly concentrates on front-end
            technologies like{" "}
            <strong>
              <a
                target="_blank"
                href="https://reactjs.org/"
                style={{
                  color: "#0dab78",
                }}
              >
                ReactJS
              </a>
            </strong>
            .
          </p>
          <p>
            <span
              style={{
                color: "lightgray",
                fontSize: "13px",
              }}
            >
              Check out my projects:
            </span>
            <br />
            <br />
            <Row>
              {PROJECTS.map(({ projectName, description, progress, link }) => (
                <>
                  <Col xs={12}>
                    <div class="card">
                      <div className="card-header">
                        <Row>
                          <Col xs={8}>{projectName}</Col>
                          <Col xs={4}>
                            <span className={progress}>
                              <FaCircle /> {progress}
                            </span>
                          </Col>
                        </Row>
                      </div>
                      <div class="card-body">
                        <Row>
                          <Col xs={7}>{description}</Col>
                          <Col xs={5}>
                            <small>
                              Link:{" "}
                              <a target="_blank" href={link}>
                                {link}
                              </a>
                            </small>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <br />
                  </Col>
                </>
              ))}
            </Row>
          </p>
        </div>
      </Layout>
    </>
  );
}

export default Projects;
