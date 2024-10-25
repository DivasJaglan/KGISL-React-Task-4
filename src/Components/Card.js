import Button from "./Button";

function Card() {
  return (
    <div
      style={{
        backgroundColor: "#1a2e35",
        padding: "2rem 3rem",
        width: "43%",
        margin: "auto",
      }}
    >
      <h1
        style={{ color: "#fff", margin: "0", fontSize: "2.5rem" }}
        className="fw-bold"
      >
        YOU CAN <br /> HIRE FREELANCER <br /> HERE
      </h1>
      <p style={{ color: "#fff" }} className="fs-5 mb-5">
        It is a long established fact that a reader will be distracted by the
        readable content of a page
      </p>
      <Button color="#fff" bgColor="#ff4f5a" text="About Us" />
      <Button bgColor="#fff" text="Get A Quote" />
    </div>
  );
}

export default Card;
