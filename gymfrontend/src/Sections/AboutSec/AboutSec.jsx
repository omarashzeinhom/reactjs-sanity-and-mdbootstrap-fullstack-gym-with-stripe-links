import { MDBContainer } from "mdb-react-ui-kit";
import { AboutBrands, AboutCards, AboutMap } from "../../components/index";

const AboutSec = () => {
  return (
    <section id="about" className="section">
      <MDBContainer
        fluid
        className="bg-dark shadow-5-strong  text-center py-1 w-100 "
      >
        <h1 className="text-white">
          <strong>
            About<span className="text-info">Us</span>
          </strong>
        </h1>
        <AboutBrands />
        <AboutMap />
        <AboutCards />
      </MDBContainer>
    </section>
  );
};

export default AboutSec;

/**
 * REFERENCES
 * https://mdbootstrap.com/docs/react/navigation/tabs/
 * https://mdbootstrap.com/docs/react/layout/breakpoints/
 *
 */
