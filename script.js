var ul = document.querySelector('div.headerConteinerMeioMobile')//ACESSANDO O CSS COM O JS
ul.style. width = '0%'




function menu(){
    var btn = document.querySelector('div.hamburuer')
    btn.classList.toggle('ativa')//CRIANDO UMA CLASSE PARA O MENU HHAMBURGUER NO CSS

    if(ul.style.  width == '0%'){//CONDICIONAIS DO MENU HAMBURGUER
        ul.style.  width = '100%'
    }else{
        ul.style.  width = '0%'
    }
    
}
