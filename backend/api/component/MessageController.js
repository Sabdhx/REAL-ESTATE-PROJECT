import Prisma from "../lib/prisma.js";

export const addMessage = async (req, res) => {
  const token = req.userId;
  const text = req.body.text;
  const chatId = req.params.chatId;
  try {
    const uniqueChat = await Prisma.chat.findUnique({
      where: {
        id: chatId,
        userIDs: {
          hasSome: [token]
        },
      },
    });
    console.log(uniqueChat);
    if (!uniqueChat) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const newMessage = await Prisma.messages.create({
      data: {
        text,
        ChatId: chatId, // Ensure this matches the schema field name
        userId: token
      }
    });
    console.log(newMessage); // Log the new message to see if it's created successfully

    await Prisma.chat.update({
      where: {
        id: chatId,
      },
      data: {
        seenBy: [token],
        lastMessage: text
      },
    });
    res.status(200).json(newMessage); // Fix the typo here (was a comma instead of a dot)
  } catch (error) {
    console.error("Error creating message:", error); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" });
  }
};