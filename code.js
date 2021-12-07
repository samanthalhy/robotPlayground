const htmlEditor = CodeMirror(document.querySelector(".editor .code .html-code"),{
	lineNumbers:true,
	tabSize:4,
	mode:"xml"
});
const cssEditor = CodeMirror(document.querySelector(".editor .code .css-code"),{
	lineNumbers:true,
	tabSize:4,
	mode:"css"
});
const jsEditor = CodeMirror(document.querySelector(".editor .code .js-code"),{
	lineNumbers:true,
	tabSize:4,
	mode:"javascript"
});
const jsEditorVar = CodeMirror(document.querySelector(".editor .code .js-code-var"),{
	lineNumbers:true,
	tabSize:4,
	mode:"javascript"
});
let firstTime = true;
document.querySelector("#run-btn").addEventListener("click",function(){
	let htmlCode = "<body>" + htmlEditor.getValue() + "</body>";
	console.log(htmlCode);
	let cssCode = "<style>" + cssEditor.getValue() + "</style>";
	let jscode = "<scri" + "pt src=" + "https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.min.js" + "></scr" + "ipt>";
	console.log(jscode);
	jsCodeVar = "<scri" + "pt id="+"varCode"+">" + jsEditorVar.getValue() + "</scri" + "pt>";
	jsCode = jscode + "<scri" + "pt id="+"testCode"+">" + jsEditor.getValue() + "</scri" + "pt>";
	let previewWindow = document.querySelector("#preview-window").contentWindow.document;
	previewWindow.open();
	if (firstTime==true){
		previewWindow.write(htmlCode+cssCode+jsCodeVar+jsCode);
		firstTime = false;
	}else{
		previewWindow.write(htmlCode+cssCode+jsCode);
	}
	// localStorage.varCode=jsEditorVar.getValue();
	// localStorage.jsCode=jsEditor.getValue();
	// localStorage.setItem("codeSave", jsCodeVar);
	// localStorage.setItem("codeSaveVar", jsCode);
	previewWindow.close();
	
});
// function delete_js()
// {
//   var parent= document.getElementsByTagName('code');
//   var head1= document.getElementsByTagName('js-code-var');
//   var head2= document.getElementsByTagName('js-code');
//   parent.removeChild(head1);
//   parent.removeChild(head2);
//   var script1= document.createElement('js-code-var');
//   var script2= document.createElement('js-code');
//   // script.src= head1;
//   // head.appendChild(script);
// }
document.querySelector("#clear-btn").addEventListener("click",function(){
	jsEditor.setValue("");
	jsEditor.clearHistory();
	jsEditorVar.setValue("");
	jsEditorVar.clearHistory();
	firstTime = true;
	jsEditorVar.refresh();
	jsEditor.refresh();
	// jsEditorVar.CodeMirror.refresh();
	// window.location.reload();
	// jsEditorVar.setValue=localStorage.jsCodeVar;
	// jsEditor.setValue=localStorage.jsCode;
	// document.getElementById("js-code-var").innerHTML = localStorage.jsCodeVar;
	// console.log(localStorage.jsCodeVar);
	// document.getElementById("js-code").innerHTML = localStorage.jsCode;
});
// window.onload=function(){
// 	document.getElementById("js-code-var").innerHTML = localStorage.varCode;
// 	console.log(localStorage.jsCodeVar);
// 	document.getElementById("js-code").innerHTML = localStorage.jsCode;	
// }

