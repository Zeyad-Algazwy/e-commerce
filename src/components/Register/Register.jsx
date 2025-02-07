
// import { useState } from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const navigate = useNavigate();

//   const validationSchema = yup.object().shape({
//     name: yup
//       .string()
//       .required("Name is required")
//       .matches(/^[A-Z][a-z]{4,8}$/, "Name must start with a capital letter and be between 5 to 9 characters"),
//     email: yup.string().email("Invalid email format").required("Email is required"),
//     phone: yup
//       .string()
//       .required("Phone number is required")
//       .matches(/^(20)?01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),
//     password: yup
//       .string()
//       .min(6, "Password must be at least 6 characters")
//       .max(12, "Password cannot exceed 12 characters")
//       .required("Password is required"),
//     rePassword: yup
//       .string()
//       .required("Confirm password is required")
//       .oneOf([yup.ref("password")], "Passwords do not match"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       phone: "",
//       password: "",
//       rePassword: "",
//       email: "",
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const response = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values);
//         setIsSuccess(true);
//         setTimeout(() => navigate('/login'), 2000);
//       } catch (error) {
//         setErrorMessage(error.response?.data?.message || "Something went wrong");
//         setTimeout(() => setErrorMessage(null), 2000);
//       }
//     },
//   });

//   return (
//     <div className="p-5">
//       <h2 className="text-center text-white">Registration</h2>
//       {isSuccess && <div className="p-4 mb-4 text-green-800 bg-green-100 rounded-lg">Congratulations! Registration successful.</div>}
//       {errorMessage && <div className="p-4 mb-4 text-red-800 bg-red-100 rounded-lg">{errorMessage}</div>}
//       <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
//         {['name', 'email', 'phone', 'password', 'rePassword'].map((field) => (
//           <div className="mb-5" key={field}>
//             <label htmlFor={field} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//               {field.charAt(0).toUpperCase() + field.slice(1)}
//             </label>
//             <input
//               name={field}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values[field]}
//               type={field.includes("password") ? "password" : "text"}
//               id={field}
//               className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
//               placeholder={field}
//             />
//             {formik.touched[field] && formik.errors[field] && <div className="text-red-500 text-sm">{formik.errors[field]}</div>}
//           </div>
//         ))}
//         <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2.5 rounded-lg">Submit</button>
//       </form>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ColorRing } from 'react-loader-spinner';

// export default function Register() {
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const navigate = useNavigate();

//   const validationSchema = yup.object({
//     name: yup
//       .string()
//       .required("Name is required")
//       .matches(/^[A-Z][a-z]{4,8}$/, "Name must start with a capital letter and be between 5 to 9 characters"),
//     email: yup.string().email("Invalid email format").required("Email is required"),
//     phone: yup
//       .string()
//       .required("Phone number is required")
//       .matches(/^(20)?01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),
//     password: yup
//       .string()
//       .min(6, "Password must be at least 6 characters")
//       .max(12, "Password cannot exceed 12 characters")
//       .required("Password is required"),
//     rePassword: yup
//       .string()
//       .required("Confirm password is required")
//       .oneOf([yup.ref("password")], "Passwords do not match"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       password: "",
//       rePassword: "",
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values);
//         setIsSuccess(true);
//         setTimeout(() =>
//         navigate("/login"), 2000);
//       } catch (error) {
//         setErrorMessage(error.response?.data?.message || "Something went wrong");
//         setTimeout(() => setErrorMessage(null), 2000);
//       }
//     },
//   });

//   return (
//     <div className="p-5">
//       <h2 className="text-center text-white">Registration</h2>
//       {isSuccess && <div className="p-4 mb-4 text-green-800 bg-green-100 rounded-lg">Congratulations! Registration successful.</div>}
//       {errorMessage && <div className="p-4 mb-4 text-red-800 bg-red-100 rounded-lg">{errorMessage}</div>}
      
//       <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
//         {Object.keys(formik.initialValues).map((field) => (
//           <div className="mb-5" key={field}>
//             <label htmlFor={field} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//               {field.charAt(0).toUpperCase() + field.slice(1)}
//             </label>
//             <input
//               id={field}
//               name={field}
//               type={field.includes("password") ? "password" : "text"}
//               value={formik.values[field]}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
//               placeholder={field}
//             />
//             {formik.touched[field] && formik.errors[field] && (
//               <div className="text-red-500 text-sm">{formik.errors[field]}</div>
//             )}
//           </div>
//         ))}
//         <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2.5 rounded-lg">
//           Submit
//           <ColorRing
//   visible={true}
//   height="40"
//   width="40"
//   ariaLabel="color-ring-loading"
//   wrapperStyle={{}}
//   wrapperClass="color-ring-wrapper"
//   colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
//   />

