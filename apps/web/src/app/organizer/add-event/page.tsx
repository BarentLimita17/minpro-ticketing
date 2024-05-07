'use client'
import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { FaClock, FaCalendarAlt } from "react-icons/fa";
import { useGetCategoryAndLocation } from '@/hooks/events/useGetCategoryAndLocation';
import { useCreateEvent } from '@/hooks/events/useCreateEvent';
import { CreateLocationModal } from '@/components/AddEvent/CreateLocationModal';

export default function EventsPage() {
    const [selectedBannerFiles, setSelectedBannerFiles]: any = useState([])
    const [selectedThumbnaillFiles, setSelectedThumbnailFiles]: any = useState([])
    const { dataLocation, dataCategory }: any = useGetCategoryAndLocation()
    const [showModal, setShowModal] = useState(false);
    const { mutationCreateEvent } = useCreateEvent()

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

            setSelectedBannerFiles(files) // Array of Object
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
                    <div className="flex flex-col text-start gap-2 mb-[20px]">
                        <div className="text-[35px] pl-[30px] font-bold text-[#002744]">
                            Create Event
                        </div>
                    </div>
                    <div className="card w-full bg-white text-primary-content shadow-2xl hover:shadow-[#d8ecff]">
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
                                onSubmit={async (values) => {
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

                                        await mutationCreateEvent(fd);

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
                                                    </div>
                                                    <div className="form-control w-[50%]">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-black">Category</span>
                                                        </label>
                                                        <Field as="select" id='categoryId' name="categoryId" className="input input-bordered bg-[#f3f3f3]" >
                                                            {
                                                                dataCategory?.map((category: any) => {
                                                                    return (
                                                                        <option key={category.id} value={category.id}>{category.name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className='flex gap-3 mt-[10px]'>
                                                    <div className="form-control w-[50%]">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-black">Location</span>
                                                        </label>
                                                        <Field component="select" id='locationId' name="locationId" className="input input-bordered bg-[#f3f3f3]" >
                                                            {
                                                                dataLocation?.map((location: any) => {
                                                                    return (
                                                                        <option key={location.id} value={location.id}>{location.name}, {location.details}</option>
                                                                    )
                                                                })
                                                            }
                                                        </Field>
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
                                                            <Field type="date" name="date" className="input input-bordered bg-[#f3f3f3] w-full" />
                                                            <span className="absolute top-0 right-0 flex items-center h-full px-3">
                                                                <FaCalendarAlt />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-3 mt-[10px]'>
                                                    <div className="form-control w-[50%]">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-black">Start Time</span>
                                                        </label>
                                                        <div className="relative w-full">
                                                            <Field type="time" name="startTime" className="input input-bordered bg-[#f3f3f3] w-full" />
                                                            <span className="absolute top-0 right-0 flex items-center h-full px-3">
                                                                <FaClock />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="form-control w-[50%]">
                                                        <label className="label">
                                                            <span className="label-text font-bold text-black">End Time</span>
                                                        </label>
                                                        <div className="relative w-full">
                                                            <Field type="time" name="endTime" className="input input-bordered bg-[#f3f3f3] w-full" />
                                                            <span className="absolute top-0 right-0 flex items-center h-full px-3">
                                                                <FaClock />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-black">Description</span>
                                                    </label>
                                                    <Field as="textarea" name="description" placeholder="Description" className="input input-bordered bg-[#f3f3f3] h-[300px]" />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text font-bold text-black">Terms and Conditions</span>
                                                    </label>
                                                    <Field as="textarea" name="termsAndConditions" placeholder="Terms and Conditions" className="input input-bordered bg-[#f3f3f3] h-[300px]" />
                                                </div>
                                                <div className='flex gap-3 mt-[10px]'>
                                                    <div className='w-full'>
                                                        <label className='form-control w-full'>
                                                            <div className='label'>
                                                                <span className='label-text font-bold text-white'>Select Banner Image</span>
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
                                                    <div className='w-full'>
                                                        <label className='form-control w-full'>
                                                            <div className='label'>
                                                                <span className='label-text font-bold text-white'>Select Thumbnail Image</span>
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
                                                    <button disabled={!(dirty && isValid)} className="btn btn-primary">Save</button>
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