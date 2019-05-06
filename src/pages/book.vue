<template>
    <div>
        <router-link v-for="(item,index) in booklist" :key="index" :to="'/bookDetail/'+ item.id">
            <img :src="api.imagePrefix + item.image" alt="">
            <div>{{item.name}}</div>
            <div>{{item.author}}</div>
        </router-link>
    </div>
</template>

<script>
import api from '@/api/api';
import axios from 'axios'


export default {
    data(){
        return {
            booklist:[]
        }
    },
    created(){
        this.downloadData(api.bookListUrl);
        this.$parent.title = "图书";
    },
    methods: {
        downloadData(url){
            axios.get(url).then( (res)=>{
                // console.log(res.data.result)
                this.booklist = res.data.result;

                console.log(this.booklist)
            })
        }
    },
};
</script>