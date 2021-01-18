import Background from "../images//backgrounds/scene2-background.jpg";

export const containerStyle = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100vw",
  height: "100vh",
  display: "block",
};

export const mainImageStyle = {
  position: "absolute",
  opacity: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  maxWidth: "100vw",
  maxHeight: "100vh",
  margin: "0 auto",
};

export const speechBubbleStyle = {
  zIndex: 1,
  position: "absolute",
  width: "40%",
  top: 50,
  right: 0,
  WebkitTransform: "scaleX(-1)",
};

export const typedStyle = {
  zIndex: 100,
  position: "absolute",
  fontSize: 24,
  fontWeight: "bold",
  fontFamily: "SequentialistBB, cursive",
  top: 120,
  right: 150,
  whiteSpace: "pre",
  textAlign: "center",
  margin: 0,
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
