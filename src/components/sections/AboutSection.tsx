/**
 * =============================================================================
 * About Section Component
 * =============================================================================
 * 
 * Displays biographical information and background.
 * =============================================================================
 */

/**
 * About Section Component
 * 
 * @returns About section JSX
 */
export function AboutSection(): JSX.Element {
    return (
        <section id="about" className="section bg-muted/30">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            About Me
                        </h2>
                        <p className="text-muted-foreground">
                            A brief introduction to who I am and what I do
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Image Placeholder */}
                        <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
                            <span className="text-6xl">👨‍💻</span>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-4">
                            <p className="text-lg">
                                I&apos;m a Full-Stack Developer based in New Zealand,
                                passionate about building modern web applications that
                                make a difference.
                            </p>
                            <p className="text-muted-foreground">
                                With experience in React, Next.js, Node.js, and cloud
                                technologies, I enjoy tackling complex problems and
                                turning ideas into reality.
                            </p>
                            <p className="text-muted-foreground">
                                When I&apos;m not coding, you&apos;ll find me exploring
                                new technologies, contributing to open source, or
                                enjoying the beautiful New Zealand outdoors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
