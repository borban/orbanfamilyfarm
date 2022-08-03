import React, { useState } from "react";
import Card from "../components/Card";
import axios from "axios";

function Content() {
  const getPhotos = () => {
    axios
      .get("https://tgyfpk3h5g.execute-api.us-east-1.amazonaws.com/default")
      .then((response) => {
        let results = JSON.parse(response.data);
        setPhotos(results.documents.map(document => document));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [photos, setPhotos] = useState(() => getPhotos());

  return (
    <div className="content">
      {photos ? (
        photos.map(document => {
          return (
            <Card
              title={document.title}
              text={document.description}
              image={document.url}
            />
          );
        })
      ) : (
        <div className="spinner-container"><div className="loading-spinner"></div></div>
      )}
    </div>
  );
}

export default Content;
