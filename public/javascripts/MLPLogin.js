let comprobar = () => {
    let usuario = "Brandon";
    let contraseña = "221223";
    try {
        let usuarioBtn = document.getElementById("usuario").value;
        let contraseñaBtn = document.getElementById("contraseña").value;
        if (usuarioBtn == usuario && contraseñaBtn == contraseña){
            alert("Bienvenido");
        //window.location.href = 'ejercicio71.html';
    } else {
        alert("Los datos no son validos");
        }  
    } catch (error) {
        alert("Ocurrio un problema");
    }
  }
  
  let ir = () => {
    window.location.href = 'index.html';
  };