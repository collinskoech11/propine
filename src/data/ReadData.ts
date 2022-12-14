import { Converter } from "csvtojson/v2/Converter";

const csvFilePath = require("./transactions.csv").Converter; // Resource.csv in your case
const csv = require("csvtojson"); // Make sure you have this line in order to call functions from this modules
var converter = new Converter({});
var converterFilter = new Converter({});
const getData = () => {
    converter.fromFile(csvFilePath, function (err: any, result: any) {
      if (err) {
        console.log(err);
      } else {
        return result;
      }
    });
};
export default getData;
