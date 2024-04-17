<template>
    <nav class="navbar navbar-expand-lg navbar-light" id="mainnav">
        <a class="navbar-brand" href="/">
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
                <img :src="headerImage" alt="..." class="img-circle headerimg"
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
                    <div class="col-12 " v-for="(item, index) in mediaList" :key="index">
                        <div v-if="index % 2 != 1">
                            <div class="media"
                                style="border-bottom: 2px solid #ccc;border-left: 2px solid #ccc;border-radius: 5px;">
                                <img :src="item.src" width="80px" class="align-self-center mr-3" alt="...">
                                <div class="media-body">
                                    <h3 class="mt-0" style="border-bottom: 2px solid #ccc;">{{ item.title }}</h3>
                                    <p style="max-height: 200px;overflow: auto;white-space: pre-wrap;text-align: left;">
                                        {{
                                            item.content }}</p>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="media"
                                style="border-bottom: 2px solid #ccc;border-right: 2px solid #ccc;border-radius: 5px;">
                                <div class="media-body">
                                    <h3 class="mt-0" style="border-bottom: 2px solid #ccc;">{{ item.title }}</h3>
                                    <p style="max-height: 200px;overflow: auto;white-space: pre-wrap;text-align: left;">
                                        {{ item.content }}
                                    </p>
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
                title: "2024-04-14",
                src: require("/src/assets/header.jpg"),
                content: `
<!DOCTYPE html>
<html lang="">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
<title>
    <%= htmlWebpackPlugin.options.title %>
</title>
<style>
    /*loader1 css begins*/
    .main-wrap {
    background-color: #2b4661;
    color: #fff;
    height: 520px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .main-wrap--white {
    background-color: #ffffff;
    }

    #cssLoader1.main-wrap .child-common {
    width: 8px;
    height: 50px;
    /*margin-right:5px;*/
    margin-right: 3px;
    background-color: #FFF;
    -webkit-animation: animate1 1s infinite;
    animation: animate1 1s infinite;
    float: left;
    }

    #cssLoader1.main-wrap .child1 {
    margin-right: 3px;
    }

    #cssLoader1.main-wrap .child10 {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
    }

    #cssLoader1.main-wrap .child9 {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
    }

    #cssLoader1.main-wrap .child8 {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
    }

    #cssLoader1.main-wrap .child7 {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
    }

    #cssLoader1.main-wrap .child6 {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
    }

    #cssLoader1.main-wrap .child5 {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    }

    #cssLoader1.main-wrap .child4 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    }

    #cssLoader1.main-wrap .child3 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    }

    #cssLoader1.main-wrap .child2 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    }

    @-webkit-keyframes animate1 {

    50% {
        -ms-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);

    }
    }

    @keyframes animate1 {
    50% {
        -ms-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
    }
    }

    cssLoader17 {
    position: relative;
    width: 2.5em;
    height: 2.5em;
    transform: rotate(165deg);
    }

    .cssLoader17:before,
    .cssLoader17:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
    }

    .cssLoader17:before {
    animation: before 2s infinite;
    }

    .cssLoader17:after {
    animation: after 2s infinite;
    }

    @keyframes before {
    0% {
        width: 0.5em;
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }

    35% {
        width: 2.5em;
        box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
    }

    70% {
        width: 0.5em;
        box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
    }

    100% {
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }
    }

    @keyframes after {
    0% {
        height: 0.5em;
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }

    35% {
        height: 2.5em;
        box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
    }

    70% {
        height: 0.5em;
        box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
    }

    100% {
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }
    }

    .loader {
    position: absolute;
    top: calc(50% - 1.25em);
    left: calc(50% - 1.25em);
    }
</style>
</head>

<body>
<noscript>
    <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
<div id="app"></div>
<div id="cssLoader1" class="main-wrap" style="width: 100vw;height: 100vh;">
    <div class="child-common child1"></div>
    <div class="child-common child2"></div>
    <div class="child-common child3"></div>
    <div class="child-common child4"></div>
    <div class="child-common child5"></div>
    <div class="child-common child6"></div>
    <div class="child-common child7"></div>
    <div class="child-common child8"></div>
    <div class="child-common child9"></div>
    <div class="child-common child10"></div>
</div>
</body>
</html>
                        `
            },
            {
                title: "2024-04-13",
                src: require("/src/assets/header.jpg"),
                content: `
<!DOCTYPE html>
<html lang="">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
<title>
    <%= htmlWebpackPlugin.options.title %>
</title>
<style>
    /*loader1 css begins*/
    .main-wrap {
    background-color: #2b4661;
    color: #fff;
    height: 520px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .main-wrap--white {
    background-color: #ffffff;
    }

    #cssLoader1.main-wrap .child-common {
    width: 8px;
    height: 50px;
    /*margin-right:5px;*/
    margin-right: 3px;
    background-color: #FFF;
    -webkit-animation: animate1 1s infinite;
    animation: animate1 1s infinite;
    float: left;
    }

    #cssLoader1.main-wrap .child1 {
    margin-right: 3px;
    }

    #cssLoader1.main-wrap .child10 {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
    }

    #cssLoader1.main-wrap .child9 {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
    }

    #cssLoader1.main-wrap .child8 {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
    }

    #cssLoader1.main-wrap .child7 {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
    }

    #cssLoader1.main-wrap .child6 {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
    }

    #cssLoader1.main-wrap .child5 {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    }

    #cssLoader1.main-wrap .child4 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    }

    #cssLoader1.main-wrap .child3 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    }

    #cssLoader1.main-wrap .child2 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    }

    @-webkit-keyframes animate1 {

    50% {
        -ms-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);

    }
    }

    @keyframes animate1 {
    50% {
        -ms-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
    }
    }

    cssLoader17 {
    position: relative;
    width: 2.5em;
    height: 2.5em;
    transform: rotate(165deg);
    }

    .cssLoader17:before,
    .cssLoader17:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
    }

    .cssLoader17:before {
    animation: before 2s infinite;
    }

    .cssLoader17:after {
    animation: after 2s infinite;
    }

    @keyframes before {
    0% {
        width: 0.5em;
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }

    35% {
        width: 2.5em;
        box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
    }

    70% {
        width: 0.5em;
        box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
    }

    100% {
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }
    }

    @keyframes after {
    0% {
        height: 0.5em;
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }

    35% {
        height: 2.5em;
        box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
    }

    70% {
        height: 0.5em;
        box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
    }

    100% {
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }
    }

    .loader {
    position: absolute;
    top: calc(50% - 1.25em);
    left: calc(50% - 1.25em);
    }
</style>
</head>

<body>
<noscript>
    <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
<div id="app"></div>
<div id="cssLoader1" class="main-wrap" style="width: 100vw;height: 100vh;">
    <div class="child-common child1"></div>
    <div class="child-common child2"></div>
    <div class="child-common child3"></div>
    <div class="child-common child4"></div>
    <div class="child-common child5"></div>
    <div class="child-common child6"></div>
    <div class="child-common child7"></div>
    <div class="child-common child8"></div>
    <div class="child-common child9"></div>
    <div class="child-common child10"></div>
</div>
</body>

</html>
`
            },
            {
                title: "2024-04-12",
                src: require("/src/assets/header.jpg"),
                content: `
<!DOCTYPE html>
<html lang="">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
<title>
    <%= htmlWebpackPlugin.options.title %>
</title>
<style>
    /*loader1 css begins*/
    .main-wrap {
    background-color: #2b4661;
    color: #fff;
    height: 520px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .main-wrap--white {
    background-color: #ffffff;
    }

    #cssLoader1.main-wrap .child-common {
    width: 8px;
    height: 50px;
    /*margin-right:5px;*/
    margin-right: 3px;
    background-color: #FFF;
    -webkit-animation: animate1 1s infinite;
    animation: animate1 1s infinite;
    float: left;
    }

    #cssLoader1.main-wrap .child1 {
    margin-right: 3px;
    }

    #cssLoader1.main-wrap .child10 {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
    }

    #cssLoader1.main-wrap .child9 {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
    }

    #cssLoader1.main-wrap .child8 {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
    }

    #cssLoader1.main-wrap .child7 {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
    }

    #cssLoader1.main-wrap .child6 {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
    }

    #cssLoader1.main-wrap .child5 {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    }

    #cssLoader1.main-wrap .child4 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    }

    #cssLoader1.main-wrap .child3 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    }

    #cssLoader1.main-wrap .child2 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    }

    @-webkit-keyframes animate1 {

    50% {
        -ms-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);

    }
    }

    @keyframes animate1 {
    50% {
        -ms-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
    }
    }

    cssLoader17 {
    position: relative;
    width: 2.5em;
    height: 2.5em;
    transform: rotate(165deg);
    }

    .cssLoader17:before,
    .cssLoader17:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
    }

    .cssLoader17:before {
    animation: before 2s infinite;
    }

    .cssLoader17:after {
    animation: after 2s infinite;
    }

    @keyframes before {
    0% {
        width: 0.5em;
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }

    35% {
        width: 2.5em;
        box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
    }

    70% {
        width: 0.5em;
        box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
    }

    100% {
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }
    }

    @keyframes after {
    0% {
        height: 0.5em;
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }

    35% {
        height: 2.5em;
        box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
    }

    70% {
        height: 0.5em;
        box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
    }

    100% {
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }
    }

    .loader {
    position: absolute;
    top: calc(50% - 1.25em);
    left: calc(50% - 1.25em);
    }
</style>
</head>

<body>
<noscript>
    <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
<div id="app"></div>
<div id="cssLoader1" class="main-wrap" style="width: 100vw;height: 100vh;">
    <div class="child-common child1"></div>
    <div class="child-common child2"></div>
    <div class="child-common child3"></div>
    <div class="child-common child4"></div>
    <div class="child-common child5"></div>
    <div class="child-common child6"></div>
    <div class="child-common child7"></div>
    <div class="child-common child8"></div>
    <div class="child-common child9"></div>
    <div class="child-common child10"></div>
</div>
</body>

</html>
`
            },
            {
                title: "2024-04-11",
                src: require("/src/assets/header.jpg"),
                content: `
<!DOCTYPE html>
<html lang="">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
<title>
    <%= htmlWebpackPlugin.options.title %>
</title>
<style>
    /*loader1 css begins*/
    .main-wrap {
    background-color: #2b4661;
    color: #fff;
    height: 520px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .main-wrap--white {
    background-color: #ffffff;
    }

    #cssLoader1.main-wrap .child-common {
    width: 8px;
    height: 50px;
    /*margin-right:5px;*/
    margin-right: 3px;
    background-color: #FFF;
    -webkit-animation: animate1 1s infinite;
    animation: animate1 1s infinite;
    float: left;
    }

    #cssLoader1.main-wrap .child1 {
    margin-right: 3px;
    }

    #cssLoader1.main-wrap .child10 {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
    }

    #cssLoader1.main-wrap .child9 {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
    }

    #cssLoader1.main-wrap .child8 {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
    }

    #cssLoader1.main-wrap .child7 {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
    }

    #cssLoader1.main-wrap .child6 {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
    }

    #cssLoader1.main-wrap .child5 {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    }

    #cssLoader1.main-wrap .child4 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    }

    #cssLoader1.main-wrap .child3 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    }

    #cssLoader1.main-wrap .child2 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    }

    @-webkit-keyframes animate1 {

    50% {
        -ms-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);

    }
    }

    @keyframes animate1 {
    50% {
        -ms-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
    }
    }

    cssLoader17 {
    position: relative;
    width: 2.5em;
    height: 2.5em;
    transform: rotate(165deg);
    }

    .cssLoader17:before,
    .cssLoader17:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
    }

    .cssLoader17:before {
    animation: before 2s infinite;
    }

    .cssLoader17:after {
    animation: after 2s infinite;
    }

    @keyframes before {
    0% {
        width: 0.5em;
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }

    35% {
        width: 2.5em;
        box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
    }

    70% {
        width: 0.5em;
        box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
    }

    100% {
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }
    }

    @keyframes after {
    0% {
        height: 0.5em;
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }

    35% {
        height: 2.5em;
        box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
    }

    70% {
        height: 0.5em;
        box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
    }

    100% {
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }
    }

    .loader {
    position: absolute;
    top: calc(50% - 1.25em);
    left: calc(50% - 1.25em);
    }
</style>
</head>

<body>
<noscript>
    <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
<div id="app"></div>
<div id="cssLoader1" class="main-wrap" style="width: 100vw;height: 100vh;">
    <div class="child-common child1"></div>
    <div class="child-common child2"></div>
    <div class="child-common child3"></div>
    <div class="child-common child4"></div>
    <div class="child-common child5"></div>
    <div class="child-common child6"></div>
    <div class="child-common child7"></div>
    <div class="child-common child8"></div>
    <div class="child-common child9"></div>
    <div class="child-common child10"></div>
</div>
</body>

</html>
`
            },{
                title: "2024-04-10",
                src: require("/src/assets/header.jpg"),
                content: `
<!DOCTYPE html>
<html lang="">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
<title>
    <%= htmlWebpackPlugin.options.title %>
</title>
<style>
    /*loader1 css begins*/
    .main-wrap {
    background-color: #2b4661;
    color: #fff;
    height: 520px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .main-wrap--white {
    background-color: #ffffff;
    }

    #cssLoader1.main-wrap .child-common {
    width: 8px;
    height: 50px;
    /*margin-right:5px;*/
    margin-right: 3px;
    background-color: #FFF;
    -webkit-animation: animate1 1s infinite;
    animation: animate1 1s infinite;
    float: left;
    }

    #cssLoader1.main-wrap .child1 {
    margin-right: 3px;
    }

    #cssLoader1.main-wrap .child10 {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
    }

    #cssLoader1.main-wrap .child9 {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
    }

    #cssLoader1.main-wrap .child8 {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
    }

    #cssLoader1.main-wrap .child7 {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
    }

    #cssLoader1.main-wrap .child6 {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
    }

    #cssLoader1.main-wrap .child5 {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    }

    #cssLoader1.main-wrap .child4 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    }

    #cssLoader1.main-wrap .child3 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    }

    #cssLoader1.main-wrap .child2 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    }

    @-webkit-keyframes animate1 {

    50% {
        -ms-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);

    }
    }

    @keyframes animate1 {
    50% {
        -ms-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
    }
    }

    cssLoader17 {
    position: relative;
    width: 2.5em;
    height: 2.5em;
    transform: rotate(165deg);
    }

    .cssLoader17:before,
    .cssLoader17:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
    }

    .cssLoader17:before {
    animation: before 2s infinite;
    }

    .cssLoader17:after {
    animation: after 2s infinite;
    }

    @keyframes before {
    0% {
        width: 0.5em;
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }

    35% {
        width: 2.5em;
        box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
    }

    70% {
        width: 0.5em;
        box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
    }

    100% {
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }
    }

    @keyframes after {
    0% {
        height: 0.5em;
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }

    35% {
        height: 2.5em;
        box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
    }

    70% {
        height: 0.5em;
        box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
    }

    100% {
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }
    }

    .loader {
    position: absolute;
    top: calc(50% - 1.25em);
    left: calc(50% - 1.25em);
    }
</style>
</head>

<body>
<noscript>
    <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
<div id="app"></div>
<div id="cssLoader1" class="main-wrap" style="width: 100vw;height: 100vh;">
    <div class="child-common child1"></div>
    <div class="child-common child2"></div>
    <div class="child-common child3"></div>
    <div class="child-common child4"></div>
    <div class="child-common child5"></div>
    <div class="child-common child6"></div>
    <div class="child-common child7"></div>
    <div class="child-common child8"></div>
    <div class="child-common child9"></div>
    <div class="child-common child10"></div>
</div>
</body>

</html>
`
            },
            {
                title: "2024-04-09",
                src: require("/src/assets/header.jpg"),
                content: `
<!DOCTYPE html>
<html lang="">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
<title>
    <%= htmlWebpackPlugin.options.title %>
</title>
<style>
    /*loader1 css begins*/
    .main-wrap {
    background-color: #2b4661;
    color: #fff;
    height: 520px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .main-wrap--white {
    background-color: #ffffff;
    }

    #cssLoader1.main-wrap .child-common {
    width: 8px;
    height: 50px;
    /*margin-right:5px;*/
    margin-right: 3px;
    background-color: #FFF;
    -webkit-animation: animate1 1s infinite;
    animation: animate1 1s infinite;
    float: left;
    }

    #cssLoader1.main-wrap .child1 {
    margin-right: 3px;
    }

    #cssLoader1.main-wrap .child10 {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
    }

    #cssLoader1.main-wrap .child9 {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
    }

    #cssLoader1.main-wrap .child8 {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
    }

    #cssLoader1.main-wrap .child7 {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
    }

    #cssLoader1.main-wrap .child6 {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
    }

    #cssLoader1.main-wrap .child5 {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    }

    #cssLoader1.main-wrap .child4 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    }

    #cssLoader1.main-wrap .child3 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    }

    #cssLoader1.main-wrap .child2 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    }

    @-webkit-keyframes animate1 {

    50% {
        -ms-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);

    }
    }

    @keyframes animate1 {
    50% {
        -ms-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
    }
    }

    cssLoader17 {
    position: relative;
    width: 2.5em;
    height: 2.5em;
    transform: rotate(165deg);
    }

    .cssLoader17:before,
    .cssLoader17:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
    }

    .cssLoader17:before {
    animation: before 2s infinite;
    }

    .cssLoader17:after {
    animation: after 2s infinite;
    }

    @keyframes before {
    0% {
        width: 0.5em;
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }

    35% {
        width: 2.5em;
        box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
    }

    70% {
        width: 0.5em;
        box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
    }

    100% {
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }
    }

    @keyframes after {
    0% {
        height: 0.5em;
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }

    35% {
        height: 2.5em;
        box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
    }

    70% {
        height: 0.5em;
        box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
    }

    100% {
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }
    }

    .loader {
    position: absolute;
    top: calc(50% - 1.25em);
    left: calc(50% - 1.25em);
    }
</style>
</head>

<body>
<noscript>
    <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
<div id="app"></div>
<div id="cssLoader1" class="main-wrap" style="width: 100vw;height: 100vh;">
    <div class="child-common child1"></div>
    <div class="child-common child2"></div>
    <div class="child-common child3"></div>
    <div class="child-common child4"></div>
    <div class="child-common child5"></div>
    <div class="child-common child6"></div>
    <div class="child-common child7"></div>
    <div class="child-common child8"></div>
    <div class="child-common child9"></div>
    <div class="child-common child10"></div>
</div>
</body>

</html>
`
            },
            {
                title: "2024-04-08",
                src: require("/src/assets/header.jpg"),
                content: `
<!DOCTYPE html>
<html lang="">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
<title>
    <%= htmlWebpackPlugin.options.title %>
</title>
<style>
    /*loader1 css begins*/
    .main-wrap {
    background-color: #2b4661;
    color: #fff;
    height: 520px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .main-wrap--white {
    background-color: #ffffff;
    }

    #cssLoader1.main-wrap .child-common {
    width: 8px;
    height: 50px;
    /*margin-right:5px;*/
    margin-right: 3px;
    background-color: #FFF;
    -webkit-animation: animate1 1s infinite;
    animation: animate1 1s infinite;
    float: left;
    }

    #cssLoader1.main-wrap .child1 {
    margin-right: 3px;
    }

    #cssLoader1.main-wrap .child10 {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
    }

    #cssLoader1.main-wrap .child9 {
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
    }

    #cssLoader1.main-wrap .child8 {
    -webkit-animation-delay: 0.7s;
    animation-delay: 0.7s;
    }

    #cssLoader1.main-wrap .child7 {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
    }

    #cssLoader1.main-wrap .child6 {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
    }

    #cssLoader1.main-wrap .child5 {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    }

    #cssLoader1.main-wrap .child4 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    }

    #cssLoader1.main-wrap .child3 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    }

    #cssLoader1.main-wrap .child2 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    }

    @-webkit-keyframes animate1 {

    50% {
        -ms-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);

    }
    }

    @keyframes animate1 {
    50% {
        -ms-transform: scaleY(0);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
    }
    }

    cssLoader17 {
    position: relative;
    width: 2.5em;
    height: 2.5em;
    transform: rotate(165deg);
    }

    .cssLoader17:before,
    .cssLoader17:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    transform: translate(-50%, -50%);
    }

    .cssLoader17:before {
    animation: before 2s infinite;
    }

    .cssLoader17:after {
    animation: after 2s infinite;
    }

    @keyframes before {
    0% {
        width: 0.5em;
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }

    35% {
        width: 2.5em;
        box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
    }

    70% {
        width: 0.5em;
        box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
    }

    100% {
        box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    }
    }

    @keyframes after {
    0% {
        height: 0.5em;
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }

    35% {
        height: 2.5em;
        box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
    }

    70% {
        height: 0.5em;
        box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
    }

    100% {
        box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    }
    }

    .loader {
    position: absolute;
    top: calc(50% - 1.25em);
    left: calc(50% - 1.25em);
    }
</style>
</head>

<body>
<noscript>
    <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
<div id="app"></div>
<div id="cssLoader1" class="main-wrap" style="width: 100vw;height: 100vh;">
    <div class="child-common child1"></div>
    <div class="child-common child2"></div>
    <div class="child-common child3"></div>
    <div class="child-common child4"></div>
    <div class="child-common child5"></div>
    <div class="child-common child6"></div>
    <div class="child-common child7"></div>
    <div class="child-common child8"></div>
    <div class="child-common child9"></div>
    <div class="child-common child10"></div>
</div>
</body>

</html>
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
