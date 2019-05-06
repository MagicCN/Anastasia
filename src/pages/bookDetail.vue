<template>
    <div>
        <div>
            <img :src="imgsrc" alt="">
        </div>
        <div>{{name}}</div>
        <div>{{author}}</div>
        <div>{{author_intro}}</div>

    </div>
</template>
<script>



export default {
    name:"bookDetail",
    data() {
        return {
            imgsrc : "",
            name:"",
            author:"",
            author_intro:"",
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
            let url = this.api.bookDetailUrl + "&id=" + id;
            console.log(url);
            this.axios.get(url).then( (res)=>{
                var data = res.data.result;
                console.log(data);
                this.imgsrc = this.api.imagePrefix + data.image;
                this.name = data.name;
                this.author_intro = data.author_intro;
                this.author = data.author;
            })
        }
    },
}
</script>