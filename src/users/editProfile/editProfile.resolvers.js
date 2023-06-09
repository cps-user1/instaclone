import client from "../../client.js";
import { createWriteStream } from "fs";
import bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils.js";

const resolverFn = async (
    _, 
    { firstName, lastName, username, email, password: newPassword, bio, avatar }, 
    { loggedInUser } 
  ) => {
    /** upload avatar file to storage */
    let avatarUrl = null
    if(avatar) {
      const { filename, createReadStream } = await avatar;
      const newFilename = `${loggedInUser.id}-${Date.now()}-${filename}`;
      const readStream = createReadStream();
      const writeStream = createWriteStream(
        process.cwd() + "/uploads/" + newFilename
      );
      readStream.pipe(writeStream);
      avatarUrl = `http://localhost:4000/static/${newFilename}`;
    }
    
    let uglyPassword = null;
    if (newPassword) {
      uglyPassword = await bcrypt.hash(newPassword, 10);
    }
    /** update data to prisma */
    const updateUser = await client.user.update({
      where: {
        id: loggedInUser.id,
      },
      data: {
        firstName,
        lastName,
        username,
        email,
        bio,
        ...(uglyPassword && { password: uglyPassword }),
        ...(avatarUrl && {avatar: avatarUrl}),
      },
    });

    // send result to typeDefs 
    if (updateUser) {
      return {
        ok: true,
      };
    } else {
      return {
        ok: false,
        error: "Could not update profile",
      };
    }
  }

export default {
  Mutation: {
    editProfile: protectedResolver(resolverFn),
  },
};
