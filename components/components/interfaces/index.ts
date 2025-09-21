import React from "react";
import Card from "../components/Card";
import Pill from "../components/Pill";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold gap-6">
      <h1>Airbnb Application Clone system</h1>
      <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">
        Get Started
      </button>

      {/* Example usage of Card and Pill */}
      <Card
        title="Sample Card"
        description="This is a reusable Card component."
      />
      <Pill label="New" />
    </main>
  );
};

export default Home;
