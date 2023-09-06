import React from "react";
import "./footer.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper className="contentWrapper">
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>

        <div className="infoText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          quaerat magni aliquam et cupiditate quidem fugiat delectus enim,
          eveniet obcaecati consectetur, in doloribus ipsum ipsa voluptas quo
          ipsam odit! Voluptatem adipisci suscipit, ea ullam amet dicta eligendi
          cumque voluptate architecto beatae. Magni, voluptatibus ab facere
          molestias alias debitis porro labore eligendi, adipisci qui
          consequatur iste.
        </div>

        <div className="socialIcons">
          <span className="icon">
            <BsFacebook />
          </span>
          <span className="icon">
            <BsInstagram />
          </span>
          <span className="icon">
            <BsTwitter />
          </span>
          <span className="icon">
            <BsLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
