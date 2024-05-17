'use client'
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createTicketSchema } from "@/schema/CreateTicketSchema";
import { useGetTicketDetails } from '@/hooks/events/useGetTicketDetails';
import { useUpdateTicket } from '@/hooks/events/useUpdateTicket';
import { IUpdateTicketModal } from './types';

export const UpdateTicketModal = ({ visible, onClose, ticketId, refetchEventDetails }: IUpdateTicketModal) => {
    const [isLoading, setIsLoading] = useState(false)
    const { dataTicketDetails } = useGetTicketDetails(ticketId)
    const { mutationUpdateTicket } = useUpdateTicket(refetchEventDetails);
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
                <div className="bg-white p-4 rounded-xl w-[500px]">
                    <div className="font-semibold text-center text-xl text-gray-700">
                        Tickets
                    </div>
                    <div className="text-center text-gray-700">Update Your Tickets Here</div>
                    <Formik
                        initialValues={{
                            name: dataTicketDetails?.name,
                            description: dataTicketDetails?.description,
                            price: dataTicketDetails?.price.toString(),
                            quantity: dataTicketDetails?.quantity.toString(),
                            validityDate: dataTicketDetails?.validityDate
                        }}
                        validationSchema={createTicketSchema}
                        onSubmit={(values, { resetForm }) => {
                            setIsLoading(true)
                            mutationUpdateTicket({
                                name: values.name,
                                description: values.description,
                                price: Number(values.price),
                                quantity: Number(values.quantity),
                                validityDate: values.validityDate,
                                ticketId: ticketId
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
                                        <button disabled={!(dirty && isValid) || isLoading} onClick={handleOnClose} type="submit" className="px-5 py-2 bg-gray-700 text-white rounded mt-5">
                                            Update
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