// -- Component ------------------------------------------

        Vue.component('dlg',{
            template: '#dialog-template',
            data: function(){
                return {active: false}
            },
            props: ['btnCancel', 'btnConfirm'],
            methods: {
                open: function(){
                    this.active = true
                },
                close: function(){
                    this.active = false
                },
                onCancel: function(){
                    this.close()
                },
                onConfirm: function(){
                    this.close()
                }
            }
        });

        new Vue({
            el: app8
        });


        // ========= Локальные компоненты =====================

        new Vue({
            el: '#app9',
            data: {
                currentView:'square'
            },
            components:{
                square:{
                    template: '#square-template'
                },
                triangle:{
                    template: '#triangle-template'
                },
                circlew:{
                    template: '#circle-template'
                },
                lemon:{
                    template: '#lemon-template'
                }
            },
            methods:{
                switchView: function(view){
                    this.currentView = view
                }
            }

        });