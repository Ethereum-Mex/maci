"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6431],{865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var s=n(5893),r=n(1151);const i={},l="AccQueueQuinary",d={id:"solidity-docs/trees/AccQueueQuinary",title:"AccQueueQuinary",description:"This contract defines a Merkle tree where each leaf insertion only updates a",source:"@site/versioned_docs/version-v1.x/solidity-docs/trees/AccQueueQuinary.md",sourceDirName:"solidity-docs/trees",slug:"/solidity-docs/trees/AccQueueQuinary",permalink:"/docs/solidity-docs/trees/AccQueueQuinary",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/trees/AccQueueQuinary.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"AccQueueBinaryMaci",permalink:"/docs/solidity-docs/trees/AccQueueBinaryMaci"},next:{title:"AccQueueQuinary0",permalink:"/docs/solidity-docs/trees/AccQueueQuinary0"}},c={},h=[{value:"constructor",id:"constructor",level:3},{value:"hashLevel",id:"hashlevel",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Return Values",id:"return-values",level:4},{value:"hashLevelLeaf",id:"hashlevelleaf",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Return Values",id:"return-values-1",level:4},{value:"_fill",id:"_fill",level:3},{value:"Parameters",id:"parameters-2",level:4}];function a(e){const t={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"accqueuequinary",children:"AccQueueQuinary"}),"\n",(0,s.jsx)(t.p,{children:"This contract defines a Merkle tree where each leaf insertion only updates a\nsubtree. To obtain the main tree root, the contract owner must merge the\nsubtrees together. Merging subtrees requires at least 2 operations:\nmergeSubRoots(), and merge(). To get around the gas limit,\nthe mergeSubRoots() can be performed in multiple transactions."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"This contract is for a quinary tree (5 leaves per node)"})}),"\n",(0,s.jsx)(t.h3,{id:"constructor",children:"constructor"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"constructor(uint256 _subDepth) internal\n"})}),"\n",(0,s.jsx)(t.p,{children:"Create a new AccQueueQuinary instance"}),"\n",(0,s.jsx)(t.h3,{id:"hashlevel",children:"hashLevel"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"function hashLevel(uint256 _level, uint256 _leaf) internal returns (uint256 hashed)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Hash the contents of the specified level and the specified leaf."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"it also frees up storage slots to refund gas."})}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_level"}),(0,s.jsx)(t.td,{children:"uint256"}),(0,s.jsx)(t.td,{children:"The level to hash."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_leaf"}),(0,s.jsx)(t.td,{children:"uint256"}),(0,s.jsx)(t.td,{children:"The leaf include with the level."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"return-values",children:"Return Values"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hashed"}),(0,s.jsx)(t.td,{children:"uint256"}),(0,s.jsx)(t.td,{children:"The hash of the level and leaf."})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"hashlevelleaf",children:"hashLevelLeaf"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"function hashLevelLeaf(uint256 _level, uint256 _leaf) public view returns (uint256 hashed)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Hash the contents of the specified level and the specified leaf."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_level"}),(0,s.jsx)(t.td,{children:"uint256"}),(0,s.jsx)(t.td,{children:"The level to hash."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_leaf"}),(0,s.jsx)(t.td,{children:"uint256"}),(0,s.jsx)(t.td,{children:"The leaf include with the level."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"return-values-1",children:"Return Values"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hashed"}),(0,s.jsx)(t.td,{children:"uint256"}),(0,s.jsx)(t.td,{children:"The hash of the level and leaf."})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"_fill",children:"_fill"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-solidity",children:"function _fill(uint256 _level) internal\n"})}),"\n",(0,s.jsx)(t.p,{children:"An internal function which fills a subtree"}),"\n",(0,s.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"_level"}),(0,s.jsx)(t.td,{children:"uint256"}),(0,s.jsx)(t.td,{children:"The level at which to fill the subtree"})]})})]})]})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>l});var s=n(7294);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);