import React from "react";
import { useApp } from "../../Context/AppContext";

const Table = () => {
  const { data } = useApp();
  return (
    <table>
      <thead>
        <tr key="heading">
          <th>Reg No</th>
          <th>Name</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        {data.map((dataPoint) => (
          <tr key={dataPoint.regNo}>
            <td>{dataPoint.regNo}</td>
            <td>{dataPoint.name}</td>
            <td>{dataPoint.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
