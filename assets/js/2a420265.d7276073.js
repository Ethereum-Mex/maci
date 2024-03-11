"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1851],{3734:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=i(5250),r=i(720);const o={slug:"maci-v1-2-0-release",title:"MACI v1.2.0 Release",authors:{name:"ctrlc03",title:"MACI team",url:"https://pse.dev",image_url:"/img/pse-logo-round.png"},tags:["release","audit","security","documentation"]},s="MACI v1.2 Release",a={permalink:"/blog/maci-v1-2-0-release",editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/blog/2024-02-28-maci-v1.2.0.md",source:"@site/blog/2024-02-28-maci-v1.2.0.md",title:"MACI v1.2.0 Release",description:"We are pleased to announce the release of MACI v1.2.0!",date:"2024-02-28T00:00:00.000Z",formattedDate:"February 28, 2024",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"audit",permalink:"/blog/tags/audit"},{label:"security",permalink:"/blog/tags/security"},{label:"documentation",permalink:"/blog/tags/documentation"}],readingTime:5.565,hasTruncateMarker:!1,authors:[{name:"ctrlc03",title:"MACI team",url:"https://pse.dev",image_url:"/img/pse-logo-round.png",imageURL:"/img/pse-logo-round.png"}],frontMatter:{slug:"maci-v1-2-0-release",title:"MACI v1.2.0 Release",authors:{name:"ctrlc03",title:"MACI team",url:"https://pse.dev",image_url:"/img/pse-logo-round.png",imageURL:"/img/pse-logo-round.png"},tags:["release","audit","security","documentation"]},unlisted:!1,nextItem:{title:"New year, new MACI",permalink:"/blog/2024-team-roadmap"}},c={authorsImageUrls:[void 0]},l=[{value:"Background",id:"background",level:2},{value:"Refactoring Work",id:"refactoring-work",level:2},{value:"Library Updates",id:"library-updates",level:3},{value:"Code Refactor",id:"code-refactor",level:3},{value:"New Features",id:"new-features",level:2},{value:"Flexible Voting Strategies",id:"flexible-voting-strategies",level:3},{value:"New Gatekeeper",id:"new-gatekeeper",level:3},{value:"Documentation Website",id:"documentation-website",level:3},{value:"Security Audit",id:"security-audit",level:2},{value:"Trusted Setup Ceremony",id:"trusted-setup-ceremony",level:2},{value:"Get Involved",id:"get-involved",level:2},{value:"References",id:"references",level:2},{value:"Release",id:"release",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We are pleased to announce the release of MACI ",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/releases/tag/v1.2.0",children:"v1.2.0"}),"!"]}),"\n",(0,n.jsxs)(t.p,{children:["This is our first release since ",(0,n.jsx)(t.a,{href:"/blog/maci-v1-1-1-release",children:"MACI v1.1.1"})," just over one year ago. This new release focuses on improved developer experience, security, performance and clearer documentation for users looking to learn and use MACI."]}),"\n",(0,n.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,n.jsxs)(t.p,{children:["MACI - Minimal Anti-Collusion Infrastructure - is an Ethereum application that provides privacy and collusion resistance for on-chain voting. If you're new to MACI, we first recommend reading our ",(0,n.jsx)(t.a,{href:"/docs/introduction",children:"documentation"})," for background information and and technical details."]}),"\n",(0,n.jsx)(t.h2,{id:"refactoring-work",children:"Refactoring Work"}),"\n",(0,n.jsx)(t.p,{children:"We prioritized enhancing MACI's developer experience by refactoring its code, fixing bugs, and improving documentation."}),"\n",(0,n.jsx)(t.p,{children:"Key refactoring activities were:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Upgrading libraries to their latest versions and substituting obsolete dependencies with up-to-date and actively maintained alternatives."}),"\n",(0,n.jsx)(t.li,{children:"Making the code standardized, modular, well-documented, and uniformly formatted."}),"\n",(0,n.jsx)(t.li,{children:"Fixing bugs and community-reported issues."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"library-updates",children:"Library Updates"}),"\n",(0,n.jsxs)(t.p,{children:["MACI has relied on custom code and dependencies since its initial implementation, notably from repositories by one of the original MACI developers, ",(0,n.jsx)(t.a,{href:"https://github.com/weijiekoh",children:"Koh Wei Jie"}),". We felt that MACI could benefit from a dependency refresh, so we've shifted towards using actively maintained open-source libraries, such as ",(0,n.jsx)(t.a,{href:"https://github.com/erhant/circomkit",children:"circomkit"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/zk-kit",children:"zk-kit"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Circomkit has become our go-to for circuit-related tasks, such as compiling circuits, generating test zkeys, and unit tests."}),"\n",(0,n.jsxs)(t.p,{children:["We've moved reusable circuit logic, like our ",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/zk-kit/tree/main/packages/poseidon-cipher",children:"Poseidon permutation"}),"\xa0encryption and decryption code, into zk-kit. This not only benefits MACI through more circuit usage and testing but also supports wider community adoption."]}),"\n",(0,n.jsxs)(t.p,{children:["These efforts are part of a broader initiative at ",(0,n.jsx)(t.a,{href:"https://pse.dev/",children:"Privacy and Scaling Explorations (PSE)"})," to foster open-source development and contribute to public goods. By aligning MACI with these values, we aim to enhance its utility and encourage collaborative growth. In the coming months, we're committed to extracting more of our circuit logic for broader use (",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/zk-kit/issues/131",children:"track progress here"}),") and contributing to projects that align with ",(0,n.jsx)(t.a,{href:"/roadmap#maci-mission--vision",children:"our mission"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"code-refactor",children:"Code Refactor"}),"\n",(0,n.jsx)(t.p,{children:"We've undergone extensive efforts to clean up MACI's code:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Removed dead and redundant code."}),"\n",(0,n.jsx)(t.li,{children:"Split monolithic files into smaller, logically structured ones."}),"\n",(0,n.jsxs)(t.li,{children:["Improved documentation with detailed code comments and tools like (",(0,n.jsx)(t.a,{href:"https://typedoc.org/",children:"TypeDoc"}),"\xa0and\xa0",(0,n.jsx)(t.a,{href:"https://github.com/OpenZeppelin/solidity-docgen",children:"solidity-docgen"}),") for automatic doc generation."]}),"\n",(0,n.jsx)(t.li,{children:"Enforced strong type safety on the TypeScript components."}),"\n",(0,n.jsx)(t.li,{children:"Optimized and modularized the smart contract code."}),"\n",(0,n.jsx)(t.li,{children:"Extended the test suites."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"These improvements aim to simplify the onboarding process for new developers, ensuring they can easily navigate and effectively utilize MACI."}),"\n",(0,n.jsx)(t.h2,{id:"new-features",children:"New Features"}),"\n",(0,n.jsx)(t.h3,{id:"flexible-voting-strategies",children:"Flexible Voting Strategies"}),"\n",(0,n.jsx)(t.p,{children:"After years of built-in quadratic voting (QV) in MACI, we now support non-quadratic voting polls. This opens up the door to potential integrations with a wider variety of projects, such as DAO governance applications."}),"\n",(0,n.jsx)(t.p,{children:"The new version of the Tally circuit (specific for non-QV), has reduced constraints, enabling a quicker proof generation process for vote tallying."}),"\n",(0,n.jsx)(t.p,{children:"We invite projects interested in leveraging this secure, on-chain voting mechanism to reach out for potential integrations. We hope to continue to expand support for additional voting methodologies, so please let us know your project's needs!"}),"\n",(0,n.jsx)(t.h3,{id:"new-gatekeeper",children:"New Gatekeeper"}),"\n",(0,n.jsxs)(t.p,{children:["In our effort to fortify MACI against Sybil attacks, we've integrated an innovative gatekeeper mechanism: ",(0,n.jsx)(t.a,{href:"https://attest.sh/",children:"EAS"})," - you can ",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/v1.2.0/contracts/contracts/gatekeepers/EASGatekeeper.sol",children:"view the contract here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"As part of configuring a MACI deployment, the coordinator sets a user signup gatekeeper contract. This contract dictates the criteria a user must pass in order to participate in a poll. For example, user might need to prove ownership of a certain NFT, or prove that they have passed some sort of proof-of-personhood verification."}),"\n",(0,n.jsxs)(t.p,{children:["With the addition of this new gatekeeper, EAS (and soon\u2122 ",(0,n.jsx)(t.a,{href:"https://www.hatsprotocol.xyz/",children:"Hats Protocol"}),", MACI instances could be configured to e.g. only allow Ethereum accounts with a trusted EAS attestation or those designated with a specific role by the Hats Protocol. These modules open up new avenues for access control strategies."]}),"\n",(0,n.jsxs)(t.p,{children:["We expect to continue to expand our ",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/tree/dev/contracts/contracts/gatekeepers",children:"gatekeeper capabilities"})," and welcome the community to come up with new and innovative ways to grant access to MACI's rounds, helping make MACI more customizable and sybil-resilient. The Hats Protocol gatekeeper is ",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/pull/1191",children:"currently in progress"})," and will be released soon\u2122 (in v1.2.1)."]}),"\n",(0,n.jsx)(t.h3,{id:"documentation-website",children:"Documentation Website"}),"\n",(0,n.jsxs)(t.p,{children:["We're excited to announce that all MACI documentation has been unified on our new website, ",(0,n.jsx)(t.a,{href:"/",children:"maci.pse.dev"}),"!"]}),"\n",(0,n.jsxs)(t.p,{children:["This platform will serve as the definitive resource for all information related to MACI, including ",(0,n.jsx)(t.a,{href:"/blog",children:"blog"})," releases, ",(0,n.jsx)(t.a,{href:"/docs/introduction",children:"documentation"})," updates, and ",(0,n.jsx)(t.a,{href:"/roadmap",children:"roadmap"})," progress. Please report any inconsistencies you may find. As always, we welcome suggestions on how to make it better."]}),"\n",(0,n.jsx)(t.h2,{id:"security-audit",children:"Security Audit"}),"\n",(0,n.jsxs)(t.p,{children:["Thanks to thorough reviews by PSE's internal Audit team, clr.fund's developer, ",(0,n.jsx)(t.a,{href:"https://github.com/yuetloo",children:"yuetloo"}),", and our core development team, we've identified and addressed several bugs during our recent refactoring efforts. Most notably, a critical bug in MACI v1.x discovered by ",(0,n.jsx)(t.a,{href:"https://github.com/kcharbo3",children:"Kyle"}),", which could have allowed coordinators to censor votes, has been ",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/pull/1170",children:"fixed"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For more details on our recent audit, please ",(0,n.jsx)(t.a,{href:"/docs/audit#pse-audit-2024",children:"refer to our audit docs"})," or ",(0,n.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(7049).Z+"",children:"view the full report"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"After this audit and the resulting fixes, we feel more confident with MACI and its security."}),"\n",(0,n.jsx)(t.h2,{id:"trusted-setup-ceremony",children:"Trusted Setup Ceremony"}),"\n",(0,n.jsxs)(t.p,{children:["Following the successful completion of our ",(0,n.jsx)(t.a,{href:"https://ceremony.pse.dev/projects/Maci%20v1%20Trusted%20Setup%20Ceremony",children:"MACI trusted setup ceremony"}),"\xa0for ",(0,n.jsx)(t.a,{href:"/blog/maci-v1-1-1-release",children:"MACI v1.1.1"}),", we are preparing for a new ceremony to cover the security enhancements added in our v1.2.0 circuits."]}),"\n",(0,n.jsxs)(t.p,{children:["To accomplish this, we'll leverage the tooling of ",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/p0tion",children:"P0tion"}),", which helps to streamline and automate Groth16 phase2 ceremonies."]}),"\n",(0,n.jsxs)(t.p,{children:["We'll update this page after the ceremony completes to include the production-ready zkey artifacts. In the meantime, the artifacts for v.1.1.1 can be found on our\xa0",(0,n.jsx)(t.a,{href:"/docs/trusted-setup",children:"website"}),", and the\xa0",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/dev/circuits/circom/tallyVotes.circom",children:(0,n.jsx)(t.code,{children:"tallyVotes"})}),"\xa0artifacts can still be used in production."]}),"\n",(0,n.jsx)(t.h2,{id:"get-involved",children:"Get Involved"}),"\n",(0,n.jsxs)(t.p,{children:["MACI is deeply committed to our community, through our open initiatives like ",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/discussions/859",children:"public roadmaps"}),", transparent ",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/discussions/847",children:"repository management"}),", and a ",(0,n.jsx)(t.a,{href:"https://discord.com/invite/sF5CT5rzrR",children:"public Discord channel"})," for interaction with our team."]}),"\n",(0,n.jsxs)(t.p,{children:["With every issue, PR, feature and roadmap iteration, we welcome feedback to ensure that the continued development of MACI reflects your and the community's needs. Keep an eye out on our\xa0",(0,n.jsx)(t.a,{href:"/",children:"documentation"}),",\xa0",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/discussions",children:"GitHub discussions"}),"\xa0and our official\xa0",(0,n.jsx)(t.a,{href:"https://twitter.com/zkMACI",children:"Twitter/X account"}),"\xa0for updates."]}),"\n",(0,n.jsxs)(t.p,{children:["For those looking to contribute directly, report bugs, or offer feedback, our ",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci",children:"GitHub repository"})," is open for issues and discussions. We're eager to assist with your projects or contributions."]}),"\n",(0,n.jsxs)(t.p,{children:["For practical implementation insights, review our docs as well as the ",(0,n.jsx)(t.a,{href:"https://github.com/clrfund/monorepo/",children:"clr.fund"}),"\xa0and\xa0",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/qf",children:"QF"}),"\xa0repositories as reference implementations. Both are quadratic funding implementations, a mechanism which otherwise is highly susceptible to collusion and bribery. Most notably,\xa0clr.fund\xa0is already working on integrating MACI v1.2.0, after having used v0.x until now. You can follow their development effort under this\xa0",(0,n.jsx)(t.a,{href:"https://github.com/clrfund/monorepo/tree/feat/maci-v1",children:"GitHub branch"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For any other questions or feedback, please reach out to us via ",(0,n.jsx)(t.a,{href:"https://discord.com/invite/sF5CT5rzrR",children:"PSE's Discord"}),",\xa0in our\xa0",(0,n.jsxs)(t.a,{href:"https://https//discord.com/channels/943612659163602974/1164613809730748507",children:[(0,n.jsx)(t.code,{children:"#\ud83d\uddf3\ufe0f-maci"})," channel"]}),". We're excited to connect and collaborate with you!"]}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci",children:"MACI GitHub repository"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/introduction",children:"MACI documentation"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/blog/maci-1-0-technical-introduction",children:"A technical introduction to MACI 1.0 - Kyle Charbonnet"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413",children:"Minimal anti-collusion infrastructure - Vitalik"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://discord.com/invite/sF5CT5rzrR",children:"PSE Discord server"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"release",children:"Release"}),"\n",(0,n.jsxs)(t.p,{children:["Here's the link to the new release code in GitHub:\xa0",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/releases/tag/v1.2.0",children:"v1.2.0 Release"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7049:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/20240223_PSE_Audit_audit_report-a181b98b05198c102be49113c354b5f2.pdf"},720:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>s});var n=i(79);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);