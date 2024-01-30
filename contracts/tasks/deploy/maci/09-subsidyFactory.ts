import { ContractStorage } from "../../helpers/ContractStorage";
import { Deployment } from "../../helpers/Deployment";
import { EContracts, IDeployParams } from "../../helpers/types";

const deployment = Deployment.getInstance();
const storage = ContractStorage.getInstance();

/**
 * Deploy step registration and task itself
 */
deployment
  .deployTask("full:deploy-subsidy-factory", "Deploy subsidy factory")
  .setAction(async ({ incremental }: IDeployParams, hre) => {
    deployment.setHre(hre);
    const deployer = await deployment.getDeployer();

    const subsidyFactoryContractAddress = storage.getAddress(EContracts.SubsidyFactory, hre.network.name);

    if (incremental && subsidyFactoryContractAddress) {
      return;
    }

    const poseidonT3ContractAddress = storage.mustGetAddress(EContracts.PoseidonT3, hre.network.name);
    const poseidonT4ContractAddress = storage.mustGetAddress(EContracts.PoseidonT4, hre.network.name);
    const poseidonT5ContractAddress = storage.mustGetAddress(EContracts.PoseidonT5, hre.network.name);
    const poseidonT6ContractAddress = storage.mustGetAddress(EContracts.PoseidonT6, hre.network.name);

    const linkedSubsidyFactoryContract = await deployment.linkPoseidonLibraries(
      EContracts.SubsidyFactory,
      poseidonT3ContractAddress,
      poseidonT4ContractAddress,
      poseidonT5ContractAddress,
      poseidonT6ContractAddress,
      deployer,
    );

    const subsidyFactoryContract = await deployment.deployContractWithLinkedLibraries(linkedSubsidyFactoryContract);

    await storage.register({
      id: EContracts.SubsidyFactory,
      contract: subsidyFactoryContract,
      args: [],
      network: hre.network.name,
    });
  });
