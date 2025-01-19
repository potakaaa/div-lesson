const App = () => {
  return (
    <div
      id="web-container"
      className="bg-zinc-900 w-full h-screen flex flex-col justify-center items-center"
    >
      <p className="text-white font-bold text-4xl">This is my App</p>
      <div
        id="parent-box-div"
        className="border-2 border-white p-4 rounded-md mt-10 size-2/3 flex flex-col space-y-2"
      >
        {/* 1st DIV */}
        <div id="group-indiv-div" className="flex flex-row size-full space-x-2">
          <div
            id="indiv-div"
            className="border border-white p-4 rounded-md w-full  flex justify-center items-center"
          >
            <h1 className="text-white text-2xl md:text-5xl xl:text-7xl font-bold">
              Hello Im Gerald
            </h1>
          </div>
        </div>

        {/* 2nd DIV */}
        <div
          id="group-indiv-div"
          className="flex flex-col md:flex-row size-full md:space-x-2"
        >
          <div
            id="indiv-div"
            className="border border-white p-4 rounded-md w-full flex-[2]"
          ></div>
          <div
            id="indiv-div"
            className="border border-white p-4 rounded-md w-full flex flex-[5]"
          ></div>
        </div>

        {/* 3rd DIV */}
        <div
          id="group-indiv-div"
          className="flex flex-col md:flex-row size-full md:space-x-2"
        >
          <div
            id="indiv-div"
            className="border border-white p-4 rounded-md size-full flex"
          ></div>
          <div
            id="indiv-div"
            className="border border-white p-4 rounded-md size-full flex"
          ></div>
          <div
            id="indiv-div"
            className="border border-white p-4 rounded-md size-full flex"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default App;
