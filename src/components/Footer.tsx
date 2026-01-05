import { Button } from "@/components/ui/button"
import { Instagram, MapPin, Phone } from "lucide-react"
import { motion } from "motion/react"

export const Footer = () => {
    return (
        <footer id="contact" className="bg-primary text-white py-24 relative overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 mb-20 border-b border-white/10 pb-20">
                    {/* Left: Content & Contacts */}
                    <div className="w-full lg:w-[45%]">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-accent font-medium uppercase tracking-[0.3em] text-xs mb-6 block">Contato & Localização</span>
                            <h2 className="font-serif text-5xl md:text-6xl font-medium mb-10 leading-[1.1] tracking-tight text-white">
                                Vamos elevar o <br /> <span className="italic font-light text-accent">seu Sorriso?</span>
                            </h2>
                            <p className="font-sans text-lg text-white/50 mb-12 max-w-md leading-relaxed">
                                Localizado em um dos pontos mais nobres do Guarujá, nosso consultório oferece uma experiência de cuidado exclusiva e tecnológica.
                            </p>

                            <div className="space-y-10">
                                <motion.a
                                    href="https://wa.me/5513978040770"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-6 group cursor-pointer"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-500">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] mb-1 font-bold">Agende via WhatsApp</p>
                                        <p className="text-white text-xl font-medium tracking-wide">(13) 97804-0770</p>
                                    </div>
                                </motion.a>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent transition-all duration-500">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] mb-1 font-bold">Endereço Presencial</p>
                                        <p className="text-white text-lg leading-snug">Rua Buenos Aires, 444 - Sala 64<br />Vila Maia, Guarujá - SP</p>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                className="mt-14"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button asChild className="h-16 px-12 rounded-full bg-accent hover:bg-accent/90 text-white text-lg font-semibold shadow-2xl transition-all border-none cursor-pointer">
                                    <a href="https://wa.me/5513978040770?text=Ol%C3%A1.%20Estava%20no%20seu%20site%20e%20gostaria%20de%20marcar%20uma%20avalia%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer">
                                        Falar com a Especialista
                                    </a>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right: Map Integrated */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-[55%] h-[400px] lg:h-auto"
                    >
                        <div className="relative h-full min-h-[450px] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] bg-stone-900 group">
                            <iframe
                                src="https://maps.google.com/maps?q=Rua%20Buenos%20Aires,%20444%20-%20Vila%20Maia,%20Guaruj%C3%A1%20-%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                                allowFullScreen
                                loading="lazy"
                                className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-1000"
                            ></iframe>

                            {/* Decorative Overlay Frame */}
                            <div className="absolute inset-0 pointer-events-none ring-[16px] ring-primary/20 rounded-[3.5rem]"></div>

                            {/* Floating Card */}
                            <div className="absolute bottom-8 right-8 left-8 md:right-12 md:left-auto md:w-72 bg-primary/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl">
                                <p className="text-accent text-[10px] uppercase tracking-widest font-bold mb-2">Localização Privilege</p>
                                <p className="text-white text-sm font-medium leading-relaxed">Localizado no coração da Vila Maia, com fácil acesso e estacionamento.</p>
                                <div className="mt-4 flex items-center gap-2 text-accent">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 tracking-[0.1em]">Ambiente Climatizado</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <img
                            src="/logo-dra-camila-header.png"
                            alt="Logo Dra. Camila Caldas"
                            className="h-12 md:h-14 w-auto object-contain brightness-0 invert"
                        />
                    </div>

                    <div className="flex gap-8">
                        <motion.a
                            href="https://www.instagram.com/dracamilacaldas/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white/60 hover:text-accent transition-colors"
                        >
                            <Instagram className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            href="https://wa.me/5513978040770?text=Ol%C3%A1.%20Estava%20no%20seu%20site%20e%20gostaria%20de%20marcar%20uma%20avalia%C3%A7%C3%A3o."
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white/60 hover:text-accent transition-colors"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </motion.a>
                    </div>

                    <p className="text-white/40 text-sm font-sans">
                        © {new Date().getFullYear()} Camila Caldas. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
