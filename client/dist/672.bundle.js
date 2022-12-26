"use strict";(self.webpackChunkpoachd=self.webpackChunkpoachd||[]).push([[672],{9098:(e,t,n)=>{n.d(t,{Ps:()=>z});var i=n(655);function r(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}const s=/\r\n|[\n\r]/g;function o(e,t){let n=0,i=1;for(const o of e.body.matchAll(s)){if("number"==typeof o.index||r(!1),o.index>=t)break;n=o.index+o[0].length,i+=1}return{line:i,column:t+1-n}}function a(e,t){const n=e.locationOffset.column-1,i="".padStart(n)+e.body,r=t.line-1,s=e.locationOffset.line-1,o=t.line+s,a=1===t.line?n:0,h=t.column+a,u=`${e.name}:${o}:${h}\n`,l=i.split(/\r\n|[\n\r]/g),p=l[r];if(p.length>120){const e=Math.floor(h/80),t=h%80,n=[];for(let e=0;e<p.length;e+=80)n.push(p.slice(e,e+80));return u+c([[`${o} |`,n[0]],...n.slice(1,e+1).map((e=>["|",e])),["|","^".padStart(t)],["|",n[e+1]]])}return u+c([[o-1+" |",l[r-1]],[`${o} |`,p],["|","^".padStart(h)],[`${o+1} |`,l[r+1]]])}function c(e){const t=e.filter((([e,t])=>void 0!==t)),n=Math.max(...t.map((([e])=>e.length)));return t.map((([e,t])=>e.padStart(n)+(t?" "+t:""))).join("\n")}class h extends Error{constructor(e,...t){var n,i,r;const{nodes:s,source:a,positions:c,path:l,originalError:p,extensions:d}=function(e){const t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t);super(e),this.name="GraphQLError",this.path=null!=l?l:void 0,this.originalError=null!=p?p:void 0,this.nodes=u(Array.isArray(s)?s:s?[s]:void 0);const E=u(null===(n=this.nodes)||void 0===n?void 0:n.map((e=>e.loc)).filter((e=>null!=e)));this.source=null!=a?a:null==E||null===(i=E[0])||void 0===i?void 0:i.source,this.positions=null!=c?c:null==E?void 0:E.map((e=>e.start)),this.locations=c&&a?c.map((e=>o(a,e))):null==E?void 0:E.map((e=>o(e.source,e.start)));const f="object"==typeof(m=null==p?void 0:p.extensions)&&null!==m?null==p?void 0:p.extensions:void 0;var m;this.extensions=null!==(r=null!=d?d:f)&&void 0!==r?r:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=p&&p.stack?Object.defineProperty(this,"stack",{value:p.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,h):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(e+="\n\n"+a((t=n.loc).source,o(t.source,t.start)));else if(this.source&&this.locations)for(const t of this.locations)e+="\n\n"+a(this.source,t);var t;return e}toJSON(){const e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function u(e){return void 0===e||0===e.length?void 0:e}function l(e,t,n){return new h(`Syntax Error: ${n}`,{source:e,positions:[t]})}var p,d=n(2380);!function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"}(p||(p={}));var E,f,m=n(7359),N=n(7392),T=n(8297);(f=E||(E={})).SOF="<SOF>",f.EOF="<EOF>",f.BANG="!",f.DOLLAR="$",f.AMP="&",f.PAREN_L="(",f.PAREN_R=")",f.SPREAD="...",f.COLON=":",f.EQUALS="=",f.AT="@",f.BRACKET_L="[",f.BRACKET_R="]",f.BRACE_L="{",f.PIPE="|",f.BRACE_R="}",f.NAME="Name",f.INT="Int",f.FLOAT="Float",f.STRING="String",f.BLOCK_STRING="BlockString",f.COMMENT="Comment";class k{constructor(e){const t=new d.WU(E.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==E.EOF)do{if(e.next)e=e.next;else{const t=y(this,e.end);e.next=t,t.prev=e,e=t}}while(e.kind===E.COMMENT);return e}}function v(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function _(e,t){return x(e.charCodeAt(t))&&A(e.charCodeAt(t+1))}function x(e){return e>=55296&&e<=56319}function A(e){return e>=56320&&e<=57343}function I(e,t){const n=e.source.body.codePointAt(t);if(void 0===n)return E.EOF;if(n>=32&&n<=126){const e=String.fromCodePoint(n);return'"'===e?"'\"'":`"${e}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function D(e,t,n,i,r){const s=e.line,o=1+n-e.lineStart;return new d.WU(t,n,i,s,o,r)}function y(e,t){const n=e.source.body,i=n.length;let r=t;for(;r<i;){const t=n.charCodeAt(r);switch(t){case 65279:case 9:case 32:case 44:++r;continue;case 10:++r,++e.line,e.lineStart=r;continue;case 13:10===n.charCodeAt(r+1)?r+=2:++r,++e.line,e.lineStart=r;continue;case 35:return O(e,r);case 33:return D(e,E.BANG,r,r+1);case 36:return D(e,E.DOLLAR,r,r+1);case 38:return D(e,E.AMP,r,r+1);case 40:return D(e,E.PAREN_L,r,r+1);case 41:return D(e,E.PAREN_R,r,r+1);case 46:if(46===n.charCodeAt(r+1)&&46===n.charCodeAt(r+2))return D(e,E.SPREAD,r,r+3);break;case 58:return D(e,E.COLON,r,r+1);case 61:return D(e,E.EQUALS,r,r+1);case 64:return D(e,E.AT,r,r+1);case 91:return D(e,E.BRACKET_L,r,r+1);case 93:return D(e,E.BRACKET_R,r,r+1);case 123:return D(e,E.BRACE_L,r,r+1);case 124:return D(e,E.PIPE,r,r+1);case 125:return D(e,E.BRACE_R,r,r+1);case 34:return 34===n.charCodeAt(r+1)&&34===n.charCodeAt(r+2)?M(e,r):R(e,r)}if((0,T.X1)(t)||45===t)return C(e,r,t);if((0,T.LQ)(t))return P(e,r);throw l(e.source,r,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":v(t)||_(n,r)?`Unexpected character: ${I(e,r)}.`:`Invalid character: ${I(e,r)}.`)}return D(e,E.EOF,i,i)}function O(e,t){const n=e.source.body,i=n.length;let r=t+1;for(;r<i;){const e=n.charCodeAt(r);if(10===e||13===e)break;if(v(e))++r;else{if(!_(n,r))break;r+=2}}return D(e,E.COMMENT,t,r,n.slice(t+1,r))}function C(e,t,n){const i=e.source.body;let r=t,s=n,o=!1;if(45===s&&(s=i.charCodeAt(++r)),48===s){if(s=i.charCodeAt(++r),(0,T.X1)(s))throw l(e.source,r,`Invalid number, unexpected digit after 0: ${I(e,r)}.`)}else r=g(e,r,s),s=i.charCodeAt(r);if(46===s&&(o=!0,s=i.charCodeAt(++r),r=g(e,r,s),s=i.charCodeAt(r)),69!==s&&101!==s||(o=!0,s=i.charCodeAt(++r),43!==s&&45!==s||(s=i.charCodeAt(++r)),r=g(e,r,s),s=i.charCodeAt(r)),46===s||(0,T.LQ)(s))throw l(e.source,r,`Invalid number, expected digit but got: ${I(e,r)}.`);return D(e,o?E.FLOAT:E.INT,t,r,i.slice(t,r))}function g(e,t,n){if(!(0,T.X1)(n))throw l(e.source,t,`Invalid number, expected digit but got: ${I(e,t)}.`);const i=e.source.body;let r=t+1;for(;(0,T.X1)(i.charCodeAt(r));)++r;return r}function R(e,t){const n=e.source.body,i=n.length;let r=t+1,s=r,o="";for(;r<i;){const i=n.charCodeAt(r);if(34===i)return o+=n.slice(s,r),D(e,E.STRING,t,r+1,o);if(92!==i){if(10===i||13===i)break;if(v(i))++r;else{if(!_(n,r))throw l(e.source,r,`Invalid character within String: ${I(e,r)}.`);r+=2}}else{o+=n.slice(s,r);const t=117===n.charCodeAt(r+1)?123===n.charCodeAt(r+2)?L(e,r):S(e,r):F(e,r);o+=t.value,r+=t.size,s=r}}throw l(e.source,r,"Unterminated string.")}function L(e,t){const n=e.source.body;let i=0,r=3;for(;r<12;){const e=n.charCodeAt(t+r++);if(125===e){if(r<5||!v(i))break;return{value:String.fromCodePoint(i),size:r}}if(i=i<<4|w(e),i<0)break}throw l(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+r)}".`)}function S(e,t){const n=e.source.body,i=b(n,t+2);if(v(i))return{value:String.fromCodePoint(i),size:6};if(x(i)&&92===n.charCodeAt(t+6)&&117===n.charCodeAt(t+7)){const e=b(n,t+8);if(A(e))return{value:String.fromCodePoint(i,e),size:12}}throw l(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function b(e,t){return w(e.charCodeAt(t))<<12|w(e.charCodeAt(t+1))<<8|w(e.charCodeAt(t+2))<<4|w(e.charCodeAt(t+3))}function w(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function F(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"\t",size:2}}throw l(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function M(e,t){const n=e.source.body,i=n.length;let r=e.lineStart,s=t+3,o=s,a="";const c=[];for(;s<i;){const i=n.charCodeAt(s);if(34===i&&34===n.charCodeAt(s+1)&&34===n.charCodeAt(s+2)){a+=n.slice(o,s),c.push(a);const i=D(e,E.BLOCK_STRING,t,s+3,(0,N.wv)(c).join("\n"));return e.line+=c.length-1,e.lineStart=r,i}if(92!==i||34!==n.charCodeAt(s+1)||34!==n.charCodeAt(s+2)||34!==n.charCodeAt(s+3))if(10!==i&&13!==i)if(v(i))++s;else{if(!_(n,s))throw l(e.source,s,`Invalid character within String: ${I(e,s)}.`);s+=2}else a+=n.slice(o,s),c.push(a),13===i&&10===n.charCodeAt(s+1)?s+=2:++s,a="",o=s,r=s;else a+=n.slice(o,s),o=s+1,s+=4}throw l(e.source,s,"Unterminated string.")}function P(e,t){const n=e.source.body,i=n.length;let r=t+1;for(;r<i;){const e=n.charCodeAt(r);if(!(0,T.HQ)(e))break;++r}return D(e,E.NAME,t,r,n.slice(t,r))}var U=n(4783);class B{constructor(e,t={}){const n=(0,U.T)(e)?e:new U.H(e);this._lexer=new k(n),this._options=t,this._tokenCounter=0}parseName(){const e=this.expectToken(E.NAME);return this.node(e,{kind:m.h.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:m.h.DOCUMENT,definitions:this.many(E.SOF,this.parseDefinition,E.EOF)})}parseDefinition(){if(this.peek(E.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===E.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw l(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(E.BRACE_L))return this.node(e,{kind:m.h.OPERATION_DEFINITION,operation:d.ku.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let n;return this.peek(E.NAME)&&(n=this.parseName()),this.node(e,{kind:m.h.OPERATION_DEFINITION,operation:t,name:n,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(E.NAME);switch(e.value){case"query":return d.ku.QUERY;case"mutation":return d.ku.MUTATION;case"subscription":return d.ku.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(E.PAREN_L,this.parseVariableDefinition,E.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:m.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(E.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(E.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(E.DOLLAR),this.node(e,{kind:m.h.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:m.h.SELECTION_SET,selections:this.many(E.BRACE_L,this.parseSelection,E.BRACE_R)})}parseSelection(){return this.peek(E.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let n,i;return this.expectOptionalToken(E.COLON)?(n=t,i=this.parseName()):i=t,this.node(e,{kind:m.h.FIELD,alias:n,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(E.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(E.PAREN_L,t,E.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,n=this.parseName();return this.expectToken(E.COLON),this.node(t,{kind:m.h.ARGUMENT,name:n,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(E.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(E.NAME)?this.node(e,{kind:m.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:m.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),!0===this._options.allowLegacyFragmentVariables?this.node(e,{kind:m.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:m.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case E.BRACKET_L:return this.parseList(e);case E.BRACE_L:return this.parseObject(e);case E.INT:return this.advanceLexer(),this.node(t,{kind:m.h.INT,value:t.value});case E.FLOAT:return this.advanceLexer(),this.node(t,{kind:m.h.FLOAT,value:t.value});case E.STRING:case E.BLOCK_STRING:return this.parseStringLiteral();case E.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:m.h.BOOLEAN,value:!0});case"false":return this.node(t,{kind:m.h.BOOLEAN,value:!1});case"null":return this.node(t,{kind:m.h.NULL});default:return this.node(t,{kind:m.h.ENUM,value:t.value})}case E.DOLLAR:if(e){if(this.expectToken(E.DOLLAR),this._lexer.token.kind===E.NAME){const e=this._lexer.token.value;throw l(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:m.h.STRING,value:e.value,block:e.kind===E.BLOCK_STRING})}parseList(e){return this.node(this._lexer.token,{kind:m.h.LIST,values:this.any(E.BRACKET_L,(()=>this.parseValueLiteral(e)),E.BRACKET_R)})}parseObject(e){return this.node(this._lexer.token,{kind:m.h.OBJECT,fields:this.any(E.BRACE_L,(()=>this.parseObjectField(e)),E.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,n=this.parseName();return this.expectToken(E.COLON),this.node(t,{kind:m.h.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(E.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(E.AT),this.node(t,{kind:m.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(E.BRACKET_L)){const n=this.parseTypeReference();this.expectToken(E.BRACKET_R),t=this.node(e,{kind:m.h.LIST_TYPE,type:n})}else t=this.parseNamedType();return this.expectOptionalToken(E.BANG)?this.node(e,{kind:m.h.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:m.h.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(E.STRING)||this.peek(E.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.many(E.BRACE_L,this.parseOperationTypeDefinition,E.BRACE_R);return this.node(e,{kind:m.h.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:i})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(E.COLON);const n=this.parseNamedType();return this.node(e,{kind:m.h.OPERATION_TYPE_DEFINITION,operation:t,type:n})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();return this.node(e,{kind:m.h.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:i})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:m.h.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(E.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(E.BRACE_L,this.parseFieldDefinition,E.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(E.COLON);const r=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(e,{kind:m.h.FIELD_DEFINITION,description:t,name:n,arguments:i,type:r,directives:s})}parseArgumentDefs(){return this.optionalMany(E.PAREN_L,this.parseInputValueDef,E.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(E.COLON);const i=this.parseTypeReference();let r;this.expectOptionalToken(E.EQUALS)&&(r=this.parseConstValueLiteral());const s=this.parseConstDirectives();return this.node(e,{kind:m.h.INPUT_VALUE_DEFINITION,description:t,name:n,type:i,defaultValue:r,directives:s})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:m.h.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:s})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseUnionMemberTypes();return this.node(e,{kind:m.h.UNION_TYPE_DEFINITION,description:t,name:n,directives:i,types:r})}parseUnionMemberTypes(){return this.expectOptionalToken(E.EQUALS)?this.delimitedMany(E.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();return this.node(e,{kind:m.h.ENUM_TYPE_DEFINITION,description:t,name:n,directives:i,values:r})}parseEnumValuesDefinition(){return this.optionalMany(E.BRACE_L,this.parseEnumValueDefinition,E.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(e,{kind:m.h.ENUM_VALUE_DEFINITION,description:t,name:n,directives:i})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw l(this._lexer.source,this._lexer.token.start,`${V(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();return this.node(e,{kind:m.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:i,fields:r})}parseInputFieldsDefinition(){return this.optionalMany(E.BRACE_L,this.parseInputValueDef,E.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===E.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),n=this.optionalMany(E.BRACE_L,this.parseOperationTypeDefinition,E.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:m.h.SCHEMA_EXTENSION,directives:t,operationTypes:n})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),n=this.parseConstDirectives();if(0===n.length)throw this.unexpected();return this.node(e,{kind:m.h.SCALAR_TYPE_EXTENSION,name:t,directives:n})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:m.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:m.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:m.h.UNION_TYPE_EXTENSION,name:t,directives:n,types:i})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:m.h.ENUM_TYPE_EXTENSION,name:t,directives:n,values:i})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:m.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:i})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(E.AT);const n=this.parseName(),i=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const s=this.parseDirectiveLocations();return this.node(e,{kind:m.h.DIRECTIVE_DEFINITION,description:t,name:n,arguments:i,repeatable:r,locations:s})}parseDirectiveLocations(){return this.delimitedMany(E.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(p,t.value))return t;throw this.unexpected(e)}node(e,t){return!0!==this._options.noLocation&&(t.loc=new d.Ye(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw l(this._lexer.source,t.start,`Expected ${K(e)}, found ${V(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e&&(this.advanceLexer(),!0)}expectKeyword(e){const t=this._lexer.token;if(t.kind!==E.NAME||t.value!==e)throw l(this._lexer.source,t.start,`Expected "${e}", found ${V(t)}.`);this.advanceLexer()}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===E.NAME&&t.value===e&&(this.advanceLexer(),!0)}unexpected(e){const t=null!=e?e:this._lexer.token;return l(this._lexer.source,t.start,`Unexpected ${V(t)}.`)}any(e,t,n){this.expectToken(e);const i=[];for(;!this.expectOptionalToken(n);)i.push(t.call(this));return i}optionalMany(e,t,n){if(this.expectOptionalToken(e)){const e=[];do{e.push(t.call(this))}while(!this.expectOptionalToken(n));return e}return[]}many(e,t,n){this.expectToken(e);const i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i}delimitedMany(e,t){this.expectOptionalToken(e);const n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance();if(void 0!==e&&t.kind!==E.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw l(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function V(e){const t=e.value;return K(e.kind)+(null!=t?` "${t}"`:"")}function K(e){return function(e){return e===E.BANG||e===E.DOLLAR||e===E.AMP||e===E.PAREN_L||e===E.PAREN_R||e===E.SPREAD||e===E.COLON||e===E.EQUALS||e===E.AT||e===E.BRACKET_L||e===E.BRACKET_R||e===E.BRACE_L||e===E.PIPE||e===E.BRACE_R}(e)?`"${e}"`:e}var G=new Map,$=new Map,j=!0,Y=!1;function Q(e){return e.replace(/[\s,]+/g," ").trim()}function q(e){var t=Q(e);if(!G.has(t)){var n=function(e,t){return new B(e,t).parseDocument()}(e,{experimentalFragmentVariables:Y,allowLegacyFragmentVariables:Y});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");G.set(t,function(e){var t=new Set(e.definitions);t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(n){var i=e[n];i&&"object"==typeof i&&t.add(i)}))}));var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}(function(e){var t=new Set,n=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var i=e.name.value,r=Q((o=e.loc).source.body.substring(o.start,o.end)),s=$.get(i);s&&!s.has(r)?j&&console.warn("Warning: fragment with name "+i+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):s||$.set(i,s=new Set),s.add(r),t.has(r)||(t.add(r),n.push(e))}else n.push(e);var o})),(0,i.pi)((0,i.pi)({},e),{definitions:n})}(n)))}return G.get(t)}function z(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"==typeof e&&(e=[e]);var i=e[0];return t.forEach((function(t,n){t&&"Document"===t.kind?i+=t.loc.source.body:i+=t,i+=e[n+1]})),q(i)}var J,X=z;(J=z||(z={})).gql=X,J.resetCaches=function(){G.clear(),$.clear()},J.disableFragmentWarnings=function(){j=!1},J.enableExperimentalFragmentVariables=function(){Y=!0},J.disableExperimentalFragmentVariables=function(){Y=!1},z.default=z},5723:(e,t,n)=>{n.d(t,{D:()=>d});var i,r=n(655),s=n(7294),o=n(4012),a=n(2152),c=n(3952);!function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"}(i||(i={}));var h=new Map;function u(e){var t;switch(e){case i.Query:t="Query";break;case i.Mutation:t="Mutation";break;case i.Subscription:t="Subscription"}return t}var l=n(990),p=n(5317);function d(e,t){var n,d,E,f,m,N=function(e){var t=(0,s.useContext)((0,p.K)()),n=e||t.client;return __DEV__?(0,c.kG)(!!n,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,c.kG)(!!n,31),n}(null==t?void 0:t.client);n=e,d=i.Mutation,E=function(e){var t,n,r=h.get(e);if(r)return r;__DEV__?(0,c.kG)(!!e&&!!e.kind,"Argument of ".concat(e," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,c.kG)(!!e&&!!e.kind,32);for(var s=[],o=[],a=[],u=[],l=0,p=e.definitions;l<p.length;l++){var d=p[l];if("FragmentDefinition"!==d.kind){if("OperationDefinition"===d.kind)switch(d.operation){case"query":o.push(d);break;case"mutation":a.push(d);break;case"subscription":u.push(d)}}else s.push(d)}__DEV__?(0,c.kG)(!s.length||o.length||a.length||u.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,c.kG)(!s.length||o.length||a.length||u.length,33),__DEV__?(0,c.kG)(o.length+a.length+u.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(e," had ").concat(o.length," queries, ").concat(u.length," ")+"subscriptions and ".concat(a.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,c.kG)(o.length+a.length+u.length<=1,34),n=o.length?i.Query:i.Mutation,o.length||a.length||(n=i.Subscription);var E=o.length?o:a.length?a:u;__DEV__?(0,c.kG)(1===E.length,"react-apollo only supports one definition per HOC. ".concat(e," had ")+"".concat(E.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,c.kG)(1===E.length,35);var f=E[0];t=f.variableDefinitions||[];var m={name:f.name&&"Name"===f.name.kind?f.name.value:"data",type:n,variables:t};return h.set(e,m),m}(n),f=u(d),m=u(E.type),__DEV__?(0,c.kG)(E.type===d,"Running a ".concat(f," requires a graphql ")+"".concat(f,", but a ").concat(m," was used instead.")):(0,c.kG)(E.type===d,36);var T=(0,s.useState)({called:!1,loading:!1,client:N}),k=T[0],v=T[1],_=(0,s.useRef)({result:k,mutationId:0,isMounted:!0,client:N,mutation:e,options:t});Object.assign(_.current,{client:N,options:t,mutation:e});var x=(0,s.useCallback)((function(e){void 0===e&&(e={});var t=_.current,n=t.client,i=t.options,s=t.mutation,c=(0,r.pi)((0,r.pi)({},i),{mutation:s});_.current.result.loading||c.ignoreResults||!_.current.isMounted||v(_.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:n});var h=++_.current.mutationId,u=(0,o.J)(c,e);return n.mutate(u).then((function(t){var i,r,s,o=t.data,c=t.errors,p=c&&c.length>0?new l.c({graphQLErrors:c}):void 0;if(h===_.current.mutationId&&!u.ignoreResults){var d={called:!0,loading:!1,data:o,error:p,client:n};_.current.isMounted&&!(0,a.D)(_.current.result,d)&&v(_.current.result=d)}return null===(r=null===(i=_.current.options)||void 0===i?void 0:i.onCompleted)||void 0===r||r.call(i,t.data,u),null===(s=e.onCompleted)||void 0===s||s.call(e,t.data,u),t})).catch((function(t){var i,r,s,o;if(h===_.current.mutationId&&_.current.isMounted){var c={loading:!1,error:t,data:void 0,called:!0,client:n};(0,a.D)(_.current.result,c)||v(_.current.result=c)}if((null===(i=_.current.options)||void 0===i?void 0:i.onError)||u.onError)return null===(s=null===(r=_.current.options)||void 0===r?void 0:r.onError)||void 0===s||s.call(r,t,u),null===(o=e.onError)||void 0===o||o.call(e,t,u),{data:void 0,errors:t};throw t}))}),[]),A=(0,s.useCallback)((function(){_.current.isMounted&&v({called:!1,loading:!1,client:N})}),[]);return(0,s.useEffect)((function(){return _.current.isMounted=!0,function(){_.current.isMounted=!1}}),[]),[x,(0,r.pi)({reset:A},k)]}}}]);