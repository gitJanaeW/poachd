const {readFile} = require("fs");
import Image from "../../../server/models/Image";
// import defaultPic from "../../public/images/profile-photo.jpg";

const getBinImg = () => {
    console.log(defaultPic);
    readFile("../../public/images/profile-photo.jpg", (err, data) => {
        if (err) throw err;
        const defaultPic = new Image({
            alt: "a cartoon, sunny-side egg on yellow background",
            image: data
        });
        console.log("IMAGE RETURNED: ", image);
        image.save((err, image) => {
            if (err) throw err;
            console.log("Image saved successfully");
        })
    });

    return image;
};

module.exports = getBinImg;