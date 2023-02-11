const mainTheme = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click',function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', function(event){
    event.preventDefault()
    if(allowedKeys.includes(event.key)){ //event.key é a tecla que o usuario pressionou, verificar se a tecla é valida de acordo com array allowedKeys
        input.value += event.key
        return 
    }
    if(event.key === 'Backspace')
    input.value = input.value.slice(0,-1)

    if(event.key === 'Enter'){
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate(){
    resultInput.value = '[ERROR]'
    resultInput.classList.add('error')
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}

document.getElementById('copyToClipboard').addEventListener('click',function(event){
    const btn = event.currentTarget
    if(btn.innerText === 'Copiar'){
        btn.innerText = 'Copiado'
        btn.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    }else{
        btn.innerText = 'Copiar'
        btn.classList.remove('success')
    }
})

document.getElementById('themeSwitcher').addEventListener('click', function(){
    if(mainTheme.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color','#f1f5f9')
        root.style.setProperty('--border-color','#aaa')
        root.style.setProperty('--font-color','#212529')
        root.style.setProperty('--primary-color','#26834a')
        root.style.setProperty ('--copy-color','#015f25')
        mainTheme.dataset.theme = 'ligth'
    }else{
        root.style.setProperty('--bg-color','#2c3033')
        root.style.setProperty('--border-color','#666')
        root.style.setProperty('--font-color','#f1f5f9')
        root.style.setProperty('--primary-color','#5043ff')
        root.style.setProperty ('--copy-color','#00ff62')
        mainTheme.dataset.theme = 'dark'
    }
})