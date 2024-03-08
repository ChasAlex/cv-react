import { Html } from '@react-three/drei'
import { Section, useSection } from './section';
import Porsche from './Porsche'
import React, { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer'

const Intro = ({ modelPath, position, children, scale, contentPosition, domContent, BgColor }) => {

    const ref = useRef({ children, modelPath, position, scale, contentPosition })
    useFrame(() => { ref.current.rotation.y += 0.004 })

    const [refItem, inView] = useInView({
        threshold: 0
    });

    useEffect(() => {
        inView && (document.body.style.background = BgColor)
        
    }, [inView])

    return (

        <Section factor={1.5} offset={0}>
            <group position={contentPosition}>
                <mesh ref={ref} position={position}>
                    <Porsche modelPath={modelPath} scale={scale} />
                </mesh>
                <Html portal={domContent} fullscreen>
                    <div className='container' ref={refItem}>
                        {children}
                    </div>

                </Html>
            </group>
        </Section>

    )
};

export default Intro;