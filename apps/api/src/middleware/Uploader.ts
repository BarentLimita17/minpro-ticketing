import { Request, Response, NextFunction } from "express";
import { multerUpload } from "../helpers/Multer";
import { DeletedUploadedFiles } from "../helpers/DeletedUploadedFiles";

export const Uploader = (req: Request, res: Response, next: NextFunction) => {
    const upload = multerUpload.fields([{ name: 'thumbnailurl', maxCount: 1 }, { name: 'bannerurl', maxCount: 1 }]);

    upload(req, res, (err) => {
        try {
            if (err) throw new Error(err.message);
            if (req.files) {
                const uploadedBannerUrl = Array.isArray(req.files) ? req.files : req.files['bannerurl'];
                const uploadedThumbnailUrl = Array.isArray(req.files) ? req.files : req.files['thumbnailurl'];
                if (Array.isArray(uploadedBannerUrl)) {
                    uploadedBannerUrl.forEach((file: any) => {
                        if (file.size > (5 * 1024 * 1024)) throw new Error(`File ${file.originalname} is too large`)
                    })
                }
                if (Array.isArray(uploadedThumbnailUrl)) {
                    uploadedThumbnailUrl.forEach((file: any) => {
                        if (file.size > (5 * 1024 * 1024)) throw new Error(`File ${file.originalname} is too large`)
                    })
                }
            }
            next();
        } catch (error: any) {
            DeletedUploadedFiles(req.files)
            next({
                status: 400,
                message: error.message
            })
        }
    });
}