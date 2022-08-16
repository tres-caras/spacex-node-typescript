/**
 * This is taking user input to create a new user. 
 * It defines the interface to be used it, that's defined on the ICreateUserInput. 
 * ICreateUserInput interface is just defining the structure of the message, no instance exist (it's an interface!)
 * IUser it's the interface that's used to map it into a mongo document.
 * And finally User, in this case is the User modeled with mongo.
 * 
 * Changing the database source, mongodb -> some relational db
 * IUser using TypeORM
 * TypeORM for User
 */


import User,{ IUser } from '../models/User.model';
interface ICreateUserInput {
    email: IUser['email'];
    firstName: IUser['firstName'];
    lastName: IUser['lastName'];
}
export default async ({email,firstName,lastName}: ICreateUserInput): Promise<IUser> => {
  try {
    const user = await User.create({
      email,
      firstName,
      lastName
    });
    return user;  
  } catch (error) {
    throw error;
  }
}
