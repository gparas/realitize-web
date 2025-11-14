import LayersIcon from "@/icons/layers";
import MonitorIcon from "@/icons/monitor";
import ShieldIcon from "@/icons/shield";
import WorkflowIcon from "@/icons/workflow";

export const OVERLINE_TEXT = "Services";
export const HEADING_TEXT = "Custom AI Development";
export const PARAGRAPH_TEXT =
  "Our custom AI development services tailor solutions to optimise your business processes, enhance decision-making, and boost efficiency.";

export const FEATURES = [
  {
    name: "AI Architecture & Strategy",
    description:
      "Evaluate opportunities, define priorities, and build a scalable AI roadmap.",
    icon: LayersIcon,
  },
  {
    name: "Custom Model & System Development",
    description:
      "Design and implement AI models precisely aligned to your business and compliance requirements.",
    icon: MonitorIcon,
  },
  {
    name: "Workflow & Process Automation",
    description:
      "Streamline operations with trusted automation that enhances your teams.",
    icon: WorkflowIcon,
  },
  {
    name: "Secure Data Layer & Governance",
    description:
      "Private deployment models, access controls, auditability, and full data sovereignty.",
    icon: ShieldIcon,
  },
];

export const CODE_DEMO = `def NeuroIntelligence_Malaria_Detector():
  model = Sequential()

  # First Convolutional layer
  model.add(
    Conv2D(32, (3, 3),
    padding='same',
    input_shape=(64, 64, 3))
  )
  model.add(LeakyReLU(alpha=0.1))
  model.add(BatchNormalization())
  model.add(MaxPooling2D(pool_size=(2, 2)))

  # First Convolutional layer
  model.add(Conv2D(32, (3, 3), padding='same'))
  model.add(LeakyReLU(alpha=0.1))
  model.add(BatchNormalization())
  model.add(MaxPooling2D(pool_size=(2, 2)))

  # Second Convolutional layer
  model.add(Conv2D(64, (3, 3), padding='same'))
  model.add(LeakyReLU(alpha=0.1))
  model.add(BatchNormalization())
  model.add(MaxPooling2D(pool_size=(2, 2)))

  # Second Convolutional layer
  model.add(Conv2D(64, (3, 3), padding='same'))
  model.add(LeakyReLU(alpha=0.1))
  model.add(BatchNormalization())
  model.add(MaxPooling2D(pool_size=(2, 2)))

  # Third Convolutional layer
  model.add(Conv2D(128, (3, 3), padding='same'))
  model.add(LeakyReLU(alpha=0.1))
  model.add(BatchNormalization())
    model.add(MaxPooling2D(pool_size=(2, 2)))

  # Third Convolutional layer
  model.add(Conv2D(128, (3, 3), padding='same'))
  model.add(LeakyReLU(alpha=0.1))
  model.add(BatchNormalization())
  model.add(MaxPooling2D(pool_size=(2, 2)))

  # Flatten the output
  model.add(Flatten())

  # Dense layer with ReLU activation
  model.add(Dense(1024, activation='relu'))
  model.add(Dropout(0.3))

  # Dense layer with ReLU activation
  model.add(Dense(512, activation='relu'))

  # Final output layer
  model.add(Dense(2, activation='softmax'))

  # Compile the model
  model.compile(
    loss='binary_crossentropy',
    optimizer=Adam(learning_rate=0.001),
    metrics=['accuracy']
  )

  return model
`;
