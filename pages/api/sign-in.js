import axios from 'axios'
import { convertXML } from "simple-xml-to-json"
import { publicIpv4 } from 'public-ip';

export default async function handler(req, res) {
  const { method, query, body } = req;
  let country = ""
  const { address } = body
  console.log("address", body.address)
  await axios({
    url: `http://ip-api.com/json/${address}`
  }).then((res) => {
    console.log("res", res)
    country = res.data.countryCode
  }).catch(function (error) {
    console.log(error)
  })
  console.log("country", country)
  const respon = await axios({
    method,
    url: 'https://ui8828.igxv2.net/login.aspx',
    // url: 'https://ui3388.igxv2api888.net/login.aspx',
    headers: {
      "Content-Type": 'multipart/form-data'
    },
    data: { ...body.data, country },
  }).then((res) => {
    console.log("res", res)
    let xml = convertXML(res.data)
    res = xml
    return res
  }).catch(function (error) {
    console.log(error)
    return error
  })

  res.status(200).send(respon)
}
