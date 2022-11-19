import Link from "next/link";
import { useState } from "react";
import Accordion2 from "./components/Accordion";

export default function Preview() {
  const [hov, sethov] = useState(false);
  const [chap1, setchap1] = useState(false);
  const [chap2, setchap2] = useState(false);
  const [chap3, setchap3] = useState(false);
  const [chap4, setchap4] = useState(false);
  const [chap5, setchap5] = useState(false);
  const [chap6, setchap6] = useState(false);
  const [chap7, setchap7] = useState(false);
  const [chap8, setchap8] = useState(false);
  const [chap9, setchap9] = useState(false);
  const [chap10, setchap10] = useState(false);
  return (
    <div>
      <div className="lg:hidden bg-gray-700">
        <div className="p-10 text-3xl grid grid-cols-1 justify-items-center text-center">
          <div className=" flex pr-4 title text-center text-white">Inno</div>

          <div className="flex title text-center text-orange-200">Waiting?</div>
          <div className="text-xl mt-10 underline text-orange-200 ">
            Key Topics and Concepts in the Chapters
          </div>
          <br />
          <Accordion2 />
        </div>
        <Link href="/">
          <svg
            className="w-10 hover:text-orange-300 text-white fixed z-100 top-5 left-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
        </Link>
      </div>
      <div className=" bg-gray-300 preview hidden lg:block  h-screen w-screen ">
        <div className="flex text-3xl h-1/6 items-center p-5 align-middle justify-center">
          <div className=" flex pr-4 title text-center text-white">Inno</div>

          <div className="flex title text-center text-orange-200">Waiting?</div>
        </div>
        <div className="grid h-4/6 grid-cols-10 ">
          <div className="p-5 px-5 col-span-3 pr-6 pl-10 font-bold text-white text-lg">
            <div className="text-2xl text-orange-200 ">
              Key Topics and Concepts in the Chapters
            </div>
            <br />
            <div
              onMouseEnter={() => sethov(true)}
              onMouseLeave={() => sethov(false)}
            >
              <p
                onMouseEnter={() => setchap1(true)}
                onMouseLeave={() => setchap1(false)}
                className="cursor-pointer pb-3 "
              >
                CHAPTER 1: IDENTIFY YOUR IP
              </p>
              <p
                onMouseEnter={() => setchap2(true)}
                onMouseLeave={() => setchap2(false)}
                className="cursor-pointer pb-3"
              >
                CHAPTER 2: WHY IP PROTECTION IS IMPORTANT
              </p>
              <p
                onMouseEnter={() => setchap3(true)}
                onMouseLeave={() => setchap3(false)}
                className="cursor-pointer pb-3"
              >
                CHAPTER 3: UNDERSTANDING THE ART OF PATENTING
              </p>
              <p
                onMouseEnter={() => setchap4(true)}
                onMouseLeave={() => setchap4(false)}
                className="cursor-pointer pb-3"
              >
                CHAPTER 4: BUILDING AN INNOVATION CULTURE
              </p>
              <p
                onMouseEnter={() => setchap5(true)}
                onMouseLeave={() => setchap5(false)}
                className="cursor-pointer pb-3"
              >
                CHAPTER 5: MANAGING YOUR INNOVATION AND PATENTS
              </p>
            </div>

            <br />
            <br />
          </div>
          {hov && (
            <div className="backdrop-blur-lg contrast-125 col-span-4 h-5/6 bg-black/40 text-white p-5  rounded-xl mt-5 shadow-xl">
              {chap1 && (
                <div className="transition-transform">
                  <div className="text-xl text-orange-200">
                    CHAPTER 1: IDENTIFY YOUR IP
                  </div>
                  <br />
                  <ul className="list-disc p-5">
                    <li>Everything Starts With a Problem</li>
                    <li>Patent Protection: A Reward for Your Hard Work</li>
                    <li>
                      Trademark: A Tool to Identify Your Product or Service
                    </li>
                    <li>
                      Design Protection: Stop Copycats From Stealing Your Design
                    </li>
                    <li>Trade Secret: Do You Want to Keep Your Idea Secret?</li>
                    <li>
                      Copyright and Domain names: Is that Something for You?
                    </li>
                    <li>Which Protection? The Decision is Yours</li>
                    <li>The Value that IP Rights Bring</li>
                  </ul>
                </div>
              )}
              {chap2 && (
                <div className="transition-transform">
                  <div className="text-xl text-orange-200">
                    CHAPTER 2: WHY IP PROTECTION IS IMPORTANT
                  </div>
                  <br />
                  <ul className="list-disc p-5">
                    <li>Risks Associated with IP</li>
                    <li>The Power of IP Rights</li>
                    <li>Don’t Miss a Business Opportunity</li>
                    <li>Exploit Your IP Without Delay</li>
                    <li>Regular Assessments for Your IP</li>
                    <li>Other Alternatives for Safeguarding Your Innovation</li>
                    <li>Where to Protect</li>
                    <li>The Scope of Protection</li>
                    <li>The Value of Protection</li>
                    <li>The Cost of Protection</li>
                    <li>Preparations for Protection</li>
                  </ul>
                </div>
              )}
              {chap3 && (
                <div className="transition-transform">
                  <div className="text-xl text-orange-200">
                    CHAPTER 3: UNDERSTANDING THE ART OF PATENTING
                  </div>
                  <br />
                  <ul className="list-disc p-5">
                    <li>Some Perceptions Around Inventions</li>
                    <li>The Life Cycle of an Invention</li>
                    <li>Patenting a Product</li>
                    <li>Patenting a Process</li>
                    <li>Patenting a Use</li>
                    <li>Improvement Patent</li>
                    <li>Patenting Software Specific Process</li>
                    <li>How Long Should Your Invention be Protected?</li>
                    <li>Single or Multiple Applications for Your Invention?</li>
                    <li>What to Disclose in a Patent Application?</li>
                  </ul>
                </div>
              )}
              {chap4 && (
                <div className="transition-transform">
                  <div className="text-xl text-orange-200">
                    CHAPTER 4: BUILDING AN INNOVATION CULTURE{" "}
                  </div>
                  <br />
                  <ul className="list-disc p-5">
                    <li>Harvesting Ideas</li>
                    <li>Structure of an Invention Harvesting Exercise</li>
                    <li>
                      Invention in the Context of Employer-Employee Relationship
                    </li>
                    <li>Who Are the Real Inventors?</li>
                    <li>Incentives for Innovators</li>
                    <li>
                      Additional Things to Consider During Building the
                      Innovation Culture
                    </li>
                    <li>Prior Art Search and Tools</li>
                    <li>The Importance of an Invention Review System</li>
                    <li>IP Ownership by Employer and Employee</li>
                    <li>Building an Innovation Culture: A Long-Term Plan</li>
                  </ul>
                </div>
              )}
              {chap5 && (
                <div className="transition-transform">
                  <div className="text-xl text-orange-200">
                    CHAPTER 5: MANAGING YOUR INNOVATION AND PATENTS
                  </div>
                  <br />
                  <ul className="list-disc pt-0 p-5">
                    <li>
                      Key Internal Processes for Successful Innovation and
                      Patent Management
                    </li>
                    <li>The Importance of Confidentiality</li>
                    <li>Invention Disclosure Form</li>
                    <li>
                      Two Main Forms of Patent Applications: Provisional and
                      Non-Provisional
                    </li>
                    <li>Different Types of Patent Applications</li>
                    <li>Different Ways of Filing a Patent Application</li>
                    <li>Factors that can Influence a Patent Filing Decision</li>
                    <li>Patent Drafting</li>
                    <li>The Importance of an Inventor Interview</li>
                    <li>Getting that Filing Date: The First Milestone</li>
                  </ul>
                </div>
              )}
              {chap6 && (
                <div className="transition-transform">
                  <div className="text-xl text-orange-200">
                    CHAPTER 6: AWAITING PATENT GRANT: TESTING TIMES
                  </div>
                  <br />
                  <ul className="list-disc p-5">
                    <li>What Happens With Your Application after Filing?</li>
                    <li>Patent Cooperation Treaty (PCT)</li>
                    <li>Convention Application</li>
                    <li>Some Tips to Accelerate Your Patent Grant</li>
                    <li>Patent Grant: You Made it!</li>
                  </ul>
                </div>
              )}
              {chap7 && (
                <div className="transition-transform">
                  <div className="text-xl text-orange-200">
                    CHAPTER 7: MAKING A BRAND OUT OF YOUR PATENT
                  </div>
                  <br />
                  <ul className="list-disc p-5">
                    <li>What Can You Do With a Patent?</li>
                    <li>Starting a Business</li>
                    <li>Patent Licensing</li>
                    <li>Patent Sales</li>
                    <li>Other Challenges for a Patent Holder</li>
                    <li>
                      Patent Law: Trade-Related Aspects of Intellectual Property
                      Rights (TRIPS)
                    </li>
                    <li>The Winning Business</li>
                    <li>The Magic of Success: Building a Brand</li>
                  </ul>
                </div>
              )}
              {chap8 && (
                <div className="transition-transform">
                  <div className="text-xl text-orange-200">
                    CHAPTER 8: MAXIMIZE THE BENEFIT FROM YOUR PATENT
                  </div>
                  <br />
                  <ul className="list-disc p-5">
                    <li>Realizing the Value of Your Patent</li>
                    <li>
                      Patent is not a Guarantee: You Have to Work for Your
                      Success
                    </li>
                    <li>
                      License Out or Sell Your Patent (Additional Insights)
                    </li>
                    <li>Patent Strategy</li>
                    <li>
                      Other Considerations while Creating a Patent Strategy
                    </li>
                  </ul>
                </div>
              )}
              {chap9 && (
                <div className="transition-transform">
                  <div className="text-xl text-orange-200">
                    CHAPTER 9: BUILDING THE PATENT PORTFOLIO FOR YOUR SUCCESS
                    AND SUSTAINABILITY
                  </div>
                  <br />
                  <ul className="list-disc p-5">
                    <li>The Perception Created by a Patent: It Matters</li>
                    <li>Patent Portfolio Management</li>
                    <li>Inorganic Ways to Grow Your Patent Portfolio</li>
                    <li>Traits of a Successful Inventor</li>
                    <li>Government Incentives for You to Succeed</li>
                  </ul>
                </div>
              )}{" "}
              {chap10 && (
                <div className="transition-transform">
                  <div className="text-xl text-orange-200">
                    CHAPTER 10: GLOBAL PERSPECTIVE (EXPERTS SPEAK)
                  </div>
                  <br />
                  <ul className="list-disc p-5">
                    <li>Fredrik Egrelius from Sweden (Europe)</li>
                    <li>Lance Abramson from South Africa (Africa)</li>
                    <li>Brian Rosenbloom from the USA (North America)</li>
                    <li>Manisha Singh from India (Asia)</li>
                    <li>Jeff Holman from Australia (Australia)</li>{" "}
                    <li>Silvia Boechat from Brazil (South America)</li>
                  </ul>
                </div>
              )}
            </div>
          )}
          {!hov && <div className="col-span-4"></div>}
          <div className="col-span-3 px-8 leading-7 font-bold text-white text-md">
            <div
              onMouseEnter={() => sethov(true)}
              onMouseLeave={() => sethov(false)}
              className=" "
            >
              <p
                onMouseEnter={() => setchap6(true)}
                onMouseLeave={() => setchap6(false)}
                className="cursor-pointer pb-3"
              >
                CHAPTER 6: AWAITING PATENT GRANT: TESTING TIMES
              </p>
              <p
                onMouseEnter={() => setchap7(true)}
                onMouseLeave={() => setchap7(false)}
                className="cursor-pointer pb-3"
              >
                CHAPTER 7: MAKING A BRAND OUT OF YOUR PATENT
              </p>
              <p
                onMouseEnter={() => setchap8(true)}
                onMouseLeave={() => setchap8(false)}
                className="cursor-pointer pb-3"
              >
                CHAPTER 8: MAXIMIZE THE BENEFIT FROM YOUR PATENT
              </p>
              <p
                onMouseEnter={() => setchap9(true)}
                onMouseLeave={() => setchap9(false)}
                className="cursor-pointer pb-3"
              >
                CHAPTER 9: BUILDING THE PATENT PORTFOLIO FOR YOUR SUCCESS AND
                SUSTAINABILITY
              </p>
              <p
                onMouseEnter={() => setchap10(true)}
                onMouseLeave={() => setchap10(false)}
                className="cursor-pointer"
              >
                CHAPTER 10: GLOBAL PERSPECTIVE (EXPERTS SPEAK)
              </p>
            </div>
          </div>
        </div>
        <div className="pl-32 px-10 mt-6 z-100 w-screen fixed font-bold  text-orange-200 text-xl">
          Foolproof Strategies to Safeguard Your
          <span className="text-white py-2"> INNOVATIONS</span>, Build
          Credibility, Improve <br />
          Branding and Increase Profits by
          <span className="text-white"> PATENTING </span> Intellectual Property
          Assets
        </div>
      </div>
      <Link href="/" className="z-100">
        <div className="flex items-center text-lg hover:text-amber-600 fixed z-100 top-5 left-5 text-white">
          <svg
            className="w-10 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          Home
        </div>
      </Link>
    </div>
  );
}
