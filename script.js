    new Vue({
    el:"#app",
    data:{
        firstNumb:'',
        secondNumb:'',
        operator:''
    },
    computed:{
        output(){
            return this.firstNumb + this.operator + this.secondNumb 
        }
    },
    methods:{
        number: function(char){
            if (this.firstNumb == "0") {
                this.firstNumb=""
            }
            this.operator !== "" ? this.secondNumb += char : this.firstNumb += char 
        },
        operators:function(char){
            this.operator = char
        },
        clear:function(){
            this.operator=this.secondNumb=""
            this.firstNumb="0"
        },
        result: function(){
            switch (this.operator) {
                case "+":
                    this.firstNumb=parseFloat(this.firstNumb) +parseFloat(this.secondNumb)
                    break;
                 case "-":
                    this.firstNumb=parseFloat(this.firstNumb) - parseFloat(this.secondNumb)
                    break;
                case "*":
                    this.firstNumb=parseFloat(this.firstNumb) * parseFloat(this.secondNumb)
                break;
                case "/":
                    this.firstNumb=parseFloat(this.firstNumb) / parseFloat(this.secondNumb)
                break;
            }
            this.secondNumb=""
            this.operator=""
        }
    }
})
