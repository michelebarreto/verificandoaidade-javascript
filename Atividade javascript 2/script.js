function verificar(){
    var data=new Date()//aqui pega data atual
    var ano=data.getFullYear()// aqui me diz o ano atual com 4 digitos ex. 2020
    var fano=document.getElementById("txtano")
    var res=document.getElementById("res")
    if(fano.value.length ==0 || fano.value >ano){
        window.alert("[ERRO] verifique os dados e tente novamente !")//aqui da mensagem de erro se o usuario digitar algo errado
    }else{
        var fsex =document.getElementsByName("radsex")
        var idade= ano-Number(fano.value)// aqui vai calcular o idade
        var genero= ''
        var img=document.createElement('img')//aqui esta criando uma tag img de imagem
        img.setAttribute('id','foto')// criando um id de imagem com o nome de foto sem precisar ser no html

        if(fsex[0].checked){//o checked é para verificar a opcao marcada
            genero='Homem'
            if(idade>= 0 && idade < 10){
                //Criança
                img.setAttribute("src","imagens/foto-bebe-m.png")// aqui esta pegando a foto de crianca
            }else if(idade < 21){
                // Jovem
                img.setAttribute("src","imagens/foto-jovem-m.png")
            }else if(idade < 50){
                // Adulto
                img.setAttribute("src","imagens/foto-adulto-m.png")
            }else{
                 //Idoso
                 img.setAttribute("src","imagens/foto-idoso-m.png")
            }

        }else if(fsex[1].checked){
            genero='Mulher'
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute("src","imagens/foto-bebe-f.png")// aqui esta pegando a foto de crianca
            }else if(idade < 21){
                //Jovem
                img.setAttribute("src","imagens/foto-jovem-f.png")
            }else if(idade < 50){
                // Adulto
                img.setAttribute("src","imagens/foto-adulto-f.png")
            }else{
                // Idoso
                img.setAttribute("src","imagens/foto-idoso-f.png")
            }

        }
        
         res.style.textAlign='center'// aqui o resultado com o texto vai ficar centralizado
         res.innerHTML="Detectamos"+ " " + genero + " " + " com" + " " + idade + " anos."
         res.appendChild(img)//aqui é para a foto aparecer no resultado
        

    }
}