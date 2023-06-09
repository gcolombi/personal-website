import { FEATURED_PROJECT, LATEST_PERSONAL_PROJECT } from '@/data/projects.data';
import MetaData from '@/components/MetaData';
import HomeHeader from '@/components/HomeHeader';
import HomeIntroduction from '@/components/HomeIntroduction';
import HomeFeaturedProject from '@/components/HomeFeaturedProject';
import CallToAction from '@/components/CallToAction';

export default function Home() {
    return (
        <>
            <MetaData />
            <HomeHeader />
            <HomeIntroduction />
            <HomeFeaturedProject
                index="02"
                title="Featured work"
                project={FEATURED_PROJECT}
                button={{
                    label: 'Sell all projects',
                    href: {
                        pathname: '/projects',
                        query: {
                            type: FEATURED_PROJECT.type
                        }
                    },
                    className: 'c-btn'
                }}
            />
            <HomeFeaturedProject
                index="03"
                title="Latest personnal project"
                project={LATEST_PERSONAL_PROJECT}
                button={{
                    label: 'Sell all personal projects',
                    href: {
                        pathname: '/projects',
                        query: {
                            type: LATEST_PERSONAL_PROJECT.type
                        }
                    },
                    className: 'c-btn'
                }}
            />
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