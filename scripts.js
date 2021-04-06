/*function mostrar(){

var imagens = document.querySelectorAll(".empresas img")
var p = document.querySelector(".resumo")


if (p.style.display==="none") {
    p.style.display="block"

} else {
    //p.style.display==="-webkit-text-security: disc;"
    p.style.display="none"
    
}
console.log(`MOSTRANDO`)

}
 
function entrar(){
    console.log('passar o mouse funcionando')

    
}
*/
function ver(id) {

    var a = document.getElementById(id)

        if (id.style.display=="none") {
            id.style.display="block"
                console.log(`sumiu`);
        } else {
             id.style.display="none"        
                console.log(`apareceu`);
    }

}


