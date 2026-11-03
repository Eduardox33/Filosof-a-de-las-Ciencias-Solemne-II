"use strict";

const CONFIGURACION = {
  general: {
    preguntas: window.PREGUNTAS_GENERALES || [],
    aleatorio: true,
    singular: "prueba",
    portada: {
      capitulo: "La imagen científica · Lakatos · Feyerabend",
      titulo: "Cincuenta preguntas para poner a prueba tu comprensión.",
      descripcion: "Recorre toda la materia con preguntas conceptuales y casos de aplicación. Avanza a tu ritmo y revisa al final cada respuesta incorrecta."
    }
  },
  simulacro: {
    preguntas: window.PREGUNTAS_SIMULACRO || [],
    aleatorio: false,
    singular: "simulacro",
    portada: {
      capitulo: "El caso Pioneer · El fragmento · Las preguntas abiertas",
      titulo: "El simulacro de solemne, convertido en práctica breve.",
      descripcion: "Responde una versión de selección múltiple de cada ítem del simulacro. Sus preguntas conservan siempre el orden original para que puedas repetir el análisis."
    }
  }
};

const estados = {};
let moduloActivo = "general";
let accionConfirmacion = null;

const dialogo = document.getElementById("dialogo-confirmacion");
const anuncio = document.getElementById("anuncio");
const letras = ["A", "B", "C", "D", "E", "F"];

