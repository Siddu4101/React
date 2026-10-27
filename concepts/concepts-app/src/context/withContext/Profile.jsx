import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Profile() {

  /* use the context and the useContext hook to get the data */
    const {user, user2} = useContext(UserContext)

  return (
    <>
      <div className="border-2 border-red-500 p-5 m-3">
        <h1>Profile component</h1>
        <h2>The context recived from the UI(Provider) {">"} Profile directly</h2> <br />
        <div>
          <h3>Name: {user.name}(user.name)</h3>
          <h3>Role: {user.role}(user.role)</h3>
          <h3>Name 2: {user2.name}(user2.name)</h3>
        </div>
      </div>
    </>
  );
}
