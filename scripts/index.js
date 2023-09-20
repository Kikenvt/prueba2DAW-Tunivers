/* Lo que busque por internet

let boton=document.querySelector("#cambiar_color");
boton.addEventListener("click", ()=>
    {
        let aleatorio1= Math.floor(Math.random() * (255+1-0) + 0);
        let aleatorio2= Math.floor(Math.random() * (255+1-0) + 0);
        let aleatorio3= Math.floor(Math.random() * (255+1-0) + 0);
        let aleatorio4= Math.floor(Math.random() * (255+1-0) + 0);
        document.body.style.backgroundColor=`rgba(${aleatorio1}, ${aleatorio2}, ${aleatorio3}, ${aleatorio4})`;
    });
*/

// Funcion para generar un color aleatorio en formato hexadecimal
const generateRandomColor = () => {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log("Color hexadecimal generado: " + color);
  return color;
};

// Funcionpara cambiar el color de fondo del body
const changeBackgroundColor = () => {
  const newColor = generateRandomColor();
  document.body.style.backgroundColor = newColor;
};

//Agregar un evento al boton para cambiar el color al hacer click
const changeColorBtn = document.getElementById("changeColorBtn");
