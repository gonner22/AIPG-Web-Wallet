var MPW;(()=>{var e,r,t,n,o={95856:()=>{},27355:(e,r,t)=>{"use strict";const n=10**8,o=(0,t(2262).qj)({current:null,main:{name:"mainnet",collateralInSats:1e4*n,isTestnet:!1,TICKER:"AIPG",PUBKEY_PREFIX:["A"],STAKING_PREFIX:"A",PUBKEY_ADDRESS:23,STAKING_ADDRESS:23,SECRET_KEY:128,BIP44_TYPE:2686,BIP44_TYPE_LEDGER:77,PROTOCOL_VERSION:70926,MASTERNODE_PORT:8865,Explorers:[{name:"AIPG-blockbook",url:"https://blockbook.aipowergrid.io"}],Nodes:[{name:"AIPG-US",url:"https://us-seed1.aipowergrid.io"},{name:"AIPG-Japan",url:"https://jp-seed2.aipowergrid.io"},{name:"AIPG-Australia",url:"https://au-seed3.aipowergrid.io"},{name:"AIPG-Europe",url:"https://eu-seed4.aipowergrid.io"},{name:"AIPG-India",url:"https://in-seed4.aipowergrid.io"}],Consensus:{UPGRADE_V6_0:void 0},coinbaseMaturity:100,budgetCycleBlocks:43200,proposalFee:50*n,proposalFeeConfirmRequirement:6,maxPaymentCycles:6,maxPayment:432e3*n,defaultColdStakingAddress:"AdgQDpS8jDRJDX8yK8m9KnTMarsE84zdsy"},testnet:{name:"testnet",collateralInSats:1e4*n,isTestnet:!0,TICKER:"tAIPG",PUBKEY_PREFIX:["a","a"],STAKING_PREFIX:"a",PUBKEY_ADDRESS:23,STAKING_ADDRESS:23,SECRET_KEY:239,BIP44_TYPE:1,BIP44_TYPE_LEDGER:1,PROTOCOL_VERSION:70926,MASTERNODE_PORT:18865,Explorers:[{name:"AIPG-blockbook",url:"https://blockbook.aipowergrid.io"}],Nodes:[{name:"AIPG-TestNode1",url:"seed1-testnet.aipowergrid.io"},{name:"AIPG-TestNode2",url:"seed2-testnet.aipowergrid.io"}],Consensus:{UPGRADE_V6_0:void 0},coinbaseMaturity:15,budgetCycleBlocks:144,proposalFee:50*n,proposalFeeConfirmRequirement:3,maxPaymentCycles:20,maxPayment:1440*n,defaultColdStakingAddress:"amNziUEPyhnUkiVdfsiNX93H6rSJnios44"}});o.current=o.main;var i=t(17748),a=t(48764);function s(e){return a.Buffer.from(e).toString("hex")}function l(e=32){return crypto.getRandomValues(new Uint8Array(e))}function u(e,r,t){const n=e.length;if(n-t-r.length<0){const e="CRITICAL: Overflow detected ("+(n-t-r.length)+"), possible state corruption, backup and refresh advised.";throw new Error(e)}let o=0;for(;t<n;)e[t++]=r[o++]}var p=t(27760),c=t(72697),f=t(77191);function d({pkBytes:e,publicKey:r,output:t="ENCODED"}){if(!e&&!r)return null;const n="UNCOMPRESSED_HEX"!==t;let l=r?(d=r,a.Buffer.from(d,"hex")):p.$3(e,n);var d;if("UNCOMPRESSED_HEX"===t){if(65!==l.length)throw new Error("Can't uncompress an already compressed key");return s(l)}if(65===l.length&&(l=function(e){if(65!=e.length)throw new Error("Attempting to compress an invalid uncompressed key");const r=e.slice(1,33);return[e.slice(33)[31]%2==0?2:3,...r]}(l)),33!=l.length)throw new Error("Invalid public key");if("COMPRESSED_HEX"===t)return s(l);const E=(0,i.J)(new Uint8Array(l)),m=(0,c.b)(E),P=new Uint8Array(21);var g;P[0]=o.current.PUBKEY_ADDRESS,u(P,m,1);const y=(g=P,(0,i.J)((0,i.J)(new Uint8Array(g)))).slice(0,4),h=new Uint8Array(25);return u(h,P,0),u(h,y,21),f.encode(h)}onmessage=e=>{for(;;){o.current=o["mainnet"===e.data?"main":"testnet"];const r={};r.priv=l(),r.pub=d({pkBytes:r.priv}),postMessage(r)}}}},i={};function a(e){var r=i[e];if(void 0!==r)return r.exports;var t=i[e]={exports:{}};return o[e](t,t.exports,a),t.exports}a.m=o,a.x=()=>{var e=a.O(void 0,[812,776],(()=>a(27355)));return a.O(e)},e=[],a.O=(r,t,n,o)=>{if(!t){var i=1/0;for(p=0;p<e.length;p++){for(var[t,n,o]=e[p],s=!0,l=0;l<t.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](t[l])))?t.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(p--,1);var u=n();void 0!==u&&(r=u)}}return r}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[t,n,o]},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var i={};r=r||[null,t({}),t([]),t(t)];for(var s=2&n&&e;"object"==typeof s&&!~r.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((r=>i[r]=()=>e[r]));return i.default=()=>e,a.d(o,i),o},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((r,t)=>(a.f[t](e,r),r)),[])),a.u=e=>"./"+e+".mpw.js",a.miniCssF=e=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var r=a.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={102:1};a.f.i=(r,t)=>{e[r]||importScripts(a.p+a.u(r))};var r=self.webpackChunkMPW=self.webpackChunkMPW||[],t=r.push.bind(r);r.push=r=>{var[n,o,i]=r;for(var s in o)a.o(o,s)&&(a.m[s]=o[s]);for(i&&i(a);n.length;)e[n.pop()]=1;t(r)}})(),n=a.x,a.x=()=>Promise.all([a.e(812),a.e(776)]).then(n);var s=a.x();MPW=s})();
//# sourceMappingURL=102.mpw.js.map