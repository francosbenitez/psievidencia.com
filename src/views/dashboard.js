import React from "react";

const Dashboard = ({ psychologists }) => {
  let counterObj = {};

  for (const property of psychologists) {
    counterObj[property.education] = 1 + (counterObj[property.education] || 0);
  }
  console.log(counterObj);

  return <div>Dashboard</div>;
};

export default Dashboard;
