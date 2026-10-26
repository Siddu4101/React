import { UserContext } from "./UserContext";
import NavBar from "./NavBar";

export default function UiWithContext() {
  const user = {
    name: "Siddu",
    role: "Software Engineer",
  };
  return (
    <>
      <h2 className="text-xl">
        2. With Context i need to pass the obj/data as a prop(value) in the provider and all it's children can access it without need of subsequent pass for each
      </h2>
      <br />
      <div className="border-2 border-red-500 p-5 m-3">
        <h1>
          UI component(user('user.name =Siddu','user.role=Software Engineer'))
        </h1>
        {/* create context provider and wrap it inside the components to which u want to share the data */}
        <UserContext.Provider value={user}>
          <NavBar/>
        </UserContext.Provider>
      </div>
    </>
  );
}
