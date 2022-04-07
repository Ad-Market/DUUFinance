import React from "react";
import MenuIcon from "../../assets/images/menu.svg";
import "./dashboard.css";
import {numberWithCommas} from '../../utils/numberUtils.ts';
import CountDown from '../../components/CountDown';
import Sidebar from "../../components/Sidebar/Sidebar";
import Wallet from "../../components/Wallet";

const Dashboard = ({setmobMenu, setModal, account, setAccount, ...props}) => {

	let {chainId, setChainId, tokenPrice, totalSupply, circulatingSupply, treasuryBalance, GIFBalance, poolBalance, firePitBalance, interval, remainTime, setInit} = props
	tokenPrice = parseFloat(tokenPrice).toFixed(3);
	const marketCap = parseFloat(totalSupply)*(tokenPrice);
	const treasuryVal = parseFloat(treasuryBalance)*(tokenPrice);
	const GIFVal = parseFloat(GIFBalance)*(tokenPrice);
	const poolVal = parseFloat(poolBalance)*(tokenPrice);
	const firePitVal = parseFloat(firePitBalance)*(tokenPrice);
	const firePitPercent = parseFloat(firePitBalance)/parseFloat(totalSupply);

	return (
		<>
			<div className="root-container">
				<div className="sidebar">
					<Sidebar account={account}/>
				</div>
				<div className="main-container">
					<div className="topbar">
						<div className="connect-wallet-btn">
							<img src={MenuIcon} className="icon-mob" alt="logo" onClick={setmobMenu} />
							<h2><i>Release Version 1.0</i></h2>
							<ul>
								<li className="menu__icon" onClick={setmobMenu}><img src={MenuIcon} className="icon-tab" alt="menu Icon" /></li>
								<li><a >GEN</a>
								<ul className="dropdown">
									<li>
									<a href="https://app.bogged.finance/bsc/swap?tokenIn=BNB&tokenOut=0x1B6f709Ff948e00F4c2eD8338a00E40863960Cdb" target="_blank">Buy on bog swap</a>
									</li>
								</ul>
								</li>
								<li>
									{/* <a href="/" onClick={setModal}>Connect Wallet</a> */}
									<Wallet account={account} setAccount={setAccount} chainId= {chainId} setChainId = {setChainId}/>
								</li>
							</ul>
						</div>
					</div>
					<div className="main-container-area">
						<div className="dashboard-data-container">
							<div className="dashboard-data-wrap">
								<div className="heading-wrap">
									<span>GEN Price</span>
									<h5>${numberWithCommas(tokenPrice)}</h5>
								</div>
								<div className="heading-wrap">
									<span>Market Cap</span>
									<h5>${numberWithCommas(marketCap)}</h5>
								</div>
								<div className="heading-wrap">
									<span>Circulating Supply</span>
									<h5>{numberWithCommas(circulatingSupply)}</h5>
								</div>

							<div className="heading-wrap">
								<span>Backed Liquidity</span>
								<h5>100%</h5>
							</div>
							<div className="heading-wrap">
								<span>Next Rebase</span>
								<h5><CountDown interval={interval} remainTime = {remainTime} setInit={setInit}></CountDown></h5>
							</div>
							<div className="heading-wrap">
								<span>Total Supply</span>
								<h5>{numberWithCommas(totalSupply)}</h5>
							</div>
							</div>
						</div>
						<div className="dashboard-grid-container">
							<div className="grid-data-wrap dashboard-grid-gap">
								<div className="grid-data-heading">
									<span>GEN Price</span>
									<h1>${numberWithCommas(tokenPrice)}</h1>
								</div>
							</div>
							<div className="grid-data-wrap dashboard-grid-gap">
								<div className="grid-data-heading">
									<span>Market Value of Treasury Asset</span>
									<h1>${numberWithCommas(treasuryVal)}</h1>
								</div>
							</div>
							<div className="grid-data-wrap dashboard-grid-gap-mob">
								<div className="grid-data-heading">
									<span>Pool Value</span>
									<h1>${numberWithCommas(poolVal)}</h1>
								</div>
							</div>
							<div className="grid-data-wrap">
								<div className="grid-data-heading">
									<span>GEN Insurance Fund Value</span>
									<h1>${numberWithCommas(GIFVal)}</h1>
								</div>
							</div>
						</div>
						<div className="dashboard-firepit-container">
							<div className="firepit-wrap">
								<span># Value of FirePit</span>
								<h1>{numberWithCommas(firePitBalance)} GEN</h1>
							</div>
							<div className="firepit-wrap">
								<span># Value of FirePit</span>
								<h1>${numberWithCommas(firePitVal)}</h1>
							</div>
							<div className="firepit-wrap">
								<span>%FirePit:Supply</span>
								<h1>{numberWithCommas(firePitPercent)} %</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
