// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  try {
    const { page = 1, limit = 5 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flag,flags,cca2,cca3,altSpellings,idd"
    );
    const jsonData = await response.json();
    if (jsonData.length) {
      const resultCounties = jsonData.slice(startIndex, endIndex);
      res.json({
        message: "Successfully",
        data: resultCounties,
        page: page,
        totalPages: jsonData.length / limit,
        limit: limit,
        status: 200,
      });
    }
  } catch (error) {
    console.log("error : ", error);
    res.json({ message: "Failed", status: 500 });
  }
}
