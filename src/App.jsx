import { useActionState } from "react";
import "./App.css";

export default function App() {
  const handleLogin = (prevData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 5) {
      return { error: "Name should not emty or Name should not allowed more then 5 charecters",name,password};
    } else if (!regex.test(password)) {
      return { error: " Password should be must or Password can Contain only numbers and alphabets",name,password };
    } else {
      return { message: "Login done",name,password };
    }
  };

  const [data, action, pending] = useActionState(handleLogin);

  return (
    <div>
      <h1>Validation with useActionState in React</h1>
      {data?.message && <span style={{color:"green"}}>{data?.message}</span>}
      {data?.error && <span style={{color:"red"}}>{data?.error}</span>}
      <form action={action}>
        <input defaultValue={data?.name} type="text" name="name" placeholder="enter name" />
        <br />
        <br />
        <input defaultValue={data?.password} type="text" name="password" placeholder="enter password" />
        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
