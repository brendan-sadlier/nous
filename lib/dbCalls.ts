import prisma from "./db";

export default async function getUserFromDB(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      profileImage: true,
      role: true,
    }
    });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}