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

float random( float seed )
{
	return fract( 543.2543 * sin( dot( vec2( seed, seed ), vec2( 3525.46, -54.3415 ) ) ) );
}


void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy*.5;
  st.y = 1. - st.y;
  
  // st.x = fract(st.x*1.);
  // st.y += sin(st.x*3.+st.y*10.+time*0.2)*.1;
  
  // st.y += 0.5-random(time*0.01);
  st.x += 0.6;
  
  // st.y += atan(st.y*sin(st.x));
  
  // st.x += fract(-st.y*20.0+time*0.1)*sin(time*0.01)*0.1;
  
  // vec4 color = vec4(st.x,0.0,st.y,1.0);

  vec4 color = texture2D(tex,st);
  
  // float r = fract(color.b*5.0);
  
  color = vec4(color.r,color.r,color.r,1.);

  gl_FragColor = color;
}

