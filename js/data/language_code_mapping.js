const languageMap = {
  'en': "<p class='about-en'>Hi, I'm Quan.</p>\
  <p class='about-en'>I'm a software engineer.</p>\
  <p class='about-en'>I have interests and stuff.</p>\
  <p class='about-en'>Check out some of my <a class='code-link' data-target='projects'>projects</a>, my <a class='code-link' data-target='resume'>resume</a>, or <a class='code-link' data-target='contact'>contact</a> me.</p>\
  <p class='about-en'>Bruh.</p>",
  //
  // Python
  //
  'py': "quan <span class='c-punc'>=</span> <span class='c-func'>SoftwareEngineer</span>()<br />\
<br />\
quan<span class='c-punc'>.</span>interests <span class='c-punc'>=</span> [<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'programming languages'</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'web development'</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'building APIs'</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'functional programming'</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'natural language processing'</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'avoiding Java'</span><br />\
]<br />\
<br />\
quan<span class='c-punc'>.</span>education <span class='c-punc'>=</span> {<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'degree'</span><span class='c-punc'>:</span> <span class='c-str'>'B.S.'</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'major'</span><span class='c-punc'>:</span> <span class='c-str'>'Software Engineering'</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'alma_mater'</span><span class='c-punc'>:</span> <span class='c-str'>'Cal Poly'</span><br />\
}<br />\
<br />\
quan<span class='c-punc'>.</span><span class='c-link'><a class='code-link' data-target='projects'>list_projects</a></span>()<br />\
quan<span class='c-punc'>.</span><span class='c-link'><a class='code-link' data-target='resume'>show_resume</a></span>()<br />\
quan<span class='c-punc'>.</span><span class='c-link'><a class='code-link' data-target='contact'>contact</a></span>()",
  //
  // Javascript
  //
  'js': "<span class='c-kw'>const</span> quan <span class='c-punc'>=</span> <span class='c-kw'>new</span> <span class='c-func'>SoftwareEngineer</span>()<br />\
<br />\
quan<span class='c-punc'>.</span>interests <span class='c-punc'>=</span> [<br />\
&nbsp;&nbsp;<span class='c-str'>'programming languages'</span>,<br />\
&nbsp;&nbsp;<span class='c-str'>'web development'</span>,<br />\
&nbsp;&nbsp;<span class='c-str'>'building APIs'</span>,<br />\
&nbsp;&nbsp;<span class='c-str'>'functional programming'</span>,<br />\
&nbsp;&nbsp;<span class='c-str'>'natural language processing'</span>,<br />\
&nbsp;&nbsp;<span class='c-str'>'avoiding Java'</span><br />\
]<br />\
<br />\
quan<span class='c-punc'>.</span>education <span class='c-punc'>=</span> {<br />\
&nbsp;&nbsp;degree<span class='c-punc'>:</span> <span class='c-str'>'B.S.'</span>,<br />\
&nbsp;&nbsp;major<span class='c-punc'>:</span> <span class='c-str'>'Software Engineering'</span>,<br />\
&nbsp;&nbsp;almaMater<span class='c-punc'>:</span> <span class='c-str'>'Cal Poly'</span><br />\
}<br />\
<br />\
quan<span class='c-punc'>.</span><span class='c-link'><a class='code-link' data-target='projects'>listProjects</a></span>()<br />\
quan<span class='c-punc'>.</span><span class='c-link'><a class='code-link' data-target='resume'>showResume</a></span>()<br />\
quan<span class='c-punc'>.</span><span class='c-link'><a class='code-link' data-target='contact'>contact</a></span>()",
  //
  // Swift
  //
  'swift': '<span class="c-punc">@UIApplicationMain</span><br />\
<span class="c-kw">func</span> <span class="c-func">main</span>() {<br />\
    <span class="c-kw">let</span> quan <span class="c-punc">=</span> <span class="c-func">SoftwareEngineer</span>()<br />\
    <br />\
    quan<span class="c-punc">.</span>interests <span class="c-punc">=</span> [<br />\
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"programming languages"</span>,<br />\
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"web development"</span>,<br />\
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"building APIs"</span>,<br />\
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"functional programming"</span>,<br />\
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"natural language processing"</span>,<br />\
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"avoiding Java"</span><br />\
    ]<br />\
    <br />\
    quan<span class="c-punc">.</span>education <span class="c-punc">=</span> [<br />\
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"degree"</span><span class="c-punc">:</span> <span class="c-str">"B.S."</span>,<br />\
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"major"</span><span class="c-punc">:</span> <span class="c-str">"Software Engineering"</span>,<br />\
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"almaMater"</span><span class="c-punc">:</span> <span class="c-str">"Cal Poly"</span><br />\
    ]<br />\
    <br />\
    quan<span class="c-punc">.</span><span class="c-link"><a class="code-link" data-target="projects">listProjects</a></span>()<br />\
    quan<span class="c-punc">.</span><span class="c-link"><a class="code-link" data-target="resume">showResume</a></span>()<br />\
    quan<span class="c-punc">.</span><span class="c-link"><a class="code-link" data-target="contact">contact</a></span>()<br />\
}',
  //
  // Java
  //
  'java': '<span class="c-kw">public class</span> <span class="c-func">SoftwareEngineer</span> <span class="c-kw">extends</span> <span class="c-func">Person</span> {<br />\
&nbsp;&nbsp;&nbsp;<span class="c-kw">public static void</span> <span class="c-func">main</span>(<span class="c-func">String</span>[] args) {<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-func">SoftwareEngineer</span> quan <span class="c-punc">=</span> new <span class="c-func">SoftwareEngineer</span>();<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-func">Map</span><<span class="c-func">String</span>, <span class="c-func">String</span>> ed <span class="c-punc">=</span> quan.<span class="c-func">getEd</span>();<br />\
<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quan.<span class="c-func">setInterests</span>(Arrays.<span class="c-func">asList</span>(<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"programming languages"</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"web development"</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"building APIs"</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"functional programming"</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"natural language processing"</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"avoiding this"</span><br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;));<br />\
<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ed.<span class="c-func">put</span>(<span class="c-str">"degree"</span class="c-str">, <span class="c-str">"B.S."</span>);<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ed.<span class="c-func">put</span>(<span class="c-str">"major"</span class="c-str">, <span class="c-str">"Software Engineering"</span>);<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ed.<span class="c-func">put</span>(<span class="c-str">"almaMater"</span>, <span class="c-str">"Cal Poly"</span>);<br />\
<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quan.<span class="c-link"><a class="code-link" data-target="projects">listProjects</a></span>();<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quan.<span class="c-link"><a class="code-link" data-target="resume">showResume</a></span>();<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quan.<span class="c-link"><a class="code-link" data-target="contact">contact</a></span>();<br />\
&nbsp;&nbsp;&nbsp;}<br />\
}',
  //
  // C
  //
  'c': '<span class="c-kw">int</span> <span class="c-func">main</span>(<span class="c-kw">int</span> argc, <span class="c-kw">char</span> *argv[]) {<br />\
&nbsp;&nbsp;&nbsp;<span class="c-kw">int</span> i;<br />\
&nbsp;&nbsp;&nbsp;<span class="c-func">SoftwareEngineer</span> *quan <span class="c-punc">=</span> <span class="c-func">malloc_se</span>();<br />\
<br />\
&nbsp;&nbsp;&nbsp;<span class="c-kw">char</span> *interests[] <span class="c-punc">=</span> {<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"programming languages"</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"web dev"</span>, <span class="c-str">"building APIs"</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"functional programming"</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"NLP"</span>, <span class="c-str">"avoiding Java"</span><br />\
&nbsp;&nbsp;&nbsp;};<br />\
<br />\
&nbsp;&nbsp;&nbsp;<span class="c-kw">for</span> (i <span class="c-punc">=</span> <span class="c-val">0</span>; i <span class="c-punc"><</span> <span class="c-val">6</span>; i++)<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-func">sprintf</span>(quan<span class="c-punc">-></span>interests[i],<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">%s"</span>, interests[i]);<br />\
&nbsp;&nbsp;&nbsp;<span class="c-func">sprintf</span>(quan<span class="c-punc">-></span>education<span class="c-punc">-></span>degree, <span class="c-str">"B.S."</span>);<br />\
&nbsp;&nbsp;&nbsp;<span class="c-func">sprintf</span>(quan<span class="c-punc">-></span>education<span class="c-punc">-></span>major, <span class="c-str">"S.E."</span>);<br />\
&nbsp;&nbsp;&nbsp;<span class="c-func">sprintf</span>(quan<span class="c-punc">-></span>education<span class="c-punc">-></span>school, <span class="c-str">"CPSLO"</span>);<br />\
<br />\
&nbsp;&nbsp;&nbsp;quan<span class="c-punc">-></span><span class="c-link"><a class="code-link" data-target="projects">list_projects</a>/span>();<br />\
&nbsp;&nbsp;&nbsp;quan<span class="c-punc">-></span><span class="c-link"><a class="code-link" data-target="resume">show_resume</a></span>();<br />\
&nbsp;&nbsp;&nbsp;quan<span class="c-punc">-></span><span class="c-link"><a class="code-link" data-target="contact">contact</a></span>();<br />\
<br />\
&nbsp;&nbsp;&nbsp;<span class="c-kw">return</span> <span class="c-val">0</span>;<br />\
}',
  //
  // PHP
  //
  'php': "&lt;?<br />\
$quan <span class='c-punc'>=</span> <span class='c-kw'>new</span> <span class='c-func'>SoftwareEngineer</span>;<br />\
<br />\
$quan<span class='c-punc'>-></span>interests <span class='c-punc'>=</span> <span class='c-func'>array</span>(<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'programming languages'</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'web development'</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'building APIs'</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'functional programming'</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'natural language processing'</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class='c-str'>'avoiding Java'</span><br />\
);<br />\
<br />\
$quan<span class='c-punc'>-></span>education <span class='c-punc'>=</span> <span class='c-func'>array</span>(<br />\
&nbsp;&nbsp;&nbsp;&nbsp;'degree' <span class='c-punc'>=></span> <span class='c-str'>'B.S.'</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;'major' <span class='c-punc'>=></span> <span class='c-str'>'Software Engineering'</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;'alma_mater' <span class='c-punc'>=></span> <span class='c-str'>'Cal Poly'</span><br />\
);<br />\
<br />\
$quan<span class='c-punc'>-></span><span class='c-link'><a class='code-link' data-target='projects'>list_projects</a></span>();<br />\
$quan<span class='c-punc'>-></span><span class='c-link'><a class='code-link' data-target='resume'>show_resume</a></span>();<br />\
$quan<span class='c-punc'>-></span><span class='c-link'><a class='code-link' data-target='contact'>contact</a></span>();",
  //
  // ML
  //
  'ml': '<span class="c-kw">val</span> quan <span class="c-punc">=</span> <span class="c-func">SoftwareEngineer</span> {<br />\
&nbsp;&nbsp;&nbsp;&nbsp;interests<span class="c-punc">=</span>[<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"programming languages"</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"web development"</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"building APIs"</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"functional programming"</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"natural language processing"</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"avoiding Java"</span><br />\
&nbsp;&nbsp;&nbsp;&nbsp;],<br />\
&nbsp;&nbsp;&nbsp;&nbsp;education<span class="c-punc">=</span>{<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;degree<span class="c-punc">=</span><span class="c-str">"B.S."</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;major<span class="c-punc">=</span><span class="c-str">"Software Engineering"</span>,<br />\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alma_mater<span class="c-punc">=</span><span class="c-str">"Cal Poly"</span><br />\
&nbsp;&nbsp;&nbsp;&nbsp;}<br />\
};<br />\
<br />\
<span class="c-func">app</span> (<span class="c-kw">fn</span> f <span class="c-punc">=></span> f quan) [<br />\
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-link"><a class="code-link" data-target="projects">list_projects</a></span>, <span class="c-link"><a class="code-link" data-target="resume">show_resume</a></span>, <span class="c-link"><a class="code-link" data-target="contact">contact</a></span><br />\
];'
}
