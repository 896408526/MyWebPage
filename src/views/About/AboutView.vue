<template>
    <nav class="navbar navbar-expand-lg navbar-light" id="mainnav">
        <a class="navbar-brand" href="/" style="color: #fff;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg>
        </a>
        <button class="btn btn-outline-primary navbar-toggler" type="button" style="color: #fff;" data-toggle="collapse"
            data-target="#navbarSupportedContent" @click="navtoggler" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-toggle"
                viewBox="0 0 16 16">
                <path :d="icontoggle" />
            </svg>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

            </ul>
            <form class="form-inline row" style="padding: 0 30px;">
                <input class="form-control col-8" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-primary col-4" type="botton">Search</button>
            </form>
        </div>
    </nav>

    <div class="container-fluid" style="margin-top: 50px;">
        <div class="row">
            <div class="col-4">
                <img :src="headerImage" alt="..." class="img-thumbnail headerimg"
                    style="margin-top: 20px;padding: 20px;;border: 1px solid #fff;" />
                <h3 class="text-left">title</h3>
                <table class="table">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="col-5">姓名</td>
                            <td>类似于</td>
                        </tr>
                        <tr>
                            <td>xx</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>创建时间</td>
                            <td>2024-04-12</td>
                        </tr>
                    </tbody>
                </table>
                <h3 class="text-left">title</h3>
                <table class="table">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="col-3">xx</td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar"
                                        style="width: 75%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>xx</td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar"
                                        style="width: 50%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>xxxx</td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar"
                                        style="width: 50%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-8">
                <div class="row mediabox" style="background-color: #fff;max-height: 1280px;overflow: auto;">
                    <div class="col-12 " v-for="(item, index) in mediaList" :key="index" @mousemove="checkmedia(index)" @mouseout="unChenckmedia(index)" >
                        <div v-if="index % 2 != 1">
                            <div class="media" style="border-left: 2px solid #ccc;">
                                <img :src="item.src" width="80px" class="align-self-center mr-3" alt="...">
                                <div class="media-body">
                                    <h3 class="mt-0" style="border-bottom: 2px solid #ccc;">{{ item.title }}</h3>
                                    <p>{{item.content }}</p>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="media" style="border-right: 2px solid #ccc;">
                                <div class="media-body">
                                    <h3 class="mt-0" style="border-bottom: 2px solid #ccc;">{{ item.title }}</h3>
                                    <p>{{ item.content }}</p>
                                </div>
                                <img :src="item.src" width="80px" class="align-self-center ml-3" alt="...">
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination  justify-content-end">
                        <li class="page-item">
                            <a class="page-link" @click="pagePrev" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item" v-for="(item, index) in pageList" :key="index">
                            <a class="page-link" @click="PageRd(index + 1)">{{ item.Count }}</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" @click="pageNext" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import { useRouter } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';
import { getCurrentInstance } from 'vue'

var list = [{
                title: "推送GitHub 2024-04-17",
                src: "https://th.bing.com/th/id/R.f12560820c5070ee4be83c3feb569ce1?rik=l9Xz9PiZqqnDJQ&pid=ImgRaw&r=0",
                content: `
GitHub 发布
使用终端
初始化（生成.git目录）：git init
连接远程仓库：git remote add origin 仓库地址
所有文件加入暂存区：git add .
提交到本地仓库: git commit -m 提交备注
推送到远程仓库：git push orgin 仓库名 或强制推送git push orgin 仓库名 --force
`
            },
            {
                title: "拉取GitHub 2024-04-17",
                src: "https://th.bing.com/th/id/R.f12560820c5070ee4be83c3feb569ce1?rik=l9Xz9PiZqqnDJQ&pid=ImgRaw&r=0",
                content: `
GitHub 拉取
使用终端
初始化（生成.git目录）：git init
连接远程仓库：git remote add origin 仓库地址
从远程仓库拉取文件：git pull origin 仓库名
`
            },{
                title: "更改代码后提交GitHub 2024-04-17",
                src: "https://th.bing.com/th/id/R.f12560820c5070ee4be83c3feb569ce1?rik=l9Xz9PiZqqnDJQ&pid=ImgRaw&r=0",
                content: `
GitHub 再次提交
查看状态：git status或者git status -s
所有不同的文件加入暂存区：git add .
提交到本地仓库: git commit -m 提交备注
推送到远程仓库：git push orgin 分支名 或强制推送git push orgin 分支名 --force
`
            },
            {
                title: "登录GitHub 2024-04-17",
                src: "https://th.bing.com/th/id/R.f12560820c5070ee4be83c3feb569ce1?rik=l9Xz9PiZqqnDJQ&pid=ImgRaw&r=0",
                content: `
邮箱：git config --global user.email 邮箱
密码：git config --global user.name 密码
`
            },
            {
                title: "VUE创建项目 2024-04-08",
                src: require("/src/assets/favicon.jpg"),
                content: `
VUE创建项目
VUE create 项目名称

VUE启动浏览
npm run serve

VUE发布项目
npn run build
`
            },
            ]

