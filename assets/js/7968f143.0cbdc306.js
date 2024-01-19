"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3373],{9876:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=s(5250),i=s(2459);const r={title:"MACI Testing in Detail",description:"How MACI tests work in detail",sidebar_label:"Testing in detail",sidebar_position:10},o="Testing in detail",a={id:"testing-in-detail",title:"MACI Testing in Detail",description:"How MACI tests work in detail",source:"@site/versioned_docs/version-v1.x/testing-in-detail.md",sourceDirName:".",slug:"/testing-in-detail",permalink:"/docs/testing-in-detail",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/testing-in-detail.md",tags:[],version:"v1.x",sidebarPosition:10,frontMatter:{title:"MACI Testing in Detail",description:"How MACI tests work in detail",sidebar_label:"Testing in detail",sidebar_position:10},sidebar:"version-1.x/mySidebar",previous:{title:"Testing",permalink:"/docs/testing"},next:{title:"Integrating",permalink:"/docs/integrating"}},d={},c=[{value:"Automated Tests",id:"automated-tests",level:2},{value:"CLI Tests",id:"cli-tests",level:3},{value:"Integration Tests",id:"integration-tests",level:3},{value:"How to implement a new test case",id:"how-to-implement-a-new-test-case",level:4},{value:"MACI keys integration tests",id:"maci-keys-integration-tests",level:4},{value:"Contract tests",id:"contract-tests",level:3},{value:"Circuits tests",id:"circuits-tests",level:3},{value:"Core",id:"core",level:3},{value:"Domainobjs/Crypto tests",id:"domainobjscrypto-tests",level:3},{value:"&quot;Manual&quot; Testing",id:"manual-testing",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"testing-in-detail",children:"Testing in detail"}),"\n",(0,n.jsxs)(t.p,{children:["This doc expands on our ",(0,n.jsx)(t.a,{href:"/docs/testing",children:"introduction to testing"})," doc and explains how MACI tests work in greater detail. This information should be used by MACI's maintainers as well as contributors."]}),"\n",(0,n.jsx)(t.h2,{id:"automated-tests",children:"Automated Tests"}),"\n",(0,n.jsx)(t.h3,{id:"cli-tests",children:"CLI Tests"}),"\n",(0,n.jsx)(t.p,{children:"MACI's CLI provides a series of commands that can be used by both the coordinator and voters, to interact with MACI, from deploying smart contracts to submitting a vote."}),"\n",(0,n.jsx)(t.p,{children:"Currently, there are a number of test cases that are available inside the cli tests folder. The tests are split into two categories:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"e2e tests that include the entire MACI stack, from deploying the contracts to submitting a vote and tallying all results."}),"\n",(0,n.jsx)(t.li,{children:"e2e tests as above, but with the subsidy feature enabled."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The goal of these tests is to ensure that the MACI stack works as expected, and that the coordinator and voters can interact with the system as expected. They currently do not attempt to verify whether the tally results are expected, or that all votes were accounted for. On the other hand, they test different scenarios, mixing different numbers of voters and messages."}),"\n",(0,n.jsx)(t.h3,{id:"integration-tests",children:"Integration Tests"}),"\n",(0,n.jsx)(t.p,{children:"Integration tests follow a similar fashion of the CLI tests, though they also ensure that the tally results are as expected."}),"\n",(0,n.jsx)(t.p,{children:"Currently, tests are defined using a JSON file, here is one example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "name": "Happy path",\n  "description": "Full tree, 4 batches, no bribers",\n  "numVotesPerUser": 1,\n  "numUsers": 15,\n  "expectedTally": [15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  "expectedSpentVoiceCredits": [15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  "expectedTotalSpentVoiceCredits": 15\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This test will generate 15 signups (as expressed in ",(0,n.jsx)(t.code,{children:"numUsers"}),"), and submit one vote (",(0,n.jsx)(t.code,{children:"numVotesPerUser"}),") for each of the users. As we did not provide any vote detail, it will use the default: ",(0,n.jsx)(t.code,{children:"weight = 1"}),", ",(0,n.jsx)(t.code,{children:"option = 0"})," for all voters. This will result of course in a tally result of 15 for option 0, and 0 for all other options."]}),"\n",(0,n.jsx)(t.p,{children:"Finally, the whole process of merging the state and message trees is performed, proofs are generated and the tally result is verified against the expected result."}),"\n",(0,n.jsx)(t.h4,{id:"how-to-implement-a-new-test-case",children:"How to implement a new test case"}),"\n",(0,n.jsxs)(t.p,{children:["To add a new test cases, it is quite simple. You can amend the ",(0,n.jsx)(t.code,{children:"integrationTests/ts/__tests__/data/suites.json"})," file and add your test declaration in there."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "name": "Subsidy test",\n  "description": "has subsidy result",\n  "numUsers": 4,\n  "numVotesPerUser": 1,\n  "votes": {\n    "0": {\n      "0": { "voteOptionIndex": 0, "voteWeight": 1, "valid": true }\n    },\n    "1": {\n      "0": { "voteOptionIndex": 0, "voteWeight": 1, "valid": true }\n    },\n    "2": {\n      "0": { "voteOptionIndex": 0, "voteWeight": 1, "valid": true }\n    },\n    "3": {\n      "0": { "voteOptionIndex": 0, "voteWeight": 1, "valid": true }\n    }\n  },\n  "expectedTally": [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  "expectedSpentVoiceCredits": [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  "expectedTotalSpentVoiceCredits": 4,\n  "subsidy": {\n    "enabled": true,\n    "expectedSubsidy": [117636, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\n  }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Let's look at the fields in detail:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"name"}),": the name of the test case"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"description"}),": a description of the test case"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"numUsers"}),": the number of users to generate"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"numVotesPerUser"}),": the number of votes to generate for each user"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"votes"}),": the votes to generate. This is an object where the key is the user index, and the value is another object where the key is the message index, and the value is the vote details. If you do not provide any vote details, the default will be used: ",(0,n.jsx)(t.code,{children:"weight = 1"}),", ",(0,n.jsx)(t.code,{children:"option = 0"})," for all voters."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"expectedTally"}),": the expected tally result for each vote option (in order)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"expectedSpentVoiceCredits"}),": the expected spent voice credits for each vote option (in order)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"expectedTotalSpentVoiceCredits"}),": the expected total spent voice credits"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"subsidy"}),": an object that contains the subsidy details. If you do not provide any subsidy details, the default will be used: ",(0,n.jsx)(t.code,{children:"enabled = false"}),", ",(0,n.jsx)(t.code,{children:"expectedSubsidy = []"}),". If you do provide subsidy details, you must provide both fields."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"As an example, let's try to implement a test given the following criterias:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"We want 10 users to signup"}),"\n",(0,n.jsx)(t.li,{children:"We want each user to publish a different vote"}),"\n",(0,n.jsx)(t.li,{children:"We want to verify that the tally result is as expected"}),"\n",(0,n.jsx)(t.li,{children:"We will not use the subsidy feature"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "name": "10 Users test",\n  "description": "Should signup 10 users, submit 10 votes and tally the results",\n  "numUsers": 10,\n  "numVotesPerUser": 1,\n  "votes": {\n    "0": {\n      "0": { "voteOptionIndex": 0, "voteWeight": 5 }\n    },\n    "1": {\n      "0": { "voteOptionIndex": 0, "voteWeight": 9 }\n    },\n    "2": {\n      "0": { "voteOptionIndex": 5, "voteWeight": 3 }\n    },\n    "3": {\n      "0": { "voteOptionIndex": 3, "voteWeight": 2 }\n    },\n    "4": {\n      "0": { "voteOptionIndex": 0, "voteWeight": 1 }\n    },\n    "5": {\n      "0": { "voteOptionIndex": 9, "voteWeight": 1 }\n    },\n    "6": {\n      "0": { "voteOptionIndex": 4, "voteWeight": 7 }\n    },\n    "7": {\n      "0": { "voteOptionIndex": 7, "voteWeight": 5 }\n    },\n    "8": {\n      "0": { "voteOptionIndex": 3, "voteWeight": 10 }\n    },\n    "9": {\n      "0": { "voteOptionIndex": 8, "voteWeight": 2 }\n    }\n  },\n  "expectedTally": [15, 0, 0, 12, 7, 3, 0, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],\n  "expectedSpentVoiceCredits": [107, 0, 0, 104, 49, 9, 0, 25, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n  "expectedTotalSpentVoiceCredits": 299\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Why expectedTally as above"})}),"\n",(0,n.jsx)(t.p,{children:"[(5 + 9 + 1), 0, 0, (2 + 10), 7, 3, 0, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0] -> [15, 0, 0, 12, 7, 3, 0, 5, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0]"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Why 299 voice credits spent"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"5 ** 2 + 9 ** 2 + 3 ** 2 + 2 ** 2 + 1 ** 2 + 1 ** 1 + 7 ** 2 + 5 ** 2 + 10 ** 2 + 2 ** 2 = 25 + 81 + 9 + 4 + 1 + 1 + 49 + 25 + 100 + 4 = 299"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Why expectedSpentVoiceCredits as above"})}),"\n",(0,n.jsx)(t.p,{children:"[(25 + 81 + 1), 0, 0, (4 + 100), 49, 0, 25, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0] -> [107, 0, 0, 104, 49, 0, 25, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]"}),"\n",(0,n.jsx)(t.h4,{id:"maci-keys-integration-tests",children:"MACI keys integration tests"}),"\n",(0,n.jsxs)(t.p,{children:["Another test file which is found inside the integration tests folder is the ",(0,n.jsx)(t.code,{children:"maciKeys.test.ts"})," file. This file contains a number of tests that are used to verify that the MACI keys work as expected. These tests are written in TypeScript and use the ",(0,n.jsx)(t.code,{children:"mocha"})," and ",(0,n.jsx)(t.code,{children:"chai"})," frameworks."]}),"\n",(0,n.jsxs)(t.p,{children:["They are testing that between the ",(0,n.jsx)(t.code,{children:"contracts"}),", ",(0,n.jsx)(t.code,{children:"domainobjs"})," and ",(0,n.jsx)(t.code,{children:"crypto"})," packages, the MACI keys are working correctly, and are serialized/deserialized as expected. This is particularly important to test due to different data formats for keys, especially when parsed from the smart contract events."]}),"\n",(0,n.jsx)(t.h3,{id:"contract-tests",children:"Contract tests"}),"\n",(0,n.jsxs)(t.p,{children:["Within the contracts folder, there are a number of tests that are used to verify that the contracts work as expected. These tests are written in TypeScript and use the ",(0,n.jsx)(t.code,{children:"hardhat"})," framework."]}),"\n",(0,n.jsx)(t.p,{children:"These tests interact with all other packages, such as crypto, domainobjs and core, where mock data comes from. Their main goal is to ensure that the smart contracts have the correct parameters when deployed, privileged functions cannot be called by non-privileged users, and that the contract state is as expected after a series of operations."}),"\n",(0,n.jsx)(t.h3,{id:"circuits-tests",children:"Circuits tests"}),"\n",(0,n.jsxs)(t.p,{children:["Within the circuits folder, there are a number of tests that are used to verify that the circuits work as expected. These tests are written in TypeScript and use the ",(0,n.jsx)(t.code,{children:"circom_tester"})," (which runs on top of ",(0,n.jsx)(t.code,{children:"mocha"})," and ",(0,n.jsx)(t.code,{children:"chai"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["These tests often use mock data from the ",(0,n.jsx)(t.code,{children:"core"})," package. For instance, when testing the ",(0,n.jsx)(t.code,{children:"processMessages"})," circuit, we are required to generate the parameters from the ",(0,n.jsx)(t.code,{children:"core"})," packing, using the ",(0,n.jsx)(t.code,{children:"Poll:processMessages"})," function. The same applies to vote tallying, where we need the ",(0,n.jsx)(t.code,{children:"Poll:tally"})," function to be run first with mock users and vote messages."]}),"\n",(0,n.jsxs)(t.p,{children:["All of the tests run using test parameters, usually ",(0,n.jsx)(t.code,{children:"10, 2, 1, 2"}),", aside from the tests inside: ",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/dev/circuits/ts/__tests__/CeremonyParams.test.ts",children:(0,n.jsx)(t.code,{children:"ceremonyParam"})})," which use the parameters of the latest MACI ceremony. More details on the trusted setup can be found ",(0,n.jsx)(t.a,{href:"/docs/trusted-setup",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"core",children:"Core"}),"\n",(0,n.jsxs)(t.p,{children:["The core package contains a number of tests that are used to verify that the core functions work as expected. These tests are written in TypeScript and use the ",(0,n.jsx)(t.code,{children:"mocha"})," and ",(0,n.jsx)(t.code,{children:"chai"})," frameworks."]}),"\n",(0,n.jsx)(t.p,{children:"These tests interact with the crypto and dombinobjs packages, where mock data comes from. Their main goal is to ensure that the core functions work as expected, and that the state is as expected after a series of operations."}),"\n",(0,n.jsxs)(t.p,{children:["Currently, there is a blend of e2e and unit tests, where e2e tests are used to verify that the entire MACI local processing works as expcted (users signup, publish votes, messages are processed and finally these votes are tallied). Unit tests on the other hand are used to verify that the core functions work as expected, such as ",(0,n.jsx)(t.code,{children:"processMessage"})," and ",(0,n.jsx)(t.code,{children:"tallyVotes"}),". You will find them in separate files, with e2e being ",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/dev/core/ts/__tests__/e2e.test.ts",children:"here"})," and unit tests in the other files."]}),"\n",(0,n.jsx)(t.h3,{id:"domainobjscrypto-tests",children:"Domainobjs/Crypto tests"}),"\n",(0,n.jsxs)(t.p,{children:["These tests are used to verify that MACI's primitives such as private keys work as expected. They are written in TypeScript and use the ",(0,n.jsx)(t.code,{children:"mocha"})," and ",(0,n.jsx)(t.code,{children:"chai"})," frameworks."]}),"\n",(0,n.jsx)(t.h2,{id:"manual-testing",children:'"Manual" Testing'}),"\n",(0,n.jsxs)(t.p,{children:["To ensure that the MACI stack works as expected, without having to run the entire test suite (or even just the e2e tests), there is a ",(0,n.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/dev/cli/testScript.sh",children:"bash script"})," inside the cli folder which can be used."]}),"\n",(0,n.jsx)(t.p,{children:"This script contains a number of actions which touch all of the parts of MACI, and resemble exactly what other e2e tests do."}),"\n",(0,n.jsx)(t.p,{children:"Looking at this in more details we do the following:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Deploy a ",(0,n.jsx)(t.code,{children:"VkRegistry"})," contract"]}),"\n",(0,n.jsx)(t.li,{children:"Set the verification keys on this smart contract"}),"\n",(0,n.jsxs)(t.li,{children:["Deploy a ",(0,n.jsx)(t.code,{children:"MACI"})," contract (and associated utility contracts)"]}),"\n",(0,n.jsx)(t.li,{children:"Deploy a Poll from the MACI contract."}),"\n",(0,n.jsx)(t.li,{children:"Signup 1 user"}),"\n",(0,n.jsx)(t.li,{children:"Publish 2 messages"}),"\n",(0,n.jsx)(t.li,{children:"Travel in time (local blockchain node) to arrive at the end of the poll"}),"\n",(0,n.jsx)(t.li,{children:"Merge the signups tree"}),"\n",(0,n.jsx)(t.li,{children:"Merge the messages tree"}),"\n",(0,n.jsx)(t.li,{children:"Generate proofs for the message processing and vote tallying"}),"\n",(0,n.jsx)(t.li,{children:"Update the on chain state"}),"\n",(0,n.jsx)(t.li,{children:"Verify that proofs and tally are correct"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The above is the minimum required to ensure that the stack works as expected, as it encompasses actions from both voters and the coordinator."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},2459:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>o});var n=s(79);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);