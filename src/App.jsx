import './App.css'
import { useState, useRef, useEffect } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Globe, Atom, Server, Cloud, Database } from 'lucide-react'
import profileImage from './assets/profile.png'
import ibarberLogo from './assets/ibarber-logo.png'
import turnixLogo from './assets/turnix-logo-card.png'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [skillsInView, setSkillsInView] = useState(false)
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])

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
      title: "iBarber",
      description: "Encontre uma barbearia perto de você. Plataforma para descobrir e conectar com barbearias próximas com facilidade.",
      technologies: ["React", "Vercel", "API Location", "UX/UI"],
      image: ibarberLogo,
      imageAlt: "Logo do iBarber",
      isLogoImage: true,
      status: "Em produção",
      liveUrl: "https://ibarber-ten.vercel.app",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Turnix",
      description: "Relatório de turnos automatizados. Gere relatórios de turno em segundos com dados de operação, escala, equipamentos e envio rápido.",
      technologies: ["React", "Vercel", "LocalStorage", "UX/UI"],
      image: turnixLogo,
      imageAlt: "Logo do Turnix",
      isLogoImage: true,
      imageCardClassName: "bg-[#D9F1E9]",
      imageClassName: "object-cover scale-105 brightness-105 contrast-125 saturate-110",
      status: "Em produção",
      liveUrl: "https://turnix-beta.vercel.app",
      githubUrl: "#"
    }
  ]

  const skills = [
    { name: "MongoDB", level: 80 },
    { name: "AWS", level: 75 },
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
                className={`text-sm font-medium transition-colors ${activeSection === 'home' ? '' : 'text-gray-600'}`}
                style={activeSection === 'home' ? { color: '#0B6B72' } : {}}
                onMouseEnter={(e) => e.target.style.color = '#0B6B72'}
                onMouseLeave={(e) => e.target.style.color = activeSection === 'home' ? '#0B6B72' : '#4b5563'}
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors ${activeSection === 'about' ? '' : 'text-gray-600'}`}
                style={activeSection === 'about' ? { color: '#0B6B72' } : {}}
                onMouseEnter={(e) => e.target.style.color = '#0B6B72'}
                onMouseLeave={(e) => e.target.style.color = activeSection === 'about' ? '#0B6B72' : '#4b5563'}
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`text-sm font-medium transition-colors ${activeSection === 'projects' ? '' : 'text-gray-600'}`}
                style={activeSection === 'projects' ? { color: '#0B6B72' } : {}}
                onMouseEnter={(e) => e.target.style.color = '#0B6B72'}
                onMouseLeave={(e) => e.target.style.color = activeSection === 'projects' ? '#0B6B72' : '#4b5563'}
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className={`text-sm font-medium transition-colors ${activeSection === 'skills' ? '' : 'text-gray-600'}`}
                style={activeSection === 'skills' ? { color: '#0B6B72' } : {}}
                onMouseEnter={(e) => e.target.style.color = '#0B6B72'}
                onMouseLeave={(e) => e.target.style.color = activeSection === 'skills' ? '#0B6B72' : '#4b5563'}
              >
                Habilidades
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors ${activeSection === 'contact' ? '' : 'text-gray-600'}`}
                style={activeSection === 'contact' ? { color: '#0B6B72' } : {}}
                onMouseEnter={(e) => e.target.style.color = '#0B6B72'}
                onMouseLeave={(e) => e.target.style.color = activeSection === 'contact' ? '#0B6B72' : '#4b5563'}
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center gradient-teal-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-10 animate-fade-in-down">
            <div className="tech-orbit-stage" aria-label="Tecnologias orbitando a foto de Abraão">
              <span className="orbit-ring orbit-ring-primary"></span>
              <span className="orbit-ring orbit-ring-secondary"></span>
              <div className="orbit-center">
                <img
                  src={profileImage}
                  alt="Foto de perfil"
                  className="orbit-profile-image"
                />
              </div>
              <div className="orbit-path orbit-path-react" style={{ '--start-angle': '-90deg', '--face-start': '90deg', '--orbit-duration': '18s' }}>
                <div className="tech-orbit-card">
                  <div className="tech-orbit-face">
                    <Atom size={18} />
                    <span>React</span>
                  </div>
                </div>
              </div>
              <div className="orbit-path orbit-path-node" style={{ '--start-angle': '180deg', '--face-start': '-180deg', '--orbit-duration': '18s' }}>
                <div className="tech-orbit-card">
                  <div className="tech-orbit-face">
                    <Server size={18} />
                    <span>Node</span>
                  </div>
                </div>
              </div>
              <div className="orbit-path orbit-path-aws" style={{ '--start-angle': '0deg', '--face-start': '0deg', '--orbit-duration': '18s' }}>
                <div className="tech-orbit-card">
                  <div className="tech-orbit-face">
                    <Cloud size={18} />
                    <span>AWS</span>
                  </div>
                </div>
              </div>
              <div className="orbit-path orbit-path-mongo" style={{ '--start-angle': '90deg', '--face-start': '-90deg', '--orbit-duration': '18s' }}>
                <div className="tech-orbit-card">
                  <div className="tech-orbit-face">
                    <Database size={18} />
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-100">
            <h1 className="text-heading-1 text-gray-900 mb-6">
              Olá, eu sou
              <span className="block" style={{ color: '#0B6B72' }}>Abraão Ulhoa</span>
            </h1>
            <p className="text-body-large text-gray-600 mb-8 max-w-2xl mx-auto">
              Apaixonado por criar experiências digitais incríveis e interfaces de usuário intuitivas. 
              Especializado em tecnologias modernas e design responsivo.
            </p>
          </div>
          <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-200">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: '#0B6B72' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#083D41'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#0B6B72'}
            >
              Ver Projetos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ borderColor: '#0B6B72', color: '#0B6B72' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(11, 107, 114, 0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-heading-2 text-gray-900 mb-4">Sobre Mim</h2>
            <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
              Desenvolvedor front-end com paixão por criar soluções digitais inovadoras
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left animation-delay-100">
              <h3 className="text-heading-3 text-gray-900 mb-6">Minha Jornada</h3>
              <p className="text-body-large text-gray-600 mb-6 leading-relaxed">
                Com mais de 3 anos de experiência em desenvolvimento front-end, tenho me dedicado a criar 
                interfaces de usuário que combinam funcionalidade e estética. Minha paixão por tecnologia 
                me levou a dominar as principais ferramentas e frameworks do mercado.
              </p>
              <p className="text-body-large text-gray-600 mb-6 leading-relaxed">
                Acredito que um bom código deve ser limpo, eficiente e escalável. Sempre busco as melhores 
                práticas de desenvolvimento e mantenho-me atualizado com as últimas tendências do setor.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100" style={{ '--hover-color': '#0B6B72' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0B6B72'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100" style={{ '--hover-color': '#0B6B72' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0B6B72'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100" style={{ '--hover-color': '#0B6B72' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0B6B72'} onMouseLeave={(e) => e.currentTarget.style.color = '#4b5563'}>
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right animation-delay-200">
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg card-hover border border-gray-200 hover:border-teal-300">
                <Code className="w-12 h-12 mx-auto mb-4" style={{ color: '#0B6B72' }} />
                <h4 className="font-semibold text-gray-900 mb-2">Código Limpo</h4>
                <p className="text-sm text-gray-600">Desenvolvimento com foco em qualidade e manutenibilidade</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg card-hover border border-gray-200 hover:border-teal-300">
                <Palette className="w-12 h-12 mx-auto mb-4" style={{ color: '#0B6B72' }} />
                <h4 className="font-semibold text-gray-900 mb-2">Design UI/UX</h4>
                <p className="text-sm text-gray-600">Interfaces intuitivas e experiências memoráveis</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg card-hover border border-gray-200 hover:border-teal-300">
                <Smartphone className="w-12 h-12 mx-auto mb-4" style={{ color: '#0B6B72' }} />
                <h4 className="font-semibold text-gray-900 mb-2">Responsivo</h4>
                <p className="text-sm text-gray-600">Adaptação perfeita para todos os dispositivos</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg card-hover border border-gray-200 hover:border-teal-300">
                <Globe className="w-12 h-12 mx-auto mb-4" style={{ color: '#0B6B72' }} />
                <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
                <p className="text-sm text-gray-600">Otimização para velocidade e SEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 gradient-teal-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-heading-2 text-gray-900 mb-4">Meus Projetos</h2>
            <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes e significativos
            </p>
          </div>
          <div className="grid max-w-[47rem] mx-auto md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden card-hover border border-gray-200 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`relative h-48 overflow-hidden ${project.imageCardClassName || (project.isIconImage ? 'bg-gradient-to-br from-gray-950 via-[#18102c] to-[#0b6b72]' : project.isLogoImage ? 'bg-[#0f1715]' : 'bg-gray-100')}`}>
                  {project.status && (
                    <span className="absolute right-4 top-4 z-10 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-bold text-[#0B6B72] shadow-md backdrop-blur-sm">
                      {project.status}
                    </span>
                  )}
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    className={`w-full h-full ${project.imageClassName || (project.isIconImage ? 'object-contain p-14' : 'object-cover')}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-heading-3 text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="badge-tech"
                        style={{ backgroundColor: '#D4EFEB', color: '#063839' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center transition-colors font-medium"
                      style={{ color: '#0B6B72' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#063839'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#0B6B72'}
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Ver Projeto
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center text-gray-600 hover:text-gray-800 transition-colors font-medium"
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
      <section id="skills" className="py-20 bg-white" ref={skillsRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-heading-2 text-gray-900 mb-4">Habilidades</h2>
            <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="flex justify-between mb-3">
                  <span className="text-gray-900 font-semibold text-lg">{skill.name}</span>
                  <span className="text-gray-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-sm">
                  <div 
                    className="h-3 rounded-full transition-all ease-out"
                    style={{ 
                      width: skillsInView ? `${skill.level}%` : '0%', 
                      backgroundColor: '#0B6B72',
                      transitionDuration: skillsInView ? '2s' : '0s',
                      transitionDelay: skillsInView ? `${index * 0.1}s` : '0s'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-teal-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-heading-2 text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
              Vamos conversar sobre seu próximo projeto ou oportunidade de trabalho
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left animation-delay-100">
              <h3 className="text-heading-3 text-gray-900 mb-6">Vamos trabalhar juntos!</h3>
              <p className="text-body-large text-gray-600 mb-8 leading-relaxed">
                Estou sempre interessado em novos desafios e oportunidades. 
                Se você tem um projeto em mente ou quer apenas conversar sobre tecnologia, 
                não hesite em entrar em contato.
              </p>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Mail className="w-5 h-5 mr-3" style={{ color: '#0B6B72' }} />
                  <span className="text-gray-600">contato@exemplo.com</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Linkedin className="w-5 h-5 mr-3" style={{ color: '#0B6B72' }} />
                  <span className="text-gray-600">linkedin.com/in/exemplo</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Github className="w-5 h-5 mr-3" style={{ color: '#0B6B72' }} />
                  <span className="text-gray-600">github.com/exemplo</span>
                </div>
              </div>
            </div>
            <form className="space-y-6 animate-slide-in-right animation-delay-200">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome
                </label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea 
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: '#0B6B72' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#083D41'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0B6B72'}
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
            © 2025 Portfólio de Abraão Ulhoa. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

