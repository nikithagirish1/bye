function validate(){
    let sign = document.getElementById('err')
    let alert = document.getElementById('hell')
    let border = document.querySelector('.mail')
    let mail = document.getElementById('mail').value
    let regex = /^([a-zA-Z0-9\.]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/
    if(regex.test(mail)){
        console.log('valid')
        sign.style.display = 'none'
        border.style.border= '2px solid lightgrey'
        alert.style.display= 'none'
        return true
    }
    else{
        console.log('invalid')
        sign.style.display = 'block'
        alert.style.display= 'block'

        border.style.border= '2px solid red'
        return false
    }
}
function validmob(){
    let sign1 = document.getElementById('err-mob')
    let alert1 = document.querySelector('.mob-hell')
    let border1 = document.querySelector('.mob-mail')
    let mail1 = document.getElementById('form').value
    let regex1 = /^([a-zA-Z0-9\.]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/
    if(regex1.test(mail1)){
        console.log('valid')
        sign1.style.display = 'none'
        border1.style.border= '2px solid lightgrey'
        alert1.style.display= 'none'
        return true
    }
    else{
        console.log('invalid')
        sign1.style.display = 'block'
        alert1.style.display= 'block'

        border1.style.border= '2px solid red'
        return false
    }
}