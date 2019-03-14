import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from 'react-router-dom'

const Review = props => {
  return (
    <div>
      <Jumbotron>
        <h3>{props.review.reviewer.username}</h3>
        <p>
          {props.review.review}
        </p>
        <hr className="my-2" />
        <div className="star-container">
            <p>Original Score:
                <br/>
                {props.review.score} stars
            </p>
            <p>Adjusted Score:
                <br/>
                {props.review.adju_score} stars
            </p>
        </div>
        
        <p className="lead">
        <Link to="/restaurants"><Button color="primary">Go Back</Button></Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Review;
