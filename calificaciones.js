

function Nota_Final(){
    let parcial1=parceFloat(document.getElementById("parcial1").value);
    let parcial2=parceFloat(document.getElementById("parcial2").value);
    let parcial3=parceFloat(document.getElementById("parcial3").value);
    let ef=parceFloat(document.getElementById("ef").value);
    let tf=parceFloat(document.getElementById("tf").value);
    let Nota_Parcial=(parcial1 + parcial2 + parcial3)/3; 
    let promedio= 0.55*(Nota_Parcial)+0.3*(ef) + 0.15*(tf);
    console.log(promedio)
    return promedio;


}