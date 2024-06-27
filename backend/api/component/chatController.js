import Prisma from "../lib/prisma.js";


export const getChats = async (req, res) => {
  const token = req.userId;
  console.log(token);
  try {
    // Fetch all chats where the user is a participant
    const chats = await Prisma.chat.findMany({
      where: {
        userIDs: {
          hasSome: [token]
        }
      },
      include: {
        messages: true // Include messages if needed
      }
    });

    for (const chat of chats) {
      // Find the other user in the chat
      const recieverId = chat.userIDs.find((id) => id !== token);

      if (recieverId) {
        // Fetch the unique receiver details
        const uniqueReciever = await Prisma.user.findUnique({
          where: {
            id: recieverId
          },
          select: {
            id: true,
            username: true,
            avatar: true
          }
        });

        // Attach the receiver details to the chat object
        chat.reciever = uniqueReciever;
    
      }
    }

    res.status(200).json({ chats });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getChat = async (req, res) => {
  const token = req.userId;
  try {
    const chat = await Prisma.chat.findUnique({
      where: {
        id: req.params.id,
        userIDs:{
          hasSome:[token]
        },
      },
      include:{
        messages:{
          orderBy:{
            createdAt:"asc"
          },
        },
      },
    })
   await Prisma.chat.update({
    where:{
      id:req.params.id
    },  
    data:{
      seenBy:{
        set:[token]
      },
    },
   })

    res.status(200).json({ message: "chat retrieved successfully" ,chat});
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const addChat = async (req, res) => {
  const token= req.userId;

  try {
    const newChat = await Prisma.chat.create({
      data:{
       userIDs:[token,req.body.recieverId]
      },
    });
    res.status(200).json(newChat);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const readChat = async (req, res) => {
  const token = req.userId;
  try {
    const updateChat = await Prisma.chat.update({
      where:{
        id:req.params.id,
        userIDs:{
          hasSome:[token]
        }
      },
      data:{
          seenBy:{
            set:[token]
          }
      }
    })
    res.status(200).json({ message: "chat retrieved successfully",updateChat });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
