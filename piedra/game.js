//Opciones son: 0-> piedra, 1->papel, 2->tijera
        var opciones = [0, 1, 2];

        function opcionAzar(min, max)
        {
	       var numero = Math.floor(Math.random() * (max - min +1) + min);
	       return numero;
        }
        
        //alert(opcionAzar(0,2));
        function usuario (valor)
        {
            valor = parseInt(valor);
            var eleMaquina = opcionAzar(0,2);
            var gana = 0;
            var pierde = 0;
            var empata = 0;
            //document.getElementById("res").innerHTML ="Pos si sirve: " + valor;
            
            // Piedra
            if(valor == 0)
            {
                document.getElementById("title").innerHTML ="Has elegido: Piedra.";
                if(opciones[eleMaquina] == 0)
                {
                    document.getElementById("res").innerHTML ="<br>"+"La maquina eligio piedra, Empate :/";
                    empata++;
                }
                else 
                {
                    if(opciones[eleMaquina] == 1)
                    {
                        document.getElementById("res").innerHTML ="<br>"+"La maquina eligio papel, Pierdes :(";
                        pierde ++;
                    }
                    else
                    {
                        if(opciones[eleMaquina]==2)
                        {
                            document.getElementById("res").innerHTML ="<br>"+"La maquina eligio Tijeras, Ganas :)";
                            gana++;
                        }    
                    }
                }
            }
            
            //Papel
            if(valor == 1)
            {
                document.getElementById("title").innerHTML ="Has elegido: Papel.";
                if(opciones[eleMaquina] == 0)
                {
                    document.getElementById("res").innerHTML ="<br>"+"La maquina eligio piedra, Ganas :)";
                    gana++;
                }
                else 
                {
                    if(opciones[eleMaquina] == 1)
                    {
                        document.getElementById("res").innerHTML ="<br>"+"La maquina eligio papel, Empate :/";
                        empata++;
                    }
                    else
                    {
                        if(opciones[eleMaquina]==2)
                        {
                            document.getElementById("res").innerHTML ="<br>"+"La maquina eligio Tijeras, Pierdes :(";
                            pierde++;
                            document.getElementById("perdidos").innerHTML= pierde;
                        }    
                    }
                }
            }
            //Tijeras
            if(valor == 2)
            {
                document.getElementById("title").innerHTML ="Has elegido: Tjeras.";
                if(opciones[eleMaquina] == 0)
                {
                    document.getElementById("res").innerHTML ="<br>"+"La maquina eligio piedra, Pierdes :(";
                    pierde++;
                }
                else 
                {
                    if(opciones[eleMaquina] == 1)
                    {
                        document.getElementById("res").innerHTML ="<br>"+"La maquina eligio papel, Ganas :)";
                        gana++;
                    }
                    else
                    {
                        if(opciones[eleMaquina]==2)
                        {
                            document.getElementById("res").innerHTML ="<br>"+"La maquina eligio tijeras, Empate :/";
                            empata++;
                        }    
                    }
                }
            }

            document.getElementById("ganados").innerHTML="Juegos ganados " + gana;
            document.getElementById("perdidos").innerHTML="Juegos perdidos " + pierde;
            document.getElementById("empates").innerHTML="Juegos empatados " + empata;
        }
    

