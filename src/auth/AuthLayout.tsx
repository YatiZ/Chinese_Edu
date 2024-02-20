import { Card } from "@/components/ui/card";
import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {
    const isAuthenticated = false;
  return (
    <>
     {isAuthenticated? 
     (<Navigate to='/'/>):
     (<Card className="flex flex-row m-10 h-[400px]">
        <img src="/assets/images/side-img.svg"
       alt="logo"
       className="hidden lg:block w-1/2 object-cover bg-no-repeat rounded-l-md"
      />
        <Outlet/>
     </Card>)
     }
    </>
  )
}

export default AuthLayout