# ES: Inditex

# Instalación y Documentación

## DESARROLLO

En el directorio del proyecto, puede ejecutar:

1. Instale el proyecto con `npm install` // `yarn install`
2. Inicialice la aplicación con `npm run start`

# Información sobre la app

La app está envuelta por react router v6 la cual crea 2 rutas, una para la home `(/)` y otra para ver los detalles del producto`(/detail/:id)`.

- Para la gestión del estado, he decicido utilizar Redux con Redux Toolkit y RTK Query.
- Se ha decidido utilizar RTK Query porque administra de una forma muy eficiente el cacheo de los datos y tiene la posibilidad de actualizarlos cada hora.
  - Con RTK Query se cargan todos los productos de la primera página, los detalles al entrar en cada uno de ellos y se hace la llamada a la api para actualizar la cesta.
  - Se utilizan reducers para almacenar los productos añadidos en la cesta ya que la llamada de la api siempre devuelve el valor de 1 entonces no se observarían cambios.
  - Los productos añadidos se despliegan `(haciendo click en la cesta)` y muestran detalles de cada uno. También se juntan en stacks si añades varias veces el mismo producto. También se ha añadido la posibilidad de eliminar productos de la cesta (solo de estado ya que no había llamada para la api con eso).

# Organización del proyecto

- components: Componentes utilizados en la app y alguno que se ha utilizado varias veces.
- store: Información de redux y gestión de estados.
- locale: Configuración de las traducciones.
- views: Pantallas de la web con sus componentes.
- utils: Utilidades que se pueden usar en varios sitios de la app.

---
