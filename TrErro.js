function TratarErro(){
    try{ valorInexistente;
    }catch(e){
        console.log("A variavel não foi definida " + e.message);
    }
}

function Continuar(){
    console.log("Continue...");
}
TratarErro();
Continuar();
