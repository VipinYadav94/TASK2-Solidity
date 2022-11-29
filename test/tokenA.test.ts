// import { expect } from "chai";
// import { ethers } from "hardhat";

import { ethers } from "hardhat";

// describe("Token contract", function () {
//   let Token, token, owner, addr1, addr2;

//   beforeEach(async () => {
//     Token = await ethers.getContractFactory('Token');
//     token = await Token.deploy();
//     [owner, addr1, addr2, _] = await ethers.getSigners();
//   });

//   describe('Deployment', () => {
//     it('Should set the right owner', async () => {
//       expect(await token.owner()).to.equal(owner.address);
//     })
//   })
//   // it("Test contract", async function () {
//   //   const ContractFactory = await ethers.getContractFactory("TokenA");

//   //   const instance = await ContractFactory.deploy();
//   //   await instance.deployed();

//   //   expect(await instance.name()).to.equal("tokenA");
//   // });
// });

const { expect } = require("chai");

describe("Token contract", function () {
  // it("Deployment should assign the total supply of tokens to the owner", async function () {
  //   const [owner] = await ethers.getSigners();

  //   const Token = await ethers.getContractFactory("Token");

  //   const hardhatToken = await Token.deploy();

  //   const ownerBalance = await hardhatToken.balanceOf(owner.address);
  //   expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  // });

  it("Should transfer tokens between accounts", async function() {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");

    const hardhatToken = await Token.deploy();

    // Transfer 50 tokens from owner to addr1
    await hardhatToken.mintThroughETH(addr1.address, 50);
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);

    // // Transfer 50 tokens from addr1 to addr2
    // await hardhatToken.connect(addr1).transfer(addr2.address, 50);
    // expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
  });

  // const options = { value: ethers.utils.parseEther(“1.025”) };
  //   const value = await wyvernExchange
  //     .connect(user2)
  //     .atomicMatch_(
  //       orderBuy,
  //       orderSell,
  //       [txBuy.v, txSell.v],
  //       [txBuy.r, txBuy.s, txSell.r, txSell.s, Metadata],
  //       options
  //     );
});