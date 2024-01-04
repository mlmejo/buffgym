export const registerSchema = z.object({
  username: z.string().trim().min(3),
  email: z.string().trim().min(1),
  password: z.string().min(6),
});
