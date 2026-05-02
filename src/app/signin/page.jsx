"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const {data, error} = await authClient.signIn.email({
        email,
        password,
        callbackURL: '/',
    })
    if(error){
        toast.error(error.message);
    }
  };

  const handleGoogleBtn = async() => {
    await authClient.signIn.social({
    provider: "google",
    callbackURL: '/',
  });
  }

  return (
    <Card className="border border-gray-300 mx-auto max-w-2xl py-10 my-20">
      <h1 className="text-center text-3xl font-bold text-[#4737b0]">Sign In</h1>

      <Form className="flex max-w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>

        <TextField
          isRequired
          name="email"
          className='space-y-2'
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          className='space-y-2'
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" className='bg-[#4737b0]'>
            <Check />
            SignIn
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <Button onClick={handleGoogleBtn} variant="outline" className='text-blue-500 w-full'><FaGoogle></FaGoogle> Signup with Google</Button>
      </Form>
      <p className="text-center text-gray-600">Don't Have an account? <span className="text-blue-500 font-medium"><Link href="/signup"> SignUp</Link></span></p>

    </Card>
  );
}