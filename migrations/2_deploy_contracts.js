const Token = artifacts.require("Token")

module.exports = async function (deployer) {

    const name = "Triage"
    const symbol = "TRG"
    const supply = web3.utils.toWei('1000', 'ether') // 1000 Tokens

    // Deploy token
    await deployer.deploy(Token, name, symbol, supply)
    const token = await Token.deployed()
    console.log("Triage Token = ", token.address)

};