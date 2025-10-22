var num = document.getElementById('num')
var count = 0

function add(){

    count++
    num.innerText = count


}
function sub(){

    if (count !== 0) {
        
        count--
        num.innerText = count
    }



}
function reset(){

    count = 0
    num.innerText = count


}