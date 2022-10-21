import React from "react";
import { ClassesCards } from "../../components/index";
import { MDBContainer } from "mdb-react-ui-kit";

const Classes = () => {
  return (
      <MDBContainer fluid>
      <h1 className="text-dark">
        Cla<span className="text-info">sses</span>
      </h1>
      <ClassesCards />
    </MDBContainer>
  );
};

export default Classes;
