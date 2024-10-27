function displayInfo() {
    // Obtener los valores ingresados
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const contactPhone = document.getElementById("contactPhone").value;

    // Obtener y mostrar la imagen seleccionada
    const photoInput = document.getElementById("photo");
    const outputPhoto = document.getElementById("outputPhoto");

    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            outputPhoto.src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    }

    // Mostrar la información en pantalla
    document.getElementById("outputName").innerText = name;
    document.getElementById("outputAge").innerText = age;
    document.getElementById("outputCity").innerText = city;
    document.getElementById("outputState").innerText = state;
    document.getElementById("outputContact").innerText = contactPhone;

    // Mostrar el div con los resultados
    document.getElementById("output").style.display = "block";
}
