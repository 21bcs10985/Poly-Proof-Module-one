
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

    npm i

Step 3: Now go to upload your NFTs to layers folder on vs code and also upload the folder on pinata cloud also and copy the CID from there and then go to src folder and then in config.js provide that CID in baseURI. 

Step 4: Our next step to Update the URI for all the json file of all NFTs

    node utils/update_info.js

Step 5: Now go to contract folder and then copy the solidity file and then go to Remix IDE and then compile it ther and then deploy it one goerli network and then copy the address at which contract is deployed. 

Step 6: Now goto polyscan and then map that address to our current wallet.

Step 7: On remix we got all the function mint, transfer and balance of. And we can also verify that also. 



I have also provided my Loom video so that you can take the reference:


### Loom Links
* [Poly Proof Module 1](https://www.loom.com/share/3285f27e1e8747a797df45e26d3ac62b)



## Author
This repository is under Harsh Deo Ravi.

Contact info:

Email: harshdeoravi@gmail.com
