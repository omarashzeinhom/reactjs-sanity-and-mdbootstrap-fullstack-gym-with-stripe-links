import React, { useRef } from "react";
import { MDBBtn, MDBContainer, MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const formaction = useRef();

  const sendEmailInfo = async function (e) {
    e.preventDefault();
    //YOUR_SERVICE_ID 'YOUR_TEMPLATE_ID formaction.current YOUR_PUBLIC_KEY
    emailjs
      .sendForm(
        "service_ztohx4a",
        "template_a7rdrz5",
        formaction.current,
        "eBDZZXRhSJXYwkH1x"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            alert(
              result.text +
                "Your message was sent to OZGym We Will Reply in 24Hours"
            );
          } else {
            alert("Your message was not sent to OZGym Please Try Again");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <MDBContainer className="text-center  rounded-5 shadow-strong">
     
      <div
        className="p-2 text-center bg-image rounded-5 shadow-5-strong"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/du9aympvd/image/upload/v1663303530/code/js/gym%20fullstack%20company%20portfolio/ContactForm/undraw_contact_us_re_4qqt_1_eyyrd0.svg')",
         //FIX NO5
            height: "100%",
          minHeight: 200,
          maxHeight: 370,
          objectFit: "cover",
        }}
        loading="lazy"
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Send us your</h1>
              <h4 className="mb-3">Questions?</h4>
            </div>
          </div>
        </div>
      </div>

      <form
        className="py-5"
        action=""
        ref={formaction}
        onSubmit={sendEmailInfo}
        encType="e"
      >
        <label className="text-dark">Name</label>
        <MDBInput
          name="from_name"
          className="text"
          placeholder="Name"
          type="text"
          required
        />
        <label className="text-dark">Email</label>
        <MDBInput
          name="from_email"
          className="text"
          placeholder="Email"
          type="email"
          required
        />
        <label className="text-dark">Message</label>
        <MDBTextArea
          name="message"
          className="text"
          required
          style={{ resize: "none" }}
        ></MDBTextArea>
        <hr className="py-1" />
        <MDBBtn
          className="py-3"
          color="info"
          rounded
          type="submit"
          placeholder="Enter Inquiry Here"
        >
          Message us!
        </MDBBtn>
      </form>
    </MDBContainer>
  );
};

export default ContactForm;

/***
 * https://www.emailjs.com/docs/sdk/send/
 * https://mdbootstrap.com/docs/react/extended/jumbotron/
 * https://www.emailjs.com/docs/examples/reactjs/
 * https://www.emailjs.com/docs/examples/reactjs/
 */
