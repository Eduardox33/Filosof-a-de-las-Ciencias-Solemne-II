/*
 * Versión de selección múltiple del Simulacro Solemne 2.
 * El orden de estas preguntas se conserva siempre, incluso al reiniciar.
 * "correcta": 0 = A, 1 = B, 2 = C, 3 = D.
 */
window.PREGUNTAS_SIMULACRO = [
  {
    id: "I.1",
    tema: "Parte I · El caso · Duhem–Quine",
    pregunta: "¿Cuál es la aplicación correcta de Duhem–Quine a la anomalía Pioneer?",
    opciones: [
      "T (gravitación) ∧ A₁ (masas y fuerzas solares) ∧ A₂ (modelo de la nave) ∧ C (datos) implica O (trayectoria prevista); al fallar O, algo del conjunto es falso, sin que la lógica identifique qué.",
      "T (gravitación) por sí sola implica O (trayectoria observada); al fallar O, el modus tollens refuta T, mientras las masas, el modelo de la nave y los datos quedan fuera del contraste.",
      "T (gravitación) ∧ A₁ (masas y fuerzas solares) ∧ A₂ (modelo de la nave) implica O (trayectoria prevista); al fallar O, todas las auxiliares son falsas y la teoría queda provisionalmente confirmada.",
      "T (gravitación) ∧ C (datos) implica O (trayectoria prevista); al fallar O, el modus tollens muestra que los datos son falsos, pues una anomalía nunca contrasta directamente las hipótesis físicas."
    ],
    correcta: 0,
    explicacion: "El cálculo usa la teoría junto con auxiliares sobre masas, presión de radiación, funcionamiento de la nave y telemetría. La discrepancia refuta el conjunto, no una hipótesis aislada."
  },
  {
    id: "I.2",
    tema: "Parte I · El caso · Lakatos",
    pregunta: "¿Cuál es el análisis lakatosiano más sólido de los dos caminos propuestos para explicar el frenado?",
    opciones: [
      "El modelo de la nave pertenece al núcleo, porque de él depende la trayectoria calculada; modificar la gravedad ajusta auxiliares. La hipótesis térmica es progresiva: anticipó una disminución nueva que se corroboró.",
      "La gravitación pertenece al núcleo y el modelo térmico al cinturón; modificar la gravedad ataca el núcleo. La hipótesis térmica es progresiva: predijo una disminución nueva que se corroboró, como Neptuno.",
      "La gravitación pertenece al núcleo y el modelo térmico al cinturón; modificar la gravedad ataca el núcleo. La hipótesis térmica es ad hoc₁: acomodó el desfase conocido sin anticipar el comportamiento futuro de la nave.",
      "La gravitación pertenece al núcleo y el modelo térmico al cinturón; modificar la gravedad ataca el núcleo. La hipótesis térmica es ad hoc₃: rompe la heurística positiva, aunque su pronóstico se corroboró."
    ],
    correcta: 1,
    explicacion: "La explicación térmica conserva el núcleo, cambia el modelo de la nave y añade contenido predictivo corroborado: el frenado disminuye con el agotamiento del plutonio."
  },
  {
    id: "II.1",
    tema: "Parte II · El fragmento · Observación y contraste",
    pregunta: "¿Por qué una teoría sin rivales es difícil de contrastar, según el argumento de Feyerabend?",
    opciones: [
      "Porque sin rivales no quedan auxiliares que ajustar y la teoría se vuelve infalsable. Tycho y Kepler difieren en sus auxiliares, no en la interpretación de lo que ven.",
      "Porque los hechos llegan interpretados por la teoría dominante; una alternativa puede reorganizarlos y revelar anomalías. Tycho ve salir el Sol y Kepler, bajar el horizonte.",
      "Porque la teoría dominante selecciona los problemas; una alternativa aporta instrumentos y datos más precisos. Tycho y Kepler ven lo mismo con distinta precisión.",
      "Porque los hechos contrarios deben suspenderse hasta confirmar una teoría rival. Tycho y Kepler interpretan igual lo observado mientras no exista consenso."
    ],
    correcta: 1,
    explicacion: "La observación está cargada de teoría. Las alternativas cambian la organización de los hechos y pueden hacer visibles razones de crítica que el marco dominante oculta."
  },
  {
    id: "II.2",
    tema: "Parte II · El fragmento · Kuhn y Lakatos",
    pregunta: "¿Cómo se ubica el pasaje frente a Kuhn y Lakatos?",
    opciones: [
      "Está más cerca de Kuhn porque la competencia define ciencia normal; se separa de Lakatos porque este exige proliferación solo cuando el núcleo ha sido refutado.",
      "Está igual de cerca de ambos porque los tres exigen alternativas siempre; se separa de Kuhn solo en la historia y de Lakatos solo en el nombre del núcleo.",
      "Está más cerca de Lakatos porque valora la competencia; se opone a Kuhn al rechazar la uniformidad y va más allá de Lakatos al exigir proliferación permanente.",
      "Está más cerca de Kuhn porque ambos rechazan rivales durante ciencia normal; se separa de Lakatos porque este considera que toda competencia impide el progreso teórico."
    ],
    correcta: 2,
    explicacion: "Feyerabend comparte con Lakatos la importancia de la competencia, pero no la reserva para programas en dificultades; frente a Kuhn, critica la uniformidad paradigmática."
  },
  {
    id: "III.1",
    tema: "Parte III · Ley y causa",
    pregunta: "¿Qué respuesta distingue correctamente una ley de una regularidad y explica cómo comprobar una causa?",
    opciones: [
      "Una ley se repite muchas veces y describe grupos cerrados; una regularidad sostiene contrafácticos. Una correlación es causal si A precede a B y ambas variables covarían.",
      "Una ley sostiene contrafácticos y se proyecta; una regularidad accidental no. La causa se evalúa controlando terceras variables e interviniendo, idealmente con asignación aleatoria.",
      "Una ley se proyecta solo a casos observados; una regularidad autoriza contrafácticos. La causa se comprueba acumulando correlaciones sin intervenir ni considerar variables ocultas.",
      "Una ley y una regularidad difieren solo en su número de casos; ambas sostienen contrafácticos. La causa se prueba si la correlación es fuerte y se mantiene el orden temporal."
    ],
    correcta: 1,
    explicacion: "El agua herviría en el caso hipotético y el cobre nuevo conducirá; lavar el auto no sostiene esas proyecciones. La inferencia causal exige descartar explicaciones rivales, preferentemente mediante intervención."
  },
  {
    id: "III.2",
    tema: "Parte III · Determinismo, predicción y azar",
    pregunta: "¿Qué explicación desarrolla correctamente la frase «determinista no significa predecible» y los dos tipos de azar?",
    opciones: [
      "Lorenz mostró que el clima carece de leyes fijas: cambiar decimales crea varios futuros desde el mismo estado. La moneda es azar ontológico y el decaimiento nuclear, epistémico.",
      "Lorenz mostró que toda predicción es imposible: pequeños errores impiden calcular incluso el paso siguiente. La función random() es azar ontológico y una moneda controlada, epistémico.",
      "Lorenz mostró que el determinismo exige mediciones exactas: con seis decimales el clima se vuelve completamente predecible. La moneda es azar epistémico y el decaimiento, también.",
      "Lorenz mostró sensibilidad a condiciones: un modelo determinista diverge por pequeñas diferencias. La moneda ilustra azar epistémico y el decaimiento de un núcleo, posible azar ontológico."
    ],
    correcta: 3,
    explicacion: "Las reglas del modelo no cambian; nuestra medición limitada impide seguir su evolución. El azar epistémico refleja ignorancia; el ontológico sería una indeterminación del mundo mismo."
  },
  {
    id: "III.3",
    tema: "Parte III · ¿Existe un método científico?",
    pregunta: "¿Cuál es la posición mejor argumentada al integrar a Feyerabend y Lakatos mediante el caso Pioneer?",
    opciones: [
      "Existe una regla aplicable hoy: las anomalías se resuelven revisando siempre el cinturón antes que el núcleo. Pioneer muestra que Feyerabend y Lakatos coinciden en ese orden obligatorio.",
      "La evaluación racional exige esperar corroboración: antes de 2012 ambos caminos eran equivalentes. Feyerabend acepta ese criterio y Lakatos lo aplica como una orden instantánea.",
      "Hay evaluación racional sin regla instantánea: mantener la gravitación y revisar la nave fue defendible; el pronóstico térmico corroborado distinguió el ajuste sin imponer una decisión única.",
      "La evaluación retrospectiva orienta cualquier decisión presente: una anomalía debe revisarse primero en el cinturón. Pioneer vuelve irracional modificar la gravitación antes de disponer del pronóstico térmico."
    ],
    correcta: 2,
    explicacion: "La respuesta matizada reconoce criterios lakatosianos de progreso y corroboración, pero acepta la crítica de Feyerabend: esos criterios no imponen una única decisión racional en cada momento."
  }
];
