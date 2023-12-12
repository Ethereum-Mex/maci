"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5054],{7580:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(5893),t=r(1151);const s={},o="IVerifier",l={id:"solidity-docs/crypto/Verifier",title:"IVerifier",description:"verify",source:"@site/versioned_docs/version-v1.x/solidity-docs/crypto/Verifier.md",sourceDirName:"solidity-docs/crypto",slug:"/solidity-docs/crypto/Verifier",permalink:"/docs/solidity-docs/crypto/Verifier",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/crypto/Verifier.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"SnarkConstants",permalink:"/docs/solidity-docs/crypto/SnarkConstants"},next:{title:"FreeForAllGatekeeper",permalink:"/docs/solidity-docs/gatekeepers/FreeForAllSignUpGatekeeper"}},c={},d=[{value:"verify",id:"verify",level:3},{value:"MockVerifier",id:"mockverifier",level:2},{value:"result",id:"result",level:3},{value:"verify",id:"verify-1",level:3},{value:"Verifier",id:"verifier",level:2},{value:"Proof",id:"proof",level:3},{value:"PRIME_Q",id:"prime_q",level:3},{value:"ERROR_PROOF_Q",id:"error_proof_q",level:3},{value:"ERROR_INPUT_VAL",id:"error_input_val",level:3},{value:"verify",id:"verify-2",level:3},{value:"Return Values",id:"return-values",level:4}];function a(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"iverifier",children:"IVerifier"}),"\n",(0,n.jsx)(i.h3,{id:"verify",children:"verify"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-solidity",children:"function verify(uint256[8], struct SnarkCommon.VerifyingKey, uint256) public view virtual returns (bool)\n"})}),"\n",(0,n.jsx)(i.h2,{id:"mockverifier",children:"MockVerifier"}),"\n",(0,n.jsx)(i.h3,{id:"result",children:"result"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-solidity",children:"bool result\n"})}),"\n",(0,n.jsx)(i.h3,{id:"verify-1",children:"verify"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-solidity",children:"function verify(uint256[8], struct SnarkCommon.VerifyingKey, uint256) public view returns (bool)\n"})}),"\n",(0,n.jsx)(i.h2,{id:"verifier",children:"Verifier"}),"\n",(0,n.jsx)(i.h3,{id:"proof",children:"Proof"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-solidity",children:"struct Proof {\n  struct Pairing.G1Point a;\n  struct Pairing.G2Point b;\n  struct Pairing.G1Point c;\n}\n"})}),"\n",(0,n.jsx)(i.h3,{id:"prime_q",children:"PRIME_Q"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-solidity",children:"uint256 PRIME_Q\n"})}),"\n",(0,n.jsx)(i.h3,{id:"error_proof_q",children:"ERROR_PROOF_Q"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-solidity",children:"string ERROR_PROOF_Q\n"})}),"\n",(0,n.jsx)(i.h3,{id:"error_input_val",children:"ERROR_INPUT_VAL"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-solidity",children:"string ERROR_INPUT_VAL\n"})}),"\n",(0,n.jsx)(i.h3,{id:"verify-2",children:"verify"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-solidity",children:"function verify(uint256[8] _proof, struct SnarkCommon.VerifyingKey vk, uint256 input) public view returns (bool)\n"})}),"\n",(0,n.jsx)(i.h4,{id:"return-values",children:"Return Values"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"[0]"}),(0,n.jsx)(i.td,{children:"bool"}),(0,n.jsx)(i.td,{children:"Whether the proof is valid given the verifying key and public          input. Note that this function only supports one public input.          Refer to the Semaphore source code for a verifier that supports          multiple public inputs."})]})})]})]})}function u(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,i,r)=>{r.d(i,{Z:()=>l,a:()=>o});var n=r(7294);const t={},s=n.createContext(t);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);