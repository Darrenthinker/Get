# Claude Code Subagents Collection

## 🌍 Language / 語言 / Idioma / Język
- [English](#english)
- [中文](#中文)  
- [Español](#español)
- [Polski](#polski)

---

## English

Welcome to the **Claude Code Subagents Collection** – a comprehensive toolkit of 75 specialized AI agents designed to supercharge your development workflow. These agents transform Claude Code into a multi-faceted development companion, each bringing domain-specific expertise to tackle complex challenges across the entire software development lifecycle.

### 🎯 What This Collection Offers

This isn't just another set of prompts – it's a carefully curated ecosystem of specialized agents, each optimized for specific domains and challenges:

- **Development & Architecture**: Full-stack developers, system architects, and platform specialists
- **Language Specialists**: Expert developers for Python, JavaScript, Rust, Go, and more
- **Infrastructure & Operations**: DevOps engineers, cloud architects, and system administrators  
- **Quality Assurance**: Code reviewers, testing specialists, and security auditors
- **Data & AI**: Data scientists, ML engineers, and AI researchers
- **Business & Strategy**: Product managers, business analysts, and technical writers

### 🚀 Quick Start Guide

#### Method 1: Direct Integration (Recommended)

The fastest way to get started is by directly importing these agents into your Claude Code environment:

1. **Download the Collection**
   ```bash
   git clone https://github.com/wshobson/agents.git
   cd agents
   ```

2. **Import Your Chosen Agents**
   - Select agents based on your current project needs
   - Copy the markdown content from relevant agent files
   - Paste directly into your Claude Code session
   - Start coding with enhanced capabilities

3. **Switch Between Agents**
   - Each agent is designed to work independently
   - Switch contexts by loading different agent configurations
   - Combine multiple agents for complex, multi-domain projects

#### Method 2: MCP Integration (Advanced)

For users familiar with Model Context Protocol:

1. **Set up MCP Server**
   ```bash
   # Configure your MCP server to include these agents
   # Refer to Claude Code MCP documentation for setup details
   ```

2. **Register Agent Collection**
   - Add agents as MCP tools
   - Enable dynamic agent switching
   - Integrate with your existing development workflow

### 📁 Collection Structure

```
agents/
├── README.md                    # This comprehensive guide
├── LICENSE                      # MIT License
├── .gitignore                   # Git ignore rules
├── development/                 # Core development agents
│   ├── backend-architect.md
│   ├── frontend-developer.md
│   ├── fullstack-developer.md
│   └── system-architect.md
├── languages/                   # Language-specific specialists
│   ├── python-pro.md
│   ├── javascript-master.md
│   ├── rust-pro.md
│   └── go-expert.md
├── infrastructure/              # DevOps and infrastructure
│   ├── devops-troubleshooter.md
│   ├── cloud-architect.md
│   └── infrastructure-engineer.md
├── quality/                     # QA and security
│   ├── code-reviewer.md
│   ├── security-auditor.md
│   └── test-engineer.md
├── data/                        # Data and AI specialists
│   ├── data-scientist.md
│   ├── ai-engineer.md
│   └── ml-engineer.md
└── business/                    # Business and strategy
    ├── product-manager.md
    ├── business-analyst.md
    └── technical-writer.md
```

### 🎨 Featured Agents

#### 🏗️ **Backend Architect**
*Claude-3.5-Sonnet | Complex System Design*
- Designs scalable backend architectures
- Optimizes database schemas and API structures  
- Implements microservices patterns
- Handles performance optimization and caching strategies

#### 🎨 **Frontend Developer**  
*Claude-3.5-Sonnet | Modern UI/UX Development*
- Builds responsive, accessible web interfaces
- Implements modern JavaScript frameworks (React, Vue, Angular)
- Optimizes for performance and user experience
- Integrates with backend APIs seamlessly

#### 🐍 **Python Pro**
*Claude-3.5-Sonnet | Python Excellence*
- Masters Python ecosystem and best practices
- Implements data structures, algorithms, and design patterns
- Handles Django, Flask, FastAPI development
- Optimizes Python performance and debugging

#### 🔒 **Security Auditor**
*Claude-3.5-Sonnet | Cybersecurity Focus*  
- Conducts comprehensive security assessments
- Identifies vulnerabilities and compliance issues
- Implements security best practices and controls
- Provides remediation strategies and risk analysis

#### 🚀 **DevOps Troubleshooter**
*Claude-3.5-Sonnet | Infrastructure Reliability*
- Diagnoses and resolves infrastructure issues
- Automates deployment pipelines and monitoring
- Manages containerization and orchestration
- Optimizes CI/CD workflows and system reliability

### 💡 Advanced Usage Patterns

#### Multi-Agent Workflows

Combine multiple agents for comprehensive project coverage:

```bash
# Example: Full-Stack Development Team
1. Load System Architect for initial planning
2. Switch to Backend Architect for API design  
3. Activate Frontend Developer for UI implementation
4. Engage Security Auditor for vulnerability assessment
5. Utilize DevOps Troubleshooter for deployment optimization
```

#### Context Switching

Each agent maintains specialized context awareness:
- **Domain Knowledge**: Deep expertise in specific technologies
- **Best Practices**: Industry-standard approaches and patterns  
- **Problem-Solving**: Specialized debugging and optimization techniques
- **Documentation**: Relevant resources and reference materials

#### Customization Options

Adapt agents to your specific needs:
- **Modify Instructions**: Adjust agent behavior for project requirements
- **Add Context**: Include project-specific information and constraints
- **Combine Expertise**: Merge multiple agent capabilities for hybrid solutions
- **Create Variants**: Develop specialized versions for unique use cases

### 🔧 Model Assignments & Performance

Our agents are strategically assigned to different Claude models based on their computational requirements and specialization:

#### Claude-3.5-Sonnet Agents (Premium Performance)
*Ideal for: Complex reasoning, system design, advanced problem-solving*

- **System Architect**: Complex system design and architectural decisions
- **Backend Architect**: Scalable backend architecture and database design
- **Security Auditor**: Comprehensive security analysis and threat modeling
- **DevOps Troubleshooter**: Complex infrastructure debugging and automation
- **AI Engineer**: Advanced ML model development and AI system design
- **Data Scientist**: Complex data analysis and statistical modeling

#### Claude-3.5-Haiku Agents (Speed Optimized)
*Ideal for: Quick tasks, code reviews, documentation, rapid iterations*

- **Code Reviewer**: Fast code analysis and improvement suggestions
- **Documentation Writer**: Quick generation of technical documentation  
- **API Designer**: Rapid API specification and endpoint design
- **Test Engineer**: Efficient test case generation and validation
- **Content Marketer**: Quick content creation and marketing copy
- **SEO Content Auditor**: Fast content optimization and SEO analysis

This strategic model assignment ensures optimal performance – complex, reasoning-heavy tasks leverage Sonnet's advanced capabilities, while routine tasks benefit from Haiku's speed and efficiency.

### 🎯 Choosing the Right Agent

#### By Project Phase

**Planning & Architecture**
- System Architect → High-level system design
- Product Manager → Requirements gathering and strategy  
- Business Analyst → Process analysis and optimization

**Development & Implementation**  
- Language Specialists (Python Pro, JavaScript Master, etc.) → Code development
- Frontend/Backend Developers → Specialized development tasks
- Database Designer → Data modeling and optimization

**Quality & Security**
- Code Reviewer → Code quality assessment
- Security Auditor → Vulnerability analysis  
- Test Engineer → Testing strategy and implementation

**Deployment & Operations**
- DevOps Troubleshooter → Infrastructure management
- Cloud Architect → Cloud strategy and implementation
- Performance Optimizer → System optimization

#### By Technology Stack

**Web Development**
- Frontend Developer + JavaScript Master + CSS Expert
- Backend Architect + Python Pro/Node.js Expert  
- Fullstack Developer (for smaller projects)

**Data & Analytics**
- Data Scientist + Python Pro + Database Designer
- AI Engineer + ML Engineer + Performance Optimizer

**Enterprise Systems**  
- System Architect + Enterprise Architect + Security Auditor
- Integration Specialist + API Designer + DevOps Troubleshooter

### 🌟 Best Practices

#### Agent Selection
- **Start Broad**: Begin with System Architect or Product Manager for planning
- **Get Specific**: Switch to specialized agents for implementation details  
- **Quality Gates**: Use Code Reviewer and Security Auditor before deployment
- **Optimize**: Employ Performance Optimizer and DevOps agents for production

#### Context Management
- **Clear Instructions**: Provide specific, actionable requirements
- **Relevant Context**: Share pertinent project information and constraints
- **Iterative Refinement**: Build on previous responses for complex solutions
- **Documentation**: Maintain agent decisions and recommendations

#### Performance Optimization
- **Model Selection**: Use Sonnet for complex tasks, Haiku for speed
- **Task Decomposition**: Break complex problems into agent-specific components
- **Parallel Processing**: Engage multiple agents for different aspects simultaneously  
- **Result Integration**: Combine outputs from multiple agents effectively

### 🤝 Contributing

We welcome contributions to expand and improve this agent collection:

#### Ways to Contribute
- **New Agents**: Develop agents for emerging technologies or specialized domains
- **Agent Improvements**: Enhance existing agent capabilities and instructions
- **Documentation**: Improve guides, examples, and best practices
- **Bug Reports**: Identify and report issues with agent performance

#### Contribution Guidelines
1. **Fork the Repository**: Create your own copy for development
2. **Follow Templates**: Use existing agents as templates for consistency  
3. **Test Thoroughly**: Validate agent performance across different scenarios
4. **Document Changes**: Provide clear descriptions of modifications and improvements
5. **Submit Pull Requests**: Include detailed explanations of changes and benefits

#### Agent Development Standards
- **Clear Purpose**: Each agent should have a specific, well-defined role
- **Comprehensive Instructions**: Include detailed capabilities and limitations
- **Example Usage**: Provide practical examples and use cases
- **Model Compatibility**: Ensure compatibility with assigned Claude models

### 📖 Learn More

#### Additional Resources
- **Claude Code Documentation**: Official Claude Code guides and references
- **MCP Protocol**: Model Context Protocol documentation and examples  
- **Agent Design Patterns**: Best practices for AI agent development
- **Community Examples**: Real-world implementations and case studies

#### Support & Community
- **Issues**: Report bugs and request features via GitHub Issues
- **Discussions**: Join community conversations and share experiences
- **Documentation**: Access comprehensive guides and tutorials
- **Updates**: Stay informed about new agents and improvements

---

## 中文

欢迎使用 **Claude Code 子代理集合** - 一个包含75个专业AI代理的综合工具包，旨在提升您的开发工作流程。这些代理将Claude Code转变为多方面的开发伙伴，每个都带来特定领域的专业知识来解决整个软件开发生命周期中的复杂挑战。

### 🎯 此集合提供什么

这不仅仅是另一套提示 - 这是一个精心策划的专业代理生态系统，每个都针对特定领域和挑战进行了优化：

- **开发与架构**：全栈开发者、系统架构师和平台专家
- **语言专家**：Python、JavaScript、Rust、Go等专家开发者
- **基础设施与运维**：DevOps工程师、云架构师和系统管理员
- **质量保证**：代码审查员、测试专家和安全审计员
- **数据与AI**：数据科学家、ML工程师和AI研究员
- **商业与策略**：产品经理、业务分析师和技术文档编写者

### 🚀 快速开始指南

#### 方法1：直接集成（推荐）

开始使用的最快方法是直接将这些代理导入您的Claude Code环境：

1. **下载集合**
   ```bash
   git clone https://github.com/wshobson/agents.git
   cd agents
   ```

2. **导入您选择的代理**
   - 根据当前项目需求选择代理
   - 从相关代理文件复制markdown内容
   - 直接粘贴到Claude Code会话中
   - 开始使用增强功能进行编码

3. **代理之间切换**
   - 每个代理设计为独立工作
   - 通过加载不同的代理配置来切换上下文
   - 为复杂的多领域项目组合多个代理

### 📁 集合结构

该集合包含75个专业代理，涵盖软件开发的各个方面：

- **开发代理**：后端架构师、前端开发者、全栈开发者
- **语言专家**：Python专家、JavaScript大师、Rust专家
- **基础设施**：DevOps故障排除员、云架构师、基础设施工程师
- **质量与安全**：代码审查员、安全审计员、测试工程师
- **数据与AI**：数据科学家、AI工程师、ML工程师
- **商业专家**：产品经理、业务分析师、技术文档编写者

---

## Español

¡Bienvenido a la **Colección de Subagentes de Claude Code**! Un completo conjunto de herramientas con 75 agentes de IA especializados diseñados para potenciar tu flujo de trabajo de desarrollo.

### 🎯 Lo que ofrece esta colección

Esta no es solo otra colección de prompts, sino un ecosistema cuidadosamente curado de agentes especializados:

- **Desarrollo y Arquitectura**: Desarrolladores full-stack, arquitectos de sistemas
- **Especialistas en Lenguajes**: Expertos en Python, JavaScript, Rust, Go
- **Infraestructura y Operaciones**: Ingenieros DevOps, arquitectos de nube
- **Aseguramiento de Calidad**: Revisores de código, especialistas en pruebas
- **Datos e IA**: Científicos de datos, ingenieros ML
- **Negocio y Estrategia**: Gerentes de producto, analistas de negocio

### 🚀 Guía de inicio rápido

1. **Descargar la colección**
   ```bash
   git clone https://github.com/wshobson/agents.git
   cd agents
   ```

2. **Importar agentes seleccionados**
   - Selecciona agentes según las necesidades de tu proyecto
   - Copia el contenido markdown de archivos de agentes relevantes
   - Pega directamente en tu sesión de Claude Code

3. **Cambiar entre agentes**
   - Cada agente está diseñado para trabajar independientemente
   - Cambia contextos cargando diferentes configuraciones de agentes

---

## Polski

Witamy w **Kolekcji Podagentów Claude Code** – kompleksowym zestawie narzędzi zawierającym 75 specjalistycznych agentów AI zaprojektowanych w celu wzmocnienia Twojego przepływu pracy nad rozwojem oprogramowania.

### 🎯 Co oferuje ta kolekcja

To nie jest po prostu kolejny zestaw promptów – to starannie wyselekcjonowany ekosystem wyspecjalizowanych agentów:

- **Rozwój i Architektura**: Deweloperzy full-stack, architekci systemów
- **Specjaliści Językowi**: Eksperci Python, JavaScript, Rust, Go
- **Infrastruktura i Operacje**: Inżynierowie DevOps, architekci chmury
- **Zapewnienie Jakości**: Recenzenci kodu, specjaliści testów
- **Dane i AI**: Data scientists, inżynierowie ML
- **Biznes i Strategia**: Menedżerowie produktu, analitycy biznesowi

### 🚀 Przewodnik szybkiego startu

1. **Pobierz kolekcję**
   ```bash
   git clone https://github.com/wshobson/agents.git
   cd agents
   ```

2. **Importuj wybrane agenty**
   - Wybierz agentów na podstawie potrzeb swojego projektu
   - Skopiuj zawartość markdown z odpowiednich plików agentów
   - Wklej bezpośrednio do sesji Claude Code

3. **Przełączanie między agentami**
   - Każdy agent jest zaprojektowany do niezależnej pracy
   - Zmieniaj konteksty ładując różne konfiguracje agentów

---

*This collection represents a comprehensive approach to AI-assisted development, providing specialized expertise for every aspect of the software development lifecycle. Each agent is carefully designed to maximize productivity while maintaining code quality and security standards.*