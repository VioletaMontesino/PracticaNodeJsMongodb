import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);
export default User;