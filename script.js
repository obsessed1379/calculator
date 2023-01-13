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
        cosop:function(fNumber)
        {
            return Math.cos(fNumber * Math.PI / 180)
        },
        sin:function(fNumber)
        {
            return Math.sin(fNumber * Math.PI /180) 
        },
        radikal:function(fNumber)
        {
            return Math.sqrt(fNumber)
        },
        tanop:function(fNumber)
        {
            return Math.tan(fNumber)
        },
        cotanop:function(fNumber)
        {
            return 1 / Math.tan(fNumber)
        },
        factorial: function(fNumber)
        {
            if(fNumber === 0)
            {
                return 1;
            }
            else
            {
                return fNumber * this.factorial(fNumber - 1);
            }
        },
        clear:function(){
            this.operators = this.numbers = []
            this.currentNumber='0'
            this.numbers=[]
            this.operators=[]
            this.allNumbers=''
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
                    case "cos":
                        fNumber = this.cosop(fNumber);
                    break;  
                    case "sin":
                        fNumber = this.sin(fNumber);
                    break;  
                    case "√":
                        fNumber = this.radikal(fNumber);
                    break;  
                    case "tan":
                        fNumber = this.tanop(fNumber);
                    break;
                    case "cotan":
                        fNumber = this.cotanop(fNumber);
                    break;  
                    case "!":
                        fNumber = this.factorial(fNumber);
                    break;
                    }
            }
            this.operators= []
            this.numbers = []
            this.allNumbers = ""
            this.currentNumber = fNumber
        }
    
    }
})
