let http = require("http");
let url = require("url");
let fs = require("fs");
let path = require("path");
let data = require("./data/data.json");
let mime = require("./data/mime.json");
let cheerio = require("cheerio");
http.createServer((req,res) => {
    //此函数接受一个 URL 字符串并返回一个对象。如果第二个参数传递 true，node 会使用 querystring 模块解析查询字符串。
    let objPath = url.parse(req.url,true);   
    //console.log(objPath)
    let pathname = objPath.pathname;
    if(pathname === "/" || pathname === "/news"){
        res.setHeader("Content-type","text/html;charset=utf-8");

        let p= objPath.query.p || 1; //当前页码
        let perPage = 5; //每页数据数目
        let pageData = JSON.parse(JSON.stringify(data)).slice((p-1)*perPage,p*perPage);  // 当前页数据
        let dataCount = data.length;  // 总数据数量
        let pCount = Math.ceil(dataCount / perPage); // 分页数量
        // 组装 html
        let newsListHtml = "";
        pageData.forEach(item => {
            newsListHtml +=`<li class="news">
                <a  href="/detail?id=${item.id}">
                    <img src="${item.imgUrl}" alt="">
                </a>
                <div>
                    <h3>
                        <a href="/detail?id=${item.id}">${item.title}</a>
                    </h3>
                    <div class="info">
                        <span class="tips"><span>${item.from}</span></span>
                        <!-- <span class="line"></span> -->
                        <span class="time">| &nbsp;&nbsp;${item.newTime}</span>
                    </div>
                </div>
            </li>`
        });
        let indexPageData = fs.readFileSync("./view/index.html");  
        let $ = cheerio.load(indexPageData);// 加载index.html 模板

        // 组装分页
        let paginationHtml = p == 1 ? "" : `<a href="/news?p=${p - 1}" class="prev">⌜</a>`;

        for (let i = 1; i <= pCount; i++) {
            paginationHtml += `<a href="/news?p=${i}">${i}</a>`;
        }
        paginationHtml += (p == pCount ? "" : `<a href="/news?p=${p + 1}" class="next">⌝</a>`);
        $(".pagination").html(paginationHtml);
        $(".news-list").html(newsListHtml);
        res.end($.html());
       // console.log(pageData);  
    }else if(pathname === "/detail"){
        res.setHeader("Content-type", "text/html;charset=utf-8");
        let detailData = fs.readFileSync("./view/detail.html");
        let $ = cheerio.load(detailData);

        let objPath = url.parse(req.url,true);
        let id = objPath.query.id;
        let detailDataItemArr = data.filter(item => (item.id === parseInt(id)));

        let detailDataItem = detailDataItemArr[0];
        let contentHtml = `
        <div class="text">
            <h1 class="title">${detailDataItem.title}</h1>
            <div class="article-info"> ${detailDataItem.from} 时间：${detailDataItem.title}</div>
            <p class="content">
            ${detailDataItem.content}
            </p>
        </div>`
        $(".text").html(contentHtml);
        res.end($.html());
    }else{
        if(pathname !== "/favicon.ico" ){
            let extName = path.extname(req.url);
            res.setHeader("Content-type",mime[extName]);
            let extData = fs.readFileSync("."+ req.url);
            res.end(extData);
        }else{
            let extName = path.extname(req.url);
            res.setHeader("Content-type",mime[extName]);
            let favicon = fs.readFileSync("./data/favicon.ico");
            res.end(favicon);
        }
    }
}).listen(4000)   