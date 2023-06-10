import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AllClasses = () => {
  const { user } = useAuth();
  const [danceClasses, setDanceClasses] = useState([]);
  const navigate = useNavigate();
  // console.log(danceClasses)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/classes`)
      .then((res) => res.json())
      .then((data) => setDanceClasses(data));
  }, []);

  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        title: "You have to log in before select this",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/dashboard/selectedClass");
        }
      });
    }
    else{
      navigate("/dashboard/selectedClass");
    }
  };

  return (
    <>
      <SectionTitle
        subTitle="A Great Place To Learn"
        title="Classes For You"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {danceClasses.map((i, index) => (
          <div key={index} className="card bg-base-100 shadow-md">
            <figure>
              <img className="h-56" src={i.classImg} alt="Dance class" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">{i.className}</h2>
              <div className="lg:flex justify-between items-center">
                <h2 className="card-title text-lg">{i.instructorName}</h2>
                <p className="opacity-60 lg:text-right">{i.instructorEmail}</p>
              </div>
              <p className="text-teal font-semibold">Price: ${i.price}</p>
              <div className="flex justify-between">
                <p>Enrolled: {i.enrolled}</p>
                <p className="text-right">Available Seat: {i.available_seat}</p>
              </div>
              <div className="card-actions justify-center mt-5">
                <Link onClick={handleSelect} className="button">
                  Select
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllClasses;
