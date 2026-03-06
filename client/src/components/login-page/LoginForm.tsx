"use client";

import { User, Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { LoginRequest } from "@/types/auth.types";
import { useAuth } from "@/hooks/useAuth"


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function LoginForm() {
  const router = useRouter();
  const { login, loginLoading } = useAuth();


  const form = useForm<LoginRequest>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

 const onSubmit = async (data: LoginRequest) => {
     try {
 
      const res =  await login(data);
      localStorage.setItem("token", res.token)
       alert("Login successful 🎉");
 
       router.push("/landing-page");
     } catch (error) {
       console.error(error);
       alert("Login failed");
     }
   };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 mt-6"
      >
       
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="John Doe"
                    className="pl-10"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>College Email ID</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="student@college.edu"
                    className="pl-10"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

       
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         <Button
          type="submit"
          disabled={loginLoading}
          className="w-full bg-violet-600 hover:bg-violet-700 flex items-center justify-center gap-2"
        >
          {loginLoading ? (
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Login and Verify"
          )}
        </Button>
      </form>
    </Form>
  );
}