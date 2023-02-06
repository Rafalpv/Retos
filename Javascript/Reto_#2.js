/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
 */


const Player = {
    P1 : "P1",
    P2 : "P2"
}

function partidoTenis(puntos) {
    
    let p_actual;
    let P1_points = 0, P2_points = 0;
    let fin = false;

    for (let i = 0; i < puntos.length && !fin; i++) {
        p_actual = puntos[i];
        
        if(p_actual == "P1"){
            switch (P1_points){
                case 0 :
                case 15 : P1_points+= 15;
                    break;
                case 30 : P1_points += 10;
                    break;
                case 40 :
                default : P1_points++;
                    break;

            }

        } else {
            switch (P2_points){
                case 0 :
                case 15 : P2_points+= 15;
                    break;
                case 30 : P2_points += 10;
                    break;
                case 40 :
                default: P2_points++;
                    break;
            }
        }

        if(P1_points === 41 && P2_points < 40){ // Victoria P1
            console.log("Ha ganado P1");
            fin = true;

        }

        else if(P2_points === 41 && P1_points < 40){ // Victoria P2 
            console.log("Ha ganado P2");
            fin = true;
        }

        else if(P1_points >= 40 && P2_points >= 40){ // Ventaja
            if(P1_points > 40 && P1_points > P2_points+1){
                console.log("Ha ganado P1");
                fin = true;
            }
            else if(P2_points > 40 && P2_points > P1_points+1){
                console.log("Ha ganado P2");  
                fin = true;
            }
            else if(P1_points === P2_points)
                console.log("Deuce");
            else if(P1_points > P2_points)
                console.log("Ventaja P1");
            else
                console.log("Ventaja P2");

        }else   // Resto
            console.log((P1_points > 0 ? P1_points.toString() : "Love" ) + " - " + (P2_points > 0 ? P2_points.toString() : "Love" ));
    }

}


const puntos = [Player.P1,Player.P1,Player.P2,Player.P2,Player.P1,Player.P2,Player.P1,Player.P1]
partidoTenis(puntos);