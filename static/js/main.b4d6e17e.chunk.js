(this.webpackJsonpetatbank=this.webpackJsonpetatbank||[]).push([[0],{188:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(63),l=a.n(r),i=(a(76),a(9)),c=a(10),s=a(12),u=a(11),m=a(13),d=(a(77),a(78),a(46),a(79),a(80),a(64)),p=a.n(d),h=(a(81),a(65)),b=a(43),E=a.n(b);E.a.initializeApp({apiKey:"AIzaSyCath-DLr-wyEEutppS7TzEcCyLKFbE5EY",authDomain:"etatbank.firebaseapp.com",databaseURL:"https://etatbank.firebaseio.com",projectId:"etatbank",storageBucket:"etatbank.appspot.com",messagingSenderId:"653688129489",appId:"1:653688129489:web:bb7f7b4df74ada6e0342f0"});var f=E.a,v=a(194),g=a(190),O=a(68),j=a(191),y=a(195),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){},e.updateInput=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.updateStatsMonth=function(t){t.preventDefault(),f.firestore().collection("users").doc("antoine").collection("years").doc("2019").collection("mois").doc(e.state.currentMonth).update({entreemois:e.state.entreemois,sortiemois:e.state.sortiemois}),e.setState({entreemois:"",sortiemois:""})},e.state={entreemois:"",sortiemois:"",currentMonth:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper-stats-month"},o.a.createElement("h3",null,"Nouvelles donn\xe9es :"),o.a.createElement(v.a,{className:"form-test",onSubmit:this.updateStatsMonth},o.a.createElement(g.a,null,o.a.createElement(O.a,null,o.a.createElement(j.a,null,o.a.createElement(j.a.Prepend,null,o.a.createElement(j.a.Text,{id:"inputGroupPrepend"},"Mois")),o.a.createElement(v.a.Control,{as:"select",name:"currentMonth",id:"month-select",onChange:this.updateInput},o.a.createElement("option",{value:"Janvier"},"Janvier"),o.a.createElement("option",{value:"F\xe9vrier"},"F\xe9vrier"),o.a.createElement("option",{value:"Mars"},"Mars"),o.a.createElement("option",{value:"Avril"},"Avril"),o.a.createElement("option",{value:"Mai"},"Mai"),o.a.createElement("option",{value:"Juin"},"Juin"),o.a.createElement("option",{value:"Juillet"},"Juillet"),o.a.createElement("option",{value:"Ao\xfbt"},"Ao\xfbt"),o.a.createElement("option",{value:"Septembre"},"Septembre"),o.a.createElement("option",{value:"Octobre"},"Octobre"),o.a.createElement("option",{value:"Novembre"},"Novembre"),o.a.createElement("option",{value:"D\xe9cembre"},"D\xe9cembre")))),o.a.createElement(O.a,null,o.a.createElement(j.a,null,o.a.createElement(v.a.Control,{placeholder:"Entr\xe9e du mois",onChange:this.updateInput,value:this.state.entreemois,name:"entreemois"}),o.a.createElement(j.a.Append,null,o.a.createElement(j.a.Text,{id:"inputGroupAppend"},"\u20ac")))),o.a.createElement(O.a,null,o.a.createElement(j.a,null,o.a.createElement(v.a.Control,{placeholder:"Sortie du mois",onChange:this.updateInput,value:this.state.sortiemois,name:"sortiemois"}),o.a.createElement(j.a.Append,null,o.a.createElement(j.a.Text,{id:"inputGroupAppend"},"\u20ac")))),o.a.createElement(O.a,null,o.a.createElement(y.a,{variant:"success",type:"submit"},"Envoyer")))))}}]),t}(n.Component),S=a(14),k=a(192),M=a(25),N=(a(187),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){var t=Object(S.a)(e);f.firestore().collection("users").doc("antoine").collection("years").doc("2019").collection("mois").orderBy("order","asc").get().then((function(e){var a=[];e.forEach((function(e){a.push(e.id),t.setState({listMonth:a})}))})).catch((function(e){console.log("Error getting document:",e)}))},e.state={listMonth:[],dataState:{labels:["Entr\xe9e","Sortie"],datasets:[{data:[],backgroundColor:["#5ac492","#d6535d"],hoverBackgroundColor:["#5ac492","#d6535d"]}]}},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"displayDataMonth",value:function(e){this.setState({currentMonth:e});var t=this;f.firestore().collection("users").doc("antoine").collection("years").doc("2019").collection("mois").doc(e).get().then((function(e){if(e.exists){var a=Object.assign({},t.state);a.dataState.datasets[0].data=[e.data().entreemois,e.data().sortiemois],t.setState(a)}else console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper-new-month"},o.a.createElement(k.a,null,o.a.createElement("ul",{className:"list-mois"},this.state.listMonth.map((function(e,t){var a=this;return o.a.createElement("li",{key:t},o.a.createElement(y.a,{variant:"secondary",className:this.state.currentMonth===e?"btn-success":null,onClick:function(){a.displayDataMonth(e)}},e))}),this))),o.a.createElement(M.a,{data:this.state.dataState,title:"My amazing data",color:"#70CAD1",redraw:!0,options:{plugins:{datalabels:{display:!0,color:"white"}}}}))}}]),t}(n.Component)),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){var e=Object(S.a)(a);f.firestore().collection("users").doc("antoine").collection("years").doc("2019").collection("mois").orderBy("order","asc").get().then((function(t){var a=[],n=[],o=[];t.forEach((function(t){a.push([t.id,t.data().entreemois,t.data().sortiemois]),e.setState({dataMonth:a}),t.data().entreemois>0?n.push(parseInt(t.data().entreemois)):n.push(0),t.data().sortiemois>0?o.push(parseInt(t.data().sortiemois)):o.push(0),e.setState({dataYearEntree:n,dataYearSortie:o})}))})).catch((function(e){console.log("Error getting document:",e)}))},a.state={year:[],dataMonth:[],dataYearEntree:[],dataYearSortie:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper-data-month"},o.a.createElement("h3",null,"Graph de l'ann\xe9e"),o.a.createElement(M.b,{redraw:!0,data:{labels:["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","D\xe9cembre"],datasets:[{label:"Entr\xe9e",fill:!1,lineTension:.1,backgroundColor:"rgba(67, 233, 70,0.4)",borderColor:"rgba(67, 233, 70,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(67, 233, 70,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(67, 233, 70,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.state.dataYearEntree},{label:"Sortie",fill:!1,lineTension:.1,backgroundColor:"rgba(233, 67, 67,0.7)",borderColor:"rgba(233, 67, 67,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(233, 67, 67,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(233, 67, 67,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.state.dataYearSortie}]},height:300,options:{pointBorderColor:"#FFFFFF",legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{beginAtZero:!0,min:0}}]}}}))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){var e=Object(S.a)(a);f.firestore().collection("users").doc("antoine").collection("years").doc("2019").collection("mois").orderBy("order","asc").get().then((function(t){t.forEach((function(t){parseInt(t.data().entreemois)>0&&e.setState({totalGain:e.state.totalGain+parseInt(t.data().entreemois)}),parseInt(t.data().sortiemois)>0&&e.setState({totalLose:e.state.totalLose+parseInt(t.data().sortiemois)}),e.setState({totalEco:e.state.totalGain-e.state.totalLose})}))})).catch((function(e){console.log("Error getting document:",e)}))},a.state={totalGain:0,totalLose:0,totalEco:0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper-total-compte"},o.a.createElement("h3",null,"Statistique de l'ann\xe9e"),o.a.createElement("div",{className:"card-total"},o.a.createElement("h5",null,"Total gagn\xe9"),o.a.createElement("p",null,Intl.NumberFormat().format(this.state.totalGain),"\u20ac")),o.a.createElement("div",{className:"card-total"},o.a.createElement("h5",null,"Total d\xe9pens\xe9"),o.a.createElement("p",null,Intl.NumberFormat().format(this.state.totalLose),"\u20ac")),o.a.createElement("div",{className:"card-total"},o.a.createElement("h5",null,"Total \xe9conomis\xe9"),o.a.createElement("p",null,Intl.NumberFormat().format(this.state.totalEco),"\u20ac")))}}]),t}(n.Component),I=a(70),A=a(193),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){var e=Object(S.a)(a),t=f.firestore().collection("users").doc("antoine").collection("years").doc("2019").collection("mois").orderBy("order","asc"),n=[];t.get().then((function(t){t.forEach((function(t){n.push({mois:t.id,entree:t.data().entreemois,sortie:t.data().sortiemois}),e.setState((function(e){return{detailsAnnee:[].concat(Object(I.a)(e.detailsAnnee),[n])}}))}))})).catch((function(e){console.log("Error getting document:",e)}))},a.state={detailsAnnee:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper-month-details"},o.a.createElement("h3",null,"Statistique de l'ann\xe9e"),o.a.createElement(A.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Mois"),o.a.createElement("th",null,"Ent\xe9e"),o.a.createElement("th",null,"Sortie"),o.a.createElement("th",null,"\xc9conomie"))),o.a.createElement("tbody",null,this.state.detailsAnnee.map((function(e,t){var a=e[t].entree-e[t].sortie;return o.a.createElement("tr",{key:t},o.a.createElement("td",null,t),o.a.createElement("td",null,e[t].mois),o.a.createElement("td",null,Intl.NumberFormat().format(e[t].entree)),o.a.createElement("td",null,Intl.NumberFormat().format(e[t].sortie)),o.a.createElement("td",{className:a>0?"plus":"moins"},Intl.NumberFormat().format(a)))})))))}}]),t}(n.Component);p.a.init();var F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"dashboard"},o.a.createElement("div",{className:"menu-header"},o.a.createElement("div",{className:"logo-wrapper"},o.a.createElement("span",null,"EtatBank")),o.a.createElement("ul",null,o.a.createElement("li",{className:"aos"===this.state.showComponent?"active":void 0},o.a.createElement("span",{onClick:function(){return e._onButtonClick("aos")}},"Entr\xe9e du mois")))),o.a.createElement("div",{className:"content-element"},o.a.createElement(C,{currentMonth:"Mai"}),o.a.createElement(N,null),o.a.createElement(B,null),o.a.createElement(w,null),o.a.createElement(D,null)))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(F,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t,a){e.exports=a(188)},76:function(e,t,a){},77:function(e,t,a){},80:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.b4d6e17e.chunk.js.map