import axios from "axios";
import fs from "fs/promises";
import path from "path";

const emailKey = process.env.NEXT_PUBLIC_EMAIL_VERIFY_API_KEY;

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { emails } = req.body;

      if (!emails || !Array.isArray(emails)) {
        return res
          .status(400)
          .json({ message: "Invalid request, emails are required" });
      }

      const emailPromises = emails.map((email) =>
        axios.get(
          `https://api-bdc.net/data/email-verify?emailAddress=${email}&key=${emailKey}`
        )
      );

      const results = await Promise.all(emailPromises);

      const info = results.map((result) => result.data);

      const filteredInfo = info.filter(
        (email) =>
          email.isValid && !email.isDisposable && email.isMailServerDefined
      );

      // // Optionally, write the new array to a different file
      // const newFilePath = path.resolve("data", "demo_emails.json");
      // await fs.writeFile(
      //   newFilePath,
      //   JSON.stringify(filteredInfo, null, 2),
      //   "utf-8"
      // );

      res.status(200).json({ info: filteredInfo });
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
