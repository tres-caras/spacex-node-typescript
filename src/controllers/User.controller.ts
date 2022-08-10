import User,{ IUser } from '../models/User.model';
interface ICreateUserInput {
    email: IUser['email'];
    firstName: IUser['firstName'];
    lastName: IUser['lastName'];
}
export default async ({email,firstName,lastName}: ICreateUserInput): Promise<IUser> => {
    return User.create({email,firstName,lastName})
              .then((data: IUser) => {
                return data;
              })
              .catch((error: Error) => {
                throw error;
              });
}
