var app = new Vue({
    el: "#app",
    data:{
        password_input: ""
    },
    methods:{

    },
    computed:{
        score(){
         return + this.hasSmallLetter
           + this.hasCapitalLetter
           + this.hasDigitLetter
           + this.hasSpecialChar
           + this.isLargerThanEight
           
        },
        hasSmallLetter(){
            return /[a-z]/.test(this.password_input)
        },
        hasCapitalLetter(){
            return /[A-Z]/.test(this.password_input)
        },
        hasDigitLetter(){
            return /[0-9]/.test(this.password_input)
        },
        hasSpecialChar(){
            return /[^a-zA-Z0-9]/.test(this.password_input)
        },
        isLargerThanEight(){
            return this.password_input.length >= 8
        }
    }
})
