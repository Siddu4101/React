export default function InputBox(input) {
  let bg = input.readOnly ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "bg-white"
  return (
    <>
   <div className="card rounded-none border-2 border-yellow-600 h-fit w-fit bg-purple-300">
      <label>
        <span className="text-gray-700 p-2 m-2">
          {input.fieldLable}
        </span>
        <input
          type="number"
          readOnly={input.readOnly}
          value={input.amount}
          className={`border-2 border-black p-2 m-2 ${bg}`}
          onInput={(e)=>input.setCurrancyAmount(e.target.value)}
        />
        <select className="h-10 w-fit bg-sky-500 p-2 m-2 border-2 border-black" value={input.region} onInput={(e) => {
          console.log(e.target.value)
          input.currencySetter(e.target.value)
          }}>
          {
            Object.keys(input.currencies).map(carrancy=>{
              return <option value={carrancy} key={carrancy}>{carrancy}</option>
            })
          }
        </select>
      </label>
      </div>
    </>
  );
}
