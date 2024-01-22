"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5054],{2947:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(5250),t=r(2459);const s={},o="Verifier",l={id:"solidity-docs/crypto/Verifier",title:"Verifier",description:"a Groth16 verifier contract",source:"@site/versioned_docs/version-v1.x/solidity-docs/crypto/Verifier.md",sourceDirName:"solidity-docs/crypto",slug:"/solidity-docs/crypto/Verifier",permalink:"/docs/solidity-docs/crypto/Verifier",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/crypto/Verifier.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"SnarkConstants",permalink:"/docs/solidity-docs/crypto/SnarkConstants"},next:{title:"FreeForAllGatekeeper",permalink:"/docs/solidity-docs/gatekeepers/FreeForAllSignUpGatekeeper"}},d={},c=[{value:"Proof",id:"proof",level:3},{value:"PRIME_Q",id:"prime_q",level:3},{value:"InvalidProofQ",id:"invalidproofq",level:3},{value:"InvalidInputVal",id:"invalidinputval",level:3},{value:"verify",id:"verify",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Return Values",id:"return-values",level:4},{value:"checkPoint",id:"checkpoint",level:3}];function a(e){const i={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"verifier",children:"Verifier"}),"\n",(0,n.jsx)(i.p,{children:"a Groth16 verifier contract"}),"\n",(0,n.jsx)(i.h3,{id:"proof",children:"Proof"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-solidity",children:"struct Proof {\n  struct Pairing.G1Point a;\n  struct Pairing.G2Point b;\n  struct Pairing.G1Point c;\n}\n"})}),"\n",(0,n.jsx)(i.h3,{id:"prime_q",children:"PRIME_Q"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-solidity",children:"uint256 PRIME_Q\n"})}),"\n",(0,n.jsx)(i.h3,{id:"invalidproofq",children:"InvalidProofQ"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-solidity",children:"error InvalidProofQ()\n"})}),"\n",(0,n.jsx)(i.p,{children:"custom errors"}),"\n",(0,n.jsx)(i.h3,{id:"invalidinputval",children:"InvalidInputVal"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-solidity",children:"error InvalidInputVal()\n"})}),"\n",(0,n.jsx)(i.h3,{id:"verify",children:"verify"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-solidity",children:"function verify(uint256[8] _proof, struct SnarkCommon.VerifyingKey vk, uint256 input) public view returns (bool isValid)\n"})}),"\n",(0,n.jsx)(i.p,{children:"Verify a zk-SNARK proof"}),"\n",(0,n.jsx)(i.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"_proof"}),(0,n.jsx)(i.td,{children:"uint256[8]"}),(0,n.jsx)(i.td,{children:"The proof"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"vk"}),(0,n.jsx)(i.td,{children:"struct SnarkCommon.VerifyingKey"}),(0,n.jsx)(i.td,{children:"The verifying key"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"input"}),(0,n.jsx)(i.td,{children:"uint256"}),(0,n.jsx)(i.td,{children:"The public inputs to the circuit"})]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"return-values",children:"Return Values"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"isValid"}),(0,n.jsx)(i.td,{children:"bool"}),(0,n.jsx)(i.td,{children:"Whether the proof is valid given the verifying key and public          input. Note that this function only supports one public input.          Refer to the Semaphore source code for a verifier that supports          multiple public inputs."})]})})]}),"\n",(0,n.jsx)(i.h3,{id:"checkpoint",children:"checkPoint"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-solidity",children:"function checkPoint(uint256 point) internal pure\n"})})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},2459:(e,i,r)=>{r.d(i,{Z:()=>l,a:()=>o});var n=r(79);const t={},s=n.createContext(t);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);