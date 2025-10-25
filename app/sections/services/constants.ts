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

export const CODE_DEMO = `
def create_agent(user_email: str | None = None):
  llm = AzureChatOpenAI(
    deployment_name=os.getenv("DEPLOYMENT_NAME"),
    model="gpt-4.1",
    temperature=0,
    azure_endpoint=os.getenv("AZURE_OPENAI_ENDPOINT"),
    api_version="2024-12-01-preview",
    api_key=os.getenv("AZURE_OPENAI_API_KEY"),
    timeout=120,
    max_retries=3,
    request_timeout=120,
    streaming=False,
  )

  llm_with_tools = llm.bind_tools(tools_list)
  
  # Full prompt with all critical instructions
  prompt = ChatPromptTemplate.from_messages([
    (system,
    You are a smart email assistant that helps users
`;
