import MetaData from '@/components/MetaData';
import Button from '@/components/shared/Button';
import CallToAction from '@/components/CallToAction';
import CharsInOut from '@/components/shared/gsap/CharsInOut';
import LinesInOut from '@/components/shared/gsap/LinesInOut';

export default function Home() {
    return (
        <>
            <MetaData />
            <section className="u-spacing--responsive">
                <div className="o-container">
                    <div className="o-wysiwyg">
                        <h1>
                            <CharsInOut
                                delay={0.46}
                                target="#chars-1"
                            >
                                <span id="chars-1">
                                    Gerard
                                </span>
                            </CharsInOut>
                            <CharsInOut
                                delay={0.46}
                                target="#chars-1"
                            >
                                <span id="chars-1">
                                    Colombi
                                </span>
                            </CharsInOut>
                            Front-end
                            <br/>
                            Developer
                        </h1>
                        <LinesInOut
                            delay={1.5}
                            target="#intro"
                        >
                            <div className="o-wysiwyg u-large-text">
                                <p id="intro">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis? Placeat dolore, eveniet ipsum nesciunt dolorem quisquam incidunt facere vero. Totam at ipsa iste ipsum sed maiores ab eos quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis? Placeat dolore, eveniet ipsum nesciunt dolorem quisquam incidunt facere vero.</p>
                            </div>
                        </LinesInOut>
                    </div>
                </div>
            </section>
            <section className="u-spacing--responsive">
                <div className="o-container">
                    <div className="o-wysiwyg">
                        <div>
                            <p>Heading</p>
                            <div className="o-wysiwyg">
                                <h1>h1 Lorem ipsum</h1>
                                <h2>h2 Lorem ipsum</h2>
                                <h3>h3 Lorem ipsum</h3>
                                <h4>h4 Lorem ipsum</h4>
                                <h5>h5 Lorem ipsum</h5>
                                <h6>h6 Lorem ipsum</h6>
                            </div>
                        </div>
                        <div className="u-spacing--responsive--top"></div>
                        <div>
                            <p>Paragraph</p>
                            <p>Base - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis? Placeat dolore, eveniet ipsum nesciunt dolorem quisquam incidunt facere vero. Totam at ipsa iste ipsum sed maiores ab eos quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis? Placeat dolore, eveniet ipsum nesciunt dolorem quisquam incidunt facere vero. Totam at ipsa iste ipsum sed maiores ab eos quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis? Placeat dolore, eveniet ipsum nesciunt dolorem quisquam incidunt facere vero. Totam at ipsa iste ipsum sed maiores ab eos quasi?</p>
                        </div>
                        <div className="u-uppercase">
                            <p>u-uppercase - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis? Placeat dolore, eveniet ipsum nesciunt dolorem quisquam incidunt facere vero. Totam at ipsa iste ipsum sed maiores ab eos quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis? Placeat dolore, eveniet ipsum nesciunt dolorem quisquam incidunt facere vero. Totam at ipsa iste ipsum sed maiores ab eos quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis? Placeat dolore, eveniet ipsum nesciunt dolorem quisquam incidunt facere vero. Totam at ipsa iste ipsum sed maiores ab eos quasi?</p>
                        </div>
                        <div className="u-large-text">
                            <p>u-large-text - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis? Placeat dolore, eveniet ipsum nesciunt dolorem quisquam incidunt facere vero. Totam at ipsa iste ipsum sed maiores ab eos quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis? Placeat dolore, eveniet ipsum nesciunt dolorem quisquam incidunt facere vero. Totam at ipsa iste ipsum sed maiores ab eos quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis? Placeat dolore, eveniet ipsum nesciunt dolorem quisquam incidunt facere vero. Totam at ipsa iste ipsum sed maiores ab eos quasi?</p>
                        </div>
                        <div className="u-larger-text o-wysiwyg">
                            <p>u-larger-text - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis? Placeat dolore, eveniet ipsum nesciunt dolorem quisquam incidunt facere vero. Totam at ipsa iste ipsum sed maiores ab eos quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis? Placeat dolore, eveniet ipsum nesciunt dolorem quisquam incidunt facere vero. Totam at ipsa iste ipsum sed maiores ab eos quasi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, perspiciatis? Placeat dolore, eveniet ipsum nesciunt dolorem quisquam incidunt facere vero. Totam at ipsa iste ipsum sed maiores ab eos quasi?</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="u-spacing--responsive">
                <div className="o-container">
                    <div>
                        <p>Button</p>
                        <Button
                            label="More about me"
                            href="/about"
                            className="c-btn"
                        />
                    </div>
                </div>
            </div>
            <CallToAction />
        </>
    )
}