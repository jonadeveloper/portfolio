function alertForm(e){
        e.preventDefault()
        Swal.fire({
        title:'Formulario enviado con exito',
        html: '<span class="colorTextAlert">Te contactare a la brevedad</span>',
        icon: 'success',
        width: '30%',
        padding: '1rem',
        timer: '7000',
        stopKeydownPropagation: false,
        showConfirmButton: false
    })
}
