new Vue({
    el: '#app',
    data: {
        show: true
    },
    created: function() {
        setInterval(()=>{
            this.show = !this.show
        }, 2000);
    },
});