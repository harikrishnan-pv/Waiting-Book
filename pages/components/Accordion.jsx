import { useState } from "react";

export default function Accordion2() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="text-white grid gap-5">
      <div
        onClick={() => {
          handleOpen(1);
        }}
        className="text-xl   p-2 rounded-lg  bg-gray-800 backdrop-opacity-20 "
      >
        CHAPTER 1: IDENTIFY YOUR IP
      </div>
      <div
        className={`transition duration-500 ease-in-out  ${
          open == 1 ? `visible` : "hidden"
        }`}
      >
        <ul className="list-disc bg-gray-700 text-lg p-5">
          <li>Everything Starts With a Problem</li>
          <li>Patent Protection: A Reward for Your Hard Work</li>
          <li>Trademark: A Tool to Identify Your Product or Service</li>
          <li>Design Protection: Stop Copycats From Stealing Your Design</li>
          <li>Trade Secret: Do You Want to Keep Your Idea Secret?</li>
          <li>Copyright and Domain names: Is that Something for You?</li>
          <li>Which Protection? The Decision is Yours</li>
          <li>The Value that IP Rights Bring</li>
        </ul>
      </div>

      <div
        onClick={() => {
          handleOpen(2);
        }}
        className="text-xl p-2 rounded-lg  bg-gray-800 backdrop-opacity-20 "
      >
        CHAPTER 2: WHY IP PROTECTION IS IMPORTANT
      </div>
      <div
        className={`transition ease-in-out  ${
          open == 2 ? `visible` : "hidden"
        }`}
      >
        <ul className="list-disc p-5 text-lg">
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
      <div
        onClick={() => {
          handleOpen(3);
        }}
        className="text-xl p-2 rounded-lg  bg-gray-800 backdrop-opacity-20 "
      >
        CHAPTER 3: UNDERSTANDING THE ART OF PATENTING
      </div>
      <div
        className={`transition ease-in-out  ${
          open == 3 ? `visible` : "hidden"
        }`}
      >
        <ul className="list-disc p-5 text-lg">
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
      <div
        onClick={() => {
          handleOpen(4);
        }}
        className="text-xl p-2 rounded-lg  bg-gray-800 backdrop-opacity-20 "
      >
        CHAPTER 4: BUILDING AN INNOVATION CULTURE
      </div>
      <div
        className={`transition ease-in-out  ${
          open == 4 ? `visible` : "hidden"
        }`}
      >
        <ul className="list-disc p-5 text-lg">
          <li>Harvesting Ideas</li>
          <li>Structure of an Invention Harvesting Exercise</li>
          <li>Invention in the Context of Employer-Employee Relationship</li>
          <li>Who Are the Real Inventors?</li>
          <li>Incentives for Innovators</li>
          <li>
            Additional Things to Consider During Building the Innovation Culture
          </li>
          <li>Prior Art Search and Tools</li>
          <li>The Importance of an Invention Review System</li>
          <li>IP Ownership by Employer and Employee</li>
          <li>Building an Innovation Culture: A Long-Term Plan</li>
        </ul>
      </div>
      <div
        onClick={() => {
          handleOpen(5);
        }}
        className="text-xl p-2 rounded-lg  bg-gray-800 backdrop-opacity-20 "
      >
        CHAPTER 5: MANAGING YOUR INNOVATION AND PATENTS
      </div>
      <div
        className={`transition ease-in-out  ${
          open == 5 ? `visible` : "hidden"
        }`}
      >
        <ul className="list-disc text-lg p-5">
          <li>
            Key Internal Processes for Successful Innovation and Patent
            Management
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
      <div
        onClick={() => {
          handleOpen(6);
        }}
        className="text-xl p-2 rounded-lg  bg-gray-800 backdrop-opacity-20 "
      >
        CHAPTER 6: AWAITING PATENT GRANT: TESTING TIMES
      </div>
      <div
        className={`transition ease-in-out  ${
          open == 6 ? `visible` : "hidden"
        }`}
      >
        <ul className="list-disc p-5 text-lg">
          <li>What Happens With Your Application after Filing?</li>
          <li>Patent Cooperation Treaty (PCT)</li>
          <li>Convention Application</li>
          <li>Some Tips to Accelerate Your Patent Grant</li>
          <li>Patent Grant: You Made it!</li>
        </ul>
      </div>
      <div
        onClick={() => {
          handleOpen(7);
        }}
        className="text-xl p-2 rounded-lg  bg-gray-800 backdrop-opacity-20 "
      >
        CHAPTER 7: MAKING A BRAND OUT OF YOUR PATENT
      </div>
      <div
        className={`transition ease-in-out  ${
          open == 7 ? `visible` : "hidden"
        }`}
      >
        <ul className="list-disc p-5 text-lg">
          <li>What Can You Do With a Patent?</li>
          <li>Starting a Business</li>
          <li>Patent Licensing</li>
          <li>Patent Sales</li>
          <li>Other Challenges for a Patent Holder</li>
          <li>
            Patent Law: Trade-Related Aspects of Intellectual Property Rights
            (TRIPS)
          </li>
          <li>The Winning Business</li>
          <li>The Magic of Success: Building a Brand</li>
        </ul>
      </div>
      <div
        onClick={() => {
          handleOpen(8);
        }}
        className="text-xl p-2 rounded-lg  bg-gray-800 backdrop-opacity-20 "
      >
        CHAPTER 8: MAXIMIZE THE BENEFIT FROM YOUR PATENT
      </div>
      <div
        className={`transition ease-in-out  ${
          open == 8 ? `visible` : "hidden"
        }`}
      >
        <ul className="list-disc p-5 text-lg">
          <li>Realizing the Value of Your Patent</li>
          <li>Patent is not a Guarantee: You Have to Work for Your Success</li>
          <li>License Out or Sell Your Patent (Additional Insights)</li>
          <li>Patent Strategy</li>
          <li>Other Considerations while Creating a Patent Strategy</li>
        </ul>
      </div>
      <div
        onClick={() => {
          handleOpen(9);
        }}
        className="text-xl p-2 rounded-lg  bg-gray-800 backdrop-opacity-20 "
      >
        CHAPTER 9: BUILDING THE PATENT PORTFOLIO FOR YOUR SUCCESS AND
        SUSTAINABILITY
      </div>
      <div
        className={`transition ease-in-out  ${
          open == 9 ? `visible` : "hidden"
        }`}
      >
        <ul className="list-disc p-5 text-lg">
          <li>The Perception Created by a Patent: It Matters</li>
          <li>Patent Portfolio Management</li>
          <li>Inorganic Ways to Grow Your Patent Portfolio</li>
          <li>Traits of a Successful Inventor</li>
          <li>Government Incentives for You to Succeed</li>
        </ul>
      </div>
      <div
        onClick={() => {
          handleOpen(10);
        }}
        className="text-xl p-2 rounded-lg  bg-gray-800 backdrop-opacity-20 "
      >
        CHAPTER 10: GLOBAL PERSPECTIVE (EXPERTS SPEAK)
      </div>
      <div
        className={`transition ease-in-out  ${
          open == 10 ? `visible` : "hidden"
        }`}
      >
        <ul className="list-disc p-5 text-lg">
          <li>Fredrik Egrelius from Sweden (Europe)</li>
          <li>Lance Abramson from South Africa (Africa)</li>
          <li>Brian Rosenbloom from the USA (North America)</li>
          <li>Manisha Singh from India (Asia)</li>
          <li>Jeff Holman from Australia (Australia)</li>{" "}
          <li>Silvia Boechat from Brazil (South America)</li>
        </ul>
      </div>
    </div>
  );
}
