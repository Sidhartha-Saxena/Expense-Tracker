import Dashboard from "./components/Dashboard";
import Expense from "./components/Expense";
import Income from "./components/Income";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Orb from "./components/Orb";
import { useMemo } from "react";

function App() {
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);
  return (
    <>
      <div className="relative flex w-full ">
        {orbMemo}
        <div className="h-screen p-3">
          <Sidebar />
        </div>
        <div className="p-3 w-full h-fit md:h-screen lg:w-[calc(100vw-240px)]">
          <div className="h-full w-full p-5 bg-teal-50 backdrop-blur-xl bg-opacity-50 rounded-3xl border-4 border-[#24246033]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/income" element={<Income />} />
              <Route path="/expense" element={<Expense />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
