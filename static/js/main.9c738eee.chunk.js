(this["webpackJsonpcodeial-final-live"]=this["webpackJsonpcodeial-final-live"]||[]).push([[0],{101:function(e,t){},104:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),c=a.n(s),o=(a(65),a(3)),i=a(4),l=a(6),u=a(5),m=a(8),d="http://localhost:7000/api/v1",p=function(){return"".concat(d,"/user/create-session")},h=function(){return"".concat(d,"/user/edit")},f=function(){return"".concat(d,"/user/signup")},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return"".concat(d,"/posts?page=").concat(e,"&limit=").concat(t)},E=function(e){return"".concat(d,"/user/fetch/").concat(e)},g=function(){return"".concat(d,"/friendship/fetch_user_friends")},b=function(e,t){return"".concat(d,"/friendship/create_friendship?user_id=").concat(e,"&curr_user=").concat(t)},O=function(e){return"".concat(d,"/friendship/remove_friendship?user_id=").concat(e)},S=function(){return"".concat(d,"/posts/create")},C=function(){return"".concat(d,"/comments")},N=function(e,t){return"".concat(d,"/likes/toggle?id=").concat(e,"&type=").concat(t)},_=function(e){return"".concat(d,"/user/search?text=").concat(e)};a(16).func;function j(e){var t=[];for(var a in console.log(e),e){console.log(a);var n=encodeURIComponent(a);console.log(e[a]);var r=encodeURIComponent(e[a]);t.push(n+"="+r)}return t.join("&")}function y(){return localStorage.getItem("token")}function w(){return function(e){var t=v();fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t.data.posts),e({type:"UPDATE_POSTS",posts:t.data.posts})}))}}function I(e,t,a){return function(n){var r=C();fetch(r,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())},body:j({content:e,post_id:t,user:a})}).then((function(e){return e.json()})).then((function(e){console.log("Comment_Data",e),e.success&&n(function(e,t){return{type:"ADD_COMMENT",comment:e,postId:t}}(e.data.comment,t))}))}}function k(e,t,a){return function(a){var n=N(e,t);fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())}}).then((function(e){return e.json()})).then((function(t){console.log("Like_Data",t.data.user),t.success||a(function(e,t){return{type:"ADD_LIKE",userId:t,postId:e}}(e,t.data.user))}))}}var T=a(7),P=a(9),A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.posts;return r.a.createElement("div",{className:"posts-list"},r.a.createElement(se,null),e.map((function(e){return r.a.createElement(oe,{post:e,key:e._id})})))}}]),a}(r.a.Component);function U(e,t,a,n){return function(r){var s=f();fetch(s,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:j({email:e,password:t,name:a,confirm_password:n})}).then((function(e){return e.json()})).then((function(e){if(console.log("data",e),e.success)return localStorage.setItem("token",e.data.token),void r((t=e.data.user,{type:"SIGNUP_SUCCESS",user:t}));var t;r({type:"SIGNUP_FAILED",error:e.message})}))}}function L(e){return function(t){var a=_(e);fetch(a,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())}}).then((function(e){return e.json()})).then((function(e){console.log("Search data",e),e.success?t(R(e.data.users)):t(R([]))}))}}function R(e){return{type:"FETCH_SEARCH_RESULTS_SUCCESS",users:e}}var D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).logout=function(){localStorage.removeItem("token"),e.props.dispatch({type:"LOG_OUT"})},e.handleSearch=function(t){var a=t.target.value;e.props.dispatch(L(a))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.auth,t=e.isLoggedin,a=e.user,n=this.props.results;return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"left-div"},r.a.createElement(P.b,{to:"/"},r.a.createElement("img",{src:"https://ninjasfiles.s3.amazonaws.com/0000000000003454.png",alt:"logo"}))),r.a.createElement("div",{className:"search-container"},r.a.createElement("img",{className:"search-icon",src:"https://image.flaticon.com/icons/svg/483/483356.svg",alt:"search-icon"}),r.a.createElement("input",{placeholder:"Search",onChange:this.handleSearch}),n.length>0&&r.a.createElement("div",{className:"search-results"},r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{className:"search-results-row"},r.a.createElement(P.b,{to:"/user/".concat(e._id)},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-dp"}),r.a.createElement("span",null,e.name)))}))))),r.a.createElement("div",{className:"right-nav"},t&&r.a.createElement("div",{className:"user"},r.a.createElement(P.b,{to:"/setting"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-dp",id:"user-dp"})),r.a.createElement("span",null,a.name)),r.a.createElement("div",{className:"nav-links"},r.a.createElement("ul",null,!t&&r.a.createElement("li",null,r.a.createElement(P.b,{to:"/login"},"Log in")),!t&&r.a.createElement("li",null,r.a.createElement(P.b,{to:"/signup"},"Register")),t&&r.a.createElement("li",{onClick:this.logout},"Log out"))))))}}]),a}(r.a.Component);var F=Object(m.b)((function(e){return{auth:e.auth,results:e.search.results}}))(D),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.posts,a=e.friends,n=e.isLoggedin;return r.a.createElement("div",{className:"home"},r.a.createElement(A,{posts:t}),n&&r.a.createElement(ne,{friends:a}),n&&r.a.createElement(he,null))}}]),a}(n.Component);var M=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"404:Nothing found here!"))},G=a(36),H=a.n(G),B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleEmailChange=function(e){n.setState({email:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.email,r=t.password;a&&r&&n.props.dispatch(function(e,t){return function(a){a({type:"LOGIN_START"});var n=p();fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:j({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){if(console.log("data",e),e.success)return localStorage.setItem("token",e.data.token),void a((t=e.data.user,{type:"LOGIN_SUCCESS",user:t}));var t;a({type:"LOGIN_FAILED",error:e.message})}))}}(a,r)),console.log("this.state",n.state)},n.state={email:"",password:""},n}return Object(i.a)(a,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_AUTH_STATE"})}},{key:"render",value:function(){var e=this.props.auth,t=e.error,a=e.inProgress,n=e.isLoggedin;console.log("PROPS yo",this.props.location);var s=(this.props.location.state||{from:{pathname:"/"}}).from;return n?r.a.createElement(T.a,{to:s}):r.a.createElement("form",{className:"login-form"},r.a.createElement("span",{className:"login-signup-header"},"Log In"),t&&r.a.createElement("div",{className:"alert error-dailog"},t),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"email",placeholder:"Email",required:!0,onChange:this.handleEmailChange})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"password",placeholder:"password",required:!0,onChange:this.handlePasswordChange})),r.a.createElement("div",{className:"field"},a?r.a.createElement("button",{onClick:this.handleFormSubmit,disabled:a},"Logging In"):r.a.createElement("button",{onClick:this.handleFormSubmit},"Log In")))}}]),a}(n.Component);var z=Object(m.b)((function(e){return{auth:e.auth}}))(B),q=a(19),K=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e,t){n.setState(Object(q.a)({},e,t))},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.email,r=t.password,s=t.name,c=t.confirmPassword;a&&r&&s&&c&&(n.props.dispatch({type:"SIGNUP_START"}),n.props.dispatch(U(a,r,s,c))),console.log("this.state",n.state)},n.state={email:"",password:"",name:"",confirmPassword:""},n}return Object(i.a)(a,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_AUTH_STATE"})}},{key:"render",value:function(){var e=this,t=this.props.auth,a=t.error,n=t.inProgress;return t.isLoggedin?r.a.createElement(T.a,{to:"/"}):r.a.createElement("form",{className:"login-form"},r.a.createElement("span",{className:"login-signup-header"},"Sign Up"),a&&r.a.createElement("div",{className:"alert error-dailog"},a),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"text",placeholder:"Enter your name",required:!0,onChange:function(t){return e.handleInputChange("name",t.target.value)}})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"email",placeholder:"Enter your email",required:!0,onChange:function(t){return e.handleInputChange("email",t.target.value)}})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"password",placeholder:"password",required:!0,onChange:function(t){return e.handleInputChange("password",t.target.value)}})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"password",placeholder:"Confirm password",required:!0,onChange:function(t){return e.handleInputChange("confirmPassword",t.target.value)}})),n?r.a.createElement("div",{className:"field"},r.a.createElement("button",{disabled:n},"Sign Up")):r.a.createElement("div",{className:"field"},r.a.createElement("button",{onClick:this.handleFormSubmit},"Sign Up")))}}]),a}(n.Component);var W=Object(m.b)((function(e){return{auth:e.auth}}))(K),J=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState(Object(q.a)({},e,t))},n.handleSave=function(){var e=n.state,t=e.password,a=e.confirmPassword,r=e.name,s=n.props.auth.user;n.props.dispatch(function(e,t,a,n){return function(r){var s=h();fetch(s,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())},body:j({name:e,password:t,confirm_password:a,id:n})}).then((function(e){return e.json()})).then((function(e){if(console.log("Edit_Profile_Data",e),e.success)return e.data.token&&localStorage.setItem("token",e.data.token),void r((t=e.data.user,{type:"EDIT_USER_SUCCESSFUL",user:t}));var t;r({type:"EDIT_USER_FAILED",error:e.message})}))}}(r,t,a,s._id))},n.state={name:e.auth.user.name,password:"",confirmPassword:"",editMode:!1},n}return Object(i.a)(a,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_AUTH_STATE"})}},{key:"render",value:function(){var e=this,t=this.props.auth,a=t.user,n=t.error,s=this.state.editMode;return r.a.createElement("div",{className:"settings"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-dp",id:"user-dp"})),n&&r.a.createElement("div",{className:"alert error-dailog"},n),!1===n&&r.a.createElement("div",{className:"alert success-dailog"},"Successfully update Profile"),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Email"),r.a.createElement("div",{className:"field-value"},a.email)),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Name"),s?r.a.createElement("input",{type:"text",onChange:function(t){return e.handleChange("name",t.target.value)},value:this.state.name}):r.a.createElement("div",{className:"field-value"},a.name)),s&&r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"New password"),r.a.createElement("input",{type:"password",onChange:function(t){return e.handleChange("password",t.target.value)},value:this.state.password})),s&&r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Confirm password"),r.a.createElement("input",{type:"password",onChange:function(t){return e.handleChange("confirmPassword",t.target.value)},value:this.state.confirmPassword})),r.a.createElement("div",{className:"btn-grp"},s?r.a.createElement("button",{className:"button save-btn",onClick:this.handleSave},"Save"):r.a.createElement("button",{className:"button edit-btn",onClick:function(t){e.handleChange("editMode",!0)}},"Edit profile"),s&&r.a.createElement("div",{className:"go-back",onClick:function(t){e.handleChange("editMode",!1)}},"Go Back")))}}]),a}(n.Component);var V=Object(m.b)((function(e){return{auth:e.auth}}))(J),Q=a(22),X=a.n(Q),Y=a(40);function Z(e){return function(t){t({type:"FETCH_USER_PROFILE"});var a,n=E(e);fetch(n,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())}}).then((function(e){return e.json()})).then((function(e){console.log(e.data.user),t({type:"USER_PROFILE_SUCCESS",user:e.data.user})})),t({type:"USER_PROFILE_FAILURE",error:a})}}function $(e){return{type:"REMOVE_FRIEND",userId:e}}var ee=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).checkIfUserIsAFriend=function(){console.log("this.props",n.props);var e=n.props.props.match,t=n.props.friends,a=e.params.userId;return-1!==t.map((function(e){return e.to_user._id})).indexOf(a)},n.handleAddFriendClick=Object(Y.a)(X.a.mark((function e(){var t,a,r,s,c;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.props.match.params.userId,a=b(t,n.props.curr_user._id),r={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())}},e.next=5,fetch(a,r);case 5:return s=e.sent,e.next=8,s.json();case 8:c=e.sent,console.log(c),c.success?(n.setState({success:!0,successMessage:"Added Friend Successfully"}),n.props.dispatch({type:"ADD_FRIEND",friend:c.data.friendship})):n.setState({success:null,error:c.message});case 11:case"end":return e.stop()}}),e)}))),n.handleRemoveFriendClick=Object(Y.a)(X.a.mark((function e(){var t,a,r,s,c;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.props.match.params.userId,a=O(t),r={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())}},e.next=5,fetch(a,r);case 5:return s=e.sent,e.next=8,s.json();case 8:(c=e.sent).success?(n.setState({success:!0,successMessage:"Remove Friend Successfully"}),n.props.dispatch($(t))):n.setState({success:null,error:c.message});case 10:case"end":return e.stop()}}),e)}))),n.state={success:null,error:null,successMessage:null},n}return Object(i.a)(a,[{key:"componentWillMount",value:function(){console.log("user_id",this.props);var e=this.props.props.match;e.params.userId&&this.props.dispatch(Z(e.params.userId))}},{key:"componentDidUpdate",value:function(e){var t=e.props.match.params,a=this.props.props.match.params;t&&a&&t.userId!=a.userId&&this.props.dispatch(Z(a.userId))}},{key:"render",value:function(){var e=this.props.profile,t=this.state,a=t.success,n=t.error,s=t.successMessage,c=e.user,o=this.checkIfUserIsAFriend();return e.inProgress?r.a.createElement("h1",null,"Loading..."):(console.log("props_user",this.props.props.match.params),r.a.createElement("div",{className:"settings"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-dp",id:"user-dp"})),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Email"),r.a.createElement("div",{className:"field-value"},c.email)),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Name"),r.a.createElement("div",{className:"field-value"},c.name)),r.a.createElement("div",{className:"btn-grp"},o?r.a.createElement("button",{className:"button edit-btn",onClick:this.handleRemoveFriendClick},"Remove Friend"):r.a.createElement("button",{className:"button edit-btn",onClick:this.handleAddFriendClick},"Add Friend"),a&&r.a.createElement("div",{className:"alert sucess-dailog"},s),n&&r.a.createElement("div",{className:"alert error-dailog"},n))))}}]),a}(n.Component);var te=Object(m.b)((function(e){return{profile:e.profile,friends:e.friends,curr_user:e.auth.user}}))(ee);var ae=function(e){return r.a.createElement("div",null,r.a.createElement(P.b,{className:"friends-item",to:"user/".concat(e.friend._id)},r.a.createElement("div",{className:"friends-img"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-pic"})),r.a.createElement("div",{className:"friends-name"},e.friend.name)))},ne=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"friends-list"},r.a.createElement("div",{className:"header"},"Friends"),this.props.friends&&0===this.props.friends.length&&r.a.createElement("div",{className:"no-friends"},"No friends found!"),this.props.friends&&this.props.friends.map((function(e){return r.a.createElement(ae,{friend:e.to_user,key:e._id})})))}}]),a}(n.Component),re=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleOnClick=function(){var e,t;n.props.dispatch((e=n.state.content,t=n.props.user,function(a){var n=S();fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())},body:j({content:e,user:t})}).then((function(e){return e.json()})).then((function(e){console.log("Post_Data",e),e.success&&a({type:"ADD_POST",post:e.data.post})}))})),n.setState({content:""})},n.handleChange=function(e){n.setState({content:e.target.value})},n.state={content:""},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"create-post"},r.a.createElement("textarea",{className:"add-post",value:this.state.content,onChange:this.handleChange}),r.a.createElement("div",null,r.a.createElement("button",{id:"add-post-btn",onClick:this.handleOnClick},"Add Post")))}}]),a}(n.Component);var se=Object(m.b)((function(e){return{user:e.auth.user}}))(re),ce=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleKeyPress=function(e){var t=n.state.comment,a=n.props.post;"Enter"===e.key&&(n.props.dispatch(I(t,a._id,n.props.user)),n.setState({comment:""}))},n.handleChange=function(e){n.setState({comment:e.target.value})},n.handlePostLike=function(){var e=n.props,t=e.post,a=e.user;n.props.dispatch(k(t._id,"Post",a._id))},n.state={comment:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.post,a=e.user,n=(this.state.comment,t.likes.includes(a._id));return r.a.createElement("div",{className:"post-wrapper",key:t._id},r.a.createElement("div",{className:"post-header"},r.a.createElement("div",{className:"post-avatar"},r.a.createElement(P.b,{to:"/user/".concat(t.user._id)},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-pic"})),r.a.createElement("div",null,r.a.createElement("span",{className:"post-author"},t.user.name),r.a.createElement("span",{className:"post-time"},"a minute ago"))),r.a.createElement("div",{className:"post-content"},t.content),r.a.createElement("div",{className:"post-actions"},r.a.createElement("button",{className:"post-like no-btn",onClick:this.handlePostLike},n?r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1076/1076984.svg",alt:"likes-icon"}):r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1077/1077035.svg",alt:"likes-icon"}),r.a.createElement("span",null,t.likes.length)),r.a.createElement("div",{className:"post-comments-icon"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1380/1380338.svg",alt:"comments-icon"}),r.a.createElement("span",null,t.comments.length))),r.a.createElement("div",{className:"post-comment-box"},r.a.createElement("input",{placeholder:"Start typing a comment",value:this.state.comment,onChange:this.handleChange,onKeyPress:this.handleKeyPress})),r.a.createElement("div",{className:"post-comments-list"},t.comments.map((function(e){return r.a.createElement(ie,{comment:e,key:e._id,postId:t._id})})))))}}]),a}(n.Component);var oe=Object(m.b)((function(e){return{user:e.auth.user}}))(ce),ie=function(e){var t=e.comment;return r.a.createElement("div",{className:"post-comments-item"},r.a.createElement("div",{className:"post-comment-header"},r.a.createElement("span",{className:"post-comment-author"},t.user.name),r.a.createElement("span",{className:"post-comment-time"},"a minute ago"),r.a.createElement("span",{className:"post-comment-likes"},t.likes.length)),r.a.createElement("div",{className:"post-comment-content"},t.content))},le=a(15),ue=a(27),me=a(58),de=a.n(me),pe=(a(104),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setupConnections=function(){var e=n.socket,t=Object(ue.a)(n);n.socket.on("connect",(function(){console.log("CONNECTION_ESTABLISHED"),e.emit("join_room",{user_email:this.userEmail,chatroom:"codeial"}),e.on("user_joined",(function(e){console.log("NEW USER JOINED",e)}))})),n.socket.on("receive_message",(function(e){var a=t.state.messages,n={};n.content=e.message,e.user_email===t.userEmail&&(n.self=!0),t.setState({messages:[].concat(Object(le.a)(a),[n]),typedMessage:""})}))},n.handleSubmit=function(){var e=n.state.typedMessage;e&&n.userEmail&&n.socket.emit("send_message",{messages:e,user_email:n.userEmail,chatroom:"codeial"})},n.state={messages:[],typedMessage:""},n.socket=de.a.connect("http://54.237.158.65:5000"),n.userEmail=e.user.email,n.userEmail&&n.setupConnections(),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.typedMessage,n=t.messages;return r.a.createElement("div",{className:"chat-container"},r.a.createElement("div",{className:"chat-header"},"Chat",r.a.createElement("img",{src:"https://www.iconsdb.com/icons/preview/white/minus-5-xxl.png",alt:"hide-bar",height:17})),r.a.createElement("div",{className:"chat-messages"},n.map((function(e){return r.a.createElement("div",{className:e.self?"chat-bubble self-chat":"chat-bubble other-chat"},e.content)}))),r.a.createElement("div",{className:"chat-footer"},r.a.createElement("input",{type:"text",value:a,onChange:function(t){return e.setState({typedMessage:t.target.value})}}),r.a.createElement("button",{onClick:this.handleSubmit},"Submit")))}}]),a}(n.Component));var he=Object(m.b)((function(e){return{user:e.auth.user}}))(pe),fe=a(59),ve=function(e){var t=e.isLoggedin,a=e.path,n=e.component;return r.a.createElement(T.b,{path:a,render:function(e){return t?r.a.createElement(n,{props:e}):r.a.createElement(T.a,{to:{pathname:"/login",state:{from:e.location}}})}})},Ee=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(w());var e=y();if(e){var t=fe(e);this.props.dispatch(function(e){return{type:"AUTHENTICATE_USER",user:e}}({email:t.email,_id:t._id,name:t.name})),this.props.dispatch((function(e){var t=g();fetch(t,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())}}).then((function(e){return e.json()})).then((function(t){console.log("friends",t.data.friends),e({type:"FETCH_USER_FRIENDS",friends:t.data.friends})}))}))}}},{key:"render",value:function(){console.log("PROPS",this.props);var e=this.props,t=e.posts,a=e.auth,n=e.friends;return r.a.createElement(P.a,null,r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(T.d,null,r.a.createElement(T.b,{path:"/",exact:!0,render:function(e){return r.a.createElement(x,Object.assign({},e,{posts:t,friends:n,isLoggedin:a.isLoggedin}))}}),r.a.createElement(T.b,{path:"/login",component:z}),r.a.createElement(T.b,{path:"/signup",component:W}),r.a.createElement(ve,{path:"/setting",component:V,isLoggedin:a.isLoggedin}),r.a.createElement(ve,{path:"/user/:userId",component:te,isLoggedin:a.isLoggedin}),r.a.createElement(T.b,{component:M}))))}}]),a}(r.a.Component);var ge=Object(m.b)((function(e){return{posts:e.posts,auth:e.auth,friends:e.friends}}))(Ee),be=a(17),Oe=a(60),Se=a(1);a(107);var Ce={user:{},error:null,isLoggedin:!1,inProgress:!1};var Ne={user:{},inProgress:!1,success:null,error:null};var _e=[];var je={results:[]};var ye=Object(be.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_POSTS":return t.posts;case"ADD_POST":return[t.post].concat(Object(le.a)(e));case"ADD_COMMENT":var a=e.map((function(e){return e._id===t.postId?Object(Se.a)(Object(Se.a)({},e),{},{comments:[t.comment].concat(Object(le.a)(e.comments))}):e}));return a;case"ADD_LIKE":var n=e.map((function(e){return e._id===t.postId?Object(Se.a)(Object(Se.a)({},e),{},{likes:[].concat(Object(le.a)(e.likes),[t.userId])}):e}));return n;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_START":case"SIGNUP_START":return Object(Se.a)(Object(Se.a)({},e),{},{inProgress:!0});case"LOGIN_SUCCESS":case"SIGNUP_SUCCESS":return Object(Se.a)(Object(Se.a)({},e),{},{user:t.user,isLoggedin:!0,inProgress:!1,error:null});case"LOGIN_FAILED":case"SIGNUP_FAILED":return Object(Se.a)(Object(Se.a)({},e),{},{inProgress:!1,error:t.error});case"AUTHENTICATE_USER":return Object(Se.a)(Object(Se.a)({},e),{},{user:t.user,isLoggedin:!0});case"LOG_OUT":return Object(Se.a)(Object(Se.a)({},e),{},{user:{},isLoggedin:!1});case"CLEAR_AUTH_STATE":return Object(Se.a)(Object(Se.a)({},e),{},{error:null});case"EDIT_USER_SUCCESSFUL":return Object(Se.a)(Object(Se.a)({},e),{},{user:t.user,error:!1});case"EDIT_USER_FAILED":return Object(Se.a)(Object(Se.a)({},e),{},{error:t.error});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_PROFILE_SUCCESS":return Object(Se.a)(Object(Se.a)({},e),{},{user:t.user,success:!0,inProgress:!1});case"USER_PROFILE_FAILURE":return Object(Se.a)(Object(Se.a)({},e),{},{error:t.error,inProgress:!1});case"FETCH_USER_PROFILE":return Object(Se.a)(Object(Se.a)({},e),{},{inProgress:!0});default:return e}},friends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_FRIENDS":return Object(le.a)(t.friends);case"ADD_FRIEND":return e.concat(t.friend);case"REMOVE_FRIEND":var a=e.filter((function(e){return e.to_user._id!==t.userId}));return a;default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SEARCH_RESULTS_SUCCESS":return Object(Se.a)(Object(Se.a)({},e),{},{results:t.users});default:return e}}});var we=Object(be.d)(ye,Object(be.a)(Oe.a,H.a));console.log("state",we.getState()),c.a.render(r.a.createElement(m.a,{store:we},r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null))),document.getElementById("root"))},61:function(e,t,a){e.exports=a(110)},65:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.9c738eee.chunk.js.map