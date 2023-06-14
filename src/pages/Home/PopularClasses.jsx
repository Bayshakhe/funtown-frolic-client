import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const PopularClasses = ({darkTheme}) => {
  const [danceClasses, setDanceClasses] = useState([]);
  // console.log(danceClasses)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/classes`)
      .then((res) => res.json())
      .then((data) => setDanceClasses(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {danceClasses.map((a) => (
        <div
          key={a._id}
          className={`card card-side shadow-xl grid grid-cols-2 border ${darkTheme && 'bg-slate-600'}`}
        >
          <Slide>
            <img
              className="h-64 rounded-xl ml-4 my-4"
              src={a.classImg}
              alt="Dance classes"
            />
          </Slide>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">{a.className}</h2>
            <p className="m-0 text-xl">{a.instructorName}</p>
            <p className="text-teal font-semibold">Price: ${a.price}</p>
            <div className="flex justify-between">
              <p>Enrolled: {a.enrolled}</p>
              <p className="text-right">Available Seat: {a.available_seat}</p>
            </div>
            <div className="card-actions justify-end mt-5">
              <Link to={'/allClasses'} className="button">Visit Now</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularClasses;
