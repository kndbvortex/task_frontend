
import logo from "./../images/logo.png";
import Button from "./Button";

const Header = () => {
  const click = () => {
    console.log("Le boutton a été cliqué");
  };
  return (
    <header className="mt-1 container d-flex justify-content-between justify-content-md-around">
      <img src={logo} alt="logo" className="logo p-2 align-self-start" />
      <span
        className="h1 text-uppercase font-weight-bold align-self-center"
      >
        React Task Tracker
      </span>
      <Button
        style={{
          height: "2.5em",
          fontSize: "1em",
          width: "100px",
          borderRadius: "5%",
          backgroundColor: "#FFCC00",
          color: "black",
          fontWeight: "bold",
        }}
        className="align-self-end"
        onclick={click}
      />
    </header>
  );
};

export default Header;
