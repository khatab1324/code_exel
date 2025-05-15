import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(4, "Bro add the fullName ^_^"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "The length number should be at least 10")
    .refine((value) => value.startsWith("07"), {
      message: "PhoneNumber should starting with 07",
    }),
  email: z.string().email("Invalid email address"),
  idNumber: z
    .string()
    .regex(/^\d{9}$/, "The International length number should be 9"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
