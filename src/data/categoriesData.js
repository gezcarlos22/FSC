// Constante base de tu Bucket de Oracle Cloud Storage
const OCI_BASE_URL = "https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o";

// Función helper para generar la URL completa evitando repetir código
const getImageUrl = (category, fileName) => {
  // Comprueba si ya tiene una extensión explícita como .jpg, .png, .JPG
  const hasExtension = /\.(jpg|jpeg|png|webp|gif|JPG|JPEG|PNG)$/i.test(fileName);
  const fileWithExt = hasExtension ? fileName : `${fileName}.jpg`;

  return `${OCI_BASE_URL}/${encodeURIComponent(category)}/${encodeURIComponent(fileWithExt)}`;
};

// IDs Animales
const coverAnimalesIds = ['A9', 'A11', 'A15', 'A8', 'A4'];

const animalesIds = [
  'A9', 'A11', 'A15', 'A8', 'A4', 'A1', 'A3', 'A6', 'A20', 'A2', 'A10', 
  'A21', 'A14', 'A19', 'A12', 'A24', 'A18', 'A26', 'A5', 'A23', 'A22', 
  'A13', 'A16', 'A17', 'A27', 'A25', 'A28'
];

// IDs Productos
const coverProductosIds = ['P15', 'P9', 'P14', 'P8', 'P7'];

const productosIds = [
  'P15', 'P9', 'P14', 'P8', 'P7', 'P6', 'P5', 'P10', 'P13', 'P12', 'P11',
  'P40', 'P41', 'P39', 'P37', 'P38', 'P34', 'P33', 'P36', 'P35', 'P4',
  'P32', 'P31', 'P30', 'P3', 'P29', 'P28', 'P27', 'P26', 'P25', 'P24',
  'P23', 'P22', 'P2', 'P19', 'P18', 'P17', 'P16', 'P1', 'P21', 'P20'
];

// IDs Deportes (Fútbol)
const coverDeportesIds = ['F1', 'F23', 'F8'];

const deportesIds = [
  'F22', 'F23', 'F14', 'F19', 'F21', 'F20', 'F16', 'F17', 'F12', 'F8', 
  'F7', 'F3', 'F11', 'F6', 'F13', 'F18', 'F10', 'F5', 'F24', 'F15', 'F1'
];

// IDs Graduaciones / Recibidas
const coverRecibidasIds = [
  getImageUrl('Eventos/Recibidas', 'RECB (17)'),
  getImageUrl('Eventos/Recibidas', 'RECB (10)'),
  getImageUrl('Eventos/Recibidas', 'RECB (31)'),
  getImageUrl('Eventos/Recibidas', 'RECB (51)'),
  ];

const recibidasIds = [
  'RECB (17)', 'RECB (16)', 'RECB (15)', 'RECB (18)', 'RECB (13)', 'RECB (14)', 
  'RECB (19)', 'RECB (20)', 'RECB (68)', 'RECB (63)', 'RECB (44)', 'RECB (49)', 
  'RECB (48)', 'RECB (41)', 'RECB (64)', 'RECB (28)', 'RECB (62)', 'RECB (42)', 
  'RECB (40)', 'RECB (5).JPG',  'RECB (1)',  'RECB (67)', 'RECB (3).JPG',  'RECB (35)', 
  'RECB (34)', 'RECB (39)', 'RECB (23)', 'RECB (7).JPG',  'RECB (36)', 'RECB (38)', 
  'RECB (21)', 'RECB (2)',  'RECB (30)', 'RECB (27)', 'RECB (46)', 'RECB (22)', 
  'RECB (45)', 'RECB (4).JPG',  'RECB (51)', 'RECB (37)', 'RECB (32)', 'RECB (31)', 
  'RECB (29)', 'RECB (24)', 'RECB (43)', 'RECB (65)', 'RECB (66)', 'RECB (33)', 
  'RECB (25)', 'RECB (47)', 'RECB (26)', 'RECB (8)',  'RECB (6).JPG',  'RECB (9)',  
  'RECB (54)', 'RECB (52)', 'RECB (10)', 'RECB (50)', 'RECB (61)', 'RECB (12)', 
  'RECB (55)', 'RECB (53)', 'RECB (58)', 'RECB (57)', 'RECB (11)', 'RECB (56)', 
  'RECB (59)', 'RECB (60)'
];

const coverTymIds = [
  getImageUrl('Eventos/TYM', 'TYM (8).JPG'),
  getImageUrl('Eventos/TYM', 'TYM (2).JPG'),
];

const tymIds = [
  'TYM (1).JPG', 'TYM (4).JPG', 'TYM (6).JPG', 
  'TYM (5).JPG', 'TYM (3).JPG', 'TYM (9).JPG', 
  'TYM (2).JPG', 'TYM (7).JPG', 'TYM (8).JPG'
];

// IDs Empresas

const coverEmpresasIds = [
  getImageUrl('Empresas/HeMod', 'C20'),
  getImageUrl('Empresas/Riiing', 'I14'),
  getImageUrl('Empresas/Riiing', 'I8'),
  getImageUrl('Empresas/HeMod', 'C29'),
];

const heModIds = [
  'C20', 'C18', 'C15', 'C29', 'C21', 'C16', 
  'C28', 'C24', 'C25', 'C3',  'C19', 'C1', 
  'C2',  'C7',  'C4',  'C8',  'C5',  'C14', 
  'C11', 'C13', 'C9',  'C10', 'C12', 'C6', 
  'C22', 'C23'
];

const riiingIds = [
  'I16', 'I15', 'I18.JPG', 'I1',  'I2', 
  'I14', 'I13', 'I11', 'I10', 'I9',  'I8', 
  'I7',  'I6',  'I5', 'I12'
];
const riiingProductIds = [
  'P40', 'P41', 'P39', 'P37', 'P38', 'P34', 'P33', 'P36', 'P35'
];

const welineIds = [
  'P15', 'P9', 'P14', 'P8', 'P7', 'P6', 'P5', 'P10', 'P13', 'P12', 'P11',
];


