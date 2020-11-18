
var preincludes={};

function llexamples() {
    var p = document.getElementsByTagName("pre");
    for(var i=0;i<p.length;i++) {
	p[i].setAttribute("id","pre" + i);
	// edit
	var b = document.createElement("button");
	b.innerText="edit";
	b.setAttribute("onclick",'allowedit("pre' + i + '")');
	p[i].parentNode.insertBefore(b, p[i]);
	// copy
	var c = document.createElement("button");
	c.innerText="copy";
	c.setAttribute("onclick",'copytoclipboard("pre' + i + '")');
	p[i].parentNode.insertBefore(c, p[i]);
	if(p[i].textContent.indexOf("\\documentclass") !== -1) {
	    // latexonline
	    var r = document.createElement("button");
	    r.innerText="LaTeX online";
	    r.setAttribute("onclick",'latexonlinecc("pre' + i + '")');
	    r.setAttribute("id","lo-pre" + i);
	    p[i].parentNode.insertBefore(r, p[i].nextSibling);
	    // overleaf
	    var o = document.createElement("button");
	    o.innerText="Open in OverLeaf";
	    o.setAttribute("onclick",'openinoverleaf("pre' + i + '")');
	    p[i].parentNode.insertBefore(o, p[i].nextSibling);
	    var f=document.createElement("span");
	    // action=\"https://httpbin.org/post\"
	    // action=\"https://www.overleaf.com/docs\"
	    f.innerHTML="<form style=\"display:none\" id=\"form-pre" + i +"\"  action=\"https://www.overleaf.com/docs\" method=\"post\" target=\"_blank\"><input id=\"engine-pre" + i + "\" name=\"engine\" value=\"pdflatex\" /></form>";
	    p[i].parentNode.insertBefore(f, p[i].nextSibling);
	}
    }
}

const commentregex = / %.*/;
const engineregex = /% *!TEX.*((pdf|xe|lua)latex)/i;

function latexonlinecc(nd) {
    var fconts="";
    if(typeof(preincludes) == "object") {
	if(typeof(preincludes[nd]) == "object") {
	    fconts= "\n\\makeatletter\\def\\input@path{{latex.out/}}\\makeatother\n";
	    var incl=preincludes[nd];
	    for(prop in incl) {
		fconts=fconts+"\n\\begin{filecontents}{" +
		    incl[prop] +
		    "}\n" +
		    document.getElementById(prop).innerText +
		    "\n\\end{filecontents}\n";
	    }
	}
    }
    "\\makeatletter\\def\\input@path{{latex.out/}}\\makeatother\n"
    var p = document.getElementById(nd);
    if(p.innerText.indexOf("biblatex") !== -1) {
	fconts=fconts + "\n\\RequirePackage[backend=bibtex]{biblatex}\n";
    }
    var b = document.getElementById('lo-' + nd);
    var ifr= document.getElementById(nd + "ifr");
    if(ifr == null) {
	ifr=document.createElement("iframe");
	ifr.setAttribute("width","100%");
	ifr.setAttribute("height","500em");
	ifr.setAttribute("id",nd + "ifr");
	p.parentNode.insertBefore(ifr, b.nextSibling);
	d=document.createElement("button");
	d.innerText="Delete Output";
	d.setAttribute("id","del-" + nd);
	d.setAttribute("onclick",'deleteoutput("' + nd + '")');
	p.parentNode.insertBefore(d, b.nextSibling);
    }
    // that looks to have all lines but still need to zap comments for some reason..
    // alert(encodeURIComponent(fconts));
    var p = document.getElementById(nd);
    var t = p.innerText;
    var cmd="";
    var eng=t.match(engineregex);
    if(eng != null) {
	cmd="&command=" + eng[1].toLowerCase();
    } else if(t.indexOf("fontspec") !== -1) {
	cmd="&command=xelatex";
    }
    ifr.setAttribute("src","https://latexonline.cc/compile?text=" + encodeURIComponent(fconts.replace(commentregex,'') + t.replace(engineregex,'')) + cmd);
}



// https://www.overleaf.com/devs
function openinoverleaf(nd) {
    var fm = document.getElementById('form-' + nd);
    var p = document.getElementById(nd);
    var t = p.innerText;
    var inp=document.createElement("input");
    inp.setAttribute("type","text");
    inp.setAttribute("name","encoded_snip[]");
    inp.value =encodeURIComponent(t);
    fm.appendChild(inp);
    var inp2=document.createElement("input");
    inp2.setAttribute("type","text");
    inp2.setAttribute("name","snip_name[]");
    inp2.value ="document.tex";
    fm.appendChild(inp2);
    if(typeof(preincludes) == "object") {
      if(typeof(preincludes[nd]) == "object") {
	  var incl=preincludes[nd];
	  for(prop in incl) {
	      var inp=document.createElement("input");
	      inp.setAttribute("type","text");
	      inp.setAttribute("name","encoded_snip[]");
	      inp.value =encodeURIComponent(document.getElementById(prop).innerText);
	      fm.appendChild(inp);
	      var inp2=document.createElement("input");
	      inp2.setAttribute("type","text");
	      inp2.setAttribute("name","snip_name[]");
	      inp2.value =encodeURIComponent(incl[prop]);
	      fm.appendChild(inp2);
	      
	  }
      }
    }
    var eng=t.match(engineregex);
    if(eng != null) {
	document.getElementById('engine-' + nd ).value = eng[1].toLowerCase();
    } else if(t.indexOf("fontspec") !== -1) {
	document.getElementById('engine-' + nd ).value ="xelatex";
    }
     fm.submit();
}


function copytoclipboard(nd){
    var p = document.getElementById(nd);
    var nn=document.createElement("textarea");
    nn.value=p.innerText;
    document.body.appendChild(nn);
    nn.select();
    document.execCommand("copy");
    document.body.removeChild(nn);
}


function allowedit(nd){
    var p = document.getElementById(nd);
    p.contentEditable="true";
    p.setAttribute("spellcheck","false");
    p.innerHTML=p.innerText;
    p.style.border="solid thin green";
}

function deleteoutput(nd){
    var b = document.getElementById('del-' + nd);
    var ifr = document.getElementById(nd + 'ifr');
    b.parentNode.removeChild(b);
    ifr.parentNode.removeChild(ifr);
}


window.addEventListener('load', llexamples, false);
