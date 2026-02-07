import Navbar from "../../components/Navbar/Navbar"
import { useFormik } from "formik"
import * as yup from "yup"





 const phoneRegex = /^(?:\+20|0)?1[0-9]{9}$/;
 const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

 
export default function Signup(theme,toggleTheme){

   const scheme = yup.object({
    name: yup
    .string().required("Name is required")
    .min(3 , "Name must be than 3 characters")
    .max(20 ,"Name should not be more than 20 characters"),
    email: yup
    .string()
    .required("email is required")
    .email("enter a valid email"),
    password: yup
    .string()
    .required("password is required")
    .matches(passwordRegex, "password should be minimum eight characters"),
    rePassword: yup.string().required("password is required").oneOf([yup.ref("password")],"password an confirm password"),
    phone: yup.string().required("phone is required").matches(phoneRegex,"enter a valid phone me"),
   })

    function Signup(){
        console.log("heloo")
    }
    let formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            phone:"",
            password:"",
            rePassword:"",
        },
        validationSchema:scheme,

        onSubmit:Signup,
    })
    return <>
         <Navbar theme={theme} toggleTheme={toggleTheme}/>

    <div className="container space-y-4 my-8">
    <h1 className="bg-[#09] gap-1 items-center text-3xl mb-5 font-semibold">Register Now:</h1>



    <form className="space-y-3 gap-4" onSubmit={formik.handleSubmit}>
        <div className="username mb-3">
            <input 
            type="text" 
            placeholder="Usrname" 
            className="form-control w-full px-2 py-1 rounded-md border-2 border-gray-500 border-opacity-50 focus:outline-none focus:border-blue-500"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ?(            
            <p className="bg-red-300 py-1 text-red-800  rounded-md mt-1 font-medium ">{formik.errors.name}</p>
            ):("")}
         </div>
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

        <div className="re-password mb-3">
            <input
             type="password"
              placeholder="re-password"
              className="form-control w-full px-2 py-1 rounded-md border-2 border-gray-500 border-opacity-50 focus:outline-none focus:border-blue-500" 
             name="rePassword"
              onBlur={formik.handleBlur}
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            
              />
                 {formik.errors.rePassword  && formik.touched.rePassword?(            
            <p className="bg-red-300 py-1 text-red-800  rounded-md mt-1 font-medium ">{formik.errors.rePassword}</p>
            ):("")}
        </div>

        <div className="phone mb-3">
            <input 
            type="phone"
             placeholder="phone"
              className="form-control w-full px-2 py-1 rounded-md border-2 border-gray-500 border-opacity-50 focus:outline-none focus:border-blue-500"
             name="phone"
              onBlur={formik.handleBlur}
            value={formik.values.phone}
            onChange={formik.handleChange}
              
              />
               {formik.errors.phone  && formik.touched.phone?(            
            <p className="bg-red-300 py-1 text-red-800  rounded-md mt-1 font-medium ">{formik.errors.phone}</p>
            ):("")}
        </div>
         <button type="submit" className="btn bg-blue-500 w-full text-white bg-blue-500 disabled:bg-red-600 hover:bg-blue-700 " disabled={!(formik.isValid&&formik.dirty)}>sign up</button>
    </form>
    
    </div>
    </>
}