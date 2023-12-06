import { useEffect } from "react";
import Header from "../components/Header";

function Home() {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) window.location.href = "/login";
  });
  return (
    <>
      <Header />
      <div className="grow flex justify-center items-center text-yellow-400 bg-red-600">
        dvbdfbfdbdfbdfbdfbdfbdf
      </div>
    </>
  );
}

export default Home;
