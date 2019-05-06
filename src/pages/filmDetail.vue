<template>
    <div>
        <div>
            <img :src="imgsrc" alt="">
        </div>
        <div>{{name}}</div>
        <div>{{director}}</div>
        <div>{{actor}}</div>
        <div>{{introduce}}</div>


    </div>
</template>
<script>
export default {
    data() {
        return {
            imgsrc:"",
            name:"",
            actor:"",
            director:"",
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
            let url = this.api.filmDetailUrl + "&id=" + id;
            this.axios.get(url).then( (res)=>{
                var data = res.data.result;
                this.imgsrc = this.api.imagePrefix + data.image;
                this.actor = data.actor;
                this.director = data.director
                this.name = data.name;
                this.introduce = data.introduce;
                
            })
        }
    },
}
</script>