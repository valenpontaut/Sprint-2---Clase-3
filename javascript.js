medallon=prompt("Por favor, ingrese el tipo de medallón (Carne/Pollo/Veggie):");
medallon.toLowerCase();
carne=0;
pollo=0;
veggie=0;
do{
    medallon=prompt("Respuesta no válida. Por favor, ingrese el tipo de medallón que (Carne/Pollo/Veggie):");
    medallon.toLowerCase();
}while (medallon!="carne" && medallon!="pollo" && medallon!="veggie");
if (medallon=="carne"){
    carne+=1;
}
else if (medallon=="pollo"){
    pollo+=1;
}
else{
    veggie+=1;
}
base=document.getElementById("medallon");
base.innerHTML=`<p>Medallón: ${medallon}</p>`;

pan=prompt("Elija el tipo de pan que prefiere (Pan blanco/Pan negro/Pan sin gluten:)");
pan.toLowerCase();
panB=0;
panN=0;
panSG=0;
do{
    pan=prompt("Respuesta no válida. Por favor, ingrese el tipo de pan que prefiere (Pan blanco/Pan negro/Pan sin gluten:");
    pan.toLowerCase();
}while (pan!="pan blanco" && pan!="pan negro" && pan!="pan sin gluten");
if (pan=="pan blanco"){
    panB+=1;
}
else if (pan=="pan negro"){
    panN+=1;
}
else{
    panSG+=1;
}
base=document.getElementById("pan");
base.innerHTML=`<p>Pan: ${pan}</p>`;

preg=prompt("¿Desea agregar adicionales? (si/no):");
preg.toLowerCase();
queso=0;
tomate=0;
cebolla=0;
lechuga=0;
mayonesa=0;
mostaza=0;
adicional="";
aderezo="";

do{
    extra=prompt("Elija entre queso,tomate,cebolla,lechuga,mayonesa,mostaza:");
    extra.toLowerCase();
    if(extra=="queso"){
        queso+=1;
        adicional+=extra+", ";
    }
    else if(extra=="tomate"){
        tomate+=1;
        adicional+=extra+", ";
    }
    else if(extra=="cebolla"){
        cebolla+=1;
        adicional+=extra+", ";
    }
    else if(extra=="lechuga"){
        lechuga+=1;
        adicional+=extra+", ";
    }
    else if(extra=="mayonesa"){
        mayonesa+=1;
        aderezo+=extra+", ";
    }
    else if(extra=="mostaza"){
        mostaza+=1;
        aderezo+=extra+", ";
    }
    else{
        alert("Los valores ingresados son incorrectos")
    }
    preg=prompt("¿Desea seguir agregando condimentos? (si/no):")
    preg.toLowerCase();
}while (adicional=="si");
base=document.getElementById("adicionales");
base.innerHTML=`<p>Adicionales: ${adicional}</p>`;
base=document.getElementById("aderezos");
base.innerHTML=`<p>Aderezos: ${aderezo}</p>`;

carne=carne*200;
pollo=pollo*150;
veggie=veggie*100;
panB=panB*50;
panN=panN*60;
panSG=panSG*75;
queso=queso*20;
tomate=tomate*15;
cebolla=cebolla*15;
lechuga=lechuga*10;
mayonesa=mayonesa*5;
mostaza=mostaza*5;

precio=carne+pollo+veggie+panB+panN+panSG+queso+tomate+cebolla+lechuga+mayonesa+mostaza;

base=document.getElementById("precio");
base.innerHTML=`<p>Tu hamburguesa vale: $${precio}</p>`;
