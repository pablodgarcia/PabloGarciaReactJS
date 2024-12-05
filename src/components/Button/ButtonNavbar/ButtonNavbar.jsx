const ButtonNavbar = ({ boton, color }) => {
  return (
    <div>
      <button style={{ backgroundColor: color }}>{boton}</button>
    </div>
  );
};

export default ButtonNavbar;
