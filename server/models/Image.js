const {Schema, model} = require("mongoose");

const ImageSchema = new Schema({
    alt: {
        type: String,
        required: true,
        default: "Image of recipe"
    },
    image: {
        type: Buffer,
        // required: true // needed?
    }
});

const Image = model("Image", ImageSchema);
module.exports = Image;