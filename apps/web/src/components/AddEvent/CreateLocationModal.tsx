'use client'
import { useState } from "react";
import { ICreateLocationModal } from "./types";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCreateLocation } from "@/hooks/locations/useCreateLocation";
import { createLocationSchema } from "@/schema/CreateLocationSchema";

export const CreateLocationModal = ({ visible, onClose }: ICreateLocationModal) => {
    const [isLoading, setIsLoading] = useState(false)

    const { mutationCreateLocation } = useCreateLocation();
    if (!visible) return null;

    const handleOnClose = (e: any) => {
        if (e.target.id === "container") onClose();
    };

    return (
        <>
            <div
                id="container"
                onClick={handleOnClose}
                className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
            >
                <div className="bg-white p-4 rounded w-[500px]">
                    <div className="font-semibold text-center text-xl text-gray-700">
                        Create Location
                    </div>
                    <div className="text-center text-gray-700">Start by making your own concert location now!</div>
                    <Formik
                        initialValues={{
                            name: "",
                            city: "",
                            details: "",
                            street: "",
                            zipCode: ""
                        }}
                        validationSchema={createLocationSchema}
                        onSubmit={(values) => {
                            setIsLoading(true)
                            mutationCreateLocation({
                                name: values.name,
                                city: values.city,
                                details: values.details,
                                street: values.street,
                                zipCode: values.zipCode
                            })
                        }}
                    >
                        {({ dirty, isValid }) => {
                            return (
                                <Form>
                                    <div className="flex flex-col">
                                        <label className="label">
                                            <span className="label-text font-bold text-black">Name</span>
                                        </label>
                                        <Field name="name" type="text" className="border border-gray-700 p-2 rounded text-black" placeholder="E.g., Jakarta Convention Center" />
                                        <ErrorMessage name="name" component="div" className="text-red-500" />
                                        <label className="label">
                                            <span className="label-text font-bold text-black">City</span>
                                        </label>
                                        <Field name="city" type="text" className="border border-gray-700 p-2 rounded text-black" placeholder="E.g., Jakarta" />
                                        <ErrorMessage name="city" component="div" className="text-red-500" />
                                        <label className="label">
                                            <span className="label-text font-bold text-black">Details</span>
                                        </label>
                                        <Field name="details" type="text" className="border border-gray-700 p-2 rounded text-black" placeholder="E.g., Plenary Hall" />
                                        <ErrorMessage name="details" component="div" className="text-red-500" />
                                        <label className="label">
                                            <span className="label-text font-bold text-black">Street</span>
                                        </label>
                                        <Field name="street" type="text" className="border border-gray-700 p-2 rounded text-black" placeholder="E.g., JL. Gatot Subroto ..." />
                                        <ErrorMessage name="street" component="div" className="text-red-500" />
                                        <label className="label">
                                            <span className="label-text font-bold text-black">Zip Code</span>
                                        </label>
                                        <Field name="zipCode" type="text" className="border border-gray-700 p-2 rounded text-black" placeholder="E.g., 12345" />
                                        <ErrorMessage name="zipCode" component="div" className="text-red-500" />
                                    </div>
                                    <div className="text-center">
                                        <button disabled={!(dirty && isValid) || isLoading} type="submit" className="px-5 py-2 bg-gray-700 text-white rounded mt-5">
                                            Create
                                        </button>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </>
    );
};