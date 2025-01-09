import React from "react";
import { format } from "date-fns";

const DateDisplay = ({ launchDate }) => {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-3xl font-semibold text-blue-400">
        {launchDate ? format(new Date(launchDate), "dd MMMM yyyy") : "No Date Provided"}
      </h1>
    </div>
  );
};

export default DateDisplay;
