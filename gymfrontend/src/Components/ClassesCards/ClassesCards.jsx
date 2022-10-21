import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBRipple,
  MDBCardTitle,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
  MDBCardLink,
  MDBCardSubTitle,
  MDBTooltip,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
import { client, urlFor } from "../../../src/client";
import { Link } from "react-router-dom";

const ClassesCards = () => {
  const [classescards, setClassesCards] = useState([]);

  //TODO ADD PRODUCT TO CART IN REACT REDUX WITH GLOBAL PROPS

  useEffect(() => {
    const query = '*[_type== "classes"]';
    client.fetch(query).then((data) => setClassesCards(data));
  }, []);

  return (
    <MDBContainer fluid className="text-center bg-info">
      <MDBRow>
        <h3 className="text-white">
          Classes<span className="text-warning">Available</span>
        </h3>

        {classescards.map((classcard, index) => (
          <MDBCol key={classcard + index} xs="12" sm="6" md="3" lg="3" xl="3">
            <MDBCardLink href={classcard?.slug} className="link-info">
              SLUG
            </MDBCardLink>

            <MDBCard
              className="shadow-5-strong bg-dark w-100 h-100"
              style={{ maxHeight: "50vh" }}
            >
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src={urlFor(classcard?.image)}
                  fluid
                  className="shadow-5-strong rounded w-100 h-100"
                  style={{ objectFit: "cover", maxHeight: "175rem" }}
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
                ></div>
                <MDBCardBody></MDBCardBody>
              </MDBRipple>
              <MDBCardFooter>
                <MDBCardTitle className="text-white rounded-5 py-2 px-1 shadow-5-strong">
                  <strong> {classcard?.title}</strong>{" "}
                </MDBCardTitle>
                <small className="text-info shadow-5-strong py-3 rounded-5">
                  Description
                </small>
                <MDBTooltip
                  tag="div"
                  wrapperProps={{ href: "#" }}
                  title={classcard?.description}
                >
                  {classcard?.description.slice(0, 15) + "..."}
                </MDBTooltip>
                <p className="text-white">
                  <em> </em>
                </p>

                <MDBCardSubTitle className="text-success shadow-5-strong rounded-5 bg-light">
                  {/**FIXED ERRORS 02*/}
                  <strong>{classcard?.price + "\n $"}</strong>
                </MDBCardSubTitle>
              </MDBCardFooter>
              <MDBBtnGroup>
                <MDBBtn
                  color="success"
                  className="py-4"
                  href={classcard?.stripelink}
                  target="_blank"
                >
                  Subscribe Now💳
                  <MDBIcon fas icon="shopping-cart" />
                </MDBBtn>
                <Link to="/Contact" className="btn btn-primary rounded py-4">
                  Conact US📱
                </Link>
              </MDBBtnGroup>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
      <small className="text-white text-xs ">
        <span className="text-dark">
          Note: Demo Credit Card 4242 4242 4242 4242
        </span>
        DATE: 04/24 - CVC:424
      </small>
    </MDBContainer>
  );
};

export default ClassesCards;
