"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
const Home = () => {
  const [aumentar, setAumentar] = useState(0);
  const handleButton = () => {
    setAumentar(aumentar + 1);
    console.log("presionando");
  };
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className=" font-bold text-3xl">{aumentar}</h1>
      <Button onClick={handleButton}>Presione me</Button>
    </div>
  );
};

export default Home;
