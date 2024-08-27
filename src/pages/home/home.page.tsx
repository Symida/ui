import { FC, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { AuthForm } from '@/components/app/auth-form/auth-form.component';

export const HomePage: FC = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const [isLoggingIn, setIsLoggingIn] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 overflow-hidden bg-gradient-to-br from-gray-300 via-gray-500 to-gray-900 text-white w-full">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-2">
          <MessageCircle className="mx-auto h-12 w-12 animate-pulse" />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 sm:h-[60px] xl:h-[124px]">
            Welcome to Symida
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl dark:text-gray-400">
            Connect instantly. Chat seamlessly. Experience the future of communication.
          </p>
        </div>

        <AuthForm
          isLoggingIn={isLoggingIn}
          isSigningUp={isSigningUp}
          setIsLoggingIn={setIsLoggingIn}
          setIsSigningUp={setIsSigningUp}
        />
      </div>

      <p className="mt-8 text-sm text-gray-200">
        By using Symida, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
};
