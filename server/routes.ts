import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    const resumePath = path.join(__dirname, "..", "public", "Resume_Senior_Data_Engineer_1753900296996.pdf");
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Ankur_Kumar_Resume.pdf"');
    
    res.sendFile(resumePath, (err) => {
      if (err) {
        console.error("Error sending resume file:", err);
        res.status(404).json({ message: "Resume file not found" });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
