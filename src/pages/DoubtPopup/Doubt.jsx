import { styled } from "@mui/material";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFile,
} from "mdb-react-ui-kit";
const Container = styled("div")(({ theme }) => ({
  margin: "50px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const Doubt = () => {
  return (
    <>
      <Container>
        <MDBContainer
          fluid
          className="d-flex justify-content-center align-items-center"
        >
          <MDBRow className="d-flex justify-content-center align-items-center">
            <MDBCol lg="8" className="my-1" style={{ width: "900px" }}>
              <h1 className="text-black mb-4 text-center">Upload Exams</h1>
              <form style={{ width: "900px" }}>
                <MDBCard>
                  <MDBCardBody className="px-4">
                    <MDBRow className="align-items-center pt-4 pb-3">
                      <MDBCol md="3" className="ps-5">
                        <h6 className="mb-0">Exam Name</h6>
                      </MDBCol>
                      <MDBCol md="9" className="pe-5">
                        <MDBInput
                          label="Blogger Name..."
                          size="lg"
                          id="examName"
                          name="examName"
                          type="text"
                        />
                      </MDBCol>
                    </MDBRow>
                    <hr className="mx-n3" />
                    <MDBRow className="align-items-center pt-4 pb-3">
                      <MDBCol md="3" className="ps-5">
                        <h6 className="mb-0">Upload</h6>
                      </MDBCol>
                      <MDBCol md="9" className="pe-5">
                        <MDBFile size="lg" id="image" name="image" />
                        <div className="small text-muted mt-2">
                          Upload your file or any other relevant file. Max file
                          size 50 MB
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <hr className="mx-n3" />
                    <MDBRow className="align-items-center pt-4 pb-3">
                      <MDBCol md="3" className="ps-5">
                        <h6 className="mb-0">Description</h6>
                      </MDBCol>

                      <MDBCol md="9" className="pe-5">
                        <MDBFile size="lg" id="image" name="image" />
                      </MDBCol>
                    </MDBRow>
                    <hr className="mx-n3" />
                    <MDBBtn className="my-4" size="lg" type="submit">
                      Submit
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Container>
    </>
  );
};

export default Doubt;
