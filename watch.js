var app = new Vue({
    el: '#app',
    data:{
        searchQuery: '',
        results: [],
        isSearching: false,
    },
    watch:{
        searchQuery: function(){
            this.isSearching = true;
            this.results = ['Searching...']
            setTimeout( ()=>{
                this.results = ['JS', 'PHP', 'Java']
            }, 1000)
            isSearching = false;
        }
    }
})