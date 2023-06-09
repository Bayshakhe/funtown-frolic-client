import React, { useEffect, useState } from 'react';

const SeeClasses = () => {
    const [a,setA] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/instructor?email=${email}`)
          .then((res) => res.json())
          .then((data) => setA(data));
      }, []);
    return (
        <div>
            see classes
        </div>
    );
};

export default SeeClasses;