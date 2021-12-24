class Calculator {
    constructor(smscreen,bgscreen) {
    
        this.smscreen=smscreen,
        this.bgscreen=bgscreen,
        this.operation=undefined,
        this.clear
    
    }
    delete(){
        this.big = this.big.toString().slice(0,-1)
    }

    clear(){
        this.small = ''
        this.big = ''

    }

    appendNumber(number){
        if(number==="." && this.big.includes("."))return
        if(this.big===undefined)

        {

            this.big=number

        }

        else{

            this.big=this.big.toString() + number.toString()

        }
    }

    chooseOperation(operation){
        if(this.big==='')return
        if(this.small==! ''){
            this.compute()
        }
        this.operation = operation
        this.small = this.big
        this.big = ''

    }
    compute(){
        let computation
        const thesmall= parseFloat(this.small)
        const thebig= parseFloat(this.big)
        if(isNaN(thesmall) || isNaN(thebig))return
        switch(this.operation){
            case '+':
                computation = thesmall + thebig
        break
        

        case '-':
                computation = thesmall - thebig
        break

        case '*':
                computation = thesmall * thebig
        break

        case '÷':
                computation = thesmall / thebig
        break
        default:
            return
        }
        this.big = computation
        this.operation = undefined
        this.small = ''

    }

    updateDisplay(){
        this.bgscreen.innerText=this.big
        this.smscreen.innerText=this.small
    }

}

const numberbtn = document.querySelectorAll('[data-number]')
const operationbtn = document.querySelectorAll('[data-operation]')
const delbtn = document.querySelector('[data-delete]')
const acbtn = document.querySelector('[data-all-clear]')
const equalbtn = document.querySelector('[data-equals]')
const bgscreen = document.querySelector('[data-bg-screen]')
const smscreen = document.querySelector('[data-sm-screen]')

const calculator = new Calculator(smscreen,bgscreen)

numberbtn.forEach(button =>{
    button.addEventListener("click",()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })

})

operationbtn.forEach(button =>{
    button.addEventListener("click",()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })

})


equalbtn.addEventListener("click",button=>{
    calculator.compute()
    calculator.updateDisplay()
})


acbtn.addEventListener("click",button=>{
    calculator.clear()
    calculator.updateDisplay()
})


delbtn.addEventListener("click",button=>{
    calculator.delete()
    calculator.updateDisplay()
})