function escapar(valor) {
  return String(valor)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function crearEstado() {
  return {
    fase: "portada",
    orden: [],
    actual: 0,
    respuestas: Object.create(null)
  };
}

function mezclar(elementos) {
  const copia = [...elementos];
  for (let i = copia.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function ordenNuevo(config, ordenAnterior) {
  const indices = config.preguntas.map((_, indice) => indice);
  if (!config.aleatorio) return indices;

  const nuevo = mezclar(indices);
  const esIgual = nuevo.length > 1 && nuevo.every((valor, i) => valor === ordenAnterior[i]);
  if (esIgual) [nuevo[0], nuevo[1]] = [nuevo[1], nuevo[0]];
  return nuevo;
}

function iconoReiniciar() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4v6h6M5.6 15.5a7 7 0 1 0 .3-7.3L4 10"/></svg>';
}

function iconoFlecha(direccion = "derecha") {
  const trazo = direccion === "izquierda"
    ? '<path d="m14.5 6-6 6 6 6M9 12h11"/>'
    : '<path d="m9.5 6 6 6-6 6M15 12H4"/>';
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${trazo}</svg>`;
}

function renderizarPortada(tipo) {
  const config = CONFIGURACION[tipo];
  const total = config.preguntas.length;
  const nombreOrden = config.aleatorio ? "Orden aleatorio" : "Orden original";
  const detalleOrden = config.aleatorio ? "cambia al reiniciar" : "se mantiene al reiniciar";
  const nota = config.aleatorio
    ? "Un orden nuevo en cada intento."
    : "Las preguntas conservan su orden original.";

  return `
    <div class="portada-prueba">
      <div class="portada-prueba__principal">
        <p class="portada-prueba__capitulo">${escapar(config.portada.capitulo)}</p>
        <h3>${escapar(config.portada.titulo)}</h3>
        <p class="portada-prueba__descripcion">${escapar(config.portada.descripcion)}</p>
        <button class="boton boton--primario" type="button" data-accion="comenzar" data-tipo="${tipo}">
          Comenzar ${config.singular} ${iconoFlecha()}
        </button>
        <span class="nota-aleatoria">${nota}</span>
      </div>
      <div class="portada-prueba__lateral" aria-label="Características de la prueba">
        <div class="detalle">
          <span class="detalle__icono" aria-hidden="true">${total}</span>
          <div><strong>${total} preguntas</strong><small>de selección múltiple</small></div>
        </div>
        <div class="detalle">
          <span class="detalle__icono" aria-hidden="true">↝</span>
          <div><strong>${nombreOrden}</strong><small>${detalleOrden}</small></div>
        </div>
        <div class="detalle">
          <span class="detalle__icono" aria-hidden="true">✓</span>
          <div><strong>Revisión final</strong><small>con tus respuestas incorrectas</small></div>
        </div>
      </div>
    </div>`;
}

function iniciarPrueba(tipo) {
  const estado = estados[tipo];
  const config = CONFIGURACION[tipo];
  const ordenAnterior = [...estado.orden];

  estado.orden = ordenNuevo(config, ordenAnterior);
  estado.actual = 0;
  estado.respuestas = Object.create(null);
  estado.fase = "prueba";
  renderizar(tipo);

  const modulo = document.getElementById(`modulo-${tipo}`);
  modulo.scrollIntoView({ behavior: "smooth", block: "start" });
  const inicio = config.singular === "prueba" ? "Prueba iniciada" : "Simulacro iniciado";
  anunciar(`${inicio}. ${config.preguntas.length} preguntas.`);
}

function preguntaActual(tipo) {
  const estado = estados[tipo];
  const indice = estado.orden[estado.actual];
  return CONFIGURACION[tipo].preguntas[indice];
}

function renderizarPrueba(tipo) {
  const estado = estados[tipo];
  const config = CONFIGURACION[tipo];
  const pregunta = preguntaActual(tipo);
  const total = estado.orden.length;
  const numero = estado.actual + 1;
  const respondidas = Object.keys(estado.respuestas).length;
  const porcentaje = (numero / total) * 100;
  const esUltima = numero === total;

  const opciones = pregunta.opciones.map((opcion, indice) => {
    const seleccionada = estado.respuestas[pregunta.id] === indice;
    return `
      <label class="opcion${seleccionada ? " seleccionada" : ""}">
        <input type="radio" name="pregunta-${tipo}" value="${indice}" data-respuesta ${seleccionada ? "checked" : ""}>
        <span class="opcion__contenido">
          <span class="opcion__letra" aria-hidden="true">${letras[indice]}</span>
          <span class="opcion__texto">${escapar(opcion)}</span>
        </span>
      </label>`;
  }).join("");

  return `
    <div class="prueba">
      <div class="prueba__barra">
        <div>
          <p class="prueba__contador">
            Pregunta <strong>${numero} de ${total}</strong>
            <span data-respondidas>${respondidas} respondida${respondidas === 1 ? "" : "s"}</span>
          </p>
          <div class="progreso" role="progressbar" aria-label="Progreso de la prueba" aria-valuemin="1" aria-valuemax="${total}" aria-valuenow="${numero}">
            <div class="progreso__barra" style="width: ${porcentaje}%"></div>
          </div>
        </div>
        <button class="boton boton--texto" type="button" data-accion="reiniciar" data-tipo="${tipo}">
          ${iconoReiniciar()} Reiniciar
        </button>
      </div>

      <article class="pregunta-tarjeta">
        <p class="pregunta__tema">${escapar(pregunta.tema)}</p>
        <h3 class="pregunta__texto" id="pregunta-actual-${tipo}" tabindex="-1">${escapar(pregunta.pregunta)}</h3>
        <fieldset class="opciones" aria-labelledby="pregunta-actual-${tipo}">
          <legend class="anuncio-visualmente-oculto">Selecciona una respuesta</legend>
          ${opciones}
        </fieldset>
        <div class="prueba__navegacion">
          <button class="boton boton--secundario" type="button" data-accion="anterior" data-tipo="${tipo}" ${estado.actual === 0 ? "disabled" : ""}>
            ${iconoFlecha("izquierda")} Anterior
          </button>
          <p class="prueba__ayuda">Puedes responder con las teclas <kbd>1</kbd>–<kbd>${Math.min(4, pregunta.opciones.length)}</kbd></p>
          <button class="boton boton--primario" type="button" data-accion="${esUltima ? "finalizar" : "siguiente"}" data-tipo="${tipo}">
            ${esUltima ? "Finalizar prueba" : `Siguiente ${iconoFlecha()}`}
          </button>
        </div>
      </article>
    </div>`;
}

function seleccionarRespuesta(tipo, indiceRespuesta) {
  const estado = estados[tipo];
  const pregunta = preguntaActual(tipo);
  if (!pregunta || !pregunta.opciones[indiceRespuesta]) return;

  estado.respuestas[pregunta.id] = indiceRespuesta;
  const contenedor = document.getElementById(`contenido-${tipo}`);
  const opciones = contenedor.querySelectorAll(".opcion");

  opciones.forEach((opcion, indice) => {
    const seleccionada = indice === indiceRespuesta;
    opcion.classList.toggle("seleccionada", seleccionada);
    opcion.querySelector("input").checked = seleccionada;
  });

  const respondidas = Object.keys(estado.respuestas).length;
  const indicador = contenedor.querySelector("[data-respondidas]");
  indicador.textContent = `${respondidas} respondida${respondidas === 1 ? "" : "s"}`;
  anunciar(`Respuesta ${letras[indiceRespuesta]} seleccionada. ${respondidas} de ${estado.orden.length} preguntas respondidas.`);
}

function cambiarPregunta(tipo, direccion) {
  const estado = estados[tipo];
  const destino = estado.actual + direccion;
  if (destino < 0 || destino >= estado.orden.length) return;
  estado.actual = destino;
  renderizar(tipo);
  document.getElementById(`pregunta-actual-${tipo}`).focus({ preventScroll: true });
}

function mensajeResultado(porcentaje) {
  if (porcentaje === 100) return "Dominio completo: no hay respuestas incorrectas en este intento.";
  if (porcentaje >= 85) return "Muy buen dominio. Revisa los detalles que aún pueden mejorar.";
  if (porcentaje >= 70) return "Buena base. La revisión de errores ayudará a afinar tus distinciones.";
  if (porcentaje >= 50) return "Vas encaminado. Vuelve a los conceptos señalados y prueba otra vez.";
  return "Es un buen punto de partida: revisa las explicaciones antes del próximo intento.";
}

function tarjetaError(tipo, pregunta, posicion, respuestaUsuario) {
  const total = CONFIGURACION[tipo].preguntas.length;
  const sinResponder = respuestaUsuario === undefined;
  const textoUsuario = sinResponder
    ? "Sin responder"
    : `${letras[respuestaUsuario]}. ${pregunta.opciones[respuestaUsuario]}`;
  const textoCorrecto = `${letras[pregunta.correcta]}. ${pregunta.opciones[pregunta.correcta]}`;
  const meta = tipo === "simulacro"
    ? `Ítem ${pregunta.id} · ${pregunta.tema}`
    : `Pregunta ${posicion + 1} de ${total} · ${pregunta.tema}`;

  return `
    <article class="tarjeta-error">
      <p class="error__meta">${escapar(meta)}</p>
      <h4 class="error__pregunta">${escapar(pregunta.pregunta)}</h4>
      <div class="respuesta-revision respuesta-revision--incorrecta">
        <span class="respuesta-revision__etiqueta">Tu respuesta</span>
        <span class="respuesta-revision__texto">${escapar(textoUsuario)}</span>
      </div>
      <div class="respuesta-revision respuesta-revision--correcta">
        <span class="respuesta-revision__etiqueta">Respuesta correcta</span>
        <span class="respuesta-revision__texto">${escapar(textoCorrecto)}</span>
      </div>
      ${pregunta.explicacion ? `<p class="explicacion"><strong>Para comprender: </strong>${escapar(pregunta.explicacion)}</p>` : ""}
    </article>`;
}

function renderizarResultados(tipo) {
  const estado = estados[tipo];
  const config = CONFIGURACION[tipo];
  const total = estado.orden.length;
  const incorrectas = [];
  let correctas = 0;

  estado.orden.forEach((indicePregunta, posicion) => {
    const pregunta = config.preguntas[indicePregunta];
    const respuesta = estado.respuestas[pregunta.id];
    if (respuesta === pregunta.correcta) {
      correctas += 1;
    } else {
      incorrectas.push({ pregunta, posicion, respuesta });
    }
  });

  const sinResponder = total - Object.keys(estado.respuestas).length;
  const porcentaje = Math.round((correctas / total) * 100);
  const errores = incorrectas.map(({ pregunta, posicion, respuesta }) =>
    tarjetaError(tipo, pregunta, posicion, respuesta)
  ).join("");

  const revision = incorrectas.length
    ? `
      <section class="revision" id="revision-${tipo}" aria-labelledby="titulo-revision-${tipo}">
        <div class="revision__encabezado">
          <h3 id="titulo-revision-${tipo}">Para volver a estudiar</h3>
          <p>${incorrectas.length} pregunta${incorrectas.length === 1 ? "" : "s"} para revisar con calma.</p>
        </div>
        ${errores}
      </section>`
    : `
      <div class="resultado-perfecto">
        <span aria-hidden="true">✓</span>
        <h3>No hay errores que revisar</h3>
        <p>Respondiste correctamente todas las preguntas de este intento.</p>
      </div>`;

  return `
    <div class="resultados">
      <div class="resultados__resumen">
        <div class="puntaje-anillo" style="--puntuacion: ${porcentaje}" aria-label="Puntaje: ${porcentaje} por ciento">
          <span class="puntaje-anillo__valor">${porcentaje}<small>%</small></span>
        </div>
        <div class="resultados__texto">
          <p class="resultados__capitulo">Resultado del intento</p>
          <h3 id="titulo-resultado-${tipo}" tabindex="-1">${correctas} de ${total} correctas</h3>
          <p class="resultados__mensaje">${mensajeResultado(porcentaje)}</p>
          <div class="estadisticas">
            <span class="estadistica estadistica--correctas"><strong>${correctas}</strong> correctas</span>
            <span class="estadistica estadistica--incorrectas"><strong>${incorrectas.length}</strong> incorrectas</span>
            <span class="estadistica"><strong>${sinResponder}</strong> sin responder</span>
          </div>
        </div>
      </div>
      <div class="resultados__acciones">
        <button class="boton boton--primario" type="button" data-accion="repetir" data-tipo="${tipo}">
          ${iconoReiniciar()} Repetir ${config.singular}
        </button>
        ${incorrectas.length ? `<button class="boton boton--secundario" type="button" data-accion="ir-errores" data-tipo="${tipo}">Revisar mis errores</button>` : ""}
      </div>
      ${revision}
    </div>`;
}

function finalizarPrueba(tipo) {
  const estado = estados[tipo];
  const sinResponder = estado.orden.length - Object.keys(estado.respuestas).length;

  const terminar = () => {
    estado.fase = "resultados";
    renderizar(tipo);
    document.getElementById(`modulo-${tipo}`).scrollIntoView({ behavior: "smooth", block: "start" });
    anunciar(`Prueba finalizada. Resultado disponible. ${sinResponder} preguntas sin responder.`);
  };

  if (sinResponder > 0) {
    pedirConfirmacion({
      titulo: "¿Finalizar la prueba?",
      mensaje: `Tienes ${sinResponder} pregunta${sinResponder === 1 ? "" : "s"} sin responder. Se contarán como incorrectas en la revisión final.`,
      aceptar: "Finalizar",
      accion: terminar
    });
  } else {
    terminar();
  }
}

function renderizar(tipo) {
  const estado = estados[tipo];
  const contenedor = document.getElementById(`contenido-${tipo}`);

  if (estado.fase === "prueba") {
    contenedor.innerHTML = renderizarPrueba(tipo);
  } else if (estado.fase === "resultados") {
    contenedor.innerHTML = renderizarResultados(tipo);
  } else {
    contenedor.innerHTML = renderizarPortada(tipo);
  }
}

function pedirConfirmacion({ titulo, mensaje, aceptar, accion }) {
  document.getElementById("dialogo-titulo").textContent = titulo;
  document.getElementById("dialogo-mensaje").textContent = mensaje;
  document.getElementById("dialogo-aceptar").textContent = aceptar;
  accionConfirmacion = accion;

  if (typeof dialogo.showModal === "function") {
    dialogo.returnValue = "";
    dialogo.showModal();
  } else if (window.confirm(`${titulo}\n\n${mensaje}`)) {
    accionConfirmacion();
    accionConfirmacion = null;
  }
}

function solicitarReinicio(tipo) {
  const config = CONFIGURACION[tipo];
  pedirConfirmacion({
    titulo: `¿Reiniciar ${config.singular === "prueba" ? "la prueba" : "el simulacro"}?`,
    mensaje: config.aleatorio
      ? "Se borrarán tus respuestas y las preguntas aparecerán en un orden nuevo."
      : "Se borrarán tus respuestas y las preguntas conservarán su orden original.",
    aceptar: "Reiniciar",
    accion: () => iniciarPrueba(tipo)
  });
}

function cambiarModulo(tipo, desplazar = true) {
  if (!CONFIGURACION[tipo] && tipo !== "videos") return;
  moduloActivo = tipo;

  document.querySelectorAll(".modulo").forEach((modulo) => {
    const activo = modulo.id === `modulo-${tipo}`;
    modulo.hidden = !activo;
    modulo.classList.toggle("activo", activo);
  });

  document.querySelectorAll("[data-modulo]").forEach((boton) => {
    const activo = boton.dataset.modulo === tipo;
    boton.classList.toggle("activo", activo);
    boton.setAttribute("aria-pressed", String(activo));
  });

  if (tipo !== "videos") {
    document.querySelectorAll("#modulo-videos video").forEach((video) => video.pause());
  }

  try {
    history.replaceState(null, "", `#modulo-${tipo}`);
  } catch (_) {
    // El cambio de módulo no depende de que el navegador permita modificar la URL.
  }

  if (desplazar) {
    document.getElementById(`modulo-${tipo}`).scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function anunciar(mensaje) {
  anuncio.textContent = "";
  requestAnimationFrame(() => {
    anuncio.textContent = mensaje;
  });
}

function manejarAccion(boton) {
  const tipo = boton.dataset.tipo;
  const accion = boton.dataset.accion;
  if (!CONFIGURACION[tipo]) return;

  switch (accion) {
    case "comenzar":
    case "repetir":
      iniciarPrueba(tipo);
      break;
    case "reiniciar":
      solicitarReinicio(tipo);
      break;
    case "anterior":
      cambiarPregunta(tipo, -1);
      break;
    case "siguiente":
      cambiarPregunta(tipo, 1);
      break;
    case "finalizar":
      finalizarPrueba(tipo);
      break;
    case "ir-errores":
      document.getElementById(`revision-${tipo}`).scrollIntoView({ behavior: "smooth", block: "start" });
      break;
  }
}

function validarDatos() {
  Object.entries(CONFIGURACION).forEach(([tipo, config]) => {
    if (!Array.isArray(config.preguntas) || config.preguntas.length === 0) {
      throw new Error(`No se encontraron preguntas para el módulo ${tipo}.`);
    }
    config.preguntas.forEach((pregunta, indice) => {
      const valida = pregunta.id !== undefined
        && typeof pregunta.pregunta === "string"
        && Array.isArray(pregunta.opciones)
        && pregunta.opciones.length >= 2
        && Number.isInteger(pregunta.correcta)
        && pregunta.correcta >= 0
        && pregunta.correcta < pregunta.opciones.length;
      if (!valida) throw new Error(`La pregunta ${indice + 1} del módulo ${tipo} tiene un formato inválido.`);
    });
  });
}

function inicializar() {
  validarDatos();

  Object.keys(CONFIGURACION).forEach((tipo) => {
    estados[tipo] = crearEstado();
    renderizar(tipo);

    const contenedor = document.getElementById(`contenido-${tipo}`);
    contenedor.addEventListener("click", (event) => {
      const boton = event.target.closest("[data-accion]");
      if (boton) manejarAccion(boton);
    });
    contenedor.addEventListener("change", (event) => {
      if (event.target.matches("input[data-respuesta]")) {
        seleccionarRespuesta(tipo, Number(event.target.value));
      }
    });
  });

  document.querySelectorAll("[data-modulo]").forEach((boton) => {
    boton.addEventListener("click", () => cambiarModulo(boton.dataset.modulo));
  });

  document.querySelector(".marca").addEventListener("click", (event) => {
    event.preventDefault();
    cambiarModulo("general");
  });

  dialogo.addEventListener("close", () => {
    if (dialogo.returnValue === "aceptar" && accionConfirmacion) accionConfirmacion();
    accionConfirmacion = null;
  });

  document.addEventListener("keydown", (event) => {
    if (dialogo.open || moduloActivo === "videos" || event.ctrlKey || event.metaKey || event.altKey) return;
    if (!/^[1-6]$/.test(event.key)) return;
    if (estados[moduloActivo].fase !== "prueba") return;

    const indice = Number(event.key) - 1;
    const pregunta = preguntaActual(moduloActivo);
    if (indice < pregunta.opciones.length) {
      event.preventDefault();
      seleccionarRespuesta(moduloActivo, indice);
    }
  });

  const destino = location.hash.replace("#modulo-", "");
  if (["general", "simulacro", "videos"].includes(destino)) cambiarModulo(destino, false);
}

inicializar();
