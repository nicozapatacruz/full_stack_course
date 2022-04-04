import React from "react";

function ChartRow(props) {
  return (
    <tr>
      <td>{props.email}</td>
      <td>{props.user_name}</td>
      <td>{props.address}</td>
      <td>{props.user_image}</td>
    </tr>
  );
}

export default ChartRow;
