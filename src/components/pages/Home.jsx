import React from 'react'
import SliderHeroListContainer from '../silderHero/SliderHeroListContainer'
import { useParams } from 'react-router'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { Button } from 'react-bootstrap'

const Home = () => {
  const params = useParams()

  const data = [
    {
      name: "Hogwarts Legacy",
      price: 39.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697055811/gameStation-ecommerce/ItemListContainer/dvshgq52bdszhfg72lmx.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697055664/gameStation-ecommerce/ItemDetailContainer/rwbg1hd8vjyhu4mafagt.png",
      category: "Fantasía",
      device: "PS4/PS5",
      description: "Hogwarts Legacy es un RPG de acción en un mundo abierto ambientado en el universo de los libros de Harry Potter. Embárcate en una aventura que te llevará por lugares nuevos y conocidos, mientras descubres animales mágicos, personalizas tu personaje, elaboras pociones, dominas hechizos, mejoras tus talentos y te conviertes en el mago que siempre has querido ser."

    },
    {
      name: "FC 24",
      price: 69.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697122084/gameStation-ecommerce/ItemListContainer/xkszdzz49cthbdxa7fzh.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697122062/gameStation-ecommerce/ItemDetailContainer/zocdx54l8dxdvt2qi4oa.jpg",
      category: "Deportes",
      device: "PS4/PS5",
      description: "EA SPORTS FC™ 24 representa una nueva era para el Juego de Todos: más de 19,000 futbolistas con licencia total, más de 700 equipos y más de 30 ligas en la experiencia futbolística más auténtica jamás creada"

    },
    {
      name: "Mortal Kombat™ 1",
      price: 69.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697123050/gameStation-ecommerce/ItemListContainer/nplanfxdlqd1uktptv2b.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697123042/gameStation-ecommerce/ItemDetailContainer/yutapykb0ggdi4mes7hd.jpg",
      category: "Pelea",
      device: "PS5",
      description: "Descubre el nuevo universo de Mortal Kombat, creado por el Dios del Fuego Liu Kang. ¡Mortal Kombat™ 1 marca el comienzo de una nueva era para la icónica franquicia, con un sistema de lucha, modos de juego y Fatalities nuevos!"

    },
    {
      name: "Mortal Kombat XL",
      price: 19.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697123368/gameStation-ecommerce/ItemListContainer/qouwv8hmtasjij4renha.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697123361/gameStation-ecommerce/ItemDetailContainer/clh5ocasb0ddy5gszx4u.jpg",
      category: "Pelea",
      device: "PS4",
      description: "¡Uno de los títulos más vendidos de 2015 se hace XL! Kompleta la experiencia Mortal Kombat X con contenidos nuevos y material ya existente. Incluye el juego principal y nuevos personajes para llevar, como Alien, Leatherface, Triborg y Bo' Rai Cho"

    },
    {
      name: "Marvel's Spider-Man 2",
      price: 69.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697123701/gameStation-ecommerce/ItemListContainer/eobrpaw6jfvws5ofusmg.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697123700/gameStation-ecommerce/ItemDetailContainer/wbk1bmnwhj8hedkh4s5q.jpg",
      category: "Acción",
      device: "PS5",
      description: "Los Spider-Men Peter Parker y Miles Morales se enfrentan a la prueba de fuerza definitiva dentro y fuera de sus trajes mientras luchan por salvar a la ciudad, a sus seres queridos y a ellos mismos, del monstruoso Venom y la peligrosa nueva amenaza simbionte."

    },
    {
      name: "Assassin's Creed® Mirage",
      price: 49.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697123967/gameStation-ecommerce/ItemListContainer/jvz7fkmitaig1xikz14o.png",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697123965/gameStation-ecommerce/ItemDetailContainer/ji5zf9vj5tultxff8i1s.jpg",
      category: "Acción, Aventura",
      device: "PS5",
      description: "Vive la historia de Basim, un astuto ladrón callejero que busca respuestas y justicia mientras recorre las bulliciosas calles del Bagdad del siglo IX. La antigua y misteriosa organización de los Ocultos cambiará su destino de una forma que nunca habría imaginado y lo convertirá en un Maestro Asesino letal."

    },
    {
      name: "ELDEN RING",
      price: 39.59,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697124404/gameStation-ecommerce/ItemListContainer/ytazbspxt0dos84e8sgn.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697124403/gameStation-ecommerce/ItemDetailContainer/jvosx57sye5reu5a4gkn.jpg",
      category: "Juegos De Rol",
      device: "PS4/PS5",
      description: "EL NUEVO RPG DE ACCIÓN DE FANTASÍA. Levántate, tiznado, y déjate guiar por la gracia para esgrimir el poder del Anillo de Elden y convertirte en un Señor de Elden en las Tierras Intermedias"
      
    },
    {
      name: "Grand Theft Auto V: Edición Premium",
      price: 20.09,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697124771/gameStation-ecommerce/ItemListContainer/qtmsuspzlrpujznr8b5v.png",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697124770/gameStation-ecommerce/ItemDetailContainer/wyscj3hk4ubstwmsiryz.jpg",
      category: "Acción, Aventura",
      device: "PS4",
      description: "Experimenta Grand Theft Auto V, el mundo abierto de Rockstar Games aclamado por la crítica."

    },
    {
      name: "Red Dead Redemption 2",
      price: 19.79,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697124885/gameStation-ecommerce/ItemListContainer/ly6wolhbxxnsrbcbjzj5.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697124882/gameStation-ecommerce/ItemDetailContainer/qerh7yqqyz7ww9dqj0h8.jpg",
      category: "Acción, Aventura",
      device: "PS4",
      description: "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es una historia épica sobre el honor y la lealtad en el umbral de una nueva era."

    },
    {
      name: "Dying Light: The Following",
      price: 29.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697125265/gameStation-ecommerce/ItemListContainer/wbjazyhsoq7b7tlsz2qg.png",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697125262/gameStation-ecommerce/ItemDetailContainer/dfanhre43mqfzo5nujc8.jpg",
      category: "Terror",
      device: "PS4",
      description: "Dying Light: Enhanced Edition es la definición más completa de un juego de mundo abierto ambientado en un futuro postapocalíptico arrasado por los zombis. Ahora disponible en su versión expandida, que lleva la experiencia de juego a un nivel totalmente nuevo"

    },
    {
      name: "The Callisto Protocol™",
      price: 69.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697125502/gameStation-ecommerce/ItemListContainer/jn3muiitwgs7fzp6d4pq.png",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697125498/gameStation-ecommerce/ItemDetailContainer/uhrppvucvtbmibowntqj.jpg",
      category: "Terror",
      device: "PS5",
      description: "En este juego narrativo de terror y supervivencia en tercera persona ambientado 300 años en el futuro, el jugador deberá asumir el papel de Jacob Lee, quien, víctima del destino, termina en la Prisión de Hierro Negro, un penal de máxima seguridad situado en Calisto, la luna de Júpiter. Cuando los presos comienzan a transformarse en criaturas monstruosas, la prisión se convierte en un caos"

    },
    {
      name: "Resident Evil 6",
      price: 19.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697126880/gameStation-ecommerce/ItemListContainer/zesftl97kcnymznsokec.png",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697126878/gameStation-ecommerce/ItemDetailContainer/ng9sbc9fi0ikddymv4rx.jpg",
      category: "Terror",
      device: "PS4",
      description: "Resident Evil 6, con su combinación de acción y horror survival, es toda una experiencia llena de emoción y terror que no podrás olvidar"

    },
    {
      name: "Resident Evil Village",
      price: 39.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697127128/gameStation-ecommerce/ItemListContainer/xhdf4dacjganbblmjkjr.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697127130/gameStation-ecommerce/ItemDetailContainer/hhxpsg9skvcm3d1cgv88.jpg",
      category: "Terror",
      device: "PS4/PS5",
      description: "Vive el survival horror como nunca antes en la 8.ª entrega principal de la aclamada serie Resident Evil: Resident Evil Village"

    },
    {
      name: "Alan Wake Remastered",
      price: 9.89,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697127517/gameStation-ecommerce/ItemListContainer/mzrw1jkvdeh0snmtee4d.png",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697127520/gameStation-ecommerce/ItemDetailContainer/bqaroeh3xmkxsvbzqfir.png",
      category: "Terror",
      device: "PS4/PS5",
      description: "En este galardonado thriller de acción cinemática, el afligido escritor Alan Wake se embarca en la desesperada búsqueda de su mujer desaparecida, Alice. Tras su misteriosa desaparición en el pueblo de Bright Falls, en el Noroeste del Pacífico, Alan descubre las páginas de una historia de terror que supuestamente ha escrito, pero de la que no guarda ningún recuerdo."

    },
    {
      name: "Tormented Souls",
      price: 7.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697128956/gameStation-ecommerce/ItemListContainer/r23wt9gllwiaoeigyyuc.png",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697128956/gameStation-ecommerce/ItemDetailContainer/yadyf9zwougj6rsszfhp.jpg",
      category: "Terror",
      device: "PS4/PS5",
      description: "Tormented Souls te lleva de vuelta a los juegos clásicos de supervivencia y terror, y está inspirado en las series originales de Resident Evil y Alone in the Dark. Tormented Souls se moderniza para la nueva generación, dando un soplo de aire fresco a las aventuras de perspectiva fija, en una historia en la que Caroline Walker investiga la misteriosa desaparición de dos mellizas en una mansión convertida en hospital"

    },
    {
      name: "MADiSON",
      price: 34.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697129278/gameStation-ecommerce/ItemListContainer/l8gpvd1fv6qtby3rfdif.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697129287/gameStation-ecommerce/ItemDetailContainer/uenid5tmqssgmig4oreh.jpg",
      category: "Terror",
      device: "PS5",
      description: "MADiSON es un espeluznante e inmersivo videojuego de terror psicológico en primera persona, con una jugabilidad que perturba y una narrativa que inquieta y convence."

    },
    {
      name: "UFC® 5",
      price: 69.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697129661/gameStation-ecommerce/ItemListContainer/lohjbeoenwpz16pitmtv.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697129667/gameStation-ecommerce/ItemDetailContainer/neeisjzfkwznazad59cd.jpg",
      category: "Deportes",
      device: "PS5",
      description: "EA SPORTS™ UFC® 5 se pone muy real. Gracias a las avanzadas capacidades de renderizado del motor Frostbite™, tus contendientes tienen un parecido inigualable con sus personajes, que se complementa con una fidelidad de entorno de nivel superior que hará que tu camino al octágono parezca el Evento estelar de un PPV"

    },
    {
      name: "Tony Hawk's™ Pro Skater™ 1 + 2 - Lote Multigeneración Deluxe",
      price: 49.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697134396/gameStation-ecommerce/ItemListContainer/nimbaizgk5gw8nezruwz.png",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697134401/gameStation-ecommerce/ItemDetailContainer/wtkhigs4ii4qm2sie1xp.jpg",
      category: "Deportes",
      device: "PS4/PS5",
      description: "Regresa a los juegos de patinaje más icónicos que jamás se han hecho. Juega a Tony Hawk’s™ Pro Skater™ y Tony Hawk’s™ Pro Skater™ 2 en una colección épica remodelada desde cero en increíble HD"

    },
    {
      name: "Moto Racer 4",
      price: 9.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697134713/gameStation-ecommerce/ItemListContainer/ez8fnunhlw44prcm5ynt.png",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697134719/gameStation-ecommerce/ItemDetailContainer/zo0xza9l8ocfcoymyb0w.jpg",
      category: "Deportes",
      device: "PS4",
      description: "En un mundo donde dominan el freestyle y el riesgo, impón tu estilo de pilotaje en cada rincón del planeta. ¡Gana las carreras con clase e impresiona a tus rivales!"

    },
    {
      name: "Drift Horizon: Car Driving & Tuning",
      price: 19.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697135047/gameStation-ecommerce/ItemListContainer/tn0u1dbessm5la4ai3k6.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697135050/gameStation-ecommerce/ItemDetailContainer/vtjvvvtrdch9cbjwc2y6.jpg",
      category: "Deportes",
      device: "PS4",
      description: "Bienvenido al último juego de derrapes en el que tu misión es acumular puntos de derrape y ganar dinero dominando el arte de derrapar. Con nuestro juego, podrás experimentar la emoción de derrapar en diferentes terrenos, como asfalto y nieve"

    },
    {
      name: "Tennis World Tour",
      price: 19.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697135245/gameStation-ecommerce/ItemListContainer/q6ysndqamchyr1fs8oq4.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697135251/gameStation-ecommerce/ItemDetailContainer/msap4uvzzukgzuszhhun.jpg",
      category: "Deportes",
      device: "PS4",
      description: "Métete en la piel de uno de los 30 mejores tenistas del mundo: Roger Federer, Angelique Kerber, Stan Wawrinka y muchas leyendas del tenis"

    },
    {
      name: "Madden NFL 24",
      price: 45.49,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697135461/gameStation-ecommerce/ItemListContainer/za0waiuvigwtzjde30fn.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697135464/gameStation-ecommerce/ItemDetailContainer/fhnkfjcttqdac3sc2spk.jpg",
      category: "Deportes",
      device: "PS4/PS5",
      description: "Presentamos la tecnología SAPIEN en Madden NFL 24 para PS5™. La tecnología SAPIEN ofrece un avance en el realismo de los jugadores de la NFL, con más definición corporal y variedad de físicos que resultan en movimientos realistas"
      

    },
    {
      name: "NBA 2K24 Edición Kobe Bryant",
      price: 69.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697135675/gameStation-ecommerce/ItemListContainer/qabjun3ajnspgyn7suy8.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697135679/gameStation-ecommerce/ItemDetailContainer/hbubhhgswiyyh0iphita.jpg",
      category: "Deportes",
      device: "PS5",
      description: "Arma tu equipo y vive el pasado, el presente y el futuro de la cultura del baloncesto en NBA 2K24. Disfruta de una experiencia auténtica con opciones personalizadas ilimitadas de MyPLAYER, en MyCAREER. Colecciona una gran variedad de leyendas y arma tu alineación ideal en MyTEAM."

    },
    {
      name: "MotoGP™23",
      price: 49.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697135882/gameStation-ecommerce/ItemListContainer/vr3v8qlbm6ci3wyb8rlf.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697135885/gameStation-ecommerce/ItemDetailContainer/x9775cgoxwhswqptezyv.jpg",
      category: "Deportes",
      device: "PS4/PS5",
      description: "Aprieta el acelerador, adelanta a tus oponentes y cruza la línea de meta: vive el sueño de ser el próximo campeón con el nuevo MotoGP™23 más increíble y desafiante que nunca"

    },
    {
      name: "DRAGON BALL XENOVERSE 2",
      price: 19.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697136101/gameStation-ecommerce/ItemListContainer/smppncstpzhlj1ewlans.png",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697136103/gameStation-ecommerce/ItemDetailContainer/dq3zgxahqlouoz1s0lva.jpg",
      category: "Pelea",
      device: "PS4",
      description: "Dragon Ball Xenoverse 2 es la experiencia de juego de Dragon Ball definitiva cargada de acción emocionante, batallas épicas y opciones de personalización infinitas. ¡Crea a tu propio personaje, explora Ciudad Conton y haz equipo con personajes icónicos de la serie como maestro para entrenar y enfrentarte a formidables enemigos y rescatar el flujo de la historia!"

    },
    {
      name: "Street Fighter™ 6",
      price: 59.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697136298/gameStation-ecommerce/ItemListContainer/aobjbk1qvwvvow77vjse.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697136305/gameStation-ecommerce/ItemDetailContainer/tdsdjbvakemedm3g88fp.jpg",
      category: "Pelea",
      device: "PS4/PS5",
      description: "¡Llega el nuevo contendiente de Capcom! Street Fighter™ 6 se lanzará en todo el mundo el 2 de junio de 2023 y representa la próxima evolución de la serie Street Fighter."

    },
    {
      name: "TEKKEN 8",
      price: 69.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697136512/gameStation-ecommerce/ItemListContainer/fkbn996h6sukyumilzzh.png",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697136516/gameStation-ecommerce/ItemDetailContainer/a2r5lszg4ksgc7cdctla.jpg",
      category: "Pelea",
      device: "PS5",
      description: "Prepárate para el siguiente capítulo de la legendaria saga de juegos de lucha, TEKKEN 8."

    },
    {
      name: "Minecraft",
      price: 19.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697136755/gameStation-ecommerce/ItemListContainer/hhirb0ncybvizpvcyghd.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697136759/gameStation-ecommerce/ItemDetailContainer/nikuv4xfmq8widl2yhmj.png",
      category: "Arcade",
      device: "PS4",
      description: "Explora mundos generados al azar y construye cosas increíbles, desde la más humilde de las casas hasta el más majestuoso de los castillos"

    },
    {
      name: "HOT WHEELS UNLEASHED™ 2 - Turbocharged",
      price: 49.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697136997/gameStation-ecommerce/ItemListContainer/lm3kcmfu2kmuanuqfq8p.jpg",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697137000/gameStation-ecommerce/ItemDetailContainer/jqsp9ufzd5mtq5yz1xxf.jpg",
      category: "Arcade",
      device: "PS4/PS5",
      description: "¿A qué esperas? ¡Reserva HOT WHEELS UNLEASHED™ 2 - Turbocharged ahora! Además del juego completo, obtendrás el paquete HOT WHEELS UNLEASHED™ 2 - Rust and Fast Pack , que contiene 2 vehículos: Mod Rod y FusionBusta™"

    },
    {
      name: "Riders Republic™",
      price: 39.99,
      imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697137172/gameStation-ecommerce/ItemListContainer/g0cihsht47gbl21dkqlz.png",
      imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697137175/gameStation-ecommerce/ItemDetailContainer/ngdjypekmb6ihcvncx6j.jpg",
      category: "Arcade",
      device: "PS5",
      description: "¡Lánzate al mundo masivo multijugador de Riders Republic™! Coge tus esquíes, tu tabla de snow, bici o tu traje de alas para explorar el mundo abierto del paraíso de los deportes donde las reglas las pones tú - o las puedes romper."

    }

  ]

  const addData = () => {
    const db = getFirestore();

    const collectionRef = collection(db, "productos")

    for (let item of data) {
      addDoc(collectionRef, item)
        .then(res => console.log(res.id))
        .catch(err => console.log(err))
    }
  }

  /* addData() */
  return (
    <div>
      <SliderHeroListContainer />
      {/* <Button onClick={()=> addData()}>agg productos a firebase</Button> */}
    </div>
  )
}

export default Home