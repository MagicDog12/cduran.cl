import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-malla',
  templateUrl: './malla.page.html',
  styleUrl: './malla.page.scss',
})
export class MallaPage implements OnInit {

  public ramos: any;

  constructor(
  ) { }

  ngOnInit(): void {
    this.ramos = [
      {
        nombre: 'Algoritmos y Estructuras de Datos',
        descripcion: `Se aprenden algoritmos de ordenación y búsqueda.
        Además se ven estructuras de datos importantes como lo son árboles, listas,
        hashing y grafos.`,
        skills: ['Python'],
        link: ''
      },
      {
        nombre: 'Taller de Programación Competitiva',
        descripcion: `Resolución de problemas usando algoritmos y estructuras de datos.
        `,
        skills: ['C++'],
        link: 'https://github.com/MagicDog12/Codeforces'
      },
      {
        nombre: 'Matemáticas Discretas para la Computación',
        descripcion: `Se estudia lógica, inducción, combinatoria y teoría de grafos.`,
        skills: [],
        link: ''
      },
      {
        nombre: 'Programación de Software de Sistemas',
        descripcion: `Se aprenden conceptos básicos (tipos, punteros)
        pasando por cosas intermedias (estructuras de datos, sistema de archivos)
        a herramientas más avanzadas como threads, sockets y paralelismo.
        `,
        skills: ['C'],
        link: ''
      },
      {
        nombre: 'Modelación y Computación Gráfica para Ingenieros',
        descripcion: `En estudian muchas herramientas de mecánica y lineal
        para dibujar triángulos y formar figuras con ellos en OpenGL.
        `,
        skills: ['Python'],
        link: ''
      },
      {
        nombre: 'Metodologías de Diseño y Programación',
        descripcion: `Se enseñan patrones de diseño para OOP y
         buenas prácticas de programación.
         `,
         skills: ['Java'],
        link: ''
      },
      {
        nombre: 'Teoría de la Computación',
        descripcion: `Se aprenden expresiones regulares, qué son y cómo funcionan
        las maquinas de turing, y el famoso problema P vs NP.`,
        skills: [],
        link: ''
      },
      {
        nombre: 'Bases de Datos',
        descripcion: `Se aprende SQL y el modelo Entidad-Relación, Algebra relacional
        y Formas normales. Además Indexación, optimización y
        evaluación de consultas. Inyecciones, Vistas y Privacidad. NoSQL.`,
        skills: ['PostgreSQL', 'MySQL'],
        link: ''
      },
      {
        nombre: 'Arquitectura de Computadores',
        descripcion: `Se aprende a diseñar circuitos digitales, y probar su funcionamiento en el simulador Logisim.
        Arquitectura Risc-V, Risc y Cisc. Escribir programas en assembler Risc-V y depurarlos con ddd.
        Se estudia el diseño de cpu, memoria y sistema de entrada/salida.`,
        skills: ['Assembler', 'C'],
        link: ''
      },
      {
        nombre: 'Lenguajes de Programación',
        descripcion: `Implementacion de un lenguaje de programación
        , uso de variables e identificadores, uso de funciones, pattern matching y testing.
        Todo esto basado en las gramaticas y la sintaxis.
        `,
        skills: ['Racket'],
        link: 'https://github.com/MagicDog12/Lenguajes-de-programacion'
      },
      {
        nombre: 'Ingeniería de Software',
        descripcion: `Proyecto de software dedicado a crear una aplicación
        de reseñas de libros.`,
        skills: ['Django', 'Python', 'Javascript', 'Bootstrap'],
        link: ''
      },
      {
        nombre: 'Sistemas Operativos',
        descripcion: `Se aprende la sincronización de procesos concurrentes (procesos livianos),
        en un sistema operativo minimal (NanoSystem).
        También aprender diferentes estrategias de administración de los procesos
        (scheduling).`,
        skills: ['C'],
        link: ''
      },
      {
        nombre: 'Redes',
        descripcion: `Se aprenden protocolos de transporte y redes de datos eficientes y correctas, para
        lograr hacer un uso optimizado de Internet. Analizar el funcionamiento de los sistemas de transporte y las redes físicas utilizadas por
        Internet (TCP/IP, por ejemplo). `,
        skills: ['Python'],
        link: ''
      },
      {
        nombre: 'Diseño y Análisis de Algoritmos',
        descripcion: `Diseñar, analizar e implementar
        algoritmos y estructuras de datos, considerando cotas inferiores,
        análisis amortizado, etc, y el uso de
        modelos avanzados de computación (memoria secundaria, algoritmos probabilísticos y
        aleatorizados.`,
        skills: [],
        link: ''
      },
      {
        nombre: 'Ingeniería de Software II',
        descripcion: `Proyecto de software dedicado a solucionar un problema
        de autenticación y autorización de usuarios para un cliente real.`,
        skills: ['Django', 'Python', 'Javascript', 'PostgreSQL'],
        link: ''
      },
      {
        nombre: 'Taller de Hacking Competitivo',
        descripcion: `Se resuelven problemas de Capture The Flag mediante Esteganografía,
        Criptografía moderna, Aplicaciones Web, Análisis forense, Ingeniería reversa,
        Pwning y Osint.`,
        skills: ['Python', 'Kali Linux'],
        link: ''
      },
      {
        nombre: 'Desarrollo de Aplicaciones Web',
        descripcion: `Desarrollo de una aplicación web de forma incremental
        desde el front-end (HTML, CSS, JS) hasta el back-end (CGI-Python, Servlets-Java). Entender
        frameworks y tecnologías modernas desde la base.`,
        skills: ['Flask', 'Python', 'Javascript', 'PostgreSQL'],
        link: 'https://github.com/MagicDog12/Desarrollo-de-Aplicaciones-Web'
      },
      {
        nombre: 'Taller de Metodologías Ágiles de Desarrollo de Software',
        descripcion: `Aprender y poner en práctica metodología ágil en un trabajo en equipo.
        `,
        skills: ['Django', 'Python', 'Javascript', 'PostgreSQL', 'Docker', 'Gitlab'],
        link: ''
      },
      {
        nombre: 'Recuperación de Información Multimedia',
        descripcion: `Implementación de algoritmos de búsqueda por similitud
        de descriptores de contenido multimedia, especialmente
        enfocado en imágenes, audio, texto y videos.`,
        skills: ['Python', 'C++'],
        link: ''
      }
    ]
  }

}
