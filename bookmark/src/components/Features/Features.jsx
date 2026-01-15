import { useCallback, useEffect, useMemo, useState } from 'react';
import './Features.css';
import FeatureCard from '../FeatureCard/FeatureCard';
import FeaturesList from '../../data/features.json'

function Features() {
    let [activeLink, setActiveLink] = useState();

    const { features, featureLists } = useMemo(() => {
        const f = {};
        const fl = [];
        for (const feature of FeaturesList) {
            fl.push({ id: feature.id, title: feature.menuTitle });
            f[feature.id] = feature;
        }
        return { features: f, featureLists: fl };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (featureLists.length) {
                setActiveLink(featureLists[0].id);
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [featureLists]);

    const activeLinkCalc = useCallback((event, link) => {
        event.preventDefault();
        setActiveLink(link);
    }, []);

    return (
        <div data-features id="data-features">
            <div className="app-max-width mt-32 lg:mt-32 w-full lg:w-1/2 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-6 ">
                    <h2 className="text-5xl font-display font-semibold text-center">Features</h2>
                    <p className="text-lg text-gray-500 text-center">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                </div>
                <div className="w-full features mt-6 border-b border-b-red-200">
                    {featureLists.length > 0 && featureLists.map((item) => (
                        <a key={item.id} href="" id={item.id} className={'features-item '} onClick={(e) => activeLinkCalc(e, item.id)}>
                            <span className={(activeLink === item.id ? 'text-red-600 scale-x-110' : 'text-red-400')}>
                                {item.title}
                            </span>
                            <div className={(activeLink === item.id ? 'w-full bg-red-400 duration-200 ' : 'w-0 bg-transparent ') + 'mt-3 h-0.5 features-item'}></div>
                        </a>
                    ))}
                </div>
            </div>
            {activeLink && 
            <div className='mt-6 lg:mt-2'>
                <FeatureCard imageSrc={features[activeLink].image} alt={features[activeLink].alt}>
                    <div className='flex flex-col justify-center lg:justify-start items-center h-full space-y-6 w-full lg:ml-6'>
                        <h3 className='text-3xl font-display font-semibold w-full text-center lg:text-left'>{ features[activeLink].title }</h3>
                        <p className='text-sm text-gray-500 text-center lg:text-left'>{ features[activeLink].info }</p>
                        <div className="flex flex-row w-full justify-center lg:justify-start space-x-4">
                            <button className="button-secondary">More Info</button>
                        </div>
                    </div>
                </FeatureCard>
            </div>
            }
        </div>
    );
}

export default Features;
