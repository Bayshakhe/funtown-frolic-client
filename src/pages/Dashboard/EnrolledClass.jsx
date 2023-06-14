import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const EnrolledClass = () => {
    const {user} = useAuth()
    const [enrolledClass, setEnrolledClass] = useState([])

    useEffect(()=> {
        fetch(`${import.meta.env.VITE_API_URL}/enrolledClass?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setEnrolledClass(data))
    },[])
    console.log(enrolledClass)
    return (
        <>
      {enrolledClass.length > 0 ? (
        <div className="overflow-x-auto m-14 w-2/3 mx-auto">
          <table className="table border">
            {/* head */}
            <thead>
              <tr className="font-semibold text-lg">
                <th></th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {enrolledClass.map((i, index) => (
                <tr key={i._id} className="mb-3 ">
                  <th>{index + 1}</th>
                  <td className="font-bold">{i.className}</td>
                  <td>$ {i.price}</td>
                  <td className='text-teal'>Successfull</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-3xl m-12 text-center">Not Enrolled class yet..</p>
      )}
    </>
    );
};

export default EnrolledClass;