import dotenv from "dotenv";
import getPrismaInstance from "../utils/PrismaClient.js";
import { generateToken04 } from "../utils/TokenGeneretor.js";
import crypto from "crypto";
dotenv.config();

export const checkUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({ mesg: "Email is required.", status: false });
    }
    const prisma = getPrismaInstance();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.json({ msg: "User not found", status: false });
    } else {
      return res.json({ msg: "User found", status: true, data: user });
    }
  } catch (err) {
    next(err);
  }
};

export const onBoardUser = async (req, res, next) => {
  try {
    const { email, name, about, mobileNumber, image } = req.body;
    console.log("req body", req.body);
    if (!email || !name || !image || !mobileNumber) {
      return res.status(400).send("Email, Name, Mobile and Image are required");
    }

    // Mobile number validation (example: 10 digits, no special characters)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
      return res
        .status(400)
        .send("Invalid mobile number. It should be 10 digits.");
    }

    const prisma = getPrismaInstance();
    const user = await prisma.user.create({
      data: { email, name, about, profilePicture: image, mobileNumber },
    });
    return res.status(201).json({ msg: "Success", status: true, user });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: "Internal Server Error", status: false, error: err });
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const prisma = getPrismaInstance();
    const users = await prisma.user.findMany({
      orderBy: { name: "asc" },
      select: {
        id: true,
        email: true,
        name: true,
        profilePicture: true,
        about: true,
        mobileNumber: true,
      },
    });
    console.log("get all users", users);
    const usersGroupByInitialLetter = {};

    users.forEach((user) => {
      const initialLetter = user.name.charAt().toUpperCase();
      if (!usersGroupByInitialLetter[initialLetter]) {
        usersGroupByInitialLetter[initialLetter] = [];
      }
      usersGroupByInitialLetter[initialLetter].push(user);
    });
    return res.status(200).send({ users: usersGroupByInitialLetter });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ msg: "Internal Server Error", status: false, error: err });
  }
};

export const generateToken = (req, res, next) => {
  try {
    const appId = parseInt(process.env.ZEGO_APP_ID, 10);
    const serverSecret = process.env.ZEGO_SERVER_SECRET;
    const userId = req.params.userId;
    const effectiveTime = 3600;
    const payload = "";

    if (!appId || !serverSecret || !userId) {
      return res
        .status(400)
        .json({ error: "User id, app id, and server secret are required." });
    }

    const token = generateToken04(
      appId,
      userId,
      serverSecret,
      effectiveTime,
      payload
    );
    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

// export const generateToken = (req, res, next) => {
//   const { roomId, userId } = req.params;
//   console.log("roomid and user id: ", roomId, " ", userId);
//   console.log("Zego App Id: ", process.env.ZEGO_APP_ID);
//   const payload = {
//     app_id: process.env.ZEGO_APP_ID,
//     room_id: roomId,
//     user_id: userId,
//     privilege: { 1: 1, 2: 1 }, // Publish & Subscribe permissions
//     exp: Math.floor(Date.now() / 1000) + 3600, // Expiry 1 hour
//   };

//   const payloadStr = JSON.stringify(payload);
//   const hash = crypto
//     .createHmac("sha256", process.env.ZEGO_SERVER_SECRET)
//     .update(payloadStr)
//     .digest("base64");

//   const token = Buffer.from(`${payloadStr}.${hash}`).toString("base64");

//   return res.status(200).json({ token });
// };
