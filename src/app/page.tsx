"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Home = () => {
  const [aumentar, setAumentar] = useState(0);
  const handleButton = () => {
    setAumentar(aumentar + 1);
    console.log("presionando");
  };
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-1">
      <h1 className=" font-bold text-3xl">{aumentar}</h1>
      <Input placeholder="hola a todos" />
      <Button onClick={handleButton}>Presione me</Button>
      <Button onClick={handleButton} variant={"secondary"}>
        Secundario
      </Button>
      <Button onClick={handleButton} variant={"destructive"}>
        Destructivo
      </Button>
      <Button onClick={handleButton} variant={"muted"}>
        Muteado
      </Button>
      <Button onClick={handleButton} variant={"teritrary"}>
        Nuevo
      </Button>
      <Button onClick={handleButton} variant={"ghost"}>
        Ghost
      </Button>
    </div>
  );
};

export default Home;
