'use client'

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from 'next-auth/react';
import { 
  SubmitHandler, 
  useForm
} from "react-hook-form";
import { useRouter } from "next/navigation";

import useRegisterModal from "@/app/hooks/useRegisterModal.jsx";
import useLoginModal from "@/app/hooks/useLoginModal.jsx";

import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../Button";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
  });
  
  const onSubmit = (data) => {
    setIsLoading(true);

    signIn('credentials', { 
      ...data, 
      redirect: false,
    })
    .then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('Logged in');
        router.refresh(router.asPath);
        loginModal.onClose();
      }
      
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  }

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome back"
        subtitle="Login to your account!"
      />
      <label className="form-control w-full max-w-lg">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <Input type="text" placeholder="Type here" 
          id="email"
          disabled={isLoading}
          register={register}  
          errors={errors}
          required
        />
      </label>
      <label className="form-control w-full max-w-lg">
        <div className="label">
          <span className="label-text">Password</span>
        </div>
        <Input placeholder="Type here" 
          id="password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </label>
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      {/* <Button 
        outline 
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button 
        outline 
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      /> */}
      <div className="
      text-neutral-500 text-center mt-4 font-light">
        <p>First time using KAJA website?
          <span 
            onClick={onToggle} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            > Create an account</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disable={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;