//         </button>
//       </form>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ColorRing } from 'react-loader-spinner';

// export default function Register() {
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // Add loading state
//   const navigate = useNavigate();

//   const validationSchema = yup.object({
//     name: yup
//       .string()
//       .required("Name is required")
//       .matches(/^[A-Z][a-z]{4,8}$/, "Name must start with a capital letter and be between 5 to 9 characters"),
//     email: yup.string().email("Invalid email format").required("Email is required"),
//     phone: yup
//       .string()
//       .required("Phone number is required")
//       .matches(/^(20)?01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),
//     password: yup
//       .string()
//       .min(6, "Password must be at least 6 characters")
//       .max(12, "Password cannot exceed 12 characters")
//       .required("Password is required"),
//     rePassword: yup
//       .string()
//       .required("Confirm password is required")
//       .oneOf([yup.ref("password")], "Passwords do not match"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       password: "",
//       rePassword: "",
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       setIsLoading(true); // Set loading to true on submit
//       try {
//         const response = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values);
//         setIsSuccess(true);
//         formik.resetForm(); // Clear the form after successful submission
//         setTimeout(() => navigate("/login"), 2000);
//       } catch (error) {
//         setErrorMessage(error.response?.data?.message || "Something went wrong");
//         setTimeout(() => setErrorMessage(null), 3000); // Increased timeout for error message
//       } finally {
//         setIsLoading(false); // Set loading to false after request completes
//       }
//     },
//   });

//   return (
//     <div className="p-5">
//       <h2 className="text-center text-white">Registration</h2>
//       {isSuccess && <div className="p-4 mb-4 text-green-800 bg-green-100 rounded-lg">Congratulations! Registration successful.</div>}
//       {errorMessage && <div className="p-4 mb-4 text-red-800 bg-red-100 rounded-lg">{errorMessage}</div>}

//       <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
//         {Object.keys(formik.initialValues).map((field) => (
//           <div className="mb-5" key={field}>
//             <label htmlFor={field} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//               {field.charAt(0).toUpperCase() + field.slice(1)}
//             </label>
//             <input
//               id={field}
//               name={field}
//               type={field.includes("password") ? "password" : "text"}
//               value={formik.values[field]}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
//               placeholder={field}
//             />
//             {formik.touched[field] && formik.errors[field] && (
//               <div className="text-red-500 text-sm">{formik.errors[field]}</div>
//             )}
//           </div>
//         ))}
//         <button type="submit" disabled={isLoading} className={`w-full ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'} text-white py-2.5 rounded-lg`}>
//           {isLoading ? (
//             <ColorRing
//               visible={true}
//               height="20" // Smaller spinner
//               width="20"
//               ariaLabel="color-ring-loading"
//               wrapperStyle={{ display: 'inline-block' }} // Adjust wrapper style
//               colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
//             />
//           ) : (
//             "Submit"
//           )}
//         <

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ColorRing } from 'react-loader-spinner';

export default function Register() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[A-Z][a-z]{4,8}$/, "Name must start with a capital letter and be between 3 to 6 characters"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^(20)?01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),
    password: yup
      .string()
      .min(3, "Password must be at least 3 characters")
      .max(12, "Password cannot exceed 12 characters")
      .required("Password is required"),
    rePassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Passwords do not match"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values);
        setIsSuccess(true);
        formik.resetForm();
        setTimeout(() => navigate("/login"), 2000);
      } catch (error) {
        setErrorMessage(error.response?.data?.message || "Something went wrong");
        setTimeout(() => setErrorMessage(null), 3000);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="p-5">
      <h2 className="text-center text-white">Registration</h2>
      {isSuccess && (
        <div className="p-4 mb-4 text-green-800 bg-green-100 rounded-lg">
          Congratulations! Registration successful.
        </div>
      )}
      {errorMessage && (
        <div className="p-4 mb-4 text-red-800 bg-red-100 rounded-lg">
          {errorMessage}
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
        {Object.keys(formik.initialValues).map((field) => (
          <div className="mb-5" key={field}>
            <label
              htmlFor={field}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              id={field}
              name={field}
              type={field.includes("password") ? "password" : "text"}
              value={formik.values[field]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder={field}
            />
            {formik.touched[field] && formik.errors[field] && (
              <div className="text-red-500 text-sm">{formik.errors[field]}</div>
            )}
          </div>
        ))}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"
          } text-white py-2.5 rounded-lg`}
        >
          {isLoading ? (
            <ColorRing
              visible={true}
              height="20"
              width="20"
              ariaLabel="color-ring-loading"
              wrapperStyle={{ display: "inline-block" }}
              colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
            />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}