import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Contact from "./features/forms/Contact";
import {
  selectViewContact,
  showContact,
  hideContact,
} from "./features/forms/contactSlice";

export default function Mobile() {
  let contactViewSelector = useSelector(selectViewContact);
  let [viewContact, setViewContact] = useState(false);
  let [viewServices, setViewServices] = useState(false);
  let dispatch = useDispatch();
  useEffect(() => {
    if (contactViewSelector === true) {
      setViewContact(true);
      setViewServices(false);
    } else {
      setViewContact(false);
    }
  }, [contactViewSelector]);

  const TopBanner = () => {
    return (
      <div id="banner__content__left" className="banner__contents ">
        <div
          id="banner__left__title"
          className="animate__animated animate__backInLeft"
        >
          Mobile Pet Grooming
        </div>
        <div
          id="banner__left__subTitle"
          className="animate__animated animate__backInLeft"
        >
          We'll come to you
        </div>
        <br />
        <br />
        <div className="buttons__container">
          {
            <div>
              <button
                onClick={() => {
                  dispatch(showContact());
                }}
                data-micron="pop"
                className="button hvr-grow "
              >
                Contact
              </button>
            </div>
          }
          {
            <div>
              <button
                onClick={() => {
                  setViewServices(true);
                  dispatch(hideContact());
                }}
                data-micron="pop"
                className="button hvr-grow "
              >
                Services
              </button>
            </div>
          }
        </div>

        {viewContact ? (
          <div className="animate__animated animate__fadeIn">
            <Contact />
          </div>
        ) : null}

        {viewServices ? (
          <div className="animate__animated animate__fadeIn">
            <div>
              <div className="price__text">Grooming prices</div>
              <div className="price__text">Pet grooming within city: $25</div>
            </div>
            <div>
              <button
                className="button-secondary"
                onClick={() => {
                  setViewServices(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  const BottomBanner = () => {
    return (
      <div id="banner__content__right" className="banner__contents">
        <div
          id="banner__right__title"
          className="animate__animated animate__bounce"
        >
          You care for your furry baby.
        </div>
        <div
          id="banner__right__subTitle"
          className="animate__animated animate__bounce"
        >
          <em>Let them look as great as you make them feel on the inside!</em>
        </div>

        <p>
          Caring for our four legged friends is our top priority. We love our
          furry ones unconditionally and we show it in the care we provide.
        </p>
      </div>
    );
  };
  return (
    <div className="App">
      <div className="banner">
        <div className="banner__left">{TopBanner()}</div>
        <div className="banner__right">{BottomBanner()}</div>
      </div>
    </div>
  );
}
