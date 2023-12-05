// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const finalRes = await response.json();
    if (finalRes.length) {
      res.status(200).json({
        message: "Successfully",
        data: finalRes,
        status: 200,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed", status: 500 });
  }
}
