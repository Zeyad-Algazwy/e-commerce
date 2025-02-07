

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ColorRing } from 'react-loader-spinner';

export default function Login() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup
      .string()
      .min(3, "Password must be at least 3 characters")
      .max(12, "Password cannot exceed 12 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values);
        setIsSuccess(true);
        formik.resetForm();
        setTimeout(() => navigate("/products"), 2000);
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
      <h2 className="text-center text-white">Login Now</h2>
      {isSuccess && (
        <div className="p-4 mb-4 text-green-800 bg-green-100 rounded-lg">
          Welcome back! Login successful.
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