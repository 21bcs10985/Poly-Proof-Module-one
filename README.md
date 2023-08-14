
#  Metacrafters Projects  

## POLY PROOF: Advanced
### Module: Polygon Proof of Stake
Projects that Metacrafters have assigned in the Blockchain course.
## Description

This repository contains the assignments that are made during the learning process. All the projects of this repository are related to the Blockchain written in Solidity and JavaScript programming language. I have provided the quick link for the projects with the name same as the course name:

* [Poly Proof Module 1](https://github.com/21bcs10985/Poly-Proof-Module-one)

In this Project we have to create a collection of 5 NFTs for midjourny and then upload it to pinata cloud and then collect the CID form  there for NFTs and json NFTs. And then deploy that NFTs on etherium network and then map that to polygon network and then mint, transfer and then check the balance of the wallet used to deploy the contract and after that verify that on polyscan.  

For this project we must have the knowledge of logic gates , circom language, solidity and JavaScript.   
 

  


## Getting Started
### Installing
 To perform this project we have to install NodeJs and VS code in our desktop and do the required setting.



### Executing program

To excute all code follow the below steps:

Step 1: Open the VS code and then clone the given repository

    git clone https://github.com/21bcs10985/Poly-Module-1.git 

Step 2: Next to import dependencies run command

    npm install @openzepplin/contracts

    npm install --save -dev hardhat @nomiclabs/hardhat-ethers ethers

Step 3: Now our next task is to compile or ERC721 contract this will  generate a cache and artifact file to our workplace.

    npx hardhat compile

Step 4: Our next step to deploy the contract on goerli network 

    npx hardhat run deploy.js --network goerli
    
Step 5: Now go to polygon mapper and then map the contract address to a Mumbai network. 

Step 6: our next task is to mint the token on polgon network .
    
    npx hardhat run Mint.js --network goerli

Step 7:  our next task is to approve the token on polgon network .
    
    npx hardhat run approveDeploy.js --network goerli 

Step 8:  our next task is to check the balance of the wallet.
    
    npx hardhat run approveDeploy.js --network goerli 



I have also provided my Loom video so that you can take the reference:


### Loom Links
* [Poly Proof Module 1](https://www.loom.com/share/3285f27e1e8747a797df45e26d3ac62b)



## Author
This repository is under Harsh Deo Ravi.

Contact info:

Email: harshdeoravi@gmail.com
