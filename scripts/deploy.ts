import fs from "fs";
import hre from "hardhat";

async function main() {
  const NFTMarketplaceContract = await hre.ethers.getContractFactory(
    "NFTMarketplace"
  );
  const NFTMarketplace = await NFTMarketplaceContract.deploy();
  await NFTMarketplace.deployed();
  console.log("NFT Marketplace Contract Deployed to:", NFTMarketplace.address);

  fs.writeFileSync(
    "./config.ts",
    `
  export const marketplaceAddress = "${NFTMarketplace.address}"
  `
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
