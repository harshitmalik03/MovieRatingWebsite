import { useAuth0 } from '@auth0/auth0-react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react'
import cover from ".//../LoginLogout/logo-no-background.png";


const Profile = (props) => {
  const {user, isLoading, isAuthenticated} = useAuth0();
    const goBack = () => {
        console.log("heading back");        
        window.location.replace("/login");
    }

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
        console.log("go back");
        goBack();
    }
  }, [isLoading, isAuthenticated]);


  console.log(user);
  return (
    <>
    {isAuthenticated
      ?
     (
        <div className="gradient-custom-2" style={{ backgroundColor: 'black'}}>
      <MDBContainer className="py-10 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: 'orange', height: '200px', backgroundImage: {cover} }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src={user.picture}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{user.name}</MDBTypography>
                  <MDBCardText>{user.address == null ? "Address Not Shared" : user.address}</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">{props.commentCount}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Movies Reviewed</MDBCardText>
                  </div>
                  {/* <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                  </div> */}
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Contact Email: {user.email}</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Username: {user.nickname}</MDBCardText>
                    <MDBCardText className="font-italic mb-0">Locale: {user.locale}</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
     )
      :
      <div>

      </div>
    }
    </>
  )
}

export default Profile