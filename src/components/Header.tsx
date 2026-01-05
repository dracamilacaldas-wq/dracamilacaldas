import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <motion.a
                    href="/"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src="/logo-dra-camila-header.png"
                        alt="Logo Dra. Camila Caldas"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </motion.a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-10">
                    {[
                        { href: "#about", label: "A Especialista" },
                        { href: "#treatments", label: "Tratamentos" },
                        { href: "#differentials", label: "Diferenciais" },
                        { href: "#contact", label: "Contato" }
                    ].map((link, i) => (
                        <motion.div
                            key={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                        >
                            <NavLink href={link.href} label={link.label} />
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Button
                            asChild
                            className="font-semibold rounded-full shadow-button-glow hover:scale-105 transition-all duration-300 bg-primary text-white hover:bg-primary/90 px-8 h-12 border-none cursor-pointer"
                        >
                            <a href="https://wa.me/5513978040770?text=Ol%C3%A1.%20Estava%20no%20seu%20site%20e%20gostaria%20de%20marcar%20uma%20avalia%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer">
                                Marcar Consulta
                            </a>
                        </Button>
                    </motion.div>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-primary" onClick={toggleMenu}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-stone-100 overflow-hidden"
                    >
                        <nav className="flex flex-col p-8 gap-6">
                            {[
                                { href: "#about", label: "A Especialista" },
                                { href: "#treatments", label: "Tratamentos" },
                                { href: "#differentials", label: "Diferenciais" },
                                { href: "#contact", label: "Contato" }
                            ].map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="text-xl font-serif text-primary hover:text-accent transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Button
                                    asChild
                                    className="w-full mt-4 h-14 rounded-full bg-primary text-lg"
                                    onClick={toggleMenu}
                                >
                                    <a href="https://wa.me/5513978040770?text=Ol%C3%A1.%20Estava%20no%20seu%20site%20e%20gostaria%20de%20marcar%20uma%20avalia%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer">
                                        Marcar Consulta
                                    </a>
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

const NavLink = ({ href, label }: { href: string; label: string }) => (
    <a
        href={href}
        className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors tracking-wide uppercase"
    >
        {label}
    </a>
)
