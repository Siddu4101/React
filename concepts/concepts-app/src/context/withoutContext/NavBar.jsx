import Profile from "./Profile";

export default function NavBar({user}) {
  return (
    <><div className="border-2 border-red-500 p-5 m-3">
      <h1>Nav bar component(user)</h1>
      <Profile user={user}/>
      </div>
    </>
  );
}
