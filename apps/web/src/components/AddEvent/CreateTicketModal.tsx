'use client'
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCreateTicket } from "@/hooks/events/useCreateTicket";
import { ICreateTicketAndPromotionModal } from "./types";
import { useGetEventDetails } from "@/hooks/events/useGetEventDetails";
import { createTicketSchema } from "@/schema/CreateTicketSchema";

export const CreateTicketModal = ({ visible, onClose, eventId }: ICreateTicketAndPromotionModal) => {
    const [isLoading, setIsLoading] = useState(false)
    const { refetchEventDetails } = useGetEventDetails(eventId)
    const { mutationCreateTicket } = useCreateTicket();
    if (!visible) return null;

    const handleOnClose = (e: any) => {
        if (e.target.id === "container") onClose();
        refetchEventDetails()
    };

    return (
        <>
            <div
                id="container"
                onClick={handleOnClose}
                className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
            >
                <div className="bg-white p-4 rounded-xl w-[500px]">
                    <div className="font-semibold text-center text-xl text-gray-700">
                        Tickets
                    </div>
                    <div className="text-center text-gray-700">Create Your Tickets Here</div>
                    <Formik
                        initialValues={{
                            name: "",
                            description: "",
                            price: "",
                            quantity: "",
                            validityDate: ""
                        }}
                        validationSchema={createTicketSchema}
                        onSubmit={(values, { resetForm }) => {
                            setIsLoading(true)
                            mutationCreateTicket({
                                name: values.name,
                                description: values.description,
                                price: Number(values.price),
                                quantity: Number(values.quantity),
                                validityDate: values.validityDate,
                                eventId: eventId
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
                                            <span className="label-text font-bold text-black">Ticket Name</span>
                                        </label>
                                        <Field name="name" type="text" className="border border-gray-700 bg-gray-300 p-2 rounded text-black" placeholder="E.g., VIP" />
                                        <ErrorMessage name="name" component="div" className="text-red-500" />
                                        <label className="label">
                                            <span className="label-text font-bold text-black">Ticket Description</span>
                                        </label>
                                        <Field name="description" type="text" className="border border-gray-700 bg-gray-300 p-2 rounded text-black" placeholder="E.g., VIP access to all areas " />
                                        <ErrorMessage name="description" component="div" className="text-red-500" />
                                        <label className="label">
                                            <span className="label-text font-bold text-black">Ticket Price</span>
                                        </label>
                                        <Field name="price" type="text" className="border border-gray-700 bg-gray-300 p-2 rounded text-black" placeholder="E.g., 125000" />
                                        <ErrorMessage name="price" component="div" className="text-red-500" />
                                        <label className="label">
                                            <span className="label-text font-bold text-black">Ticket Quantity</span>
                                        </label>
                                        <Field name="quantity" type="text" className="border border-gray-700 bg-gray-300 p-2 rounded text-black" placeholder="E.g., 200" />
                                        <ErrorMessage name="quantity" component="div" className="text-red-500" />
                                        <label className="label">
                                            <span className="label-text font-bold text-black">Valid Until</span>
                                        </label>
                                        <Field name="validityDate" type="date" className="border border-gray-700 bg-gray-300 p-2 rounded text-black" placeholder="Select Date" />
                                        <ErrorMessage name="validityDate" component="div" className="text-red-500" />
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
}