

document.addEventListener('DOMContentLoaded', function() {
    console.log('El DOM ha sido completamente cargado y analizado.');
    //cargaremos el header en el apartado del header, asi cuando lentes lo suba entonces se integrará automaticamente
    fetch('componets/header.html')
    .then(res=> res.text())
    .then(data=>{
        document.querySelector('header').innerHTML = data;
    })
    fetch('componets/footer.html')
    .then(res=> res.text())
    .then(data=>{
        document.querySelector('footer').innerHTML = data;
    })
});