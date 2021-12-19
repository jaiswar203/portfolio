function Navbar(){
    const hamburger=document.querySelector('.hamburger')
    const hamburgerbtn=document.querySelector('.hamburger-btn')
    const Item=document.querySelector('.header-item')
    const main=document.querySelector('main')
    const link=document.querySelectorAll('.link')

    

    let showmenu=false
    if(window.innerWidth < 615){
        link.forEach(item=>item.addEventListener('click',function(){
            if(!showmenu){
                Item.classList.add('show')
            hamburgerbtn.classList.add('show')
            main.classList.add('main-show')
            showmenu=true
        }else{
            Item.classList.remove('show')
            hamburgerbtn.classList.remove('show')
            main.classList.remove('main-show')
            showmenu=false
        }
    }))
}
    hamburger.addEventListener('click',function(){
        if(!showmenu){
            Item.classList.add('show')
            hamburgerbtn.classList.add('show')
            main.classList.add('main-show')
            showmenu=true
        }else{
            Item.classList.remove('show')
            hamburgerbtn.classList.remove('show')
            main.classList.remove('main-show')
            showmenu=false
        }
    })
}

export default Navbar