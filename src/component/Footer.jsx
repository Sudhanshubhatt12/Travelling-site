import React from "react";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Amazing<span>Travellors</span>
          </h3>

          <p class="footer-links">
            <a href="#" class="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">About</a>

            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name">Amazing Travellors © 2022</p>
        </div>

        <div class="footer-center">
          <div>
            <i>
              <FaMapMarkerAlt />
            </i>
            <p>
              <span>Lane-1, Vishnupuram</span> Mothrowala, Dehradun
              (UTTARAKHAND)
            </p>
          </div>

          <div>
            <i class="fa fa-phone">
              <FaPhoneAlt />
            </i>
            <p>+91 7895010463</p>
          </div>

          <div>
            <i class="fa fa-envelope">
              <FaEnvelope />
            </i>
            <p>
              <a href="mailto:sudhanshubhatt161@gmail.com">
                sudhanshubhatt161@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            We, at ‘Amazing Travellors’, swear by this and put stock in
            satisfying travel dreams that make you perpetually rich constantly.
          </p>

          <div class="footer-icons">
            <a href="http://www.facebook.com/profile.php?id=100072418380485">
              {<FaFacebook />}
            </a>

            <a href="https://www.instagram.com/sudhanshu_bhatt12/">
              {<FaInstagram />}
            </a>

            <a href="https://mailto:sudhanshubhatt161@gmail.com">
              {<FaGoogle />}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
