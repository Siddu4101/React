import { useParams } from "react-router";

export default function User() {
  const params = useParams()

  return (
    <>
      <div className="p-50 m-20 border-2 text-center shadow-2xl shadow-amber-600">
        <h1 className="text-5xl">Hello User userId from the URI is {params.userId} </h1>
      </div>
    </>
  );
}
