export default async function handler(req, res) {
  const response = await fetch("https://script.google.com/macros/s/AKfycbyzade6XP3SjWegBj9F4038GB0xHV2mr2nYuTvhm60E205LCcLdJg-EbZYLIrEhCm_Jh/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  });

  const result = await response.json();
  res.status(200).json(result);
}
add proxy.js
