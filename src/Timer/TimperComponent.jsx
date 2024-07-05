import React, { useEffect, useState } from 'react';
import './TimerComponent.css';

function TimperComponent() {
  const [data, setData] = useState([]);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  async function FetchData() {
    try {
      const data = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
      const res = await data.json();
      setData(res);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  function saveToList(item) {
    setSaved([...saved, item]);
  }

  return (
    <div>
      <div className="card-container">
        {data.map((ele, index) => (
          <div key={index} className="card">
            <h1>{ele}</h1>
            <button onClick={() => saveToList(ele)}>Save to List</button>
          </div>
        ))}
      </div>

      <h2>Saved List</h2>
      <div className="saved-container">
        {saved.map((item, index) => (
          <div key={index} className="saved-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimperComponent;
