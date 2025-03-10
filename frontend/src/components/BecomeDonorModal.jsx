import useDonorListContext from '../hooks/useDonorListContext'
import { useForm } from 'react-hook-form';
import {useNavigate} from "react-router-dom"

const BecomeDonorModal = ({setIsModalOpen}) => {
  const {dispatch} = useDonorListContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (donor) => {
    const res = await fetch("http://localhost:8400/api/bloodDonar",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donor)
    })
    const data = await res.json();

    if(!res.ok){
      alert(data.error);
    }
    if(res.ok){
      dispatch({typr: "POST_DONOR", payload: data})
      setIsModalOpen(false);
      reset();
      navigate("/donorList")
    }
  };

  return (
    <>
      <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Become a Donor</h2>
            <form className="donor-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    {...register('name', { required: 'Full name is required' })}
                  />
                  {errors.name && <span className="error">{errors.name.message}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="bloodGroup">Blood Group</label>
                  <select
                    id="bloodGroup"
                    {...register('bloodGroup', { required: 'Blood group is required' })}
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
                  {errors.bloodGroup && <span className="error">{errors.bloodGroup.message}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    id="age"
                    placeholder="Enter your age"
                    {...register('age', { required: 'Age is required' })}
                  />
                  {errors.age && <span className="error">{errors.age.message}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender" {...register('gender', { required: 'Gender is required' })}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <span className="error">{errors.gender.message}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Enter your address"
                    {...register('address', { required: 'Address is required' })}
                  />
                  {errors.address && <span className="error">{errors.address.message}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="tel"
                    id="mobile"
                    placeholder="Enter your mobile number"
                    {...register('mobile', {
                      required: 'Mobile number is required',
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: 'Invalid mobile number',
                      },
                    })}
                  />
                  {errors.mobile && <span className="error">{errors.mobile.message}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && <span className="error">{errors.email.message}</span>}
                </div>
              </div>
              <div className="form-buttons">
                <button type="submit" className="submit-button">Submit</button>
                <button type="button" className="reset-button" onClick={() => reset()}>Reset</button>
                <button type="button" className="close-button" onClick={() => setIsModalOpen(false)}>Close</button>
              </div>
            </form>
          </div>
        </div>
    </>
  );
};

export default BecomeDonorModal;
