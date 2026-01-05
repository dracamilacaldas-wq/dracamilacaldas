import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const treatments = [
    {
        title: "Implante",
        desc: "Recupere a função mastigatória e o conforto com implantes de alta tecnologia, devolvendo a segurança ao sorrir.",
        image: "/card1-dra-camila.webp"
    },
    {
        title: "Reabilitação Oral",
        desc: "Restabelecimento da estética e função com um planejamento integrado para o seu sorriso.",
        image: "/card2-dra-camila.webp"
    },
    {
        title: "Ortodontia",
        desc: "Correção da posição dos dentes para um sorriso harmônico e funcional.",
        image: "/card3-dra-camila.webp"
    },
    {
        title: "Restauração Estética",
        desc: "Facetas em porcelana e lentes de contato para resultados naturais e imperceptíveis.",
        image: "/card4-dra-camila.webp"
    },
    {
        title: "Saúde Preventiva",
        desc: "Limpeza (profilaxia) e check-up regular para manter sua saúde bucal sempre em dia.",
        image: "/card5-dra-camila.webp"
    },
    {
        title: "Restauração Posterior",
        desc: "Restaurações em resina e onlay/inlay, garantindo durabilidade e estética.",
        image: "/card6-dra-camila.webp"
    }
]

export const Treatments = () => {
    return (
        <section id="treatments" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-accent font-medium uppercase tracking-wider mb-2 block">Nossos Tratamentos</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
                            Cuidamos do seu sorriso <span className="italic block text-muted-foreground/60">com excelência e carinho.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {treatments.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group h-full"
                        >
                            <Card className="h-full border-0 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white rounded-[3rem] overflow-hidden flex flex-col transition-all duration-700 transform hover:-translate-y-4 cursor-pointer ring-1 ring-stone-100/50">
                                <CardHeader className="p-10 md:p-12 pb-8">
                                    <motion.div
                                        whileHover={{ rotate: 0, scale: 1.1 }}
                                        className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500"
                                    >
                                        <ArrowRight className="w-6 h-6 -rotate-45" />
                                    </motion.div>
                                    <CardTitle className="text-2xl md:text-3xl font-serif text-primary mb-6 tracking-tight group-hover:text-accent transition-colors duration-500">{t.title}</CardTitle>
                                    <p className="text-muted-foreground text-base leading-relaxed">
                                        {t.desc}
                                    </p>
                                </CardHeader>
                                <CardContent className="px-6 pb-6 pt-0 mt-auto">
                                    <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] w-full relative">
                                        <img
                                            src={t.image}
                                            alt={t.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
