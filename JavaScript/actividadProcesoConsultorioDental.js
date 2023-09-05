//Programa para atender paciente

function verificarPaciente(nombre){
    console.log("El/la paciente " + nombre +  " está registrad@ en las citas del día.");
    
}

function verificarFechaPaciente(cita){
    console.log("El paciente tiene cita el día " + cita);
    let fechaCita = cita + " está agendada";
    
    console.log("Su cita del " + fechaCita + " por consultorio Feliz");
    fechaCita;
}

function verificarHora(horaCita, minutosCita){
    console.log("La hora de la cita es a las: " + horaCita + " horas con " + minutosCita + " minutos.");
}

function pasarPaciente(){
    verificarPaciente("Berenice"); 
    
    verificarFechaPaciente("14/Septiembre/2023");

    verificarHora(13, 30);
}

pasarPaciente();


