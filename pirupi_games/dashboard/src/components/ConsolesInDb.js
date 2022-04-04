import React, { useState, useEffect } from "react";
import { API_HOST } from "../constants";

function ConsolesInDb() {
  const [consolesList, setConsolesList] = useState([]);
  useEffect(() => {
    fetch(`${API_HOST}/api/consoles`).then((response) =>
      response
        .json()
        .then((data) => {
          setConsolesList(data.data);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Consolas en BD</h5>
        </div>
        <div className="card-body">
          <div className="row">
            {consolesList.map((row, i) => {
              return (
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div key={i} className="card-body">
                      {row.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsolesInDb;
