import express, { Request, Response, NextFunction } from "express";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from public directory (for resume, etc.)
app.use(express.static(path.join(process.cwd(), "public")));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      console.log(logLine);
    }
  });

  next();
});

// Register your API routes here
// app.use("/api", yourRoutes)

const distPath = path.join(process.cwd(), "dist", "client");
app.use(express.static(distPath));

// catch-all for client-side routing
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const port = parseInt(process.env.PORT || "3000", 10);
const host = process.env.HOST || "0.0.0.0";

app.listen(port, host, () => {
  console.log(`🚀 Server running at http://${host}:${port}`);
});
