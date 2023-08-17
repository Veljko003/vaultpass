import UserSchema from '@/api/db/schemas/UserSchema.js'
import mongoose from 'mongoose';

const User = mongoose.model('User', UserSchema);

export default User;
