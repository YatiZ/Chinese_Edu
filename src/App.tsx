import { Route, Routes } from "react-router-dom"
import AuthLayout from "./auth/AuthLayout"
import SigninForm from "./auth/forms/SigninForm"
import SignupForm from "./auth/forms/SignupForm"

import Discussion from "./root/pages/Discussion"
import Tests from "./root/pages/Tests"
import Library from "./root/pages/Library"
import Home from "./root/pages/Home"
import Blogs from "./root/pages/Blogs"
import RootLayout from "./root/RootLayout"
import Profile from "./root/pages/Profile"




function App() {
  

  return (
    <main className="">
      <Routes>
        {/* For public view */}
        <Route element={<AuthLayout/>}>
           <Route path="/sign-in" element={<SigninForm/>}/>
           <Route path="/sign-up" element={<SignupForm/>}/>
        </Route>

        {/* For private view  */}
        <Route element={<RootLayout/>}>
          <Route index element={<Home/>} />
          <Route path="/discussion" element={<Discussion/>}/>
          <Route path="/test" element={<Tests/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
