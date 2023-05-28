'use client';
import {useCallback, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";

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
                        <Button danger>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
      </div>
    );
}
export default AuthForm;