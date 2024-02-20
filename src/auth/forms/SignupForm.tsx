import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/AuthContext";
import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queries";
import { SignupValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {z} from 'zod';

const SignupForm = () => {
  const {toast} = useToast();
  const navigate = useNavigate();
  const {mutateAsync: createUserAccount, isPending: isAccountCreating} = useCreateUserAccount();
  const {mutateAsync: signInAccount, error:signInError} = useSignInAccount();
  const {checkAuthUser} = useUserContext();
  const form = useForm<z.infer<typeof SignupValidation>>({
     resolver: zodResolver(SignupValidation),
     defaultValues: {
        username:'',
        email: '',
        password:'',
     }
  })
 
  async function onSubmit(values:z.infer<typeof SignupValidation>) {
     
     const newUser = await createUserAccount(values);
     console.log(newUser)

     if(!newUser){
        return toast({
            title: "Sign up failed. Please try again"
        })
     }
     const session = await signInAccount({
        email: values.email,
        password: values.password
     })

     if(!session){
        return toast({
            title: "Sign up failed. Please try again"
        })
     }

     const isLoggedIn = await checkAuthUser();
     if(isLoggedIn){
        form.reset()
        navigate('/')
     }
     else{
        return toast({
            title: "Sign up isLoggedIn failed. Please try again",  
          })
     }
     
  }

  return (
    <Form {...form}>
        <div className="sm:w-420 flex-center flex-col mx-10">
            <h1 className="font-bold sm:pt-7 text-3xl">Register</h1>
            <p className="text-xs mt-2">Already Have An Account?
                <Link to='/sign-in' className="text-blue-700 font-bold">LogIn</Link>
            </p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
      
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Your Username" {...field} className="shad-input"/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" className="shad-input" placeholder="Your Email" {...field} />
            </FormControl>
            <FormMessage/>
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
              <Input type="password" className="shad-input" {...field} />
            </FormControl>
           <FormMessage/>
          </FormItem>
        )}
      />
    
      
      <Button type="submit" className="shad-button">
      {isAccountCreating? 
      <span className="flex gap-2">
      <Loader/> Creating ...
       </span>
      : 'Create'}
      
      </Button>
        </form>
        </div>
       {signInError && <p>error</p>}
  </Form>
  )
}

export default SignupForm