import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
  const {user, loading} = useAuth()
  const [axiosSecure] = useAxiosSecure()
  // const [classes, setClasses] = useState([]);
  // console.log(classes)
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}/allClasses`)
  //     .then((res) => res.json())
  //     .then((data) => setClasses(data));
  // }, []);
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["allClasses", user?.email],
    enabled: !loading && !!user?.email && !!localStorage.getItem('access_token'),
    queryFn: async () => {
      const res = await axiosSecure.get(`/allClasses`);
      console.log(res)
      return res.data;
    },
  });
  return (
    <div className=" min-h-screen pt-20 bg-teal">
      <div className="overflow-x-auto w-11/12 mx-auto bg-white">
        <table className="table border">
          {/* head */}
          <thead>
            <tr className="font-semibold">
              <th></th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map((i, index) => (
              <tr key={index} className="mb-3 ">
                <th>{index + 1}</th>
                <th>
                  <img className="w-16" src={i.classImg} alt="" />
                </th>
                <td className="font-semibold">{i.className}</td>
                <td>
                  <p className="font-semibold">{i.instructorName}</p>
                  <p className="text-sm">{i.instructorEmail}</p>
                </td>
                <td>{i.available_seat}</td>
                <td>$ {i.price}</td>
                <td className={`font-semibold ${i.status === "approved" ? 'text-teal' : 'text-red-600'}`}>{i.status}</td>
                {i.status === "pending" ? (
                  <>
                    <td className="">
                      <div className="button-outline">Approve</div>
                    </td>
                    <td className="">
                      <div className="button-outline ">Deny</div>
                    </td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                  </>
                )}
                <td className="">
                  <div className="button">Send Feedback</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
