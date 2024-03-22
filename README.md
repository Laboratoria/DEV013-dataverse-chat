# K-Drama Verse 

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Desarrolladoras Web](#2-desarrolladoras-web)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Estructura del Proyecto](#4-estructura-del-proyecto)
* [5. Tecnologias utilizadas](#5-tecnologias-utilizadas)
* [6. Historias de usuario](#6-historias-de-usuario)
* [7. Prototipos](#7-prototipos)

***

## 1. Resumen del proyecto

Kdrama Verse es una plataforma web que permite a los usuarios interactuar con una lista de K-dramas a través de una experiencia. Los usuarios pueden explorar, filtrar por genero, ordenar de manera ascendente y descendente por nombre de k-drama, ver estadisticas en porcentaje por el numero de episodios, y asi poder tambien limpiar todos esos cambios. 
Gracias a la integracion de la API de Open AI permite a los usuarios chatear y obtender respuestas sobre los k-dramas. El proyecto fue desarrollado con un enfoque centrado en la experiencia del usuario, priorizando la creación de una interfaz amigable e intuitiva. Cada aspecto del diseño y la funcionalidad se ha desarrollado considerando las necesidades y preferencias de los usuarios.

## 2. Desarrolladoras Web

> :octocat: Antone Gonzales Huamani

- <p>GitHub: <a href="https://github.com/AGonzalesHuamani">@AntoneGonzales</a></p>
- <p>LinkedIn: <a href="https://www.linkedin.com/in/antone-gonzales">Antone Gonzales Huamani</a></p>

> :octocat: Melany Ventura

- <p>GitHub: <a href="https://github.com/dev-ventura">@dev-ventura</a></p>
- <p>LinkedIn: <a href="https://www.linkedin.com/in/melany-ventura/">Melany Ventura</a></p>


## 3. Funcionalidades

* Interacción con K-Dramas: Los usuarios pueden explorar una lista de k-dramas y obtener información detallada sobre cada uno.
* Filtrado por Género: Se ofrece la opción de filtrar los dramas según géneros específicos.
* Ordenamiento: La lista de dramas puede ordenarse en orden ascendente o descendente por nombre de k-drama.
* Chat con OpenAI: Los usuarios pueden interactuar con un chatbot alimentado por la API de OpenAI para obtener respuestas inteligentes sobre los dramas, puede ser  de manera individual con un k-drama, como tambien grupal interactuando con varios k-dramas a la vez.
* Estadísticas: Se proporcionan estadísticas sobre el porcentaje de capítulos vistos por numero de episodios de los k-dramas.
  

## 4. Estructura del Proyecto

La lógica del proyecto esta implementada completamente en JavaScript
(ES6), HTML y CSS. 

```text
.
├── src
|  ├── Components
|  |  └── ButtonReturnHome.js
|  |  └── Footer.js
|  |  └── Header.js
|  |  └── ListGroupChat.js
|  |  └── MenuSelect.js
|  |  └── ModalApi.js
|  |  └── TotalCards.js
|  |  └── WelcomeText.js
|  ├── data
|  |  └── dataset.js
|  ├── lib
|  |  └── apiKey.js
|  |  └── dataFunctions.js
|  |  └── openAIApi.js
|  ├── views
|  |  └── Error.js
|  |  └── GroupChat.js
|  |  └── Home.js
|  |  └── IndividualChat.js
|  ├── index.html
|  ├── index.js
|  ├── router.js
|  └── style.css
├── test
|  └── apiKey.spec.js
|  └── buttonReturnHome.spec.js
|  └── data.js
|  └── dataFunctions.spec.js
|  └── dataStats.js
|  └── footer.spec.js
|  └── header.spec.js
|  └── ListGroupChat.spec.js
|  └── openAIApi.spec.js
├── README.md
└── package.json

```
## 5. Tecnologias utilizadas
K-Drama Verse se desarrollo con un conjunto diverso de tecnologías y herramientas que permitieron una implementación robusta y una experiencia de usuario enriquecedora. 

### HTML5 
Se utilizo para realizar todas las estructuras HTML5 realizas desde JS, contenido de la aplicación web.

### CSS
Se utilizó CSS con la técnica Modelo de Caja, Flexbox y Grid para crear un diseño adaptable (responsive).

### JavaScript
JavaScript desempeña un papel fundamental en la experiencia de usuario ofrecida por K-Drama Verse. A continuación detallamos algunas formas en las que JavaScript se ha utilizado para mejorar la funcionalidad y la interactividad del proyecto.

* Interacción Dinámica: JavaScript se utiliza para crear una experiencia de usuario dinámica, permitiendo la interacción con los elementos de la página de forma fluida y sin necesidad de recargarla.
* Actualización en Tiempo Real: Se implementan funciones de JavaScript para actualizar el contenido de la página en tiempo real, proporcionando a los usuarios información actualizada sobre los k-dramas y sus estadísticas.
* Funcionalidad de Filtro y Ordenamiento: Se ha desarrollado código JavaScript para permitir a los usuarios filtrar y ordenar la lista de k-dramas según sus preferencias, mejorando así la capacidad de búsqueda y exploración.
* Interacción con la API de OpenAI: JavaScript se integra con la API de OpenAI para permitir a los usuarios interactuar con el chatbot y obtener respuestas inteligentes sobre los k-dramas de manera instantánea.
* Accedimos y manipulamos de manera dinámica el LocalStorage del navegador. Esta capacidad permite un almacenamiento eficiente de datos locales, mejorando la interactividad y proporcionando una experiencia personalizada al usuario.
* Dataverse chat ahora opera como una Single Page Application (SPA) gracias a un router construido completamente en JavaScript vanilla. Este enrutador permite la transición fluida entre diferentes vistas, mejorando la navegación del usuario.
* Se uso Jest para realizar pruebas unitarias con el uso de mock, asegurando la integridad y funcionalidad correcta de las distintas partes del código. Las pruebas unitarias contribuyeron a mantener la calidad del código y facilitaron futuras actualizaciones y expansiones del proyecto.

En conclusión, JavaScript desempeña un papel crucial en la experiencia ofrecida por K-Drama Verse al proporcionar funcionalidades interactivas, actualizaciones en tiempo real y una interfaz fluida que mejora la experiencia general del usuario.

## 6. Historias de Usuario
Además, se han creado historias de usuario para abordar cada funcionalidad, facilitando la planificación de los sprints al desglosar cada historia en tareas específicas.
* Historia de usuario 1 :
  * Visualizar los 24 kdramas como tarjetas con 3 datos:
  * Nombre del Kdrama- Cantidad de Episodios y Subtitulos
  * Visualizar mas información de la carta (k-drama) en una nueva vista.
    con un resumen  de que trata el kdrama
  Tareas:
    * Crear una nueva vista en HTML para mostrar la información detallada de cada carta (kdrama)
    * Diseñar y maquetar la estructura de la vista de manera clara y legible.
    * Implementar la lógica JavaScript para recuperar y mostrar la información de la carta seleccionada.

  Criterio de aceptación:
    * La nueva vista debe ser accesible desde la interfaz principal de la aplicación.
    * Al seleccionar unacarta (kdrama), se debe mostrar la información detallada correspondiente en la nueva vista.
    * La información detallada de la carta debe incluir todos los atributos relevantes y ser fácilmente legible para el usuario.

  Definición de terminado:
    * La vista muestra la información detallada de cada carta de manera clara y legible.
    * Al seleccionar una carta, se muestra su información detallada de manera precisa y completa.

* Historia de usuario 2 :
  * Interactuar (chatear) con el k-drama seleccionado
  Tareas:
    * Implementar la funcionalidad en JavaScript para permitir la interacción del usuario con su k-drama seleccionado
    * Integrar la API de OpenAI para habilitar el chat con la carta seleccionada.
    * Agregar un boton de ApiKey donde el usuario puede ingresar su apiKey y si no cuenta con una, redirigirlo para que pueda crear una.
    * Crear un modal para que aparezca solo en caso de que el usuario aun no halla ingresado una apiKey.
      y si no con un alert indicarle que ya ingreso su apiKey
    * El usuario puede iniciar una conversación con su k-drama elegido de manera sencilla desde la interfaz principal de la aplicación.
    * Los mensajes enviados y recibidos a través del chat se muestran correctamente y en tiempo real.
    * La interfaz de usuario del chat es intuitiva y fácil de usar para el usuario.
  Criterio de aceptación:
    * El usuario puede seleccionar fácilmente su carta favorita desde la interfaz principal de la aplicación.
    * El usuario puede seleccionar su carta favorita de manera intuitiva y sin complicaciones.
    * Las acciones realizadas con la carta favorita se ejecutan correctamente y proporcionan el resultado esperado.

* Historia de usuario 3 :
  *Chatear con todos los kdramas a la vez
  Tareas:
    * Integrar la API de OpenAI para habilitar el chat con los k-dramas
    * Diseñar la interfaz de usuario para mostrar el chat con todos los kdramas de manera clara y legible.
    * Mostrar una lista de todos los kdramas.
    * Implementar la funcionalidad JavaScript para enviar y recibir mensajes a través del chat con todas las cartas( k-dramas)
    * Agregar un boton de chat grupal, que se muestra en la vista Home e IndividualChat para poder acceder desde cualquier lugar a la vista de chat Grupal siempre y        cuando ya este ingresado su apiKey
  Criterio de aceptación:
    * El usuario puede iniciar una conversación con todos los kdramas de manera sencilla desde la interfaz principal de la aplicación.
    * Los mensajes enviados y recibidos a través del chat con todas las cartas se muestran correctamente y en tiempo real.
    * La interfaz de usuario del chat es intuitiva y fácil de usar para el usuario.
  Definición de terminado:
    * El chat con todas las cartas se integra sin problemas en la interfaz principal de la aplicación.
    * Los mensajes enviados y recibidos se muestran correctamente y en tiempo real en el chat.
    * La interfaz de usuario del chat es clara y fácil de usar para el usuario.

## 7. Prototipos
* Prototipo de baja fidelidad
  ![Prototipo-Home](https://github.com/dev-ventura/DEV013-dataverse-chat/blob/main/src/images/home%201.png)
  ![Prototipo-IndividualChat](https://github.com/dev-ventura/DEV013-dataverse-chat/blob/main/src/images/individual%20chat%201.png)
  ![Prototipo-GroupChat](https://github.com/dev-ventura/DEV013-dataverse-chat/blob/main/src/images/group%20chat%201.png)
  
* Prototipo de fidelidad alta
  ![Prototipo-Principal](https://github.com/dev-ventura/DEV013-dataverse-chat/blob/main/src/images/pantalla%20principal%20web.png)
  ![Prototipo-chatIndividual](https://github.com/dev-ventura/DEV013-dataverse-chat/blob/main/src/images/web%20(chat%20individual).png)
  ![Prototipo-chatGrupal](https://github.com/dev-ventura/DEV013-dataverse-chat/blob/main/src/images/web%20(chatgrupal).png)
  ![Prototipo-Error](https://github.com/dev-ventura/DEV013-dataverse-chat/blob/main/src/images/web%20(api%20key).png)
