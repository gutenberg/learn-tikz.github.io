
var preincludes={};

var buttons ={
    "edit":             "edit",
    "copy":             "copy",
    "Open in Overleaf": "Open in Overleaf",
    "Latex.Online":     "Latex.Online",
    "Delete Output":    "Delete Output"
}



function llexamples() {
    var p = document.getElementsByTagName("pre");
    for(var i=0;i<p.length;i++) {
	p[i].setAttribute("id","pre" + i);
	// edit
	var b = document.createElement("button");
	b.innerText=buttons["edit"];
	b.setAttribute("onclick",'allowedit("pre' + i + '")');
	p[i].parentNode.insertBefore(b, p[i]);
	// copy
	var c = document.createElement("button");
	c.innerText=buttons["copy"];
	c.setAttribute("onclick",'copytoclipboard("pre' + i + '")');
	p[i].parentNode.insertBefore(c, p[i]);
	if(p[i].textContent.indexOf("\\documentclass") !== -1) {
	    // latexonline
	    var r = document.createElement("button");
	    r.innerText=buttons["LaTeX.Online"];
	    r.setAttribute("onclick",'latexonlinecc("pre' + i + '")');
	    r.setAttribute("id","lo-pre" + i);
	    p[i].parentNode.insertBefore(r, p[i].nextSibling);
	    // overleaf
	    var o = document.createElement("button");
	    o.innerText=buttons["Open in Overleaf"];
	    o.setAttribute("onclick",'openinoverleaf("pre' + i + '")');
	    p[i].parentNode.insertBefore(o, p[i].nextSibling);
	    var f=document.createElement("span");
	    // action=\"https://httpbin.org/post\"
	    // action=\"https://www.overleaf.com/docs\"
	    f.innerHTML="<form style=\"display:none\" id=\"form-pre" + i +"\" action=\"https://www.overleaf.com/docs\" method=\"post\" target=\"_blank\"></form>";
	    p[i].parentNode.insertBefore(f, p[i].nextSibling);
	    var f2=document.createElement("span");
	    // action=\"https://httpbin.org/post\"
	    // action=\"https://latex.ytotech.com/builds/sync\"
	    f2.innerHTML="<form style=\"display:none\" id=\"form2-pre" + i + "\" name=\"form2-pre" + i +"\" enctype=\"multipart/form-data\" action=\"https://latex.ytotech.com/builds/sync\" method=\"post\" target=\"pre" + i + "ifr\"></form>";
	    p[i].parentNode.insertBefore(f2, p[i].nextSibling);
	}
    }
}

const commentregex = / %.*/;
const engineregex = /% *!TEX.*[^a-zA-Z]((pdf|xe|lua|u?p)latex)/i;

function latexonlinecc(nd) {
<<<<<<< HEAD
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
	d.innerText=buttons["Delete Output"];
	d.setAttribute("id","del-" + nd);
	d.setAttribute("onclick",'deleteoutput("' + nd + '")');
	p.parentNode.insertBefore(d, b.nextSibling);
    }
    // that looks to have all lines but still need to zap comments for some reason..
    // alert(encodeURIComponent(fconts));
    var p = document.getElementById(nd);
=======
    var p = document.getElementById(nd);
>>>>>>> eb851494... conditional use of latex-on-http
    var t = p.innerText;
    var cmd="";
    var eng=t.match(engineregex);
    if(eng != null) {
	cmd="&command=" + eng[1].toLowerCase();
    } else if(t.indexOf("fontspec") !== -1) {
	cmd="&command=xelatex";
    }
<<<<<<< HEAD
    ifr.setAttribute("src","https://texlive2020.latexonline.cc/compile?text=" + encodeURIComponent(fconts.replace(commentregex,'') + t.replace(engineregex,'')) + cmd);
=======
    // no platex on latexonlinecc
    // checking User Agent isn't great but better than looping
    if(window.navigator.userAgent.match(/Android.*Firefox/) ||
       cmd == "&command=platex" ||
       cmd == "&command=uplatex" ){ 
	latexonhttp(nd);
    } else {
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
	// no biber support currently
	if(t.indexOf("biblatex") !== -1) {
	    t=t.replace(/usepackage\{biblatex/,'usepackage[]\{biblatex');
	    t=t.replace(/\]\{biblatex/,',backend=bibtex]\{biblatex');
	}
	var b = document.getElementById('lo-' + nd);
	var ifr= document.getElementById(nd + "ifr");
	if(ifr == null) {
	    ifr=document.createElement("iframe");
	    ifr.setAttribute("width","100%");
	    ifr.setAttribute("height","500em");
	    ifr.setAttribute("id",nd + "ifr");
	    ifr.setAttribute("name",nd + "ifr");
	    p.parentNode.insertBefore(ifr, b.nextSibling);
	    d=document.createElement("button");
	    d.innerText=buttons["Delete Output"];
	    d.setAttribute("id","del-" + nd);
	    d.setAttribute("onclick",'deleteoutput("' + nd + '")');
	    p.parentNode.insertBefore(d, b.nextSibling);
	}
	// that looks to have all lines but still need to zap comments for some reason..
	ifr.setAttribute("src","https://texlive2020.latexonline.cc/compile?text=" + encodeURIComponent(fconts.replace(commentregex,'') + t.replace(engineregex,'')) + cmd);
    }
>>>>>>> eb851494... conditional use of latex-on-http
}



