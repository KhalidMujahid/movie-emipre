import multer from "multer";

const upload = multer({ dest: "./public/assets" });

export default upload;