export const categories = [
  {
    "slug": "empresas",
    "title": "Empresas",
    "subtitle": "Identidad en movimiento",
    "description": "Traducimos los valores y la fuerza de tu marca en una narrativa visual impactante. A través de una estética cinematográfica y fotografía corporativa de vanguardia, capturamos la esencia de tu equipo, la innovación en tus procesos y la infraestructura de tu negocio. Documentamos la cultura empresarial no solo como un espacio de trabajo, sino como un motor de éxito y evolución.",  
    "covers":coverEmpresasIds,
    "section":[
      {
        "logo":"/logos/riiing/riiing_png.png",
        "desc":"",
        images: [
         ...riiingIds.map(id => getImageUrl('Empresas/Riiing', id)),
         ...riiingProductIds.map(id => getImageUrl('Productos', id))
        ],
        "videos": [
          {
            "title": "Fiesta Riiing",
            "url": "https://drive.google.com/file/d/1HzWjeAsjeNAMyiARf1FoksK_8S1qB6DK/preview"
          },
          {
            "title": "Historia 1",
            "url": "https://drive.google.com/file/d/1QVTL2lz3HrbqJ_C6nXo8wn-KcVOGUkL0/preview"
          },
          {
            "title": "Historia 2",
            "url": "https://drive.google.com/file/d/1K-j4oBOYlEedz-A4rnQcKrWtalrlZzEo/preview"
          },
          {
            "title": "Historia 3",
            "url": "https://drive.google.com/file/d/1A-mYW_MBZ9ew23NL4fbNOYsrMxwM3bb1/preview"
          },
        ],
        "posts": [
          { 
            id: 1, 
            url: "https://www.instagram.com/p/DQcdl8zgSns/", 
            caption: `Pasé por @riiingtm y me llevé un teléfono y una Tablet de Samsung para que me acompañen en mis entrenamientos 💪🏼
            Si buscás tecnología, pasá por Riiing 😉`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F1.mp4',
            username: "riiingtm",
            avatarUrl: "/logos/riiing/riiing.png",
            date: "30 de octubre de 2025"
          },
          { id: 2, url: "https://www.instagram.com/p/DPBrc-AjUVv/", 
            caption: `🔥El primer Celular del mercado con IP69: Oppo Reno 13
            👉🏼Te lo podés llevar como premio participando del Sorteo del Riiingversario con tus compras en el mes de Septiembre!
            😎Y lo mejor es que el premio no viene solo: también llevate un smartwatch y auriculares inalámbricos de Riiing. ¿Vos ya estás participando?
            .
            .
            .
            Bases y condiciones en www.riiing.com.ar`, 
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F2.mp4', 
            username: "riiingtm", avatarUrl: "/logos/riiing/riiing.png", 
            date: "25 de septiembre de 2025" },
          { id: 3, url: "https://www.instagram.com/p/DLnBXxKuR1S/", 
            caption: `Ayer fue la entrega de los primeros 40 smartwatch de Talleres por Riiing

            Gracias a todos por venir 🙌😁`, 
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F3.mp4', 
            username: "riiingtm", 
            avatarUrl: "/logos/riiing/riiing.png", 
            date: "Hace 2 semanas" },
          { id: 4, url: "https://www.instagram.com/p/DO4nCo_DFVy/", 
            caption: `💥Sabías que con tus compras podés participar de este combo de Nubia?
            👉🏼Nubia Neo 3 + Auriculares Nubia Liveflip
            .
            .
            .
            Bases y condiciones en www.riiing.com.ar`, 
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F4.mp4', 
            username: "riiingtm", 
            avatarUrl: "/logos/riiing/riiing.png", 
            date: "21 de septiembre de 2025" },
        { 
            id: 5, 
            url: "https://www.instagram.com/p/DOvtIn8judZ/", 
            caption: `El nuevo Motorola Edge 60 llegó para redefinir tu experiencia: pantalla curva, cámara profesional y la potencia de Moto IA. 📱✨ Conseguilo en Riiing en hasta 12 cuotas sin interés en riiing.com.ar o en nuestras +80 sucursales --> Elegí la opción RETIRO YA en tu sucursal más cercana😉`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F5.mp4',
            username: "riiingtm",
            avatarUrl: "/logos/riiing/riiing.png",
            date: "18 de septiembre de 2025"
          },
          { 
            id: 6, 
            url: "https://www.instagram.com/p/DQCYBm0gaxn/", 
            caption: `Unboxing del Smartwatch Zentia Immer Series🚀
            P/D: Mirá lo que es en color naranja😍`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F6.mp4',
            username: "riiingtm",
            avatarUrl: "/logos/riiing/riiing.png",
            date: "20 de octubre de 2025"
          },
          { 
            id: 7, 
            url: "https://www.instagram.com/p/DObxfzjD1LI/", 
            caption: `Galaxy Watch8✨⌚Vení a probártelos a cualquiera de nuestras sucursales y elegí el que más te guste😉`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F7.mp4',
            username: "riiingtm",
            avatarUrl: "/logos/riiing/riiing.png",
            date: "10 de septiembre de 2025"
          },
          { 
            id: 8, 
            url: "https://www.instagram.com/p/DP_zog1js7q/", 
            caption: `En Riiing creemos que la mejor conexión no se mide en megas, sino en abrazos, charlas y momentos compartidos.
            🥰Por eso, en esta edición especial por el día de la madre de #ConectadasxRiiing, invitamos a personas de nuestro equipo a compartir con sus mamás o hijo/as, esa conexión única que los une desde siempre 💛

            Porque más allá de la tecnología, la conexión con mamá es para siempre.`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F8.mp4',
            username: "riiingtm",
            avatarUrl: "/logos/riiing/riiing.png",
            date: "19 de octubre de 2025"
          },
          { 
            id: 9, 
            url: "https://www.instagram.com/p/C6uFCkNxcGK/", 
            caption: `Hoy hicimos un desafío con los jugadores de Belgrano porque queríamos que les den descuentos extra para el Hot sale que ya esta por llegar.👏🏼👏🏼 @clubatleticobelgrano 

            Hay 3 premios🤩 y los van a poder canjear en la página usando los siguientes codigos: 

            👉🏼CARGADORGRATIS para todos los que compren celulares samsung línea s o z se llevan un cargador inalambrico de regalo 

            👉🏼AUDIO20OFF para todos los que compren en la categoría de audio en hot sale 

            👉🏼AURISGRATIS para todos los que compren un celular Motorola se llevan auriculares 3s de regalo 

            Estén atentos porque estos códigos los vamos a activar en horas específicas de Hot sale, les vamos a contar por historias !!🥳🥳`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F9.mp4',
            username: "riiingtm",
            avatarUrl: "/logos/riiing/riiing.png",
            date: "8 de mayo de 2024"
          },
          /*{ 
            id: 10, 
            url: "https://www.instagram.com/p/DNHJ0J4iQ8o/", 
            caption: `Riiingo fue reemplazado?😱
            Claro que no, pero nos enteramos de LA novedad del mes...mirá el video👀`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F10.mp4',
            username: "riiingtm",
            avatarUrl: "/logos/riiing/riiing.png",
            date: "8 de agosto de 2025"
          },*/
          { 
            id: 11, 
            url: "https://www.instagram.com/p/DB19Mi0xnVb/", 
            caption: `Unboxing del smartwatch Riiing Tempo

            Encontralo en riiing.com.ar 👉 🙌🏃‍➡️`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F11.mp4',
            username: "riiingtm",
            avatarUrl: "/logos/riiing/riiing.png",
            date: "1 de noviembre de 2024"
          },
          { 
            id: 12, 
            url: "https://www.instagram.com/p/DA_PVKcRa-y/", 
            caption: `Te presento el nuevo anillo inteligente de Riiing🙌🎁

            Encontralo en hasta 12 cuotas sin interés en Riiing.com.ar ➡️`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F12.mp4',
            username: "riiingtm",
            avatarUrl: "/logos/riiing/riiing.png",
            date: "11 de octubre de 2024"
          },
          { 
            id: 13, 
            url: "https://www.instagram.com/p/DCy2mv8RGvB/", 
            caption: `🎧 Sumergite en tu mundo con los nuevos Sensus de Riiing: comodidad, estilo y sonido que te mueve😉`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F13.mp4',
            username: "riiingtm",
            avatarUrl: "/logos/riiing/riiing.png",
            date: "25 de noviembre de 2024"
          },
          { 
            id: 14, 
            url: "https://www.instagram.com/p/DCUMkjHxS7u/", 
            caption: `Conocé los Auriculares Kosmos 🔥`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F14.mp4',
            username: "riiingtm",
            avatarUrl: "/logos/riiing/riiing.png",
            date: "13 de noviembre de 2024"
          },
          { 
            id: 15, 
            url: "https://www.instagram.com/p/DBeyFF0xiil/", 
            caption: `Te muestro los auriculares sensus Riiing

            Encontralos en riiing.com.ar🏃‍➡️👏🙌`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F15.mp4',
            username: "riiingtm",
            avatarUrl: "/logos/riiing/riiing.png",
            date: "23 de octubre de 2024"
          },
          { 
            id: 16, 
            url: "https://www.instagram.com/p/DR4_jBvjq07/", 
            caption: `Unboxing ASMR ✨️ Volvió a ingresar el trípode Focus 360 Pro de Riiing😍 
            (Activá el sonido😉)`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F16.mp4',
            username: "riiingtm",
            avatarUrl: "/logos/riiing/riiing.png",
            date: "5 de diciembre de 2025"
          },
          { 
            id: 17, 
            url: "https://www.instagram.com/p/DTTBJIMDi8P/", 
            caption: `Ya conociste el nuevo Mic Ultra de Riiing? 😍`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FRiiing%2F17.mp4',
            username: "riiingtm",
            avatarUrl: "/logos/riiing/riiing.png",
            date: "9 de enero de 2026"
          },
        ],
      },
      {
        "title": "He Mod",
        "logo":"/logos/he-mod/he-mod_png.png",
        "desc":"",
        "images": heModIds.map(id => getImageUrl('Empresas/HeMod', id)),
        "posts": [
      { 
        id: 1, 
        url: "https://www.instagram.com/p/DFvpcO1ARgR/", 
        caption: `✨Entrega del Mod 430 – La Casa del Lago ✨

        Hoy cerramos un gran capítulo con la entrega de uno de nuestros grandes proyectos, el MOD430, conocido como la Casa del Lago 🌊🏡

        Un diseño modular innovador, pensado para disfrutar al máximo de su entorno único. 

        Desde la planificación hasta la instalación final, cada detalle fue diseñado y ejecutado con precisión para garantizar confort, funcionalidad y diseño de calidad.

        ¡Felices de ver cómo este proyecto cobra vida y se convierte en un hogar listo para disfrutar! Gracias a nuestro equipo y clientes, quienes confiaron en nosotros para hacerlo posible. 💙

        #lacasadellago #mod430 #arquitecturamodular #innovacionydiseño #entregafinal
        `,
        mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FHeMod%2F1-HEMOD.mp4',
        username: "hemodsas",
        avatarUrl: "/logos/he-mod/he-mod.jpg",
        date: "6 de febrero de 2025"
      },
      { id: 2, 
        url: "https://www.instagram.com/p/C_CFdqAp_6s/", 
        caption: `La casa del lago fue montada ✨

        Te mostramos cada detalle de este maravilloso montaje del MOD 430.

        En tan solo 8 horas esta casa de diseño exclusivo quedó instalada en destino.

        Conoce las infinitas posibilidades que la arquitectura modular tiene para ofrecer.

        #arquitecturamodular #innovación #sustentabilidad #diseñomoderno #arquitecturatransportable`, 
        mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FHeMod%2F2-HEMOD.mp4', 
        username: "hemodsas", 
        avatarUrl: "/logos/he-mod/he-mod.jpg", 
        date: "23 de agosto de 2024" },
      { id: 3, url: "https://www.instagram.com/p/C4b2icrLsDP/", 
        caption: `¡Descubrí la magia de tener tu MOD listo en solo medio día! ✨
 
        En HE MOD, cada paso del proceso está impregnado de excelencia, desde la instalación hasta el montaje. 🏗️

        Nuestras casas modulares ofrecen una combinación única de eficiencia energética y calidad premium. ♻️🌱

        ¡Experimenta la emoción de tener tu hogar listo en poco tiempo! 🌟🏡

        #arquitecturamodular #instalaciónrápida #sostenibilidad #vivemod #hemod #tunuevomododevivir #arquitecturaecofriendly`, 
        mediaUrl: "https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FHeMod%2F3-HEMOD.mp4", 
        username: "hemodsas", 
        avatarUrl: "/logos/he-mod/he-mod.jpg", 
        date: "12 de marzo de 2024" },
    ], 
      },
      {
        "logo":"/logos/weline/weline-png.png",
        "desc":"",
        "images": [
          ...welineIds.map(id => getImageUrl('Productos', id)),
        ],
        "videos":[
          {
            "title": "Weline",
            "url": "https://drive.google.com/file/d/1MuzEDoZTOLoxoUh1qX01HplFH-1OJ25i/preview"
          },
        ],
        "posts":[
          { 
            id: 1, 
            url: "https://www.instagram.com/reels/C4yup6Nr6w5/", 
            caption: `Paso 1, Paso 2, Paso… ⏱️ Siii en solo 2 pasos! Suuuuper fácil, anda corriendo 🏃🏻‍♀️ a tu odontólogo de confianza y unite al mundo de #AlineadoresInvisibles
            `,
            mediaUrl: 'https://res.cloudinary.com/der3q5vw7/video/upload/q_auto/f_auto/v1780104087/publi-weline_pa6tx1.mp44',
            username: "weline.alineadores",
            avatarUrl: "/logos/weline-inst.jpg",
            date: "21 de marzo de 2024"
          },
        ]
      },
      {
        "logo":"/logos/humand/humand-png.png",
        "desc":"",
        "videos":[
          {
            "title": "Humand caso de exito",
            "url": "https://drive.google.com/file/d/1gatw9xdayUDEQazlcU8BDgBfiq9S0BVv/preview"
          },
        ]
      },
    ],
    "highlights": [
      "Retratos corporativos auténticos que humanizan tu marca",
      "Fotografía industrial y de producto con enfoque publicitario",
      "Contenido dinámico optimizado para LinkedIn y canales corporativos",
      "Documentación detallada de procesos, tecnología y plantas operativas"
    ],
    "extra": "Diseñado para corporaciones, startups y negocios tradicionales que buscan elevar su posicionamiento en el mercado. Combinamos técnicas de iluminación avanzadas y narrativa documental para crear un banco de imágenes exclusivo y de alta fidelidad, ideal para reportes anuales, sitios web institucionales y campañas de comunicación interna. Potenciamos tu propuesta de valor frente a clientes e inversores."
  },
  {
    "slug": "eventos",
    "title": "Eventos",
    "subtitle": "Momentos únicos, recuerdos eternos",
    "description": "Inmortalizamos la energía, las emociones y los instantes clave de tus celebraciones más significativas. Desde la magia de un casamiento y la ilusión de unos 15 años, hasta la calidez de un cumpleaños o la distinción de un evento empresarial. Capturamos tanto la imponencia de la ambientación como los gestos espontáneos que le dan vida y autenticidad a cada acontecimiento.",
    "covers": coverTymIds,
    "section":[
      {
        "title": "Casamientos",
        "desc":"",
        "videos": [
          {
            "title": "Ale y Marian - 25/10/2025",
            "url": "https://drive.google.com/file/d/11D4msb_IVWZjJBB3Pt7fhdPck9X9QpvL/preview"
          },
          {
            "title": "Ale y Marian - Hotel Yacanto",
            "url": "https://drive.google.com/file/d/1o0lg4SL97_LqvRBLPT-_S9SYl1JSsbsm/preview"
          },
          {
            "title": "Ale y Marian - Inti Waka",
            "url": "https://drive.google.com/file/d/1sKgpLRm1uvJzL3pGOEfGW-NdHk68-qZ2/preview"
          },
          {
            "title": "Ale y Marian - Short",
            "url": "https://drive.google.com/file/d/1nuLF1X4FceAgniVlKuZywzFBc84ujfNX/preview"
          },
          {
            "title": "Ale y Marian - Video de fotos",
            "url": "https://drive.google.com/file/d/13hUIOCa4Kb3loVn7AyPpJ2KKIQPNIxj2/preview"
          }, 
        ],
      },
      {
        "title": "Egresos",
        "desc":"",
        "videos": [
          {
            "title": "Egreso Merlo 1",
            "url": "https://drive.google.com/file/d/1wgi5JFgjfM9dXXabazdUqkHgwBA0yTEk/preview"
          },
          {
            "title": "Egreso Merlo 2",
            "url": "https://drive.google.com/file/d/1n3rx8oCsMlaVMkJsbi1YNYGnX8IB_yg3/preview"
          },
          {
            "title": "Egreso Merlo 3",
            "url": "https://drive.google.com/file/d/1ICpwXyjLn75RSfqXCHjyCArUDfqqsR0i/preview"
          },
          {
            "title": "Egreso Merlo 4",
            "url": "https://drive.google.com/file/d/11qAUuiQVlsAXlHCv1uaMVe-1__zfreGZ/preview"
          },
        ],
      },
      {
        "title": "15s años",
        "desc":"",
        "videos": [
          {
            "title": "15s Maria Paz",
            "url": "https://drive.google.com/file/d/11-526ZL07zg4FnX-5HUSqboRduPBTSY8/preview"
          },
        ],
      },
      {
        "title": "Eventos",
        "desc":"",
        "images": tymIds.map(id => getImageUrl('Eventos/TYM', id)),
        "posts":[
          { 
            id: 1, 
            url: "https://www.instagram.com/p/DSSvcTbjryT/", 
            caption: `🎥 Dale play para ver el cierre 2025 de nuestra Escuela de Perfeccionamiento junto a sus Dictantes ✨

            Un encuentro para agasajar a nuestros dictantes y a las empresas que acompañaron y fortalecieron cada posgrado.

            #CírculoOdontológicoDeCórdoba #Odontología #EducaciónContinua #FormaciónProfesional #COC

            @mariaconstanzaazar @cesar.malatesta @alemoyanoperio  @andreafernandezarimondi  @andresgoubat  @claudioibanezdr  @daniortodoncia  @dra.fatimagarcia  @draherrera_alejandra  @drakarinabonobalcas.od  @dramercedesjuarezpenalva  @drpjcampisi  @endo.dorrego  @florenciacires  @cecirourera  @franchisena  @ibanezodontologia  @julimenso  @juliochavezlozada  @lucianalardone  @marinamanzano588  @mauriciosnavarro  @od.ignacioarmanino  @od.palaciosveronica  @od.sebastianbustos  @odlilitacabral  @raul_h_villalba  @ricardoarielcontreras  @veroveracucchiaro  @victoria_dor

            @tedequim  @centrosbz  @pabloramirez__3  @ds.argentina  @dentsplysironaarg  @emmanuel.sarria  @tissum.biomateriales  @ultradentarg  @joaquin.gimenez.ud  @rosterdent_oficial
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FEventos%2F2.mp4',
            username: "circulo_odontologico_cba",
            avatarUrl: "/logos/odont.jpg",
            date: "15 de diciembre de 2025"
          },
          { 
            id: 2, 
            url: "https://www.instagram.com/reels/DWSFj-1j1jN/", 
            caption: `Gracias gracias gracias a cada una de las personas, marcas, instituciones que hicieron posible Traslasierra Wine Fest🙌🙌🙌🙌🙌🙌

            Por los vinos del valle, por el trabajo en conjunto y por potenciar el destino haciendo sinergia🤗🤗🤗, salud!!!! 🍷

            @hotelyacanto
            @turismocba
            @dariocapitani
            @sanjavieryacantoturismo
            @sanjavieryacanto.muni
            @municipalidadvilladolores
            @munivilladelasrosas
            @luyabaturismo
            @camaradeturismodesanjavier
            @capsecot_villadolores
            @andigarciaok
            @leorodrigueztur
            @cabaniastantasinia
            @el.boticario.traslasierra
            @elobservadordeltiempo
            @tiendadecozarite
            @hotellomabola
            @santadoma8071
            @lajuanayvos
            @allegretto.heladeria
            @frutosdelpradotraslasierra
            @mana.monte
            @raiz_maderapura
            @che.tostadores
            @allegretto.heladeria
            @acquapuradls
            @integral_herramientas.stihl
            @rito.trasla
            @pasaportecaminosdelvinocordoba
            @wine_booking
            @lauradillon.art
            @xgesculturas
            @corogospelkumbaya
            @sevasttos

            Gracias al lindísimo equipo de trabajo
            @cafedemontana.sanjavier
            @cabaniastantasinia
            📸@santioviedoo
            📽️@ph.fedesosa
            Vane y Stefy
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FEventos%2F1.mp4',
            username: "traslasierrawinefest",
            avatarUrl: "/logos/trasla-fest.jpg",
            date: "24 de marzo de 2026"
          },
          { 
            id: 3, 
            url: "https://www.instagram.com/reels/DWRssntEVUR/", 
            caption: `🍷 Vivimos el Trasla Wine Fest en San Javier y Yacanto

            Un gran evento donde bodegas del Camino del Vino Cordobés se hicieron presentes con sus stands, compartiendo y difundiendo sus vinos, junto a una propuesta de gastronomía KM 0, música en vivo, productores locales y artistas que expusieron sus obras.

            Una experiencia que puso en valor el volumen, la potencia y la excelencia del vino de Traslasierra, destacando el crecimiento de nuestra región.

            Contamos con el acompañamiento y la presencia de @dariocapitani @turismocba ¡Gracias por apoyar este tipo de iniciativas!

            👏🏻 Felicitamos a la organización @cordobawinetravel @traslasierrawinefest por este gran evento. Estamos muy contentos, como Municipalidad, de poder acompañar y ser parte.

            🍇 Este tipo de propuestas impulsan el enoturismo, una actividad en pleno desarrollo y con gran potencial para nuestro pueblo.

            Municipalidad de San Javier y Yacanto
            @sanjavieryacantoturismo
            @martin.garciaok
            @turismocba
            @dariocapitani
            @traslasierrawinefest
            @cordobawinetravel
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FEventos%2F4.mp4',
            username: "sanjavieryacantoturismo",
            avatarUrl: "/logos/sanja.jpg",
            date: "24 de marzo de 2026"
          },
          { 
            id: 4, 
            url: "https://www.instagram.com/ph.fedesosa/reel/DCUa9bdxHlh/", 
            caption: `Mini resumen del cumpleaños de Claudia!!
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FEventos%2F3.mp4',
            username: "ph.fedesosa",
            avatarUrl: "/feddesosa.jpg",
            date: "13 de noviembre de 2024"
          },
        ], 
      },
      {
        "title": "Boliches",
        "desc":"",
        "posts":[
          { 
            id: 1, 
            url: "https://www.instagram.com/p/C9gHk6YO8UP/", 
            caption: `GRACIAS A TODOS LOS QUE COMPARTIERON ESTA FIESTA🔥🔥🔥 
            @eselpeipper 
            @santioviedoo 
            @julian_nts 
            @sashii_ro 
            @chiroledesma 
            @wanzoproducciones
            @balcarcemerlosanluis 
            @solrojo.barber
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FBoliches%2F1.mp4',
            username: "sol.rojo.producciones",
            avatarUrl: "/logos/sol-prod/sol-prod.jpg",
            date: "16 de julio de 2024"
          },
          { 
            id: 2, 
            url: "https://www.instagram.com/p/DApODzOuvGP/", 
            caption: `PRIMAVERA 2024 😎🔥🔥🔥
            @djirupecano 
            @parruccilara 
            @djalearias 
            @santioviedoo 
            @wanzoproducciones
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FBoliches%2F2.mp4',
            username: "sol.rojo.producciones",
            avatarUrl: "/logos/sol-prod/sol-prod.jpg",
            date: "2 de octubre de 2024"
          },
          { 
            id: 3, 
            url: "https://www.instagram.com/p/DDA3HJ6Rg87/", 
            caption: `TE DEJAMOS EL AFTER MOVIE DE LA FIESTA MÁS LINDA DEL VALLE 😍😎

            Edición número 13 de esta fiesta hermosa ❤️🎪🤹‍♀️🤹🤡
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FBoliches%2F3.mp4',
            username: "fiestadedisfracesnabuco",
            avatarUrl: "/logos/nabuco.jpg",
            date: "30 de noviembre de 2024"
          },
        ], 
      },
    ],
    "highlights": [
      "Cobertura fotoperiodística discreta, atenta a cada detalle y emoción",
      "Dominio técnico en iluminación de pistas de baile, salones y escenarios",
      "Videos resumen dinámicos (Reels/TikTok) listos para compartir",
      "Enfoque en los protagonistas, los invitados clave y los momentos más emotivos"
    ],
    "extra": "El servicio definitivo para quienes buscan un registro profesional de primer nivel en sus momentos más importantes. Entendemos el valor de estos encuentros, por lo que entregamos piezas visuales impactantes y perfectamente editadas, diseñadas para revivir la emoción de tus fiestas familiares o potenciar la imagen y el alcance de tus eventos corporativos."
  },
  {
    slug: 'productos',
    title: 'Productos',
    subtitle: 'Esencia de marcas',
    description: 'Transformamos objetos cotidianos en piezas de deseo. Aplicamos técnicas de iluminación de estudio y composición editorial para resaltar los materiales, el diseño y la identidad única de cada producto.',
    // Generación dinámica de URLs para Productos
    covers: coverProductosIds.map(id => getImageUrl('Productos', id)),
    images: productosIds.map(id => getImageUrl('Productos', id)),
    highlights: [
      'Iluminación controlada para evitar reflejos no deseados',
      'Fotografía Macro para detalles imperceptibles al ojo humano',
      'Composición minimalista alineada con el branding',
      'Edición de color precisa para catálogos de alta fidelidad'
    ],
    extra: 'Este servicio está optimizado para ecosistemas de e-commerce de alta gama, lanzamientos estratégicos en redes sociales y campañas de publicidad impresa. A través de una dirección de arte meticulosa, ayudamos a que las marcas proyecten autoridad y profesionalismo mediante una estética visual limpia, moderna y cinematográfica, transformando cada producto en una pieza de comunicación visual de alto impacto que conecta directamente con el consumidor.'
  },
  {
  "slug": "recibidas",
  "title": "Graduaciones",
  "subtitle": "El instante exacto de la victoria",
  "description": "Capturamos el clímax de años de esfuerzo, traducido en pura euforia y alivio. Desde la mirada fija en el cartel de 'Soy Ingeniero/a' hasta el estallido de espuma, pintura y harina con amigos y familia, nos infiltramos en el festejo para congelar la emoción en su estado más salvaje y genuino. No hacemos fotos posadas de protocolo; buscamos la lágrima cómplice de un padre, el abrazo grupal que corta la respiración y los detalles de una fiesta inolvidable. Documentamos el logro de tu vida con la estética vibrante y profesional que se merece.",
  "covers": coverRecibidasIds,
  "images": recibidasIds.map(id => getImageUrl('Eventos/Recibidas', id)),
  "highlights": [
    "Fotografía de acción de alta velocidad para congelar el estallido de cotillón, pintura y espuma.",
    "Foco en la narrativa documental: capturando abrazos espontáneos, lágrimas y risas sin poses forzadas.",
    "Cobertura integral desde la salida del examen, el festejo tradicional en la calle, hasta la fiesta privada.",
    "Edición fotográfica de alto contraste y colores vivos que transmiten la energía y la euforia del momento."
  ],
  "extra": "Cada recibida tiene su propia mística. Nuestro objetivo como fotógrafos es que, cuando mires estas fotos dentro de diez años, vuelvas a sentir el olor a pintura, la adrenalina del bocinazo, el peso de tus amigos encima tuyo y esa libertad absoluta de decir '¡Lo logré!'. Un título universitario se gana una sola vez en la vida; nos aseguramos de que los recuerdos estén a la altura de semejante victoria."
},
{
  "slug": "deportes",
  "title": "Deportes",
  "subtitle": "Cobertura masiva y análisis táctico profesional",
  "description": "Fusionamos la pasión del juego con la precisión del análisis deportivo de alta competencia. Nos encargamos de la transmisión en vivo de eventos, el seguimiento técnico de atletas en tiempo real y el minucioso proceso de análisis de datos, edición de jugadas destacadas y preparación táctica audiovisual. Traducimos el esfuerzo en el campo en piezas de alto impacto visual, donde la adrenalina del juego y el rigor estadístico caminan de la mano para potenciar el rendimiento de equipos, resúmenes de ligas y contenidos premium para televisión y streaming.",
  covers: coverDeportesIds.map(id => getImageUrl('Eventos/Futbol', id)),
  images: deportesIds.map(id => getImageUrl('Eventos/Futbol', id)),
  "posts":[
          { 
            id: 1, 
            url: "https://www.instagram.com/p/DFvpcO1ARgR/", 
            caption: `FINALES 2025 TORNEO CLAUSURA

            📸 @matinahuelph @eze_aguero03 @ph.fedesosa 
            🎬 @martibelveder1 

            #modoucfa #somosucfa #ucfaok #ucfa #futboldeverdad #pasiónporelfútbol
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FDeportes%2F1.mp4',
            username: "ucfaok",
            avatarUrl: "/logos/UCFA.jpg",
            date: "21 de diciembre de 2025"
          },
        ],
  "highlights": [
    "Transmisión en vivo y captura multimedia en campos de juego de alta competencia",
    "Edición dinámica de resúmenes de partidos y videonálisis táctico estructurado",
    "Postproducción audiovisual integral, gráficos interactivos en pantalla y telemetría",
    "Dirección técnica de contenidos adaptada a clubes profesionales, atletas de élite y marcas deportivas"
  ],
  "extra": "El puente definitivo entre la estrategia y la pasión en la cancha. Una cobertura de nivel profesional requiere un control absoluto tanto de la acción física como de los datos del juego; por eso nos involucramos en todo el proceso técnico, desde el pitazo inicial en el estadio hasta el desglose de jugadas en el estudio. Entregamos un producto pulido, con estética televisiva premium y un ritmo dinámico que potencia la identidad del club, la liga o el deportista en la industria competitiva actual."
},
{
  "slug": "produccion",
  "title": "Producción",
  "subtitle": "Cine y sonido profesional",
  "description": "Fusionamos la narrativa cinematográfica con la potencia del diseño sonoro. Nos encargamos de la captura técnica en rodaje, la grabación de audio profesional y el minucioso proceso de edición, montaje y postproducción musical. Traducimos conceptos artísticos en piezas audiovisuales de alto impacto, donde el ritmo del montaje y la fidelidad sonora caminan de la mano para dar vida a videoclips, proyectos de cine y contenidos de calidad premium.",
  "covers": [
    "https://imesvl.ar/wp-content/uploads/2021/03/CINE-FOTO-7-scaled.jpg",
    "https://imesvl.ar/wp-content/uploads/2021/03/CINE-FOTO-11-scaled.jpg", 
    "https://imesvl.ar/wp-content/uploads/2021/03/CINE-FOTO-0-scaled.jpg"
  ],
  "videos":[
  {
    "title":"HECHA PA MI - ES-T - (video oficial)",
    "url":"https://www.youtube.com/embed/qE8m1hTTfk8"
  },
  {
    "title":"ES-T - QUIÉN ME VA A PARAR |Video Oficial|",
    "url":"https://www.youtube.com/embed/0FZKCk85At0"
  },
  {
    "title":"ES-T - QUE SERIA DE MI |Video Oficial|",
    "url":"https://www.youtube.com/embed/JPaWQy067IA"
  }
],
  "highlights": [
    "Grabación y captura de audio profesional directo y mezcla en estudio",
    "Edición de video rítmica y montaje cinematográfico estructurado",
    "Postproducción integral, corrección de color y diseño sonoro envolvente",
    "Dirección técnica adaptada a proyectos musicales, cine independiente y publicidad"
  ],
  "extra": "El puente definitivo entre la música y el cine. Una producción de nivel profesional requiere un control absoluto tanto de lo que se ve como de lo que se escucha; por eso nos involucramos en todo el proceso técnico, desde el primer plano grabado en el set hasta el corte final de edición y el master de audio. Entregamos un producto pulido, con estética cinematográfica y un sonido impecable que potencia la identidad del artista o proyecto en la industria actual."
},
{
    slug: 'animales',
    title: 'Animales',
    subtitle: 'Retratos animales',
    description: 'Más que simples fotografías, buscamos retratar la personalidad y el alma de cada especie. Capturamos la intensidad de la mirada salvaje y la delicadeza de los comportamientos naturales en su hábitat más auténtico.',
    covers: coverAnimalesIds.map(id => getImageUrl('Animales', id)),
    images: animalesIds.map(id => getImageUrl('Animales', id)),
    "posts":[
      { 
            id: 1, 
            url: "https://www.instagram.com/p/CswV1e6Mg2E/", 
            caption: `𝘾𝙊́𝙍𝘿𝙊𝘽𝘼♥️𝙃𝙀𝙍𝙈𝙊𝙎𝘼 🇦🇷 Proyecto Carayá La Cumbre Sierras de Córdoba ♥️ Argentina. 

🎬 @ph.fedesosa

  El @proyecto.caraya es un Centro argentino de rescate, rehabilitación y conservación de primates.

  Proyecto Carayá es el primer y único centro de primates en Argentina . Es una ONG que desarrolla hace más de 20 años el programa de conservación ex –situ de la especie Argentina Alouatta Caraya (Mono Carayá).

  Rescata animales salvajes que han sido víctimas del tráfico ilegal, del mascotismo y la destrucción de sus hábitats naturales. Muchos han vivido situaciones muy traumáticas y llegan al Santuario en condiciones alarmantes.

  Allí comienza el trabajo de rehabilitación y una vez que los individuos se adaptaron al medio y a un grupo consolidado de primates, se procede a liberarlos en el Santuario.

  En el mismo residen más de 10 grupos de primates en total libertad, siendo más de 170 ejemplares de Monos Carayá.

  El Santuario esta abierto todos los días del año.
Está ubicados a 11 km de La Cumbre, a dos horas de la Ciudad de Córdoba.
 Puedes conocer el lugar, a través de una visita guiada entre medio de bosques y montañas y aprender sobre flora y fauna.

🌿 Aprecia y Preserva el Entorno Natural. 
💧 Respeta y Cuida Los Cursos de Agua.
♻️ Minimiza tu Impacto Ambiental.
🚮 La Basura siempre donde corresponde.
🔥 Fuego sólo en lugares habilitados.

𝘾𝙊́𝙍𝘿𝙊𝘽𝘼♥️𝙃𝙀𝙍𝙈𝙊𝙎𝘼
🔴 Aportando con lo más bello de tan linda Provincia ... 🇦🇷 de @sa.tap.ph

#cordobahermosa #visitecordoba #traslasierracordoba #traslasierra #cordobaargentina #córdobaargentina #argentina #cordobaarg #altascumbres #sierrasdecordobaarg #sierrasdecordobaargentina #sierrasdecórdoba #sierrasdecordoba #lacumbre #lacumbrecordoba #proyectocaraya #proyectocarayá #monocaraya`,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FAnimales%2F1.mp4',
            username: "ph.fedesosa",
            avatarUrl: "/feddesosa.jpg",
            date: "27 de mayo de 2023"
          },
    ], 
    highlights: [
      'Enfoque crítico en la mirada (Eye-contact)',
      'Uso de teleobjetivos para no alterar el comportamiento natural',
      'Captura de texturas: pelajes, plumas y escamas en alta definición',
      'Documentación de interacciones sociales entre especies'
    ],
    extra: 'Capturas diseñadas para generar una conexión emocional profunda con la audiencia. Es la herramienta ideal para campañas de rescate con impacto social, publicaciones científicas que exigen precisión técnica y marcas ecológicas que buscan transmitir autenticidad. Unimos sensibilidad artística y rigor visual para comunicar un compromiso real con la biodiversidad y la preservación natural.'
  },
  {
    "slug": "drone",
    "title": "Drone",
    "subtitle": "Perspectivas sin límites",
    "description": "Elevamos la mirada para descubrir patrones, escalas y trayectorias invisibles desde el suelo. Con tecnología aérea de última generación, capturamos planos generales dinámicos, secuencias de seguimiento cinematográficas y perspectivas geométricas perfectas. Redefinimos la forma de mostrar el entorno, aportando un valor estético de gran presupuesto a cualquier proyecto.",
    "covers":[
      "https://adronespace.es/wp-content/uploads/2023/07/fotografia-aerea-y-videos-con-drones-publicidad.jpg",
      "https://adronespace.es/wp-content/uploads/2022/07/fotografia-aerea-y-video-con-drones-empresa-adronespain-I.png", 
      "https://adronespace.es/wp-content/uploads/2020/10/Fotografia-aerea-y-Video-corporativo-con-drones-aa.jpg", 
      "https://res.cloudinary.com/der3q5vw7/image/upload/q_auto/f_auto/v1778773965/C3_vrtclo.jpg",
    ],
    "posts":[
      { 
            id: 1, 
            url: "https://www.instagram.com/conoce_traslasierra/reel/CuKdnpjrczp/", 
            caption: `Dique Boca del Río 🎯 Las Tapias Valle de Traslasierra Córdoba ♥️ Argentina. 

            📸 @ph.fedesosa

              Una segunda contención del Río de Los Sauces, después del Dique La Viña, es el azud compensador Boca del Río, donde se disfruta de un bonito entorno paisajístico. 

              Ya lo conociste?

            Allí encontrarás...

            @clubapa 
            @camping_bocadelrio 
            @truchas.bocadelrio 
            @tila.henen 
            @hostel_la_condesa 
            @posada_latrinidad

            🌿 Aprecia y Preserva el Entorno Natural. 
            💧 Respeta y Cuida Los Cursos de Agua.
            ♻️ Minimiza tu Impacto Ambiental.
            🚮 La Basura siempre donde corresponde.
            🔥 Fuego sólo en lugares habilitados.

              👉  @conoce_traslasierra

            🔴 Página independiente de difusión de Traslasierra, Sierras Grandes y Región Noroeste de Córdoba ♥️ Argentina. De @sa.tap.ph 

            #conocétraslasierra #conoce_traslasierra #traslasierras #visitecordoba #traslasierracordoba #traslasierra #cordobaargentina #córdobaargentina #argentina #cordobaarg #altascumbres #sierrasdecordobaarg #sierrasdecordobaargentina #sierrasdecórdoba #sierrasdecordoba #valledetraslasierra #lastapias #lastapiastraslasierra
            #lastapiascordoba #diquelaviñacórdoba #diquebocadelrio #bocadelrio #bocadelriolastapias #diquebocadelrio
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FDrone%2F1.mp4',
            username: "ph.fedesosa",
            avatarUrl: "/feddesosa.jpg",
            date: "1 de julio de 2023"
          },
          { 
            id: 2, 
            url: "https://www.instagram.com/conoce_traslasierra/reel/CuKdnpjrczp/", 
            caption: `Dique "La Viña"! 
            .
            .
            .
            .
            .
            #dique #traslasierra #cba #cordoba #dji #djımini3pro #djimini3 #drone
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FDrone%2F2.mp4',
            username: "ph.fedesosa",
            avatarUrl: "/feddesosa.jpg",
            date: "8 de mayo de 2023"
          },
          { 
            id: 3, 
            url: "https://www.instagram.com/conoce_traslasierra/reel/CuKdnpjrczp/", 
            caption: `.
            .
            .
            #pozonesdecaleufu #caleufu #patagonia #sanmartindelosandes #neuquen #patagoniaargentina #sony #dji #djimini3pro #drone #parati #travel
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FDrone%2F3.mp4',
            username: "ph.fedesosa",
            avatarUrl: "/feddesosa.jpg",
            date: "17 de mayo de 2024"
          },
          { 
            id: 4, 
            url: "https://www.instagram.com/ph.fedesosa/reel/C6l1LwfrBmO/", 
            caption: `#hosteriahuahum #huahum #lago #lagononthue #sanmartindelosandes #neuquen #neuquenargentina #argentina #patagonia #sur #drone #dji #mini3pro #muelle #muellehuahum #parati
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FDrone%2F4.mp4',
            username: "ph.fedesosa",
            avatarUrl: "/feddesosa.jpg",
            date: "5 de mayo de 2024"
          },
          { 
            id: 5, 
            url: "https://www.instagram.com/ph.fedesosa/reel/C7o-Tp7R5q0/", 
            caption: `El río Correntoso es un río ubicado en Villa La Angostura 🇦🇷. Este río va desde el lago Correntoso hacia el lago Nahuel Huapi, destacándose por ser uno de los ríos más cortos del mundo, con entre 200 y 300 m de longitud.
            #rio #riocorrentoso #riomascortodelmundo #lagocorrentoso #nahuelhuapi #villalangostura #patagonia #patagoniaargentina #argentina #dji #drone #djimini3pro #travel #parati 
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FDrone%2F5.mp4',
            username: "ph.fedesosa",
            avatarUrl: "/feddesosa.jpg",
            date: "31 de mayo de 2024"
          },
          { 
            id: 6, 
            url: "https://www.instagram.com/ph.fedesosa/reel/C58vqjuL_cS/", 
            caption: `.
            .
            .
            .
            .
            .
            #lago #queñi #lagoqueñi #neuquen #argentina #pesca #pez #drone #dji #djimini3pro #sony #sonya7iii #montaña #bosque #parati
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FDrone%2F6.mp4',
            username: "ph.fedesosa",
            avatarUrl: "/feddesosa.jpg",
            date: "19 de abril de 2024"
          },
          { 
            id: 7, 
            url: "https://www.instagram.com/ph.fedesosa/reel/CvS5OpkgnvT/", 
            caption: `Atardecer en Nono, Traslasierra.

            #nono #traslasierra #cba #cordobaturismo #cordoba #dji #djimini3pro #djiglobal #djidrone #m83 #reels #montaña #goldenhour #youpic
            `,
            mediaUrl: 'https://objectstorage.us-phoenix-1.oraclecloud.com/n/axslkpadz0ub/b/FSC-Fotos/o/Videos%2FDrone%2F17.mp4',
            username: "ph.fedesosa",
            avatarUrl: "/feddesosa.jpg",
            date: "29 de julio de 2023"
          },
    ], 
    "highlights": [
      "Tomas aéreas en resolución 4K y perfiles de color profesional",
      "Vuelos de precisión para seguimiento de acción e infraestructura",
      "Ortofotografía y composiciones cenitales de gran impacto visual",
      "Operación bajo estrictas normas de seguridad y pilotos certificados"
    ],
    "extra": "Una herramienta audiovisual indispensable para desarrollos inmobiliarios, producciones de cine, turismo de lujo y seguimiento de macroobras. Nuestras filmaciones y fotografías aéreas enriquecen el hilo conductor de cualquier pieza audiovisual, otorgando una sensación de inmensidad y prestigio técnico que destaca de manera inmediata en el mercado digital actual."
  },
  

];

export const getCategoryBySlug = (slug) => categories.find((category) => category.slug === slug);