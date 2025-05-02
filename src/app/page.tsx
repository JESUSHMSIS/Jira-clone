"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrent } from "@/features/auth/api/use-current";
const Home = () => {
  const { data, isLoading } = useCurrent();
  const router = useRouter();
  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data]);

  return <div>solo visible para personas autorizadas</div>;
};

export default Home;
