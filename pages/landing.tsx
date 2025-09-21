import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 class Name="text-xl font-extralight">Landing Page</card>
    </div>
  );
};

export default Landing;

import React from "react"
import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      {/* Reusable Card */}
      <Card />
      <Card />

      {/* Button Variants */}
      <div className="mt-6 flex gap-4 flex-wrap">
        <Button title="Small Rounded-sm" className="text-sm rounded-sm px-2 py-1" />
        <Button title="Medium Rounded-md" className="text-base rounded-md px-4 py-2" />
        <Button title="Large Rounded-full" className="text-lg rounded-full px-6 py-3" />
      </div>
    </div>
  )
}

export default Landing
