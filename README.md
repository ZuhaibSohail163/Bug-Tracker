The doc file is a guide on testing and test automation in web 3.0
The zip file contains an example code of a smart contract of pet shop with testing files in it.
The testing is done using truffle and the smart contract was written in solidity.

#To Compile the Code

#Step 1  
install Nodejs and Git

#step 2: Run the following command  
npm install -g truffle

#Step 3: Install Gabache from the link bellow  
https://trufflesuite.com/ganache/

#Step 4: Create Truffle Project by writing,
mkdir pet-shop-tutorial
cd pet-shop-tutorial

#Step 5:Unbox the Truffle Project with this command,
truffle unbox pet-shop

#Step 6: Compile the Project
truffle compile

#Step 7: Migrate the Project
For this, first run the installed Ganache Software
then use the following command for migration,
truffle migrate

#Step 8: Test the Smart Contract
For testing of smart contract, we have to run the test files written in the code. This can be done using the following command
truffle test

