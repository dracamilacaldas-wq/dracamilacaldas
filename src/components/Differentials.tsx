import { motion } from "motion/react"
import { Heart, Diamond, MapPin } from "lucide-react"

const differentials = [
    {
        title: "Atendimento Humanizado",
        desc: "Cada paciente é único. Priorizamos o acolhimento e o respeito em todas as etapas do tratamento.",
        icon: Heart
    },
    {
        title: "Tecnologia e Precisão",
        desc: "Equipamentos modernos e materiais de alta performance para garantir a excelência nos resultados.",
        icon: Diamond
    },
    {
        title: "Localização Privilegiada",
        desc: "Consultório de fácil acesso no coração do Guarujá (Vila Maia), pensado para o seu conforto.",
        icon: MapPin
    }
]

export const Differentials = () => {
    return (
        <section id="differentials" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-accent font-medium uppercase tracking-[0.2em] text-sm mb-4 block">Diferenciais</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight text-balance">
                        Por que escolher a <span className="italic">Dra. Camila Caldas?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {differentials.map((d, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-center group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-20 h-20 rounded-full bg-stone-50 flex items-center justify-center mx-auto mb-8 shadow-sm ring-1 ring-stone-100 group-hover:bg-primary group-hover:text-white transition-all duration-500"
                            >
                                <d.icon size={32} strokeWidth={1.2} className="text-accent group-hover:text-white transition-colors duration-500" />
                            </motion.div>
                            <h3 className="font-serif text-2xl text-primary mb-4 group-hover:text-accent transition-colors duration-500">{d.title}</h3>
                            <p className="text-muted-foreground leading-relaxed group-hover:text-primary transition-colors duration-500">
                                {d.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
