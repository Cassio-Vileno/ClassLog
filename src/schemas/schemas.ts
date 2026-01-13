import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "E-mail inválido" }),
  password: z.string().min(6, {
    message: "Asenha deve ter no mínimo 6 caracterres."
  })
});

export type LoginFormData = z.infer<typeof loginSchema>;