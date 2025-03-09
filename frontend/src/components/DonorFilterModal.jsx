import React, { useState } from 'react';

const DonorFilterModal = ({ onFilter, isModalOpen, setIsModalOpen}) => {
  const [filters, setFilters] = useState({
    bloodGroup: '',
    location: '',
    availability: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters); // Pass filters to the parent component
    setIsModalOpen(false); // Close the modal after applying filters
  };

  const handleReset = () => {
    setFilters({
      bloodGroup: '',
      location: '',
      availability: '',
    });
    onFilter({}); // Reset filters in the parent component
    setIsModalOpen(false); // Close the modal after resetting filters
  };

  return (
    <>
      
      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Filter Donors</h2>
            <form className="filter-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="bloodGroup">Blood Group</label>
                <select
                  id="bloodGroup"
                  name="bloodGroup"
                  value={filters.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Enter location"
                  value={filters.location}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="availability">Availability</label>
                <select
                  id="availability"
                  name="availability"
                  value={filters.availability}
                  onChange={handleChange}
                >
                  <option value="">Select Availability</option>
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>
              </div>
              <div className="modal-buttons">
                <button type="submit" className="modal-button apply">
                  Apply Filters
                </button>
                <button type="button" className="modal-button reset" onClick={handleReset}>
                  Reset Filters
                </button>
                <button
                  type="button"
                  className="modal-button close"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DonorFilterModal;