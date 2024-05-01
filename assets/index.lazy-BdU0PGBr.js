var Qt=Object.defineProperty;var Xt=(e,t,n)=>t in e?Qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var s=(e,t,n)=>(Xt(e,typeof t!="symbol"?t+"":t,n),n);import{Y as Zt,i as he,a as Ge,b as Kt,d as Ve,e as en,f as Qe,h as _t,g as tn,k as v,l as nn,s as Xe,m as Ze,O as et,o as be,n as Ne,p as Pe,q as rn,r as on,t as sn,u as $e,v as tt,w as an,x as xt,y as it,z as kt,A as M,B as fe,C as ct,D as Et,E as cn,F as ye,G as ln,H as nt,I as F,N as un,J as lt,K as Le,L as V,M as xe,_ as U,P as se,Q as T,R as B,S as ke,T as fn,U as Nt,V as yn,W as Pt,X as De,Z as hn,$ as gn,a0 as pn,a1 as ut,a2 as Rt,a3 as dn,a4 as At,a5 as mn,a6 as ft,a7 as wn,a8 as ge,a9 as Sn,j as P,aa as bn,c as On}from"./index-BOr8HGaZ.js";const Tn=function(){return class extends Zt{constructor(t){super(),t&&Object.assign(this,t)}}}(),Kn=e=>{class t extends Tn{constructor(){super(...arguments);s(this,"_tag",e)}}return t.prototype.name=e,t},It=(e,t)=>{switch(t._tag){case"StringKeyword":case"TemplateLiteral":return Object.keys(e);case"SymbolKeyword":return Object.getOwnPropertySymbols(e);case"Refinement":return It(e,t.from)}},Oe=e=>Object.keys(e).concat(Object.getOwnPropertySymbols(e)),$t=e=>{let t=!1,n;return()=>(t||(n=e(),t=!0),n)},Z=e=>{if(he(e))return JSON.stringify(e);if(Ge(e)||e==null||Kt(e)||Ve(e)||en(e))return String(e);if(Qe(e))return String(e)+"n";if(!Array.isArray(e)&&_t(e,"toString")&&tn(e.toString)&&e.toString!==Object.prototype.toString)return e.toString();try{return JSON.stringify(e),Array.isArray(e)?`[${e.map(Z).join(",")}]`:`{${Oe(e).map(t=>`${he(t)?JSON.stringify(t):String(t)}:${Z(e[t])}`).join(",")}}`}catch{return String(e)}},_n=e=>`Duplicate property signature ${Z(e)}`,yt=e=>`Duplicate index signature for type \`${e}\``,xn="An index signature parameter type must be `string`, `symbol`, a template literal type or a refinement of the previous types",kn="A required element cannot follow an optional element. ts(1257)",ht=e=>`Duplicate property signature transformation ${Z(e)}`,gt=(e,t)=>`${e}: ${t}`,pt=Symbol.for("@effect/schema/annotation/Type"),jt=Symbol.for("@effect/schema/annotation/Message"),Ut=Symbol.for("@effect/schema/annotation/Identifier"),re=Symbol.for("@effect/schema/annotation/Title"),rt=Symbol.for("@effect/schema/annotation/Description"),En=Symbol.for("@effect/schema/annotation/Examples"),Nn=Symbol.for("@effect/schema/annotation/Default"),Pn=Symbol.for("@effect/schema/annotation/JSONSchema"),Rn=Symbol.for("@effect/schema/annotation/Documentation"),Jt=Symbol.for("@effect/schema/annotation/Concurrency"),Mt=Symbol.for("@effect/schema/annotation/Batching"),An=Symbol.for("@effect/schema/annotation/Surrogate"),Lt=Symbol.for("@effect/schema/annotation/ParseIssueTitle"),ee=$e(2,(e,t)=>Object.prototype.hasOwnProperty.call(e.annotations,t)?Pe(e.annotations[t]):tt()),In=ee(jt),dt=ee(re),Ye=ee(Ut),mt=ee(rt),$n=ee(Jt),jn=ee(Mt),Un=ee(Lt),Jn=ee(An),Dt=Symbol.for("@effect/schema/annotation/JSONIdentifier"),Mn=ee(Dt);let vt=class{constructor(t,n,r,o={}){s(this,"typeParameters");s(this,"decodeUnknown");s(this,"encodeUnknown");s(this,"annotations");s(this,"_tag","Declaration");this.typeParameters=t,this.decodeUnknown=n,this.encodeUnknown=r,this.annotations=o}toString(t=!1){return v(C(this,t),()=>"<declaration schema>")}toJSON(){return{_tag:this._tag,typeParameters:this.typeParameters.map(t=>t.toJSON()),annotations:$(this.annotations)}}};const Ke=e=>t=>t._tag===e;class wt{constructor(t,n={}){s(this,"literal");s(this,"annotations");s(this,"_tag","Literal");this.literal=t,this.annotations=n}toString(t=!1){return v(C(this,t),()=>Z(this.literal))}toJSON(){return{_tag:this._tag,literal:Qe(this.literal)?String(this.literal):this.literal,annotations:$(this.annotations)}}}const Ln=Ke("Literal");class Dn{constructor(t,n={}){s(this,"symbol");s(this,"annotations");s(this,"_tag","UniqueSymbol");this.symbol=t,this.annotations=n}toString(t=!1){return v(C(this,t),()=>Z(this.symbol))}toJSON(){return{_tag:this._tag,symbol:String(this.symbol),annotations:$(this.annotations)}}}class vn{constructor(t={}){s(this,"annotations");s(this,"_tag","NeverKeyword");this.annotations=t}toString(t=!1){return Je(this,t)}toJSON(){return{_tag:this._tag,annotations:$(this.annotations)}}}const Re=new vn({[re]:"never"});class Bn{constructor(t={}){s(this,"annotations");s(this,"_tag","UnknownKeyword");this.annotations=t}toString(t=!1){return Je(this,t)}toJSON(){return{_tag:this._tag,annotations:$(this.annotations)}}}const qn=new Bn({[re]:"unknown"});class Fn{constructor(t={}){s(this,"annotations");s(this,"_tag","AnyKeyword");this.annotations=t}toString(t=!1){return Je(this,t)}toJSON(){return{_tag:this._tag,annotations:$(this.annotations)}}}const Cn=new Fn({[re]:"any"});class Hn{constructor(t={}){s(this,"annotations");s(this,"_tag","StringKeyword");this.annotations=t}toString(t=!1){return Je(this,t)}toJSON(){return{_tag:this._tag,annotations:$(this.annotations)}}}const Wn=new Hn({[re]:"string",[rt]:"a string"}),Bt=Ke("StringKeyword"),Vn=Ke("NumberKeyword"),Yn=Ke("SymbolKeyword");class qt{constructor(t,n){s(this,"type");s(this,"isOptional");this.type=t,this.isOptional=n}toJSON(){return{type:this.type.toJSON(),isOptional:this.isOptional}}toString(){return String(this.type)+(this.isOptional?"?":"")}}let Ft=class{constructor(t,n,r,o={}){s(this,"elements");s(this,"rest");s(this,"isReadonly");s(this,"annotations");s(this,"_tag","TupleType");this.elements=t,this.rest=n,this.isReadonly=r,this.annotations=o;let a=!1,l=!1;for(const d of t)if(d.isOptional)a=!0;else if(a){l=!0;break}if(l||a&&n.length>1)throw new Error(kn)}toString(t=!1){return v(C(this,t),()=>zn(this))}toJSON(){return{_tag:this._tag,elements:this.elements.map(t=>t.toJSON()),rest:this.rest.map(t=>t.toJSON()),isReadonly:this.isReadonly,annotations:$(this.annotations)}}};const zn=e=>{const t=e.elements.map(String).join(", ");return rn(e.rest,{onEmpty:()=>`readonly [${t}]`,onNonEmpty:(n,r)=>{const o=String(n),a=o.includes(" | ")?`(${o})`:o;if(r.length>0){const l=r.map(String).join(", ");return e.elements.length>0?`readonly [${t}, ...${a}[], ${l}]`:`readonly [...${a}[], ${l}]`}else return e.elements.length>0?`readonly [${t}, ...${a}[]]`:`ReadonlyArray<${o}>`}})};class A{constructor(t,n,r,o,a={}){s(this,"name");s(this,"type");s(this,"isOptional");s(this,"isReadonly");s(this,"annotations");this.name=t,this.type=n,this.isOptional=r,this.isReadonly=o,this.annotations=a}toJSON(){return{name:String(this.name),type:this.type.toJSON(),isOptional:this.isOptional,isReadonly:this.isReadonly,annotations:$(this.annotations)}}}const Ct=e=>{switch(e._tag){case"StringKeyword":case"SymbolKeyword":case"TemplateLiteral":return!0;case"Refinement":return Ct(e.from)}return!1};class je{constructor(t,n,r){s(this,"type");s(this,"isReadonly");s(this,"parameter");if(this.type=n,this.isReadonly=r,Ct(t))this.parameter=t;else throw new Error(xn)}toJSON(){return{parameter:this.parameter.toJSON(),type:this.type.toJSON(),isReadonly:this.isReadonly}}}let ae=class{constructor(t,n,r={}){s(this,"annotations");s(this,"_tag","TypeLiteral");s(this,"propertySignatures");s(this,"indexSignatures");this.annotations=r;const o={};for(let l=0;l<t.length;l++){const d=t[l].name;if(Object.prototype.hasOwnProperty.call(o,d))throw new Error(_n(d));o[d]=null}const a={string:!1,symbol:!1};for(let l=0;l<n.length;l++){const d=Ue(n[l].parameter);if(Bt(d)){if(a.string)throw new Error(yt("string"));a.string=!0}else if(Yn(d)){if(a.symbol)throw new Error(yt("symbol"));a.symbol=!0}}this.propertySignatures=yr(t),this.indexSignatures=hr(n)}toString(t=!1){return v(C(this,t),()=>Gn(this))}toJSON(){return{_tag:this._tag,propertySignatures:this.propertySignatures.map(t=>t.toJSON()),indexSignatures:this.indexSignatures.map(t=>t.toJSON()),annotations:$(this.annotations)}}};const Gn=e=>{const t=e.propertySignatures.map(n=>String(n.name)+(n.isOptional?"?":"")+": "+n.type).join("; ");if(e.indexSignatures.length>0){const n=e.indexSignatures.map(r=>`[x: ${Ue(r.parameter)}]: ${r.type}`).join("; ");return e.propertySignatures.length>0?`{ ${t}; ${n} }`:`{ ${n} }`}else return e.propertySignatures.length>0?`{ ${t} }`:"{}"},Qn=e=>e.filter(t=>t!==Re),Xn=Xe(Ze(et,e=>{switch(e._tag){case"AnyKeyword":return 0;case"UnknownKeyword":return 1;case"ObjectKeyword":return 2;case"StringKeyword":case"NumberKeyword":case"BooleanKeyword":case"BigIntKeyword":case"SymbolKeyword":return 3}return 4})),Zn={string:"StringKeyword",number:"NumberKeyword",boolean:"BooleanKeyword",bigint:"BigIntKeyword"},Ht=e=>an(e,t=>nr(t)?Ht(t.types):[t]),er=e=>{const t=Xn(e),n=[],r={},o=[];for(const a of t)switch(a._tag){case"NeverKeyword":break;case"AnyKeyword":return[Cn];case"UnknownKeyword":return[qn];case"ObjectKeyword":case"UndefinedKeyword":case"VoidKeyword":case"StringKeyword":case"NumberKeyword":case"BooleanKeyword":case"BigIntKeyword":case"SymbolKeyword":{r[a._tag]||(r[a._tag]=a,n.push(a));break}case"Literal":{const l=typeof a.literal;switch(l){case"string":case"number":case"bigint":case"boolean":{const d=Zn[l];!r[d]&&!o.includes(a.literal)&&(o.push(a.literal),n.push(a));break}case"object":{o.includes(a.literal)||(o.push(a.literal),n.push(a));break}}break}case"UniqueSymbol":{!r.SymbolKeyword&&!o.includes(a.symbol)&&(o.push(a.symbol),n.push(a));break}case"TupleType":{r.ObjectKeyword||n.push(a);break}case"TypeLiteral":{a.propertySignatures.length===0&&a.indexSignatures.length===0?r["{}"]||(r["{}"]=a,n.push(a)):r.ObjectKeyword||n.push(a);break}default:n.push(a)}return n};var D;let ue=(D=class{constructor(t,n={}){s(this,"types");s(this,"annotations");s(this,"_tag","Union");this.types=t,this.annotations=n}toString(t=!1){return v(C(this,t),()=>this.types.map(String).join(" | "))}toJSON(){return{_tag:this._tag,types:this.types.map(t=>t.toJSON()),annotations:$(this.annotations)}}},s(D,"make",(t,n)=>{const r=[],o=new Set;for(let a=0;a<t.length;a++){const l=t[a];l===Re||o.has(l)||(o.add(l),r.push(l))}return D.union(r,n)}),s(D,"members",(t,n)=>D.union(Qn(t),n)),s(D,"unify",(t,n)=>D.union(er(Ht(t)),n)),s(D,"union",(t,n)=>tr(t)?new D(t,n):t.length===1?t[0]:Re),D);const tr=e=>e.length>1,nr=Ke("Union"),ve=xt(Symbol.for("@effect/schema/AST/toJSONMemoMap"),()=>new WeakMap);class Wt{constructor(t,n={}){s(this,"f");s(this,"annotations");s(this,"_tag","Suspend");this.f=t,this.annotations=n,this.f=$t(t)}toString(t=!1){return C(this,t).pipe(be(()=>on(sn(this.f)(),n=>C(n,t))),v(()=>"<suspended schema>"))}toJSON(){const t=this.f();let n=ve.get(t);return n||(ve.set(t,{_tag:this._tag}),n={_tag:this._tag,ast:t.toJSON(),annotations:$(this.annotations)},ve.set(t,n),n)}}let rr=class{constructor(t,n,r={}){s(this,"from");s(this,"filter");s(this,"annotations");s(this,"_tag","Refinement");this.from=t,this.filter=n,this.annotations=r}toString(t=!1){return v(C(this,t),()=>"<refinement schema>")}toJSON(){return{_tag:this._tag,from:this.from.toJSON(),annotations:$(this.annotations)}}};const Be={};let or=class{constructor(t,n,r,o={}){s(this,"from");s(this,"to");s(this,"transformation");s(this,"annotations");s(this,"_tag","Transformation");this.from=t,this.to=n,this.transformation=r,this.annotations=o}toString(t=!1){return v(C(this,t),()=>`(${String(this.from)} <-> ${String(this.to)})`)}toJSON(){return{_tag:this._tag,from:this.from.toJSON(),to:this.to.toJSON(),annotations:$(this.annotations)}}};class sr{constructor(t,n,r,o){s(this,"from");s(this,"to");s(this,"decode");s(this,"encode");this.from=t,this.to=n,this.decode=r,this.encode=o}}class ar{constructor(t){s(this,"propertySignatureTransformations");s(this,"_tag","TypeLiteralTransformation");this.propertySignatureTransformations=t;const n={},r={};for(const o of t){const a=o.from;if(n[a])throw new Error(ht(a));n[a]=!0;const l=o.to;if(r[l])throw new Error(ht(l));r[l]=!0}}}const ot=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e);return n.annotations.value={...e.annotations,...t},Object.create(Object.getPrototypeOf(e),n)},ir=".*",cr="[+-]?\\d*\\.?\\d+(?:[Ee][+-]?\\d+)?",lr=e=>{let t=`^${it(e.head)}`;for(const n of e.spans)Bt(n.type)?t+=ir:Vn(n.type)&&(t+=cr),t+=it(n.literal);return t+="$",new RegExp(t)},St=(e,t)=>{const n=[],r=[],o=a=>{switch(a._tag){case"NeverKeyword":break;case"StringKeyword":case"SymbolKeyword":case"TemplateLiteral":case"Refinement":r.push(new je(a,t,!0));break;case"Literal":if(he(a.literal)||Ge(a.literal))n.push(new A(a.literal,t,!1,!0));else throw new Error(gt("Record",`unsupported literal (${Z(a.literal)})`));break;case"UniqueSymbol":n.push(new A(a.symbol,t,!1,!0));break;case"Union":a.types.forEach(o);break;default:throw new Error(gt("Record",`unsupported key schema (${a})`))}};return o(e),{propertySignatures:n,indexSignatures:r}},j=e=>{switch(e._tag){case"Declaration":{const t=L(e.typeParameters,j);return t===e.typeParameters?e:new vt(t,e.decodeUnknown,e.encodeUnknown,e.annotations)}case"TupleType":{const t=L(e.elements,r=>{const o=j(r.type);return o===r.type?r:new qt(o,r.isOptional)}),n=L(e.rest,j);return t===e.elements&&n===e.rest?e:new Ft(t,n,e.isReadonly,e.annotations)}case"TypeLiteral":{const t=L(e.propertySignatures,r=>{const o=j(r.type);return o===r.type?r:new A(r.name,o,r.isOptional,r.isReadonly)}),n=L(e.indexSignatures,r=>{const o=j(r.type);return o===r.type?r:new je(r.parameter,o,r.isReadonly)});return t===e.propertySignatures&&n===e.indexSignatures?e:new ae(t,n,e.annotations)}case"Union":{const t=L(e.types,j);return t===e.types?e:ue.make(t,e.annotations)}case"Suspend":return new Wt(()=>j(e.f()),e.annotations);case"Refinement":{const t=j(e.from);return t===e.from?e:new rr(t,e.filter,e.annotations)}case"Transformation":return j(e.to)}return e},ur=e=>be(Mn(e),()=>Ye(e)),Ee=e=>Ne(ur(e),{onNone:()=>{},onSome:t=>({[Dt]:t})});function L(e,t){let n=!1;const r=nn(e.length);for(let o=0;o<e.length;o++){const a=e[o],l=t(a);l!==a&&(n=!0),r[o]=l}return n?r:e}const G=e=>{switch(e._tag){case"Declaration":{const t=L(e.typeParameters,G);return t===e.typeParameters?e:new vt(t,e.decodeUnknown,e.encodeUnknown,e.annotations)}case"TupleType":{const t=L(e.elements,r=>{const o=G(r.type);return o===r.type?r:new qt(o,r.isOptional)}),n=L(e.rest,G);return t===e.elements&&n===e.rest?e:new Ft(t,n,e.isReadonly,Ee(e))}case"TypeLiteral":{const t=L(e.propertySignatures,r=>{const o=G(r.type);return o===r.type?r:new A(r.name,o,r.isOptional,r.isReadonly)}),n=L(e.indexSignatures,r=>{const o=G(r.type);return o===r.type?r:new je(r.parameter,o,r.isReadonly)});return t===e.propertySignatures&&n===e.indexSignatures?e:new ae(t,n,Ee(e))}case"Union":{const t=L(e.types,G);return t===e.types?e:ue.make(t,Ee(e))}case"Suspend":return new Wt(()=>G(e.f()),Ee(e));case"Refinement":case"Transformation":return G(e.from)}return e},$=e=>{const t={};for(const n of Object.getOwnPropertySymbols(e))t[String(n)]=e[n];return t},fr=e=>{switch(e._tag){case"NeverKeyword":return 0;case"Literal":case"UndefinedKeyword":case"VoidKeyword":case"UniqueSymbol":return 1;case"BooleanKeyword":return 2;case"StringKeyword":case"NumberKeyword":case"BigIntKeyword":case"SymbolKeyword":return 3;case"ObjectKeyword":return 5;case"UnknownKeyword":case"AnyKeyword":return 6;default:return 4}},yr=Xe(Ze(et,e=>fr(e.type))),hr=Xe(Ze(et,e=>{switch(Ue(e.parameter)._tag){case"StringKeyword":return 2;case"SymbolKeyword":return 3;case"TemplateLiteral":return 1}})),Ue=e=>{switch(e._tag){case"StringKeyword":case"SymbolKeyword":case"TemplateLiteral":return e;case"Refinement":return Ue(e.from)}},Je=(e,t=!1)=>v(C(e,t),()=>e._tag),C=(e,t)=>{if(t){const n=mt(e).pipe(be(()=>dt(e)));return Ne(Ye(e),{onNone:()=>n,onSome:r=>Ne(n,{onNone:()=>Pe(r),onSome:o=>Pe(`${r} (${o})`)})})}else return Ye(e).pipe(be(()=>dt(e)),be(()=>mt(e)))},gr=Symbol.for("@effect/schema/ArbitraryHookId"),N=(e,t=[])=>({value:e,forest:t}),pr=e=>M(Q(e),t=>mr(t)),dr=e=>kt(pr(e)),mr=e=>e.value+Vt(`
`,e.forest),Vt=(e,t)=>{let n="";const r=t.length;let o;for(let a=0;a<r;a++){o=t[a];const l=a===r-1;n+=e+(l?"└":"├")+"─ "+o.value,n+=Vt(e+(r>1&&!l?"│  ":"   "),o.forest)}return n},wr=e=>{switch(e){case"Encoded":return"Encoded side transformation failure";case"Transformation":return"Transformation process failure";case"Type":return"Type side transformation failure"}},Sr=e=>{switch(e){case"From":return"From side refinement failure";case"Predicate":return"Predicate refinement failure"}},br=e=>{switch(e._tag){case"Refinement":{if(e.kind==="From")return Ae(e.error);break}case"Transformation":return Ae(e.error)}return tt()},Or=e=>In(e.ast).pipe(F(t=>{const n=t(e);return he(n)?fe(n):n})),Ae=e=>Et(br(e),()=>Or(e)),Yt=e=>ln(Un(e.ast),t=>nt(t(e))),Tr=e=>Ae(e).pipe(ct(()=>Yt(e)),ct(()=>e.message),Et(()=>fe(`Expected ${e.ast.toString(!0)}, actual ${Z(e.actual)}`))),oe=e=>v(Yt(e),()=>String(e.ast)),Kr=e=>v(e.message,()=>"is forbidden"),ce=(e,t)=>cn(Ae(e),{onFailure:t,onSuccess:n=>fe(N(n))}),Q=e=>{switch(e._tag){case"Type":return M(Tr(e),N);case"Forbidden":return fe(N(oe(e),[N(Kr(e))]));case"Unexpected":return fe(N(`is unexpected, expected ${e.ast.toString(!0)}`));case"Missing":return fe(N("is missing"));case"Union":return ce(e,()=>M(ye(e.errors,t=>{switch(t._tag){case"Member":return M(Q(t.error),n=>N("Union member",[n]));default:return Q(t)}}),t=>N(oe(e),t)));case"TupleType":return ce(e,()=>M(ye(e.errors,t=>M(Q(t.error),n=>N(`[${t.index}]`,[n]))),t=>N(oe(e),t)));case"TypeLiteral":return ce(e,()=>M(ye(e.errors,t=>M(Q(t.error),n=>N(`[${Z(t.key)}]`,[n]))),t=>N(oe(e),t)));case"Transformation":return ce(e,()=>M(Q(e.error),t=>N(oe(e),[N(wr(e.kind),[t])])));case"Refinement":return ce(e,()=>M(Q(e.error),t=>N(oe(e),[N(Sr(e.kind),[t])])));case"Declaration":return ce(e,()=>{const t=e.error;return t._tag==="Type"&&t.ast===e.ast?Q(t):M(Q(t),r=>N(oe(e),[r]))})}};class _r{constructor(t,n,r){s(this,"ast");s(this,"actual");s(this,"error");s(this,"_tag","Declaration");this.ast=t,this.actual=n,this.error=r}}class bt{constructor(t,n,r,o){s(this,"ast");s(this,"actual");s(this,"kind");s(this,"error");s(this,"_tag","Refinement");this.ast=t,this.actual=n,this.kind=r,this.error=o}}class Y{constructor(t,n,r,o=[]){s(this,"ast");s(this,"actual");s(this,"errors");s(this,"output");s(this,"_tag","TupleType");this.ast=t,this.actual=n,this.errors=r,this.output=o}}let te=class{constructor(t,n){s(this,"index");s(this,"error");s(this,"_tag","Index");this.index=t,this.error=n}};class z{constructor(t,n,r,o={}){s(this,"ast");s(this,"actual");s(this,"errors");s(this,"output");s(this,"_tag","TypeLiteral");this.ast=t,this.actual=n,this.errors=r,this.output=o}}class ne{constructor(t,n){s(this,"key");s(this,"error");s(this,"_tag","Key");this.key=t,this.error=n}}class Ot{constructor(t){s(this,"ast");s(this,"_tag","Unexpected");this.ast=t}}class qe{constructor(t,n,r,o){s(this,"ast");s(this,"actual");s(this,"kind");s(this,"error");s(this,"_tag","Transformation");this.ast=t,this.actual=n,this.kind=r,this.error=o}}class le{constructor(t,n,r){s(this,"ast");s(this,"actual");s(this,"_tag","Type");s(this,"message");this.ast=t,this.actual=n,this.message=nt(r)}}class xr{constructor(t,n,r){s(this,"ast");s(this,"actual");s(this,"_tag","Forbidden");s(this,"message");this.ast=t,this.actual=n,this.message=nt(r)}}class kr{constructor(){s(this,"_tag","Missing")}}const me=new kr;class Tt{constructor(t,n){s(this,"ast");s(this,"error");s(this,"_tag","Member");this.ast=t,this.error=n}}class Er{constructor(t,n,r){s(this,"ast");s(this,"actual");s(this,"errors");s(this,"_tag","Union");this.ast=t,this.actual=n,this.errors=r}}class Nr extends Kn("ParseError"){get message(){return this.toString()}toString(){return dr(this.error)}toJSON(){return{_id:"ParseError",message:this.toString()}}[un](){return this.toJSON()}}const Pr=e=>new Nr({error:e}),Fe=$e(2,(e,t)=>{const n=e;return n._tag==="Left"?n:n._tag==="Right"?t(n.right):F(e,t)}),Rr=$e(2,(e,t)=>{const n=e;return n._tag==="Left"?n:n._tag==="Right"?V(t(n.right)):M(e,t)}),we=$e(2,(e,t)=>{const n=e;return n._tag==="Left"?T(t(n.left)):n._tag==="Right"?n:yn(e,t)}),X=e=>{const t=e;if(t._tag==="Left"||t._tag==="Right")return t},Ar=(e,t)=>{if(e===void 0)return t;if(t===void 0)return e;const n={};return n.errors=t.errors??e.errors,n.onExcessProperty=t.onExcessProperty??e.onExcessProperty,n},Ir=(e,t,n)=>{const r=J(e);return(o,a)=>r(o,Ar(n,a))},$r=(e,t)=>Ir(e.ast,!0,t),jr=xt(Symbol.for("@effect/schema/Parser/decodeMemoMap"),()=>new WeakMap),J=(e,t)=>{const n=jr,r=n.get(e);if(r)return r;const o=Ur(e);return n.set(e,o),o},Ce=e=>Pt($n(e)),He=e=>Pt(jn(e)),Ur=(e,t)=>{switch(e._tag){case"Refinement":{const n=J(e.from);return(r,o)=>We(Fe(we(n(r,o),a=>new bt(e,r,"From",a)),a=>Ne(e.filter(a,o??Be,e),{onNone:()=>V(a),onSome:l=>T(new bt(e,r,"Predicate",l))})),e,r,o)}case"Transformation":{const n=Mr(e.transformation),r=J(e.from),o=J(e.to);return(a,l)=>We(Fe(we(r(a,l),d=>new qe(e,a,"Encoded",d)),d=>Fe(we(n(d,l??Be,e),i=>new qe(e,a,"Transformation",i)),i=>we(o(i,l),c=>new qe(e,a,"Type",c)))),e,a,l)}case"Declaration":{const n=e.decodeUnknown(...e.typeParameters);return(r,o)=>We(we(n(r,o??Be,e),a=>new _r(e,r,a)),e,r,o)}case"Literal":return I(e,n=>n===e.literal);case"UniqueSymbol":return I(e,n=>n===e.symbol);case"UndefinedKeyword":return I(e,ut);case"VoidKeyword":return I(e,ut);case"NeverKeyword":return I(e,pn);case"UnknownKeyword":case"AnyKeyword":return V;case"StringKeyword":return I(e,he);case"NumberKeyword":return I(e,Ge);case"BooleanKeyword":return I(e,Kt);case"BigIntKeyword":return I(e,Qe);case"SymbolKeyword":return I(e,Ve);case"ObjectKeyword":return I(e,gn);case"Enums":return I(e,n=>e.enums.some(([r,o])=>o===n));case"TemplateLiteral":{const n=lr(e);return I(e,r=>he(r)&&n.test(r))}case"TupleType":{const n=e.elements.map(i=>J(i.type)),r=e.rest.map(i=>J(i));let o=e.elements.filter(i=>!i.isOptional).length;e.rest.length>0&&(o+=e.rest.length-1);const a=ue.make(e.elements.map((i,c)=>new wt(c))),l=Ce(e),d=He(e);return(i,c)=>{if(!fn(i))return T(new le(e,i));const f=(c==null?void 0:c.errors)==="all",h=[];let m=0;const g=i.length;for(let S=g;S<=o-1;S++){const b=new te(S,me);if(f){h.push([m++,b]);continue}else return T(new Y(e,i,[b]))}if(e.rest.length===0)for(let S=e.elements.length;S<=g-1;S++){const b=new te(S,new Ot(a));if(f){h.push([m++,b]);continue}else return T(new Y(e,i,[b]))}const K=[];let u=0,y;for(;u<n.length;u++)if(g<u+1){if(e.elements[u].isOptional)continue}else{const S=n[u],b=S(i[u],c),p=X(b);if(p){if(B(p)){const w=new te(u,p.left);if(f){h.push([m++,w]);continue}else return T(new Y(e,i,[w],q(K)))}K.push([m++,p.right])}else{const w=m++,O=u;y||(y=[]),y.push(({es:R,output:H})=>F(se(b),x=>{if(B(x)){const k=new te(O,x.left);return f?(R.push([w,k]),U):T(new Y(e,i,[k],q(H)))}return H.push([w,x.right]),U}))}}if(Nt(r)){const[S,...b]=r;for(;u<g-b.length;u++){const p=S(i[u],c),w=X(p);if(w)if(B(w)){const O=new te(u,w.left);if(f){h.push([m++,O]);continue}else return T(new Y(e,i,[O],q(K)))}else K.push([m++,w.right]);else{const O=m++,R=u;y||(y=[]),y.push(({es:H,output:x})=>F(se(p),k=>{if(B(k)){const E=new te(R,k.left);return f?(H.push([O,E]),U):T(new Y(e,i,[E],q(x)))}else return x.push([O,k.right]),U}))}}for(let p=0;p<b.length;p++)if(u+=p,!(g<u+1)){const w=b[p](i[u],c),O=X(w);if(O){if(B(O)){const R=new te(u,O.left);if(f){h.push([m++,R]);continue}else return T(new Y(e,i,[R],q(K)))}K.push([m++,O.right])}else{const R=m++,H=u;y||(y=[]),y.push(({es:x,output:k})=>F(se(w),E=>{if(B(E)){const W=new te(H,E.left);return f?(x.push([R,W]),U):T(new Y(e,i,[W],q(k)))}return k.push([R,E.right]),U}))}}}const _=({es:S,output:b})=>De(S)?T(new Y(e,i,q(S),q(b))):V(q(b));if(y&&y.length>0){const S=y;return xe(()=>{const b={es:ke(h),output:ke(K)};return F(ye(S,p=>p(b),{concurrency:l,batching:d,discard:!0}),()=>_(b))})}return _({output:K,es:h})}}case"TypeLiteral":{if(e.propertySignatures.length===0&&e.indexSignatures.length===0)return I(e,hn);const n=[],r={};for(const c of e.propertySignatures)n.push([J(c.type),c]),r[c.name]=null;const o=e.indexSignatures.map(c=>[J(c.parameter),J(c.type),c.parameter]),a=ue.make(e.indexSignatures.map(c=>c.parameter).concat(Oe(r).map(c=>Ve(c)?new Dn(c):new wt(c)))),l=J(a),d=Ce(e),i=He(e);return(c,f)=>{if(!lt(c))return T(new le(e,c));const h=(f==null?void 0:f.errors)==="all",m=[];let g=0;const K=(f==null?void 0:f.onExcessProperty)==="error",u=(f==null?void 0:f.onExcessProperty)==="preserve",y={};if(K||u)for(const p of Oe(c)){const w=X(l(p,f));if(B(w))if(K){const O=new ne(p,new Ot(a));if(h){m.push([g++,O]);continue}else return T(new z(e,c,[O],y))}else y[p]=c[p]}let _;const S=(f==null?void 0:f.isExact)===!0;for(let p=0;p<n.length;p++){const w=n[p][1],O=w.name,R=Object.prototype.hasOwnProperty.call(c,O);if(!R){if(w.isOptional)continue;if(S){const E=new ne(O,me);if(h){m.push([g++,E]);continue}else return T(new z(e,c,[E],y))}}const H=n[p][0],x=H(c[O],f),k=X(x);if(k){if(B(k)){const E=new ne(O,R?k.left:me);if(h){m.push([g++,E]);continue}else return T(new z(e,c,[E],y))}y[O]=k.right}else{const E=g++,W=O;_||(_=[]),_.push(({es:ie,output:_e})=>F(se(x),pe=>{if(B(pe)){const de=new ne(W,R?pe.left:me);return h?(ie.push([E,de]),U):T(new z(e,c,[de],_e))}return _e[W]=pe.right,U}))}}for(let p=0;p<o.length;p++){const w=o[p],O=w[0],R=w[1],H=It(c,w[2]);for(const x of H){const k=X(O(x,f));if(k&&Le(k)){const E=R(c[x],f),W=X(E);if(W)if(B(W)){const ie=new ne(x,W.left);if(h){m.push([g++,ie]);continue}else return T(new z(e,c,[ie],y))}else Object.prototype.hasOwnProperty.call(r,x)||(y[x]=W.right);else{const ie=g++,_e=x;_||(_=[]),_.push(({es:pe,output:de})=>F(se(E),Me=>{if(B(Me)){const at=new ne(_e,Me.left);return h?(pe.push([ie,at]),U):T(new z(e,c,[at],de))}else return Object.prototype.hasOwnProperty.call(r,x)||(de[x]=Me.right),U}))}}}}const b=({es:p,output:w})=>De(p)?T(new z(e,c,q(p),w)):V(w);if(_&&_.length>0){const p=_;return xe(()=>{const w={es:ke(m),output:Object.assign({},y)};return F(ye(p,O=>O(w),{concurrency:d,batching:i,discard:!0}),()=>b(w))})}return b({es:m,output:y})}}case"Union":{const n=Jr(e.types),r=Oe(n.keys),o=r.length,a=new Map;for(let i=0;i<e.types.length;i++)a.set(e.types[i],J(e.types[i]));const l=Ce(e)??1,d=He(e);return(i,c)=>{const f=[];let h=0,m=[];if(o>0)if(lt(i))for(let u=0;u<o;u++){const y=r[u],_=n.keys[y].buckets;if(Object.prototype.hasOwnProperty.call(i,y)){const S=String(i[y]);if(Object.prototype.hasOwnProperty.call(_,S))m=m.concat(_[S]);else{const b=ue.make(n.keys[y].literals);f.push([h++,new z(new ae([new A(y,b,!1,!0)],[]),i,[new ne(y,new le(b,i[y]))])])}}else{const S=ue.make(n.keys[y].literals);f.push([h++,new z(new ae([new A(y,S,!1,!0)],[]),i,[new ne(y,me)])])}}else f.push([h++,new le(e,i)]);n.otherwise.length>0&&(m=m.concat(n.otherwise));let g;for(let u=0;u<m.length;u++){const y=m[u],_=a.get(y)(i,c),S=!g||g.length===0?X(_):void 0;if(S){if(Le(S))return V(S.right);f.push([h++,new Tt(y,S.left)])}else{const b=h++;g||(g=[]),g.push(p=>xe(()=>"finalResult"in p?U:F(se(_),w=>(Le(w)?p.finalResult=V(w.right):p.es.push([b,new Tt(y,w.left)]),U))))}}const K=u=>De(u)?u.length===1&&u[0][1]._tag==="Type"?T(u[0][1]):T(new Er(e,i,q(u))):T(new le(Re,i));if(g&&g.length>0){const u=g;return xe(()=>{const y={es:ke(f)};return F(ye(u,_=>_(y),{concurrency:l,batching:d,discard:!0}),()=>"finalResult"in y?y.finalResult:K(y.es))})}return K(f)}}case"Suspend":{const n=$t(()=>J(ot(e.f(),e.annotations)));return(r,o)=>n()(r,o)}}},I=(e,t)=>n=>t(n)?V(n):T(new le(e,n)),Se=(e,t)=>{switch(e._tag){case"Declaration":{const n=Jn(e);if(Rt(n))return Se(n.value);break}case"TypeLiteral":{const n=[];for(let r=0;r<e.propertySignatures.length;r++){const o=e.propertySignatures[r],a=G(o.type);Ln(a)&&!o.isOptional&&n.push([o.name,a])}return n}case"Refinement":return Se(e.from);case"Suspend":return Se(e.f());case"Transformation":return Se(e.from)}return[]},Jr=(e,t)=>{const n={},r=[];for(let o=0;o<e.length;o++){const a=e[o],l=Se(a);if(l.length>0)for(let d=0;d<l.length;d++){const[i,c]=l[d],f=String(c.literal);n[i]=n[i]||{buckets:{},literals:[]};const h=n[i].buckets;if(Object.prototype.hasOwnProperty.call(h,f)){if(d<l.length-1)continue;h[f].push(a),n[i].literals.push(c)}else{h[f]=[a],n[i].literals.push(c);break}}else r.push(a)}return{keys:n,otherwise:r}},We=(e,t,n,r)=>{const o=X(e);if(o)return o;if((r==null?void 0:r.isEffectAllowed)===!0)return e;try{return kt(se(e))}catch{return T(new xr(t,n,"cannot be be resolved synchronously, this is caused by using runSync on an effect that performs async work"))}};function q(e){return e.sort(([t],[n])=>t>n?1:t<n?-1:0).map(([t,n])=>n)}const Mr=(e,t)=>{switch(e._tag){case"FinalTransformation":return e.decode;case"ComposeTransformation":return V;case"TypeLiteralTransformation":return n=>{let r=V(n);for(const o of e.propertySignatureTransformations){const[a,l]=[o.from,o.to],d=o.decode;r=Rr(r,c=>{const f=d(Object.prototype.hasOwnProperty.call(c,a)?Pe(c[a]):tt());return delete c[a],Rt(f)&&(c[l]=f.value),c})}return r}}},Lr=Symbol.for("@effect/schema/EquivalenceHookId"),Dr=Symbol.for("@effect/schema/PrettyHookId"),vr=Symbol.for("@effect/schema/Schema"),Br={_A:e=>e,_I:e=>e,_R:e=>e},zt=e=>{if(!e)return{};const t={},n=Object.getOwnPropertySymbols(e);for(const o of n)t[o]=e[o];if(e.typeId!==void 0){const o=e.typeId;typeof o=="object"?(t[pt]=o.id,t[o.id]=o.annotation):t[pt]=o}const r=(o,a)=>{e[o]!==void 0&&(t[a]=e[o])};return r("message",jt),r("identifier",Ut),r("title",re),r("description",rt),r("examples",En),r("default",Nn),r("documentation",Rn),r("jsonSchema",Pn),r("arbitrary",gr),r("pretty",Dr),r("equivalence",Lr),r("concurrency",Jt),r("batching",Mt),r("parseIssueTitle",Lt),t};var eo;const st=class st{constructor(t){s(this,"ast");s(this,eo,Br);this.ast=t}pipe(){return dn(this,arguments)}annotations(t){return new st(ot(this.ast,zt(t)))}toString(){return String(this.ast)}};eo=vr;let Ie=st;const qr=(e,t)=>{const n=$r(e,t);return(r,o)=>At(n(r,o),Pr)},Fr=e=>new Ie(e),Cr=Fr(Wn),Hr=Symbol.for("@effect/schema/PropertySignature"),Wr=e=>_t(e,Hr),Te=class Te extends Ie{constructor(n,r,o=Te.ast(n,r)){super(o);s(this,"fields");s(this,"records");this.fields={...n},this.records=[...r]}annotations(n){return new Te(this.fields,this.records,ot(this.ast,zt(n)))}};s(Te,"ast",(n,r)=>{const o=Oe(n),a=[];if(o.length>0){const d=[],i=[],c=[];for(let f=0;f<o.length;f++){const h=o[f],m=n[h];if(Wr(m)){const g=m.ast;switch(g._tag){case"PropertySignatureDeclaration":{const K=g.type,u=g.isOptional,y=g.annotations;d.push(new A(h,K,u,!0)),i.push(new A(h,j(K),u,!0,y)),a.push(new A(h,K,u,!0,y));break}case"PropertySignatureTransformation":{const K=g.from.fromKey??h;d.push(new A(K,g.from.type,g.from.isOptional,!0,g.from.annotations)),i.push(new A(h,g.to.type,g.to.isOptional,!0,g.to.annotations)),c.push(new sr(K,h,g.decode,g.encode));break}}}else d.push(new A(h,m.ast,!1,!0)),i.push(new A(h,j(m.ast),!1,!0)),a.push(new A(h,m.ast,!1,!0))}if(Nt(c)){const f=[],h=[];for(const m of r){const{indexSignatures:g,propertySignatures:K}=St(m.key.ast,m.value.ast);K.forEach(u=>{d.push(u),i.push(new A(u.name,j(u.type),u.isOptional,u.isReadonly,u.annotations))}),g.forEach(u=>{f.push(u),h.push(new je(u.parameter,j(u.type),u.isReadonly))})}return new or(new ae(d,f,{[re]:"Struct (Encoded side)"}),new ae(i,h,{[re]:"Struct (Type side)"}),new ar(c))}}const l=[];for(const d of r){const{indexSignatures:i,propertySignatures:c}=St(d.key.ast,d.value.ast);c.forEach(f=>a.push(f)),i.forEach(f=>l.push(f))}return new ae(a,l)});let ze=Te;function Vr(e,...t){return new ze(e,t)}const Yr=Vr({title:Cr}),zr=mn(function*(e){const t=yield*ft({try:()=>fetch("https://syntax.fm/api/shows/latest"),catch:()=>new Error("failed")});if(!t.ok)return yield*wn(new Error);const n=yield*ft({try:()=>t.json(),catch:()=>new Error("error")});return yield*e(n,qr(Yr),At(()=>new Error))}),Gr=()=>{const e=ge.use(ge.useMemo(()=>Sn(zr),[]));return P.jsxs(P.Fragment,{children:[P.jsx("h2",{children:e.title}),P.jsx("meta",{property:"og:title",content:e.title})]})},Gt=ge.createContext({name:""});function Qr(){const{name:e}=ge.use(Gt);return P.jsx("footer",{children:P.jsxs("p",{children:["©",e]})})}function Xr(){const e=ge.use(bn);return P.jsxs(Gt,{value:{name:(e==null?void 0:e.user.email)??""},children:[P.jsx(ge.Suspense,{fallback:P.jsx(P.Fragment,{children:"loading"}),children:P.jsx(Gr,{})}),P.jsx("p",{children:"test"}),P.jsx(Qr,{})]})}const uo=On("/")({component:Zr});function Zr(){return P.jsxs("div",{className:"p-2",children:[P.jsx("h3",{children:"Welcome Home!"}),P.jsx(Xr,{})]})}export{uo as Route};