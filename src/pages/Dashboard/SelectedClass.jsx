import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const SelectedClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // const token = localStorage.getItem('access_token')
  // useEffect(()=>{
  //     fetch(`${import.meta.env.VITE_API_URL}/selected?email=${user?.email}`, {
  //         headers: `Bearer ${token}`
  //     })
  //     .then(res => res.send)
  //     .then(data => console.log(data))
  // },[])
  const { refetch, data: selected = [] } = useQuery({
    queryKey: ["selected", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selected?email=${user?.email}`);
      return res.data;
    },
  });
  // console.log(selected)
  return (
    <>
      {selected.length > 0 ? (
        <div className="overflow-x-auto m-14 w-2/3 mx-auto">
          <table className="table border">
            {/* head */}
            <thead>
              <tr className="font-semibold text-lg">
                <th></th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Pay</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {selected.map((i, index) => (
                <tr key={i._id} className="mb-3 ">
                  <th>{index + 1}</th>
                  <td className="font-bold">{i.className}</td>
                  <td>$ {i.price}</td>
                  <td>
                    <Link to={`/dashboard/payment/${i._id}`} className="btn bg-[#019999] text-white">Pay</Link>
                  </td>

                  <td className="">
                    <div className="btn btn-outline hover:bg-[#019999] border border-[#019999] hover:text-white">
                      Delete
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-3xl m-12 text-center">Not selected yet..</p>
      )}
    </>
  );
};

export default SelectedClass;
