<template>
    <div>
        <router-link v-for="(item,index) in filmList" :to="/filmDetail/ + item.id" :key="index">
            <div>
                <img :src="api.imagePrefix + item.image" alt="">
                <div>{{item.name}}</div>
                <div>{{item.director}}</div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filmList:[],
            name:"",
            director:""
        }
    },
    methods: {
        downloadData(){
            let url = this.api.filmListUrl;

            this.axios.get(url).then((res)=>{
                console.log(res);
                let data = res.data.result;

                this.filmList = data;
            })
        }
    },
    created() {
        this.downloadData();
        this.$parent.title = "影视";
    },
}
</script>