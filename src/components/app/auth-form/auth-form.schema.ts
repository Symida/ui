import { z } from 'zod';

export const AuthFormSchema = z.object({
  username: z.string().min(4),
  password: z.string(),
});

export type AuthFormValues = z.infer<typeof AuthFormSchema>;

export const SignUpFormSchema = AuthFormSchema.extend({
  email: z.string().email(),
  confirmPassword: z.string(),
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: 'custom',
      message: 'The passwords did not match',
      path: ['confirmPassword'],
    });
  }
});

export type SignUpFormValues = z.infer<typeof SignUpFormSchema>;
