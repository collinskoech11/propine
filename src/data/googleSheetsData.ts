import { GoogleSpreadsheet } from "google-spreadsheet";
import request from "request"
import XLSX from "xlsx"
const API_KEY = ''
const SHEET_ID = process.env.SHEET_ID

const doc = new GoogleSpreadsheet(SHEET_ID)
doc.useApiKey(API_KEY)
const getData = () => {
    let sheet;
    const fileURL =
  "https://docs.google.com/spreadsheets/d/1oDZaNNxLgIBGPOuVhrIZWphIffMS0EpUU1p4SQJGyqw/edit#gid=1179367319";

request.get(fileURL, { encoding: null }, function (err, res, data) {
  if (err || res.statusCode != 200) {
    console.log(res.statusCode);
    return;
  }
  const buf = Buffer.from(data);
  const workbook = XLSX.read(buf);

  var sheet1 = workbook.Sheets[workbook.SheetNames[0]];
//   var sheet2 = workbook.Sheets[workbook.SheetNames[1]];
//   console.log(XLSX.utils.sheet_to_json(sheet1));
//   console.log(XLSX.utils.sheet_to_json(sheet2));
  sheet = XLSX.utils.sheet_to_json(sheet1)
  console.log(sheet)
});
return sheet;
}
export default getData;
// timestamp	transaction_type	token	amount
