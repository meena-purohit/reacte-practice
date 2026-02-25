import { Link } from "react-router";

export default function Users() {
  const userData = [
    { id: 1, name: "Meena" },
    { id: 2, name: "Peter" },
    { id: 3, name: "Sam" },
    { id: 4, name: "Bruce" },
    { id: 5, name: "Tom" },
    { id: 6, name: "Tony" },
  ];
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>User List Page</h1>
      {userData.map((item) => (
        <div>
          <h4>
            <Link to={"/users/"+item.id}>{item.name}</Link>
          </h4>
        </div>
      ))}
    </div>
  );
}
