import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const SignUpCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-nene shadow-none">
      <CardHeader className="flex items-center justify-center p-7 text-center flex-col">
        <CardTitle className="text-2xl">Registrate</CardTitle>
        <CardDescription>
          Para Registrarte, aceptaras nuestras{" "}
          <Link href={"/privacy-policy"}>
            <span className="text-blue-700">Politicas de privacidad </span>
          </Link>
          y{" "}
          <Link href={"/privacy-policy"}>
            <span className="text-blue-700">Terminos y servicios</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7 ">
        <DottedSeparator />
      </div>
      <CardContent>
        <form action="" className="space-y-4">
          <Input
            required
            value={""}
            type="Text"
            placeholder="Ingresa tu nombre"
            disabled={false}
            onChange={() => {}}
          />
          <Input
            required
            value={""}
            type="email"
            placeholder="Ingresa tu direccion de email"
            disabled={false}
            onChange={() => {}}
          />
          <Input
            required
            value={""}
            type="password"
            placeholder="Ingresa tu contraseña"
            disabled={false}
            onChange={() => {}}
            min={8}
            max={256}
          />
          <Button disabled={false} className="w-full" size={"lg"}>
            Iniciar Sesion
          </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button variant={"secondary"} className="w-full" size={"lg"}>
          <FcGoogle className="mr-2 size-5" />
          Iniciar sesion con Google
        </Button>
        <Button variant={"secondary"} className="w-full" size={"lg"}>
          <FaGithub className="mr-2 size-5" />
          Iniciar sesion con GitHub
        </Button>
      </CardContent>
    </Card>
  );
};
