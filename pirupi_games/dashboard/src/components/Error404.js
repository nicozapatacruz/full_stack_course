import imagenError from "../assets/images/Error404.png";

function Error404() {
  return (
    <div>
      <img
        src={imagenError}
        style={{
          height: "100vw",
          width: "100vw",
        }}
        alt="foto-error"
      />
    </div>
  );
}

export default Error404;
