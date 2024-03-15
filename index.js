//Funcion para simular la obtencion de datos de la API
function fetchDestinations(){
    return new Promise(resolve =>{
        //Simulamos una solicitud de la API con un retardo de 1 segundo
        setTimeout(()=>{
            const destinations=[
                {id:1,title:'San Andrés'},
                {id:2,title:'Girardot'},
                {id:3,title:'Amazonas'},
                {id:4,title:'La Guajira'},
                {id:5,title:'Santa Marta'},
                {id:6,title:'Punta Cana'}
            ]
            resolve(destinations)
        },1000)
    })
}

//funcion principal asincronica
async function loadDestinations(){
    try{
        console.log('Carganding destinos')
        //obtener datos de la api utilizando el await
        const destinations=await fetchDestinations()
        //limpiar la lista antes de agregar nuevos elementos
        document.getElementById('destinations-lists').innerHTML=''
        //mostrar cada destino en la lista
        destinations.forEach(destination => {
            const listItem = document.createElement('li')
            listItem.textContent=destination.title
            document.getElementById('destinations-lists').appendChild(listItem)
        });
        console.log('Carga completa')
    }catch (error){
        //manejar errores
        console.log('Error al caergar',error)
    }
}
document.getElementById('load-destinations-btn').addEventListener('click', loadDestinations)