<template>
    <div>
        <router-link v-for="(item,index) in musiclist" :key="index" :to="/musicDetail/ + item.id">
            <div>
                <img :src="api.imagePrefix + item.image">
            </div>
            <div>{{item.artist}}</div>
            <div>{{item.name}}</div>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            musiclist:[],
            name:"",
            artist:""
        }
    },
    created(){
        this.downloadData(this.api.musicListUrl);
        this.$parent.title = "音乐";
    },
    methods: {
        downloadData(url){
            this.axios.get(url).then( (res)=>{
                this.musiclist = res.data.result;

                console.log(this.musiclist);
            })
        }
    },
}
</script>