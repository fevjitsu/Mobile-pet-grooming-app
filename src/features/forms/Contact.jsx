import React, { useEffect, useState } from "react";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import { useDispatch } from "react-redux";
import Recaptcha from "react-recaptcha";
import {
  hideContact,
  setContactUserName,
  setContactEmail,
  setContactPhone,
  setContactAddress,
} from "./contactSlice";
import styles from "./Contact.module.css";
export default function Contact() {
  const recaptchaKey = process.env.REACT_APP_RECAPTCHA;
  let [message, setMessage] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");
  let [approved, setApproved] = useState(false);
  let dispatch = useDispatch();

  const handleReset = () => {
    setEmail("");
    setPhone("");
    setName("");
    setMessage("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setContactEmail(email));
    dispatch(setContactPhone(phone));
    dispatch(setContactUserName(name));
    dispatch(setContactAddress(address));
    dispatch(hideContact());
  };

  useEffect(() => {
    if (isEmail(email) && isMobilePhone(phone)) {
      setApproved(true);
    } else {
      setApproved(false);
    }
  }, [email, phone]);
  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="center"
              type="text"
              placeholder={"Name"}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            {isEmail(email) ? (
              <input
                type="email"
                placeholder={"Email contact"}
                className={`center`}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            ) : (
              <input
                type="email"
                placeholder={"Email"}
                value={email}
                className={`${styles.warning} ${styles.input} center`}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            )}

            {isMobilePhone(phone) ? (
              <input
                type="text"
                placeholder={"Phone contact"}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className={` center`}
              />
            ) : (
              <input
                type="text"
                placeholder={"Phone"}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className={`center`}
              />
            )}

            <input
              type="text"
              placeholder={"Address"}
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className={` center`}
            />

            <div>
              <textarea
                type="textarea"
                className="center"
                rows="5"
                placeholder={"Message"}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>

            <Recaptcha sitekey={recaptchaKey} />

            <div className="center">
              <div>
                {approved ? (
                  <button
                    data-micron="pop"
                    className="button hvr-grow"
                    onClick={handleSubmit}
                  >
                    Send
                  </button>
                ) : (
                  <button className="button" onClick={handleSubmit} disabled>
                    Send
                  </button>
                )}

                <button
                  data-micron="pop"
                  className="button-secondary hvr-grow"
                  onClick={() => {
                    dispatch(hideContact());
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
