import React from "react";
import {Row,Col,CardPanel} from "react-materialize";

const Index = () => {
  return (
    <div>
      <Row>
        <Col m={4} s={12}>
          <CardPanel className="black">
            <h4 className="white-text"> Movie </h4>
            <span className="white-text">
              Our fantastic movie streaming site is the best that can be recommended! We've got you covered for movies you would like to stream.
            </span>
          </CardPanel>
        </Col>
        <Col m={4} s={12}>
          <CardPanel className="black">
            <h4 className="white-text"> Blog </h4>
            <span className="white-text">
              Check out our blog posts to see more relaxing entertaining blog posts. <br/> Comment and like our posts to interact with us!
            </span>
          </CardPanel>
        </Col>
        <Col m={4} s={12}>
          <CardPanel className="black">
            <h4 className="white-text"> Music</h4>
            <span className="white-text">
              Amazing! You can listen to any music of your choice on our site. <br/> Good music is good for the soul
            </span>
          </CardPanel>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
