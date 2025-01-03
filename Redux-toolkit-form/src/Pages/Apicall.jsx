import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/apiSlice";

const Apicall = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.api);
  console.log(data);
  useEffect(() => {
    console.log('component mounted')
    dispatch(fetchData());
  }, [dispatch]);
//   console.log(data);
  return (
    <>
      <div>
    <h1>Data from API</h1>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    {data && data.length === 0 && <p>No data available</p>}
    <ul>
      {data && data.length > 0 ? (
        data.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))
      ) : (
        <p>No data to display</p>
      )}
    </ul>
  </div>
    </>
  );
};

export default Apicall;
