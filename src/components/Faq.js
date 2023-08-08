import { useState } from "react";

const faqList = [
  {
    id: 1, question: "What does the Linq do?",
    answer: "Linq leverages data scrapers and user-generated content to continuously expand its database of events. It locates local events and experiences in your area and presents them in an engaging, gamified manner. You earn points and achievements by participating in these events, which can be tracked on our leaderboards."
  },
  {
    id: 2, question: "How is Linq different from other event finding apps?",
    answer: "Linq is unique in its gamified approach to finding and attending events. By offering rewards, achievements, and leaderboards, we provide an additional incentive for users to explore and participate in local events, encouraging continued use and engagement with the app."
  },
  {
    id: 3, question: "Is Linq free to use?",
    answer: "Yes, Linq is free to download and use.We do offer in -app purchases and a premium subscription for added features and benefits, but the core functionality of the app is available to all users at no cost."
  },
  {
    id: 4, question: "What are in-app purchases and the premium subscription?",
    answer: "In-app purchases and the premium subscription offer additional features and benefits beyond the basic functionality of the app. This can include early access to certain events, enhanced visibility in the app, and other exclusive perks."
  },
  {
    id: 5, question: "How does Linq use my data?",
    answer: "Linq uses your data to improve and personalize your experience on the app. This could include using your location to find local events or your usage data to suggest events you might be interested in. We take data privacy very seriously, and we will always inform you of how we use your data and give you the option to opt out. For more detailed information, please refer to our Privacy Policy."
  },
  {
    id: 6, question: "Can I host events on Linq?",
    answer: "Yes, both individuals and businesses can host events on Linq. Hosting an event on Linq can increase visibility and reach for your event, and can also earn you additional points and achievements in the app."
  },
  {
    id: 7, question: "What happens if I find an event that violates Linq's guidelines?",
    answer: "If you encounter an event that you believe violates our guidelines, please report it through the in-app reporting feature. Our team will investigate the report and take appropriate action."
  },
  {
    id: 8, question: "How can I contact Linq for further support?",
    answer: " If you have any additional questions or require support, please feel free to contact us at: <a class='underline text-[#3872e0]' href='mailto: support@letslinq.co' >support@letslinq.co</a > We are always happy to help. "
  }
];

function Faq() {
  const [faqs, setFaqs] = useState(faqList);
  const [selectFaq, setSelectFaq] = useState("");

  const clickFaq = (id) => {
    if (id === selectFaq) {
      setSelectFaq("");
    } else {
      setSelectFaq(id);
    }
  }

  return (
    <div>
      <div className="lg:flex hidden">
        <div className="w-2/5 bg-[#F8F8F8] px-9 pt-8 pb-10 flex flex-col justify-between h-[100vh]">
          <div className="flex justify-center items-center h-[100vh]">
            <img src={require("../assets/images/faq_logo.png")} alt="faq image" width={258} height={258} />
          </div>
        </div>
        <div className="w-3/5 bg-white px-16 pr-9 pt-8 pb-10 h-[100vh] flex flex-col justify-between overflow-auto">
          <div className="block">
            <div className="flex justify-end fixed right-[3.3rem]">
              <a href="/" className="bg-[#E5E5E5] rounded-full w-[40px] h-[40px] text-center">
                <span className="text-3xl text-black align-super">&times;</span>
              </a>
            </div>
            <div className="mt-[122px]">
              <div>
                <img src={require("../assets/images/green_logo.png")} alt="Green logo" width={50} height={50} />
              </div>
              <div className="mt-6">
                <span className="text-6xl font-extrabold leading-[108%] font-nationalBold">FAQs</span>
              </div>
              <div className="mt-3">
                <span className="text-[#9C9D9F] font-bold text-base font-national">Updated May 31,2023</span>
              </div>
              <div className="pt-10">
                <div className="grid divide-y divide-neutral-200 max-w-xl mt-8">
                  {faqs.map((item) => {
                    return (
                      <div className="py-6" key={item.id}>
                        <details className="group">
                          <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-[19px] font-inter"
                            onClick={() => clickFaq(item.id)}>
                            <span>{item.question}</span>
                            <span className={`transition acc_heading first-acc-heading ${selectFaq === item.id ? 'active' : ''}`}>
                            </span>
                          </summary>
                          <p className="mt-6 text-base font-inter text-[#252525] transition-all duration-600 opacity-0 group-open:opacity-100"
                            dangerouslySetInnerHTML={{ __html: item.answer }}>
                          </p>
                        </details>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex lg:hidden sm:flex">
        <section id="example-2" className="h-[100vh] bg-white pb-10 w-full">
          <div className="flex justify-between items-center py-8 px-6 fixed w-full z-10 bg-gradient-to-b from-white via-white to-transparent">
            <div>
              <img src={require("../assets/images/green_logo.png")} alt="logo" width={50} height={50} />
            </div>
            <div>
              <span className="text-[32px] font-extrabold font-nationalBold">FAQs</span>
            </div>
            <div>
              <div className="flex justify-end">
                <a href="/" className="bg-[#E5E5E5] rounded-full w-[40px] h-[40px] text-center">
                  <span className="text-3xl text-black align-super">&times;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="overflow-auto pt-8 px-6">
            <div className="mt-10 pt-8">
              <span className="text-[#9C9D9F] font-bold text-base font-national">Updated May 31,2023</span>
            </div>
            <div className="pt-10">
              <div className="grid divide-y divide-neutral-200 w-full mt-8">
                {faqs.map((item) => {
                  return (
                    <div className="py-6" key={item.id}>
                      <details className="group">
                        <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-[19px] font-inter"
                          onClick={() => clickFaq(item.id)}>
                          <span className="w-[90%]">{item.question}</span>
                          <span className={`transition acc_heading first-acc-heading ${selectFaq === item.id ? 'active' : ''}`}>
                          </span>
                        </summary>
                        <p className="mt-6 text-base font-inter text-[#252525] transition-all duration-600 opacity-0 group-open:opacity-100"
                          dangerouslySetInnerHTML={{ __html: item.answer }}>
                        </p>
                      </details>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Faq;