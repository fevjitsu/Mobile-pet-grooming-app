import React, { Component } from "react";
import "./App.css";
import PageContent from "./features/pageContent/PageContent";
export default class App extends Component {
  state = {
    home: true,
    contact: false,
    about: false,
    services: false,
    pages: [
      {
        title: "Home",
        subTitle: "Voluptate commodo enim ipsum aliquip elit excepteur aute.",
        paragraphs: [
          "Amet labore irure consectetur quis labore pariatur qui amet proident pariatur minim eiusmod. Ea amet excepteur pariatur Lorem in et ut ex incididunt anim quis amet est id. Qui consequat mollit enim quis quis laboris fugiat ullamco. Reprehenderit tempor do adipisicing ex dolore tempor deserunt pariatur ut consequat fugiat nisi.",
          "Sit esse qui minim aliqua ipsum irure et proident fugiat fugiat. Consectetur aute do mollit non nulla. Irure tempor consequat commodo tempor excepteur est laboris. Et sunt tempor laboris ad nisi eu ea excepteur quis dolore. Lorem id culpa laborum tempor laboris cillum enim velit eu fugiat exercitation mollit commodo consequat. Ea enim do fugiat cillum nulla commodo. Quis ipsum officia nulla officia excepteur esse eu anim cillum nostrud nostrud irure irure.",
        ],
        // image: {
        //   src:
        //     "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fcat1.png?alt=media&token=475eaae5-13b2-44f0-9562-c4e5de90b79b",
        //   alt: "cat photo",
        // },
        buttons: [
          {
            buttonName: "button one",
            handleClick: function () {
              alert("Handle click 1");
            },
          },
          {
            buttonName: "button two",
            handleClick: function () {
              alert("Handle click 2");
            },
          },
          {
            buttonName: "button three",
            handleClick: function () {
              alert("Handle click 3");
            },
          },
        ],
      },
      {
        title: "Services",
        subTitle: "Commodo fugiat magna irure duis ea.",
        paragraphs: [
          "Amet labore irure consectetur quis labore pariatur qui amet proident pariatur minim eiusmod. Ea amet excepteur pariatur Lorem in et ut ex incididunt anim quis amet est id. Qui consequat mollit enim quis quis laboris fugiat ullamco. Reprehenderit tempor do adipisicing ex dolore tempor deserunt pariatur ut consequat fugiat nisi.",
          "Sit esse qui minim aliqua ipsum irure et proident fugiat fugiat. Consectetur aute do mollit non nulla. Irure tempor consequat commodo tempor excepteur est laboris. Et sunt tempor laboris ad nisi eu ea excepteur quis dolore. Lorem id culpa laborum tempor laboris cillum enim velit eu fugiat exercitation mollit commodo consequat. Ea enim do fugiat cillum nulla commodo. Quis ipsum officia nulla officia excepteur esse eu anim cillum nostrud nostrud irure irure.",
        ],
        // image: {
        //   src:
        //     "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fcat1.png?alt=media&token=475eaae5-13b2-44f0-9562-c4e5de90b79b",
        //   alt: "cat photo",
        // },
        // buttons: [
        //   {
        //     buttonName: "Click me",
        //     handleClick: function () {
        //       alert("Handle click");
        //     },
        //   },
        // ],
      },
      {
        title: "Lets connect",
        subTitle:
          "Laborum proident officia labore duis ullamco incididunt est do occaecat consequat exercitation ullamco minim quis.",
        paragraphs: [
          "Amet labore irure consectetur quis labore pariatur qui amet proident pariatur minim eiusmod. Ea amet excepteur pariatur Lorem in et ut ex incididunt anim quis amet est id. Qui consequat mollit enim quis quis laboris fugiat ullamco. Reprehenderit tempor do adipisicing ex dolore tempor deserunt pariatur ut consequat fugiat nisi.",
          "Sit esse qui minim aliqua ipsum irure et proident fugiat fugiat. Consectetur aute do mollit non nulla. Irure tempor consequat commodo tempor excepteur est laboris. Et sunt tempor laboris ad nisi eu ea excepteur quis dolore. Lorem id culpa laborum tempor laboris cillum enim velit eu fugiat exercitation mollit commodo consequat. Ea enim do fugiat cillum nulla commodo. Quis ipsum officia nulla officia excepteur esse eu anim cillum nostrud nostrud irure irure.",
        ],
        // image: {
        //   src:
        //     "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fcat1.png?alt=media&token=475eaae5-13b2-44f0-9562-c4e5de90b79b",
        //   alt: "cat photo",
        // },
        // buttons: [
        //   {
        //     buttonName: "Click me",
        //     handleClick: function () {
        //       alert("Handle click");
        //     },
        //   },
        // ],
      },
      {
        title: "About us",
        subTitle: "Id anim tempor tempor irure voluptate.",
        paragraphs: [
          "Amet labore irure consectetur quis labore pariatur qui amet proident pariatur minim eiusmod. Ea amet excepteur pariatur Lorem in et ut ex incididunt anim quis amet est id. Qui consequat mollit enim quis quis laboris fugiat ullamco. Reprehenderit tempor do adipisicing ex dolore tempor deserunt pariatur ut consequat fugiat nisi.",
          "Sit esse qui minim aliqua ipsum irure et proident fugiat fugiat. Consectetur aute do mollit non nulla. Irure tempor consequat commodo tempor excepteur est laboris. Et sunt tempor laboris ad nisi eu ea excepteur quis dolore. Lorem id culpa laborum tempor laboris cillum enim velit eu fugiat exercitation mollit commodo consequat. Ea enim do fugiat cillum nulla commodo. Quis ipsum officia nulla officia excepteur esse eu anim cillum nostrud nostrud irure irure.",
        ],
        // image: {
        //   src:
        //     "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fcat1.png?alt=media&token=475eaae5-13b2-44f0-9562-c4e5de90b79b",
        //   alt: "cat photo",
        // },
        // buttons: [
        //   {
        //     buttonName: "Click me",
        //     handleClick: function () {
        //       alert("Handle click");
        //     },
        //   },
        // ],
      },
    ],
  };

  renderHome = () => {
    this.setState({ home: true });
    this.setState({ contact: false });
    this.setState({ services: false });
    this.setState({ about: false });
  };
  renderServices = () => {
    this.setState({ home: false });
    this.setState({ contact: false });
    this.setState({ services: true });
    this.setState({ about: false });
  };
  renderContact = () => {
    this.setState({ home: false });
    this.setState({ contact: true });
    this.setState({ services: false });
    this.setState({ about: false });
  };
  renderAbout = () => {
    this.setState({ home: false });
    this.setState({ contact: false });
    this.setState({ services: false });
    this.setState({ about: true });
  };
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li id="nav__ul__li__home" onClick={this.renderHome}>
              Home
            </li>
            <li id="nav__ul__li__services" onClick={this.renderServices}>
              Services
            </li>
            <li id="nav__ul__li__contact" onClick={this.renderContact}>
              Contact
            </li>
            <li id="nav__ul__li__about" onClick={this.renderAbout}>
              About
            </li>
          </ul>
        </nav>

        <div className="container">
          {this.state.home && <PageContent {...this.state.pages[0]} />}
          {this.state.services && <PageContent {...this.state.pages[1]} />}
          {this.state.contact && <PageContent {...this.state.pages[2]} />}
          {this.state.about && <PageContent {...this.state.pages[3]} />}
        </div>
      </div>
    );
  }
}
