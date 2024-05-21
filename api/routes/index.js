import express from "express";
import path from "path";

export const router = express.Router();

router.get(/^\/$|\/index(.html)?/, (req, res) => {
  // Resolve the directory path relative to the current module file
  const __dirname = path.dirname(new URL(import.meta.url).pathname);

  // Build an absolute path to the file using Node.js `file://` protocol
  const filePath = path.join(__dirname.slice(1), "..", "views", "index.html");

  // Send the file
  res.sendFile(filePath);
});
