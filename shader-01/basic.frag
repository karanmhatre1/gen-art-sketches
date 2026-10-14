#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

float random (in float x) {
    return fract(sin(x)*1e4);
}

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  
  float freq = 200.0
    // +random(floor(u_time*0.5))*100.0
    ;
  
  st.x = st.x*freq;
  
  st.y = st.y*random(floor(u_time*0.5))*20.0;
  
  vec2 ipos = floor(st);
  
  float t = 0.0;
  float b = 2.0;
  
  if(fract(st.y) < 0.5)  {
    t = 1.0;
  }
  else {
    t = -1.0;
  }
  
  ipos.x = ipos.x + (ceil(u_time*30.0)*t);
  
  vec3 result = vec3(step(0.6, random(ipos)));
  
  gl_FragColor = vec4(result,1.0);
}