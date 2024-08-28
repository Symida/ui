import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { AuthFormSchema, SignUpFormSchema } from './auth-form.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useSignUpMutation } from '@/api/queries/auth/sign-up-mutation.hook';
import { useLoginMutation } from '@/api/queries/auth/login-mutation.hook';

interface AuthFormProps {
  isSigningUp: boolean;
  isLoggingIn: boolean;
  setIsSigningUp: (value: boolean) => void;
  setIsLoggingIn: (value: boolean) => void;
}

export const AuthForm: FC<AuthFormProps> = ({
  isLoggingIn,
  isSigningUp,
  setIsLoggingIn,
  setIsSigningUp,
}) => {
  const signUpForm = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
    },
    reValidateMode: 'onBlur',
  });

  const loginForm = useForm<z.infer<typeof AuthFormSchema>>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { mutate: signUp } = useSignUpMutation();
  const { mutate: login } = useLoginMutation();

  const handleSignUp = (values: z.infer<typeof SignUpFormSchema>) => {
    console.log(values);
    signUp(values);
  };

  const handleLogin = (values: z.infer<typeof AuthFormSchema>) => {
    console.log(values);
    login(values);
  };

  if (isSigningUp) {
    return (
      <Form {...signUpForm}>
        <form className="space-y-4" onSubmit={signUpForm.handleSubmit(handleSignUp)} noValidate>
          <FormField
            name="email"
            control={signUpForm.control}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder="Email"
                    type="email"
                    title=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="username"
            control={signUpForm.control}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder="Username"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={signUpForm.control}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder="Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="confirmPassword"
            control={signUpForm.control}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder="Confirm Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full bg-white text-primary hover:bg-gray-100" type="submit">
            Sign Up
          </Button>
          <Button
            className="w-full bg-transparent border border-white hover:bg-white/10"
            variant="outline"
            onClick={() => setIsSigningUp(false)}
          >
            Back
          </Button>
        </form>
      </Form>
    );
  }
  if (isLoggingIn) {
    return (
      <Form {...loginForm}>
        <form className="space-y-4" onSubmit={loginForm.handleSubmit(handleLogin)}>
          <FormField
            name="username"
            control={loginForm.control}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder="username"
                    title=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={loginForm.control}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Input
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder="Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full bg-white text-primary hover:bg-gray-100" type="submit">
            Login
          </Button>
          <Button
            className="w-full bg-transparent border border-white hover:bg-white/10"
            variant="outline"
            onClick={() => setIsLoggingIn(false)}
          >
            Back
          </Button>
        </form>
      </Form>
    );
  }

  return (
    <div className="space-y-4">
      <Button
        className="w-full bg-white text-primary hover:bg-gray-100"
        onClick={() => setIsSigningUp(true)}
      >
        Sign Up
      </Button>
      <Button
        className="w-full bg-transparent border border-white hover:bg-white/10 hover:text-white"
        variant="outline"
        onClick={() => setIsLoggingIn(true)}
      >
        Login
      </Button>
    </div>
  );
};
