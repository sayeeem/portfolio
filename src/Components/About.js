import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var bioTwo = data.biop2;
    var bioThree = data.biop3;
    var country = data.address.country;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="about__container">
        <div className="profile-pic__container">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Sayeem's Profile Pic"
          />
          <div className="columns download">
            <p>
              <a href={resumeDownload} className="button" target="_blank">
                <i className="fa fa-file-text-o"></i>View Resume
              </a>
            </p>
          </div>
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <p>{bioTwo}</p>
          <p>{bioThree}</p>
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>{name}</span>
              <br />
              <span>
                {city} {state}, {zip}
                <br />
                {country}
              </span>
              <br />
              <span>
                <a href="mailto:sayeemahmed1995@gmail.com">{email}</a>
              </span>
            </p>
          </div>
        </div>
        <div class="download" id="download__mobile">
          <p>
            <a
              class="button"
              target="_blank"
              href="https://gitconnected.com/sayeeem/resume"
            >
              <i class="fa fa-file-text-o"></i>View Resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
