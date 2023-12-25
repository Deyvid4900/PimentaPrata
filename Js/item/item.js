const passarMouseJoia = document.querySelector(".joias")
const item = document.querySelector('.backgroundFullWhite')

const acessorios = document.querySelector('.acessorios')
const itemacessorios = document.querySelector('.backgroundFullWhiteAcessorio')

const colar = document.querySelector(".colar")
const itensColar = document.querySelector('.backgroundFullWhiteColares')

const relogios = document.querySelector(".relogios")
const itensRelogios = document.querySelector('.backgroundFullWhiteRelogios')

const pulseiras = document.querySelector(".pulseiras")
const itensPulseiras = document.querySelector(".backgroundFullWhitePulseiras")

const presentes = document.querySelector(".presentes")
const itensPresents = document.querySelector(".backgroundFullWhitePresentes")


passarMouseJoia.addEventListener('mouseenter', () =>{
    const menuAbrir = document.querySelector('.backgroundFullWhite')
    const addHover = menuAbrir.style.display = 'flex'
    return addHover
})

item.addEventListener('mouseenter', () =>{
    const menuAbrir = document.querySelector('.backgroundFullWhite')
    const addHover = menuAbrir.style.display = 'flex'
    return addHover
})

item.addEventListener('mouseleave', () =>{
    const fechar = document.querySelector('.backgroundFullWhite')
    const removeHover = fechar.style.display = 'none'
    return removeHover
})


acessorios.addEventListener('mouseenter', ()=>{
    const menuAbrirAcessorio = itemacessorios
    const addHoverAcessorio = menuAbrirAcessorio.style.display = 'flex'
    return addHoverAcessorio
})

itemacessorios.addEventListener('mouseenter', () =>{
    const menuAbrirAcessorio = itemacessorios
    const addHoverAcessorio = menuAbrirAcessorio.style.display = 'flex'
    return addHoverAcessorio
})

itemacessorios.addEventListener('mouseleave', ()=>{
    const fechar = itemacessorios
    const removerHoverAcessorio = fechar.style.display = 'none'
    return removerHoverAcessorio
})

colar.addEventListener('mouseenter', ()=>{
    const menuAbrirColar = itensColar
    const addHoverColar = menuAbrirColar.style.display = 'flex'
    return addHoverColar
})

itensColar.addEventListener('mouseenter', () =>{
    const menuAbrirColares = itensColar
    const addHoverColar = menuAbrirColares.style.display = 'flex'
    return addHoverColar
})

itensColar.addEventListener('mouseleave', ()=>{
    const fecharColares = itensColar
    const removerHoverColares = fecharColares.style.display = 'none'
    return removerHoverColares
})

relogios.addEventListener('mouseenter', ()=>{
    const menuAbrirRelogios = itensRelogios
    const addHoverRelogios = menuAbrirRelogios.style.display = 'flex'
    return addHoverRelogios
})

itensRelogios.addEventListener('mouseenter', () =>{
    const menuAbrirRelogios = itensRelogios
    const addHoverRelogios = menuAbrirRelogios.style.display = 'flex'
    return addHoverRelogios
})

itensRelogios.addEventListener('mouseleave', ()=>{
    const fecharRelogios = itensRelogios
    const removerHoverRelogios = fecharRelogios.style.display = 'none'
    return removerHoverRelogios
})


pulseiras.addEventListener('mouseenter', ()=>{
    const menuAbrirPulseira = itensPulseiras
    const addHoverPulseiras = menuAbrirPulseira.style.display = 'flex'
    return addHoverPulseiras
})

itensPulseiras.addEventListener('mouseenter', () =>{
    const menuAbrirPulseiras = itensPulseiras
    const addHoverPulseiras = menuAbrirPulseiras.style.display = 'flex'
    return addHoverPulseiras
})

itensPulseiras.addEventListener('mouseleave', ()=>{
    const fecharPulseiras = itensPulseiras
    const removerHoverPulseira = fecharPulseiras.style.display = 'none'
    return removerHoverPulseira
})


presentes.addEventListener('mouseenter', ()=>{
    const menuAbrirPresente = itensPresents
    const addHoverPresente = menuAbrirPresente.style.display = 'flex'
    return addHoverPresente
})

itensPresents.addEventListener('mouseenter', () =>{
    const menuAbrirPresente = itensPulseiras
    const addHoverPresentes = menuAbrirPresente.style.display = 'flex'
    return addHoverPresentes
})

itensPresents.addEventListener('mouseleave', ()=>{
    const fecharPresente = itensPresents
    const removerHoverPresentes = fecharPresente.style.display = 'none'
    return removerHoverPresentes
})