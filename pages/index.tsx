import MetaData from '@/components/MetaData';
import HeaderHome from '@/components/HeaderHome';
import HomeIntroduction from '@/components/HomeIntroduction';
import HomeFeaturedWork from '@/components/HomeFeaturedWork';
import HomeLatestProject from '@/components/HomeLatestProject';
import CallToAction from '@/components/CallToAction';
import Button from '@/components/shared/Button';

export default function Home() {
    return (
        <>
            <MetaData />
            <HeaderHome />
            <HomeIntroduction />
            <HomeFeaturedWork />
            <HomeLatestProject />
            <CallToAction
                index="04"
                title="Get in touch"
            />
            {/* <section className="u-spacing--responsive">
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
            </section> */}
        </>
    )
}