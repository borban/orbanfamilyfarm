import React, { useState } from "react";
import Card from "../components/Card";
import axios from "axios";

function Content() {
  const getText = () => {
    axios.get('https://tgyfpk3h5g.execute-api.us-east-1.amazonaws.com/default/?id=10006546')
      .then((response) => {
        let result = JSON.parse(response.data);
        setText(result.document.summary);
        console.log(result.document.summary);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [text, setText] = useState(() => getText());

  return (
    <div className="content">
      <Card
        title="First Card"
        text={text}
        image="https://via.placeholder.com/150"
      />
      <Card
        title="Second Card"
        text={text}
        image="https://via.placeholder.com/150"
      />
      <Card
        title="Third Card"
        text={text}
        image="https://via.placeholder.com/150"
      />
      <Card
        title="Fourth Card"
        text={text}
        image="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default Content;
