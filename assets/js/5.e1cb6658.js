(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{204:function(e,a,o){e.exports=o.p+"assets/img/EL.7eebd04f.png"},205:function(e,a,o){e.exports=o.p+"assets/img/LCH1.6c494ff1.png"},220:function(e,a,o){"use strict";o.r(a);var s=o(28),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"introduccion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduccion"}},[e._v("#")]),e._v(" Introducción")]),e._v(" "),s("h2",{attrs:{id:"¿que-es-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#¿que-es-node-js"}},[e._v("#")]),e._v(" ¿Qué es Node.js?")]),e._v(" "),s("p",[e._v("Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación ECMAScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo, servidores web. Fue creado por Ryan Dahl en 2009 y su evolución está apadrinada por la empresa Joyent, que además tiene contratado a Dahl en plantilla.")]),e._v(" "),s("h2",{attrs:{id:"event-loop-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-loop-node-js"}},[e._v("#")]),e._v(" Event Loop - Node.js")]),e._v(" "),s("p",[e._v("El Event Loop es lo que permite a Node.js realizar operaciones de E / S sin bloqueo, a pesar del hecho de que JavaScript es de un solo subproceso, descargando operaciones al núcleo del sistema siempre que sea posible.")]),e._v(" "),s("p",[e._v("Dado que la mayoría de los núcleos modernos son multiproceso, pueden manejar múltiples operaciones que se ejecutan en segundo plano. Cuando se completa una de estas operaciones, el núcleo le dice a Node.js que se puede agregar la devolución de llamada apropiada a la cola de sondeo para que finalmente se ejecute.")]),e._v(" "),s("img",{attrs:{src:o(204),height:"400",width:"800"}}),e._v(" "),s("div",{staticClass:"language-node extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("                       ┌───────────────────────────┐\n                    ┌─>│           timers          │\n                    │  └─────────────┬─────────────┘\n                    │  ┌─────────────┴─────────────┐\n                    │  │     pending callbacks     │\n                    │  └─────────────┬─────────────┘\n                    │  ┌─────────────┴─────────────┐\n                    │  │       idle, prepare       │\n                    │  └─────────────┬─────────────┘      ┌───────────────┐\n                    │  ┌─────────────┴─────────────┐      │   incoming:   │\n                    │  │           poll            │<─────┤  connections, │\n                    │  └─────────────┬─────────────┘      │   data, etc.  │\n                    │  ┌─────────────┴─────────────┐      └───────────────┘\n                    │  │           check           │\n                    │  └─────────────┬─────────────┘\n                    │  ┌─────────────┴─────────────┐\n                    └──┤      close callbacks      │\n                       └───────────────────────────┘\n")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Ver más ...")]),e._v(" "),s("ul",[s("li",[e._v("Timers: esta fase ejecuta devoluciones de llamada programadas por setTimeout() y setInterval() .")]),e._v(" "),s("li",[e._v("Pending callbacks: ejecuta devoluciones de llamada de E / S diferidas a la siguiente iteración de bucle.")]),e._v(" "),s("li",[e._v("Idle, prepare: solo se usa internamente.")]),e._v(" "),s("li",[e._v("Poll: recuperar nuevos eventos de E / S; ejecutar devoluciones de llamada relacionadas con E / S (casi todas con la excepción de devoluciones de llamada cercanas, las programadas por temporizadores y setImmediate() ); El nodo se bloqueará aquí cuando sea apropiado.")]),e._v(" "),s("li",[e._v("Check: aquí se invocan las devoluciones de llamada setImmediate() .\ndevoluciones de llamada cercanas : algunas devoluciones de llamada cercanas, por ejemplo, socket.on('close', ...).")])]),e._v(" "),s("p",[e._v("Entre cada ejecución del bucle de eventos, Node.js comprueba si está esperando alguna E / S asíncrona o temporizadores y se apaga limpiamente si no hay ninguno.")])]),e._v(" "),s("h2",{attrs:{id:"un-poco-de-historia"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#un-poco-de-historia"}},[e._v("#")]),e._v(" Un poco de historia")]),e._v(" "),s("p",[e._v("Hapi.js fue creado dentro de Walmart Labs por Eran Hammer, quien también creó la especificación OAuth, Hammer siendo líder del equipo de Mobile en Walmart se topó con un problema, el alto tráfico del sitio web los días cercanos al Black Friday.")]),e._v(" "),s("p",[e._v("Es por eso que junto a su equipo deciden crear Hapi, como middleware de express, ya que este no les ofrecía una solución a los problemas que se estaban enfrentando. Luego de ir probando diferentes combinaciones de soluciones deciden crear todo el framework desde cero sobre la base de “Mejor configuración que código”.")]),e._v(" "),s("p",[e._v("Las versiones originales de hapi usaban el framework Express. Walmart descubrió que había limitaciones con Express que hacían que el marco no fuera adecuado para sus requisitos particulares. A Express le faltaban algunas características clave, por lo que Walmart finalmente evolucionó a su propio marco independiente.")]),e._v(" "),s("h2",{attrs:{id:"¿que-es-hapi-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#¿que-es-hapi-js"}},[e._v("#")]),e._v(" ¿Qué es Hapi.js?")]),e._v(" "),s("p",[e._v("Hapi.js (también conocido como hapi) es un marco de código abierto para aplicaciones web.")]),e._v(" "),s("p",[e._v("Hapi está diseñado pensando en aplicativos modularizados de grandes dimensiones. Contempla la separación de la configuración de la lógica del negocio y utiliza su propia forma de realizar las cosas. Este framework es utilizado para crear, Aplicativos Web, APIs REST, APIs en GRaphQL, Proxies HTTP, e integrador de múltiples Backends, entre otras cosas más.")]),e._v(" "),s("p",[e._v("Hapi proporciona un sistema de complementos robusto que le permite agregar nuevas funciones y corregir errores a un ritmo rápido. hapi le permite construir API escalables. Es una excelente opción para crear API de transferencia de estado representacional (REST) ​​porque le proporciona enrutamiento, entrada, validación de salida y almacenamiento en caché. Puede crear una API que sirva a todo tipo de clientes que necesitan aplicaciones móviles y de una sola página.")]),e._v(" "),s("h2",{attrs:{id:"caracteristicas-de-hapi-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#caracteristicas-de-hapi-js"}},[e._v("#")]),e._v(" Características de Hapi.js")]),e._v(" "),s("p",[e._v("EL potencial de hapi se visualiza gracias a los diferentes aspectos que lo compone:")]),e._v(" "),s("h3",{attrs:{id:"seguridad"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seguridad"}},[e._v("#")]),e._v(" Seguridad")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Higiene de código de extremo a extremo:")]),e._v(" hapi requiere la configuración más segura para administrar, controlar y distribuir código, incluido 2FA para todos los contribuyentes.")]),e._v(" "),s("li",[s("strong",[e._v("Valores predeterminados seguros, actualizados regularmente:")]),e._v(" cada componente hapi viene con los valores predeterminados más seguros listos para usar. Junto con la protección de la carga del servidor con límites de carga útil y tiempos de espera de solicitud, hapi bloquea los mensajes de error que podrían filtrar información o hacer eco de exploits.")]),e._v(" "),s("li",[s("strong",[e._v("Arquitectura integrada de autorización y autenticación:")]),e._v(" la API de autorización y autenticación más completa disponible en un marco Node.")]),e._v(" "),s("li",[s("strong",[e._v("Funciones avanzadas:")]),e._v(" con cookies cifradas y firmadas, rotación secreta o de claves y encabezados de seguridad HTTP, no hay excusas para crear aplicaciones inseguras.")]),e._v(" "),s("li",[s("strong",[e._v("Propiedad confiable y predecible:")]),e._v(" cuando algo sale mal, usted sabe a quién contactar. Las actualizaciones de seguridad se manejan bajo un protocolo estricto y bien definido.")]),e._v(" "),s("li",[s("strong",[e._v("Ecosistema rico:")]),e._v(" el extenso conjunto de complementos oficiales de hapi significa que ya no confiarás ciegamente en un middleware que encontraste para la funcionalidad crítica solo porque tiene un alto conteo en npm.")]),e._v(" "),s("li",[s("strong",[e._v("Experiencia en seguridad interna:")]),e._v(" creada por Eran Hammer, autor de las especificaciones OAuth y otros protocolos de identidad.")])]),e._v(" "),s("h3",{attrs:{id:"calidad"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#calidad"}},[e._v("#")]),e._v(" Calidad")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Legibilidad de código:")]),e._v(" si no puede abrir el código fuente de su marco y entender cómo funciona, tarde o temprano tendrá problemas.")]),e._v(" "),s("li",[s("strong",[e._v("Cobertura y estilo:")]),e._v(" 100% de cobertura de código utilizando reglas de cobertura estrictas y un estilo de codificación optimizado para reducir errores y aumentar la comprensión, siempre de principio a fin.")]),e._v(" "),s("li",[s("strong",[e._v("Problemas abiertos:")]),e._v(" hapi y sus complementos oficiales se mantienen activamente con solo un puñado de problemas abiertos o solicitudes de extracción. Pocos otros ecosistemas pueden reclamar este bajo nivel de problemas pendientes de extremo a extremo en cada dependencia.")])]),e._v(" "),s("p",[e._v("Además de estos puntos, otro aspecto que hace diferente a Hapi es que se centra en que el desarrollador se sienta cómodo usando el framework.")]),e._v(" "),s("p",[e._v('Cada característica de hapi está diseñada para hacer que la plataforma sea ​​más fácil y más intuitiva de usar. No hay "magia" : el código hace lo que espera con una lógica interna fácil de seguir.\nLa interfaz de hapi, limpia y fácil de aprender , no ocupa demasiado espacio. Está diseñado para un área de superficie pequeña, lo que le permite crear sus aplicaciones como mejor le parezca, utilizando su estilo y las tecnologías que elija.')]),e._v(" "),s("h2",{attrs:{id:"ciclo-de-vida-hapi-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ciclo-de-vida-hapi-js"}},[e._v("#")]),e._v(" Ciclo de Vida - Hapi.js")]),e._v(" "),s("p",[e._v("Cada solicitud entrante a hapi sigue una ruta predefinida, el ciclo de vida de la solicitud. Y los puntos de extensión individuales dentro del ciclo de vida le permiten interceptar el flujo de solicitudes en varios puntos con su funcionalidad personalizada.")]),e._v(" "),s("img",{attrs:{src:o(205),height:"850",width:"800"}}),e._v(" "),s("p",[s("a",{attrs:{href:"https://hapi.dev/api/?v=19.1.1#request-lifecycle",target:"_blank",rel:"noopener noreferrer"}},[e._v("Explicación del Ciclo de Vida"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=i.exports}}]);