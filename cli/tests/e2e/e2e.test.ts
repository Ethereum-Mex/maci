import { genRandomSalt } from "maci-crypto";
import { Keypair } from "maci-domainobjs";

import fs from "fs";

import {
  airdrop,
  checkVerifyingKeys,
  deploy,
  deployPoll,
  deployVkRegistryContract,
  genLocalState,
  genProofs,
  mergeMessages,
  mergeSignups,
  proveOnChain,
  publish,
  setVerifyingKeys,
  signup,
  timeTravel,
  topup,
  verify,
} from "../../ts/commands";
import { DeployedContracts, GenProofsArgs, PollContracts } from "../../ts/utils";
import {
  deployPollArgs,
  checkVerifyingKeysArgs,
  coordinatorPrivKey,
  pollDuration,
  proveOnChainArgs,
  verifyArgs,
  mergeMessagesArgs,
  mergeSignupsArgs,
  processMessageTestZkeyPath,
  setVerifyingKeysArgs,
  tallyVotesTestZkeyPath,
  testProcessMessagesWasmPath,
  testProcessMessagesWitnessDatPath,
  testProcessMessagesWitnessPath,
  testProofsDirPath,
  testRapidsnarkPath,
  testTallyFilePath,
  testTallyVotesWasmPath,
  testTallyVotesWitnessDatPath,
  testTallyVotesWitnessPath,
  deployArgs,
} from "../constants";
import { cleanVanilla, isArm } from "../utils";

/**
 Test scenarios:
    1 signup, 1 message
    4 signups, 6 messages
    5 signups, 1 message
    8 signups, 10 messages
    4 signups, 4 messages
    test if keys are set correctly given a set of files
    1 signup and 1 valid message for multiple polls
    7 signups and 1 message, another polls and 6 messages
    1 signup, 1 topup message and 1 vote message
 */
