import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Contact from "./features/forms/Contact";
import {
  selectViewContact,
  showContact,
  hideContact,
} from "./features/forms/contactSlice";
function App() {
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
  const LeftBanner = () => {
    return (
      <div id="banner__content__left" className="banner__contents">
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
          We'll come to you!
        </div>
        <div className="buttons__container">
          {viewContact ? null : (
            <div>
              <button
                onClick={() => {
                  dispatch(showContact());
                  setViewServices(false);
                }}
                data-micron="pop"
                className="button hvr-grow "
              >
                Contact
              </button>
            </div>
          )}

          {viewServices ? null : (
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
          )}
        </div>
        {viewContact || viewServices ? null : (
          <div className="banner_image">
            <img
              onClick={() => {
                setViewServices(true);
                dispatch(hideContact());
              }}
              data-micron="pop"
              className="cat__image center  hvr-grow"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fcat2.png?alt=media&token=542f9fca-44a0-475f-a0a5-3ed940269f8d"
              alt="cat"
            />
          </div>
        )}

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

  const RightBanner = () => {
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
          <strong>
            <em>Let them look as great as you make them feel on the inside!</em>
          </strong>
        </div>

        <p>
          <hr />
          Caring for our four legged friends is our top priority. We love our
          furry ones unconditionally and we show it in the care we provide.
        </p>
        <div className="banner__content__right__image__container">
          <div>
            <div className="animate__animated animate__wobble animate__animated delay">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fbrush.png?alt=media&token=68b16408-ca58-4169-8bd8-dd9ba4ed04eb"
                alt="hair brush"
              />
            </div>
          </div>
          <div>
            <div>
              <img
                className="animate__animated paw-1 animate__animated animate__fadeIn animate__animated animate__fadeOut animate__animated paws "
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2FFrame%208paw.png?alt=media&token=0499df0b-dc54-44f1-8165-bbd0df151edc"
                alt="animal
                paw"
              />
              <img
                className="animate__animated paw-2 animate__animated animate__fadeIn animate__animated animate__fadeOut animate__animated paws "
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2FFrame%208paw.png?alt=media&token=0499df0b-dc54-44f1-8165-bbd0df151edc"
                alt="animal
                paw"
              />
            </div>
            <div>
              <img
                className="animate__animated paw-3 animate__animated animate__fadeIn animate__animated animate__fadeOut animate__animated paws "
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2FFrame%208paw.png?alt=media&token=0499df0b-dc54-44f1-8165-bbd0df151edc"
                alt="animal
                paw"
              />
              <img
                className="animate__animated paw-4 animate__animated animate__fadeIn animate__animated animate__fadeOut animate__animated paws "
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2FFrame%208paw.png?alt=media&token=0499df0b-dc54-44f1-8165-bbd0df151edc"
                alt="animal
                paw"
              />
            </div>
            <div>
              <img
                className="animate__animated paw-5 animate__animated animate__fadeIn animate__animated animate__fadeOut animate__animated paws "
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2FFrame%208paw.png?alt=media&token=0499df0b-dc54-44f1-8165-bbd0df151edc"
                alt="animal
                paw"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  const CenterBanner = () => {
    return (
      <div id="center__banner">
        <div className="banner_image ">
          <img
            onClick={() => {
              setViewServices(true);
              dispatch(hideContact());
            }}
            data-micron="pop"
            className="cat__image center hvr-grow"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fcat1.png?alt=media&token=475eaae5-13b2-44f0-9562-c4e5de90b79b"
            alt="cat"
          />
        </div>
        {/* <div className="banner_image">
          <img
            onClick={() => {
              setViewServices(true);
              dispatch(hideContact());
            }}
            data-micron="pop"
            className="cat__image center hvr-grow"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fcat2.png?alt=media&token=542f9fca-44a0-475f-a0a5-3ed940269f8d"
            alt="cat"
          />
        </div> */}
      </div>
    );
  };
  return (
    <div className="App">
      <div className="banner">
        <div className="banner__left">{LeftBanner()}</div>
        <div className="banner__center">{CenterBanner()}</div>
        <div className="banner__right">{RightBanner()}</div>
      </div>
    </div>
  );
}

export default App;
