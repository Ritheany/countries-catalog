// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flag,flags,cca2,cca3,altSpellings,idd"
    );
    const finalRes = await response.json();
    if (finalRes.length) {
      res.json({
        message: "Successfully",
        data: finalRes,
        status: 200,
      });
    }
  } catch (error) {
    console.log("error : ", error);
    res.json({ message: "Failed", status: 500 });
  }
}
