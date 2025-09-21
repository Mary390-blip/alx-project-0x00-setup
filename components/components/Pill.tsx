import React from "react";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Airbnb Application Clone system</h1>
      <button className=" border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">
        Get Started
      </button>
    </main>
  );
};

export default Home;
import React from "react";

interface PillProps {
  label: string;
  color?: string;
}

const Pill: React.FC<PillProps> = ({ label, color = "bg-blue-500" }) => {
  return (
    <span
      className={`px-3 py-1 text-sm rounded-full text-white ${color}`}
    >
      {label}
    </span>
  );
};

export default Pill;
