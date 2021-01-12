var arrayValues= document.getElementsByTagName("input");
var innerContent=document.getElementsByTagName("td");
var dataValue= document.getElementById("calcMarkov").addEventListener("click",cadenaMarkov);
function cadenaMarkov(){
    //Definiendo el problema
    const poblacion=10000;
    const dataProblem={
        A:5000,
        B:2500,
        C:2500
    }
    //Definiendo estado inicial
    var dataInicial=[];
    for(const [p,v] of Object.entries(dataProblem)){
        dataInicial.push(`${v}`/poblacion);
    }
    //Cargando los datos
    var arrayData=[];
    for(var i=0;i<arrayValues.length;i++){
        arrayData.push(arrayValues[i].value);
    }
    //Calculando resultado
    //Definiendo operacion : dataInicial[n]*arrayData[n]+dataInicial[n+1]*arrayData[n+1]+dataInicial[n+2]*arrayData[n+2]
    var resultMarkov=[];
    var cadenaMarkov=0;
    var m=0;
    var n=0;
    var x=0;
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            cadenaMarkov=(dataInicial[m]*arrayData[n])+cadenaMarkov;
            m++;
            n++;
        }
        resultMarkov.push(cadenaMarkov);
        cadenaMarkov=0;
        m=0;
    }
    resultMarkov.forEach(el=>{
        console.log(el);
    })
    resultMarkov.forEach(el=>{
        innerContent[x].innerHTML=Math.trunc(el*10000);
        x++;
    })
}