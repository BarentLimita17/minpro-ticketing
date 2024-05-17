import * as Yup from "yup";

export const CreateReviewSchema = Yup.object().shape({
    rating: Yup.number().required("Rating is required").min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
    feedback: Yup.string().required("Feedback is required"),
    suggestion: Yup.string()
})