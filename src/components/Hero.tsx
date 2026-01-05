import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

export const Hero = () => {
    return (
        <section className="relative w-full min-h-[90vh] pt-32 pb-20 flex items-center bg-background overflow-hidden">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Mobile Visual (Visible only on small screens) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative lg:hidden w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl"
                >
                    <img
                        src="/image-hero.jpeg"
                        alt="Sorriso Dra. Camila Caldas"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay Card Mobile */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/50">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Satisfação</span>
                            <div className="flex text-accent scale-75 origin-right">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600 font-medium font-serif italic text-base leading-snug">"O melhor investimento que fiz na minha autoestima."</p>
                    </div>
                </motion.div>

                {/* Left Content */}
                <div className="relative z-10 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 text-accent text-sm font-medium mb-8 ring-1 ring-accent/20"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Odontologia de Alta Performance
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-5xl md:text-7xl font-medium text-primary leading-[1.15] mb-8 tracking-tight text-balance"
                    >
                        O Sorriso que Você Merece, <span className="italic font-light text-accent">com a Segurança que Você Precisa.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg"
                    >
                        Especialista em transformar sorrisos no Guarujá. Tecnologia de ponta e atendimento humanizado para devolver sua autoestima e função mastigatória.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                            <Button asChild size="lg" className="rounded-full text-lg h-16 px-12 bg-primary hover:bg-primary/90 text-white shadow-button-glow w-full transition-all border-none cursor-pointer">
                                <a href="https://wa.me/5513978040770?text=Ol%C3%A1.%20Estava%20no%20seu%20site%20e%20gostaria%20de%20marcar%20uma%20avalia%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer">
                                    Quero agendar uma avaliação
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Visual (Desktop) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-lg mx-auto bg-stone-100 ring-1 ring-black/5"
                    >
                        <img
                            src="/image-hero.jpeg"
                            alt="Sorriso Dra. Camila Caldas"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/50"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Satisfação</span>
                                <div className="flex text-accent">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 font-medium font-serif italic text-lg line-clamp-2">"O melhor investimento que fiz na minha autoestima."</p>
                        </motion.div>
                    </motion.div>
                    {/* Decorative Element */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10"
                    />
                </motion.div>
            </div>
        </section >
    )
}
