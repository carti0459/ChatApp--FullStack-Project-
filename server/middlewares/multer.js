import multer from "multer";


const multerUpload = multer({
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    },
});

const singleAvatar = multerUpload.single("avatar");

export { singleAvatar };