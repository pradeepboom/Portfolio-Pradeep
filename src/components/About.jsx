import { Section,Code, Briefcase,User } from 'lucide-react'
import React from 'react'

 export const About = () => {
  return (
    <section id="about" className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About <span className='text-primary'>Me</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold'>Passionate  Web Developer</h3>
                    <p className='text-muted-foreground'>
                       I completed my M.Sc. in Chemistry in 2020 and spent a year working in the pharmaceutical industry. While the experience was valuable, I realized that my true interest lies in the world of technology, especially web development. This shift in passion led me to explore coding, design, and the various tools used to build modern web applications.

                    </p>
                    <p className='text-muted-foreground'>
                        Since then, I have been dedicating my time to learning both front-end and back-end technologies. I'm deeply passionate about creating user-friendly, responsive websites and enjoy solving problems through code. Now, I’m eager to begin my career as a web developer and contribute meaningfully to projects that blend functionality with great user experience.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href="#contact" className='cosmic-button'>
                            Get In Touch
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-6'>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                            <Code className='h-6 w-6 text-primary'/>

                            </div>
                             <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground">
                                    Creating responsive websites and web applications with
                                    modern frameworks.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                         <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                            <User className='h-6 w-6 text-primary'/>

                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Full Stack Web Development</h4>
                                <p className="text-muted-foreground">
                                      Building complete web applications from front-end to back-end using modern frameworks and technologies. Focused on delivering fast, scalable, and responsive solutions that enhance user experience.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                         <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                            <Briefcase className='h-6 w-6 text-primary'/>

                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Fresher Experience</h4>
                                <p className="text-muted-foreground">
                                    Gained hands-on experience through  personal web development tasks, and continuous learning. Focused on building real-world applications while strengthening problem-solving and coding skills.
                                </p>
                            </div>

                        </div>
                    </div>
                     
                </div>
            </div>

        </div>

    </section>
  )
}

