import { motion } from "motion/react"
import { Star, Heart, Award } from "lucide-react"

export const About = () => {
    return (
        <section id="about" className="py-24 bg-stone-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-20 items-center">

                    {/* Image Left */}
                    <div className="w-full md:w-1/2 relative group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -30 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-stone-200 aspect-[4/5] w-full max-w-lg mx-auto md:mr-auto z-10 bg-stone-100"
                        >
                            <img
                                src="/Dra Camila Caldas.png"
                                alt="Dra. Camila Caldas"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                        {/* Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -10 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl border border-accent/30 -z-0"
                        />
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-0" />
                    </div>

                    {/* Text Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-accent font-medium uppercase tracking-[0.2em] text-sm mb-4 block"
                        >
                            A Especialista
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="font-serif text-4xl md:text-5xl font-medium text-primary mb-8 leading-tight"
                        >
                            Dra. Camila Caldas
                        </motion.h2>

                        <div className="space-y-6 text-lg text-muted-foreground font-sans leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                Sua trajetória na odontologia é marcada pela busca incessante da perfeição, com formação pela <strong>Universidade Metropolitana de Santos</strong>.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Com <strong>14 anos de experiência</strong>, consolidou-se como especialista em <strong>Dentística Restauradora</strong> e Reabilitação Oral, transformando sorrisos con precisão técnica e olhar artístico.
                            </motion.p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 gap-4">
                            {[
                                { icon: Award, text: "Especialista em Dentística Restauradora" },
                                { icon: Star, text: "Pós-graduação em Reabilitação Oral" },
                                { icon: Heart, text: "Atendimento Humanizado" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <FeatureItem icon={item.icon} text={item.text} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const FeatureItem = ({ icon: Icon, text }: { icon: any, text: string }) => (
    <div className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-stone-100 hover:border-accent/30 transition-all group">
        <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Icon size={20} strokeWidth={1.5} />
        </div>
        <span className="font-sans text-base md:text-lg font-medium text-gray-700">{text}</span>
    </div>
)
