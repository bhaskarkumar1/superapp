import React, { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    // phone: "",
    mobile: "",
  });

  const [isChecked, setChecked] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    // console.log(name,value)s
    setData({
      ...data,
      [name]: value,
    });
  };
  const [error, setError] = useState({
    nameErr: "",
    usernameErr: "",
    emailErr: "",
    mobileErr: "",
    checkError:""
    // checkError:false 
  });

  const handleError=()=>{
    // name errror 
    if (data.name === "") {
      setError((error)=>({ ...error, nameErr: "Field is required" }));
    } else {
      const pattern = /^[a-zA-Z]+[^.0-9@#%&]+[a-zA-Z]$/i;
      if (pattern.test(data.name) === false) {
        setError((error)=>({ ...error, nameErr: "Name is invalid" }));
      }else {
        setError((error) => ({ ...error, nameErr: "" }));
      }

    }

    //username error

    if (data.username===""){
      setError((error)=>({ ...error, usernameErr: "Field is required" }));
    }else{
      const pattern=/[a-zA-z]+[0-9]*[^#%&*()!+]{4,18}/
      if(pattern.test(data.username)===false){
        setError((error)=>({...error,usernameErr:"User Name invalid "}))
      }
      else {
        setError((error) => ({ ...error, usernameErr: "" }));
      }
    }

//email validation
// console.log(data)
    if(data.email===""){
      setError((error)=>({...error, emailErr:"Field is required"}))
    }else{
      const pattern1=/^[a-zA-Z]+[0-9]*[.]?[a-zA-Z0-9]+[@][a-zA-Z]{2,}[.][a-zA-Z]{2,}$/i
      if(pattern1.test(data.email)===false){
        setError((error)=>({...error,emailErr:"Email is Invalid"}))
      }else{
        setError((error)=>({...error,emailErr:""}))
      }
    }
// mobile number
if(data.mobile===""){
  setError((error)=>({...error,mobileErr:"Field is empty"}))
}else{
  const pattern=/^[6-9][0-9]{9}/
  if(pattern.test(data.mobile)===false){
    setError((error)=>({...error,mobileErr:"I am sorry! But only india's number is allowed!"}))

  }else{
    setError((error)=>({...error,mobileErr:""}))
  }
}

// the share my data validation
// console.log(isChecked)
if(isChecked===false){
  setError((error)=>({...error,checkError:
  "You have to accept as it is unavoidable!"}))
}else{
  setError((error)=>({...error,checkError:
    "Really! You accepted it! I can't believe it! "}))
}

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data)
    handleError()

    localStorage.setItem("register", JSON.stringify(data));
      navigate("/genre");



  };
  // console.log(isChecked)
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.left}>
          <div className={styles.image}></div>
          <div className={styles.banner}>
            <h1>
              Discover new Things on <br /> Superapp
            </h1>
          </div>
        </div>

        {/* right-part */}

        <div className={styles.right}>
          <form onSubmit={handleSubmit}>
            <div className={styles.form}>
              <h1 className={styles.green}>Super app</h1>
              <p className={styles.createtext}>create your new account</p>
              <input
                className={styles.input}
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={data.name}
                
              />
              {/* <br /> */}
              <span className={styles.error}>{error.nameErr}</span>
              <input
                className={styles.input}
                type="text"
                placeholder="User Name"
                name="username"
                onChange={handleChange}
                value={data.username}
              />
              {/* <br /> */}
              <span className={styles.error}>{error.usernameErr}</span>
              <input
                className={styles.input}
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
              />
              {/* <br /> */}
              <span className={styles.error}>{error.emailErr}</span>
              <input
                className={styles.input}
                type="text"
                placeholder="Mobile"
                name="mobile"
                onChange={handleChange}
                value={data.mobile}
              />
              {/* <br /> */}
              <span className={styles.error}>{error.mobileErr}</span>
              <p>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  name="checkbox"
                  onChange={() => setChecked(!isChecked)}
                />
                &nbsp; share my registration data with superapp
              </p>
              <span className={styles.error} >{error.checkError}</span>
              <button type="submit" className={styles.signup}>
                SIGN UP
              </button>
              <br />
              <p>
                By clicking on Sign up. you agree to Superapp{" "}
                <span className={styles.green}>
                  Terms and Conditions of Use
                </span>
              </p>

              <p>
                To learn more about how Superapp collects, uses, shares and
                protects your personal data please head Superapp{" "}
                <span className={styles.green}>Privacy Policy</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
