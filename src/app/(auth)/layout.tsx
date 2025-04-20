"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathName = usePathname();
  const isSignIn = pathName === "/sign-in";
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src={"/logo.svg"} height={50} width={100} alt="logo" />
          <Button className="" variant={"secondary"} asChild>
            <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
              {isSignIn ? "Registrate" : "Iniciar Sesion"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
