#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265358979323846
  
precision highp float;

varying vec2 vUV;

uniform sampler2D tex;
uniform float time;
uniform float frequency;
uniform float amplitude;
uniform vec2 u_resolution;
uniform vec2 mouse;

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy*0.5;
  
  st.y = 1. - st.y;
  

  // st.x += sin(st.y*100.+time*0.2)*mouse.x;  
  // st.y += sin(st.x*100.+time*0.2)*0.003;
  
  // st.y += sin(st.y*10.+time*0.2)*0.003;
  
  // st.x += sin(fract(st.x-0.2)*10.+time*0.02)*0.03;
  
  // st.x += sin(fract(st.x-0.5)*10.+time*0.02)*0.03;
  
  st += sin(snoise(st+time*0.01)*0.1);
  
  // st.x += -0.2+sin(snoise(st+time*0.01)*0.1);
  // st.y += sin(pNoise(st+time, 20)*0.1);
  
  // st += sin(st*(15.0+time*0.02))*0.02;

  vec4 color = vec4(st.x,st.y,0.0,1.0);

  color = texture2D(tex,st);

  gl_FragColor = color;
}