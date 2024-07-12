import { extract } from "@extractus/article-extractor";
import * as cheerio from "cheerio";

const elCaribeUrl =
  "https://www.elcaribe.com.do/panorama/internacionales/precio-dolar-paralelo-y-dolar-bcv-en-venezuela-10-de-julio-de-2024/";

const extractDollarData = async (url) => {
  const articleData = await extract(elCaribeUrl);
  const htmlContent = articleData.content;
  return parseHtmlForDollarData(htmlContent);
};

const parseHtmlForDollarData = (htmlContent) => {
  const $ = cheerio.load(htmlContent);
  const strongList = $("strong");

  const strongsContent = [];
  strongList.each((i, strong) => {
    strongsContent.push($(strong).text());
  });

  return {
    dolarToday: strongsContent[0],
    monitor: strongsContent[1],
    bcv: strongsContent[2],
  };
};

export const updateDollarPrice = async (req, res) => {
  try {
    const { dolarToday, monitor, bcv } = await extractDollarData(elCaribeUrl);
    res.send(
      `<ul><li>Dolar Today: ${dolarToday}</li><li>Monitor: ${monitor}</li><li>BCV: ${bcv}</li></ul>`
    );
  } catch (error) {
    return res.json(error.message);
  }
};
