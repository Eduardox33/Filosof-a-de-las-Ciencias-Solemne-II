/*
 * Banco de la prueba general.
 * Para editarla: modifique el texto de "pregunta" y "opciones".
 * "correcta" es la posición de la respuesta correcta, contando desde 0:
 * 0 = A, 1 = B, 2 = C, 3 = D.
 */
window.PREGUNTAS_GENERALES = [
  {
    id: 1,
    tema: "Las dos imágenes del mundo",
    pregunta: "¿Qué sostiene Sellars al distinguir la imagen manifiesta de la imagen científica?",
    opciones: [
      "La imagen manifiesta es un error que la ciencia debe eliminar por completo.",
      "La imagen científica es una descripción más, pero reclama primacía explicativa.",
      "Las dos imágenes describen lo mismo y nunca entran en tensión entre sí.",
      "La imagen manifiesta explica mejor el mundo, aunque tenga menor precisión."
    ],
    correcta: 1,
    explicacion: "Sellars no descarta la experiencia cotidiana; estudia su tensión con una ciencia que reclama la última palabra al describir y explicar."
  },
  {
    id: 2,
    tema: "Leyes y regularidades",
    pregunta: "¿Por qué el contrafáctico ayuda a distinguir una ley de una regularidad accidental?",
    opciones: [
      "Porque la ley permite afirmar qué habría ocurrido en un caso no realizado.",
      "Porque la ley describe solamente aquello que ya ocurrió muchas veces antes.",
      "Porque la regularidad accidental predice casos nuevos con mayor precisión.",
      "Porque el contrafáctico muestra que toda repetición es necesaria en el mundo."
    ],
    correcta: 0,
    explicacion: "Una ley sostiene enunciados sobre casos hipotéticos; una mera coincidencia solo resume los casos observados."
  },
  {
    id: 3,
    tema: "Leyes y regularidades",
    pregunta: "¿Qué muestra la comparación entre una esfera gigante de oro y una de uranio-235?",
    opciones: [
      "Que ambas imposibilidades dependen de la cantidad de observaciones disponibles.",
      "Que la forma lógica de dos enunciados basta para reconocer una ley natural.",
      "Que una misma forma verbal puede expresar un accidente o una necesidad física.",
      "Que el oro y el uranio impiden lo mismo, aunque por distintas regularidades."
    ],
    correcta: 2,
    explicacion: "Que no exista una esfera enorme de oro es contingente; con uranio-235 interviene la masa crítica, una necesidad física."
  },
  {
    id: 4,
    tema: "Leyes y regularidades",
    pregunta: "¿Qué diferencia «todo el cobre conduce electricidad» de «todas las monedas de mi bolsillo son de cien pesos»?",
    opciones: [
      "La primera se proyecta a casos nuevos; la segunda solo describe un grupo cerrado.",
      "La primera resume observaciones pasadas; la segunda autoriza nuevos contrafácticos.",
      "Ambas se proyectan a casos nuevos, pero solo la segunda tiene alcance universal.",
      "Ambas describen grupos cerrados, pero solo la primera se conecta con otras leyes."
    ],
    correcta: 0,
    explicacion: "La conductividad del cobre vale para un cable aún no fabricado; el contenido actual del bolsillo no determina la próxima moneda."
  },
  {
    id: 5,
    tema: "Ciencia y sentido común",
    pregunta: "Según la física de Newton, ¿qué fuerza actúa sobre una moneda en el punto más alto de su ascenso, sin rozamiento?",
    opciones: [
      "La gravedad y una fuerza de la mano que disminuye gradualmente.",
      "Solo la fuerza de la mano, pues la gravedad se anula en ese punto.",
      "Solo la gravedad, aunque la velocidad de la moneda sea momentáneamente cero.",
      "Ninguna fuerza, porque en el punto más alto la moneda está en equilibrio."
    ],
    correcta: 2,
    explicacion: "La fuerza de la mano dejó de actuar al perder contacto; la gravedad sigue actuando aunque la velocidad instantánea sea cero."
  },
  {
    id: 6,
    tema: "La imagen científica",
    pregunta: "¿Qué implica la tesis de Galileo sobre colores, sabores y olores para la imagen científica?",
    opciones: [
      "Esas cualidades no existen de ningún modo y deben negarse también en la experiencia.",
      "Esas cualidades son propiedades medibles que bastan para explicar toda la naturaleza.",
      "La física debe incluirlas como causas, aunque no puedan expresarse matemáticamente.",
      "La ciencia gana poder al medir, pero deja fuera aspectos de la experiencia perceptiva."
    ],
    correcta: 3,
    explicacion: "Galileo ubica esas cualidades en quien percibe; la imagen científica se concentra en lo medible sin hacer desaparecer la experiencia."
  },
  {
    id: 7,
    tema: "Causalidad",
    pregunta: "¿Cuál es la conclusión precisa que Hume extrae del ejemplo de las bolas de billar?",
    opciones: [
      "No existen causas en el mundo y el fuego realmente no produce calor.",
      "La conexión necesaria no se observa: la inferimos por la costumbre.",
      "Toda secuencia repetida revela directamente una conexión necesaria.",
      "La causa se conoce por observación, pero nunca puede aplicarse a otro caso."
    ],
    correcta: 1,
    explicacion: "Vemos movimiento, contacto y repetición; no observamos un «tiene que». Hume no niega las causas, sino que analiza cómo las inferimos."
  },
  {
    id: 8,
    tema: "Causalidad",
    pregunta: "Tomo vitamina C, mejoro al cabo de una semana y atribuyo la mejoría al remedio. ¿Qué falacia cometo?",
    opciones: [
      "Confundo explicación con predicción, porque deduzco un hecho de una ley.",
      "Confundo necesidad con universalidad, porque generalizo un solo resultado.",
      "Confundo sucesión temporal con causalidad, al inferir la causa del orden.",
      "Confundo correlación con azar, porque ignoramos las condiciones iniciales."
    ],
    correcta: 2,
    explicacion: "Es el esquema post hoc, ergo propter hoc: que B ocurra después de A no basta para concluir que A causó B."
  },
  {
    id: 9,
    tema: "Causalidad",
    pregunta: "Las ventas de helado y los ahogamientos aumentan juntos. ¿Qué interpretación es adecuada?",
    opciones: [
      "La correlación prueba una causa, pero falta determinar su dirección exacta.",
      "La relación es necesariamente espuria porque las variables son de distinto tipo.",
      "Los ahogamientos elevan las ventas, pues ambas variables varían al mismo tiempo.",
      "El calor puede actuar como tercera variable que influye en ambos fenómenos."
    ],
    correcta: 3,
    explicacion: "Una tercera variable puede producir la covariación; por eso una correlación real no identifica por sí sola una relación causal."
  },
  {
    id: 10,
    tema: "Causalidad",
    pregunta: "¿Por qué al cruzar miles de variables aparecen correlaciones absurdas, como películas y ahogamientos?",
    opciones: [
      "Porque toda correlación entre variables sociales carece de fundamento estadístico.",
      "Porque el azar produce coincidencias cuando se realizan muchas comparaciones.",
      "Porque las variables sin mecanismo conocido no pueden medirse con precisión.",
      "Porque una correlación real siempre exige una tercera variable que la explique."
    ],
    correcta: 1,
    explicacion: "Con suficientes comparaciones, algunas coincidencias surgen por azar; los datos no generan por sí solos una hipótesis causal."
  },
  {
    id: 11,
    tema: "Causalidad",
    pregunta: "¿Qué permite interpretar causalmente un test A/B bien realizado sobre el color de un botón?",
    opciones: [
      "La asignación aleatoria y el control hacen que el color sea la diferencia relevante.",
      "La repetición del resultado demuestra que toda correlación es una conexión necesaria.",
      "El orden temporal entre mostrar el botón y recibir clics basta para inferir la causa.",
      "La cantidad de usuarios elimina cualquier diferencia previa entre los dos grupos."
    ],
    correcta: 0,
    explicacion: "La intervención cambia una variable y la aleatorización equilibra las demás; así la diferencia de clics puede atribuirse al botón."
  },
  {
    id: 12,
    tema: "Causalidad",
    pregunta: "Cuando no es ético asignar personas al azar para fumar, ¿cómo puede evaluarse la causalidad?",
    opciones: [
      "Basta acumular correlaciones, siempre que precedan temporalmente a la enfermedad.",
      "Se debe renunciar a toda inferencia causal, pues solo el experimento aporta evidencia.",
      "Se compara un solo grupo antes y después, controlando únicamente el orden temporal.",
      "Se combinan dosis-respuesta, temporalidad, mecanismo y convergencia de estudios."
    ],
    correcta: 3,
    explicacion: "Sin experimentar se triangulan indicios independientes; ninguno aislado basta, pero su convergencia puede sostener una inferencia causal."
  },
  {
    id: 13,
    tema: "Explicación científica",
    pregunta: "En el modelo nomológico-deductivo de Hempel y Oppenheim, explicar un hecho consiste en…",
    opciones: [
      "predecirlo a partir de cualquier regularidad, sin especificar sus condiciones.",
      "deducirlo de leyes generales junto con condiciones iniciales pertinentes.",
      "justificarlo mediante el propósito que cumple dentro de un sistema natural.",
      "describirlo con una teoría confirmada, aunque no se derive de sus principios."
    ],
    correcta: 1,
    explicacion: "El explanandum se deduce del explanans, formado por leyes y condiciones particulares."
  },
  {
    id: 14,
    tema: "Explicación científica",
    pregunta: "En el ejemplo del radiador reventado, ¿qué elemento pertenece a las condiciones iniciales?",
    opciones: [
      "El agua se expande cuando pasa del estado líquido al estado sólido.",
      "Un recipiente cerrado cede si la presión supera su resistencia material.",
      "La expansión del agua constituye un caso general de cambio de volumen.",
      "El radiador estaba lleno, cerrado y expuesto a temperatura bajo cero."
    ],
    correcta: 3,
    explicacion: "Las condiciones describen la situación particular; las otras opciones formulan regularidades generales del explanans."
  },
  {
    id: 15,
    tema: "Explicación y predicción",
    pregunta: "El barómetro permite anticipar una tormenta, pero no la explica. ¿Por qué?",
    opciones: [
      "Porque el barómetro y la tormenta son efectos de una misma caída de presión.",
      "Porque la predicción barométrica no se deduce de ninguna regularidad general.",
      "Porque el barómetro mide un efecto posterior y no una condición de la tormenta.",
      "Porque explicar exige predecir hechos nuevos, no solamente fenómenos conocidos."
    ],
    correcta: 0,
    explicacion: "La deducción puede apoyarse en un indicador sin identificar la causa; ambos fenómenos tienen una causa común."
  },
  {
    id: 16,
    tema: "Explicación y predicción",
    pregunta: "¿Qué demuestra el ejemplo del asta y su sombra sobre explicar y deducir?",
    opciones: [
      "Toda deducción es explicativa cuando utiliza leyes y datos suficientemente precisos.",
      "La explicación es simétrica: la altura y la sombra se explican recíprocamente.",
      "La deducción puede ir en dos direcciones, pero la explicación solo en una.",
      "La sombra explica la altura, aunque la altura no explique el largo de la sombra."
    ],
    correcta: 2,
    explicacion: "La altura del asta explica la sombra; la sombra permite calcular la altura, pero no explica por qué el asta tiene esa medida."
  },
  {
    id: 17,
    tema: "Explicación y predicción",
    pregunta: "¿Qué tienen en común las tablas babilónicas de eclipses y una red neuronal que predice impagos?",
    opciones: [
      "Ambas muestran que una predicción exitosa equivale a una explicación científica.",
      "Ambas predicen con éxito sin ofrecer necesariamente comprensión del porqué.",
      "Ambas deducen sus predicciones desde principios causales bien comprendidos.",
      "Ambas exigen identificar la causa antes de poder anticipar el caso nuevo."
    ],
    correcta: 1,
    explicacion: "El éxito predictivo no garantiza comprensión: puede obtenerse un resultado exacto sin una explicación del fenómeno."
  },
  {
    id: 18,
    tema: "Teorías científicas",
    pregunta: "¿Qué significa llamar «teoría» a una explicación en el contexto científico?",
    opciones: [
      "Una sospecha provisional que todavía no ha recibido apoyo experimental.",
      "Una hipótesis que solo puede transformarse en ley tras ser confirmada.",
      "Una explicación bien fundamentada que integra hechos, leyes e hipótesis.",
      "Un conjunto de observaciones directas libre de inferencias y principios."
    ],
    correcta: 2,
    explicacion: "En ciencia, una teoría no es una mera conjetura: organiza y explica un amplio conjunto de conocimiento contrastado."
  },
  {
    id: 19,
    tema: "Teorías científicas",
    pregunta: "¿Por qué la gravitación universal de Newton constituye una teoría unificadora?",
    opciones: [
      "Porque reemplaza las leyes de Kepler y Galileo por observaciones sin principios.",
      "Porque aplica una misma fuerza a la caída terrestre y a las órbitas celestes.",
      "Porque explica el movimiento celeste mediante causas distintas de las terrestres.",
      "Porque deduce las leyes anteriores sin producir predicciones nuevas verificables."
    ],
    correcta: 1,
    explicacion: "Una misma fuerza conecta la manzana y la Luna, unificando ámbitos antes separados y permitiendo predicciones nuevas."
  },
  {
    id: 20,
    tema: "Teorías científicas",
    pregunta: "¿Qué afirma Duhem al decir que una teoría física representa y no explica?",
    opciones: [
      "Las teorías ordenan matemáticamente leyes experimentales sin agotar su sentido último.",
      "Las teorías explican la realidad, pero solo cuando renuncian a proposiciones matemáticas.",
      "Las teorías representan observaciones aisladas y no dependen de principios generales.",
      "Las teorías describen causas ocultas, aunque no logren ordenar las leyes conocidas."
    ],
    correcta: 0,
    explicacion: "Duhem concibe la teoría como un sistema matemático que representa leyes experimentales; evita atribuirle una explicación metafísica."
  },
  {
    id: 21,
    tema: "Teorías científicas",
    pregunta: "¿Por qué Newton puede seguir siendo una teoría soberbia después de Einstein?",
    opciones: [
      "Porque ninguna teoría posterior ha modificado sus principios fundamentales.",
      "Porque una teoría soberbia es verdadera en todos los ámbitos sin excepción.",
      "Porque su enorme precisión y utilidad persisten dentro de un dominio amplio.",
      "Porque las teorías soberbias se clasifican solo por su antigüedad histórica."
    ],
    correcta: 2,
    explicacion: "Ser superada no elimina su rango ni precisión en muchos problemas; de hecho, la ingeniería sigue calculando con Newton."
  },
  {
    id: 22,
    tema: "Observación y teoría",
    pregunta: "¿Qué ilustra el amanecer contemplado por Tycho Brahe y Kepler en el ejemplo de Hanson?",
    opciones: [
      "Que ambos observan hechos distintos porque usan instrumentos de distinta precisión.",
      "Que Kepler niega la evidencia sensible, mientras Tycho la acepta sin interpretarla.",
      "Que la observación astronómica es neutral y solo cambia la explicación posterior.",
      "Que la teoría interviene en lo observado: uno ve salir el Sol y otro bajar el horizonte."
    ],
    correcta: 3,
    explicacion: "La observación está cargada de teoría: el mismo amanecer se comprende de manera diferente desde marcos cosmológicos distintos."
  },
  {
    id: 23,
    tema: "Teoría y práctica",
    pregunta: "¿Cómo entiende la relación teoría-práctica la perspectiva crítica descrita por Wilfred Carr?",
    opciones: [
      "La teoría aplica reglas generales que reemplazan el juicio de quien practica.",
      "La teoría surge espontáneamente de la práctica y solo resume saber acumulado.",
      "La teoría examina supuestos del propio hacer y orienta su posible transformación.",
      "La teoría ilustra decisiones prácticas, pero nunca cuestiona sus presupuestos."
    ],
    correcta: 2,
    explicacion: "La perspectiva crítica no se limita a aplicar o iluminar: ayuda a revisar los supuestos de la práctica y a cambiarla."
  },
  {
    id: 24,
    tema: "Determinismo",
    pregunta: "¿Qué afirma el determinismo representado por el demonio de Laplace?",
    opciones: [
      "Las leyes y el estado exacto en un instante fijan una sola historia posible.",
      "El futuro es inevitable hagamos lo que hagamos, aunque cambien las condiciones.",
      "Todo suceso es predecible para nosotros si conocemos las leyes generales.",
      "El pasado está determinado, pero el futuro depende necesariamente del azar."
    ],
    correcta: 0,
    explicacion: "Dadas las leyes y el estado completo, queda fijado el desarrollo del mundo; esto no asegura que podamos calcularlo."
  },
  {
    id: 25,
    tema: "Determinismo y fatalismo",
    pregunta: "¿Cuál es la diferencia entre determinismo y fatalismo?",
    opciones: [
      "El fatalismo depende de causas; el determinismo fija el final sin condiciones.",
      "El determinismo depende de condiciones; el fatalismo fija el final pese a ellas.",
      "Ambos fijan el resultado sin causas, pero el determinismo usa leyes matemáticas.",
      "Ambos dependen de condiciones, pero el fatalismo solo se aplica al pasado humano."
    ],
    correcta: 1,
    explicacion: "En el determinismo, cambiar condiciones cambia el resultado; en el fatalismo, el desenlace llega hagas lo que hagas."
  },
  {
    id: 26,
    tema: "Caos determinista",
    pregunta: "¿Qué muestra el mapa logístico cuando r = 4 y dos valores iniciales difieren mínimamente?",
    opciones: [
      "Que una ecuación determinista incorpora azar cuando las diferencias se amplifican.",
      "Que dos historias posibles surgen de un mismo estado inicial exactamente conocido.",
      "Que el sistema deja de seguir la ecuación después de aproximadamente veinte pasos.",
      "Que una diferencia inicial casi nula puede producir trayectorias muy distintas."
    ],
    correcta: 3,
    explicacion: "No hay azar en la ecuación: la sensibilidad a las condiciones iniciales hace diverger dos evoluciones inicialmente indistinguibles."
  },
  {
    id: 27,
    tema: "Caos determinista",
    pregunta: "¿Qué descubrió Lorenz al reingresar un dato con tres decimales en vez de seis?",
    opciones: [
      "Que el redondeo introduce azar ontológico en un modelo antes completamente regular.",
      "Que el clima es indeterminista, porque ninguna simulación repite exactamente su curso.",
      "Que las leyes meteorológicas fallan cuando los datos tienen menos de seis decimales.",
      "Que una diferencia imperceptible al inicio puede alterar radicalmente la predicción."
    ],
    correcta: 3,
    explicacion: "El modelo seguía siendo determinista; el pequeño cambio de entrada bastó para producir otro clima simulado."
  },
  {
    id: 28,
    tema: "Determinismo y predicción",
    pregunta: "¿Por qué un sistema caótico puede ser determinista y, a la vez, impredecible para nosotros?",
    opciones: [
      "Porque sus leyes cambian con el tiempo, aunque conozcamos su estado inicial exacto.",
      "Porque predecirlo exige una precisión infinita que nuestros instrumentos no logran.",
      "Porque cada estado permite varios futuros y solo podemos calcular sus probabilidades.",
      "Porque el azar epistémico del observador modifica las leyes que rigen el sistema."
    ],
    correcta: 1,
    explicacion: "El determinismo concierne al mundo; la predictibilidad, a nuestro conocimiento y a nuestra capacidad de medición y cálculo."
  },
  {
    id: 29,
    tema: "Tipos de azar",
    pregunta: "¿Qué par de ejemplos distingue correctamente azar epistémico y azar ontológico?",
    opciones: [
      "La moneda de Diaconis es epistémico; el decaimiento de un núcleo, ontológico.",
      "La función random() es ontológico; el decaimiento de un núcleo, epistémico.",
      "La moneda común es ontológico; una clave con entropía física, epistémico.",
      "El billar es ontológico; el pronóstico meteorológico a tres días, epistémico."
    ],
    correcta: 0,
    explicacion: "En la moneda el azar refleja ignorancia de condiciones; en el decaimiento cuántico, según la interpretación presentada, estaría en el mundo."
  },
  {
    id: 30,
    tema: "Lakatos: Neptuno",
    pregunta: "¿Por qué el descubrimiento de Neptuno fue progresivo para el programa newtoniano?",
    opciones: [
      "Porque modificó el núcleo newtoniano y explicó una anomalía ya conocida.",
      "Porque ajustó el cinturón, predijo un objeto nuevo y la predicción se corroboró.",
      "Porque evitó toda predicción nueva y conservó la teoría mediante una convención.",
      "Porque demostró que una observación aislada puede confirmar el núcleo completo."
    ],
    correcta: 1,
    explicacion: "Postular otro planeta fue un cambio auxiliar con contenido nuevo: indicó dónde mirar, y Galle encontró el planeta."
  },
  {
    id: 31,
    tema: "Lakatos: Vulcano",
    pregunta: "¿Por qué la hipótesis de Vulcano terminó siendo un ajuste degenerativo?",
    opciones: [
      "Porque atacó directamente el núcleo y no ofreció ninguna hipótesis auxiliar nueva.",
      "Porque explicó el perihelio sin formular consecuencias observables adicionales.",
      "Porque predijo un planeta que no fue corroborado y dio paso a nuevos parches.",
      "Porque fue aceptada antes de que existiera una anomalía que pudiera justificarla."
    ],
    correcta: 2,
    explicacion: "Vulcano sí predijo algo nuevo, pero no apareció; es ad hoc₂. Después se añadieron otros recursos para salvarlo."
  },
  {
    id: 32,
    tema: "Lakatos y sus antecedentes",
    pregunta: "¿Qué problema deja sin resolver una lectura estricta de Popper ante el perihelio de Mercurio?",
    opciones: [
      "Debería exigir abandonar Newton en 1859, pese a la ausencia de una teoría rival mejor.",
      "Debería impedir formular auxiliares, aunque estas permitan explicar la órbita de Urano.",
      "Debería describir la continuidad newtoniana como ciencia normal, sin juzgar si fue racional.",
      "Debería aceptar toda teoría refutada, siempre que sus defensores mantengan el consenso."
    ],
    correcta: 0,
    explicacion: "La continuidad racional de Newton durante décadas exige distinguir tenacidad fecunda de terquedad, algo que el falsacionismo instantáneo no logra."
  },
  {
    id: 33,
    tema: "Tesis de Duhem–Quine",
    pregunta: "Si de (T ∧ A₁ ∧ … ∧ Aₙ ∧ C) se deduce O y O no ocurre, ¿qué concluye el modus tollens?",
    opciones: [
      "La teoría T es falsa, mientras las auxiliares y condiciones quedan confirmadas.",
      "Algún elemento del conjunto es falso, pero la lógica no señala cuál de ellos.",
      "Todas las auxiliares son falsas, aunque la teoría central pueda conservarse intacta.",
      "La observación es inválida, porque ninguna experiencia contrasta hipótesis aisladas."
    ],
    correcta: 1,
    explicacion: "La experiencia contrasta un conjunto; la refutación lógica del conjunto no localiza por sí sola el error."
  },
  {
    id: 34,
    tema: "Duhem y Quine",
    pregunta: "¿Cómo radicaliza Quine la tesis de Duhem sobre el contraste de hipótesis?",
    opciones: [
      "Extiende la revisión a toda la red de creencias e incluso admite revisar la lógica.",
      "Limita el ajuste a la física y entrega la decisión final al buen sentido del físico.",
      "Sostiene que cada hipótesis se contrasta sola si los instrumentos son confiables.",
      "Convierte toda experiencia en refutación concluyente de algún enunciado específico."
    ],
    correcta: 0,
    explicacion: "Quine amplía la tesis a toda la red de creencias; Duhem es más restringido y deja fuera la lógica."
  },
  {
    id: 35,
    tema: "Programas de investigación",
    pregunta: "¿Cuál es la unidad de evaluación que Lakatos sustituye a la teoría aislada?",
    opciones: [
      "Una comunidad científica unida por un paradigma durante una etapa de ciencia normal.",
      "Una observación crucial que decide instantáneamente entre dos teorías bien definidas.",
      "Una serie de teorías con núcleo común que se modifican para ampliar su alcance.",
      "Una colección de hechos puros que permite comparar teorías sin supuestos auxiliares."
    ],
    correcta: 2,
    explicacion: "Se evalúa el desarrollo de un programa: si cada cambio de teoría constituye progreso o degeneración."
  },
  {
    id: 36,
    tema: "Núcleo y cinturón",
    pregunta: "¿Qué distribución entre núcleo firme y cinturón protector corresponde al programa newtoniano?",
    opciones: [
      "Núcleo: número de planetas; cinturón: leyes del movimiento y gravitación.",
      "Núcleo: observaciones aceptadas; cinturón: leyes del movimiento y sus modelos.",
      "Núcleo: telescopios y cálculos; cinturón: gravitación y condiciones iniciales.",
      "Núcleo: gravitación y movimiento; cinturón: planetas, masas e instrumentos."
    ],
    correcta: 3,
    explicacion: "Las tesis definitorias se preservan en el núcleo; las hipótesis auxiliares y condiciones se ajustan en el cinturón."
  },
  {
    id: 37,
    tema: "Heurística negativa",
    pregunta: "¿Qué regla expresa la heurística negativa de un programa de investigación?",
    opciones: [
      "Dirigir cada anomalía contra el núcleo antes de revisar las condiciones iniciales.",
      "Rechazar cualquier modelo nuevo que contradiga una observación ya aceptada.",
      "Construir modelos en el orden fijado por el plan central del programa.",
      "No dirigir el modus tollens al núcleo; buscar el error en el cinturón."
    ],
    correcta: 3,
    explicacion: "La heurística negativa decide dónde no buscar el error; protege metodológicamente el núcleo, no porque este sea infalible."
  },
  {
    id: 38,
    tema: "Heurística positiva",
    pregunta: "¿Qué función cumple la heurística positiva en un programa?",
    opciones: [
      "Indica qué modelos desarrollar y en qué orden, incluso dejando anomalías de lado.",
      "Ordena abandonar el programa apenas una predicción nueva no sea corroborada.",
      "Define cuál hipótesis auxiliar debe culparse cada vez que falla una observación.",
      "Prohíbe trabajar con modelos aproximados que se sepan falsos desde el comienzo."
    ],
    correcta: 0,
    explicacion: "Es un plan de desarrollo; no corre detrás de cada anomalía y admite modelos inicialmente idealizados o «falsos»."
  },
  {
    id: 39,
    tema: "Progreso y degeneración",
    pregunta: "¿Qué combinación caracteriza a un programa teórica y empíricamente progresivo?",
    opciones: [
      "Acomoda hechos conocidos y luego confirma alguna de sus viejas consecuencias.",
      "Predice hechos nuevos y algunos de ellos resultan efectivamente corroborados.",
      "Predice hechos nuevos y evita contrastarlos hasta que aparezca un programa rival.",
      "Explica sus anomalías sin contenido excedente y mantiene estable el cinturón."
    ],
    correcta: 1,
    explicacion: "El progreso teórico aporta contenido nuevo; el progreso empírico exige que una parte de ese contenido se corrobore."
  },
  {
    id: 40,
    tema: "Ajustes ad hoc",
    pregunta: "Una modificación predice un hecho nuevo, pero la observación no lo confirma. ¿Cómo la clasifica Lakatos?",
    opciones: [
      "Ad hoc₁, porque su contenido excedente todavía no recibe apoyo empírico.",
      "Ad hoc₃, porque toda predicción fallida es ajena a la heurística positiva.",
      "Progresiva, porque basta formular una consecuencia que antes era desconocida.",
      "Ad hoc₂, porque predice contenido nuevo, pero este no se corrobora."
    ],
    correcta: 3,
    explicacion: "Ad hoc₁ carece de contenido excedente; ad hoc₂ lo tiene, pero no se corrobora; ad hoc₃ rompe con la heurística del programa."
  },
  {
    id: 41,
    tema: "Racionalidad retrospectiva",
    pregunta: "¿Por qué Lakatos sostiene que no hay racionalidad instantánea en la ciencia?",
    opciones: [
      "Porque un programa puede recuperarse y los experimentos cruciales se reconocen después.",
      "Porque las decisiones científicas dependen siempre de factores sociales y psicológicos.",
      "Porque toda anomalía debe ignorarse hasta que el núcleo sea refutado por un experimento.",
      "Porque la contabilidad pública de un programa solo registra sus éxitos ya corroborados."
    ],
    correcta: 0,
    explicacion: "El valor de una decisión puede aparecer con su desarrollo posterior; por eso la tenacidad puede ser racional y el juicio, retrospectivo."
  },
  {
    id: 42,
    tema: "Feyerabend: «todo vale»",
    pregunta: "¿Qué función cumple la expresión «todo vale» en el argumento de Feyerabend?",
    opciones: [
      "Es su regla preferida para reemplazar la razón por decisiones arbitrarias.",
      "Es una norma que permite distinguir la ciencia madura de la ciencia inmadura.",
      "Es el resultado absurdo de suponer reglas fijas que nunca pueden violarse.",
      "Es una descripción neutral de todos los episodios de la historia científica."
    ],
    correcta: 2,
    explicacion: "Es una reducción al absurdo: si se exige una regla universal sin excepciones, la historia solo dejaría «todo vale»; por eso cae la premisa."
  },
  {
    id: 43,
    tema: "Anarquismo epistemológico",
    pregunta: "¿Qué defiende exactamente el anarquismo epistemológico de Feyerabend?",
    opciones: [
      "Niega la racionalidad científica y acepta cualquier creencia por igual.",
      "Rechaza una autoridad metodológica única, no el uso de la razón.",
      "Propone eliminar los experimentos por depender de reglas históricas.",
      "Sustituye el método único por una secuencia fija de reglas plurales."
    ],
    correcta: 1,
    explicacion: "Su crítica apunta al monopolio de un método universal; no afirma que toda investigación sea irracional o que cualquier resultado valga."
  },
  {
    id: 44,
    tema: "Feyerabend y Galileo",
    pregunta: "¿Por qué el caso de Galileo sirve al argumento histórico de Feyerabend?",
    opciones: [
      "Galileo confirmó el copernicanismo siguiendo sin excepciones las reglas inductivas.",
      "Galileo aceptó la experiencia de una Tierra quieta y abandonó toda hipótesis rival.",
      "Galileo evitó persuadir y se limitó a presentar observaciones libres de teoría.",
      "Galileo defendió su teoría contra evidencia aceptada y usó recursos persuasivos."
    ],
    correcta: 3,
    explicacion: "Introdujo supuestos aún no probados y escribió para persuadir; para Feyerabend, avanzó violando lo que el buen método habría exigido."
  },
  {
    id: 45,
    tema: "Contrainducción",
    pregunta: "¿Cuál es el propósito de la contrainducción propuesta por Feyerabend?",
    opciones: [
      "Acumular casos favorables hasta transformar una hipótesis en una ley general.",
      "Negar toda evidencia empírica para liberar la investigación de observaciones.",
      "Desarrollar hipótesis contrarias a hechos aceptados para revelar su interpretación.",
      "Sustituir teorías confirmadas por alternativas que no produzcan predicciones nuevas."
    ],
    correcta: 2,
    explicacion: "Como los hechos están cargados de teoría, una alternativa que los contradiga puede hacer visibles problemas antes inadvertidos."
  },
  {
    id: 46,
    tema: "Pluralismo y Kuhn",
    pregunta: "¿Cómo se opone Feyerabend a la valoración kuhniana de la ciencia normal?",
    opciones: [
      "Propone una comunidad sin paradigma solo durante las revoluciones científicas.",
      "Acepta que el paradigma unifica, pero exige reemplazarlo antes de toda investigación.",
      "Sostiene que la ciencia normal progresa porque elimina todas las anomalías empíricas.",
      "Considera que la uniformidad debilita la crítica y que proliferar teorías es saludable."
    ],
    correcta: 3,
    explicacion: "Para Feyerabend, el pluralismo no es inmadurez: las alternativas mantienen activa la capacidad crítica de la ciencia."
  },
  {
    id: 47,
    tema: "Feyerabend y Lakatos",
    pregunta: "¿En qué se acerca Feyerabend a Lakatos y en qué va más lejos respecto de las teorías rivales?",
    opciones: [
      "Ambos exigen proliferación; Lakatos la restringe a las revoluciones de ciencia normal.",
      "Ambos valoran la competencia; Feyerabend la exige siempre, no solo ante degeneración.",
      "Ambos rechazan la competencia; Feyerabend solo la admite cuando hay hechos nuevos.",
      "Ambos aceptan un núcleo infalible; Feyerabend permite modificarlo sin hipótesis rivales."
    ],
    correcta: 1,
    explicacion: "Lakatos atribuye a la competencia un papel decisivo; Feyerabend convierte la proliferación en una exigencia permanente."
  },
  {
    id: 48,
    tema: "Objeción a Lakatos",
    pregunta: "¿Por qué Feyerabend llama a la metodología de Lakatos «anarquismo disfrazado»?",
    opciones: [
      "Porque acepta modificar el núcleo siempre que una teoría rival prediga hechos nuevos.",
      "Porque obliga a abandonar todo programa ante la primera anomalía corroborada.",
      "Porque permite seguir o abandonar un programa degenerado, sin fijar cuándo hacerlo.",
      "Porque niega que sea posible distinguir retrospectivamente progreso y degeneración."
    ],
    correcta: 2,
    explicacion: "Si ambas decisiones quedan permitidas y el juicio llega después, la metodología no prohíbe ninguna conducta en el presente."
  },
  {
    id: 49,
    tema: "Método y decisión presente",
    pregunta: "¿Qué objeción común dirige Feyerabend a los criterios de falsabilidad, ciencia normal y progreso?",
    opciones: [
      "Describen ciencia pasada, pero no entregan una regla segura para decidir hoy.",
      "Impiden reconstruir la historia y confunden los hechos con las teorías rivales.",
      "Funcionan como reglas presentes, aunque no sirvan para evaluar retrospectivamente.",
      "Exigen demasiada proliferación y hacen imposible conservar una teoría confirmada."
    ],
    correcta: 0,
    explicacion: "Su crítica es práctica: una regla que solo se reconoce cuando ya sabemos quién ganó no guía la decisión que debía orientar."
  },
  {
    id: 50,
    tema: "Respuesta de Lakatos",
    pregunta: "¿Cuál sería la respuesta más fiel de Lakatos a la objeción de Feyerabend?",
    opciones: [
      "Su metodología sí entrega órdenes instantáneas, pero solo para programas progresivos.",
      "Su metodología evita toda evaluación, pues toda decisión pertenece a la historia externa.",
      "Su metodología elimina la tenacidad y exige financiar únicamente programas nuevos.",
      "Su metodología no ordena al científico: evalúa honestamente el desarrollo de programas."
    ],
    correcta: 3,
    explicacion: "Lakatos puede responder que ofrece criterios de evaluación y exige contabilidad pública, no instrucciones infalibles para decidir hoy."
  }
];
