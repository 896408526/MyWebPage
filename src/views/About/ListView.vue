<template>
    

    <div class="container-fluid" style="margin-top: 50px;">
        <div class="row">
            <a class="navbar-brand" href="/" style="color: #000;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
            </a>
        </div>
        <div class="row">
            <div class="col-12 col-sm-4">
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
            <div class="col-12 col-sm-8">
                <div class="row" style="padding: 20px;">
                    <h3>title</h3>
                    <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary justify-content-end ml-auto" style="border-radius: 999px;width: 40px;height: 40px;" @click="addLogs">+</button>
                </div>
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
                    <ul class="pagination  justify-content-start">
                        <li class="page-item">
                            <a class="page-link" @click="pagePrev" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item mainPage" v-for="(item, index) in pageList" :key="index">
                            <a class="page-link" @click="CheckPage(index + 1)">{{ item.Count }}</a>
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


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group text-left">
                            <label for="modalTitle">Title</label>
                            <input type="text" class="form-control" id="modalTitle" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group text-left">
                            <label for="modalSrc">Src</label>
                            <input type="text" class="form-control" id="modalSrc">
                        </div>
                        <div class="form-group text-left">
                            <label for="modalContent">Content</label>
                            <textarea class="form-control" id="modalContent" rows="3" @change="inputContent" ></textarea>
                            <small id="emailHelp" class="form-text text-muted text-right">{{ contentCount == null ? 0 : contentCount }}/500</small>
                        </div>
                    </form> 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="save()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import { useRouter } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';
import { getCurrentInstance } from 'vue'
import { type } from 'jquery';
import { data } from 'jquery';

var list = []

var internalInstance
var functionInstance

export default {
    setup() {
        internalInstance = getCurrentInstance()
        functionInstance = internalInstance.appContext.config.globalProperties

        //functionInstance.$request("http://localhost:1301/api/UserInfo/GetUserDetail","GET",{
        //    token:"",
        //    secret:""
        //}).then((res)=>{
        //    console.log(res)
        //}).catch((res)=>{console.log(res.responseJSON)})
    },
    data() {
        return {
            contentCount : 0,
            pageList: [],
            mediaList : [],
            icontoggle: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z",
            headerImage: require("/src/assets/header.jpg"),
        }
    },
    created() {
        $("#webpack-dev-server-client-overlay").addClass("d-none")
        $("#cssLoader1").addClass("d-none")
        this.GetLogsInfoDTOs(1)
    },
    methods: {
        GetLogsInfoDTOs(page){
            functionInstance.$request("http://182.92.110.42:8080/api/LogsInfo/GetLogsInfoDTOs","GET",{
                "page": page
            }).then(async (result)=>{
                this.mediaList = result.data
                for (let i = 0; i < Math.ceil(result.count / 5); i++) {
                    this.pageList[i] = {}
                    this.pageList[i].Count = i + 1
                }
                await this.Sleep(1)
                var pageitem = $(".mainPage")[0]
                $(pageitem).addClass("active")
            }).catch((res)=>{alert(res.responseJSON.msg)})          
        },
        CheckPage(index) {
            functionInstance.$request("http://182.92.110.42:8080/api/LogsInfo/GetLogsInfoDTOs","GET",{
                "page": index
            }).then( (result)=>{
                this.mediaList = result.data
                $(".mainPage").removeClass("active")
                const pageitem = $(".mainPage")[index - 1]
                $(pageitem).addClass("active")
            }).catch((res)=>{console.log(res.responseJSON)})
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
            var count = $(".mainPage.active").children().text()
            if(count > 1){
                console.log(count)
                this.CheckPage(parseInt(count) - 1)
            }
        },
        pageNext(){ 
            var count = $(".mainPage.active").children().text()
            if(count < this.pageList.length){
                this.CheckPage(parseInt(count) + 1)
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
        },
        inputContent(e){
            var modaldocutment = $("#modalContent")[0]
            var contentlength = $(modaldocutment).val().length
            if(contentlength > 500){
                this.contentCount = 500
                $(modaldocutment).val($(modaldocutment).val().substring(0,500))
            }else{
                this.contentCount = contentlength
            }
        },
        save(){
            functionInstance.$request("http://182.92.110.42:8080/LogsInfo/CreateLogsInfo","POST",
            JSON.stringify({
                "title": $("#modalTitle").val(),
                "src": $("#modalSrc").val(),
                "content": $("#modalContent").val()
            })).then((result)=>{
                if(result.code != 200){
                    alert(result.msg)
                    return
                }
                alert(result.msg)
                $('#exampleModal').modal('hide')
                var count = $(".mainPage.active").children().text()
                this.GetLogsInfoDTOs(parseInt(count))
                this.CheckPage(parseInt(count))
            }).catch((res)=>{alert(res.responseJSON.msg)})
        }
    }
}
</script>

<style>
@import url("../About/ListView.css");

body {
    overflow-x: auto !important;
    overflow-y: auto !important;
}
</style>
