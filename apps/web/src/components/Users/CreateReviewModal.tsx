'use client'
import { useState } from "react";
import { ICreateReviewModal } from "./types";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCreateReview } from "@/hooks/reviews/useCreateReview";
import { CreateReviewSchema } from "@/schema/CreateReviewSchema";

export const CreateReviewModal = ({ visible, onClose, transactionId, eventId }: ICreateReviewModal) => {
    const [isLoading, setIsLoading] = useState(false)
    const { mutationCreateReview } = useCreateReview();

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
                        Create Review
                    </div>
                    <div className="text-center text-gray-700">Write Your Experience Here!</div>
                    <Formik
                        initialValues={{
                            rating: '',
                            feedback: '',
                            suggestion: '',
                            eventId: '',
                            transactionId: '',
                            userUid: ''
                        }}
                        validationSchema={CreateReviewSchema}
                        onSubmit={(values, { resetForm }) => {
                            setIsLoading(true)
                            mutationCreateReview({
                                rating: Number(values.rating),
                                feedback: values.feedback,
                                suggestion: values.suggestion,
                                eventId: eventId,
                                transactionId: transactionId,
                                userUid: 'clw3rc2u700011163aislktlf'
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
                        {({ dirty }) => {
                            return (
                                <Form>
                                    <div className="flex flex-col">
                                        <label className="label">
                                            <span className="label-text font-bold text-black">Rate</span>
                                        </label>
                                        <Field name="rating" type="text" className="border border-gray-700 p-2 rounded text-black" placeholder="Enter your rating (1-5)" />
                                        <ErrorMessage name="rating" component="div" className="text-red-500" />
                                        <label className="label">
                                            <span className="label-text font-bold text-black">Feedback</span>
                                        </label>
                                        <Field name="feedback" as="textarea" className="border border-gray-700 p-2 rounded text-black" placeholder="Enter your feedback here" />
                                        <ErrorMessage name="feedback" component="div" className="text-red-500" />
                                        <label className="label">
                                            <span className="label-text font-bold text-black">suggestion</span>
                                        </label>
                                        <Field name="suggestion" as="textarea" className="border border-gray-700 p-2 rounded text-black" placeholder="Enter your suggestion here" />
                                        <ErrorMessage name="suggestion" component="div" className="text-red-500" />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="px-5 py-2 bg-gray-700 text-white rounded mt-5">
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