import "./buttonNavbar.css";

const ButtonNavbar = ({ boton, color }) => {
  return (
    <div>
      <button style={{ backgroundColor: color }} className="buttonNavbar">
        {boton}
      </button>
    </div>
  );
};

export default ButtonNavbar;