// https://www.overleaf.com/devs
function addinput(f,n,v) {
    var inp=document.createElement("input");
    inp.setAttribute("type","text");
    inp.setAttribute("name",n);
    inp.value =encodeURIComponent(v);
    f.appendChild(inp);
}

function addinputnoenc(f,n,v) {
    var inp=document.createElement("input");
    inp.setAttribute("type","text");
    inp.setAttribute("name",n);
    inp.value =v;
    f.appendChild(inp);
}

function openinoverleaf(nd) {
    var fm = document.getElementById('form-' + nd);
    fm.innerHTML="";
    var p = document.getElementById(nd);
    var t = p.innerText;
    // the lax engine comment syntax confuses overleaf
    addinput(fm,"encoded_snip[]",t.replace(engineregex,''));
    addinput(fm,"snip_name[]","document.tex");
    if(typeof(preincludes) == "object") {
	if(typeof(preincludes[nd]) == "object") {
	    var incl=preincludes[nd];
	    for(prop in incl) {
		addinput(fm,"encoded_snip[]",document.getElementById(prop).innerText);
		addinput(fm,"snip_name[]",incl[prop]);
	    }
	}
    }
    var engv="pdflatex";
    var eng=t.match(engineregex);
    if(eng != null) {
	engv=eng[1].toLowerCase();
	if(engv == "platex" || engv == "uplatex") {
	    addinput(fm,"encoded_snip[]","$latex = '" + engv + "';\n$bibtex = 'pbibtex';\n$dvipdf = 'dvipdfmx %O -o %D %S';");
	    addinput(fm,"snip_name[]","latexmkrc");
	    engv="latex_dvipdf";
	}
    } else if(t.indexOf("fontspec") !== -1) {
	engv="xelatex";
    }
    addinput(fm,"engine",engv);
    fm.submit();
}

// https://github.com/YtoTech/latex-on-http

// This could share more code with latexonline version
function latexonhttp(nd) {
    var jsn=[];
    if(typeof(preincludes) == "object") {
	if(typeof(preincludes[nd]) == "object") {
	    var incl=preincludes[nd];
	    for(prop in incl) {
		jsn.push({path: incl[prop],
			  content: document.getElementById(prop).innerText
			 })
	    }
	}
    }
    var p = document.getElementById(nd);
    var t = p.innerText;
    // no biber support currently
    if(t.indexOf("biblatex") !== -1) {
	t=t.replace(/usepackage\{biblatex/,'usepackage[]\{biblatex');
	t=t.replace(/\]\{biblatex/,',backend=bibtex]\{biblatex');
    }
    jsn.push({main: true, content: t});
    var b = document.getElementById('lo-' + nd);
    var ifr= document.getElementById(nd + "ifr");
    if(ifr == null) {
	ifr=document.createElement("iframe");
	ifr.setAttribute("width","100%");
	ifr.setAttribute("height","500em");
	ifr.setAttribute("id",nd + "ifr");
	ifr.setAttribute("name",nd + "ifr");
	p.parentNode.insertBefore(ifr, b.nextSibling);
	d=document.createElement("button");
	d.innerText=buttons["Delete Output"];
	d.setAttribute("id","del-" + nd);
	d.setAttribute("onclick",'deleteoutput("' + nd + '")');
	p.parentNode.insertBefore(d, b.nextSibling);
    }
    var cmd="pdflatex";
    var eng=t.match(engineregex);
    if(eng != null) {
	cmd=eng[1].toLowerCase();
    } else if(t.indexOf("fontspec") !== -1) {
	cmd="xelatex";
    }
    var fm = document.getElementById('form2-' + nd);
    fm.innerHTML="";
    addinputnoenc(fm,"compiler",cmd);
    addinputnoenc(fm,"resources",JSON.stringify(jsn));
    fm.submit();
}



//


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
