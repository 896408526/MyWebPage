<template>

    <nav class="navbar navbar-expand-lg navbar-light" id="mainnav">
        <a class="navbar-brand" href="#">
            <img :src="LogoImage" width="30" height="30" alt="">
        </a>
        <button class="btn btn-outline-primary navbar-toggler" type="button" style="color: #fff;" data-toggle="collapse"
            data-target="#navbarSupportedContent" @click="navtoggler" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-toggle"
                viewBox="0 0 16 16">
                <path :d="icontoggle" />
            </svg>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <form class="form-inline">
            </form>

            <ul class="navbar-nav">
                <li class="nav-item dropdown active">
                    <router-link class="nav-link collapseOptions index" attrId="index" to="#index">主页</router-link>
                    <hr class="nav_hr d-none" style="border: 2px solid #65aad5;margin: 0;" />
                </li>
                <li class="nav-item dropdown">
                    <router-link class="nav-link dropdown-toggle collapseOptions myProject" data-toggle="dropdown"
                        attrId="myProject" to="#myProject">我的项目</router-link>
                    <hr class="nav_hr d-none" style="border: 2px solid #65aad5;margin: 0;" />
                    <div class="dropdown-menu">
                        <ul class="navbar-nav text-right">
                            <li class="nav-item" style="padding-left: 30px;padding-right: 30px;">
                                <a @click="hrefAbout" style="color: #000 !important;" class="rdabout">关于</a>
                                <hr class="nav_hr d-none" style="border: 2px solid #65aad5;margin: 0;" />
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <router-link class="nav-link collapseOptions footer" attrId="footer"
                        to="#footer">尾页</router-link>
                    <hr class="nav_hr d-none" style="border: 2px solid #65aad5;margin: 0;" />
                </li>
                <li class="nav-item dropdown ">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                        支持
                    </a>
                    <div class="dropdown-menu">
                        <img :src="wximage" class="opacityshow" alt="..." style="width: 100%;height: 100%;">
                    </div>
                </li>
                <li>
                    <div>
                        <input type="checkbox" name="language"  />
                    </div>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container-fluid full-screen-div" id="index">
        <div class="indexContent text-white">
            <div class="row">
                <span id="indexTitle" class="bigtitle position-absolute">主页</span>
            </div>
            <div class="jumbotron" style="background-color: rgba(0, 0, 0, 0);">
                <h1>欢迎 {{ times }}</h1>
                <p>已获取功德 ： {{ gdCount }}</p>
                <p><button class="btn btn-primary btn-lg" @click="chaoxiao">点击我</button></p>
            </div>
            <div class="row text-center">
                <div class="col-12">
                    <div class="row">
                        <div class="offset-5 textMuYu">
                        </div>
                    </div>
                    <div class="row" style="margin-top: 70px;">
                        <div class="offset-4 col-4"
                            style="width: 100%;display: flex;justify-content: center;align-items: center; ">
                            <img class="bodyMuYu" :src="bodyMuYuImage" @click="checkMuYu" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid full-screen-div" id="myProject">
        <div class="PageContent">
            <div style="padding-top: 120px;"></div>
            <div class="row">
                <span id="myProjectTitle" class="bigtitle position-absolute">我的项目</span>
            </div>
            <div class="row">
                <div :class="mainClass">
                    <div class="col-12">
                        <div class="row headerstyle">
                            <div :class="headerClass">
                                <img :src="headerImage" alt="..." class="img-circle headerimg"
                                    style="margin-top: 20px;padding: 20px;;border: 1px solid #fff;" />
                            </div>
                        </div>
                        <div class="row">
                            <div :class="bodyClass">
                                <div class="row">
                                    <div v-for="(item, index) in list" :key="index" :class="thumbnailClass"
                                        @click="thumbnailSelect(index)">
                                        <div class="thumbnail">
                                            <div class="thumbnailBody">
                                                <img :src="imgitem.src" alt="..."
                                                    v-for="(imgitem, imgindex) in item.list" :key="imgindex">
                                            </div>
                                            <div class="caption">
                                                <p :style="captionClass" class="captionStyle">
                                                    {{ item.title }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="panelbox">

                    
                    <div class="row bg-light bodyLogin d-none img-thumbnail">
                        <div class="col-12 bg-light loadbox d-none">
                            <div class="row align-items-center" style="padding: 20px;">
                                <strong>加载中...</strong>
                                <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                            </div>
                        </div>
                        <form class="col-12 text-left" style="padding: 20px;">
                            <div class="form-group">
                                <label for="exampleDropdownFormEmail1">邮箱</label>
                                <input type="email" class="form-control" id="exampleDropdownFormEmail1"
                                    placeholder="email@example.com">
                            </div>
                            <div class="form-group">
                                <label for="exampleDropdownFormPassword1">密码</label>
                                <input type="password" class="form-control" id="exampleDropdownFormPassword1"
                                    placeholder="Password">
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="dropdownCheck">
                                    <label class="form-check-label" for="dropdownCheck">
                                        记住我
                                    </label>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary" @click="loginSubmit">登录</button>
                        </form>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-left" href="#">没有账号? 注册一个</a>
                        <a class="dropdown-item text-left" href="#">忘记密码? 修改密码</a>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="accordion" id="accordionExample" role="tablist" aria-multiselectable="true">
                                <div class="accordion-item" v-for="(item, index) in panellist" :key="index">
                                    <div class="card">
                                        <div class="card-header" :id="'heading' + item.id">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left" type="button"
                                                    data-toggle="collapse" :data-target="'#collapse' + item.id">
                                                    {{ item.title }}
                                                </button>
                                            </h2>
                                        </div>
                                        <div :id="'collapse' + item.id" class="collapse"
                                            :aria-labelledby="'heading' + item.id" data-parent="#accordionExample">
                                            <div class="card-body" v-html="item.content">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="text-center" id="footer">
        <div class="container-fluid" style="padding: 0;">
            <div class="row">
                <span id="footerTitle" class="bigtitle position-absolute">尾页</span>
            </div>
            <div class="row" style="padding: 50px;">
                <div class="col-6 col-sm-3" v-for="item in footerlist" :key="item" id="footeritem">
                    <div class="row">
                        <h4 style="overflow: hidden;text-overflow :ellipsis;white-space :nowrap;">{{ item.titile }}
                        </h4>
                    </div>
                    <div class="row text-left footertext">
                        <div style="padding: 0;padding: 6px 0;" :class="item.contentbox"
                            v-for="contentitem in item.list" :key="contentitem" v-html="contentitem.content">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    

    <a class="full-screen-div-top">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up"
            viewBox="0 0 16 16">
            <path
                d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
        </svg>
    </a>

    <a class="full-screen-div-botton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down"
            viewBox="0 0 16 16">
            <path
                d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
        </svg>
    </a>
</template>

<script>
import $ from 'jquery'
import { useRouter } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';

var router
var lockCount = 0
var lockcount = 0
var loginLock = 0
var attrList
var footerlock = 0
var testCount = 0


export default {
    setup() {
        if(sessionStorage.getItem("reload") == "false"){
            location.reload()
            sessionStorage.setItem("reload",true)
        }
        router = useRouter();
        router.beforeEach((to, from) => {
            if (to.hash) {
                ActiveAction(to.hash)
            }
        });

        ActiveAction("index")
        
        function Sleep(milliseconds) {
            return new Promise(resolve => setTimeout(resolve, milliseconds));
        }  

        async function ActiveAction(json) {
            var thisActive = ""
            if (json.substring(0, 1) == "#" || json.substring(0, 1) == ".") {
                thisActive = json.substring(1, json.length)
            } else {
                thisActive = json
            }
            $(".navbar-nav .nav-item").removeClass('active')
            $("." + thisActive).parent().addClass('active')
            $('html, body').stop()
            $('html, body').animate({
                scrollTop: $("#" + thisActive).offset().top
            }, 500);
            $('nav').stop()
            if (attrList.indexOf(thisActive) == 0) {
                $("nav").removeClass("navHide")
                $("nav").addClass("navShow")
            }
            if (attrList.indexOf(thisActive) != 0 && $(".navHide") != null) {
                $("nav").removeClass("navShow")
                $("nav").addClass("navHide")
            }
            lockcount = 0
        }

        $(() => {
            attrList = []
            var list = $(".collapseOptions")
            for (var i = 0; i < list.length; i++) {
                attrList[i] = list[i].attributes.attrid.value
            }

            $(".nav_hr").parent().hover(function () {
                $(this).children("hr").addClass("hrShow")
                $(this).children("hr").removeClass("d-none")
            }, async function () {
                $(this).children("hr").removeClass("hrShow")
                $(this).children("hr").addClass("d-none")
            })

            $("[name='language']").bootstrapSwitch({
                onText:"EN",
                offText:"中文",
                onColor:"primary",
                offColor:"danger",
                size:"small",
                onSwitchChange: async (e,state)=>{
                    if(state){
                        $('html, body').animate({
                            scrollTop: $("#index").offset().top
                        }, 500)
                        await Sleep(500)
                        sessionStorage.setItem("reload",false)
                        router.push("/")
                    }
                }
            })

            $(window).scroll(function (e) {
                fitscroll('#myProject')
                fitscroll('#index') 
                fitscroll('#footer')
            })


            function fitscroll(id) {
                if (id == null) {
                    return
                }
                var divOffsetTop = $(id).offset().top
                var scrollDistance = window.scrollY
                let divPositionInScreen = divOffsetTop - scrollDistance
                let newCount = testCount + divPositionInScreen
                if (newCount < 0) {
                    $(id + 'Title').css('right', -newCount + "px");
                }
            }

            $(".full-screen-div-top").on("click", function (ev) {
                if (lockcount != 0) {
                    return
                }
                lockcount = 1
                var thisName = $(".active").children()[0].attributes.attrid.value
                var nextName = ""
                var nextCount = attrList.indexOf(thisName)
                if (nextCount > 0) {
                    nextName = attrList[nextCount - 1]
                } else {
                    nextName = attrList[0]
                }
                router.replace('#' + nextName).hash
                ActiveAction(nextName)
            })

            $(".full-screen-div-botton").on("click", function (ev) {
                if (lockcount != 0) {
                    return
                }
                lockcount = 1
                var thisName = $(".active").children()[0].attributes.attrid.value
                var nextName = ""
                var nextCount = attrList.indexOf(thisName)
                if (nextCount < attrList.length - 1) {
                    nextName = attrList[nextCount + 1]
                } else {
                    nextName = attrList[attrList.length - 1]
                }

                router.replace('#' + nextName).hash
                ActiveAction(nextName)
            })

            window.addEventListener('wheel', (event) => {
                if (lockcount != 0) {
                    return
                }
                lockcount = 1
                var thisName = $(".active").children()[0].attributes.attrid.value
                var nextName = ""
                var nextCount = attrList.indexOf(thisName)
                if (event.deltaY < 0) {
                    if (nextCount > 0) {
                        nextName = attrList[nextCount - 1]
                    } else {
                        nextName = attrList[0]
                    }

                } else {
                    if (nextCount < attrList.length - 1) {
                        nextName = attrList[nextCount + 1]
                    } else {
                        nextName = attrList[attrList.length - 1]
                    }
                }
                router.replace('#' + nextName).hash
                ActiveAction(nextName)
            });
        })
    },
    data() {
        return {
            times: "",
            icontoggle: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z",
            wximage: require("/src/assets/wx.jpg"),
            LogoImage: require("/src/assets/logo.jpg"),
            bodyMuYuImage: require("/src/assets/my.png"),
            headerImage: require("/src/assets/header.jpg"),
            gdCount: sessionStorage.getItem("count") == null ? 0 : Number(sessionStorage.getItem("count")),
            panelbox: "row",
            panellist: [],
            headerClass: "col-12",
            thumbnailClass: "col-6 col-sm-3",
            captionClass: "text-align:center",
            bodyClass: "offset-3 col-6",
            mainClass: "col-12",
            list: [{
                title: "转换",
                list: [{
                    src: require("/src/assets/ichange.png"),
                }]
            },
            {
                title: "项目",
                list: [{
                    src: require("/src/assets/iproject.png"),
                }]
            },
            {
                title: "日志",
                list: [{
                    src: require("/src/assets/ilogs.png"),
                }]
            },
            {
                title: "关于",
                list: [{
                    src: require("/src/assets/iabout.jpg"),
                }]
            },
            ],
            footerlist : [],
        }
    },
    created() {
        this.getTimes()
        $("#cssLoader1").addClass("d-none")
        $("#backTopName").text("返回顶部")
        footerlock = 0
        
    },
    mounted() {
        window.addEventListener("scroll",this.footershow)
    },
    beforeDestroy() {
        window.removeEventListener("scroll",this.footershow)
    },
    methods: {
        async footershow(){
            this.footershow = this.footershow.bind(this)
            var navName = $(".active").children()[0].attributes.attrid.value
            if(footerlock != 0){
                return
            }
            footerlock = 1
            if(navName == "footer"){
                var list=  [
                {
                    titile: "联系我",
                    contentbox: "col-12",
                    list: [{
                        content: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"/>
                                </svg>
                        <span>上海市宝山区祁华路1702B</span>
                        `
                    },
                    {
                        content: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                        <span>(86) 133 7729 3543</span>
                        `
                    },
                    {
                        content: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                            </svg>
                        <span>896408526@qq.com</span>
                        `
                    },
                    {
                        content: `
                        <a class="badge badge-primary" href="https://github.com/896408526?tab=repositories" >GitHub</a>
                        <a class="badge badge-danger" href="https://gitee.com/lin20230731">Gitee</a>
                        `
                    }

                    ]
                },
                {
                    titile: "点击数最多",
                    contentbox: "col-6",
                    list: [{
                        content: `
                        <span>Business</span>
                        `
                    },
                    {
                        content: `
                        <span>Business</span>
                        `
                    },
                    {
                        content: `
                        <span>Business</span>
                        `
                    },
                    {
                        content: `
                        <span>Business</span>
                        `
                    },
                    {
                        content: `
                        <span>Business</span>
                        `
                    },
                    {
                        content: `
                        <span>Business</span>
                        `
                    },
                    ]
                },
                {
                    titile: "帮助",
                    contentbox: "col-12",
                    list: [{
                        content: `
                        <span class="footerhelp">主页</span>
                        `
                    },
                    {
                        content: `
                        <span class="footerhelp">项目</span>
                        `
                    },
                    {
                        content: `
                        <span class="footerhelp">尾页</span>
                        `
                    },
                    ]
                },
                {
                    titile: "通讯",
                    contentbox: "col-12",
                    list: [{
                        content: `
                        <span>立即注册以获取最新更新。</span>
                        `
                    },
                    {
                        content: `
                        <input type="text" class="form-control" />
                        `
                    },
                    {
                        content: `
                        <button class="btn btn-primary">订阅</button>
                        `
                    },
                    ]
                }
                ]
                for (let i = 0; i < list.length; i++) {
                    this.footerlist[i] =  list[i]
                    await this.Sleep(800)
                }    
                $(".footerhelp").on("click", (e) => {
                    var text = e.target.innerText
                    text = text.replace(text[0], text[0].toLowerCase());
                    router.replace('#' + text).hash
                    ActiveAction(text)
                })
            }
        },
        async navtoggler() {
            if ($("#navbarSupportedContent")[0].classList.length < 4) {
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
        getTimes() {
            setInterval(this.getTimesInterval, 1000);
        },
        getTimesInterval() {
            let year = new Date().getFullYear();
            let month = new Date().getMonth() + 1;
            let day = new Date().getDate();
            let hours = new Date().getHours();
            let minutes = new Date().getMinutes();
            let seconds = new Date().getSeconds();
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            //拼接格式化当前时间
            this.times = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
        },
        async thumbnailSelect(e) {
            $(".bodyLogin").addClass("d-none")
            if (e == 0) {
                if (lockCount != 0) {
                    return
                }
                lockCount = 1
                this.panellist = []
                if (this.mainClass != "col-12") {
                    await this.change(1)
                } else {
                    await this.change(0)
                }
            }
            if (e == 1) {
                if (lockCount != 0) {
                    return
                }
                lockCount = 1
                await this.change(0)
                this.panellist = [{
                    id: "one",
                    title: "工程云接口文档",
                    content: ` 网址 : http://epm.marketho.cn/swagger
                        这是一个使用ASP.NET Dynamic Data技术实现的网页，使用ASP.NET WebApi技术作为接口`
                },
                {
                    id: "two",
                    title: "微信云后台网页",
                    content: `网址 : http://182.92.110.42
                        这是一个使用layui框架完成的后台网页
                        `
                },
                {
                    id: "three",
                    title: "微信云接口文档",
                    content: `http://182.92.110.42/swagger
                        这是使用ASP.NET WebApi实现的接口，引用swachedule包实现接口文档的显示`
                },
                ]
                this.showOpacity($(".accordion"))
            }
            if (e == 2) {
                if (lockCount != 0) {
                    return
                }
                lockCount = 1
                await this.change(0)
                this.panellist = [{
                    id: "one",
                    title: "素材库",
                    content: `
                        <p>VUE : https://cn.vuejs.org</p>
                        <p>Pexels : https://www.pexels.com</p>
                        <p>Bootstrap摄影 : https://www.bootstrapmb.com</p>
                        `
                },
                ]
                this.showOpacity($(".accordion"))
            }
            if (e == 3) {
                if (lockCount != 0) {
                    return
                }
                lockCount = 1
                await this.change(0)
                this.panellist = []
                if (sessionStorage.getItem("token") == null) {
                    $(".bodyLogin").removeClass("d-none")

                } else {
                    this.change(2)
                }
            }
        },
        async change(index) {
            if (index == 0) {
                this.list = [{
                    title: "转换",
                },
                {
                    title: "项目",
                },
                {
                    title: "日志",
                },
                {
                    title: "关于",
                },
                ]
                this.bodyClass = "col-12"
                this.thumbnailClass = "col-12"
                this.captionClass = "text-align:left"
                if (this.mainClass == "col-12") {
                    $(".thumbnail").parent().parent().addClass("opacityshow")
                    $(".thumbnail").addClass("lefttanimate")
                    $(".headerstyle").addClass("lefttanimate")
                    await this.Sleep(2000)
                    $(".thumbnail").parent().parent().removeClass("opacityshow")
                    $(".thumbnail").removeClass("lefttanimate")
                    $(".headerstyle").removeClass("lefttanimate")
                }
                this.panelbox = "col-8"
                this.mainClass = "col-4"
            }
            else if (index == 1) {
                this.mainClass = "col-12"
                this.panelbox = "row",
                    $(".thumbnail").parent().parent().addClass("opacityhide")
                $(".thumbnail").addClass("righttanimate")
                $(".headerstyle").addClass("righttanimate")
                await this.Sleep(2000)
                $(".thumbnail").parent().parent().removeClass("opacityhide")
                $(".thumbnail").removeClass("righttanimate")
                $(".headerstyle").removeClass("righttanimate")
                this.thumbnailClass = "col-6 col-sm-3"
                this.bodyClass = "offset-3 col-6"
                this.captionClass = "text-align:center"
                this.list = [{
                    title: "转换",
                    list: [{
                        src: require("/src/assets/ichange.png"),
                    }]
                },
                {
                    title: "项目",
                    list: [{
                        src: require("/src/assets/iproject.png"),
                    }]
                },
                {
                    title: "日志",
                    list: [{
                        src: require("/src/assets/ilogs.png"),
                    }]
                },
                {
                    title: "关于",
                    list: [{
                        src: require("/src/assets/iabout.jpg"),
                    }]
                },
                ]
            }
            else if (index == 2) {
                sessionStorage.setItem("reload",false)
                router.push("/about")
            }
            lockCount = 0
        },
        async loginSubmit() {
            if (loginLock != 0) {
                return
            }
            loginLock = 1
            $(".loadbox").removeClass("d-none")
            await this.Sleep(2000)
            $(".loadbox").addClass("d-none")
            $(".bodyLogin").addClass("d-none")
            this.change(2)
            sessionStorage.setItem("token", uuidv4())
        },
        async showOpacity(jqdocutement) {
            $(jqdocutement).addClass("opacityshow")
            await this.Sleep(2000)
            $(jqdocutement).removeClass("opacityshow")
        },
        footerClick(e) {
        },
        Sleep(milliseconds) {
            return new Promise(resolve => setTimeout(resolve, milliseconds));
        },
        async checkMuYu() {
            this.gdCount += 1
            sessionStorage.setItem("count", this.gdCount)
            $(".textMuYu").append("<p class='p_MuYu'>功德 + 1</p>")
            await this.Sleep(2000)
            $(".p_MuYu")[0].remove()
        },
        async chaoxiao() {
            var leftNumber = Math.floor(Math.random() * 100);
            var topNumber = Math.floor(Math.random() * 100);
            var srcNumber = Math.floor(Math.random() * 2);
            var srcName = ""
            if (srcNumber == 1) {
                srcName = require("/src/assets/hhhhh2.jpg")
                this.yingxiao(0)
            } else {
                srcName = require("/src/assets/hhhhh.png")
                this.yingxiao(1)
            }
            $("#app").append(`
                <img src="`+ srcName + `" style="left:` + leftNumber + `vw;top:` + topNumber + `vh" class="position-fixed chaoxiaomaomao" alt="...">
            `)
            await this.Sleep(2000)
            $(".chaoxiaomaomao")[0].remove()
        },
        async yingxiao(index) {
            var srcName = ""

            if (index == 0) {
                srcName = require("/src/assets/xiaochou.wav")
                $("#app").append(`
                    <audio autoplay class="xc">
                        <source src="`+srcName+`">
                    </audio>
                `)
                await this.Sleep(6000)
                $(".xc")[0].remove()
            } else {
                srcName = require("/src/assets/chaoxiao.wav")
                $("#app").append(`
                    <audio autoplay class="cx">
                        <source src="`+srcName+`">
                    </audio>
                `)
                await this.Sleep(3000)
                $(".cx")[0].remove()
            }
        },
        hrefAbout(){
            this.change(2)
        }
    }
}
</script>


<style>
@import url("../Home_CN/ListView.css");
</style>
