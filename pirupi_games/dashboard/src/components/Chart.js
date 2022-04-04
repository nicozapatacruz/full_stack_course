import React, { useState, useEffect } from "react";
import ChartRow from "./ChartRow";
import { API_HOST } from "../constants";

function Chart() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch(`${API_HOST}/api/users`).then((response) =>
      response
        .json()
        .then((data) => {
          setUserList(data.data);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);
  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>Email</th>
                <th>Nombre de usuario</th>
                <th>Dirección</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
