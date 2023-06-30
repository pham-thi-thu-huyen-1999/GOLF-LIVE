import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import axios from 'axios'

export default async function handler(req, res) {
  const requestMethod = req.method;
  axios({
    method: requestMethod,
    url: 'https://ui8828.igxv2.net/signup.aspx',
    // url: 'https://ui3388.igxv2api888.net/signup.aspx',
    headers: {
      "Content-Type": 'multipart/form-data'
    },
    data: req.body,
    transformResponse: [(data) => {
      return data;
  }]
  }).then((res) => {
    return res
  }).catch(function (error) {
    return error
  })
  res.status(200).send("success")
}