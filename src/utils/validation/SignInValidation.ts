import { z } from "zod";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const SignInSchema = z.object({
  email: z.string().email({ message: "A valid email address is required" }),
  password: z.string().min(5, { message: "Pass Length should be > 3" }),
  // regex(passwordRegex, {
  //   message:
  //     "Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character",
  // }),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
