// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Address.sol";

// import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract MyToken is ERC721, Ownable {
    using Counters for Counters.Counter;
    IERC20 public tokenAddress;
    uint256 public rate = 3;

    Counters.Counter private _tokenIdCounter;

    constructor(address _tokenAddress) ERC721("MyNFT", "NFT") {
        tokenAddress = IERC20(_tokenAddress);
    }

    function approve(uint _amount) public {
        tokenAddress.approve(address(this), _amount);
    }

    function safeMint() public {
        // require(tokenAddress.approve(address(this), 4));
        require(msg.sender.code.length > 0 == false, "this is a contract");

        require(tokenAddress.balanceOf(msg.sender) >= 3);

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();

        _safeMint(msg.sender, tokenId);

        tokenAddress.transferFrom(msg.sender, address(0), 3);
    }
}
