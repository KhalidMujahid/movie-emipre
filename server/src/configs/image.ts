import { UploadApiResponse, v2 as cloudinary } from "cloudinary";

const image = async (value: string | any): Promise<string> => {
  return await cloudinary.uploader
    .upload(value, { overwrite: true, invalidate: true, resource_type: "auto" })
    .then((result: UploadApiResponse) => {
      if (result && result.secure_url) {
        return result.secure_url;
      }
    })
    .catch((error: any) => error);
};

export default image;
