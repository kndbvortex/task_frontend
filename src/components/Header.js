import logo from "./../images/logo.png";
import Button from "./Button";

const Header = () => {
  const click = () => {
    console.log("Le boutton a été cliqué");
  };
  return (
    <header className="container d-flex justify-content-around">
      <img src={logo} alt="logo" className="logo p-2 align-self-start" />
      <span
        className="h1 text-uppercase font-weight-bold align-self-center"
        width="100px"
        heigh="50px"
      >
        React Task Tracker
      </span>
      <Button className="align-self-end" onclick={click} />
    </header>
  );
};

export default Header;
