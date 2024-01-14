import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";

const saltRounds = 10;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, password, phoneNumber } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const createdUser = await prisma.user.create({
        data: {
          email,
          name,
          hashedPassword, 
          phoneNumber,
          role: "ADMIN",
        },
      });

      res.status(201).json({ success: true, data: createdUser });
    } catch (error) {
      console.error("Error adding admin:", error);
      res.status(500).json({ success: false, error: "Error adding admin" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
