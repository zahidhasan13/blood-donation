import { useParams } from "react-router-dom";
import useDonorListContext from "../hooks/useDonorListContext";
import { useEffect } from "react";

const DonorDetails = () => {
  const { id } = useParams(); 
  const { donors, dispatch } = useDonorListContext(); 

  useEffect(() => {
      const getDonors = async () => {
        const response = await fetch("http://localhost:8400/api/bloodDonar");
        const data = await response.json();
        console.log(data);
  
        if (response.ok) {
          dispatch({ type: "GET_DONORS", payload: data });
        }
      };
      getDonors();
    }, [dispatch]);

  
  const donor = donors?.find((donor) => donor._id === id);

  if (!donor) {
    return (
      <div className="h-100vh">
        <div className="donor-not-found">
        <h2>Donor Not Found</h2>
        <p>The donor you are looking for does not exist.</p>
      </div>
      </div>
    );
  }

  return (
    <div className="h-100vh">
        <div className="donor-full-info-card">
      <div className="donor-header">
        <h2 className="donor-name">{donor.name}</h2>
        <span className="donor-blood-group">{donor.bloodGroup}</span>
      </div>
      <div className="donor-info">
        <div className="info-section">
          <h3>Personal Details</h3>
          <p>
            <strong>Age:</strong> {donor.age}
          </p>
          <p>
            <strong>Gender:</strong> {donor.gender}
          </p>
          <p>
            <strong>Email:</strong> {donor.email}
          </p>
        </div>
        <div className="info-section">
          <h3>Contact Information</h3>
          <p>
            <strong>Phone:</strong> {donor.mobile}
          </p>
          <p>
            <strong>Address:</strong> {donor.address}
          </p>
        </div>
      </div>
    </div>
    <div className="motivational-quote">
        <p>"Your blood donation can save a life. Be a hero, donate today!"</p>
      </div>
    </div>
  );
};

export default DonorDetails;