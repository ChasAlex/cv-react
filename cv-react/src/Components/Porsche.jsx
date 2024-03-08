import {useGLTF} from '@react-three/drei'

const Porsche = ({modelPath, scale}) => {
    
    const gltf = useGLTF(modelPath, true);
    

    return <primitive object={gltf.scene} dispose ={null} scale={scale} />;
    
}

export default Porsche;