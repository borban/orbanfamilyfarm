import React, { useState } from "react";
import Card from "../components/Card";
import axios from "axios";

function Content() {
  const getSummaries = () => {
    axios
      .get("https://tgyfpk3h5g.execute-api.us-east-1.amazonaws.com/default")
      .then((response) => {
        let results = JSON.parse(response.data);
        setSummaries(results.documents.map((document) => document.summary));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [summaries, setSummaries] = useState(() => getSummaries());

  return (
    <div className="content">
      {summaries ? (
        summaries.map((summary) => {
          return (
            <Card
              title="Card"
              text={summary}
              image="https://loremflickr.com/250/260"
            />
          );
        })
      ) : (
        <div>No content</div>
      )}
    </div>
  );
}

export default Content;
