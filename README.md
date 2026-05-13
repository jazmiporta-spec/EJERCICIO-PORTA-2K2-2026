Analizador Sintáctico de Funciones - ANTLR4

Este proyecto consiste en un analizador sintáctico desarrollado con ANTLR4 y Node.js, que reconoce declaraciones de funciones sencillas y operaciones matemáticas básicas dentro de ellas.

_Estructura del Proyecto:
- `Calculator.g4`: Gramática del analizador (Lexer y Parser).
- `index.js`: Punto de entrada de la aplicación.
- `generated/`: Código fuente generado por ANTLR4 para JavaScript.
- `CustomCalculatorVisitor.js`: Lógica personalizada para recorrer el árbol.
- `archivos .txt`: Casos de prueba para validación.

 
_Requisitos e Instalación
1. Tener instalado [Node.js](https://nodejs.org/).
2. Clonar este repositorio y entrar a la carpeta:
   ```bash
   cd EJERCICIO-PORTA-2K2-2026
3. Instalar la librería de ANTLR4 para JavaScript:
   ```bash
   npm install
5. Abrir el repositorio:
   ```bash
   code .

_Cómo ejecutar el analizador
Puede probar cualquier archivo de la siguiente manera:
   node index.js [nombre-del-archivo]

Ejemplo:
node index.js correcto2.txt

_Casos de Prueba
El repositorio incluye 4 archivos de prueba para verificar el comportamiento:
 1. Reconocimiento Correcto
       correcto1.txt: Definición estándar de una función con console.log.
       correcto2.txt: Función con múltiples parámetros y operaciones matemáticas.

 2. Reconocimiento Incorrecto (Generan Error)
       incorrecto1.txt: Falta de llave de cierre } para verificar error de estructura.incorrecto2.txt: Uso de palabras clave erróneas (func en lugar de function).

*Como acotación, no logré ejecutar el árbol en VisualStudio, pero sí logré hacerlo en Antlr Lab por lo que adjunto las imágenes correspondientes
correcto1.txt:  <img width="459" height="157" alt="image" src="https://github.com/user-attachments/assets/aeb5ed19-494b-4515-bdba-7fee5cb13fa9" />

correcto2.txt: <img width="540" height="155" alt="image-1" src="https://github.com/user-attachments/assets/3976def2-e4ff-4354-bc7b-7ba4f17808b8" />

incorrecto1.txt: <img width="413" height="157" alt="image-2" src="https://github.com/user-attachments/assets/e7bb4420-72c9-4217-a3e3-ac8b32ba2cd2" />

incorrecto2.txt: <img width="371" height="149" alt="image-3" src="https://github.com/user-attachments/assets/b4deb64e-b677-4a7f-8299-4c0755982a40" />
