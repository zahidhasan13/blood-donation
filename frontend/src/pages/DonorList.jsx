import React, { useEffect, useState } from "react";
import useDonorListContext from "../hooks/useDonorListContext";
import DonarCard from "../components/DonorCard";
import DonorFilterModal from "../components/DonorFilterModal";

const DonorList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { donors, dispatch } = useDonorListContext();

  useEffect(() => {
    const getDonors = async () => {
      const response = await fetch("http://localhost:8400/api/bloodDonar");
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "GET_DONORS", payload: data });
      }
    };
    getDonors();
  }, [dispatch]);


  return (
    <div className="donor-list-container">
      <h1 className="donor-list-title">Donor List</h1>
      <button onClick={()=>setIsModalOpen(!isModalOpen)} className="filter-button">Filter</button>
      <div className="donor-list">
        {donors?.map((donor) => (
          <DonarCard key={donor._id} donor={donor}/>
        ))}
      </div>
        <DonorFilterModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      
    </div>
  );
};

export default DonorList;
