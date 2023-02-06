import {
  AppBar,
  Box,
  Container,
  Link,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

const style = {
  backgroundColor: "#F8F8F8",
  borderTop: "2px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "70px",
  width: "100%",
  fontSize: "20px",
};

export default function TOPFooter() {
  return (
    <div>
      {/* <div style={style}><b>Developed By ICEBIT © 2022</b></div> */}
      <Footer>
        <span>
          <b>
          Top India Elevator{" "}
          Pvt. Ltd.
            {" "}
            © 2022
          </b>
        </span>
      </Footer>
    </div>
  );
}

const footerStyle = {
  backgroundColor: "white",
  fontSize: "20px",
  color: "black",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  boxShadow: "5px 5px 5px 5px black"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "50px",
  width: "100%",
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}
