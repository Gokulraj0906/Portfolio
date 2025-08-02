import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  Database, 
  Brain, 
  Award,
  Users,
  TrendingUp,
  Zap,
  Download,
  ChevronDown,
  Star,
  Sparkles,
  Rocket,
  Target,
  Globe
} from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    languages: ['Python', 'SQL', 'Java', 'JavaScript', 'C/C++', 'R', 'PHP', 'Bash/Shell', 'HTML/CSS'],
    frameworks: ['Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'PyTorch', 'MXNet','Qiskit', 'Flask', 'Django','FastAPI', 'Streamlit', 'Dash','React','Express.js'],
    tools: ['Power BI', 'Tableau', 'AWS', 'Postman', 'Jira', 'Git'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite',],
    platforms: ['PyCharm','IntelliJ IDEA', 'Jupyter', 'VS Code', 'Apache Spark', 'Hadoop']
  };

  const projects = [
    {
      title: 'GQNN - Quantum Neural Networks',
      description: 'Revolutionary open-source Python library bridging quantum computing and machine learning',
      tech: ['Python', 'Qiskit', 'Scikit-learn', 'Quantum'],
      impact: '8,000+ Downloads',
      metric: '98% Accuracy',
      status: 'Active',
      color: 'from-purple-400 to-pink-400',
      url: 'https://github.com/gokulraj0906/gqnn.git'
    },
    {
      title: 'AutoML++ Dashboard',
      description: 'Intelligent no-code platform democratizing machine learning for everyone',
      tech: ['Python', 'ML', 'Dashboard', 'AutoML'],
      impact: 'Zero-Code Solution',
      metric: '40% Faster',
      status: 'Completed',
      color: 'from-blue-400 to-cyan-400',
      url: 'https://github.com/Gokulraj0906/AutoML-PlusPlus.git'
    },
    {
      title: 'Malware Detection Web App',
      description: 'AI-powered cybersecurity solution with real-time threat intelligence',
      tech: ['Full-stack', 'ML', 'Security', 'AI'],
      impact: 'Real-time Scanning',
      metric: '99.2% Detection',
      status: 'Completed',
      color: 'from-red-400 to-orange-400',
      url: 'https://github.com/Gokulraj0906/Malware_detection_using_ml.git'
    }
  ];

  const achievements = [
    { icon: TrendingUp, text: 'Developed and optimized an LMS backend using Node.js and MongoDB, reducing API response time by 40%.', color: 'text-emerald-500' },
    { icon: Zap, text: 'Built an AI-based facial recognition system with 98% accuracy using analytical approaches.', color: 'text-yellow-500' },
    { icon: Award, text: 'Implemented JWT security and AWS S3 integration, achieving 90% fewer unauthorized access attempts and 99.9% upload success.', color: 'text-blue-500' },
    { icon: Users, text: 'Automated API testing with Postman, cutting manual testing efforts by 60%.', color: 'text-purple-500' }
  ];

  const stats = [
    { number: '8K+', label: 'Downloads', icon: Download },
    { number: '40%', label: 'Performance Boost', icon: Rocket },
    { number: '99%', label: 'Accuracy Rate', icon: Target },
    { number: '3+', label: 'Major Projects', icon: Star }
  ];

  return (
    <>
      {/* Global CSS Reset */}
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          color: #ffffff;
          background-color: #000000;
        }
        
        *, *::before, *::after {
          box-sizing: border-box;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Font size and color overrides for better consistency */
        .portfolio-text-white {
          color: #ffffff !important;
        }
        
        .portfolio-text-gray-300 {
          color: #d1d5db !important;
        }
        
        .portfolio-text-gray-400 {
          color: #9ca3af !important;
        }
      `}</style>

      <div className="min-h-screen w-full bg-black text-white overflow-x-hidden font-sans antialiased">
        {/* Animated Background */}
        <div className="fixed inset-0 w-full h-full z-0">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div 
            className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
            style={{
              left: typeof window !== 'undefined' ? Math.max(0, Math.min(window.innerWidth - 256, mousePosition.x - 128)) : '50%',
              top: typeof window !== 'undefined' ? Math.max(0, Math.min(window.innerHeight - 256, mousePosition.y - 128)) : '50%',
              transition: 'all 0.3s ease'
            }}
          ></div>
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 w-full min-h-screen flex items-center justify-center px-4">
          <div className="w-full max-w-7xl mx-auto py-12 sm:py-20 text-center">
            <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              {/* Floating Avatar */}
                <div className="mb-8 sm:mb-12 relative flex justify-center items-center">
                <div className="relative flex items-center justify-center">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-full blur-xl opacity-50 animate-ping pointer-events-none"></div>
                  {/* Avatar */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl sm:text-4xl lg:text-5xl font-bold shadow-2xl animate-pulse z-10 relative">
                    GS
                    {/* Sparkles - surround GS */}
                    <Sparkles className="absolute -top-4 -right-4 h-5 w-5 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-yellow-400 animate-bounce" />
                    </div>
                </div>
                </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse leading-tight portfolio-text-white">
                Gokulraj S
              </h1>
              
              <div className="mb-8 sm:mb-12 w-full">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl portfolio-text-gray-300 mb-6 font-light px-4 leading-relaxed">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-medium">Data Scientist</span>
                  <span className="hidden sm:inline text-gray-400"> • </span>
                  <br className="sm:hidden" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-medium">AI Engineer</span>
                  <span className="hidden sm:inline text-gray-400"> • </span>
                  <br className="sm:hidden" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-medium">Quantum Enthusiast</span>
                </p>
              </div>

              {/* Floating Badges */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 px-4">
                {['Data Science', 'Machine Learning', 'Backend Development', 'Quantum Computing'].map((skill, index) => (
                  <Badge 
                    key={index} 
                    className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-float text-white`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16 sm:mb-20 px-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group text-white"
                  onClick={() => {
                    const resumeUrl = '/resume.pdf';
                    const link = document.createElement('a');
                    link.href = resumeUrl;
                    link.download = 'Gokulraj_S_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                
                >
                  <Download className="mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
                  onClick={() => {
                    const section = document.getElementById('projects-section');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Projects
                  <ExternalLink className="ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-pulse" />
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4 text-cyan-400 group-hover:animate-bounce" />
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-400" />
          </div>
        </section>

        {/* Contact Info - Glassmorphism Cards */}
        <section className="relative z-10 w-full py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Mail, text: 'gokulsenthil0906@gmail.com', color: 'text-blue-400' },
                { icon: Phone, text: '+91 9025815749', color: 'text-green-400' },
                { icon: Linkedin, text: 'linkedin.com/in/gokulraj0906', color: 'text-blue-500' },
                { icon: Github, text: 'github.com/gokulraj0906', color: 'text-gray-300' }
              ].map((contact, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6 text-center">
                    <contact.icon className={`h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 ${contact.color} group-hover:animate-pulse`} />
                    <p className="text-sm sm:text-base portfolio-text-gray-300 break-all font-medium">{contact.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education - Modern Card */}
        <section className="relative z-10 w-full py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-20 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </h2>
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group">
              <CardHeader className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-6 sm:p-8">
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl portfolio-text-white group-hover:text-cyan-400 transition-colors font-bold">
                  Bachelor of Technology in Data Science and AI
                </CardTitle>
                <CardDescription className="text-base sm:text-lg portfolio-text-gray-300 mt-2">
                  Dr. M.G.R Educational and Research Institute, Chennai
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                  <Badge className="px-4 py-3 text-base bg-gradient-to-r from-green-400/20 to-emerald-400/20 text-green-400 border border-green-400/30 text-center font-semibold">
                    CGPA: 7.9
                  </Badge>
                  <Badge className="px-4 py-3 text-base bg-gradient-to-r from-blue-400/20 to-cyan-400/20 text-cyan-400 border border-cyan-400/30 text-center font-semibold">
                    Oct 2022 - May 2026
                  </Badge>
                </div>
                <p className="text-base sm:text-lg portfolio-text-gray-300 leading-relaxed">
                  <strong className="portfolio-text-white font-semibold">Relevant Courses:</strong> Machine Learning, Neural Networks, Cloud Computing, 
                  Statistical Methods, Natural Language Processing, Computer Architecture, Quantum Computing, Data Visualization, Big Data Analytics.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills - Interactive Grid */}
        <section className="relative z-10 w-full py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: 'Languages', icon: Code, skills: skills.languages, color: 'from-blue-400 to-cyan-400' },
                { title: 'Frameworks', icon: Brain, skills: skills.frameworks, color: 'from-purple-400 to-pink-400' },
                { title: 'Databases', icon: Database, skills: skills.databases, color: 'from-green-400 to-emerald-400' },
                { title: 'Tools', icon: Zap, skills: skills.tools, color: 'from-yellow-400 to-orange-400' },
                { title: 'Platforms', icon: Globe, skills: skills.platforms, color: 'from-red-400 to-pink-400' }
              ].map((category, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group">
                  <CardHeader className="p-6">
                    <CardTitle className="flex items-center text-xl sm:text-2xl portfolio-text-white group-hover:text-cyan-400 transition-colors font-bold">
                      <category.icon className={`mr-3 h-6 w-6 sm:h-7 sm:w-7 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          className="bg-white/10 portfolio-text-gray-300 hover:bg-white/20 transition-all duration-300 hover:scale-110 text-sm px-3 py-2 font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="relative z-10 w-full py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-20 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] group">
              <CardHeader className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm p-6 sm:p-8">
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl portfolio-text-white group-hover:text-green-400 transition-colors font-bold">
                  Backend Developer Intern
                </CardTitle>
                <CardDescription className="text-base sm:text-lg portfolio-text-gray-300 mt-2">
                  Aurelion Future Forge • April 2025 - June 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 sm:p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/item">
                      <achievement.icon className={`h-8 w-8 sm:h-9 sm:w-9 ${achievement.color} flex-shrink-0 group-hover/item:animate-pulse`} />
                      <span className="text-base sm:text-lg portfolio-text-gray-300 group-hover/item:text-white transition-colors font-medium">{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects - Enhanced Cards */}
        <section className="relative z-10 w-full py-16 sm:py-24" id='projects-section'>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-20 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  <CardHeader className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <CardTitle className="text-lg sm:text-xl portfolio-text-white group-hover:text-cyan-400 transition-colors font-bold">
                        {project.title}
                      </CardTitle>
                      <Badge className={`bg-gradient-to-r ${project.color} text-white border-0 text-sm font-semibold`}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="portfolio-text-gray-300 mb-6 text-base leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-white/10 portfolio-text-gray-300 text-sm hover:bg-white/20 transition-colors font-medium px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-sm sm:text-base font-semibold text-green-400">{project.impact}</div>
                        <div className="text-sm text-cyan-400 font-medium">{project.metric}</div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-white hover:bg-cyan-400/20 p-2">
                        {project.url ? (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        ) : (
                          <ExternalLink className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="relative z-10 w-full py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-20 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Awards & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Award, title: 'Best Student Performer', org: 'IBM Career Education', date: 'January 2023', color: 'from-yellow-400 to-orange-400' },
                { icon: Database, title: 'Data Engineering Foundation', org: 'Informatica', date: 'February 2025', color: 'from-blue-400 to-cyan-400' },
                { icon: TrendingUp, title: 'Data Analytics Virtual Internship', org: 'KPMG (Forage)', date: 'June 2024', color: 'from-green-400 to-emerald-400' }
              ].map((cert, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 group">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:animate-pulse`}>
                      <cert.icon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                    </div>
                    <h3 className="font-bold text-xl sm:text-2xl mb-3 portfolio-text-white group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-base sm:text-lg portfolio-text-gray-300 mb-4">{cert.org}</p>
                    <Badge className={`bg-gradient-to-r ${cert.color} text-white border-0 text-sm font-semibold px-3 py-1`}>
                      {cert.date}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 w-full py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 sm:p-16 border border-white/10 text-center">
              <Rocket className="h-16 w-16 sm:h-20 sm:w-20 mx-auto mb-6 text-cyan-400 animate-bounce" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Build the Future?
              </h2>
              <p className="text-xl sm:text-2xl mb-8 portfolio-text-gray-300 font-light leading-relaxed">
                Let's collaborate on groundbreaking AI solutions that transform industries and shape tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button
                  size="lg"
                  className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 group text-white"
                  onClick={() => {
                    const email = 'gokulsenthil0906@gmail.com';
                    const subject = "Let's Collaborate on AI Innovation";
                    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
                    window.open(url, '_blank');
                  }}
                >
                  <Mail className="mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce" />
                  Start Conversation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold border-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
                  onClick={() => {
                    // Replace with your actual resume file path in the public directory
                    const resumeUrl = '/resume.pdf';
                    const link = document.createElement('a');
                    link.href = resumeUrl;
                    link.download = 'Gokulraj_S_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-pulse" />
                  Get Resume
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 w-full py-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-base sm:text-lg portfolio-text-gray-400 mb-6 font-medium">
              © 2025 Gokulraj S. Engineered with passion for innovation and precision.
            </p>
            <div className="flex justify-center space-x-6">
              <Sparkles className="h-6 w-6 text-cyan-400 animate-pulse" />
              <Star className="h-6 w-6 text-purple-400 animate-bounce" />
              <Sparkles className="h-6 w-6 text-blue-400 animate-pulse delay-500" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;