import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const PopularInstructors = ({darkTheme}) => {
  const [instructors, setInstructors] = useState([]);
  // console.log(danceClasses)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/instructors`)
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-20">
      {instructors.slice(0, 6).map((i, index) => (
        <div key={i._id} className={`card border shadow-md ${darkTheme && 'bg-slate-600'}`}>
          <figure>
            <img src={i.instructorImg} alt="Instructor" />
          </figure>
          <div className="card-body">
            <Fade delay={1e1} cascade damping={1e-1}> 
            <div className="lg:flex justify-between items-center">
              <h2 className="card-title text-2xl text-teal">
                {i.instructorName}
              </h2>
              <p className="opacity-60 lg:text-right">{i.instructorEmail}</p>
            </div>
            </Fade>
            <Fade delay={1e1} cascade damping={1e-1}>
            <p className="font-semibold">{i.className}</p>
            <p>
              Experienced as a professional {i.className}r for {index + 2}{" "}
              years.
            </p>
            </Fade>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularInstructors;
