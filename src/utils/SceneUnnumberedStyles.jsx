import Background from "../images/backgrounds/vs-background.jpg";

export const containerStyle = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100vw",
  height: "100vh",
};

export const mainImageStyle = {
  position: "absolute",
  bottom: 0,
  width: "50%",
  left: 180,
};

export const speechBubbleStyle = {
  position: "absolute",
  width: "35%",
  top: 50,
  left: 50,
};

export const typed1Style = {
  position: "absolute",
  fontSize: 25,
  fontWeight: "bold",
  fontFamily: "SequentialistBB, cursive",
  top: 119,
  left: 155,
  transform: "rotate(-15deg)",
  whiteSpace: "pre",
  textAlign: "center",
};

export const monsterStyle = {
  position: "absolute",
  top: -80,
  right: -80,
  width: "38%",
};

export const speechBubble2Style = {
  position: "absolute",
  width: "35%",
  top: 0,
  right: 300,
};

export const typed2Style = {
  position: "absolute",
  fontSize: 25,
  fontWeight: "bold",
  fontFamily: "SequentialistBB, cursive",
  top: 80,
  right: 420,
  whiteSpace: "pre",
  textAlign: "center",
};

export const nextSceneButtonStyle = {
  maxWidth: 500,
  margin: "2rem 0",
  padding: "0.2rem 1.25rem",
  textAlign: "center",
  fontFamily: "Dekko, cursive",
  textTransform: "uppercase",
  color: "#000",
  fontSize: "2rem",
  letterSpacing: "0.2rem",
  background: `url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(25)" opacity="0.3" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'), #fff`,
  backgroundSize: "25px, 100%",
  border: "0.4rem solid #000",
  position: "absolute",
  display: "inline",
  bottom: 0,
  right: 0,
  cursor: "pointer",
  marginRight: 15,
  margin: 10,
  float: "left",
  width: 150,
};

export const backSceneButtonStyle = {
  maxWidth: 500,
  margin: "2rem 0",
  padding: "0.2rem 1.25rem",
  textAlign: "center",
  fontFamily: "Dekko, cursive",
  textTransform: "uppercase",
  color: "#000",
  fontSize: "2rem",
  letterSpacing: "0.2rem",
  background: `url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(25)" opacity="0.3" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'), #fff`,
  backgroundSize: "25px, 100%",
  border: "0.4rem solid #000",
  position: "absolute",
  display: "inline",
  bottom: 0,
  right: 180,
  cursor: "pointer",
  marginRight: 10,
  margin: 10,
  float: "left",
  width: 150,
};
