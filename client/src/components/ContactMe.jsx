import React, { useState } from "react";

export default function ContactMe() {
  const [firstName, setfirstName] = useState("Hariharan");
  const [lastName, setlastName] = useState("govindaraju");
  const [place, setplace] = useState("India");
  const [profession, setprofession] = useState("Full Stack Developer");
  const [company, setcompany] = useState("self Empolyee");
  const [message, setmessage] = useState(
    " Contact page which looks like a Hand written Letter. You can go ahead and change the contents in the Text boxes to change the content in the Letter."
  );
  const [email, setemail] = useState("harigovindaraju008@gmail.com");

  return (
    <div className="contact" id="contact">
      <div className="contact--heading">
        <span>Contact Me</span>
      </div>

      <div className="contact--container">
        {/* <div className="contact--letter"> */}
        <div className="paper">
          <div className="lines">
            <div className="Lettertext" spellCheck="false">
              Hello Curious Cat, <br />
              <br />
              This is {firstName + " " + lastName}. I am from {place}.
              <br />
              <br />I am a {profession}, working as a {company}.
              <br />
              <br />
              {message}
              <br />
              <br />
              Like my Work? Share your Love, gimme a heart &#9829;&#9829;&#9829;{" "}
              <br />
              You can reach me back on {email}.
              <br />
              <br />
              Thanks and Regards,<p>{firstName + " " + lastName}</p>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className="contact--form">
          <div className="contact--form--primary">
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                required
                onChange={({ target }) => setfirstName(target.value)}
                placeholder={firstName}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                required
                onChange={({ target }) => setlastName(target.value)}
                placeholder={lastName}
              />
            </div>
            <div>
              <label htmlFor="email">Email ID:</label>
              <input
                type="email"
                id="email"
                required
                onChange={({ target }) => setemail(target.value)}
                placeholder={email}
              />
            </div>
            <div>
              <label htmlFor="place">Country:</label>
              <input
                type="text"
                id="place"
                required
                onChange={({ target }) => setplace(target.value)}
                placeholder={place}
              />
            </div>
            <div>
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                placeholder={company}
                id="company"
                required
                onChange={({ target }) => setcompany(target.value)}
              />
            </div>
            <div>
              <label htmlFor="profession">Profession:</label>
              <input
                type="text"
                placeholder={profession}
                id="profession"
                required
                onChange={({ target }) => setprofession(target.value)}
              />
            </div>
          </div>

          <div className="contact--form--second">
            <div>
              <div className="message">
                <label htmlFor="message">Message:</label>
                <textarea
                  rows="5"
                  id="message"
                  placeholder={message}
                  onChange={({ target }) => setmessage(target.value)}
                ></textarea>
              </div>
              <div>
                <button type="button" className="">
                  Send Response
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
