async function  alertForm (){
    await Swal.fire({
        title:'Formulario enviado con exito',
        html: '<span class="colorTextAlert">Te contactare a la brevedad</span>',
        icon: 'success',
        width: '30%',
        padding: '1rem',
        timer: '2500',
        stopKeydownPropagation: false,
        showConfirmButton: false
    })
}
