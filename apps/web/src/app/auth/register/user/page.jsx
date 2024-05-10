'use client';
import { Formik, Form, Field } from 'formik'; 
import { useCreateUser } from '../../../../hooks/auth/useCreateUser';
// import {useGetRole} from '../../../../hooks/auth/useGetRole';

export default function RegisterUserPage(){

    const {mutationCreateUser} = useCreateUser()
    
    // console.log(dataShift)
    // console.log(dataShift)
    // console.log(mutationCreateUser)

    return(
        <>
                <Formik
                    initialValues={{
                        email: '', 
                        fullname: '',
                        password: '',
                        code: '',
                        roleId: 1
                    }}

                    onSubmit={(values) => {
                        console.log('onSubmit')
                        mutationCreateUser({
                            email: values.email, 
                            fullname: values.fullname, 
                            password: values.password, 
                            code: values.code,
                            roleId: values.roleId
                        })
                
                    }}
                >
                    <Form>
                        <div className='flex flex-col items-center px-[500px] py-[100px] gap-3'>
                            <div> Customer Registration</div>
                            <div className='w-full'>
                                <label className='form-control w-full'>
                                    <div className='label'>
                                        <span className='label-text'>Email Address</span>
                                    </div>
                                    <Field type='text' name='email' placeholder='Type Email' className='input input-bordered w-full' />
                                </label>
                            </div>
                            <div className='w-full'>
                                <label className='form-control w-full'>
                                    <div className='label'>
                                        <span className='label-text'>FullName</span>
                                    </div>
                                    <Field type='text' name='fullname' placeholder='Type Fullname' className='input input-bordered w-full' />
                                </label>
                            </div>
                            <div className='w-full'>
                                <label className='form-control w-full'>
                                    <div className='label'>
                                        <span className='label-text'>Password</span>
                                    </div>
                                    <Field type='text' name='password' placeholder='Type Password' className='input input-bordered w-full' />
                                </label>
                            </div>
                            <div className='w-full'>
                                <label className='form-control w-full'>
                                    <div className='label'>
                                        <span className='label-text'>Unique Referral Code</span>
                                    </div>
                                    <Field type='text' name='code' placeholder='Type Code' className='input input-bordered w-full' />
                                </label>
                            </div>
                            {/* <div className='w-full'>
                                <label className='form-control w-full'>
                                    <div className='label'>
                                        <span className='label-text'>Role</span>
                                    </div>
                                    <Field component='select' id='roleId' name='roleId' className='select select-bordered w-full'>

                                        <option>Select Role</option>
                                        {
                                            dataRole?.map((role, index) => {
                                                return(
                                                    <option value={role.id} key={index}>{role.name}</option>
                                                )
                                            })
                                        }
                                    </Field>
                                </label>
                            </div> */}
                            <button className='btn bg-indigo-500 text-white w-full'>
                                Create User
                            </button>
                        </div>
                    </Form>
                </Formik>
        </>
    )
}


