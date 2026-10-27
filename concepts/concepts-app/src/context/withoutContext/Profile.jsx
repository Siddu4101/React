export default function Profile({ user }) {
  return (
    <>
      <div className="border-2 border-red-500 p-5 m-3">
        <h1>Profile component(user)</h1>
        <h2>The prop recived from the UI {">"} NavBar &gt; Profile is</h2> <br />
        <div>
          <h3>Name: {user.name}(user.name)</h3>
          <h3>Role: {user.role}(user.role)</h3>
        </div>
      </div>
    </>
  );
}
