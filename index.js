new Vue({
    el: '#app',

    data: {
        step: 1,
        counter: 0
    },

    methods: {
        increment() {
            this.counter += this.step
        },

        decrement() {
            this.counter -= this.step
        }
    }
});