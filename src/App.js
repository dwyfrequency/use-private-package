import React, { useState, useEffect } from "react";
import "./App.css";
import Foursquare from "foursquare-places";

const App = props => {
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
      {items.map(item => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default App;
