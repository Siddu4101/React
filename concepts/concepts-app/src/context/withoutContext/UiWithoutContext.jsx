import NavBar from "./NavBar";

export default function UiWithoutContext() {
  const user = {
    name: "Siddu",
    role: "Software Engineer",
  };
  return (
    <>
      <h1 className="text-2xl">Context Test Project</h1>
      <h2 className="text-xl">
        1. Without Context i need to pass the obj/data as a prop to each
        subsequent component even if it is not used in all
      </h2>
      <br />
      <div className="border-2 border-red-500 p-5 m-3">
        <h1>
          UI component(user('user.name =Siddu','user.role=Software Engineer'))
        </h1>
        <NavBar user={user} />
      </div>
    </>
  );
}
