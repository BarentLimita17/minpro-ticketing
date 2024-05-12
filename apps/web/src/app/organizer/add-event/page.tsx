'use client'
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useGetCategoryAndLocation } from '@/hooks/events/useGetCategoryAndLocation';
import { useCreateEvent } from '@/hooks/events/useCreateEvent';
import { CreateLocationModal } from '@/components/AddEvent/CreateLocationModal';
import { createEventSchema } from '@/schema/CreateEventSchema';
import Link from 'next/link';

export default function AddEventsPage() {
    const [selectedBannerFiles, setSelectedBannerFiles]: any = useState([])
    const [selectedThumbnaillFiles, setSelectedThumbnailFiles]: any = useState([])
    const { dataLocation, dataCategory }: any = useGetCategoryAndLocation()
    const [showModal, setShowModal] = useState(false);
    const { mutationCreateEvent } = useCreateEvent()
    let createdEventResult: any;

    const onSetBannerFiles = (event: any) => {
        try {
            const acceptedFormat = ['jpg', 'jpeg', 'webp', 'png', 'svg']
            const files = [...event.target.files]

            files.forEach(file => {
                if (!acceptedFormat.includes(file.name.split('.')[file.name.split('.').length - 1])) {
                    throw { message: `${file.name} Format Not Acceptable` }
                }
                if (file.size > (5 * 1024 * 1024)) {
                    throw { message: `${file.name} is too Large! Maximum Filesize is 1Kb` }
                }
            })

            if (files.length > 1) throw { message: `You cannot select more than 1 image` }

            setSelectedBannerFiles(files)
        } catch (error) {
            console.log(error)
        }
    }

    const onSetThumbnailFiles = (event: any) => {
        try {
            const acceptedFormat = ['jpg', 'jpeg', 'webp', 'png', 'svg']
            const files = [...event.target.files]

            files.forEach(file => {
                if (!acceptedFormat.includes(file.name.split('.')[file.name.split('.').length - 1])) {
                    throw { message: `${file.name} Format Not Acceptable` }
                }
                if (file.size > (5 * 1024 * 1024)) {
                    throw { message: `${file.name} is too Large! Maximum Filesize is 1Kb` }
                }
            })

            if (files.length > 1) throw { message: `You cannot select more than 1 image` }

            setSelectedThumbnailFiles(files)
        } catch (error) {
            console.log(error)
        }
    }

    if (dataCategory === undefined || dataLocation === undefined) <div>Loading...</div>

    return (
        <>
            <CreateLocationModal visible={showModal} onClose={() => setShowModal(false)} />
            <div className="bg-[#fbfbfb] min-h-screen ">
                <div className="py-[70px] mx-[20px] lg:mx-[300px]">
                    <div className="flex flex-col text-start gap-2 mt-0 lg:mt-[50px] mb-[20px]">
                        <div className="text-[35px] pl-[30px] font-bold text-[#002744]">
                            Create Event
                        </div>
                    </div>
                    <div className="card w-full bg-gray-300 text-primary-content shadow-2xl hover:shadow-[#d8ecff]">
                        <div className="card-body">
                            <Formik
                                initialValues={{
                                    name: '',
                                    date: '',
                                    startTime: '',
                                    endTime: '',
                                    description: '',
                                    termsAndConditions: '',
                                    locationId: '',
                                    categoryId: '',
                                    userUid: 'clvi4ghqz0001mbv5iohu4138',
                                }}
                                validationSchema={createEventSchema}
                                onSubmit={async (values, { resetForm }) => {
                                    try {
                                        const fd = new FormData();
                                        fd.append('data', JSON.stringify({
                                            name: values.name,
                                            date: values.date,
                                            startTime: values.startTime,
                                            endTime: values.endTime,
                                            description: values.description,
                                            termsAndConditions: values.termsAndConditions,
                                            locationId: values.locationId,
                                            categoryId: values.categoryId,
                                            userUid: 'clvi4ghqz0001mbv5iohu4138'
                                        }));
                                        fd.append('bannerurl', selectedBannerFiles[0]);
                                        fd.append('thumbnailurl', selectedThumbnaillFiles[0]);

                                        createdEventResult = await mutationCreateEvent(fd);

                                        setSelectedBannerFiles([])
                                        setSelectedThumbnailFiles([])
                                        resetForm();

                                    } catch (error) {
                                        console.error('Error during form submission:', error);

                                    }
                                }}
                            >
                                {({ dirty, isValid }) => {
                                    return (
                                        <>
                                            <Form>
                                                <div className='flex gap-3'>
                                                    <div className="form-control w-[50%]">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-black">Name</span>
                                                        </label>
                                                        <Field type="text" name="name" placeholder="Event Name" className="input input-bordered bg-[#f3f3f3]" />
                                                        <ErrorMessage name="name" component="div" className="text-red-500" />
                                                    </div>
                                                    <div className="form-control w-[50%]">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-black">Category</span>
                                                        </label>
                                                        <Field as="select" id='categoryId' defaultValue="" name="categoryId" className="input input-bordered bg-[#f3f3f3]" >
                                                            <option disabled value="">Choose Category</option>
                                                            {
                                                                dataCategory?.map((category: any) => {
                                                                    return (
                                                                        <option key={category.id} value={category.id}>{category.name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </Field>
                                                        <ErrorMessage name="categoryId" component="div" className="text-red-500" />
                                                    </div>
                                                </div>
                                                <div className='flex gap-3 mt-[10px]'>
                                                    <div className="form-control w-[50%]">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-black">Location</span>
                                                        </label>
                                                        <Field component="select" id='locationId' defaultValue="" name="locationId" className="input input-bordered bg-[#f3f3f3]" >
                                                            <option disabled value="">Choose Location</option>
                                                            {
                                                                dataLocation?.map((location: any) => {
                                                                    return (
                                                                        <option key={location.id} value={location.id}>{location.name}, {location.details}</option>
                                                                    )
                                                                })
                                                            }
                                                        </Field>
                                                        <ErrorMessage name="locationId" component="div" className="text-red-500" />
                                                    </div>
                                                    <div className="form-control w-[50%]">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-black">No Targeted Location?</span>
                                                        </label>
                                                        <div onClick={() => setShowModal(true)} className="btn btn-success text-white">
                                                            Click Here to Create
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-3 mt-[10px]'>
                                                    <div className="form-control w-[50%]">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-black">Date</span>
                                                        </label>
                                                        <div className="relative w-full">
                                                            <Field type="date" name="date" className="input input-bordered bg-gray-400 w-full text-black" />
                                                            <ErrorMessage name="date" component="div" className="text-red-500" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-3 mt-[10px]'>
                                                    <div className="form-control w-[50%]">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-black">Start Time</span>
                                                        </label>
                                                        <div className="w-full">
                                                            <Field type="time" name="startTime" className="input input-bordered bg-gray-400 w-full text-black" />
                                                            <ErrorMessage name="startTime" component="div" className="text-red-500" />
                                                        </div>
                                                    </div>
                                                    <div className="form-control w-[50%]">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-black">End Time</span>
                                                        </label>
                                                        <div className="relative w-full">
                                                            <Field type="time" name="endTime" className="input input-bordered bg-gray-400 w-full text-black" />
                                                            <ErrorMessage name="endTime" component="div" className="text-red-500" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-control mt-[10px]">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-black">Description</span>
                                                    </label>
                                                    <Field as="textarea" name="description" placeholder="Description" className="input input-bordered bg-[#f3f3f3] h-[300px]" />
                                                    <ErrorMessage name="description" component="div" className="text-red-500" />
                                                </div>
                                                <div className="form-control mt-[10px]">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-black">Terms and Conditions</span>
                                                    </label>
                                                    <Field as="textarea" name="termsAndConditions" placeholder="Terms and Conditions" className="input input-bordered bg-[#f3f3f3] h-[300px]" />
                                                    <ErrorMessage name="termsAndConditions" component="div" className="text-red-500" />
                                                </div>
                                                <div className='flex gap-3 mt-[10px]'>
                                                    <div className='w-[50%]'>
                                                        <label className='form-control w-full'>
                                                            <div className='label'>
                                                                <span className='label-text font-bold text-black'>Select Banner Image</span>
                                                            </div>
                                                            <input
                                                                type="file"
                                                                accept="image/*"
                                                                onChange={(event) => onSetBannerFiles(event)}
                                                                placeholder="You can't touch this"
                                                                className="file-input file-input-bordered w-full text-[#f3f3f3]"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className='w-[50%]'>
                                                        <label className='form-control w-full'>
                                                            <div className='label'>
                                                                <span className='label-text font-bold text-black'>Select Thumbnail Image</span>
                                                            </div>
                                                            <input
                                                                type="file"
                                                                accept="image/*"
                                                                onChange={(event) => onSetThumbnailFiles(event)}
                                                                placeholder="You can't touch this"
                                                                className="file-input file-input-bordered w-full text-[#f3f3f3]"
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-control mt-6">
                                                    <Link href={`/organizer/add-event/${createdEventResult.id}/add-ticketpromotion`}>
                                                        <button disabled={!(dirty && isValid)} className="btn btn-primary">Save</button>
                                                    </Link>
                                                </div>
                                            </Form>
                                        </>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}