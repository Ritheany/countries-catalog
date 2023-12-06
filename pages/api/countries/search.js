// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const { query } = req;
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${query.countryName}?fields=name,flag,flags,cca2,cca3,altSpellings,idd`
    );
    const jsonData = await response.json();
    if (jsonData.length) {
      return res.json({
        message: "Successfully",
        data: jsonData || [],
        status: 200,
      });
    }
  } catch (error) {
    console.log("error : ", error);
    res.json({ message: error.message, data: [], status: 500 });
  }
}
