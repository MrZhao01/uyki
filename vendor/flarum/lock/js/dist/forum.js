(()=>{var o={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return o.d(n,{a:n}),n},d:(t,n)=>{for(var c in n)o.o(n,c)&&!o.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t);const n=flarum.core.compat["common/extend"],c=flarum.core.compat["forum/app"];var r=o.n(c);const e=flarum.core.compat["common/Model"];var s=o.n(e);const a=flarum.core.compat["common/models/Discussion"];var i=o.n(a);const u=flarum.core.compat["forum/components/NotificationGrid"];var l=o.n(u);function f(o,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},f(o,t)}function p(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,f(o,t)}const d=flarum.core.compat["forum/components/EventPost"];var k=function(o){function t(){return o.apply(this,arguments)||this}p(t,o);var n=t.prototype;return n.icon=function(){return this.attrs.post.content().locked?"fas fa-lock":"fas fa-unlock"},n.descriptionKey=function(){return this.attrs.post.content().locked?"flarum-lock.forum.post_stream.discussion_locked_text":"flarum-lock.forum.post_stream.discussion_unlocked_text"},t}(o.n(d)());const y=flarum.core.compat["forum/components/Notification"];var b=function(o){function t(){return o.apply(this,arguments)||this}p(t,o);var n=t.prototype;return n.icon=function(){return"fas fa-lock"},n.href=function(){var o=this.attrs.notification;return r().route.discussion(o.subject(),o.content().postNumber)},n.content=function(){return r().translator.trans("flarum-lock.forum.notifications.discussion_locked_text",{user:this.attrs.notification.fromUser()})},t}(o.n(y)());const _=flarum.core.compat["common/components/Badge"];var v=o.n(_);const h=flarum.core.compat["forum/utils/DiscussionControls"];var L=o.n(h);const g=flarum.core.compat["forum/components/DiscussionPage"];var O=o.n(g);const j=flarum.core.compat["common/components/Button"];var x=o.n(j);r().initializers.add("flarum-lock",(function(){r().postComponents.discussionLocked=k,r().notificationComponents.discussionLocked=b,i().prototype.isLocked=s().attribute("isLocked"),i().prototype.canLock=s().attribute("canLock"),(0,n.extend)(i().prototype,"badges",(function(o){this.isLocked()&&o.add("locked",v().component({type:"locked",label:r().translator.trans("flarum-lock.forum.badge.locked_tooltip"),icon:"fas fa-lock"}))})),(0,n.extend)(L(),"moderationControls",(function(o,t){t.canLock()&&o.add("lock",x().component({icon:"fas fa-lock",onclick:this.lockAction.bind(t)},r().translator.trans(t.isLocked()?"flarum-lock.forum.discussion_controls.unlock_button":"flarum-lock.forum.discussion_controls.lock_button")))})),L().lockAction=function(){this.save({isLocked:!this.isLocked()}).then((function(){r().current.matches(O())&&r().current.get("stream").update(),m.redraw()}))},(0,n.extend)(l().prototype,"notificationTypes",(function(o){o.add("discussionLocked",{name:"discussionLocked",icon:"fas fa-lock",label:r().translator.trans("flarum-lock.forum.settings.notify_discussion_locked_label")})}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map