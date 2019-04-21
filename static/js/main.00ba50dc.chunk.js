(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){e.exports=t(212)},101:function(e,a,t){},212:function(e,a,t){"use strict";t.r(a);t(101);var n=t(0),r=t.n(n),s=t(35),i=t.n(s),c=t(14),o=t(24),l=t(6),d=t(7),m=t(9),u=t(8),p=t(10),h=t(27),y=t(91),g=t.n(y),v=function(e){var a=e.destination,t=e.message,n=e.action,s=void 0===n?null:n,i=e.customClass;return r.a.createElement("div",{className:"linkButton ".concat(i)},r.a.createElement(c.b,{className:"button__target",to:a,onClick:s},t||a))},C=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){t.props.playerNameReady?(t.props.handleNewPlayerFormSubmit(e),t.props.history.push("/game")):t.displayInvalidPlayerNameMessage()},t.handleClick=function(){t.props.playerNameReady?t.props.addNewPlayerToFirebase():t.displayInvalidPlayerNameMessage()},t.displayInvalidPlayerNameMessage=function(){g()("Oops!","Looks like you need to enter a valid Nick Name!","error")},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"login"},r.a.createElement("h1",null,"RPSLS"),r.a.createElement("form",{className:"playerNameSubmissionForm",action:"#",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"visuallyhidden",htmlFor:"playerName"},"Please enter your nickname!"),r.a.createElement("input",{className:"playerNameSubmissionForm__input",type:"text",id:"playerName",value:this.props.playerName,onChange:function(a){return e.props.handleChange(a,e.props.checkForPlayerNameReady)},placeholder:"Enter a Nickname"})),r.a.createElement("div",{className:"loginPageButtons"},r.a.createElement("div",{className:"loginPageButtons__buttonContainer",onClick:this.handleClick},r.a.createElement(v,{destination:this.props.playerNameReady?"game":"/",message:"Play Game"})),r.a.createElement("div",{className:"loginPageButtons__buttonContainer"},r.a.createElement(v,{destination:"instructions"})),r.a.createElement("div",{className:"loginPageButtons__buttonContainer"},r.a.createElement(v,{destination:"leaderboard"}))))}}]),a}(n.Component),f=Object(h.d)(C),E=t(67),b=t.n(E),N=t(94),k=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={squareDimension:0},t.handleClick=function(){t.props.getPlayerChoice(t.props.type),t.props.disableButtonDuringAnimation()},t.updateDimensions=function(){var e=window.innerWidth/4;t.setState({squareDimension:e})},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e={width:this.state.squareDimension,height:this.state.squareDimension},a=!1;return a=!!this.props.tempDisabled||!this.props.playerCards[this.props.type],r.a.createElement("button",{className:"playerOptionItem",onClick:this.handleClick,style:window.innerWidth<750?e:null,disabled:a},r.a.createElement("div",null,r.a.createElement("img",{src:this.props.image,alt:this.props.alt,className:this.props.customClass})))}}]),a}(n.Component),w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).state={tempDisabled:!1},t.disableButtonDuringAnimation=function(){t.setState({tempDisabled:!0}),setTimeout(function(e){t.setState({tempDisabled:!1})},3500)},t.renderPlayerOptions=function(){return t.props.options.map(function(e){return r.a.createElement(k,{key:e.index,image:e.img,alt:e.alt,type:e.type,getPlayerChoice:t.props.getPlayerChoice,showCard:t.props.showCard,customClass:e.customClass,playerCards:t.props.playerCards,disableButtonDuringAnimation:t.disableButtonDuringAnimation,tempDisabled:t.state.tempDisabled})})},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"playerOptionList"},this.renderPlayerOptions())}}]),a}(n.Component),_=t(95),O=t.n(_),S=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).state={squareDimension:0},t.updateDimensions=function(){var e=window.innerWidth/1.55;t.setState({squareDimension:e})},t.renderVictoryMessage=function(){return r.a.createElement("div",{className:"card__victoryMessage"},t.props.winStatement)},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e={width:this.state.squareDimension,height:this.state.squareDimension};return r.a.createElement("div",{className:"card",style:window.innerWidth<750?e:null},r.a.createElement("div",{className:"card__cardFlipper ".concat(this.props.flipped?"card__cardFlipper--active":""),style:window.innerWidth<750?e:null},r.a.createElement("div",{className:"card__display card__display--back",style:window.innerWidth<750?e:null},r.a.createElement("img",{src:O.a,alt:"image for the back of the card"})),r.a.createElement("div",{className:"card__display card__display--front",style:window.innerWidth<750?e:null},r.a.createElement("img",{src:this.props.image,alt:"played card image"}),this.renderVictoryMessage())))}}]),a}(n.Component),D=function(e){var a=e.playerCardFlipped,t=e.compCardFlipped,n=e.playerCardImage,s=e.compCardImage,i=e.playerChoice,c=e.compChoice,o=e.roundResult,l=function(){var e=[];return e.push(i,c),e.includes("rock")&&e.includes("paper")?"Paper covers rock":e.includes("rock")&&e.includes("scissors")?"Rock smashes scissors":e.includes("rock")&&e.includes("lizard")?"Rock crushes lizard":e.includes("rock")&&e.includes("spock")?"Spock vaporizes rock":e.includes("paper")&&e.includes("scissors")?"Scissors cut paper":e.includes("paper")&&e.includes("lizard")?"Lizard eats paper":e.includes("paper")&&e.includes("spock")?"Paper disproves spock":e.includes("scissors")&&e.includes("lizard")?"Scissors decapitate lizard":e.includes("scissors")&&e.includes("spock")?"Spock smashes scissors":e.includes("lizard")&&e.includes("spock")?"Lizard bites spock":void 0};return r.a.createElement("div",{className:"cardDisplay"},r.a.createElement(S,{flipped:a,image:n,winStatement:"Win"===o?l():null}),r.a.createElement(S,{flipped:t,image:s,winStatement:"Lose"===o?l():null}))},j=Object(h.d)(function(e){var a=e.resetGame,t=e.playerWinCount,n=void 0===t?0:t,s=e.compWinCount,i=void 0===s?0:s,c=e.tieCount,o=void 0===c?0:c,l=e.playerName,d=e.history;return l||d.push("/"),r.a.createElement("div",{className:"results"},r.a.createElement("table",{className:"ui celled large table padded unstackable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"2",className:"center aligned"},l))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Games Won"),r.a.createElement("td",{className:"center aligned"},n)),r.a.createElement("tr",null,r.a.createElement("td",null,"Games Lost"),r.a.createElement("td",{className:"center aligned"},i)),r.a.createElement("tr",null,r.a.createElement("td",null,"Games Tied"),r.a.createElement("td",{className:"center aligned"},o)))),r.a.createElement(v,{destination:"/",message:"New Game",action:a}),r.a.createElement(v,{destination:"/leaderboard",message:"Leaderboard"}))}),R=[{type:"rock",img:"assets/rock.png",alt:"Image of a hand in a fist, indicating rock!",index:0,customClass:"rockClass"},{type:"paper",img:"assets/paper.png",alt:"Image of a flat hand, indicating paper!",index:1,customClass:"paperClass"},{type:"scissors",img:"assets/scissors.png",alt:"Image of a hand with two fingers out, indicating scissors!",index:2,customClass:"scissorsClass"},{type:"lizard",img:"assets/lizard.png",alt:"Image of a hand forming a mouth, indicating lizard!",index:3,customClass:"lizardClass"},{type:"spock",img:"assets/spock.png",alt:"Image of a hand giving the Vulcan salute, indicating spock!",index:4,customClass:"spockClass"}],W=function(e){var a=e.compCardsArray,t=e.playerCards,n=e.playerWinCount,s=e.compWinCount,i=e.tieCount,c=function(e){return R.map(function(a){return r.a.createElement("div",{className:"listItem",key:a.type},r.a.createElement("div",{className:"listItem__image"},r.a.createElement("img",{src:a.img,alt:a.alt})),r.a.createElement("div",{className:"listItem__counter"},function(e,a){return R.map(function(t,n){return r.a.createElement("div",{key:n,className:"bubble ".concat(e[a]>=n+1?"filled ":"")})})}(e,a.type)))})};return r.a.createElement("div",{className:"cardTracker"},r.a.createElement("div",{className:"counterList"},c(t)),r.a.createElement("div",{className:"counterList"},c(function(){var e={};return a.map(function(a){var t=Object.entries(a);e[t[0][0]]=t[0][1]}),e}())),r.a.createElement("div",{className:"score"},r.a.createElement("div",{className:"score__row"},r.a.createElement("div",{className:"score__cell score__cell--heading"},"Wins"),r.a.createElement("div",{className:"score__cell"},n)),r.a.createElement("div",{className:"score__row"},r.a.createElement("div",{className:"score__cell score__cell--heading"},"Loses"),r.a.createElement("div",{className:"score__cell"},s)),r.a.createElement("div",{className:"score__row"},r.a.createElement("div",{className:"score__cell score__cell--heading"},"Ties"),r.a.createElement("div",{className:"score__cell"},i))))},A=t(68),F=t.n(A);F.a.initializeApp({apiKey:"AIzaSyCr6cQFXFwCYl7-ClBTIAK6H6MhS6XNkC8",authDomain:"new-rpsls.firebaseapp.com",databaseURL:"https://new-rpsls.firebaseio.com",projectId:"new-rpsls",storageBucket:"new-rpsls.appspot.com",messagingSenderId:"783810961248"});var P=F.a,I=t(96),x=t.n(I).a.create({baseURL:"https://api.unsplash.com/",headers:{Authorization:"Client-ID 630c588d9c659156e3aeb6db866809578dadb2520e92e3eaaa7d6c58a069053a"}}),L=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).state={options:R,playerCardFlipped:!1,compCardFlipped:!1,playerChoice:"",compChoice:"",compChoiceNumber:"",compChoiceArray:[{rock:5},{paper:5},{scissors:5},{lizard:5},{spock:5}],playerCards:{rock:5,paper:5,scissors:5,lizard:5,spock:5},cardImage:"",playerCardImage:"",compCardImage:"",playerWinCount:0,compWinCount:0,tieCount:0,roundResult:"",totalRounds:0},t.getCardImage=function(){var e=Object(N.a)(b.a.mark(function e(a,n){var r,s,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"spock"===a&&(a="space"),e.next=3,x.get("search/photos",{params:{query:a}});case 3:r=e.sent,s=Math.floor(Math.random()*r.data.results.length),i=r.data.results[s].urls.regular,t.setState(Object(o.a)({},"".concat(n,"CardImage"),i),function(){return t.showCard("".concat(n))});case 7:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t.showCard=function(e){return t.setState(Object(o.a)({},"".concat(e,"CardFlipped"),!0))},t.getPlayerChoice=function(e){return t.setState({playerChoice:e},function(){t.getCardImage(t.state.playerChoice,"player"),t.spendPlayerCard(),t.getCompChoice()})},t.getCompChoice=function(){setTimeout(function(){var e=Math.floor(Math.random()*t.state.compChoiceArray.length),a=Object.keys(t.state.compChoiceArray[e])[0];t.setState({compChoice:a,compChoiceNumber:e},function(){t.resolveSetCompChoice()})},1e3)},t.resolveSetCompChoice=function(){t.spendCompCard(),t.getCardImage(t.state.compChoice,"comp")},t.spendPlayerCard=function(){var e=t.state.playerCards;e[t.state.playerChoice]=e[t.state.playerChoice]-1,t.setState({playerCards:e})},t.spendCompCard=function(){var e=t.state.compChoiceArray;e[t.state.compChoiceNumber][t.state.compChoice]--;var a=e[t.state.compChoiceNumber][t.state.compChoice];t.setState({compChoiceArray:e},function(){return t.caluculateResult(t.state.playerChoice,t.state.compChoice)}),0===a&&t.clearEmptyCardSlot()},t.clearEmptyCardSlot=function(){var e=t.state.compChoiceArray;e.splice(t.state.compChoiceNumber,1),t.setState({compchoiceArray:e})},t.caluculateResult=function(e,a){e&&a&&("rock"===e&&"scissors"===a||"rock"===e&&"lizard"===a||"paper"===e&&"rock"===a||"paper"===e&&"spock"===a||"scissors"===e&&"paper"===a||"scissors"===e&&"lizard"===a||"spock"===e&&"rock"===a||"spock"===e&&"scissors"===a||"lizard"===e&&"paper"===a||"lizard"===e&&"spock"===a?(t.props.updateCount("win"),t.setState({playerWinCount:t.state.playerWinCount+1,roundResult:"Win"},function(){return t.resolveRound("Win")})):t.state.playerChoice===t.state.compChoice?(t.props.updateCount("tie"),t.setState({tieCount:t.state.tieCount+1,roundResult:"Tie"},function(){return t.resolveRound("Tie")})):(t.props.updateCount("lose"),t.setState({compWinCount:t.state.compWinCount+1,roundResult:"Lose"},function(){return t.resolveRound("Lose")})))},t.resolveRound=function(e){setTimeout(function(e){t.getTotalRounds(),t.resetForNextRound()},2e3)},t.getTotalRounds=function(){var e=t.state.compWinCount+t.state.playerWinCount+t.state.tieCount;t.setState({totalRounds:e})},t.saveCurrentGameData=function(){var e={compChoiceArray:t.state.compChoiceArray,playerCards:t.state.playerCards};P.database().ref().child(t.props.id).child("recoveryData").set(e).then(function(e){t.props.setRecoveryDataState()})},t.recoverCurrentGameData=function(){P.database().ref().child(t.props.id).child("recoveryData").once("value").then(function(e){var a=e.toJSON();t.restoreCurrentGame(a)})},t.restoreCurrentGame=function(e){var a=[];for(var n in e.compChoiceArray)a.push(e.compChoiceArray[n]);t.setState({compChoiceArray:a,playerCards:e.playerCards,playerWinCount:t.props.win,compWinCount:t.props.lose,tieCount:t.props.tie})},t.triggerEndGame=function(e){25===e&&t.props.history.push("/results")},t.resetForNextRound=function(){t.saveCurrentGameData(),t.setState({playerCardFlipped:!1,compCardFlipped:!1,playerChoice:"",compChoice:"",compChoiceNumber:"",roundResult:""},function(){return t.triggerEndGame(t.state.totalRounds)})},t.renderAdmin=function(){return r.a.createElement("div",{className:"adminArea"},r.a.createElement(W,{playerCards:t.state.playerCards,compCardsArray:t.state.compChoiceArray,playerWinCount:t.state.playerWinCount,compWinCount:t.state.compWinCount,tieCount:t.state.tieCount}),r.a.createElement(v,{destination:"menu",action:t.saveCurrentGameData,message:r.a.createElement("i",{className:"fas fa-bars"}),customClass:"menu"}))},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.recoveryDataExists&&this.recoverCurrentGameData(),this.props.playerName||this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game__cardArea"},r.a.createElement(w,{options:R,getPlayerChoice:this.getPlayerChoice,playerCards:this.state.playerCards}),r.a.createElement("div",{className:"cardDisplayContainer"},r.a.createElement(D,{options:R,playerCardFlipped:this.state.playerCardFlipped,compCardFlipped:this.state.compCardFlipped,playerChoice:this.state.playerChoice,compChoice:this.state.compChoice,playerCardImage:this.state.playerCardImage,compCardImage:this.state.compCardImage,roundResult:this.state.roundResult}),window.innerWidth<750?null:this.renderAdmin())),window.innerWidth<750?this.renderAdmin():null)}}]),a}(n.Component),z=Object(h.d)(L),B=function(e){return i.a.createPortal(r.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"ui huge header"},e.title),r.a.createElement("div",{className:"content maxedHeight"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},T=t(12),G=Object(T.a)(),M=t(97),q=t.n(M),H=t(98),J=t.n(H),K=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).state={instruction:void 0,rulesDisplayed:!1},t.handleClick=function(e){document.querySelectorAll(".interactiveOverlay__trigger").forEach(function(e){return e.classList.remove("active")}),e.target.classList.add("active"),t.setState({instruction:e.target.dataset.instruction})},t.toggleContent=function(){t.setState({rulesDisplayed:!t.state.rulesDisplayed})},t.renderActions=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:t.toggleContent,className:"ui button primary massive"},t.state.rulesDisplayed?"Show Gameboard":"Show Rules"),r.a.createElement("button",{onClick:function(){return G.goBack()},className:"ui button primary massive"},"Back"))},t.showRules=function(){return r.a.createElement("div",{className:"ruleContent"},r.a.createElement("div",{className:"ruleImage"},r.a.createElement("img",{src:J.a,alt:"Image showing the rules for RPSLS"})))},t.renderMessage=function(){switch(t.state.instruction){case"options":return r.a.createElement("div",{className:"ui green message large"},"Begin each round by choosing which card your are going to play.");case"userCard":return r.a.createElement("div",{className:"ui green message large"},"Cards you play will be displayed here.");case"compCard":return r.a.createElement("div",{className:"ui green message large"},"Cards the computer plays will be displayed here.");case"cardTracker":return r.a.createElement("div",{className:"ui green message large"},"Keep track of the remaining cards in your deck and your opponents deck using this tracker.");case"scoreTracker":return r.a.createElement("div",{className:"ui green message large"},"Track your current score here.");case"menu":return r.a.createElement("div",{className:"ui green message large"},"Navigate to the menu for more actions.");default:return}},t.showGameBoard=function(){return r.a.createElement("div",{className:"instructionContent"},r.a.createElement("div",{className:"ui big message large"},"Interact with the game for more information."),r.a.createElement("div",{className:"instructions"},r.a.createElement("div",{className:"gameDisplay"},r.a.createElement("img",{src:q.a,alt:"Image of gameboard."}),r.a.createElement("div",{className:"interactiveOverlay"},r.a.createElement("div",{onClick:function(e){return t.handleClick(e)},className:"interactiveOverlay__trigger interactiveOverlay__trigger--options","data-instruction":"options"}),r.a.createElement("div",{className:"interactiveOverlay__container"},r.a.createElement("div",{className:"interactiveOverlay__cardDisplay"},r.a.createElement("div",{onClick:function(e){return t.handleClick(e)},className:"interactiveOverlay__trigger interactiveOverlay__trigger--userCard","data-instruction":"userCard"}),r.a.createElement("div",{onClick:function(e){return t.handleClick(e)},className:"interactiveOverlay__trigger interactiveOverlay__trigger--compCard","data-instruction":"compCard"})),r.a.createElement("div",{className:"interactiveOverlay__adminArea"},r.a.createElement("div",{onClick:function(e){return t.handleClick(e)},className:"interactiveOverlay__trigger interactiveOverlay__trigger--cardTracker","data-instruction":"cardTracker"}),r.a.createElement("div",{onClick:function(e){return t.handleClick(e)},className:"interactiveOverlay__trigger interactiveOverlay__trigger--scoreTracker","data-instruction":"scoreTracker"}),r.a.createElement("div",{onClick:function(e){return t.handleClick(e)},className:"interactiveOverlay__trigger interactiveOverlay__trigger--menu","data-instruction":"menu"})))))),t.renderMessage())},t.renderContent=function(){return t.state.rulesDisplayed?t.showRules():t.showGameBoard()},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(B,{title:"Instructions",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return G.goBack()}})}}]),a}(n.Component),V=P.database().ref(),U=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(s)))).state={players:[]},t.pullDataFromFirebase=function(){V.once("value").then(function(e){var a=Object.values(e.toJSON());t.sortPlayerList(a)})},t.sortPlayerList=function(e){var a=e.sort(function(e,a){return e.win<a.win?1:e.win>a.win?-1:e.win===a.win&&e.lose>a.lose?1:e.win===a.win&&e.lose<a.lose?-1:void 0});t.setState({players:a})},t.renderRankings=function(){return t.state.players.map(function(e,a){if(e.win+e.lose+e.tie===25)return r.a.createElement("tr",{key:a},r.a.createElement("td",{"data-label":"Rank"},a+1),r.a.createElement("td",{"data-label":"Name"},e.name),r.a.createElement("td",{"data-label":"Wins"},e.win),r.a.createElement("td",{"data-label":"Loses"},e.lose))})},t.renderContent=function(){return r.a.createElement("div",{className:"leaderboard"},r.a.createElement("table",{className:"ui celled large table unstackable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"rankColumn"},"Rank"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Wins"),r.a.createElement("th",null,"Loses"))),r.a.createElement("tbody",{className:"rankList"},t.renderRankings())))},t.renderActions=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return G.goBack()},className:"ui button primary massive"},"Back"))},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.pullDataFromFirebase()}},{key:"render",value:function(){return r.a.createElement(B,{title:"Leaderboard",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return G.goBack()}})}}]),a}(n.Component),X=function(e){e.recoverCurrentGameData;var a=e.resetGame;return r.a.createElement(B,{title:"Menu",content:r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"menuOptions"},r.a.createElement(v,{destination:"/",message:"New Game",action:a}),r.a.createElement(v,{destination:"/instructions",message:"Instructions"}),r.a.createElement(v,{destination:"/leaderboard",message:"Leaderboard"}))),actions:r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"/game",className:"ui button primary massive"},"Back")),onDismiss:function(){return G.goBack()}})},Q=t(99),Y=t.n(Q),Z=P.database().ref(),$=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={playerName:"",playerNameReady:!1,tie:0,win:0,lose:0,id:"",windowWidth:0,windowHeight:0,recoveryDataExists:!1},t.updateWindow=function(){t.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight})},t.handleChange=function(e,a){t.setState(Object(o.a)({},e.target.id,e.target.value),function(){return a()})},t.checkForPlayerNameReady=function(){"Enter a nickname"!==t.state.playerName&&""!==t.state.playerName&&" "!==t.state.playerName&&"  "!==t.state.playerName&&"   "!==t.state.playerName?t.setState({playerNameReady:!0}):t.setState({playerNameReady:!1})},t.handleNewPlayerFormSubmit=function(e){e.preventDefault(),t.addNewPlayerToFirebase()},t.addNewPlayerToFirebase=function(){var e={name:t.state.playerName,win:t.state.win,lose:t.state.lose,tie:t.state.tie};Z.push(e).then(function(e){t.setState({id:e.key})})},t.updateFirebase=function(e){Z.child(t.state.id).child(e).set(t.state[e])},t.updateCount=function(e){t.setState(Object(o.a)({},e,t.state[e]+1),function(){return t.updateFirebase(e)})},t.setRecoveryDataState=function(){t.setState({recoveryDataExists:!0})},t.resetGame=function(){t.setState({playerName:"",playerNameReady:!1,tie:0,win:0,lose:0,id:"",recoveryDataExists:""})},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.updateWindow(),window.addEventListener("resize",this.updateWindow)}},{key:"render",value:function(){var e,a=this,t={backgroundImage:"linear-gradient(to bottom, rgba(205, 169, 157, 0.7), rgba(205, 169, 157, 0.7)), url(".concat(Y.a,")")};return r.a.createElement("div",{className:"app",style:t},r.a.createElement("div",{className:"appWrapper"},r.a.createElement(h.a,(e={exact:!0,path:"/"},Object(o.a)(e,"exact",!0),Object(o.a)(e,"render",function(e){return r.a.createElement(f,{history:G,playerName:a.state.playerName,playerNameReady:a.state.playerNameReady,handleChange:a.handleChange,handleNewPlayerFormSubmit:a.handleNewPlayerFormSubmit,addNewPlayerToFirebase:a.addNewPlayerToFirebase,checkForPlayerNameReady:a.checkForPlayerNameReady})}),e)),r.a.createElement(h.a,{path:"/game",exact:!0,render:function(e){return r.a.createElement(z,{history:G,playerName:a.state.playerName,updateCount:a.updateCount,windowWidth:a.state.windowWidth,windowHeight:a.state.windowHeight,id:a.state.id,setRecoveryDataState:a.setRecoveryDataState,tie:a.state.tie,win:a.state.win,lose:a.state.lose,recoveryDataExists:a.state.recoveryDataExists})}}),r.a.createElement(h.a,{path:"/menu",exact:!0,render:function(e){return r.a.createElement(X,null)}}),r.a.createElement(h.a,{path:"/instructions",exact:!0,render:function(e){return r.a.createElement(K,null)}}),r.a.createElement(h.a,{path:"/leaderboard",exact:!0,render:function(e){return r.a.createElement(U,null)}}),r.a.createElement(h.a,{path:"/results",exact:!0,render:function(e){return r.a.createElement(j,null)}})))}}]),a}(n.Component);i.a.render(r.a.createElement(c.a,null,r.a.createElement($,null)),document.getElementById("root"))},95:function(e,a,t){e.exports=t.p+"static/media/background.ce8f19bd.png"},97:function(e,a,t){e.exports=t.p+"static/media/game-display-desktop.bb089555.png"},98:function(e,a,t){e.exports=t.p+"static/media/rules.84b86c01.png"},99:function(e,a,t){e.exports=t.p+"static/media/background.ce8f19bd.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.00ba50dc.chunk.js.map