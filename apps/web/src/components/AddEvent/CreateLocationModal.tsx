'use client'
import { useState } from "react";
import { ICreateModal } from "./types";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCreateLocation } from "@/hooks/locations/useCreateLocation";
import { createLocationSchema } from "@/schema/CreateLocationSchema";
import { useGetCategoryAndLocationQuery } from "@/api/useGetCategoryAndLocationQuery";
import Link from "next/link";

export const CreateLocationModal = ({ visible, onClose }: ICreateModal) => {
    const [isLoading, setIsLoading] = useState(false)
    const { refetchLocation } = useGetCategoryAndLocationQuery()

    const { mutationCreateLocation } = useCreateLocation();
    if (!visible) return null;

    const handleOnClose = (e: any) => {
        if (e.target.id === "container") onClose();
        refetchLocation()
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
                            zipCode: "",
                            latitude: "",
                            longitude: ""
                        }}
                        validationSchema={createLocationSchema}
                        onSubmit={(values, { resetForm }) => {
                            setIsLoading(true)
                            mutationCreateLocation({
                                name: values.name,
                                city: values.city,
                                details: values.details,
                                street: values.street,
                                zipCode: values.zipCode,
                                latitude: parseFloat(values.latitude),
                                longitude: parseFloat(values.longitude)
                            },
                                {
                                    onSuccess: () => {
                                        setIsLoading(false)
                                        resetForm()
                                    },
                                    onError: () => {
                                        setIsLoading(false)
                                    }
                                }
                            )
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
                                        <div className="flex justify-between">
                                            <div className="flex flex-col">
                                                <label className="label">
                                                    <span className="label-text font-bold text-black">Latitude</span>
                                                </label>
                                                <Field name="latitude" type="text" className="w-[170px] border border-gray-700 p-2 rounded text-black" placeholder="E.g., 37.7749" />
                                                <ErrorMessage name="latitude" component="div" className="text-red-500" />
                                            </div>
                                            <Link className="flex items-center" target="_blank" href="https://www.google.co.id/maps">
                                                <div className="flex justify-center items-center hover:text-blue-600 mt-[30px] text-center text-black">
                                                    Find Yours?
                                                </div>
                                            </Link>
                                            <div className="flex flex-col">
                                                <label className="label">
                                                    <span className="label-text font-bold text-black">Longitude</span>
                                                </label>
                                                <Field name="longitude" type="text" className="w-[170px] border border-gray-700 p-2 rounded text-black" placeholder="E.g., -122.4194" />
                                                <ErrorMessage name="longitude" component="div" className="text-red-500" />
                                            </div>
                                        </div>
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