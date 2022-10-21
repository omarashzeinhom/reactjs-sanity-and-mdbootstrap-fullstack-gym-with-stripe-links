import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { MemberShipCards } from "../../components/index";

const MemberShip = () => {
  return (
    <MDBContainer fluid>
    <h2 className="text-dark text-center">
        Member<span className="text-info"> Ship</span>
      </h2>
      <MemberShipCards />
    </MDBContainer>
  
  );
};

export default MemberShip;
