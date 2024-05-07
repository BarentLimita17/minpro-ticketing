import fs from 'fs'

export const DeletedUploadedFiles = (files: any) => {
    if (files) {
        const uploadedBannerUrl = Array.isArray(files) ? files : files['bannerurl'];
        if (Array.isArray(uploadedBannerUrl)) {
            uploadedBannerUrl.forEach((file: any) => {
                fs.rmSync(file.path)
            })
        }
        const uploadedThumbnailUrl = Array.isArray(files) ? files : files['thumbnailurl'];
        if (Array.isArray(uploadedThumbnailUrl)) {
            uploadedThumbnailUrl.forEach((file: any) => {
                fs.rmSync(file.path)
            })
        }
    }
}