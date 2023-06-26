import React, { useState } from 'react';
import "./style.css";
import { validate } from './validate';
import { reg_email, reg_pass, check_pass,check_name } from './reg_exp_validation';







function Registration() {
  const [ showPass, changeShowPass ] = useState(false)
  return (
    <div className="container p-4 bg-gradient" >
          <div className="row m-auto w-75">
            <div className="col-md-12 ">
              <h3>Register Here</h3>
              <h2 >USER REGISTRATION</h2>
              <h6 className='mb-3'>Field mark <span>*</span> are required.</h6>
              <h6>Note : <span>Password must be one small latter, capital latter, special character and number</span> </h6>
                <form className='col-md-10 offset-2'>
                  {/* Email  */}
                    <div className='form-floating mb-3'>
                        <input type="email" id='email' placeholder='Enter Email' className='form-control w-75' onKeyUp={reg_email} />
                        <label htmlFor="email" >Enter Email <span> *</span></label>
                        <span id='msg1'></span>
                    </div>
                    {/* Password */}
                    <div className='form-floating input-group w-75 mb-3'>
                        <input type={showPass ? "text" : "password"} id='pass' placeholder='Enter Password' className='form-control w-50' onKeyUp={reg_pass} />
                        <button className='input-group-text btn btn-dark' type='button' onClick={() => changeShowPass
                        (!showPass)} >Show</button>
                        <label htmlFor="pass" >Enter Password <span> *</span></label>
                        <span id='msg2'></span>
                    </div>
                    {/* Confirm Password */}
                    <div className='form-floating input-group w-75 mb-3'>
                        <input type={showPass ? "text" : "password"} id='coPass' placeholder='Enter Confirm Password' className='form-control w-50' onBlur={check_pass} />
                        <button className='input-group-text btn btn-dark rounded-right' type='button' onClick={() => changeShowPass(!showPass)}>Show</button>
                        <label htmlFor="pass" >Enter Confirm Password <span> *</span></label>
                        <span id='msg3'></span>
                    </div>
                    {/* First Name */}
                    <div className='form-floating mb-3'>
                        <input type="text" id='fname' placeholder='Enter First Name' className='form-control w-75' onBlur={check_name} />
                        <label htmlFor="fname" >Enter First Name <span> *</span></label>
                        <span id='msg4'></span>
                    </div>
                    {/* Last Name */}
                    <div className='form-floating mb-3'>
                        <input type="text" id='lname' placeholder='Enter Last Name' className='form-control w-75' onBlur={check_name}/>
                        <label htmlFor="lname" >Enter Last Name <span> *</span></label>
                        <span id='msg5'></span>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type="text" id='mobile' placeholder='Enter Phone Number' className='form-control w-75' />
                        <label htmlFor="Mobile" >Enter Phone Number <span> *</span></label>
                        <span id='msg6'></span>
                    </div>
                    <div className='form-group mb-3'>
                        <textarea id='add' placeholder='Enter Address' rows="4" cols="10" className='form-control  w-75' />
                        <span id='msg7'></span>
                    </div>
                    <div className='form-floating mb-3'>
                        <input id='town' placeholder='Enter Town' className='form-control w-75' />
                        <label htmlFor="town" >Enter Town</label>
                        <span id='msg8'></span>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type="text" id='region' placeholder='Enter Region' className='form-control w-75' />
                        <label htmlFor="region" >Enter Region <span> *</span></label>
                        <span id='msg9'></span>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type="text" id='zip' placeholder='Enter Postcode/Zip' className='form-control w-75' />
                        <label htmlFor="zip" >Enter Postcode/Zip <span> *</span></label>
                        <span id='msg10'></span>
                    </div>
                    <div className='w-75 mb-3'>
                      <select type="text" className='form-control text-center' id='country' placeholder='Enter Country'>
                        <option value="-1">------Select Country-------</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="England">England</option>
                            <option value="France">France</option>
                            <option value="Dubai">Dubai</option>
                      </select>
                    <span id='msg11'></span>
                    </div>
                    <div className='text-center w-75 mt-4'>
                      <button type='reset' className='btn btn-warning'>Reset</button>
                      <button type='submit' onClick={validate} className='btn btn-dark ms-3'>Register</button>
                    </div>
                </form>             
            </div>
          </div>
    </div>

  )
}

export default Registration