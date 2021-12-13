const htmlEditor = CodeMirror(document.querySelector(".editor .code .html-code"),{
	lineNumbers:true,
	tabSize:4,
	mode:"xml"
});

const jsEditor = CodeMirror(document.querySelector(".editor .code .js-code"),{
	lineNumbers:true,
	tabSize:4,
	mode:"javascript"
});

let firstTime = true;
document.querySelector("#run-btn").addEventListener("click",function(){
	let htmlCode = "<body>" + htmlEditor.getValue() + "</body>";

	let threeJs = "<scri" + "pt src=" + "https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.min.js" + "></scr" + "ipt>";
	let model1 = "<scri" + "pt src=" + "model1.js" + "></scr" + "ipt>";
	let jsCode = "<scri" + "pt id="+"testCode"+">" + jsEditor.getValue() + "</scri" + "pt>";
	let model2 = "<scri" + "pt src=" + "model2.js" + "></scr" + "ipt>";
	let jsCodeFinal = threeJs + model1;
	let jsCodeFinalUser = jsCode + model2;

	let previewWindow = document.querySelector("#preview-window").contentWindow.document;
	previewWindow.open();
	if (firstTime==true){
		previewWindow.write(htmlCode+jsCodeFinal + jsCodeFinalUser);
		firstTime = false;
	}else{
		previewWindow.write(htmlCode+jsCodeFinalUser);
	}

	previewWindow.close();
	
});

document.querySelector("#clear-btn").addEventListener("click",function(){
	jsEditor.setValue("");
	jsEditor.clearHistory();

	firstTime = true;
	jsEditorVar.refresh();
	jsEditor.refresh();

});

function showSampleCode() {
  var pre = document.getElementById("preview-window-space");
  var y = document.getElementById("sample-code");

  if (pre.style.display === "block") {
    pre.style.display = "none";
    y.style.display = "block";
    
  } else {
    y.style.display = "none";
    pre.style.display = "block";
  }
}
function showSimulation() {
  var pre = document.getElementById("preview-window-space");
  var y = document.getElementById("sample-code");
  y.style.display = "none";
  pre.style.display = "block";

}
function btnText(){
	document.querySelector('#ShowButton').innerHTML = 'Hide';
}
function btnText(btn)  {
   var text = document.getElementById(btn).firstChild;
   text.data = text.data == "Hide Sample" ? "Show Sample" : "Hide Sample";
}