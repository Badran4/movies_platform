import Navbar from "../../components/Navbar/Navbar"
import { useFormik } from "formik"
import * as yup from "yup"







 const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

 
export default function Login(theme,toggleTheme){

   const scheme = yup.object({
   
    email: yup
    .string()
    .required("email is required")
    .email("enter a valid email"),
    password: yup
    .string()
    .required("password is required")
    .matches(passwordRegex, "password should be minimum eight characters"),
    })

    function Signup(){
        console.log("heloo")
    }
    let formik = useFormik({
        initialValues:{
            
            email:"",
            password:""
        },
        validationSchema:scheme,

        onSubmit:Signup,
    })
    return <>
         <Navbar theme={theme} toggleTheme={toggleTheme}/>

    <div className="container space-y-4 my-8 dark:bg-gray-800 dark:text-white p-6 ">
    <h1 className="bg-[#09] gap-1 items-center text-3xl mb-5 font-semibold">login Now:</h1>



    <form className="space-y-3 gap-4" onSubmit={formik.handleSubmit}>
        
           
        <div className="email mb-3">
            <input
             type="email" 
             placeholder="email" 
             className="form-control w-full px-2 py-1 rounded-md border-2 border-gray-500 border-opacity-50 focus:outline-none focus:border-blue-500"
             name="email"
              onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
             />
              {formik.errors.email  && formik.touched.email ?(            
            <p className="bg-red-300 py-1 text-red-800  rounded-md mt-1 font-medium ">{formik.errors.email}</p>
            ):("")}
        </div>

        <div className="password mb-3">
            <input type="password"
             placeholder="password"
              className="form-control w-full px-2 py-1 rounded-md border-2 border-gray-500 border-opacity-50 focus:outline-none focus:border-blue-500"
             name="password"
              onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
              
              />
               {formik.errors.password && formik.touched.password?(            
            <p className="bg-red-300 py-1 text-red-800  rounded-md mt-1 font-medium ">{formik.errors.password}</p>
            ):("")}
        </div>
         <button type="submit" className="btn bg-blue-500 w-full text-white bg-blue-500 disabled:bg-red-600 hover:bg-blue-700 " disabled={!(formik.isValid&&formik.dirty)}>login</button>
    </form>
    
    </div>
    </>
}