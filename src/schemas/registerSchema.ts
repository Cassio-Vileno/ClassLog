import z from "zod";
import { validateCPF } from "../utils/validadteCPF";


export const registerSchema = z.object({
  full_name: z.string(),
  gender: z.string(),
  birthday: z.date(),
  cpf: z.string()
    .min(11, 'O CPF deve ter pelo menos 11 dígitos.')
    .refine((value) => validateCPF(value), {
      message: "CPF inválido."
    })
})