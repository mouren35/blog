// hotNews.js
// 动态生成热门文章列表
const HotNewsTitles = [
  "科技网红为国外开发者索要中国手机源码？",
  "惹恼开源社区！微软道歉：恢复 .NET SDK 热重载功能",
  "AWS强烈反击Elastic，欲打造自己的Elasticsearch开源产品OpenSearch",
  "Windows 11正式版终于发布，最低配置要求来了",
  "年薪高达115万元，Rust成2021年最赚钱的编程语言",
  "AWS强烈反击Elastic，欲打造自己的Elasticsearch开源产品OpenSearch",
  "Windows 11正式版终于发布，最低配置要求来了",
  "AWS强烈反击Elastic，欲打造自己的Elasticsearch开源产品OpenSearch",
  "Windows 11正式版终于发布，最低配置要求来了",
  "Windows 11正式版终于发布，最低配置要求来了",
  "AWS强烈反击Elastic，欲打造自己的Elasticsearch开源产品OpenSearch",
  "Windows 11正式版终于发布，最低配置要求来了",
];

window.addEventListener("DOMContentLoaded", function () {
  const HotNewsList = document.getElementById("HotNewsList");
  if (HotNewsList) {
    for (let i = 0; i < HotNewsTitles.length; i++) {
      const HotNewsTitle = HotNewsTitles[i];
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = HotNewsTitle;
      li.appendChild(a);
      HotNewsList.appendChild(li);
    }
  }
});

// 动态生成最新文章列表
const newsTitles = [
  "学校软件太烂怎办？",
  "今天碰到一个阿里p8，终于知道了别人为什么这么强，算是见识到了基础的天花板",
  "大厂程序员接私活被坑， 还被放鸽子，那源码就开源-基于SSM仿知乎小程序",
  "linux查找命令,文件就这些which,whereis,locate,find,grep,|",
  "企业快速开发平台Spring Cloud+Spring Boot+Mybatis+ElementUI 实现前后端分离",
  "人vs机器，你更爱哪个互动？",
  "上千部安卓手机被感染新闻间谍软件",
  "你能在一家公司做满15年吗？",
  "上千部安卓手机被感染新闻间谍软件",
  "你能在一家公司做满15年吗？",
];

window.addEventListener("DOMContentLoaded", function () {
  const newsList = document.getElementById("newsList");
  if (newsList) {
    for (let i = 0; i < newsTitles.length; i++) {
      const newsTitle = newsTitles[i];
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = newsTitle;
      li.appendChild(a);
      newsList.appendChild(li);
    }
  }
});
