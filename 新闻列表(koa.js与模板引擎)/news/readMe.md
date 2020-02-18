##总结##  
1、静态文件注意路径，app.use(Static(_dirname+"./static")),由于路径static已经拼接上，模板html里css、js文件路径写static后路径即可  
2、ctx.url即为请求的url,通过url模块的url.parse()可得到参数。objPath.query.p为字符串类型。  
3、模板nunjucks里的内容好难写，参考文档https://nunjucks.bootcss.com/templating.html