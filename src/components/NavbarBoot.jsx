import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT
import Logo from "../assets/3-removebg-preview.png";
import { Navbar, Nav, NavLink } from "react-bootstrap";

function NavbarBoot() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext); // <== ADD

  //  Update the rendering logic to display different content
  //  depending on the user being logged in or not
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Logo" height="30px" />{" "}
          </Navbar.Brand>

          <NavLink eventKey="4" as={Link} to="/signup">
            Signup
          </NavLink>
          <NavLink eventKey="5" as={Link} to="/login">
            Login
          </NavLink>
          <NavLink eventKey="2" as={Link} to="/products-list">
            Items
          </NavLink>

          {isLoggedIn && (
            <>
              {user && user.role === "admin" && (
                <>
                  <NavLink eventKey="6" as={Link} to="/create-product">
                    Create a product
                  </NavLink>
                  <NavLink eventKey="3" as={Link} to="/cart">
                    Cart
                  </NavLink>

                  <NavLink eventKey="7" as={Link} to="/" onClick={logoutUser}>
                    Logout
                  </NavLink>
                </>
              )}
            </>
          )}

          {isLoggedIn && (
            <>
              {user && user.role === "user" && (
                <>
                  <NavLink eventKey="3" as={Link} to="/cart">
                    Cart
                  </NavLink>

                  <NavLink eventKey="7" as={Link} to="/" onClick={logoutUser}>
                    Logout
                  </NavLink>
                </>
              )}
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarBoot;

/*  <> 
  {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Cuccu bambini
        </Navbar.Brand>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {isLoggedIn && (
                <>
                  <Nav.Link as={Link} to="/products-list">
                    All items
                  </Nav.Link>

                  {user && user.role === "admin" && (
                    <Nav.Link as={Link} to="/create-product">
                      {" "}
                      Create products{" "}
                    </Nav.Link>
                  )}

                  <Nav.Link as={Link} to="/" onClick={logoutUser}>
                    Logout
                  </Nav.Link>
                  <span>{user && user.name}</span>
                </>
              )}

              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))};
  </> 
 export default NavbarBoot;
 */

/*
 {isLoggedIn && (
  <>
    <Nav.Link as={Link} to="/products-list">
      All the products
    </Nav.Link>
    {user && user.role === "admin" && (
      <Nav.Link as={Link} to="/create-product">
        {" "}
        Create products{" "}
      </Nav.Link>
    )}
    <Nav.Link as={Link} to="/" onClick={logoutUser}>
      Logout
    </Nav.Link>
    <span>{user && user.name}</span>
  </>
)}

{!isLoggedIn && (
  <>
    { <Nav.Link as={Link} to="/category/clothings">
      {" "}
      Clothings{" "}
    </Nav.Link>
    <Nav.Link as={Link} to="/category/footwear">
      {" "}
      Footwear{" "}
    </Nav.Link>
    <Nav.Link as={Link} to="/category/baby-gear">
      {" "}
      Baby gear{" "}
    </Nav.Link> 
    <Nav.Link as={Link} to="/signup">
      {" "}
      Sign Up
    </Nav.Link>
    <Nav.Link as={Link} to="/login">
      {" "}
      Login{" "}
    </Nav.Link>
  </>
)}
</Container>
</Navbar>
);
}
*/
