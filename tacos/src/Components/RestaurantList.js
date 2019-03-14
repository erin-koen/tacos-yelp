import React, { Component } from "react";
import { connect } from "react-redux";
import { getRestaurants, sortByAdju } from "../Actions/DataFetching";
import { CardGroup, Spinner, Button } from "reactstrap";

import Restaurant from "./Restaurant";

class RestaurantList extends Component {
  state = {
    yelpData: this.props.yelpData
  };

  componentDidMount() {
    this.props.getRestaurants();
  }

  sortByTrue = e => {
    e.preventDefault();
    this.props.getRestaurants();
  }

  sortByAdju = e => {
    e.preventDefault();
    this.props.sortByAdju();
  };

  render() {
    return (
      <>
        {this.props.loggingIn ? (
          <div>
            {" "}
            <Spinner color="primary" />
          </div>
        ) : (
          <div className="restaurant-content">
            <div className="intro-copy">
            <h1>The Best Tacos Near You</h1>
            <h3>
              Tacos are important. When you're deciding where to eat, do you trust the ratings?
            </h3>
            <h4> We read between the lines. Our proprietary natural language processing parses thousands of reviews to tell you what people really think of your local taco joint.
              </h4>
              </div>
            <div className="toggle-button-container">
              <Button onClick={this.sortByTrue}>Sort by Original Score</Button>
              {/* <br></br>
              <br></br> */}
              <Button onClick={this.sortByAdju}>Sort by Adjusted Score</Button>
            </div>
            <div className="main-container">
              <CardGroup>
                {this.props.restaurants.map(restaurant => (
                  <Restaurant restaurant={restaurant} key={restaurant.id} />
                ))}
              </CardGroup>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  { getRestaurants, sortByAdju }
)(RestaurantList);
