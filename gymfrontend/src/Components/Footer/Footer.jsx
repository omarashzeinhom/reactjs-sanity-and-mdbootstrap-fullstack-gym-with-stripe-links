import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="dark"
      className="text-center text-lg-start text-muted py-5"
    >
      <MDBContainer className="text-center text-md-start mt-5">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <MDBIcon icon="dumbbell" className="me-3 text-info" />
              OZ GYM 💪
            </h6>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4 text-info">
              MemberShip Cards
            </h6>
            {memberships.map((membership, index) => (
              <p key={membership + index}>
                <a
                  href={membership?.stripelink}
                  className="text-reset"
                  target="_blank"
                  alt="test"
                  rel="noreferrer"
                >
                  {membership?.title}
                </a>
              </p>
            ))}
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
            <h6 className="text-uppercase text-info fw-bold mb-4">
              Useful links
            </h6>
            {pages.map((page, index) => (
              <p key={page + index}>
                <Link to={page?.link} className="text-reset">
                  {page?.title}
                </Link>
              </p>
            ))}
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              New York, NY 10012, US
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              info@example.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
            </p>
            <p>
              <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        @2022-2023 OmarZeinhom
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          OZGym.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;

const memberships = [
  {
    title: "Annual",
    stripelink: "https://buy.stripe.com/test_aEUaGO7oUden3BK3cg",
  },
  {
    title: "Basic",
    stripelink: "https://buy.stripe.com/test_cN28yGbFa4HR1tC9AB",
  },
  {
    title: "Mix",
    stripelink: "https://buy.stripe.com/test_7sI2ai8sY4HR7S03cf",
  },
  {
    title: "Classes",
    stripelink: "https://buy.stripe.com/test_cN2cOWeRm4HRc8gdQS",
  },
];

const pages = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "MemberShip",
    link: "/memberShip",
  },
  {
    title: "Classes",
    link: "/classes",
  },
];
