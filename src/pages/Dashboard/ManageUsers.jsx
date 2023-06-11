import React, { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className=" min-h-screen pt-20 bg-teal">
      <div className="overflow-x-auto m-14 w-2/3 mx-auto bg-white">
        <table className="table border">
          {/* head */}
          <thead>
            <tr className="font-semibold">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((i, index) => (
              <tr key={index} className="mb-3 ">
                <th>{index + 1}</th>
                <td className="font-semibold">{i.name}</td>
                <td>{i.email}</td>
                <td>{i.role}</td>
                {i.role === "student" ? (
                  <td className="">
                    <div className="button-outline">Instructor</div>
                  </td>
                ) : (
                  <td>
                    <div className="button-outline">Student</div>
                  </td>
                )}
                {i.role === "admin" ? (
                  <td className="">Admin</td>
                ) : (
                  <td className="">
                    <div className="button">Admin</div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