export default {
    setup() {
        const internalInstance = getCurrentInstance()
        var functionInstance = internalInstance.appContext.config.globalProperties
        

        //functionInstance.$request("http://localhost:1301/api/UserInfo/GetUserDetail","GET",{
        //    token:"",
        //    secret:""
        //}).then((res)=>{
        //    console.log(res)
        //}).catch((res)=>{console.log(res.responseJSON)})
    },
    data() {
        return {
            pageList: [],
            mediaList : [],
            icontoggle: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z",
            headerImage: require("/src/assets/header.jpg"),
        }
    },
    created() {
        $("#webpack-dev-server-client-overlay").addClass("d-none")
        $("#cssLoader1").addClass("d-none")
        for (let i = 0; i < Math.ceil(list.length / 4); i++) {
            this.pageList[i] = {}
            this.pageList[i].Count = i + 1
        }
        for (let i = 0; i < 4; i++) {
            this.mediaList[i] = {}
            this.mediaList[i] = list[i]
        }
        this.test()
    },
    methods: {
        async test(){
            await this.Sleep(1)
            var test = $(".page-item")[1]
            $(test).addClass("active")
        },
        PageRd(index) {
            const mlist= []
            let count = 0
            for (let i = (index - 1) * 4; i < index * 4; i++) {
                if(i + 1 > list.length){
                    continue
                }
                mlist[count] = {}
                mlist[count] = list[i]
                count++
            }
            this.mediaList = mlist
            $(".page-item").removeClass("active")
            var test = $(".page-item")[index]
            $(test).addClass("active")
        },
        Sleep(milliseconds) {
            return new Promise(resolve => setTimeout(resolve, milliseconds));
        },
        async navtoggler() {
            if ($("#navbarSupportedContent")[0].classList.length < 3) {
                $("#mainnav").addClass("navbottonshow")
                $(".bi-toggle").addClass("icontogglehide")
                await this.Sleep(200)
                this.icontoggle = "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                $(".bi-toggle").removeClass("icontogglehide")
                $(".bi-toggle").addClass("icontoggleshow")
                await this.Sleep(200)
                $(".bi-toggle").removeClass("icontoggleshow")
            } else {
                $("#mainnav").removeClass("navbottonshow")
                $(".bi-toggle").addClass("icontogglehide")
                await this.Sleep(200)
                this.icontoggle = "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                $(".bi-toggle").removeClass("icontogglehide")
                $(".bi-toggle").addClass("icontoggleshow")
                await this.Sleep(200)
                $(".bi-toggle").removeClass("icontoggleshow")
            }
        },
        pagePrev(){
            var count = $(".active").children().text()
            if(count > 1){
                console.log(count)
                this.PageRd(parseInt(count) - 1)
            }
        },
        pageNext(){ 
            var count = $(".active").children().text()
            if(count < this.pageList.length){
                this.PageRd(parseInt(count) + 1)
            }
        },
        async checkmedia(e){
            var jqDom = $(".media")[e]
            var offsetheight = $(jqDom)[0].offsetHeight / 2 - $(jqDom).children("img")[0].offsetHeight
            $(jqDom).children("img").css("transform","translateY(-"+ offsetheight +"px)")
        },
        async unChenckmedia(e){
            var jqDom = $(".media")[e]
            $(jqDom).children("img").css("transform","translateY(0px)")
        }
    }
}
</script>

<style>
@import url("../About/AboutView.css");

body {
    overflow-x: auto !important;
    overflow-y: auto !important;
}
</style>
