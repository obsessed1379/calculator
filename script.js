    new Vue({
    el:"#app",
    data:{
        currentNumber:'0',
        allNumbers:'',
        numbers:[],
        operators:[]
    },
    computed:{
        output(){
            if(this.numbers.length > 0){
                this.allNumbers = ""
                this.numbers.forEach((number, index) => {
                    this.allNumbers += number + this.operators[index]
                })
            }
            
            return this.allNumbers + this.currentNumber
        }
    },
    methods:{
        number: function(char){
            if (this.currentNumber == "0") {
                this.currentNumber = ""
            }
            this.currentNumber += char
        },
        setOperator:function(char){
            this.numbers.push(this.currentNumber)
            this.operators.push(char)
            this.currentNumber = ""
        },
        clear:function(){
            this.operators = this.numbers = []
            this.currentNumber="0"
        },
        result: function(){
            this.numbers.push(this.currentNumber)
            let NumberLength = this.numbers.length
            let fNumber = this.numbers[0]
            let sNumber = 0
            
            for(let i = 1; i < NumberLength; i++){
                sNumber = this.numbers[i]

                switch (this.operators[i - 1]) {
                    case "+":
                        fNumber = parseFloat(fNumber) + parseFloat(sNumber)
                        break;
                     case "-":
                        fNumber = parseFloat(fNumber) - parseFloat(sNumber)
                        break;
                    case "*":
                        fNumber = parseFloat(fNumber) * parseFloat(sNumber)
                    break;
                    case "/":
                        fNumber = parseFloat(fNumber) / parseFloat(sNumber)
                    break;   
                }
            }

            this.numbers = []
            this.allNumbers = ""
            this.currentNumber = fNumber
        }
    }
})
