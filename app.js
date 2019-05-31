const express = require('express');
const cherrio = require('cheerio');
const http = require('http');
const router = express.Router();
const fs = require('fs');
const superagent = require('superagent');
const cookie = 'SESSION=MmQ0NzZlMjAtMTk4Ni00MmQyLWE3ZmItOTU0NWRhODg1ZjZi';
const app = express();
app.get('/buyNum', (req, res) => {
    superagent
        .post("http://fa8.yxh94.com/ct-data/userBets/buy")
        .set({
            "Cookie": cookie,
            "Origin": "http://www.yxh94.com",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Referer": "http://www.yxh94.com/home/index.html",
            "X-Requested-With": "XMLHttpRequest",
            "Connection": "keep-alive",
            "cache-control": "no-cache",
            "Postman-Token": "cef5da75-f853-4a86-928d-56ff49290a52"

        })
        .send(req.query)
        .end(function (err, response) {
            if (err) {
                throw err;
            }
            res.end(response.text);
            //do something
        })
});
app.get('/getOpenDataList', (req, res) => {
    superagent
        .post("http://fa8.yxh94.com/ct-data/openCodeList")
        .set({
            "Cookie": cookie,
            "Origin": "http://www.yxh94.com",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Referer": "http://www.yxh94.com/home/index.html",
            "X-Requested-With": "XMLHttpRequest",
            "Connection": "keep-alive",
            "cache-control": "no-cache",
            "Postman-Token": "43538a34-6955-446c-a7bc-40ee85afc29a"
        })
        .send(req.query)
        .end(function (err, response) {
            if (err) {
                throw err;
            }
            res.end(response.text);
            //do something
        })
});

const server = app.listen(8082, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('应用实例，访问地址为 http://%s:%s', host, port);
});