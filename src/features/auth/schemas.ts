import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("El correo ingresado es invalido"),
  password: z.string().min(8, "Minimo tienen que ser 8 caracteres"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Campo requerido"),
  email: z.string().email("El correo ingresado es invalido"),
  password: z.string().min(8, "Minimo tienen que ser 8 caracteres"),
});
