const mongoose = require("mongoose");
const {Schema} = mongoose;
const Recipe = require("./Recipe");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    subscribed: {
        type: Boolean,
        default: false
    },
    recipes: [Schema.Types.Recipe],
    collection: [Schema.Types.Recipe]
    // id
});

userSchema.pre("save", async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltsRound = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;