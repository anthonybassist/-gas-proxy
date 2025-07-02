
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    try {
      const gasUrl = "https://script.google.com/macros/s/AKfycbymmNaLDzdxxhsQp69z5LUqiMlqeycD-LA_3vhmBSyLRPUJHQvbUucavQIjkk0bGu6uMQ/exec";

      const response = await fetch(gasUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body)
      });

      const result = await response.json();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ result: "error", message: err.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
