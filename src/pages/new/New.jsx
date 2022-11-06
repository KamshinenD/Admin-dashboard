import React, { useState } from 'react';
import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';


const New = ({ inputs, title }) => {

  const [imageFile, setImageFile] = useState('')

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1> {title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={imageFile ? URL.createObjectURL(imageFile) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt="" />
          </div>
          <div className="right">
            <form autoComplete="off">
              <div className="formInput">
                <label htmlFor='file' className='fileUpload'>Upload Image: <DriveFolderUploadIcon className='icon' /></label>
                <input type="file" id='file' onChange={e => setImageFile(e.target.files[0])} style={{ display: 'none' }} />
              </div>

              {inputs.map((inputItem) => (
                <div className="formInput" key={inputItem.id}>
                  <label> {inputItem.label}</label>
                  <input type={inputItem.type} placeholder={inputItem.placeholder} />
                </div>
              ))}
              {/* <div className="formInput">
                <label> Full Name</label>
                <input type="text" placeholder='Kamshinen Dewan' />
              </div>
              <div className="formInput">
                <label> Email</label>
                <input type="email" placeholder='Kamshinen@email.com' />
              </div>
              <div className="formInput">
                <label> Phone Number</label>
                <input type="text" placeholder='08022546614' autoComplete='off' />
              </div>
              <div className="formInput">
                <label> Password</label>
                <input type="password" autoComplete='off' />
              </div>
              <div className="formInput">
                <label> Address</label>
                <input type="text" placeholder='24 Meta street, Lagos, Nigeria' />
              </div>
              <div className="formInput">
                <label> Country</label>
                <input type="text" placeholder='eg. Nigeria' />
              </div> */}
              <button> Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New