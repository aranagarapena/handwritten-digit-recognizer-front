# ✨ Handwritten Digit Recognizer – Frontend

Este es el frontend del proyecto **Handwritten Digit Recognizer**, una aplicación web interactiva para dibujar dígitos manuscritos y obtener predicciones usando modelos basados en MNIST.

---

## 📁 Estructura del proyecto

```
development/
├── front/         # Aplicación Angular
├── docs/          # Documentación técnica, diagramas, esquemas
└── documents/     # Documentos adicionales (PDFs, referencias, etc.)
```

---

## 🧠 Funcionalidades

- Dibuja números del 0 al 9 usando el ratón.
- Envío del dibujo al backend para:
  - Usar un modelo preentrenado con MNIST.
  - Entrenar tu propio modelo y predecir con él.

---

## 🚀 Tecnologías

- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- Canvas API para la zona de dibujo

---

## ▶️ Cómo ejecutar el frontend

1. Ir a la carpeta del frontend:

```bash
cd development/front
```

2. Instalar dependencias y ejecutar:

```bash
npm install
ng serve
```

3. Abrir `http://localhost:4200` en el navegador.

---

## 🔗 Backend

Este frontend se conecta con un backend Laravel que expone endpoints para predicción y entrenamiento de modelos.  
Asegúrate de tener configuradas las URLs en los servicios Angular para apuntar al backend correcto (Railway o local).

---

## 📄 Documentación

- Diagramas y notas técnicas están en `development/docs/`
- Archivos adicionales o referencias en `development/documents/`

---
