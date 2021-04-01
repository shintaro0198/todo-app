<template>
  <div id="app">
    <router-view :style="{'height':'100%'}">
    </router-view>
  </div>
</template>
<script>
export default {
  
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html{
  height: 100%;
}
body {
	line-height: 1;
  height: 100%;
  font-family: '游ゴシック';
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{
  padding: 5px 10px;
  background-color:#CCFF33;
  width: auto;
  border:solid 1px black;
  cursor: pointer;
  border-radius: 3px;
}
.title{
  font-size: 25px;
  text-align: center;
}
.flex{
  display: flex;
}
#createTask,#task,#search{
  border-radius: 10px;
  background-color: white;
}
#app{
  height: 100%;
  padding: 0;
}
*{
  margin: 0;
}
.pointer{
  cursor: pointer;
}
</style>
