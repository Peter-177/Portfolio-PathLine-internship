import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import process from "node:process";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || true,
  }),
);
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));



const myProjectsList = [
  {
    id: 1,
    title: "MemoryGame",
    category: "Games",
    url: "https://peter-177.github.io/Memory-Game/",
    img: "/images/Memory.png",
  },
  {
    id: 2,
    title: "Todo-list",
    category: "Web",
    url: "https://peter-177.github.io/To-do-List/",
    img: "/images/Todo.png",
  },
  {
    id: 3,
    title: "FAQs",
    category: "Web",
    url: "https://peter-177.github.io/FAQs-frontend-mentor/",
    img: "/images/FAQs.png",
  },
];



app.get("/projects", (req, res) => {
  const { category } = req.query;

  if (!category) {
    return res.json(myProjectsList);
  }

  const foundProjects = myProjectsList.filter((project) => project.category === category);

  res.json(foundProjects);
});



const myEmailSender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res
        .status(500)
        .json({ success: false, error: "Email transport not configured" });
    }

    await myEmailSender.sendMail({
      from: email,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.json({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

const port = Number(process.env.PORT) || 5000;
app.listen(port, () => {
  console.log("Server running");
});
