import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";

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

import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().trim().min(1, "Campo requerido"),
  email: z.string().email("El correo ingresado es invalido"),
  password: z.string().min(8, "Minimo tienen que ser 8 caracteres"),
});

export const SignUpCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handlerSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handlerSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Ingresa tu nombre"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Ingresa tu correo"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Ingresa una contraseña"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={false} className="w-full" size={"lg"}>
              Registrate
            </Button>
          </form>
        </Form>
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
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex items-center justify-center">
        <p>
          Ya tienes una cuenta?{" "}
          <Link href={"/sign-in"}>
            <span className="text-blue-700">Inicia sesion</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
