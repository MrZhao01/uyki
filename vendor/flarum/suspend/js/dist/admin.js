(()=>{var e={n:r=>{var a=r&&r.__esModule?()=>r.default:()=>r;return e.d(a,{a}),a},d:(r,a)=>{for(var o in a)e.o(a,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:a[o]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};(()=>{"use strict";e.r(r);const a=flarum.core.compat.app;var o=e.n(a);o().initializers.add("flarum-suspend",(function(){o().extensionData.for("flarum-suspend").registerPermission({icon:"fas fa-ban",label:o().translator.trans("flarum-suspend.admin.permissions.suspend_users_label"),permission:"user.suspend"},"moderate")}))})(),module.exports=r})();
//# sourceMappingURL=admin.js.map