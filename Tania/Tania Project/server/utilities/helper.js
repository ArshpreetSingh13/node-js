const cloudinary = require("cloudinary").v2;
// tania
// cloudinary.config({
//     cloud_name: "dkr9o3gwy",
//     api_key: "625278581972514",
//     api_secret: "vooKLqg4i_wAOWQu6nMM2FU5cfs",
//     secure: true,
//     cdn_subdomain: true,
// });


// Arsh
cloudinary.config({
    cloud_name: "dd9ipyppz",
    api_key: "963944345251742",
    api_secret: "HtfdTyRDuIw4GCaeeZ0Cs2lTgr8",
    secure: true,
    cdn_subdomain: true,
});




const uploadImg = async (fileBuffer, publicId) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                public_id: publicId,
                resource_type: "auto"
            },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.secure_url);
                }
            }
        ).end(fileBuffer);
    });
};




module.exports = { uploadImg }