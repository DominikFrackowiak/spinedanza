// src/data/program.ts
export interface ProgramSection {
 number: string
 title: string
 background: 'bg-white' | 'bg-accent'
 paragraphs: string[]
}

export const programData: ProgramSection[] = [
 {
  number: '1',
  title: 'EXPLORAR EL CONTACTO, HABITAR LA PRESENCIA',
  background: 'bg-white',
  paragraphs: [
   'Investigamos el tacto y el toque como una forma de percepción directa, libre de intenciones previas, donde el cuerpo comienza a hablar a través del encuentro.',
   '<strong>Resonancia del toque:</strong> Exploramos cómo nos afecta el contacto y cómo afecta al otro. Habitamos la bidireccionalidad del contacto: la experiencia de que tocar es, inevitablemente, ser tocado.',
   '<strong>Respiración y disponibilidad:</strong> Utilizamos la respiración como el soporte que nos permite estar presentes. Es nuestro lugar de partida para cultivar un estado de apertura, permitiendo que el movimiento nazca de la calma y no de una voluntad mecánica.',
   '<strong>La mirada y el espacio:</strong> Integramos la mirada no como un foco fijo, sino como una herramienta de conexión. Abrimos la atención periférica para que el contacto con el otro sea un puente hacia el entorno, habitando el espacio de forma global.',
   '<strong>Presencia habitada:</strong> Exploramos el silencio y la quietud como estados activos. Aprendemos a estar disponibles para lo que surge en el momento, dejando que el toque sea el lenguaje que establezca el primer vínculo honesto.',
  ],
 },
 {
  number: '2',
  title: 'ANATOMÍA DE LA ESCUCHA // NAVEGAR LOS TEJIDOS',
  background: 'bg-accent',
  paragraphs: [
   '<strong>Navegación por los tejidos:</strong> Diseccionamos cada tipo de toque y su influencia.',
   '<strong>Piel (Frontera y Sensibilidad):</strong> Activa la atención en los límites. Nos da la lectura de las direcciones iniciales y despierta la sensibilidad necesaria para el encuentro.',
   '<strong>Fascia (Organización Interna):</strong> Activa un nivel más profundo de escucha. Es la red que organiza el cuerpo por dentro, permitiendo que el movimiento sea global y no fragmentado.',
   '<strong>Músculo (Tono y Masa):</strong> Activa la relación con la densidad. Observamos el tono para dialogar con nuestra masa y la del otro, evitando el choque.',
   '<strong>Hueso (Estructura y Agua):</strong> Activa el soporte sólido y, paradójicamente, el agua interna. Da claridad en las direcciones, firmeza en la decisión y una estructura segura para el peso.',
   '<strong>El tono como lugar de escucha:</strong> Investigamos el tono muscular, su regulación y su disponibilidad. Aprendemos a habitar un cuerpo disponible que no se bloquea ni colapsa. Un tono disponible es imprescindible para no enmascarar las sensaciones físicas, y por ende poder dialogar. Observamos cómo la profundidad del contacto y la gestión del tono muscular transforman nuestra capacidad de diálogo.',
  ],
 },
 {
  number: '3',
  title: 'RAÍCES MÓVILES: PESO, SOPORTE Y ESTRUCTURA',
  background: 'bg-white',
  paragraphs: [
   'En este módulo profundizamos en el peso como habilidad corporal, cultivando una relación consciente con la gravedad y con la tierra. Exploramos cómo organizarnos desde una estructura estable y disponible, aprendiendo a dar y recibir peso de manera progresiva y sensible.',
   '<strong>Relación con la tierra y los apoyos:</strong> afinamos la percepción de los puntos de contacto con el suelo, reconocemos el centro de gravedad como guía del movimiento, desarrollamos una base clara que permita disponibilidad y estabilidad.',
   '<strong>Small dance:</strong> introducimos la pequeña danza como práctica de atención interna y observamos los micromovimientos que emergen al estar de pie.',
   'Cultivamos la presencia antes de entrar en la acción.',
   '<strong>Transferencia del peso:</strong> investigamos cómo trasladar y entregar el peso gradualmente sin empuje y sin sobrecarga. Atendemos a los detalles finos de la organización corporal.',
   '<strong>Soporte como acción compartida:</strong> comprendemos el sostén como una construcción conjunta y sin roles fijos: ambas personas participan activamente, creamos estructuras vivas en diálogo con la gravedad.',
   '<strong>Estructuras sólidas y adaptables:</strong> Desarrollamos claridad en el dar y recibir peso, buscamos eficiencia sin rigidez, cultivamos sensibilidad dentro del soporte.',
  ],
 },
 {
  number: '4',
  title: 'LA ARQUITECTURA DE LA CAÍDA',
  background: 'bg-accent',
  paragraphs: [
   'Profundizamos en la relación física con la tierra y en cómo la gestión del tono muscular nos permite navegar la incertidumbre del movimiento.',
   '<strong>Amistad con la gravedad:</strong> Dejamos de ver el peso como una carga para descubrirlo como un aliado orgánico; el motor que genera inercia, trayectoria y sentido a nuestra danza.',
   '<strong>Formas de habitar la caída:</strong> Exploramos el “caer” no como un accidente, sino como un espacio de elección. Aprendemos a percibir con atención plena lo que sucede mientras perdemos el equilibrio, haciendo de la caída un lugar seguro y creativo.',
   '<strong>El arte de amortiguar y ceder:</strong> Desarrollamos la capacidad de suavizar el impacto, aprendiendo a recibir el suelo y otros cuerpos con una organización orgánica. Investigamos cómo ceder el peso sin colapsar, transformando la caída en un aterrizaje amable y continuo.',
   '<strong>Ahondamos en el tono muscular como un dial de disponibilidad:</strong> Una escucha activa que nos permite habitar el cuerpo sin bloquearlo, encontrando la respuesta justa para cada interacción.',
   '<strong>Recoger la inercia:</strong> Investigamos cómo capitalizar la energía del descenso para reciclar el movimiento, utilizando el empuje y las espirales como herramientas para dar permanencia al baile.',
  ],
 },
 {
  number: '5',
  title: 'INERCIA Y MOMENTUM // LA CONTINUIDAD DEL MOVIMIENTO',
  background: 'bg-white',
  paragraphs: [
   'Profundizamos en la comprensión del movimiento como una trayectoria en curso, donde el cuerpo no inicia ni termina acciones de forma aislada, sino que participa en un flujo continuo de fuerzas. Investigamos cómo la inercia sostiene la danza, permitiendo que el movimiento se prolongue, se transforme y encuentre nuevas direcciones sin esfuerzo innecesario.',
   '<strong>Relación con el momentum y el riesgo:</strong> nos acercamos al momentum como una fuerza que requiere confianza y disponibilidad. Trabajamos la capacidad de habitar velocidades, cambios de dirección y momentos de desequilibrio, reduciendo el miedo a “ir demasiado lejos” y aprendiendo a acompañar lo que emerge.',
   '<strong>Continuidad y no interrupción:</strong> desarrollamos la capacidad de no cortar el flujo de la acción. Afinamos la escucha para identificar cuándo el movimiento ya está ocurriendo, evitando intervenir de más y permitiendo que la inercia despliegue su recorrido.',
   '<strong>Reciclaje de la energía:</strong> Investigamos cómo reutilizar la energía del movimiento en lugar de detenerla. El descenso, el rebote y las transiciones se convierten en oportunidades para relanzar la danza, generando continuidad y eficiencia.',
   '<strong>Espirales y trayectorias:</strong> profundizamos en los patrones espirales como organización fundamental del cuerpo en movimiento. Exploramos direcciones, curvas y órbitas que permiten redirigir la energía sin bloquearla, facilitando una danza más fluida y tridimensional.',
   '<strong>El cuerpo como transmisor de fuerzas:</strong> refinamos la organización corporal para permitir que el impulso viaje a través de la estructura sin perder claridad. Investigamos cómo compartir inercia con otros cuerpos, redirigiendo fuerzas en lugar de bloquearlas.',
  ],
 },
 {
  number: '6',
  title: 'EL CAMINO DEL AGUA // HABITAR EL FLUJO',
  background: 'bg-accent',
  paragraphs: [
   'Investigamos la continuidad del movimiento, explorando cómo el cuerpo puede habitar el espacio de forma tridimensional y entrar en un estado de flujo constante.',
   '<strong>Adaptabilidad y continuidad</strong> del cuerpo con respecto a lo que va encontrando. El flujo no se detiene.',
   '<strong>Reciclaje de energía:</strong> En el cuerpo de agua, el final de un movimiento es siempre el impulso del siguiente.',
   '<strong>Gestión del tono y amortiguación:</strong> Entrenamos la modulación del tono para absorber los obstáculos sin rigidez. Buscamos un cuerpo disponible que ni choca ni colapsa, sino que amortigua y organiza la fuerza para devolverla al movimiento.',
   '<strong>Investigamos el flujo:</strong> Entendemos el cuerpo como un sistema de corrientes donde el tono se adapta para encontrar siempre el camino de menor resistencia.',
   '<strong>La espiral y el desplazamiento:</strong> Utilizamos la organización circular y el agua como guía para desplazarnos, permitiendo que la rotación nos lleve de forma orgánica por el espacio.',
   '<strong>Tracción y dirección:</strong> Desarrollamos el uso de los brazos y los agarres para proyectar el flujo, convirtiendo cada contacto en una nueva trayectoria sin interrumpir la danza.',
  ],
 },
 {
  number: '7',
  title: 'DINÁMICAS DEL VUELO // IMPULSO, FORMA Y TRAYECTORIA',
  background: 'bg-white',
  paragraphs: [
   'Nos adentramos en la dimensión aérea de la danza, explorando cómo el cuerpo puede organizarse en el espacio más allá del suelo. Investigamos el vuelo como una consecuencia natural del momentum y la inercia, donde la ligereza emerge de una buena relación con la dirección, el tiempo y la estructura.',
   '<strong>El vuelo como continuidad del movimiento:</strong> Entendemos los lifts no como acciones aisladas, sino como prolongaciones de trayectorias ya en curso. El vuelo aparece cuando el impulso se sostiene, evitando la interrupción y permitiendo que el cuerpo transite hacia el aire con coherencia.',
   '<strong>Patrones de organización: bananas y espirales</strong><br />Exploramos formas curvas y espirales que facilitan el acceso al aire. Las “bananas” y otras configuraciones corporales permiten distribuir el peso, redirigir fuerzas y generar trayectorias más orgánicas y eficientes.',
   '<strong>Momentum e inercia en el aire:</strong> Profundizamos en cómo el impulso y la inercia sostienen los vuelos. Aprendemos a no forzar la elevación, sino a reconocer cuándo el movimiento ya contiene la información necesaria para despegar y desplazarse con ligereza.',
   '<strong>Dirección y geometría espacial:</strong> Investigamos líneas, arcos y trayectorias en el espacio. El cuerpo se organiza en relación a vectores claros, permitiendo que los vuelos tengan sentido, orientación y continuidad.',
   '<strong>Escuchar en el aire:</strong> Refinamos la escucha en situaciones de mayor complejidad física. Exploramos cómo sostener y ser sostenido sin rigidez, manteniendo la adaptabilidad y la comunicación constante entre los cuerpos.',
   '<strong>Entradas y salidas del vuelo:</strong> Damos importancia a las transiciones: cómo entrar y salir del aire de forma fluida, integrando el vuelo dentro de la danza sin cortes ni rupturas.',
   '<strong>Confianza, riesgo y disponibilidad:</strong> Trabajamos la relación con el riesgo desde un lugar progresivo y consciente. El vuelo implica soltar control y confiar en la organización compartida, desarrollando una disponibilidad que permita habitar lo inesperado.',
  ],
 },
 {
  number: '8',
  title: 'COMPOSICIÓN E IMPROVISACIÓN // POÉTICA, PRESENCIA Y DECISIÓN',
  background: 'bg-accent',
  paragraphs: [
   'Integramos los elementos desarrollados a lo largo del programa para adentrarnos en la improvisación como práctica compositiva. La danza se despliega como un acto de percepción, elección y creación en tiempo real, donde el cuerpo no solo se mueve, sino que construye sentido. Exploramos la poética del movimiento como una cualidad que emerge de la escucha, la presencia y la relación con el espacio, los otros y uno mismo.',
   '<strong>Presencia escénica y estados internos:</strong><br />Profundizamos en la presencia como cualidad perceptiva y expresiva.<br />Observamos cómo los estados internos (atención, emoción, disponibilidad) configuran la danza.<br />Cultivamos una presencia que no representa, sino que revela.',
   '<strong>La improvisación como composición instantánea:</strong><br />Entrenamos la capacidad de tomar decisiones en tiempo real.<br />Integramos acción, escucha y elección como un mismo gesto.<br />Comprendemos que cada momento construye forma.',
   '<strong>Escucha del espacio y lectura escénica:</strong><br />Desarrollamos la percepción del espacio como un campo activo.<br />Investigamos el uso del espacio negativo, las distancias y las direcciones.<br />Aprendemos a leer lo que ya está ocurriendo para intervenir con claridad.',
   '<strong>Relación y composición grupal:</strong><br />Exploramos dinámicas de dúo, trío y grupo.<br />Observamos cómo emergen estructuras colectivas sin ser impuestas.<br />Afinamos la capacidad de afectar y ser afectados dentro del conjunto.',
   '<strong>Timing, ritmo y dramaturgia emergente:</strong><br />Investigamos el tiempo como elemento compositivo.<br />Jugamos con pausas, aceleraciones y cambios de ritmo.<br />Permitimos que aparezca una dramaturgia sin necesidad de planificarla.',
  ],
 },
]