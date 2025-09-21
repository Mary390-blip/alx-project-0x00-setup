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

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 max-w-sm bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
