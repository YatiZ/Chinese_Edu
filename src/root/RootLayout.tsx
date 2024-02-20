import NavBar from "@/components/shared/NavBar"
import { Outlet } from "react-router-dom"
import Footer from "@/components/shared/Footer"
import ThemeProvider from "@/context/ThemeContext"


const RootLayout = () => {
  return (
    <ThemeProvider>
    <div className="flex flex-col gap-4  min-h-screen">
       <NavBar/>
       <section>
         <Outlet/>
       </section>
       <Footer/>
    </div>
    </ThemeProvider>
    
  )
}

export default RootLayout