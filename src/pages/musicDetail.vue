<template>
    <div>
        <div>
            <img :src="imgsrc" alt="">
        </div>
        <div>{{artist}}</div>
        <div>{{name}}</div>
        <div>{{introduce}}</div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            imgsrc:"",
            artist:"",
            name:"",
            introduce:""
        }
    },
    created(){
        console.log(this.api)
        this.downloadData();

        // downloadData();
    },
    methods: {
        downloadData(){
            var id = this.$route.params.id;
            let url = this.api.musicDetailUrl + "&id=" + id;
            console.log(url);
            this.axios.get(url).then( (res)=>{
                var data = res.data.result;
                console.log(data);
                this.imgsrc = this.api.imagePrefix + data.image;
                this.artist = data.artist;
                this.name = data.name;
                this.introduce = data.introduce;
                
            })
        }
    },
}
</script>