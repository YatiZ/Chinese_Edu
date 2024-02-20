import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/AuthContext";
import { useSignInAccount } from "@/lib/react-query/queries";
import { SignInValidation} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {z} from 'zod';


const SigninForm = () => {
    const {checkAuthUser} = useUserContext();
    const navigate = useNavigate();
    const {mutateAsync: signInAccount, isPending: isLogInLoading} = useSignInAccount();

    const form = useForm<z.infer<typeof SignInValidation>>({
        resolver: zodResolver(SignInValidation),
        defaultValues: {
           email: '',
           password:'',
        }
     })
     async function onSubmit(values:z.infer<typeof SignInValidation>){
       const session = await signInAccount(values);
       if(!session){
        return toast({
            title: "SignIn Failed!"
        })
       }

       const isLoggedIn = await checkAuthUser();
       if(isLoggedIn){
        form.reset()
        navigate('/')
       }else{
        return toast({
            title: "Login failed"
        })
       }
     }
  return (
    <Form {...form}>
    <div className="sm:w-420 flex-center flex-col mx-10">
        <h1 className="font-bold sm:pt-7 text-3xl">Sign In Your Account</h1>
        <p className="text-xs mt-2">Don't Have An Account?
            <Link to='/sign-up' className="text-blue-700 font-bold">Sign Up</Link>
        </p>
    <form className="flex flex-col gap-5 w-full mt-4" onSubmit={form.handleSubmit(onSubmit)}>
  
  
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
     {isLogInLoading? 
      <div className="flex gap-2">
        <Loader/> Logging In ...
      </div> :
      "Log In"
    }
  </Button>
    </form>
    </div>

</Form>
  )
}

export default SigninForm