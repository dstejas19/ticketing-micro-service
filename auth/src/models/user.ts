import mongoose from 'mongoose';
import { Password } from '../services/password';

// An interface that describes the properties to create a new user
interface userAttrs {
  email: string;
  password: string;
}

// An interface that describes the properties that user model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: userAttrs): UserDoc;
}

// An interface that describes the properties that a User document has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

// statics - model level
userSchema.statics.build = (attrs: userAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };