import './App.css'
import { useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Globe } from 'lucide-react'
import profilePlaceholder from './assets/profile-placeholder.png'
import projectPlaceholder from './assets/project-placeholder.png'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const projects = [
    {
      id: 1,
      title: "E-commerce Moderno",
      description: "Plataforma de e-commerce responsiva com carrinho de compras, sistema de pagamento e painel administrativo.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: projectPlaceholder,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard interativo para visualização de dados com gráficos dinâmicos e relatórios em tempo real.",
      technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      image: projectPlaceholder,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "App Mobile Fitness",
      description: "Aplicativo mobile para acompanhamento de exercícios com integração de APIs de saúde.",
      technologies: ["React Native", "Firebase", "Redux", "Health API"],
      image: projectPlaceholder,
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 85 },
    { name: "Vue.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "Git", level: 85 }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">
              Portfólio
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === 'home' ? 'text-blue-600' : 'text-gray-600'}`}
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === 'about' ? 'text-blue-600' : 'text-gray-600'}`}
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === 'projects' ? 'text-blue-600' : 'text-gray-600'}`}
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === 'skills' ? 'text-blue-600' : 'text-gray-600'}`}
              >
                Habilidades
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600'}`}
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img 
              src={profilePlaceholder} 
              alt="Foto de perfil" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Olá, eu sou
            <span className="block text-blue-600">Desenvolvedor Front-end</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Apaixonado por criar experiências digitais incríveis e interfaces de usuário intuitivas. 
            Especializado em tecnologias modernas e design responsivo.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Ver Projetos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Mim</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Desenvolvedor front-end com paixão por criar soluções digitais inovadoras
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Minha Jornada</h3>
              <p className="text-gray-600 mb-6">
                Com mais de 3 anos de experiência em desenvolvimento front-end, tenho me dedicado a criar 
                interfaces de usuário que combinam funcionalidade e estética. Minha paixão por tecnologia 
                me levou a dominar as principais ferramentas e frameworks do mercado.
              </p>
              <p className="text-gray-600 mb-6">
                Acredito que um bom código deve ser limpo, eficiente e escalável. Sempre busco as melhores 
                práticas de desenvolvimento e mantenho-me atualizado com as últimas tendências do setor.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Código Limpo</h4>
                <p className="text-sm text-gray-600">Desenvolvimento com foco em qualidade e manutenibilidade</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Palette className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Design UI/UX</h4>
                <p className="text-sm text-gray-600">Interfaces intuitivas e experiências memoráveis</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Responsivo</h4>
                <p className="text-sm text-gray-600">Adaptação perfeita para todos os dispositivos</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
                <p className="text-sm text-gray-600">Otimização para velocidade e SEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meus Projetos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes e significativos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Ver Projeto
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Habilidades</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-900 font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vamos conversar sobre seu próximo projeto ou oportunidade de trabalho
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Vamos trabalhar juntos!</h3>
              <p className="text-gray-600 mb-8">
                Estou sempre interessado em novos desafios e oportunidades. 
                Se você tem um projeto em mente ou quer apenas conversar sobre tecnologia, 
                não hesite em entrar em contato.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-600">contato@exemplo.com</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-600">linkedin.com/in/exemplo</span>
                </div>
                <div className="flex items-center">
                  <Github className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-600">github.com/exemplo</span>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea 
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Portfólio Desenvolvedor Front-end. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

