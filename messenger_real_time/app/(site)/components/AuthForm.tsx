'use client';
import {useCallback, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import AuthSocialButton from "@/app/(site)/components/AuthSocialButton";
import {BsGithub, BsGoogle} from "react-icons/all";

// Định nghĩa kiểu đầu vào cho form
type Variant = 'LOGIN' | 'REGISTER';
const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);
    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        }else {
            setVariant('LOGIN')
        }
    },[variant])

    // validate form
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm<FieldValues>({
        defaultValues: {
            name:'',
            email:'',
            password:''
        }
    });

    const onSubmit : SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            // axios register
        }
        if (variant === 'LOGIN') {
            // nextAuth sign in
        }
    }

    // login = mạng xã hội social
    const socialAction = (action :string) => {
        setIsLoading(true);
        // NextAuth social sign in

    }

    return (
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className='space-y-6'
                      onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                        <Input label="Name"
                               id="name"
                               disabled={isLoading}
                               required
                               register={register}
                               errors={errors}
                        />
                    )}
                    <Input label="Email"
                           id="email"
                           type="email"
                           register={register}
                           errors={errors}
                    />
                    <Input label="Password"
                           id="password"
                           type="password"
                           register={register}
                           errors={errors}
                    />
                    <div>
                        <Button disabled={isLoading} type="submit" fullWidth>
                            {variant === 'LOGIN' ? 'Sign' : 'Register'}
                        </Button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">
                        Or continue with
                      </span>
                    </div>
                </div>
                <div className="mt-6 flex gap-2">
                    <AuthSocialButton
                        icon={BsGithub}
                        onClick={() => socialAction('github')}
                    />
                    <AuthSocialButton
                        icon={BsGoogle}
                        onClick={() => socialAction('google')}
                    />
                </div>
            </div>
      </div>
    );
}
export default AuthForm;