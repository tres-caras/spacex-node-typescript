import { AppDataSource } from "../data-source";
import { Favorite } from "../entity/Favorite";
import { User } from "../entity/User";

export const favor = AppDataSource.getRepository(Favorite);
export const userr = AppDataSource.getRepository(User);

export const saveFavorite = async (req: Request, res: Response) => {
    throw new Error("Method not implemented.");
  };