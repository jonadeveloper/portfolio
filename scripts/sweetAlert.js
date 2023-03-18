function  alertForm (){
        Swal.fire({
        title:'Formulario enviado con exito',
        html: '<span class="colorTextAlert">Te contactare a la brevedad</span>',
        icon: 'success',
        width: '30%',
        padding: '1rem',
        timer: '3000',
        stopKeydownPropagation: false,
        showConfirmButton: false
    })
}
