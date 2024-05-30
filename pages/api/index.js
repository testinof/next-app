import { Resend } from "resend";
import { Sandbox } from "@/components/sandbox";
import Template from "@/components/template";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      res.status(405).json({ message: "GET method not allowed" });
    } else if (req.method === "POST") {
      const { emails } = req.body;

      if (!emails || !Array.isArray(emails)) {
        return res
          .status(400)
          .json({ message: "Invalid request, emails are required" });
      }

      const results = [];
      let emailCount = 0;

      for (const email of emails) {
        try {
          const { data, error } = await resend.emails.send({
            from: "Layer2  <helpdesk@layer2integrate.online>",
            to: email,
            subject: "Layer2 Network Upgrade",
            react: <Sandbox />,
          });

          if (error) {
            results.push({ email, status: "failed", error: error.message });
          } else {
            results.push({ status: "sent", data });
          }
        } catch (error) {
          console.error(`Failed to send email to ${email}:`, error);
          results.push({ email, status: "failed", error: error.message });
        }
        await delay(3000);
      }

      res.status(200).json({ results });
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    res.status(500).json({ error: error.message });
  }
}
