/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Zap, 
  Volume2, 
  ShieldAlert, 
  Lock, 
  ArrowUpSquare, 
  Speaker, 
  Battery, 
  Settings, 
  Package, 
  ChevronRight, 
  MessageCircle,
  Wrench,
  Clock,
  Star,
  Award,
  MapPin
} from 'lucide-react';

const WHATSAPP_NUMBER = "551633391929"; 
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.`;

export default function App() {
  return (
    <div className="min-h-screen bg-brand-blue-dark font-sans text-white overflow-hidden">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 px-6 py-4 flex items-center justify-between pointer-events-none">
        <div className="absolute inset-0 bg-brand-blue-dark/80 backdrop-blur-md border-b border-brand-gold/20 -z-10 pointer-events-auto"></div>
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded bg-gold-gradient flex items-center justify-center text-brand-blue-dark shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <Zap size={24} className="fill-current" />
            </div>
            <div>
              <h1 className="font-tech font-bold text-xl tracking-wider uppercase text-white leading-tight">HG</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] gold-gradient-text font-bold leading-tight">Auto Eletro</p>
            </div>
          </motion.div>
          
          <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide uppercase text-gray-300">
            <a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-brand-gold transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-brand-gold transition-colors">Diferenciais</a>
            <a href="#galeria" className="hover:text-brand-gold transition-colors">Galeria</a>
          </div>

          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-brand-blue/50 border border-brand-neon/50 text-brand-neon px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-brand-neon hover:text-brand-blue-dark transition-all box-glow-neon"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">Contato</span>
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=2000&auto=format&fit=crop" 
            alt="Carro tuning premium" 
            className="w-full h-full object-cover object-center opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-brand-blue-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/90 via-transparent to-transparent"></div>
          
          {/* Neon Lines Effect */}
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-brand-neon/30 box-glow-neon transform -rotate-12 scale-150"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-brand-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.5)] transform rotate-6 scale-150"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse text-glow-neon block"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Referência em Araraquara</span>
            </div>
            
            <h2 className="font-tech text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6 drop-shadow-2xl text-shadow-xl text-glow-neon text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
              HG AUTO <br/><span className="text-white">ELETRO</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-lg leading-relaxed border-l-4 border-brand-gold pl-6">
              Desde 1995 entregando <span className="text-white font-semibold">qualidade em elétrica automotiva</span>, som premium e acessórios. O design e a potência que seu carro merece.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-brand-blue-dark font-bold px-8 py-4 bg-gold-gradient rounded uppercase tracking-wider hover:scale-105 transition-transform basis-1/2 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                Solicitar Orçamento
              </a>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-white font-bold px-8 py-4 border border-brand-neon bg-brand-blue/30 backdrop-blur-sm rounded uppercase tracking-wider hover:bg-brand-neon hover:text-brand-blue-dark transition-all basis-1/2 box-glow-neon"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Sound waves animated visual */}
        <div className="absolute right-0 bottom-0 md:bottom-20 md:right-10 flex items-end gap-1 p-6 opacity-30 pointer-events-none">
           {[...Array(10)].map((_, i) => (
             <motion.div 
                key={i}
                className="w-2 bg-brand-neon rounded-t"
                animate={{ height: [20, 60 + Math.random()*80, 20] }}
                transition={{ repeat: Infinity, duration: 1 + Math.random(), ease: "easeInOut" }}
             />
           ))}
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 relative z-10 bg-brand-blue-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="relative">
              <div className="aspect-[4/5] bg-brand-blue rounded-lg overflow-hidden border border-brand-gold/20 shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=1000&auto=format&fit=crop" 
                  alt="Oficina Premium" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-neon/30 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
              
              <div className="absolute -left-10 top-20 bg-brand-blue-dark border border-brand-gold/30 p-6 rounded-lg shadow-xl inline-block backdrop-blur-md z-20">
                <div className="font-tech text-5xl font-black gold-gradient-text mb-1">1995</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Ano de Fundação</div>
              </div>
            </div>

            <div>
              <h3 className="text-brand-neon font-tech tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-3">
                <span className="w-10 h-[1px] bg-brand-neon"></span>
                Sobre a Empresa
              </h3>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">
                Tradição unida com <br/> <span className="gold-gradient-text">Tecnologia Premium</span>
              </h2>
              <div className="text-gray-300 text-lg font-light leading-relaxed space-y-6">
                <p>
                  A <strong className="text-white font-semibold">HG Auto Eletro</strong> é referência indiscutível em Araraquara quando o assunto é elétrica automotiva, som e acessórios de alto padrão.
                </p>
                <p>
                  Desde 1995, oferecendo muito mais que serviços, mas sim <strong className="text-white font-semibold">confiança, tecnologia e excelência no atendimento</strong>. Nosso visual mudou, nossa estrutura evoluiu com equipamentos de ponta, mas o compromisso em tratar cada carro como um projeto único permanece o mesmo.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="border-l-2 border-brand-gold pl-4">
                  <div className="text-white font-bold uppercase text-sm mb-1">Especialistas</div>
                  <div className="text-gray-400 text-sm">Profissionais altamente capacitados.</div>
                </div>
                <div className="border-l-2 border-brand-neon pl-4">
                  <div className="text-white font-bold uppercase text-sm mb-1">Oficina Moderna</div>
                  <div className="text-gray-400 text-sm">Estrutura preparada para grandes projetos.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-24 bg-[#050B1B] relative">
        {/* Background Graphic */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-brand-gold font-tech tracking-[0.2em] uppercase text-sm mb-4">Nossa Especialidade</h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase">Catálogo de <span className="text-brand-neon">Serviços</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Main Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-brand-blue-dark border border-brand-gold/20 p-8 rounded-xl group hover:border-brand-gold transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/10 transition-colors"></div>
              <div className="w-14 h-14 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="text-brand-gold" size={28} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-3">Elétrica Automotiva</h3>
              <p className="text-gray-400 font-light text-sm mb-6 max-w-md">
                Diagnóstico completo, reparos complexos e manutenção preventiva para o sistema elétrico do seu veículo com equipamentos modernos.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-brand-blue rounded text-gray-300 border border-white/5">Baterias</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-brand-blue rounded text-gray-300 border border-white/5">Alternador</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-brand-blue rounded text-gray-300 border border-white/5">Motor de Partida</span>
              </div>
            </motion.div>

            {/* Main Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 bg-brand-blue-dark border border-brand-neon/20 p-8 rounded-xl group hover:border-brand-neon transition-colors relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon/5 rounded-full blur-2xl group-hover:bg-brand-neon/10 transition-colors"></div>
              <div className="w-14 h-14 bg-brand-neon/10 rounded-lg flex items-center justify-center mb-6">
                <Volume2 className="text-brand-neon" size={28} />
              </div>
              <h3 className="text-2xl font-bold uppercase mb-3">Som Automotivo</h3>
              <p className="text-gray-400 font-light text-sm mb-6 max-w-sm">
                Projetos personalizados de som automotivo. Da instalação básica aos sistemas premium mais potentes.
              </p>
               <div className="flex gap-2 flex-wrap">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-brand-blue rounded text-gray-300 border border-white/5">Instalação</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-brand-blue rounded text-gray-300 border border-white/5">Alto-Falantes</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-brand-blue rounded text-gray-300 border border-white/5">Módulos</span>
              </div>
            </motion.div>

            {/* Smaller Services */}
            {[
              { icon: ShieldAlert, title: "Alarmes", delay: 0.2 },
              { icon: Lock, title: "Travas Elétricas", delay: 0.3 },
              { icon: ArrowUpSquare, title: "Vidros Elétricos", delay: 0.4 },
              { icon: Package, title: "Acessórios", delay: 0.5 },
              { icon: Settings, title: "Manutenção", delay: 0.6 }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay }}
                className="bg-brand-blue-dark/50 border border-white/10 p-6 rounded-xl hover:bg-brand-blue hover:border-brand-gold/30 transition-all flex flex-col items-center text-center group cursor-pointer"
              >
                <service.icon className="text-gray-500 group-hover:text-brand-gold transition-colors mb-4" size={32} />
                <h4 className="font-bold uppercase text-sm">{service.title}</h4>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-24 bg-brand-blue-dark border-t border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-3 gap-12 gap-y-16">
              <div className="lg:col-span-1">
                <h2 className="font-tech text-4xl font-black uppercase mb-6 drop-shadow-lg">Por que nos <span className="text-brand-neon block">Escolher?</span></h2>
                <p className="text-gray-400 font-light mb-8">
                  Nossa reputação foi construída com base no trabalho duro, honestidade e paixão por carros. Entregamos resultados que superam expectativas.
                </p>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-brand-gold hover:text-white transition-colors"
                >
                  Falar com especialista <ChevronRight size={16} />
                </a>
              </div>

              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Desde 1995", icon: Clock, desc: "Mais de duas décadas de experiência e milhares de clientes satisfeitos em Araraquara." },
                  { title: "Atendimento Especializado", icon: Star, desc: "Equipe técnica treinada para lidar com as mais recentes tecnologias automotivas." },
                  { title: "Equipamentos Modernos", icon: Zap, desc: "Ferramentas de diagnóstico precisas e estrutura projetada para veículos premium." },
                  { title: "Qualidade Garantida", icon: Award, desc: "Trabalhamos com as melhores marcas do mercado para garantir a durabilidade." }
                ].map((item, idx) => (
                   <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-full border border-brand-neon/30 flex items-center justify-center text-brand-neon bg-brand-blue">
                        <item.icon size={18} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-wide mb-2 text-white">{item.title}</h4>
                      <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Galeria Visual */}
      <section id="galeria" className="py-24 bg-[#020617]">
         <div className="max-w-7xl mx-auto px-6 mb-12">
            <h3 className="text-brand-gold font-tech tracking-[0.2em] uppercase text-sm mb-4 text-center">Portfólio</h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-center">Nossa <span className="text-white">Estrutura</span></h2>
         </div>

         <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-2 row-span-2 rounded-xl overflow-hidden relative group aspect-square md:aspect-auto"
            >
              <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000&auto=format&fit=crop" alt="Som Automotivo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/90 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-tech uppercase font-bold text-lg text-brand-neon tracking-wider">Projetos de Som</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl overflow-hidden relative group aspect-square"
            >
              <img src="https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=600&auto=format&fit=crop" alt="Oficina" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-blue-dark/50 group-hover:bg-brand-blue-dark/20 transition-colors"></div>
            </motion.div>

             <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl overflow-hidden relative group aspect-square"
            >
              <img src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=600&auto=format&fit=crop" alt="Peças" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-blue-dark/50 group-hover:bg-brand-blue-dark/20 transition-colors"></div>
            </motion.div>

             <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-2 rounded-xl overflow-hidden relative group aspect-[2/1]"
            >
              <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop" alt="Serviços" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-blue-dark/50 group-hover:bg-brand-blue-dark/20 transition-colors"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/90 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-tech uppercase font-bold text-lg text-brand-gold tracking-wider">Elétrica Automotiva</span>
              </div>
            </motion.div>
         </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue-dark"></div>
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-neon/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tight">
            Seu carro merece <br/>
            <span className="gold-gradient-text">Especialistas.</span>
          </h2>
          <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
            Traga seu veículo para a HG Auto Eletro e garanta serviços com extrema qualidade e garantia de quem entende do assunto.
          </p>
          
          <motion.div
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="inline-block"
          >
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg uppercase tracking-wider shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle size={28} />
              Chamar no WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
          
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-gold-gradient flex items-center justify-center text-black">
              <Zap size={18} className="fill-current" />
            </div>
            <div>
              <h1 className="font-tech font-bold text-lg tracking-wider uppercase text-white leading-none">HG</h1>
              <p className="text-[9px] uppercase tracking-[0.2em] text-brand-gold font-bold leading-none">Auto Eletro</p>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 font-light flex flex-col gap-2">
            <p className="flex items-center justify-center gap-2">
              <MapPin size={16} className="text-brand-neon" /> Araraquara - SP
            </p>
            <p className="flex items-center justify-center gap-2">
              <Volume2 size={16} className="text-brand-neon" /> Som Automotivo Araraquara
            </p>
            <p className="flex items-center justify-center gap-2">
               <Wrench size={16} className="text-brand-neon" /> Oficina Auto Elétrica
            </p>
          </div>

          <div className="md:text-right text-gray-400 font-tech tracking-widest text-lg">
            (16) 3339-1929
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 text-center text-xs text-gray-700 font-semibold uppercase tracking-widest">
           &copy; {new Date().getFullYear()} HG Auto Eletro. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
