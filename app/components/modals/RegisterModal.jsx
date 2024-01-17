'use client'

import axios from "axios";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phoneNumber: ""
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      await axios.post("/api/register/registerUser", data);
      
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false, // Do not redirect, as you might want to handle it manually
      });

      toast.success("Registered!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-2">
      <Heading title="Welcome to KAJA" subtitle="Create an account!" />
      <label className="form-control w-full max-w-lg">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <Input type="text" placeholder="Type here"  
          id="email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required />
      </label>

      <label className="form-control w-full max-w-lg">
        <div className="label">
          <span className="label-text">Name</span>
        </div>
        <Input
          id="name"
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

      <label className="form-control w-full max-w-lg">
        <div className="label">
          <span className="label-text">Phone Number</span>
        </div>
        <Input type="text" placeholder="Type here" 
          id="phoneNumber"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </label>
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      {/* <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      /> */}
      <div
        className="
          text-neutral-500 
          text-center 
          font-light
        "
      >
        <p>
          Already have an account?
          <span
            onClick={toggle}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            {" "}
            Log in
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disable={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
