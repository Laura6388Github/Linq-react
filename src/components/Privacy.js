function Privacy() {
  return (
    <div>
      <div className="lg:flex hidden">
        <div className="w-2/5 bg-[#F8F8F8] px-9 pt-8 pb-10 flex flex-col justify-between h-[100vh]">
          <div className="flex justify-center items-center h-[100vh]">
            <img src={require("../assets/images/privacy_logo.png")} alt="faq image" width={258} height={258} />
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
                <span className="text-6xl font-extrabold leading-[108%] font-nationalBold">Privacy</span>
              </div>
              <div className="mt-3">
                <span className="text-[#9C9D9F] font-bold text-base font-national">Updated May 31,2023</span>
              </div>
              <div className="pt-10">
                <div className="grid max-w-xl mt-8">
                  <span className="text-[#252525] text-base font-inter font-bold leading-[125%]">Introduction</span>
                  <div className="mt-4 text-[#252525] text-base font-inter leading-[140%]">
                    LFE, Inc. dba Honk ("Company" or "We") respects your privacy and is committed to protecting it. This policy describes:
                    <ul className="list-disc pl-8 mt-10 mb-5">
                      <li>
                        The types of information we may collect or that you may provide when you download, install, register with, access, or use the Honk application (the "App").
                      </li>
                      <li>
                        Our practices for collecting, using, maintaining, protecting, and disclosing that information.
                      </li>
                    </ul>
                    This policy applies only to information we collect in this App and in email, text, and other electronic communications sent through or in connection with this App. Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, do not download, register with, or use this App. By downloading, registering with, or using this App, you agree to this privacy policy. This policy may change from time to time. Your continued use of this App after we revise this policy means you accept those changes, so please check the policy periodically for updates.
                  </div>
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
              <span className="text-[32px] font-extrabold font-nationalBold">Privacy</span>
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
              <div className="grid w-full mt-8">
                <span className="text-[#252525] text-base font-inter font-bold leading-[125%]">Introduction</span>
                <div className="mt-4 text-[#252525] text-base font-inter leading-[140%]">
                  LFE, Inc. dba Honk ("Company" or "We") respects your privacy and is committed to protecting it. This policy describes:
                  <ul className="list-disc pl-8 mt-10 mb-5">
                    <li>
                      The types of information we may collect or that you may provide when you download, install, register with, access, or use the Honk application (the "App").
                    </li>
                    <li>
                      Our practices for collecting, using, maintaining, protecting, and disclosing that information.
                    </li>
                  </ul>
                  This policy applies only to information we collect in this App and in email, text, and other electronic communications sent through or in connection with this App. Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, do not download, register with, or use this App. By downloading, registering with, or using this App, you agree to this privacy policy. This policy may change from time to time. Your continued use of this App after we revise this policy means you accept those changes, so please check the policy periodically for updates.
                </div>
              </div>
              <div className="grid w-full mt-8">
                <span className="text-[#252525] text-base font-inter font-bold leading-[125%]">Introduction</span>
                <div className="mt-4 text-[#252525] text-base font-inter leading-[140%]">
                  LFE, Inc. dba Honk ("Company" or "We") respects your privacy and is committed to protecting it. This policy describes:
                  <ul className="list-disc pl-8 mt-10 mb-5">
                    <li>
                      The types of information we may collect or that you may provide when you download, install, register with, access, or use the Honk application (the "App").
                    </li>
                    <li>
                      Our practices for collecting, using, maintaining, protecting, and disclosing that information.
                    </li>
                  </ul>
                  This policy applies only to information we collect in this App and in email, text, and other electronic communications sent through or in connection with this App. Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, do not download, register with, or use this App. By downloading, registering with, or using this App, you agree to this privacy policy. This policy may change from time to time. Your continued use of this App after we revise this policy means you accept those changes, so please check the policy periodically for updates.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Privacy;