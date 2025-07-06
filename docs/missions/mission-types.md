# Sistema de Misiones en CasaMia

El sistema de misiones en CasaMia es una estructura modular que permite a los clientes completar diferentes tipos de retos para obtener recompensas y beneficios. Este documento explica la estructura de los tipos de misiones y cómo implementarlos en la aplicación.

## Tipos de Misiones Soportados

La aplicación soporta 6 tipos principales de misiones:

1. **Encuesta (Survey)**: Preguntas y validación de respuestas.
2. **Trivia**: Preguntas de cultura general o específicas del negocio; otorga premio si el usuario acierta.
3. **Estoy en CasaMia (Location)**: Verificación GPS para confirmar que el usuario está en la tienda.
4. **Encontrar QR (QRCode)**: Reto que implica escanear un código QR oculto en la tienda.
5. **Comprar producto (Purchase)**: Misión que requiere la compra de un producto específico, validada mediante escaneo.
6. **Calificar producto (ProductRating)**: El usuario debe proporcionar una calificación (estrellas) y un comentario sobre un producto.

## Estructura de Componentes

El sistema de misiones se organiza de la siguiente manera:

```
/components/missions/
  ├── MissionInterfaces.ts       # Interfaces para todos los tipos de misión
  ├── BaseMissionComponent.tsx   # Componente base con estructura común
  ├── MissionFactory.tsx         # Factory para renderizar el componente correcto
  ├── MissionDialog.tsx          # Diálogo para mostrar misiones en una ventana modal
  ├── index.ts                   # Exportaciones para facilitar importaciones
  ├── survey/                    # Componentes específicos por tipo
  │   └── SurveyMissionComponent.tsx
  ├── trivia/
  │   └── TriviaMissionComponent.tsx
  ├── location/
  │   └── LocationMissionComponent.tsx
  ├── qrcode/
  │   └── QRCodeMissionComponent.tsx
  ├── purchase/
  │   └── PurchaseMissionComponent.tsx
  └── productrating/
      └── ProductRatingComponent.tsx
```

## Cómo Usar el Sistema de Misiones

### 1. Importar los componentes necesarios

```tsx
import { MissionDialog, MissionFactory } from '@/components/missions';
import { Mission } from '@/types/mission';
```

### 2. Usando el Diálogo de Misiones (Recomendado)

```tsx
// En el componente padre
const [dialogOpen, setDialogOpen] = useState(false);
const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

const handleOpenMission = (mission: Mission) => {
  setSelectedMission(mission);
  setDialogOpen(true);
};

const handleCompleteMission = (missionId: string) => {
  // Lógica para cuando se completa la misión
  console.log(`Misión ${missionId} completada`);
  setDialogOpen(false);
};

// En el JSX
<Button onClick={() => handleOpenMission(missionData)}>
  Iniciar Misión
</Button>

// Diálogo de misión
<MissionDialog
  open={dialogOpen}
  onClose={() => setDialogOpen(false)}
  mission={selectedMission}
  onComplete={handleCompleteMission}
/>
```

### 3. Usando el MissionFactory directamente (Alternativa)

```tsx
// Renderizar una misión directamente en la página
<MissionFactory
  mission={missionData}
  onComplete={(missionId) => {
    // Lógica para cuando la misión se completa
    console.log(`Misión ${missionId} completada`);
  }}
  onCancel={() => {
    // Lógica para cuando el usuario cancela la misión
  }}
  isCompleted={false}
/>
```

### 3. Estructura de Datos

Cada misión debe tener un campo `type` que identifica el tipo de misión, y un campo `json` que contiene los datos específicos según el tipo:

```typescript
// Ejemplo de datos para una misión tipo encuesta
const surveyMission: Mission = {
  id: "mission123",
  name: "Encuesta de Satisfacción",
  type: "survey",
  description: "Cuéntanos sobre tu experiencia en CasaMia",
  // Otros campos comunes...
  json: {
    questions: [
      {
        id: "q1",
        text: "¿Cómo valorarías nuestro servicio?",
        options: [
          { id: "o1", text: "Excelente" },
          { id: "o2", text: "Bueno" },
          { id: "o3", text: "Regular" },
          { id: "o4", text: "Malo" }
        ]
      },
      // Más preguntas...
    ]
  }
};
```

## Extensibilidad

Para añadir un nuevo tipo de misión:

1. Definir la interfaz en `MissionInterfaces.ts`
2. Crear el componente específico en una nueva carpeta
3. Actualizar el `MissionFactory` para soportar el nuevo tipo
4. Actualizar el enum `MissionType` con el nuevo tipo
