# TaskMaster de TODOS

Esta es una aplicación de TaskMaster de TODOS desarrollada como parte de un desafío técnico. La aplicación permite administrar y realizar un seguimiento de las tareas pendientes.

## Características principales

- Administración de tareas: Agregar, editar y eliminar tareas.
- Estado de tarea: Marcar una tarea como completada o incompleta.
- Interfaz intuitiva: Interfaz de usuario limpia y fácil de usar.
- Integración con Supabase: Utiliza la base de datos Supabase para almacenar y administrar los datos de las tareas.

## Requisitos previos

- Node.js: Asegúrate de tener Node.js instalado en tu máquina.

## Configuración del proyecto

1. Clona este repositorio en tu máquina local:

https://github.com/Alan-Senderovich/frontend-tecnico

2. Navega hasta el directorio del proyecto: <cd frontned-tecnico>

3. Instala las dependencias del proyecto: <npm install>


## Ejecución del proyecto

1. Inicia el servidor de desarrollo
npm run dev

## Construcción y despliegue

Para construir la aplicación en un ambiente productivo, puedes utilizar el siguiente comando:
npm run build

El resultado de la construcción se generará en el directorio dist. Puedes desplegar esta carpeta en un servidor estático para hacerla accesible en línea.

Además, si deseas desplegar la aplicación en GitHub Pages, puedes utilizar el siguiente comando:
npm run deploy

Esto desplegará la aplicación en una rama gh-pages y podrás acceder a ella a través de la URL proporcionada.


## Configuración de Supabase

1. Crea una cuenta gratuita en [Supabase](https://supabase.io/) si aún no tienes una.
2. Crea una base de datos en Supabase y obtén la URL de la API y la clave anónima.
3. Actualiza el archivo `src/main.js` con la URL de la API y la clave anónima de Supabase:

```javascript
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "URL-DE-LA-API-DE-SUPABASE";
const supabaseKey = "CLAVE-ANÓNIMA-DE-SUPABASE";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


