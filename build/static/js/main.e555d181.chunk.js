(this.webpackJsonpmentores=this.webpackJsonpmentores||[]).push([[0],{11:function(a,e,o){},13:function(a,e,o){"use strict";o.r(e);var i=o(1),n=o.n(i),c=o(5),s=o.n(c),t=(o(11),o(6)),r=o(3),d=o.n(r),l=o(0);var m=function(a){var e,o=a.contacto;return(e=o).foto=null==e.foto||""===e.foto?d.a.IMAGE_CONTACTOS_PRO:e.foto,e.Contacto=null==e.Contacto||""===e.Contacto?d.a.ADVISER_CONTACTOS_PRO:e.Contacto,Object(l.jsxs)("div",{className:"contact",children:[Object(l.jsxs)("div",{className:"row align-items-center",children:[Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("img",{className:"icon",alt:"Imagen de: ".concat(o.Nickname),src:o.foto})}),Object(l.jsx)("div",{className:"col-8",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"name-rating col-8",children:[Object(l.jsx)("h3",{children:o.Nickname}),Object(l.jsx)("p",{className:"rating",children:"Nuevo"})]}),Object(l.jsx)("div",{className:"col-4 map",children:Object(l.jsx)("a",{href:"https://www.google.com/maps/place/".concat(o.Ubicacion),target:"_blank",rel:"noreferrer",children:o.Ubicacion})})]})})]}),Object(l.jsx)("ul",{className:"row_skills",children:o.Temas.map((function(a){return Object(l.jsx)("li",{children:a})}))}),Object(l.jsxs)("div",{className:"row_tooltip",children:["Ver m\xe1s >",Object(l.jsx)("span",{className:"tooltiptext",id:"overflow",children:o.Descripcion})]}),Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("a",{href:"https://wa.me/".concat(o.Contacto),target:"_blank",rel:"noreferrer",children:Object(l.jsx)("button",{className:"button-contacto",type:"button",children:o.Publico})})})]})},p=function(a){var e=a.handleSearch;return Object(l.jsx)("input",{id:"myInput",type:"text",placeholder:"\xbfQu\xe9 tema buscas?",onChange:function(a){return e(a)}})},u=o(4);var g=function(a){var e=a.content,o=a.href,i=a.icon;return Object(l.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",children:Object(l.jsxs)("button",{children:[Object(l.jsx)("img",{src:i,alt:"icon"}),e]})})},b=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)(g,{content:"Te lo encontramos",href:"https://docs.google.com/forms/d/e/1FAIpQLScQJmsuWf9TVJwN9KThfqsN5I68m7FKcanrPJg1w5w54xrYrA/viewform?embedded=true",icon:"../img/manage_search.png"}),Object(l.jsx)(g,{content:"Danos tu opini\xf3n",href:"https://wa.me/573042846298",icon:"../img/feedback_black.png"})]})};var T=function(){var a=Object(i.useState)(u),e=Object(t.a)(a,2),o=e[0],n=e[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(p,{handleSearch:function(a){var e=[];e=""===a.target.value?o:u.filter((function(e){return console.log(e.Temas),e.Temas.join().toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(a.target.value.toLocaleLowerCase())})),n(e)}}),Object(l.jsx)("div",{className:"contact-container",children:o.map((function(a){return Object(l.jsx)(m,{contacto:a},a.id)}))}),Object(l.jsx)(b,{})]})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(T,{})}),document.getElementById("root"))},3:function(a,e){a.exports=Object.freeze({IMAGE_CONTACTOS_PRO:"/img/contactosPro.jpg",ADVISER_CONTACTOS_PRO:"573042846298"})},4:function(a){a.exports=JSON.parse('[{"id":1,"Nickname":"Luis","Contacto":573203748687,"Ubicacion":"Bogot\xe1, Colombia","Temas":["Filosof\xeda estoica","Prec\xe1lculo","Ciencias de la computaci\xf3n"],"Descripcion":"Hola soy Luis, si deseas un poco de conversaci\xf3n o incluso una asesoria, no dudes en escribirme, generalmente, estoy con disponibilidad de 8pm a 10 pm.","Publico":"CONTACTO","foto":"/img/Fernando.jpg"},{"id":2,"Nickname":"Seneth","Contacto":573164919000,"Ubicacion":"Bol\xedvar, Colombia","Temas":["Artes pl\xe1sticas","Animaci\xf3n 3D"],"Descripcion":"Llevo 2 a\xf1os como modeladora 3D y desarrolladora de ambientes 3D para videojuegos, trabaj\xe9 2 a\xf1os en Kirvit ltd como desarrolladora de ambientes 3D para Prepard, Flier Simulator y Scanner, motores de simulaci\xf3n de vuelo y veh\xedculos respectivamente.\\nTambi\xe9n hice mis pr\xe1cticas de animaci\xf3n 3d en la empresa Signos Studio de Zipaquir\xe1, d\xf3nde me desempe\xf1\xe9 como modeladora 3D.","Publico":"CONTACTO","foto":"/img/Seneth.jpg"},{"id":3,"Nickname":"Nicol\xe1s","Contacto":573214254818,"Ubicacion":"Bogot\xe1, Colombia","Temas":["Cine y Televisi\xf3n"],"Descripcion":"Soy una persona carism\xe1tica, creativa quien posee la cualidad de generar buenas relaciones interpersonales. Me apasionan los retos que me conlleven a aprender y a mejorar, busco siempre ser una mejor versi\xf3n de m\xed mismo cada d\xeda, soy apasionado y determinado en cumplir los sue\xf1os y metas que me planteo.  Manejo de programas como Premiere Pro, After effects, Photoshop, Audition, Pro tolos, Celtx, kit scenarist, Lightroom y BrightSing.","Publico":"CONTACTO","foto":"/img/nicolas.jpg"},{"id":4,"Nickname":"Joseph","Contacto":573213718166,"Ubicacion":"La Abad\xeda, Envigado","Temas":["IA","Crecimiento personal","CrossFit","Startups","Data Science","Emprendimiento"],"Descripcion":"Hola, soy un emprendedor apasionado por el well being, la inteligencia artificial, los negocios y la educaci\xf3n, te puedo asesorar en Metem\xe1ticas de colegio, Ingl\xe9s, y organizaci\xf3n personal","Publico":"CONTACTO","foto":"/img/joseph.jpg"},{"id":5,"Nickname":"Mono","Contacto":573118194516,"Ubicacion":"Mazur\xe9n, Bogot\xe1","Temas":["Trading","Criptomonedas","Crecimiento personal","Boxeo"],"Descripcion":"Hola me dicen el Mono, llevo 3 a\xf1os trediando con cryptomonedas, tambi\xe9n me gusta practicar boxeo","Publico":"ASISTENTE","foto":"/img/mono.jpg"},{"id":6,"Nickname":"Oscar","Contacto":573042846298,"Ubicacion":"Castilla, Bogot\xe1","Temas":["Finanzas","Competencias automovil\xedsticas","Veh\xedculos de carga pesada","Metas personales"],"Descripcion":"Yo soy gerente de planeaci\xf3n financiera, experiencia en sector financiero y sector de ingenier\xeda, profesional en comercio exterior","Publico":"ASISTENTE","foto":"/img/oscar.jpg"},{"id":7,"Nickname":"Jes\xfas","Contacto":573042846298,"Ubicacion":"Ciudad Verde, Bogot\xe1","Temas":["Arte","Creatividad","Colorimetr\xeda","Nuevas tendencias","Peluquer\xeda innovadora","Limpieza","Orden","Far\xe1ndula","Moda","Atenci\xf3n al cliente"],"Descripcion":"Estilista profesional desde hace 15 a\xf1os con amplia experiencia en mi  profesion. Tengo  La capacidad de transformar a las personas con un estilo creativo, moderno y \xfanico. Mi mayor virtud es dar lo mejor para satisfacer las necesidades de mis clientes. He trabajado durante un largo perido en canales  de tv y peluquerias  reconocidas de la ciudad con mucha disciplina y amor por mi trabajo.","Publico":"ASISTENTE","foto":"/img/jesus.jpg"},{"id":8,"Nickname":"Gabriel","Contacto":573042846298,"Ubicacion":"Tintal, Bogot\xe1","Temas":["Japon\xe9s","Dibujo","Tiro con armas","Servicio militar en colombia","Polic\xeda nacional"],"Descripcion":"Si hay alguien que tiene alguna duda o concejo para prestar el servicio militar, con gusto los ayudo, busco a alguien con quien practicar el idioma japon\xe9s, y hablar de anime. Acesoramiento de tiro con armas para principiantes","Publico":"ASISTENTE","foto":"/img/gabriel.jpg"},{"id":9,"Nickname":"Yara","Contacto":573042846298,"Ubicacion":"Tintal, Bogot\xe1","Temas":["Contadur\xeda p\xfablica","An\xe1lisis de impuestos","Presentaci\xf3n de impuestos","Deducci\xf3n de impuestos","Declaraciones de renta"],"Descripcion":"Soy contadora p\xfablica con m\xe1s de 10 a\xf1os de experiencia, soy experta en analis en presentaci\xf3n y deduccion de impuestos, tengo mucha experiencia en declaraciones de renta tanto para personas naturales como jur\xeddicas","Publico":"ASISTENTE","foto":"/img/yara.jpg"},{"id":10,"Nickname":"Bryant","Contacto":573042846298,"Ubicacion":"Castilla, Bogot\xe1","Temas":["Fotograf\xeda","Ingenier\xeda de telecomunicaciones"],"Descripcion":"Fot\xf3grafo aficionado con 4 a\xf1os de experiencia","Publico":"ASISTENTE","foto":"/img/bryant.jpg"},{"id":11,"Nickname":"Andrew","Contacto":573042846298,"Ubicacion":"Engativ\xe1, Bogot\xe1","Temas":["Seguridad Inform\xe1tica","IA","Medicina"],"Descripcion":"Soy desarrollador full-stack, CTO y Cofundador, me apasiona la inteligencia artificial y la inform\xe1tica","Publico":"ASISTENTE","foto":"/img/andrew.jpg"},{"id":12,"Nickname":"Vanessa","Contacto":573042846298,"Ubicacion":"Woodbury, Minnesota","Temas":["Pedagog\xeda","Shopping","Ingl\xe9s"],"Descripcion":"Hola, soy colombiana viviendo mas de 20 a\xf1os en Estados Unidos, tengo m\xe1s de 15 a\xf1os de experiencia en en educaci\xf3n Montessori, especialmente en ni\xf1os de 3 a 7 a\xf1os.","Publico":"ASISTENTE","foto":"/img/vanessa.jpg"},{"id":13,"Nickname":"Jhonathan","Contacto":16513989026,"Ubicacion":"Woodbury, Minnesota","Temas":["Ling\xfc\xedstica","Educaci\xf3n"],"Descripcion":"Soy estudiante de la escuela Emporial, me gusta ayudar a otros estudiantes en matem\xe9ticas, Ingl\xe9s, Espa\xf1ol y Franc\xe9s","Publico":"ASISTENTE","foto":"/img/jhonathan.jpg"},{"id":14,"Nickname":"Andr\xe9s","Contacto":573042846298,"Ubicacion":"Bogot\xe1, Chapinero","Temas":["Deep learning","Non Performing Loans"],"Descripcion":"Hola soy andr\xe9s y te puedo ense\xf1ar a programar como generalista, .net medio-avanzado","Publico":"ASISTENTE","foto":"/img/1-andres-castro.jpg"},{"id":15,"Nickname":"M\xf3nica","Contacto":573042846298,"Ubicacion":"Usme, Bogot\xe1","Temas":["Cloud Computing","Linux"],"Descripcion":"Hola soy M\xf3nica y puedo ense\xf1arte Configuraci\xf3n de VPN site a site \\nAn\xe1lisis de vulnerabilidades (b\xe1sico) \\nAn\xe1lisis forense (b\xe1sico)","Publico":"ASISTENTE","foto":"/img/2-monica-ramirez.jpg"},{"id":16,"Nickname":"Jeison","Contacto":573042846298,"Ubicacion":"Usme, Bogot\xe1","Temas":["Tecnolog\xeda","Medios digitales"],"Descripcion":"Hola soy Jeison y todo lo que he aprendido en mi trabajo, RRHH y temas y procesos administrativos.","Publico":"ASISTENTE","foto":"/img/3-jeison-guataqui.jpg"},{"id":17,"Nickname":"Andr\xe9s","Contacto":573042846298,"Ubicacion":"Venecia, Bogot\xe1","Temas":["Desarrollo de software"],"Descripcion":"Hola soy Andr\xe9s y te puedo ense\xf1ar Programaci\xf3n","Publico":"ASISTENTE","foto":"/img/4-andres-leon.jpg"},{"id":18,"Nickname":"Juan","Contacto":573042846298,"Ubicacion":"Bosa, Bogot\xe1","Temas":["Ciberseguridad","Ethical hacking"],"Descripcion":"Hola soy Sebasti\xe1n y te puedo ense\xf1ar Reparaci\xf3n de computadores, infraestructura, y soy instructor f\xedsico","Publico":"ASISTENTE","foto":"/img/5-sebastian-ruiz.jpg"},{"id":19,"Nickname":"Yohana","Contacto":573042846298,"Ubicacion":"Sogamoso, Boyac\xe1","Temas":["Tecnolog\xedas limpias","Cambio clim\xe1tico","Planes de gesti\xf3n","Ergonom\xeda laboral","Epidemiolog\xeda ambiental","Epidemiolog\xeda laboral"],"Descripcion":"Hola Soy Yohana, y te puedo ense\xf1ar: Gestion de riesgos laborales desde la normatividad colombiana y Gesti\xf3n de residuos s\xf3lidos.","Publico":"ASISTENTE","foto":"/img/6-yohana-cardenas.jpg"},{"id":20,"Nickname":"Wismark","Contacto":573042846298,"Ubicacion":"Kenedy Bogot\xe1","Temas":["Nataci\xf3n","Canto"],"Descripcion":"Hola soy wismark y te puedo ense\xf1ar en teor\xeda musical y programaci\xf3n","Publico":"ASISTENTE","foto":"/img/7-wismark-castro.jpg"},{"id":21,"Nickname":"David","Contacto":573042846298,"Ubicacion":"Soacha, Bogot\xe1","Temas":["Dise\xf1o","Arte","Baile","Deportes extremos"],"Descripcion":"Hola soy David y puedo ense\xf1ar sobre retrato en carboncillo, arte y Ense\xf1ar sobre tercera percusi\xf3n","Publico":"ASISTENTE","foto":"/img/8-david-aros.jpg"},{"id":22,"Nickname":"Edgar","Contacto":573042846298,"Ubicacion":"Usme, Bogot\xe1","Temas":["Tecn\xf3logia","Linux","Cloud"],"Descripcion":"Hola soy edgard y puedo ense\xf1ar Linux, conceptos de sysadmin, y cosas b\xe1sicas de seguridad","Publico":"ASISTENTE","foto":"/img/9-edgar-hernandez.jpg"},{"id":23,"Nickname":"Luis","Contacto":573042846298,"Ubicacion":"Soacha, Bogot\xe1","Temas":["Percusi\xf3n","Bongos","Arquitectura de software"],"Descripcion":"Hola soy Luis y puedo ense\xf1ar arquitecturas de software, buenas pr\xe1cticas de codificaci\xf3n y gesti\xf3n de equipos de desarrollo, y ense\xf1ar a programar","Publico":"ASISTENTE","foto":"/img/10-luis-bolivar.jpg"},{"id":24,"Nickname":"Miyu","Contacto":573144044768,"Ubicacion":"La abad\xeda, Envigado","Temas":["UX design","Receta veganas","Fitness","CrossFit","Yoga","Dise\xf1o ergon\xf3mico","Minimalismo"],"Descripcion":"Soy de Ki\xf3to (Jap\xf3n), llevo 2 a\xf1os viviendo en Colombia. Estoy aprendiendo dise\xf1o UX y Flutter.","Publico":"CONTACTO","foto":"/img/miyu.jpg"},{"id":25,"Nickname":"Paula","Contacto":573203711011,"Ubicacion":"Colina, Bogot\xe1","Temas":["Dise\xf1o","Sentimientos","Amor"],"Descripcion":"Dise\xf1adora en formaci\xf3n, y podr\xeda decir que psic\xf3loga frustrada. Me gusta hablar de los sentimientos y del amor. Tambi\xe9n, me gusta probar productos nuevos y dar mi perspectiva desde el dise\xf1o. Si quieres una mirada desde el dise\xf1o para alg\xfan proyecto nuevo, ac\xe1 estar\xe9.","Publico":"ASISTENTE","foto":"/img/paula.jpg"},{"id":26,"Nickname":"Sara","Contacto":573132096345,"Ubicacion":"Usaqu\xe9n, Bogot\xe1","Temas":["Tela a\xe9rea","An\xe1lisis de datos","Series"],"Descripcion":"Ingeniera Industial con \xe9nfasis en m\xe9todos cuantitatios y log\xedstica.","Publico":"CONTACTO","foto":"/img/sara.jpg"},{"id":27,"Nickname":"Esteban","Contacto":573132096329,"Ubicacion":"Suesca, Cundinamarca","Temas":["Ultimate","criptomonedas","Suculentas","Planos licencias de construcci\xf3n"],"Descripcion":"Egresado de Ingenier\xeda Civil, apasionado por el Ultimate frisbee, viajar, escuchar m\xfasica, caminar, correr.","Publico":"CONTACTO","foto":"/img/esteban.jpg"},{"id":28,"Nickname":"Sebasti\xe1n","Contacto":573128816750,"Ubicacion":"","Temas":["Desarrollo web","Tecnolog\xeda","M\xfasica","Fotograf\xeda"],"Descripcion":"Trabajo con la web desde hace 10 a\xf1os.","Publico":"CONTACTO","foto":""},{"id":29,"Nickname":"\xc1lvaro","Contacto":573102489302,"Ubicacion":"Usaqu\xe9n, Bogot\xe1","Temas":["Lectura","Gastronom\xeda","Ejercicio f\xedsico"],"Descripcion":"Ingeniero de petr\xf3leos, con m\xe1s de 30 a\xf1os de experiencia en la industria, en perforaci\xf3n y completamiento de pozos.  Especializado en desarrollo de negocios.","Publico":"CONTACTO","foto":"/img/alvaro.jpg"},{"id":30,"Nickname":"Maicol","Contacto":573197852892,"Ubicacion":"Bogot\xe1, Colombia","Temas":["Cuidado animal","Creaci\xf3n de sitios web","Fundaciones"],"Descripcion":"Dise\xf1o web.  Especialidad  HTML, Boostrap y base de datos SQL.","Publico":"CONTACTO","foto":"/img/maicol.jpg"},{"id":31,"Nickname":"Roc\xedo","Contacto":573106975316,"Ubicacion":"Usaqu\xe9n, Bogot\xe1","Temas":["Fotograf\xeda","Filosof\xeda","Terapias altrnativas","Fitness","Yoga","Alimentaci\xf3n saludable","Compostaje","Nuevas tecnolog\xedas"],"Descripcion":"Ingeniera Qu\xedmica. Fisioterapeuta. Soy entrenadora personal, certificada en Pilates, TRX, Estiramiento Global Activo y Reeducaci\xf3n Postural Global. \xdaltimamente dedicada al desarrollo de software con \xe9nfsis en Front end con HTML, CSS, JS, React; as\xed como a un acercamiento conceptual a las tecnolog\xedas de la Cuarta Revoluci\xf3n Industial.","Publico":"CONTACTO","foto":"/img/rocio.jpg"},{"id":32,"Nickname":"Laura","Contacto":573203748687,"Ubicacion":"Sidney, Australia","Temas":["An\xe1lisis de grandes bases de datos","Viajar","Decoraci\xf3n","Dise\xf1o de interiores"],"Descripcion":"Estudi\xe9 Finanzas y Relaciones Internacionales. Soy profesional en an\xe1lisis digital de una de las empresas m\xe1s grandes de Australia. El an\xe1lisis digital incluye el manejo de grandes bases de datos para derivar iniciativas que ayuden al constante desarrollo de los activos digitales que los clientes usan a diario para realizar su compra de seguros de manera digital. Por otro lado me apasiona la decoraci\xf3n y dise\xf1o de interiores. Por \xfaltimo, me encanta viajar cada vez que tengo la oportunidad y conocer nuevos destinos.","Publico":"ASISTENTE","foto":"/img/laura.jpg"},{"id":33,"Nickname":"Gina","Contacto":573118880255,"Ubicacion":"Castilla, Bogot\xe1","Temas":["Gatos","Adopci\xf3n de perros","Adopci\xf3n de gatos","Cuidado de mascotas"],"Descripcion":"Soy cat lover y puedo brindar orientaci\xf3n a las personas que adopten o quieran adoptar gatos o perros acerca de los cuidados, vacunas, esterilizaci\xf3n, sitios para adoptar en Bogot\xe1, apoyo a fundaciones, etc.","Publico":"CONTACTO","foto":""},{"id":34,"Nickname":"Sof\xeda","Contacto":573154142720,"Ubicacion":"El Poblado, Medell\xedn","Temas":["Psicolog\xeda","Neuropsicolog\xeda","Adulto mayor,"],"Descripcion":"Psic\xf3loga egresada de la Universidad CES, con \xe9nfasis al adulto mayor y experiencia en rehabilitaci\xf3n neuropsicol\xf3gica","Publico":"CONTACTO","foto":"/img/sofia.jpg"},{"id":35,"Nickname":"Gianna","Contacto":573207690754,"Ubicacion":"San Antonio de Prado, Medell\xedn","Temas":["Arquitectura","Ilustraci\xf3n an\xe1loga por comisiones","Consultas sobre dise\xf1o arquitect\xf3nico y edici\xf3n de textos,"],"Descripcion":"Soy Arquitecta egresada de la Universidad Nacional de Colombia, con Maestr\xeda en estudios socioespaciales de la Universidad de Antioquia.  Me desempe\xf1o como ilustradora independiente","Publico":"CONTACTO","foto":"/img/gianna.jpg"},{"id":36,"Nickname":"Paola","Contacto":573203748687,"Ubicacion":"Suba, Bogot\xe1","Temas":["Fotograf\xeda","Naturaleza","Aprendizaje","Importaciones y exportaciones"],"Descripcion":"Estudiante, tecn\xf3logo en negociaci\xf3n internacional, con conocimientos en procesos de exportaci\xf3n e importaci\xf3n, ofrezco asesor\xedas para temas relacionados.","Publico":"ASISTENTE","foto":"/img/paola.jpg"},{"id":37,"Nickname":"Daniel","Contacto":573203748687,"Ubicacion":"Suba, Bogot\xe1","Temas":["Tecnolog\xeda","Edici\xf3n de audio y sonido","Senderismo"],"Descripcion":"Soy m\xfasico pianista profesional egresado del Conservatorio de m\xfasica de la Universidad Nacional de Colombia y maestro en Gesti\xf3n Cultural y Creativa de la Universidad Sergio Arboleda. Me he desempe\xf1ado como int\xe9rprete de piano para eventos y conciertos en formato agrupaciones y pianista acompa\xf1ante; tambi\xe9n como docente de piano en escuelas de formaci\xf3n art\xedstica de car\xe1cter p\xfablico en Cundinamarca, en escuelas privadas de m\xfasica en Bogot\xe1 y como profesor de clases particulares de piano. En el sector cultural he realizado procesos de seguimiento pedag\xf3gico para pol\xedticas p\xfablicas en Bogot\xe1 y emprendimiento de proyectos de creatividad musical. ","Publico":"ASISTENTE","foto":"/img/daniel.jpg"},{"id":38,"Nickname":"Sebasti\xe1n","Contacto":573209735385,"Ubicacion":"Soacha, Bogot\xe1","Temas":["Soy Financiero","Consultor en mercados","Consultor de finanzas personales","Finanzas en general","Estrategia e investigaci\xf3n"],"Descripcion":"Soy Financiero interesado en aprender de derecho, de tecnolog\xeda, psicolog\xeda, historia y baile en el corto plazo","Publico":"CONTACTO","foto":"/img/11-sebastian.jpg"},{"id":39,"Nickname":"Walter","Contacto":573225877335,"Ubicacion":"Fontib\xf3n, Bogot\xe1","Temas":["Psic\xf3logo","Estad\xedstica","Inversi\xf3n en mercados","Trader","Inversiones"],"Descripcion":"Soy Psic\xf3logo y me interesa aprender sobre desarrollo web.","Publico":"CONTACTO","foto":"/img/12-walter.jpg"}]')}},[[13,1,2]]]);
//# sourceMappingURL=main.e555d181.chunk.js.map