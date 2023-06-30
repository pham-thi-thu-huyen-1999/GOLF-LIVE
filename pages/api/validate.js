import axios from 'axios'
import { convertXML } from "simple-xml-to-json"

export default async function handler(req, res) {
  const { method, body } = req;
  let respon = {}
  console.log(body.data)
  switch (method) {
    case "POST":
      respon = await axios({
        method,
        url: `https://ui8828.igxv2.net/${body.mode}.aspx`,
        // url: `https://ui3388.igxv2api888.net/${body.mode}.aspx`,
        headers: {
          "Content-Type": 'multipart/form-data'
        },
        data: body.data,
      }).then((res) => {
        console.log("res", res)
        let xml = convertXML(res.data)
        res = xml
        return res
      }).catch(function (error) {
        return error
      })
      break;
    default:
      break;
  }

  res.status(200).send(respon)
}