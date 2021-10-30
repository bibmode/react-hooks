import { useContext } from "react";
import { AppContext } from "./ContextTutorial";

const Login = () => {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        type="text"
      />
    </div>
  );
};

export default Login;
