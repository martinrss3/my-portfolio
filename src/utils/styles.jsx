import Background from "../img/main-bg.jpg";
import Background2 from "../img/background-scene-two.jpg";
import Background3 from "../img/4789237.jpg";

// Main Scene Styles

export const containerStyle1 = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100vw",
  height: "100vh",
  display: "block",
};

export const mainImageStyle1 = {
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

export const speechBubbleStyle1 = {
  zIndex: 1,
  position: "absolute",
  width: "40%",
  top: 50,
  right: 0,
  WebkitTransform: "scaleX(-1)",
};

export const typedStyle1 = {
  zIndex: 100,
  position: "absolute",
  fontSize: 24,
  fontWeight: "bold",
  top: 120,
  right: 120,
  fontFamily: "SequentialistBB, cursive",
  whiteSpace: "pre",
  textAlign: "center",
};

export const nextSceneButtonStyle1 = {
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
  display: "inlineFlex",
  bottom: 0,
  right: 0,
  cursor: "pointer",
  marginRight: 15,
  opacity: 0,
};

// Scene Two Styles

export const containerStyle2 = {
  backgroundImage: `url(${Background2})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100vw",
  height: "100vh",
  display: "block",
};

export const mainImageStyle2 = {
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

export const speechBubbleStyle2 = {
  zIndex: 1,
  position: "absolute",
  width: "40%",
  top: 50,
  right: 0,
  WebkitTransform: "scaleX(-1)",
};

export const typedStyle2 = {
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

export const nextSceneButtonStyle2 = {
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
  display: "inlineFlex",
  bottom: 0,
  right: 0,
  cursor: "pointer",
  marginRight: 15,
  opacity: 0,
};

// Scene Three Styles

export const containerStyle3 = {
  backgroundImage: `url(${Background3})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100vw",
  height: "100vh",
};

export const mainImageStyle3 = {
  position: "absolute",
  bottom: 0,
  width: "50%",
  left: 180,
};

export const speechBubbleStyle3 = {
  position: "absolute",
  width: "35%",
  top: 50,
  left: 50,
};

export const typed1Style3 = {
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

export const monsterStyle3 = {
  position: "absolute",
  top: -80,
  right: -80,
  width: "38%",
};

export const speechBubble2Style3 = {
  position: "absolute",
  width: "35%",
  top: 0,
  right: 300,
};

export const typed2Style3 = {
  position: "absolute",
  fontSize: 25,
  fontWeight: "bold",
  fontFamily: "SequentialistBB, cursive",
  top: 80,
  right: 420,
  whiteSpace: "pre",
  textAlign: "center",
};

export const nextSceneButtonStyle3 = {
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
  display: "inlineFlex",
  bottom: 0,
  right: 0,
  cursor: "pointer",
  marginRight: 15,
  opacity: 0,
};
