new Vue({
    el: '#app',

    data: {
        task: null,
        task_to_edit: null,
        editing: null,
        lists: []
    },

    computed: {
       showClearAll() {
           return this.lists.length
       },

       canAdd() {
           return !!this.task === false
       }
    },

    methods: {
        add(event) {
            event.preventDefault()
            this.lists.push(this.task)
            this.task = null
        },

        isEditing(index) {
            return this.editing === index
        },

        clearAll() {
            if (!window.confirm('Do you want to remove all?')) {
                return
            }
            this.lists = []
            this.editing = this.task_to_edit = null
        },

        edit(index) {
            this.editing = index
            this.task_to_edit = this.lists[index]
        },

        saveEdition() {
            if (this.editing === null || this.editing >= this.lists.length || !this.task_to_edit.toString().trim().length) {
                return
            }

            this.lists[this.editing] = this.task_to_edit
            this.editing = null
            this.task_to_edit = null
        },

        remove(index) {
            if (!window.confirm('Do you want to remove this task?')) {
                return
            }
            this.lists.splice(index, 1)
            this.editing = this.task_to_edit = null
        }
    }
});