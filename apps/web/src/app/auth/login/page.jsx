'use client'
import { Formik,Form,Field } from "formik"
import {useAuthLogin} from "../../hooks/auth/useAuthLogin"
export default function LoginPage() {
    const{mutationAuth}= useAuthLogin()
    return (   
        <>
             <Formik
                initialValues={{
                    email:"",
                    password:""

                }}
                onSubmit={(values) => {
                    console.log(values)
                    mutationAuth({
                        email: values.email, 
                        password: values.password
                    })

                }}
        >
            <Form>
            <div className='flex flex-col items-center px-5 py-10 pt-[100px] gap-3'>
                            <div className='w-[500px]'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Email Account</span>
                                    </div>
                                    <Field type="text" name='email' placeholder="Type Email" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className='w-[500px]'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Password Account</span>
                                    </div>
                                    <Field type="text" name='password' placeholder="Type Password" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <button className='btn bg-indigo-500 text-white w-[500px]'>
                                Signin
                            </button>
                        </div>
            </Form>
        </Formik>
        </>  
    )
    }

// 'use client'
// import { Formik, Form, Field } from "formik";
// import { useAuthMutation } from "../../../api/useAuthMutation";
// import { useAuthLogin } from "../../hooks/auth/useAuthLogin";

// useAuthMutation
// export default function LoginPage() {

//     const { mutationAuth } = useAuthLogin()
//     return (
//         <>
//             <Formik
//                 initialValues={{
//                     email: '',
//                     password: '',
//                 }}
//                 onSubmit={(values) => {
//                     mutationAuth({
//                         email: values.email,
//                         password: values.password,
//                     })
//                 }}
//             >
//                 <Form>
//                     <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
//                         <div className="mb-8 text-center">
//                             <h1 className="my-3 text-4xl font-bold">Sign in</h1>
//                             <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
//                         </div>
//                         < div noValidate="" action="" className="space-y-12">
//                             <div className="space-y-4">
//                                 <div>
//                                     <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
//                                     <Field type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
//                                 </div>
//                                 <div>
//                                     <div className="flex justify-between mb-2">
//                                         <label htmlFor="password" className="text-sm">Password</label>
//                                         <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
//                                     </div>
//                                     <Field type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
//                                 </div>
//                             </div>
//                             <div className="space-y-2"> 
//                                     <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
//                                 <p className="px-6 text-sm text-center dark:text-gray-600">Dont have an account yet?
//                                     <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign up</a>.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </Form>
//             </Formik>
//         </>
//     )
// }