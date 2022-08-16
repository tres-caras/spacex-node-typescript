import createUser from "../controllers/User.controller";
import getPaginatedLaunches from "../services/Launches.service";
import { RoutesInput } from "../types/types";
export default ({ app }: RoutesInput) => {
  app.get("/launches", async (req, res) => {
      const limit = parseInt(req.query.limit as string) || 10;
      const page = parseInt(req.query.page as string) || 1;
      try {
        const launches = await getPaginatedLaunches(limit, page);
      res.send(launches);
      } catch(error) {
        res.status(400).send("An error ocurred, try it later!");
      }
    });

  app.post("/api/user", async (req, res) => {
    try {
      const user = await createUser({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      });
      return res.send({ user });
    } catch (error) {
      res.status(500).send(error);
    }
  });
};
