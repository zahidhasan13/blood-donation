import { Link } from "react-router-dom";


const DonarCard = ({ donor }) => {
  return (
    <div className="donor-card">
      <div className="donor-header">
        <h2 className="donor-name">{donor.name}</h2>
        <span className="donor-blood-group">{donor.bloodGroup}</span>
      </div>
      <div className="donor-info">
        <p>
          <strong>Age:</strong> {donor.age}
        </p>
        <p>
          <strong>Gender:</strong> {donor.gender}
        </p>
        <p>
          <strong>Address:</strong> {donor.address}
        </p>
      </div>
      <Link to={`/donorDetails/${donor._id}`}>
      <button className="contact-button">Contact Donor</button>
      </Link>
    </div>
  );
};

export default DonarCard;