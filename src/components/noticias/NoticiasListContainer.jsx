import React from 'react'
import NoticiasList from './NoticiasList'
import capturaAC from "../../components/imagenes/capturaAC.jpeg";
import capturaAW from "../../components/imagenes/capturaAW.jpeg";
import capturaSpiderman from "../../components/imagenes/capturaSpiderman.jpeg";

const NoticiasListContainer = () => {

    const informacionNoticias={

    
    
    dataNoticiasSpiderman : [
        {
            title: "Marvel's Spider-Man 2 | 20  de octubre",
            text1: "Los Spider-Men Peter Parker y Miles Morales se enfrentan a la prueba de fuerza definitiva con y sin la máscara, y luchan por salvar a la ciudad, a ellos mismos y a sus seres queridos del monstruoso Venom y de la nueva y peligrosa amenaza simbionte.",
            text2: "Los Spider-Men Peter Parker y Miles Morales regresan para una nueva y emocionante aventura de la aclamada franquicia Marvel's Spider-Man para PS5. Balancéate, salta y utiliza las nuevas alas de telaraña para recorrer toda la ciudad de Nueva York de Marvel. También podrás cambiar rápidamente entre Peter Parker y Miles Morales para vivir diferentes historias y canalizar poderes nuevos y épicos, mientras el emblemático villano Venom amenaza con destruir sus vidas, la ciudad y a todos sus seres queridos.",
            image: capturaSpiderman
        }
    ],
    dataNoticias : [
        
        {
            title: "Alan Wake 2 | 27  de octubre",
            text1: "Regresa a los picos del noroeste del Pacífico de Estados Unidos en la esperada secuela de terror sobrenatural de culto de Remedy Entertainment: Alan Wake. Ponte en la piel de Saga Anderson, una sagaz agente del FBI encargada de investigar una extraña cadena de asesinatos que parecen estar relacionados con un cuento de terror.",
            text2: "Del estudio que trajo Control, llega un juego de terror psicológico y de supervivencia con dos protagonistas en dos mundos muy diferentes. Saga Anderson es una hábil agente del FBI a la que han llamado para investigar una serie de asesinatos rituales en el pequeño pueblo de Bright Falls del Noroeste del Pacífico. Alan Wake es un escritor que ha pasado años atrapado en el lugar oscuro, una tenebrosa realidad alternativa que puede cambiar de forma con sus palabras. Aunque nunca se hayan visto, los dos están conectados a través de las distintas realidades, y sus acciones pueden alterar sus mundos. Cuando los eventos retratados en una historia de terror envuelven Bright Falls en una oscuridad corruptora y sobrenatural, tanto Anderson como Wake deben usar el poder de la luz para sobrevivir y proteger a sus seres queridos. En un mundo de víctimas y monstruos en el que la realidad puede alterarse, ¿podrán convertirse en los héroes de esta historia?",
            image: capturaAW
        },
        {
            title: "Assassin's Creed Mirage | 5 de  octubre",
            text1: "Conoce la historia de Basim, un astuto ladrón callejero que recorre las bulliciosas calles del Bagdad del siglo IX en busca de respuestas y justicia. Con una misteriosa y antigua organización conocida como Los Ocultos, se convertirá en un asesino maestro y letal, y cambiará su destino de un modo que nunca habría imaginado.",
            text2: "Adéntrate en la cuna de los primeros Asesinos en esta nueva y emocionante aventura narrativa de mundo abierto. A 15 años de que el primer Assassin's Creed redefiniera el género de aventura, experimenta el parkour y el sigilo característicos de la franquicia como nunca, en Assassin's Creed Mirage. En esta entrega de menor escala que vuelve a las bases de Assassin, un ladrón callejero va en busca de respuestas. Recorre las calles profusamente detalladas, reactivas y vibrantes de Bagdad del siglo IX, revelando los misterios del pasado mientras luchas por asegurar tu futuro. Acecha las sombras. Conviértete en el máximo asesino.",
            image: capturaAC
        }
    ]
}

    return (
        <div>
            <NoticiasList dataNoticiasSpiderman= {informacionNoticias.dataNoticiasSpiderman}
            dataNoticias= {informacionNoticias.dataNoticias}
            />
        </div>
    )
}

export default NoticiasListContainer