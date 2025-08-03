import React from 'react'
import {
    FaArrowUpRightFromSquare,
    FaAngleRight
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='p-3 md:p-20 bg-gray-100'>
            <h1 className='text-xl md:text-3xl font-semibold'>Quick Links</h1>
            <div className='flex md:flex-row flex-col gap-3 pt-5 cursor-pointer'>

                <button className='border border-black-3 rounded-2xl p-1 text-xs md:text-sm px-3 flex gap-2 justify-center items-center hover:bg-black hover:text-white hover:underline'>Find a Store<FaArrowUpRightFromSquare size={12} /></button>
                <button className='border border-black-3 rounded-2xl p-1 text-xs md:text-sm px-3 flex gap-2 justify-center items-center hover:bg-black hover:text-white hover:underline'>Order Status<FaArrowUpRightFromSquare size={12} /></button>
                <button className='border border-black-3 rounded-2xl p-1 text-xs md:text-sm px-3 flex gap-2 justify-center items-center hover:bg-black hover:text-white hover:underline'>Shopping Help<FaArrowUpRightFromSquare size={12} /></button>
                <button className='border border-black-3 rounded-2xl p-1 text-xs md:text-sm px-3 flex gap-2 justify-center items-center hover:bg-black hover:text-white hover:underline'>Your Saves<FaArrowUpRightFromSquare size={12} /></button>

            </div>
            <div className='p-2 md:p-10 text-xs text-neutral-500 border-b-1'>


                <p>◊◊◊ Qualified Purchasers can receive Promotion Savings when they purchase an eligible Mac or iPad with their choice of a Promotion Product at a Qualifying Location. Customers will be charged for all items in their cart, including the Promotion Product. Only one Promotion Product can be obtained per eligible Mac or iPad per Qualified Purchaser. The offer is subject to availability, while supplies last. View full terms and conditions of offer here.
                </p><br />
                <p>∆ Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to Chinese (Simplified), English (Australia, Canada, India, Ireland, New Zealand, Singapore, South Africa, UK or US), French, German, Italian, Japanese, Korean, Portuguese (Brazil) or Spanish, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update, with more languages coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.</p><br />
                <p>◊◊ Monthly pricing is after purchase using EMI with qualifying cards at 15.99% p.a. over a 24‑month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions.</p><br />
                <p>Representative example:
                    A purchase of ₹79900.00 repaid over 24 months with an interest rate of 15.99% p.a. requires monthly payments of ₹3912.00. Total amount payable: ₹93882.00. Total interest paid to bank: ₹13982.00.</p><br />
                <p>§ No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9-, or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply(opens in new window).
                </p><br />
                <p>Representative example:
                    A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00.</p><br />
                <p>§§ Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here(opens in new window) to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply.(opens in new window) Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.</p><br />
                <p>* Mac, iPad, and Apple Watch trade-in is available only in-store in India. Apple Retail Online in India does not offer trade-in for Mac, iPad, and Apple Watch. Trade‑in values will vary based on the condition, year and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade‑in value may be applied towards a qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel or limit the quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.</p><br /><br />
                <p>1. Special pricing available to qualified customers. To learn more about how to start qualifying for special pricing, talk to an Apple Specialist in a store or give us a call on 000800 040 1966.</p>
                <br />
                <p>⁺ New subscribers only. ₹119.00/month after trial. Offer is available for new Apple Music subscribers with a new eligible device for a limited time only. Offer redemption for eligible audio devices requires connecting or pairing to an Apple device running the latest iOS or iPadOS. Offer redemption for Apple Watch requires connecting or pairing to an iPhone running the latest iOS. Offer good for three months after eligible device activation. Only one offer per Apple Account, regardless of the number of eligible devices you purchase. Plan automatically renews until cancelled. Restrictions and other offerterms(opens in new window) apply.</p>
                <p>‡ Listed pricing is Maximum Retail Price (inclusive of all taxes).</p><br />
                <p>We use your location to show you delivery options faster. We found your location using your IP address or because you entered it during a previous visit to Apple.</p>
            </div>
            <div className='p-5 flex gap-2 px-10 items-center text-neutral-600'>
                <img src="logo.png" alt="" className='h-4 w-3' />
                <FaAngleRight />
                <p> Apple Store Online</p>
            </div>
            <section className='hidden md:flex gap-3 border-b-1'>
                <div className='text-xs px-10'>
                    <h1 className='font-semibold p-1'>Shop and Learn</h1>
                    <p className='p-1 hover:underline'>Store</p>
                    <p className='p-1 hover:underline'>Mac</p>
                    <p className='p-1 hover:underline'>iPad</p>
                    <p className='p-1 hover:underline'>iPhone</p>
                    <p className='p-1 hover:underline'>Watch</p>
                    <p className='p-1 hover:underline'>AirPods</p>
                    <p className='p-1 hover:underline'>Accessories</p>
                    <p className='p-1 hover:underline'>Tv & Home</p>
                    <p className='p-1 hover:underline'>AirTag</p>
                    <br />
                    <h1 className='font-semibold p-1'>Apple Wallet</h1>
                    <p className='p-1 hover:underline'>Wallet</p>
                </div>
                <div className='text-xs px-10'>
                    <h1 className='font-semibold p-1'>Account</h1>
                    <p className='p-1 hover:underline'>Manage Your Apple Account</p>
                    <p className='p-1 hover:underline'>Apple Store Account</p>
                    <p className='p-1 hover:underline'>iCloud.com</p>
                    <br />
                    <h1 className='font-semibold p-1'>Entertainment</h1>
                    <p className='p-1 hover:underline'>Apple One</p>
                    <p className='p-1 hover:underline'>Apple TV+</p>
                    <p className='p-1 hover:underline'>Apple Music</p>
                    <p className='p-1 hover:underline'>Apple Podcasts</p>
                    <p className='p-1 hover:underline'>Apple Books</p>
                    <p className='p-1 hover:underline'>App Store</p>

                </div>
                <div className='text-xs px-10'>
                    <h1 className='font-semibold p-1'>Apple Store</h1>
                    <p className='p-1 hover:underline'>Find a Store</p>
                    <p className='p-1 hover:underline'>Genius Bar</p>
                    <p className='p-1 hover:underline'>Today at Apple</p>
                    <p className='p-1 hover:underline'>Apple summer Camp</p>
                    <p className='p-1 hover:underline'>Ways to Buy</p>
                    <p className='p-1 hover:underline'>Apple Trade In</p>
                    <p className='p-1 hover:underline'>Recycling Programme</p>
                    <p className='p-1 hover:underline'>Order Status</p>
                    <p className='p-1 hover:underline'>Shoppig Help</p>
                </div>
                <div className='text-xs px-10'>
                    <h1 className='font-semibold p-1'>For Business</h1>
                    <p className='p-1 hover:underline'>Apple and Business</p><br />
                    <h1 className='font-semibold p-1'>For Education</h1>
                    <p className='p-1 hover:underline'>Apple and Education</p>
                    <p className='p-1 hover:underline'>Shop for Education </p>
                    <p className='p-1 hover:underline'>Shop for College</p><br />
                    <h1 className='font-semibold p-1'>For Healthcare</h1>
                    <p className='p-1 hover:underline'>Apple in Healthcare</p>
                    <p className='p-1 hover:underline'>Health on Apple Watch</p>

                </div>
                <div className='text-xs px-10'>
                    <h1 className='font-semibold p-1'>Apple Values</h1>
                    <p className='p-1 hover:underline'>Accessibility</p>
                    <p className='p-1 hover:underline'>Environment</p>
                    <p className='p-1 hover:underline'>Privacy</p>
                    <p className='p-1 hover:underline'>Supply Chain</p>
                    <br />
                    <h1 className='font-semibold p-1'>About Apple</h1>
                    <p className='p-1 hover:underline'>Newsroom</p>
                    <p className='p-1 hover:underline'>Apple Leadership</p>
                    <p className='p-1 hover:underline'>Career Opportunities</p>
                    <p className='p-1 hover:underline'>Investors</p>
                    <p className='p-1 hover:underline'>Ethics & Compliance</p>
                    <p className='p-1 hover:underline'>Events</p>
                    <p className='p-1 hover:underline'>Contact Apple</p>
                </div>


            </section>
            <section className=' text-xs py-5 px-10'>
                <div className='flex justify-between'>
                    <p>Copyright © 2025 Apple-clone Inc. All rights reserved.</p>
                    <p>India</p>
                </div>
                <p>For Educational Purpose Only</p>
            </section>


        </footer>
    )
}

export default Footer