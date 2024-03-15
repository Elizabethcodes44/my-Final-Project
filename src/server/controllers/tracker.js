import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const jwtSecret = process.env.JWT_SECRET;


const getAllTrackers = async (req, res) => {
  const trackers = await prisma.tracker.findMany({
    include: {
        user: true,
      },
  });

  res.json({ data: trackers });
};

const createTracker = async (req, res) => {
  const { weight, bloodPressure, fetalMovements,feelings } = req.body;

  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: "Unauthorized: Missing Token" });
    }

    const token = authHeader.split(" ")[1];
    console.log("this is the token line 24:",token);
    const verifyToken = async (token, secret) => {
      try {
        const result = await jwt.verify(token, secret);
        return result;
      } catch (error) {
        console.log(error.message);
        throw new Error("Invalid token");
      }
    };

    try {
      const tokenVerified = await verifyToken(token, jwtSecret);
        console.log("token verified:", tokenVerified)
      if (tokenVerified) {
        const createdTracker = await prisma.tracker.create({
          data: {
            weight,
            bloodPressure,
            fetalMovements,
            feelings
          },
          include: {
            user: true,
          },
        });

        res.json({ data: createdTracker });
      } else {
        return res.status(401).json({ error: "Invalid token provided." });
      }
    } catch (error) {
      res
        .status(401)
        .json({ error: error.message || "Invalid token provided." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

export { getAllTrackers, createTracker };
