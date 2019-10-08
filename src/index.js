import * as serviceWorker from "./serviceWorker";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Foursquare from "foursquare-places";

const App = () => {
  const [items, setItems] = useState([]);

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  const foursquare = new Foursquare(CLIENT_ID, CLIENT_SECRET);

  const params = {
    ll: "37.7749,-122.4194",
    query: "Blue Bottle"
  };

  useEffect(() => {
    foursquare.venues.getVenues(params).then(res => {
      setItems(res.response.venues);
    });
  }, [foursquare, params]);

  return (
    <div>
      <div>Items:</div>
      {items.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
