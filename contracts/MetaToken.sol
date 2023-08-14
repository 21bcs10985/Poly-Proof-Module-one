// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";




contract MetaToken is ERC721URIStorage, Ownable {

    constructor() ERC721("MetaToken", "MTA") {}

    function mintNFT(address recipient, uint256 tokenId, string memory tokenURI) external onlyOwner {
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
}
