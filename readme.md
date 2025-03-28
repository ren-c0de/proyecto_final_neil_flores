# ¡Bienvenidos al proyecto! 🎉

Este repositorio es una plantilla diseñada para ayudarte a comenzar rápidamente. Sigue estos pasos para configurar tu entorno y empezar a trabajar:

## 1. Usa esta plantilla
Haz clic en el botón **"Use this template"** en la parte superior derecha de este repositorio para crear un nuevo proyecto basado en esta plantilla. 📂

## 2. Instala las dependencias
Después de clonar tu nuevo repositorio, abre la terminal en la carpeta del proyecto y ejecuta:
```bash
npm install
```
Esto instalará todo lo necesario para que el proyecto funcione. ✅

## 3. Compila los estilos de Tailwind CSS ✂️
Para que los estilos de Tailwind funcionen mientras trabajas, ejecuta:
```bash
npm run tw
```
Este comando se encargará de compilar los estilos cada vez que uses clases de Tailwind en tu HTML. 🎨

## 4. Archivos importantes 📂
- **`src/scripts/stays.js`**: Aquí encontrarás la data que necesitarás usar durante el proyecto. ¡Es tu fuente de información principal! 📊
- **`src/scripts/main.js`**: Este es el archivo donde escribirás el código principal de tu aplicación. Todo lo que construyas comenzará aquí. 🛠️
- **`src/scripts/utils.js`**: Este archivo contiene funciones auxiliares que pueden ser reutilizadas en diferentes partes de tu proyecto. Es un buen lugar para almacenar lógica común, como validaciones, formateos o cálculos. 🔧
- **`src/images/design`**: En esta carpeta encontrarás capturas que muestran cómo debería lucir el resultado esperado. Esto te servirá como referencia visual. 🖼️
- **`index.html`**: Este es el archivo donde desarrollarás el diseño de tu proyecto. Aquí se integrarán los estilos y el código para dar vida a tu aplicación. 🖋️

```plaintext
📂 ├── src/
    📜 ├── scripts/
         📄 ├── stays.js
         📄 └── main.js
    🖼️ ├── images/
         🖼️ └── design/
📄 ├── index.html
📦 ├── package.json
📖 └── README.md
🚫 └── .gitignore
```

## 5. ¡Manos a la obra! 🚀
Ya tienes todo listo para empezar. Explora los archivos, experimenta con el código y diviértete aprendiendo. 🎉

Si tienes dudas, no dudes en preguntar. ¡Éxito en tu proyecto! 💪

## MODIFICACIONES ADICIONALES :D
1.- Archivo star.svg
1.1.- Modificación al "fill" y "stroke" al valor "#ef5557" para que el color sea como el solicitado.

2.- Archivo  extra_styles.css
2.1.- Estilo hover en ".star_icon_orange:hover" para para que al pasar el mouse cambie la opacidad de la estrellita al costado del rating.
2.2.- Uso de display:none y display:block (este último con un selector de hermanos adyacentes) para que los controles del guests aparezcan
y desaparezcan de acuerdo al focus que se hace en input_guests
2.3.- Se añadieron 2 estilos específicos a #location_list para que se sitúe debajo del #input_location, permitiendo visualizar lo que se
escribe y la lista de opciones de location desplegada
2.4.- Se añadieron opacidad y transición al menú toogle para un mejor efecto de visualización al abrir y cerrar dicho menú