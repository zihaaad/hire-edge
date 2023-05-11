import React from "react";
import {Link} from "react-router-dom";

const Job = ({job}) => {
  const {id, img, title, company, salary, location, workplace, jobType} = job;
  const JobContext = React.createContext();
  return (
    <div className="border p-5 rounded-lg">
      <div className="ps-2 pb-2">
        <img className="my-5" src={img} alt="" />
        <h3 className="text-2xl">{title}</h3>
        <h4 className="text-xl opacity-90 mb-3">{company}</h4>
        <button className="btn-secondary">{workplace}</button>{" "}
        <button className="btn-secondary">{jobType}</button>
        <p className="flex my-3">
          <img src="/src/assets/Icons/Frame-4.png" alt="" />
          {location}{" "}
          <img className="ms-3" src="/src/assets/Icons/Frame.png" alt="" />{" "}
          Salary: {salary}
        </p>
        <JobContext.Provider value={job[id]} />
        <button className="btn-primary">
          <Link to={`/job/${id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Job;
