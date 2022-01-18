import express from "express";

import { addUser, getUsers } from "../controller/user-controller.js";
import {
  newConversation,
  getConversation,
} from "../controller/conversation-controller.js";
import { newMessage,getMessages } from "../controller/message-controller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/users", getUsers);
router.post("/conversation/add", newConversation);
router.post("/conversation/get", getConversation);
router.post("/message/add",newMessage)
router.get("/messages/get/:id",getMessages)

export default router;