describe("e2e tests", function test() {
  const useWasm = isArm();
  this.timeout(900000);

  let maciAddresses: DeployedContracts;
  let pollAddresses: PollContracts;

  const genProofsArgs: GenProofsArgs = {
    outputDir: testProofsDirPath,
    tallyFile: testTallyFilePath,
    tallyZkey: tallyVotesTestZkeyPath,
    processZkey: processMessageTestZkeyPath,
    pollId: 0,
    rapidsnark: testRapidsnarkPath,
    processWitgen: testProcessMessagesWitnessPath,
    processDatFile: testProcessMessagesWitnessDatPath,
    tallyWitgen: testTallyVotesWitnessPath,
    tallyDatFile: testTallyVotesWitnessDatPath,
    coordinatorPrivKey,
    processWasm: testProcessMessagesWasmPath,
    tallyWasm: testTallyVotesWasmPath,
    useWasm,
  };

  // before all tests we deploy the vk registry contract and set the verifying keys
  before(async () => {
    // we deploy the vk registry contract
    await deployVkRegistryContract(true);
    // we set the verifying keys
    await setVerifyingKeys(setVerifyingKeysArgs);
  });

  describe("1 signup, 1 message", () => {
    after(() => {
      cleanVanilla();
    });

    const user = new Keypair();

    before(async () => {
      // deploy the smart contracts
      maciAddresses = await deploy(deployArgs);
      // deploy a poll contract
      pollAddresses = await deployPoll(deployPollArgs);
    });

    it("should signup one user", async () => {
      await signup({ maciPubKey: user.pubKey.serialize() });
    });

    it("should publish one message", async () => {
      await publish({
        pubkey: user.pubKey.serialize(),
        stateIndex: 1n,
        voteOptionIndex: 0n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 9n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: user.privKey.serialize(),
      });
    });

    it("should generate zk-SNARK proofs and verify them", async () => {
      await timeTravel(pollDuration);
      await mergeMessages(mergeMessagesArgs);
      await mergeSignups(mergeSignupsArgs);
      const tallyFileData = await genProofs(genProofsArgs);
      await proveOnChain(proveOnChainArgs);
      await verify({
        ...verifyArgs,
        tallyData: tallyFileData,
      });
    });
  });

  describe("4 signups, 4 messages", () => {
    after(() => {
      cleanVanilla();
    });

    const users = [new Keypair(), new Keypair(), new Keypair(), new Keypair()];

    before(async () => {
      // deploy the smart contracts
      maciAddresses = await deploy(deployArgs);
      // deploy a poll contract
      pollAddresses = await deployPoll(deployPollArgs);
    });

    it("should signup four users", async () => {
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < users.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await signup({ maciPubKey: users[i].pubKey.serialize() });
      }
    });

    it("should publish four messages", async () => {
      await publish({
        pubkey: users[0].pubKey.serialize(),
        stateIndex: 1n,
        voteOptionIndex: 0n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 9n,
        salt: genRandomSalt(),
        privateKey: users[0].privKey.serialize(),
      });

      await publish({
        pubkey: users[1].pubKey.serialize(),
        stateIndex: 2n,
        voteOptionIndex: 1n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 9n,
        salt: genRandomSalt(),
        privateKey: users[1].privKey.serialize(),
      });

      await publish({
        pubkey: users[2].pubKey.serialize(),
        stateIndex: 3n,
        voteOptionIndex: 2n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 9n,
        salt: genRandomSalt(),
        privateKey: users[2].privKey.serialize(),
      });

      await publish({
        pubkey: users[3].pubKey.serialize(),
        stateIndex: 4n,
        voteOptionIndex: 3n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 9n,
        salt: genRandomSalt(),
        privateKey: users[3].privKey.serialize(),
      });
    });

    it("should generate zk-SNARK proofs and verify them", async () => {
      await timeTravel(pollDuration);
      await mergeMessages(mergeMessagesArgs);
      await mergeSignups(mergeSignupsArgs);
      const tallyFileData = await genProofs(genProofsArgs);
      await proveOnChain(proveOnChainArgs);
      await verify({ ...verifyArgs, tallyData: tallyFileData });
    });
  });

  describe("4 signups, 6 messages", () => {
    after(() => {
      cleanVanilla();
    });

    const users = [new Keypair(), new Keypair(), new Keypair(), new Keypair()];

    before(async () => {
      // deploy the smart contracts
      maciAddresses = await deploy(deployArgs);
      // deploy a poll contract
      pollAddresses = await deployPoll(deployPollArgs);
    });

    it("should signup four users", async () => {
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < users.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await signup({ maciPubKey: users[i].pubKey.serialize() });
      }
    });

    it("should publish six messages", async () => {
      await publish({
        pubkey: users[0].pubKey.serialize(),
        stateIndex: 1n,
        voteOptionIndex: 0n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 9n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: users[0].privKey.serialize(),
      });
      await publish({
        pubkey: users[1].pubKey.serialize(),
        stateIndex: 2n,
        voteOptionIndex: 0n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 9n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: users[1].privKey.serialize(),
      });
      await publish({
        pubkey: users[2].pubKey.serialize(),
        stateIndex: 3n,
        voteOptionIndex: 0n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 9n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: users[2].privKey.serialize(),
      });
      await publish({
        pubkey: users[3].pubKey.serialize(),
        stateIndex: 4n,
        voteOptionIndex: 0n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 9n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: users[3].privKey.serialize(),
      });
      await publish({
        pubkey: users[3].pubKey.serialize(),
        stateIndex: 4n,
        voteOptionIndex: 0n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 9n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: users[3].privKey.serialize(),
      });
      await publish({
        pubkey: users[3].pubKey.serialize(),
        stateIndex: 4n,
        voteOptionIndex: 0n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 9n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: users[3].privKey.serialize(),
      });
    });

    it("should generate zk-SNARK proofs and verify them", async () => {
      await timeTravel(pollDuration);
      await mergeMessages(mergeMessagesArgs);
      await mergeSignups(mergeSignupsArgs);
      await genProofs(genProofsArgs);
      await proveOnChain(proveOnChainArgs);
      await verify(verifyArgs);
    });
  });

  describe("5 signups, 1 message", () => {
    after(() => {
      cleanVanilla();
    });

    const users = [
      new Keypair(),
      new Keypair(),
      new Keypair(),
      new Keypair(),
      new Keypair(),
      new Keypair(),
      new Keypair(),
      new Keypair(),
      new Keypair(),
    ];

    before(async () => {
      // deploy the smart contracts
      maciAddresses = await deploy(deployArgs);
      // deploy a poll contract
      pollAddresses = await deployPoll(deployPollArgs);
    });

    it("should signup nine users", async () => {
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < users.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await signup({ maciPubKey: users[i].pubKey.serialize() });
      }
    });

    it("should publish one message", async () => {
      await publish({
        pubkey: users[0].pubKey.serialize(),
        stateIndex: 1n,
        voteOptionIndex: 0n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 9n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: users[0].privKey.serialize(),
      });
    });

    it("should generate zk-SNARK proofs and verify them", async () => {
      await timeTravel(pollDuration);
      await mergeMessages(mergeMessagesArgs);
      await mergeSignups(mergeSignupsArgs);
      const tallyFileData = await genProofs(genProofsArgs);
      await proveOnChain(proveOnChainArgs);
      await verify({ ...verifyArgs, tallyData: tallyFileData });
    });
  });

  describe("8 signups (same key), 12 messages (same message)", () => {
    after(() => {
      cleanVanilla();
    });

    const user = new Keypair();

    before(async () => {
      // deploy the smart contracts
      maciAddresses = await deploy(deployArgs);
      // deploy a poll contract
      pollAddresses = await deployPoll(deployPollArgs);
    });

    it("should signup eight users (same pub key)", async () => {
      for (let i = 0; i < 8; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await signup({ maciPubKey: user.pubKey.serialize() });
      }
    });

    it("should publish 12 messages with the same nonce", async () => {
      for (let i = 0; i < 12; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await publish({
          pubkey: user.pubKey.serialize(),
          stateIndex: 1n,
          voteOptionIndex: 0n,
          nonce: 1n,
          pollId: 0,
          newVoteWeight: 9n,
          maciContractAddress: maciAddresses.maciAddress,
          salt: genRandomSalt(),
          privateKey: user.privKey.serialize(),
        });
      }
    });

    it("should generate zk-SNARK proofs and verify them", async () => {
      await timeTravel(pollDuration);
      await mergeMessages(mergeMessagesArgs);
      await mergeSignups(mergeSignupsArgs);
      await genProofs(genProofsArgs);
      await proveOnChain(proveOnChainArgs);
      await verify(verifyArgs);
    });
  });

  describe("checkKeys", () => {
    before(async () => {
      // deploy maci as we need the address
      await deploy(deployArgs);
    });
    it("should check if the verifying keys have been set correctly", async () => {
      await checkVerifyingKeys(checkVerifyingKeysArgs);
    });
  });

  describe("multiplePolls1", () => {
    after(() => {
      cleanVanilla();
    });

    const user = new Keypair();

    before(async () => {
      // deploy the smart contracts
      maciAddresses = await deploy(deployArgs);
      // deploy a poll contract
      pollAddresses = await deployPoll(deployPollArgs);
      // signup
      await signup({ maciPubKey: user.pubKey.serialize() });
      // publish
      await publish({
        pubkey: user.pubKey.serialize(),
        stateIndex: 1n,
        voteOptionIndex: 0n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 9n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: user.privKey.serialize(),
      });
      // time travel
      await timeTravel(pollDuration, true);
      // generate proofs
      await mergeMessages(mergeMessagesArgs);
      await mergeSignups(mergeSignupsArgs);
      const tallyFileData = await genProofs(genProofsArgs);
      await proveOnChain(proveOnChainArgs);
      await verify({ ...verifyArgs, tallyData: tallyFileData });
      cleanVanilla();
    });

    it("should deploy a new poll", async () => {
      pollAddresses = await deployPoll(deployPollArgs);
    });

    it("should publish a new message", async () => {
      await publish({
        pubkey: user.pubKey.serialize(),
        stateIndex: 1n,
        voteOptionIndex: 0n,
        nonce: 1n,
        pollId: 1,
        newVoteWeight: 7n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: user.privKey.serialize(),
      });
    });

    it("should generate proofs and verify them", async () => {
      await timeTravel(pollDuration, true);
      await mergeMessages({ pollId: 1 });
      await mergeSignups({ pollId: 1 });
      await genProofs({ ...genProofsArgs, pollId: 1 });
      await proveOnChain({ ...proveOnChainArgs, pollId: "1" });
      await verify({ ...verifyArgs, pollId: "1" });
    });
  });

  describe("multiplePolls2", () => {
    const users = [
      new Keypair(),
      new Keypair(),
      new Keypair(),
      new Keypair(),
      new Keypair(),
      new Keypair(),
      new Keypair(),
    ];

    let secondPollAddresses: PollContracts;

    after(() => {
      cleanVanilla();
    });

    before(async () => {
      // deploy the smart contracts
      maciAddresses = await deploy(deployArgs);
    });

    it("should run the first poll", async () => {
      // deploy a poll contract
      pollAddresses = await deployPoll(deployPollArgs);

      // signup
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < users.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await signup({ maciPubKey: users[i].pubKey.serialize() });
      }

      // publish
      await publish({
        pubkey: users[0].pubKey.serialize(),
        stateIndex: 1n,
        voteOptionIndex: 0n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 9n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: users[0].privKey.serialize(),
      });

      // time travel
      await timeTravel(pollDuration, true);
      // generate proofs
      await mergeMessages(mergeMessagesArgs);
      await mergeSignups(mergeSignupsArgs);
      await genProofs(genProofsArgs);
      await proveOnChain(proveOnChainArgs);
      await verify(verifyArgs);
      cleanVanilla();
    });

    it("should deploy two more polls", async () => {
      // deploy a poll contract
      pollAddresses = await deployPoll(deployPollArgs);
      secondPollAddresses = await deployPoll(deployPollArgs);
    });

    it("should publish messages to the second poll", async () => {
      await publish({
        pubkey: users[0].pubKey.serialize(),
        stateIndex: 1n,
        voteOptionIndex: 0n,
        nonce: 1n,
        pollId: 1,
        newVoteWeight: 9n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: users[0].privKey.serialize(),
      });

      await publish({
        pubkey: users[1].pubKey.serialize(),
        stateIndex: 2n,
        voteOptionIndex: 3n,
        nonce: 1n,
        pollId: 1,
        newVoteWeight: 1n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: users[1].privKey.serialize(),
      });

      await publish({
        pubkey: users[2].pubKey.serialize(),
        stateIndex: 3n,
        voteOptionIndex: 5n,
        nonce: 1n,
        pollId: 1,
        newVoteWeight: 3n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: users[2].privKey.serialize(),
      });
    });

    it("should publish messages to the third poll", async () => {
      await publish({
        pubkey: users[3].pubKey.serialize(),
        stateIndex: 3n,
        voteOptionIndex: 5n,
        nonce: 1n,
        pollId: 2,
        newVoteWeight: 3n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: users[3].privKey.serialize(),
      });

      await publish({
        pubkey: users[4].pubKey.serialize(),
        stateIndex: 4n,
        voteOptionIndex: 7n,
        nonce: 1n,
        pollId: 2,
        newVoteWeight: 2n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: users[4].privKey.serialize(),
      });

      await publish({
        pubkey: users[5].pubKey.serialize(),
        stateIndex: 5n,
        voteOptionIndex: 5n,
        nonce: 1n,
        pollId: 2,
        newVoteWeight: 9n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: users[5].privKey.serialize(),
      });
    });

    it("should complete the second poll", async () => {
      await timeTravel(pollDuration, true);
      await mergeMessages({ pollId: 1 });
      await mergeSignups({ pollId: 1 });
      const tallyData = await genProofs({ ...genProofsArgs, pollId: 1 });
      await proveOnChain({
        ...proveOnChainArgs,
        pollId: "1",
        maciAddress: maciAddresses.maciAddress,
        messageProcessorAddress: pollAddresses.messageProcessor,
        tallyAddress: pollAddresses.tally,
      });
      await verify({
        ...verifyArgs,
        pollId: "1",
        tallyData,
        maciAddress: maciAddresses.maciAddress,
        tallyAddress: pollAddresses.tally,
      });
      cleanVanilla();
    });

    it("should complete the third poll", async () => {
      await mergeMessages({ pollId: 2 });
      await mergeSignups({ pollId: 2 });
      const tallyData = await genProofs({ ...genProofsArgs, pollId: 2 });
      await proveOnChain({
        ...proveOnChainArgs,
        pollId: "2",
        maciAddress: maciAddresses.maciAddress,
        messageProcessorAddress: secondPollAddresses.messageProcessor,
        tallyAddress: secondPollAddresses.tally,
      });
      await verify({
        ...verifyArgs,
        pollId: "2",
        tallyData,
        maciAddress: maciAddresses.maciAddress,
        tallyAddress: secondPollAddresses.tally,
      });
    });
  });

  describe("pre fetch logs", () => {
    const stateOutPath = "./state.json";

    const user = new Keypair();

    after(() => {
      cleanVanilla();

      if (fs.existsSync(stateOutPath)) {
        fs.unlinkSync(stateOutPath);
      }
    });

    before(async () => {
      // deploy the smart contracts
      maciAddresses = await deploy(deployArgs);
      // deploy a poll contract
      pollAddresses = await deployPoll(deployPollArgs);
    });

    it("should signup one user", async () => {
      await signup({ maciPubKey: user.pubKey.serialize() });
    });

    it("should publish one message", async () => {
      await publish({
        pubkey: user.pubKey.serialize(),
        stateIndex: 1n,
        voteOptionIndex: 5n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 3n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: user.privKey.serialize(),
      });
    });

    it("should generate zk-SNARK proofs and verify them", async () => {
      await timeTravel(pollDuration, true);
      await mergeMessages(mergeMessagesArgs);
      await mergeSignups(mergeSignupsArgs);
      await genLocalState({
        outputPath: stateOutPath,
        startBlock: 0,
        coordinatorPrivateKey: coordinatorPrivKey,
        blockPerBatch: 50,
        pollId: 0,
      });
      await genProofs({
        ...genProofsArgs,
        stateFile: stateOutPath,
      });
      await proveOnChain(proveOnChainArgs);
      await verify(verifyArgs);
    });
  });

  describe("topup message", () => {
    const user = new Keypair();
    const tokenAmount = 100;
    let stateIndex: bigint | undefined;

    after(() => {
      cleanVanilla();
    });

    before(async () => {
      // deploy the smart contracts
      maciAddresses = await deploy(deployArgs);
      // deploy a poll contract
      pollAddresses = await deployPoll(deployPollArgs);
    });

    it("should signup one user", async () => {
      stateIndex = BigInt(await signup({ maciPubKey: user.pubKey.serialize() }));
    });

    it("should airdrop topup tokens to the coordinator user", async () => {
      await airdrop({
        amount: tokenAmount,
        pollId: 0,
        contractAddress: maciAddresses.topupCreditAddress,
        maciAddress: maciAddresses.maciAddress,
      });
    });

    it("should publish one topup message", async () => {
      await topup({
        amount: tokenAmount,
        stateIndex: Number(stateIndex!),
        pollId: 0,
        maciAddress: maciAddresses.maciAddress,
      });
    });

    it("should publish one vote message", async () => {
      await publish({
        pubkey: user.pubKey.serialize(),
        stateIndex: stateIndex!,
        voteOptionIndex: 5n,
        nonce: 1n,
        pollId: 0,
        newVoteWeight: 3n,
        maciContractAddress: maciAddresses.maciAddress,
        salt: genRandomSalt(),
        privateKey: user.privKey.serialize(),
      });
    });

    it("should generate proofs and verify them", async () => {
      await timeTravel(pollDuration, true);
      await mergeMessages(mergeMessagesArgs);
      await mergeSignups(mergeSignupsArgs);
      await genProofs(genProofsArgs);
      await proveOnChain(proveOnChainArgs);
      await verify(verifyArgs);
    });
  });
});
