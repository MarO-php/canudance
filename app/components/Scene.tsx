'use client';
import {Canvas, useFrame, useThree} from '@react-three/fiber';
import {Float, OrbitControls, Stars} from '@react-three/drei';
import * as THREE from 'three';
import {useMemo, useRef} from 'react';

function SignalMaterial(){
 const mat=useRef<THREE.ShaderMaterial>(null);
 const uniforms=useMemo(()=>({uTime:{value:0},uColor:{value:new THREE.Color('#f5f5f2')}}),[]);
 useFrame((_,d)=>{if(mat.current)mat.current.uniforms.uTime.value+=d});
 return <shaderMaterial ref={mat} uniforms={uniforms} transparent vertexShader={`varying vec2 vUv; uniform float uTime; void main(){vUv=uv; vec3 p=position; p.z += sin((p.x+uTime*.2)*5.0)*.035; p.y += cos((p.z+uTime*.15)*4.0)*.02; gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}`} fragmentShader={`varying vec2 vUv; uniform float uTime; void main(){float grain=fract(sin(dot(vUv*vec2(127.1,311.7)+uTime,vec2(12.9898,78.233)))*43758.5453); float line=step(.88,fract(vUv.y*90.0)); float edge=smoothstep(.1,.0,abs(vUv.x-.5))*.18; float a=.25+grain*.2+line*.18+edge; gl_FragColor=vec4(vec3(.95),a);}`} />
}
function Pillar({x,z,s=1}:{x:number;z:number;s?:number}){return <mesh position={[x,0,z]} scale={[s,4*s,s]}><boxGeometry args={[.18,2,.18]}/><SignalMaterial/></mesh>}
function Core(){const ref=useRef<THREE.Mesh>(null);useFrame((state)=>{if(ref.current){ref.current.rotation.x=state.clock.elapsedTime*.1;ref.current.rotation.y=state.clock.elapsedTime*.17;ref.current.scale.setScalar(1+Math.sin(state.clock.elapsedTime*1.5)*.04)}});return <mesh ref={ref}><icosahedronGeometry args={[1.6,3]}/><SignalMaterial/></mesh>}
function World(){const {camera}=useThree();useFrame((state)=>{camera.position.x=Math.sin(state.clock.elapsedTime*.08)*.4;camera.position.y=1.1+Math.sin(state.clock.elapsedTime*.13)*.15;camera.lookAt(0,0,0)});return <><ambientLight intensity={.15}/><pointLight position={[0,2,2]} intensity={3} color="#ffffff"/><Core/><Float speed={1.2} rotationIntensity={.2} floatIntensity={.35}><mesh position={[0,-2,0]} rotation={[-Math.PI/2,0,0]}><planeGeometry args={[24,24,80,80]}/><SignalMaterial/></mesh></Float>{Array.from({length:12},(_,i)=><Pillar key={i} x={(i-5.5)*1.7} z:-3.8}/>) }<Stars radius={30} depth={12} count={800} factor={1.2} saturation={0} fade speed={.25}/></>}
export default function Scene(){return <Canvas className="scene" camera={{position:[0,1.2,7],fov:48}} dpr={[1,1.7]} gl={{antialias:true,powerPreference:'high-performance'}}><World/></Canvas>}
