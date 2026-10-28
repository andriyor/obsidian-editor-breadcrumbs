import type { TranslationStrings } from '../types';

export const es: TranslationStrings = {
  showFolderPath: {
    name: 'Mostrar ruta de la carpeta',
    desc: 'Mostrar la cadena de carpetas (Carpeta › Subcarpeta) antes del nombre del archivo.',
  },
  showFileName: {
    name: 'Mostrar nombre del archivo',
    desc: 'Mostrar el nombre del archivo actual como una miga de pan.',
  },
  maxSegmentLength: {
    name: 'Caracteres máximos por elemento',
    desc: 'Los nombres más largos se truncan con puntos suspensivos (…).',
    errorMin: 'Introduce un número igual o mayor que 1.',
  },
  editFollowView: {
    name: 'Seguir el anclaje de la vista en modo de edición',
    desc: 'Desactivado: la ruta sigue al cursor, como antes. Activado: sigue la línea del anclaje de edición inferior, de modo que desplazarse sin hacer clic también actualiza la ruta.',
  },
  editAnchorPercent: {
    name: 'Anclaje en modo de edición (%)',
    desc: 'Punto del editor donde se cambia de encabezado: 0 = borde superior, 50 = centro, 100 = borde inferior. Solo se utiliza cuando "Seguir el anclaje de la vista en modo de edición" está activado.',
    errorRange: 'Introduce un número entero entre 0 y 100.',
  },
  readingAnchorPercent: {
    name: 'Anclaje en modo de lectura (%)',
    desc: 'Punto de la vista de lectura donde un encabezado pasa a ser el actual: 0 = borde superior, 50 = centro, 100 = borde inferior.',
    errorRange: 'Introduce un número entero entre 0 y 100.',
  },
  showInReadingMode: {
    name: 'Mostrar en modo de lectura',
    desc: 'Mostrar también la barra de navegación en modo de lectura (vista previa), siguiendo la posición de desplazamiento.',
  },
  showInTabHeader: {
    name: 'Mostrar ruta de encabezados en el encabezado de pestaña',
    desc: 'Mostrar las migas de encabezado en la barra de título de pestaña nativa, justo tras la ruta de carpeta/archivo (encabezado de Obsidian 1.14+). Las carpetas y archivos se omiten allí porque la ruta nativa ya los muestra.',
  },
  hideWhenNoHeadings: {
    name: 'Ocultar cuando no haya encabezados',
    desc: 'Ocultar la barra por completo en notas que no contengan ningún encabezado.',
  },
};
