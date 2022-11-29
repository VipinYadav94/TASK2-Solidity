// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./ERC20.sol";
// import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenA is ERC20, Ownable {
    constructor() ERC20("tokenA", "TA") {}

    uint256 public rate = 0.15 ether;

    function mintThroughETH() public payable onlyOwner {
        require(msg.value > rate);

        uint amountLeft = msg.value % rate;

        for (uint i = 1; i <= msg.value / rate; i++) {
            _mint(msg.sender, 1);
        }

        (bool sent, ) = msg.sender.call{value: amountLeft}("");
        require(sent, "Failed to send Ether");
    }
}
