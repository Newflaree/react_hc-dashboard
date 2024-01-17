import Swal from 'sweetalert2';

export const useSwal = () => {
  const successSwal = ( title, icon ) => {
    return Swal.fire({
      title,
      icon,
      confirmButtonColor: '#1D3B86',
      confirmButtonText: 'Aceptar',
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }

  const sendEmailSwal = async () => {
    return Swal.fire({
      title: "Sistema de Mensajería",
      text: "Estás a punto de enviar un correo electrónico de manera masiva.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1D3B86",
      cancelButtonColor: "#D32F2F",
      confirmButtonText: "Si, deseo enviarlo",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // TODO: 
        Swal.fire({
          title: "Mensaje enviado",
          text: 'Es mensaje fue enviado con exito a todos los locutores',
          icon: "success",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
        });
      }
    });
  }

  return {
    successSwal,
    sendEmailSwal
  };
}
