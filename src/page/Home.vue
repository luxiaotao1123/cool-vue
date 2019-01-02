<template>
    <div class="blogs">
        <h1 @click="ali">Ali Pay</h1>
        <div class="blog-card" v-for="(blog,index) in blogs.list" :key="blog.index">
            <div class="blog-box">
                <div class="blog-img">
                    <img @click="getBlog(blog.id)" :src='blog.thumpreview' />
                    <router-view />
                </div>
                <div class="blog-title">
                <div class="title-box">
                    <span class="title-white">{{blog.title}}</span>
                    <span class="title-date">{{blog.updatetime}}</span>
                </div>
                </div>
                <div class="blog-summary">
                    <div>{{blog.summary}}</div>
                </div>
                <div class="blog-label">
                    <span>{{blog.label}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from '../service.js'

export default {
    data() {
        return {
            blogs: {}
        }
    },
    methods: {
        index() {
            let that = this;
            http.get('api/blog/page')
                .then(function (response){
                    if(response.data.code == 200){
                        that.blogs = response.data.data
                    }
                })
        },
        getBlog(blogId) {
            let that = this;
            that.$router.push({
                name: 'Blog',
                params: {
                    id: blogId
                }
            })
        },
        ali(){
            let that = this;
            that.$router.push({
                name: 'ali'
            })
        }
    },
    mounted () {
        this.index()
    }
}
</script>

<style scoped>
.blogs{
    display: flex;
    justify-content:center;
    flex-direction:column;
    width: 920px;
    max-width: 1000px;
    margin: 0px auto;
}

.blog-card{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: rgba(0, 0, 0, 0.87);
    background-color: rgb(255, 255, 255);
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
    border-radius: 2px;
    z-index: 1;
    max-width: 960px;
    display: flex;
    justify-content:center;
    margin: 8px;
    margin-bottom: 47.5px;
}

.blog-card:hover{
    box-shadow: 0 3px 10px rgba(0,0,0,.156863),0 3px 10px rgba(0,0,0,.227451)!important;
}

.blog-card .blog-img a>img{
    width:100% ;
    height: 326px;
}

.blog-box{
    width: 100%;
    position: relative;
    overflow: hidden;
}
/* title */
.blog-title{
    position: absolute;    
    top:230px;
    right: 0px;
    left: 0px;
    padding-top: 8px;
    background: rgba(0, 0, 0, 0.54)
}
.blog-title .title-box{
    padding: 16px;
    position: relative;
}
.blog-title .title-box .title-white {
font-size: 24px;
    color: rgba(255, 255, 255, 0.87);
    display: block;
    line-height: 36px;    
}
.blog-title .title-box .title-white a{
    color: rgba(255, 255, 255, 0.87);
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: block;
}
.blog-title .title-box .title-date{
    font-size: 14px;
    color: rgba(255, 255, 255, 0.54);
    display: block;
}
/* summary */
.blog-summary{
    padding: 16px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.87);
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid #eef2f8
}
.blog-summary div{
    max-height: 45px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
/* label */
.blog-label{
    float: right ;
    padding-top: 20px;
    padding-right: 10px
}
.blog-label span {
    color: #969696;
    font-size: 14px;
    cursor: pointer;
}
/* sceen */
@media screen and (max-width: 1024px){
    .blogs{
        width: 90%;
        margin: 0px auto
    }
    .blog-card{
        /* width: 100%; */
        overflow: hidden;   
    }
}
@media screen and (max-width: 420px){
 .blog-card .blog-img>img{
    height: 230px;
    transition: all 1s ease;
  }
  .blog-title{
    top: 135px;
    transition: all 1s ease;
  }
  .blog-card .blog-img a>img{
    height: 231px;
  }
  .blog-title .title-box .title-white a{
    font-size: 17px;
  }
}
</style>
