'use client'
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createPromotionSchema } from "@/schema/CreatePromotionSchema";
import { useGetPromotionDetails } from "@/hooks/events/useGetPromotionDetails";
import { useUpdatePromotion } from '@/hooks/events/useUpdatePromotion';
import { IUpdatePromotionModal } from './types';

export const UpdatePromotionModal = ({ visible, onClose, promotionId }: IUpdatePromotionModal) => {
    const [isLoading, setIsLoading] = useState(false)
    const { dataPromotionDetails } = useGetPromotionDetails(promotionId)
    const { mutationUpdatePromotion } = useUpdatePromotion(dataPromotionDetails?.eventId as number, promotionId as number);
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
                        Promotion
                    </div>
                    <div className="text-center text-gray-700">Create Your Promotion Here</div>
                    <Formik
                        initialValues={{
                            name: dataPromotionDetails?.name,
                            code: dataPromotionDetails?.code,
                            description: dataPromotionDetails?.description,
                            discount: dataPromotionDetails?.discount,
                            quantity: dataPromotionDetails?.quantity,
                            validityDate: dataPromotionDetails?.validityDate
                        }}
                        validationSchema={createPromotionSchema}
                        onSubmit={(values, { resetForm }) => {
                            setIsLoading(true)
                            mutationUpdatePromotion({
                                name: values.name,
                                code: values.code,
                                description: values.description,
                                discount: Number(values.discount),
                                quantity: Number(values.quantity),
                                validityDate: values.validityDate,
                                promotionId: promotionId
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
                                            <span className="label-text font-bold text-black">Promotion Name</span>
                                        </label>
                                        <Field name="name" type="text" className="border border-gray-700 bg-gray-300 p-2 rounded text-black" placeholder="E.g., PROMO ABC" />
                                        <ErrorMessage name="name" component="div" className="text-red-500" />
                                        <label className="label">
                                            <span className="label-text font-bold text-black">Promotion Code</span>
                                        </label>
                                        <Field name="code" type="text" className="border border-gray-700 bg-gray-300 p-2 rounded text-black" placeholder="E.g., ABC777" />
                                        <ErrorMessage name="code" component="div" className="text-red-500" />
                                        <label className="label">
                                            <span className="label-text font-bold text-black">Promotion Description</span>
                                        </label>
                                        <Field name="description" type="text" className="border border-gray-700 bg-gray-300 p-2 rounded text-black" placeholder="E.g., Secret Promo for limited time ... " />
                                        <ErrorMessage name="description" component="div" className="text-red-500" />
                                        <label className="label">
                                            <span className="label-text font-bold text-black">Promotion Discount (in %)</span>
                                        </label>
                                        <Field name="discount" type="text" className="border border-gray-700 bg-gray-300 p-2 rounded text-black" placeholder="E.g., 10" />
                                        <ErrorMessage name="discount" component="div" className="text-red-500" />
                                        <label className="label">
                                            <span className="label-text font-bold text-black">Promotion Quantity</span>
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