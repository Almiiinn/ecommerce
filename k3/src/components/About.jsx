import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              esse qui mollitia molestias modi distinctio cum rem aperiam iusto
              excepturi pariatur dolores sint blanditiis aspernatur expedita
              error aliquam, quasi alias in nam! Porro a sequi repudiandae
              provident animi officiis iste voluptas, debitis asperiores nihil
              magni ipsa ad blanditiis distinctio doloremque doloribus soluta
              voluptatum eos obcaecati id ea. Dolore vero obcaecati commodi
              aliquam sed voluptate hic assumenda officia eum saepe. Earum aut
              consequuntur ullam omnis debitis quasi, praesentium itaque ipsa
              labore obcaecati provident ea corporis possimus molestias quaerat
              consequatur iste velit delectus in dolor sed. Veniam praesentium
              unde quisquam eum. Consequatur.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex">
            <img
              src="/assets/images/about.png"
              alt="About Us"
              height="500px"
              width="800px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
