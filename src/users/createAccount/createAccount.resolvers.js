import client from "../../client.js"
import bcrypt from "bcrypt"

export default {
    Mutation: {
      createAccount: async (
        _,
        { firstName, lastName, username, email, password }
      ) => {
        try {
          const existingUser = await client.user.findFirst({
            where: {
              OR: [
                {
                  username,
                },
                {
                  email,
                },
              ],
            },
          });
          if (existingUser) {
            throw new Error("This username/password is already taken.");
          }
          const uglyPassword = await bcrypt.hash(password, 10);
          return client.user.create({
            data: {
              firstName,
              lastName,
              username,
              email,
              password: uglyPassword,
            },
          });
        } catch (e) {
          return e;
        }
      },
    }
}