(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{117:function(e,t,n){},228:function(e,t,n){},229:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),s=(n(95),n(96),n(6)),c=(n(97),n(86)),h=n.n(c),d=n(1),l=Object(a.createContext)(),m={about:{open:!0,title:"about.md",z:0},experience:{open:!0,title:"experience.md",z:1},skills:{open:!0,title:"skills.md",z:2}};function w(e){var t=e.reducer,n=e.children,r=Object(a.useReducer)(t,m);return Object(d.jsx)(l.Provider,{value:r,children:n})}var u=n(3),g=n(2),y="UPDATE_ONE_VAL",p="UPDATE_ALL",b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object(g.a)(Object(g.a)({},e),{},Object(u.a)({},t.id,Object(g.a)(Object(g.a)({},e[t.id]),{},Object(u.a)({},t.valToBeUpdated,t.newValue))));case p:return t.newValue;default:return e}};var v=function(e){var t=e.id,n=e.children,r=Object(a.useContext)(l),o=Object(s.a)(r,2),i=o[0],c=o[1],m=i[t];return m.open?Object(d.jsx)(h.a,{handle:".title-bar",onStart:function(){var e=0;for(var n in i)i[n].z>e&&(e=i[n].z);c({type:y,valToBeUpdated:"z",id:t,newValue:e+1})},children:Object(d.jsxs)("div",{className:"panel-container",id:"panel_"+t,style:{zIndex:m.z},children:[Object(d.jsxs)("div",{className:"title-bar",children:[Object(d.jsx)("div",{className:"title",children:m.title}),Object(d.jsx)("div",{className:"title-bar-icons",children:Object(d.jsx)("div",{className:"title-bar-button",onClick:function(){c({type:y,valToBeUpdated:"open",id:t,newValue:!1})},children:"x"})})]}),Object(d.jsx)("div",{className:"content-container",children:n})]})}):Object(d.jsx)("div",{})};n(36);var _=function(){return Object(d.jsxs)("div",{className:"textfile-container",children:[Object(d.jsx)("h1",{children:"hellooo! i'm mena"}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Software Engineer"})," @ JPMorgan Chase & Co."]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"CS '20"})," @ at Cornell University"]})]})};var f=function(){return Object(d.jsxs)("div",{className:"textfile-container",children:[Object(d.jsx)("h4",{children:"Software Engineer"}),Object(d.jsx)("p",{children:"JPMorgan Chase & Co."}),Object(d.jsx)("p",{children:"June 2020 - present"}),Object(d.jsx)("br",{}),Object(d.jsx)("h4",{children:"Frontend Engineer Intern"}),Object(d.jsx)("p",{children:"Sumo Logic Inc."}),Object(d.jsx)("p",{children:"June 2019 - August 2019"}),Object(d.jsx)("br",{}),Object(d.jsx)("h4",{children:"Software Engineer Intern"}),Object(d.jsx)("p",{children:"SAP"}),Object(d.jsx)("p",{children:"June 2018 - August 2018"})]})};var j=function(){return Object(d.jsxs)("div",{className:"textfile-container",children:[Object(d.jsx)("h4",{children:"Programming Languages"}),Object(d.jsx)("p",{children:"Python, Java"}),Object(d.jsx)("p",{children:"HTML, CSS, JavaScript (React)"}),Object(d.jsx)("br",{}),Object(d.jsx)("h4",{children:"Other Skills"}),Object(d.jsx)("p",{children:"Prometheus (and PromQL), Grafana, Splunk"}),Object(d.jsx)("p",{children:"ElasticSearch, MongoDB"}),Object(d.jsx)("p",{children:"Kubernetes, AWS (Cloud Practitioner)"}),Object(d.jsx)("p",{children:"Bitbucket, Confluence, Jira"}),Object(d.jsx)("p",{children:"Figma"})]})};n(117);n(17);var k=n(7);n(81);!function(){for(var e=[],t=0,n=Object.entries(k);t<n.length;t++){for(var a=Object(s.a)(n[t],2),r=a[0],o=a[1],i=0,c=0;c<o.length;c++)i+=k[r][c].earnings-k[r][c].wager;e.push(i)}for(var h=[],d=1e3,l=0;l<e.length;l++)h.push(d+e[l]),d+=e[l];Object.keys(k)}();n.p,n(89),n.p;var T=function(){return Object(d.jsx)(w,{reducer:b,children:Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(v,{id:"about",children:Object(d.jsx)(_,{})}),Object(d.jsx)(v,{id:"experience",children:Object(d.jsx)(f,{})}),Object(d.jsx)(v,{id:"skills",children:Object(d.jsx)(j,{})})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,257)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))};n(31);n(90),n(228);n(229);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),I()},36:function(e,t,n){},7:function(e){e.exports=JSON.parse('{"Matchday 1":[{"match":"Turkey vs Italy","winner":"Italy","bet":"Italy","wager":10,"earnings":12,"matchThread":"https://www.reddit.com/r/soccer/comments/nrpo8l/prediction_turkey_v_italy/"}],"Matchday 2":[{"match":"Wales vs Switzerland","winner":"Draw","bet":"Draw","wager":10,"earnings":45,"matchThread":"https://www.reddit.com/r/soccer/comments/nxfpud/prediction_wales_vs_switzerland/"},{"match":"Denmark vs Finland","winner":"Finland","bet":"Denmark","wager":10,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/nxjouy/prediction_denmark_vs_finland/"},{"match":"Belgium vs Russia","winner":"Belgium","bet":"Belgium","wager":30,"earnings":31,"matchThread":"https://www.reddit.com/r/soccer/comments/nxoxiw/prediction_belgium_vs_russia/"}],"Matchday 3":[{"match":"England vs Croatia","winner":"England","bet":"Croatia","wager":30,"earnings":30,"matchThread":"https://www.reddit.com/r/soccer/comments/ny63kj/prediction_england_vs_croatia/"},{"match":"Austria vs North Macedonia","winner":"Austria","bet":"Austria","wager":30,"earnings":34,"matchThread":"https://www.reddit.com/r/soccer/comments/nya690/prediction_austria_v_north_macedonia/"},{"match":"Netherlands vs Ukraine","winner":"Netherlands","bet":"Netherlands","wager":30,"earnings":33,"matchThread":"https://www.reddit.com/r/soccer/comments/nyf6sh/prediction_netherlands_v_ukraine/"}],"Matchday 4":[{"match":"Scotland vs Czech Republic","winner":"Draw","bet":"Czech Republic","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/nyw6hd/prediction_scotland_vs_czech_republic/"},{"match":"Poland vs Slovakia","winner":"Slovakia","bet":"Poland","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/nz0f36/prediction_poland_vs_slovakia/"},{"match":"Spain vs Sweden","winner":"Draw","bet":"Spain","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/nz3s96/prediction_spain_vs_sweden/"}],"Matchday 5":[{"match":"Hungary vs Portugal","winner":"Portugal","bet":"Portugal","wager":30,"earnings":31,"matchThread":"https://www.reddit.com/r/soccer/comments/nzpgwb/prediction_hungary_vs_portugal/"},{"match":"France vs Germany","winner":"France","bet":"Germany","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/nzu3d6/prediction_france_vs_germany/"}],"Matchday 6":[{"match":"Finland vs Russia","winner":"Russia","bet":"Russia","wager":30,"earnings":62,"matchThread":"https://www.reddit.com/r/soccer/comments/o0e1xi/prediction_finland_vs_russia/"},{"match":"Turkey vs Wales","winner":"Wales","bet":"Wales","wager":30,"earnings":75,"matchThread":"https://www.reddit.com/r/soccer/comments/o0hopg/prediction_turkey_vs_wales/"},{"match":"Italy vs Switzerland","winner":"Italy","bet":"Italy","wager":30,"earnings":32,"matchThread":"https://www.reddit.com/r/soccer/comments/o0lpkd/prediction_italy_vs_switzerland/"}],"Matchday 7":[{"match":"Ukraine vs North Macedonia","winner":"Ukraine","bet":"Ukraine","wager":30,"earnings":34,"matchThread":"https://www.reddit.com/r/soccer/comments/o15gaw/prediction_ukraine_v_north_macedonia/"},{"match":"Denmark vs Belgium","winner":"Belgium","bet":"Belgium","wager":30,"earnings":34,"matchThread":"https://www.reddit.com/r/soccer/comments/o1oy3t/prediction_denmark_vs_belgium/"},{"match":"Netherlands vs Austria","winner":"Netherlands","bet":"Netherlands","wager":30,"earnings":34,"matchThread":"https://www.reddit.com/r/soccer/comments/o1p0ez/prediction_netherlands_vs_austria/"}],"Matchday 8":[{"match":"Sweden vs Slovakia","winner":"Sweden","bet":"Sweden","wager":30,"earnings":44,"matchThread":"https://www.reddit.com/r/soccer/comments/o2a45f/prediction_sweden_vs_slovakia/"},{"match":"Croatia vs Czech Republic","winner":"Draw","bet":"Croatia","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o2a7ui/prediction_croatia_vs_czech_republic/"},{"match":"England vs Scotland","winner":"Draw","bet":"England","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o2a8s6/prediction_england_vs_scotland/"}],"Matchday 9":[{"match":"Hungary vs France","winner":"Draw","bet":"France","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o2oi1n/prediction_hungary_vs_france/"},{"match":"Portugal vs Germany","winner":"Germany","bet":"Germany","wager":30,"earnings":85,"matchThread":"https://www.reddit.com/r/soccer/comments/o2sd4s/prediction_portugal_vs_germany/"},{"match":"Spain vs Poland","winner":"Draw","bet":"Spain","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o2xog5/prediction_spain_vs_poland/"}],"Matchday 10":[{"match":"Italy vs Wales","winner":"Italy","bet":"Italy","wager":30,"earnings":35,"matchThread":"https://www.reddit.com/r/soccer/comments/o3pvtw/prediction_italy_vs_wales/"},{"match":"Switzerland vs Turkey","winner":"Switzerland","bet":"Switzerland","wager":30,"earnings":51,"matchThread":"https://www.reddit.com/r/soccer/comments/o3pwqa/prediction_switzerland_vs_turkey/"}],"Matchday 11":[{"match":"Ukraine vs Austria","winner":"Austria","bet":"Ukraine","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o4ds7u/prediction_ukraine_vs_austria/"},{"match":"North Macedonia vs Netherland","winner":"Netherlands","bet":"Netherlands","wager":30,"earnings":32,"matchThread":"https://www.reddit.com/r/soccer/comments/o4dszg/prediction_north_macedonia_vs_netherlands/"},{"match":"Russia vs Denmark","winner":"Denmark","bet":"Russia","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o4kc4f/prediction_russia_v_denmark/"},{"match":"Finland vs Belgium","winner":"Belgium","bet":"Belgium","wager":30,"earnings":33,"matchThread":"https://www.reddit.com/r/soccer/comments/o4kdh9/prediction_finland_v_belgium/"}],"Matchday 12":[{"match":"Czech Republic vs England","winner":"England","bet":"Czech Republic","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o530vm/prediction_czech_republic_vs_england/"},{"match":"Croatia vs Scotland","winner":"Croatia","bet":"Croatia","wager":30,"earnings":47,"matchThread":"https://www.reddit.com/r/soccer/comments/o530we/prediction_croatia_vs_scotland/"}],"Matchday 13":[{"match":"Sweden vs Poland","winner":"Sweden","bet":"Sweden","wager":30,"earnings":74,"matchThread":"https://www.reddit.com/r/soccer/comments/o659l3/prediction_sweden_vs_poland/"},{"match":"Slovakia vs Spain","winner":"Spain","bet":"Slovakia","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o65aiv/prediction_slovakia_vs_spain/"},{"match":"Portugal vs France","winner":"Draw","bet":"France","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o65cnq/prediction_portugal_vs_france/"},{"match":"Germany vs Hungary","winner":"Draw","bet":"Germany","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o65dx5/prediction_germany_vs_hungary/"}],"Matchday 14":[{"match":"Wales vs Denmark","winner":"Denmark","bet":"Denmark","wager":30,"earnings":45,"matchThread":"https://www.reddit.com/r/soccer/comments/o7y6m0/prediction_wales_v_denmark/"},{"match":"Italy vs Austria","winner":"Italy","bet":"Italy","wager":30,"earnings":31,"matchThread":"https://www.reddit.com/r/soccer/comments/o7y79b/prediction_italy_v_austria/"}],"Matchday 15":[{"match":"Netherlands vs Czech Republic","winner":"Netherlands","bet":"Czech Republic","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o8dn80/prediction_netherlands_vs_czech_republic/"},{"match":"Belgium vs Portugal","winner":"Belgium","bet":"Belgium","wager":30,"earnings":48,"matchThread":"https://www.reddit.com/r/soccer/comments/o8gsry/prediction_belgium_vs_portugal/"}],"Matchday 16":[{"match":"Croatia vs Spain","winner":"Spain","bet":"Croatia","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o9en0l/prediction_croatia_vs_spain/"},{"match":"France vs Switzerland","winner":"Switzerland","bet":"France","wager":30,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o9enu5/prediction_france_vs_switzerland/"}],"Matchday 17":[{"match":"England vs Germany","winner":"England","bet":"Germany","wager":100,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o9n7rf/prediction_england_vs_germany/"},{"match":"Sweden vs Ukraine","winner":"Ukraine","bet":"Sweden","wager":100,"earnings":0,"matchThread":"https://www.reddit.com/r/soccer/comments/o9qwzn/prediction_sweden_vs_ukraine/"}],"Matchday 18":[{"match":"Switzerland vs Spain","winner":"Spain","bet":"Switzerland","wager":100,"earnings":0,"matchThread":""},{"match":"Belgium vs Italy","winner":"Italy","bet":"Belgium","wager":100,"earnings":0,"matchThread":""}],"Matchday 19":[{"match":"Czech Republic vs Denmark","winner":"Denmark","bet":"Denmark","wager":100,"earnings":139,"matchThread":"https://www.reddit.com/r/soccer/comments/ocmdb2/prediction_czech_republic_v_denmark/"},{"match":"Ukraine vs England","winner":"England","bet":"England","wager":100,"earnings":130,"matchThread":"https://www.reddit.com/r/soccer/comments/ocme3y/prediction_ukraine_v_england/"}],"Matchday 20":[{"match":"Italy vs Spain","winner":"Italy","bet":"Italy","wager":100,"earnings":126,"matchThread":"https://www.reddit.com/r/soccer/comments/oeoib6/prediction_italy_vs_spain/"}],"Matchday 21":[{"match":"England vs Denmark","winner":"England","bet":"England","wager":100,"earnings":164,"matchThread":"https://www.reddit.com/r/soccer/comments/ofe6u6/prediction_england_vs_denmark/"}],"Matchday 22":[{"match":"Italy vs England","winner":"Italy","bet":"Italy","wager":100,"earnings":171,"matchThread":"https://www.reddit.com/r/soccer/comments/ohl1jg/prediction_england_vs_italy_euro_2020_final/"}]}')},81:function(e,t,n){},90:function(e){e.exports=JSON.parse('[{"month":3,"year":2020,"content":"Late at night I like to think about \\\\ the things that I want \\\\ and what is life \\\\ and who is real?","author":"MISSIO","source":"Losing My Mind","tag":"lyrics"},{"month":9,"year":2017,"content":"I wonder if your therapist knows \\\\ everything about me","author":"Fall Out Boy","source":"The Last of the Real Ones","tag":"lyrics"},{"month":1,"year":2023,"content":"\\"Yes,\\" Ms. Bubblegum said sympathetically. \\"Sounds like quite the existential crisis. Perhaps consider having it somewhere else.\\"","author":"TJ Kline","source":"The House in the Cerulean Sea","tag":"book quotes"},{"month":10,"year":2022,"content":"We are stories, contained within the twenty complicated centimeters behind our eyes, lines drawn by traces left by the remingling together of things in the world, and oriented toward predicting events in the future, toward the direction of increasing entropy, in a rather particular corner of this immense, chaotic universe.","source":"The Order of Time","author":"Carlo Rovellis","tag":"book quotes"},{"month":1,"year":2015,"content":"You\'re my favorite what if, \\\\ you\'re the best I\'ll never know.","source":"Fourth of July","author":"Fall Out Boy","tag":"lyrics"},{"month":5,"year":2021,"content":"If you could have it all \\\\ why do you want me?","source":"Tonight You Are Mine","author":"The Technicolors","tag":"lyrics"},{"month":1,"year":2022,"content":"What if God\'s not real and everything we are \\\\ is just a moment here where we\'re only growing older \\\\ What if god is real and everything I\'ve done \\\\ pushed me down this path where we\'re only growing colder","source":"Roman Empire","author":"MISSIO","tag":"lyrics"},{"month":10,"year":2019,"content":"Oh my precious ember burning, \\\\ my sweet glowing light","source":"Too Late to Say Goodbye","author":"Cage the Elephant","tag":"lyrics"},{"month":6,"year":2021,"content":"I\'m walking back now \\\\ past all the fires \\\\ trying to find out why I grabbed the lighter","source":"Oh My Dear Lord","author":"The Unlikely Candidates","tag":"lyrics"},{"month":1,"year":2022,"content":"I know you remember \\\\ how the leaves fell in November \\\\ the cold wind of December \\\\ and how we just fell apart","source":"In the Shadows","author":"Foreign Air","tag":"lyrics"},{"month":5,"year":2022,"content":"Ain\'t no chariots of fire \\\\ come to take me home \\\\ I\'m lost in the woods \\\\ and I wander alone","source":"Hellfire","author":"Barns Courtney","tag":"lyrics"},{"month":3,"year":2022,"content":"Got half a lung and two left shoes \\\\ A bulletproof vest \\\\ and some breaking news \\\\ and I\'m a blue-collared criminal \\\\ if I forget my rent is due","source":"Sunshine","author":"The Unlikely Candidates","tag":"lyrics"},{"month":4,"year":2022,"content":"Oh come with me \\\\ I\'ll show you how to live for free","source":"Kicks","author":"Barns Courtney","tag":"lyrics"},{"month":2,"year":2014,"content":"The road is long \\\\ we carry on \\\\ try to have fun in the meantime","source":"Born to Die","author":"Lana del Rey","tag":"lyrics"},{"month":2,"year":2013,"content":"Now we\'re torn, torn, torn apart \\\\ there\'s nothing we can do \\\\ just let me go \\\\ we\'ll meet again soon","source":"Little Talks","author":"Of Monsters and Men","tag":"lyrics"},{"month":1,"year":2013,"content":"We\'d rather die than live to rust on the ground","source":"King for a Day","author":"Pierce the Veil ft. Kellin Quinn","tag":"lyrics"},{"month":1,"year":2013,"content":"Nobody\'s gonna hold your hand \\\\ and guide you through \\\\ it\'s up for you to understand","source":"Roger Rabbit","author":"Sleeping with Sirens","tag":"lyrics"},{"month":11,"year":2012,"content":"And I don\'t want the world to see me \\\\ \'cause I don\'t think that they\'d understand \\\\ when everything\'s made to be broken \\\\ I just want you to know who I am","source":"Iris","author":"The Goo Goo Dolls","tag":"lyrics"},{"month":10,"year":2012,"content":"There are many things that I would like to say to you \\\\ but I don\'t know how","source":"Wonderwall","author":"Oasis","tag":"lyrics"},{"month":10,"year":2012,"content":"\'Cause the love that you lost \\\\ wasn\'t worth what it cost \\\\ and in time you\'ll be glad it\'s gone","source":"Roads Untraveled","author":"Linkin Park","tag":"lyrics"},{"month":3,"year":2014,"content":"I\'m with you \'til the end of the line","source":"Captain America: The Winter Soldier","author":"Steve Rogers","tag":"movie quotes"},{"month":1,"year":2016,"content":"Promise me a place \\\\ in your house of memories","source":"House of Memories","author":"Panic! At The Disco","tag":"lyrics"},{"month":3,"year":2013,"content":"Such an incredible waste \\\\ of energy, to work your ass \\\\ off for sixty years, \\\\ then shrivel up, die, \\\\ and be nothing more \\\\ than a memory-- if you\'re \\\\ lucky enough to leave someone \\\\ behind who will remember you. There must be more \\\\ Don\'t you think?","source":"Impulse","author":"Ellen Hopkins","tag":"book quotes"},{"month":4,"year":2012,"content":"I believe what doesn\'t kill you simply makes you... \\\\ stranger","source":"The Dark Knight","author":"Joker","tag":"movie quotes"},{"month":6,"year":2021,"content":"The Trisolarans who deemed the humans bugs seemed to have forgotten one fact: The bugs have never been truly defeated.","source":"The Three-Body Problem","author":"Cixin Liu","tag":"book quotes"},{"month":8,"year":2021,"content":"I said that people never change their lives, that in any case one life was as good as another and that I wasn\u2019t dissatisfied with mine here at all.","source":"The Stranger","author":"Albert Camus","tag":"book quotes"},{"month":11,"year":2021,"content":"- Why me? \\\\  - That is a very Earthling question to ask, Mr. Pilgrim. Why you? Why us for that matter? Why anything? Because this moment simply is. Have you ever seen bugs trapped in amber? \\\\ - Yes. \\\\ - Well, here we are, Mr. Pilgrim, trapped in the amber of this moment. There is no why.","source":"Slaughterhouse Five","author":"Kurt Vonnegut","tag":"book quotes"},{"month":4,"year":2016,"content":"I say never be complete. Stop being perfect. I say let\'s evolve, let the chips fall where they may.","source":"Fight Club","author":"Tyler Durden","tag":"movie quotes"},{"month":3,"year":2022,"content":"Respect the fact \\\\ that everything you hate \\\\ Your thoughts, your words \\\\ and everything you say \\\\ Defines you \\\\ Define you","source":"Train","author":"Brick and Mortar","tag":"lyrics"},{"month":10,"year":2019,"content":"In this hell of a season \\\\ give me more than a reason \\\\ to be with you","source":"Hell of a Season","author":"The Black Keys","tag":"lyrics"},{"month":6,"year":2019,"content":"As we slow dance, I became your statue, frozen \\\\ \'Times I wonder are we just a puff of smoke? Yeah \\\\ Underneath this bed of ashes \\\\ still withholding everything \\\\ like we were never close","source":"Ready to Let Go","author":"Cage the Elephant","tag":"lyrics"},{"month":2,"year":2020,"content":"I\'m down \\\\ I should be on top but I\'m always underground \\\\ Things are looking up but I\'m making myself drown","source":"Underground","author":"MISSIO","tag":"lyrics"},{"month":7,"year":2021,"content":"Now would you pray before you twist the knife? \\\\ Yeah, would you take my hand and take a life?","source":"Used to the Darkness","author":"Des Rocs","tag":"lyrics"},{"month":12,"year":2020,"content":"Take a seat back in your clam shell \\\\ If the ocean\'s not enough \\\\ nor am I","source":"Alrighty Aphrodite","author":"Peach Pit","tag":"lyrics"},{"month":12,"year":2020,"content":"I wish we started in the rain \\\\ so that when it was gray \\\\ We\'d think it was a fine and normal day","source":"Betcha","author":"July","tag":"lyrics"},{"month":7,"year":2020,"content":"I get high to leave \\\\ all these problems on the ground \\\\ Then to my surprise \\\\ they\'re right there when I come back down","source":"Riptide","author":"grandson","tag":"lyrics"},{"month":7,"year":2020,"content":"Didn\'t I have a reason? \\\\ Laying flat in the driveway \\\\ All this madness pleading \\\\ speaking in a slow drip","source":"Do You Need Me","author":"Lewis Del Mar","tag":"lyrics"},{"month":2,"year":2020,"content":"\'Cause it might\'ve been something who\'s to say? \\\\ Does it help to get lost in yesterday?","source":"Lost in Yesterday","author":"Tame Impala","tag":"lyrics"},{"month":7,"year":2014,"content":"If heaven\'s grief brings hell\'s rain \\\\ Then I\'d trade all of my tomorrows \\\\ for just one yesterday","source":"Just One Yesterday","author":"Fall Out Boy","tag":"lyrics"},{"month":9,"year":2019,"content":"We can\'t change the things we can\'t control \\\\ It\'s summer somewhere \\\\ So you shouldn\'t be so cold","source":"Imagination","author":"Foster The People","tag":"lyrics"},{"month":1,"year":2019,"content":"Every day it gets a little easier... But you gotta do it every day. That\'s the hard part. But it does get easier.","source":"Bojack Horseman S2:E12","author":"Jogging Baboon","tag":"tv quotes"},{"month":9,"year":2016,"content":"This is my own private domicile and I will not be harassed","source":"Breaking Bad S3:E6","author":"Jesse Pinkman","tag":"tv quotes"},{"month":11,"year":2022,"content":"In another life, I would have really liked just doing laundry and taxes with you","source":"Everything Everywhere All At Once","author":"Waymond","tag":"movie quotes"},{"month":12,"year":2011,"content":"Is it bright where you are \\\\ Now the people changed? Does it make you happy, you\'re so strange?","source":"The Beginning is the End is the Beginning","author":"Smashing Pumpkins","tag":"lyrics"},{"month":9,"year":2020,"content":"Heartbreaks, the heavy world\'s upon your shoulders \\\\ Will we burn or we just smolder? \\\\ Somehow I know I\'ll find you there","source":"Come a Little Closer","author":"Cage the Elephant","tag":"lyrics"},{"month":8,"year":2022,"content":"What planet are you on \\\\ What constellation \\\\ You\'re floating like a ghost \\\\ Out here in the unknown","source":"Babylon","author":"Barns Courtney","tag":"lyrics"},{"month":9,"year":2022,"content":"I\'m thirsty \\\\ I\'m dying \\\\ Upon my desert island \\\\ Why won\'t you come save me? \\\\ I\'m drowning in your silence","source":"Blue Days","author":"Foreign Air","tag":"lyrics"}]')},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[256,1,2]]]);
//# sourceMappingURL=main.e22fbeae.chunk.js.map