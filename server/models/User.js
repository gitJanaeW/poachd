const {Schema, model} = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
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
        min: 5
    },
    description: {
        type: String,
        max: 280
    },
    style: [{
        type: String
    }],
    subscribed: {
        type: Boolean,
        required: true,
        default: false
    },
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }],
    collectionList: [{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: this
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: this
    }]
});

UserSchema.pre("save", async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltsRound = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

UserSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const User = model("User", UserSchema);
module.exports = User;