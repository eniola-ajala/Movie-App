import React from "react";
import { Row, Col } from "react-materialize";

const Index = () => {
  return (
    <div>
      <Row className="">
        <Col s={6} l={6}>
          <div className="banner1">
            <h3 className="h3-width">
              Find Good Movies And Musics To Sooth Your Soul
            </h3>
          </div>
        </Col>
        <Col s={6} m={6} l={6}>
          <img src="/movie.jpg" alt="movie and music" className="banner2" />
        </Col>
      </Row>
    </div>
  );
};
export default Index;
