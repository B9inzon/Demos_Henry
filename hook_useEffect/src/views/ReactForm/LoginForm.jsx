import { useState } from "react";
import styles from "../ReactForm/LoginForm.module.css";
import validate from "../../helpers/validate";

export const Form = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "Username is required",
    password: "Password is required"

  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors (validate(userData));
  
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    alert(`Username: ${userData.username} Password: ${userData.password}`);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleOnSubmit}>
        <h2>LOGIN</h2>
        <br />

        <div>
          <label>Username:</label>
          <input
            type="text"
            value={userData.username}
            name="username"
            placeholder="example@email.com"
            onChange={handleInputChange}
          />
          <br />
          {errors.username && <span style={{color: "red"}}>{errors.username} </span>}
        </div>
        <br />
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={userData.password}
            name="password"
            placeholder="******"
            onChange={handleInputChange}
          />
          <br />
          {errors.password && <span style={{color: "red"}}>{errors.password} </span>}
        </div>
        <br />

        <button>SUBMIT</button>
      </form>
    </div>
  );
};
