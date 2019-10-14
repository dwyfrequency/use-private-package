import React, { useState, useEffect } from "react";
import Foursquare from "foursquare-places";

// need to create an .env file - see instructions in link
// https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const foursquare = new Foursquare(CLIENT_ID, CLIENT_SECRET);

const App = () => {
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({
    ll: "37.7749,-122.4194",
    query: "Blue Bottle"
  });

  useEffect(() => {
    foursquare.venues.getVenues(params).then(res => {
      setItems(res.response.venues);
    });
  }, [params]);

  return (
    <div>
      <div>Items:</div>
      {items.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

export default App;
