function Features() {
  return (
    <div>
      <div className="lg:flex hidden">
        <div className="w-2/5 bg-[#E5E5E5] px-9 pt-8 pb-10 flex flex-col h-[100vh]">
          <div className="relative top-0">
            <img src={require("../assets/images/black_logo.png")} alt="logo" width={50} height={50} />
          </div>
          <div className="flex justify-center items-center h-[90vh]">
            <img src={require("../assets/images/feature_logo.png")} alt="mobile image" width={"272px"} height={"553px"} />
          </div>
        </div>
        <div
          data-te-spy="scroll"
          data-te-target="#scrollspy1"
          data-te-offset="200"
          className="relative overflow-auto scroll-smooth w-3/5 bg-black px-16 pr-9 pt-8 pb-10 h-[100vh] ">
          <div className="flex justify-between fixed">
            <a href="/features" className="text-white text-[32px] font-extrabold leading-[108%] font-national bg-black">
              Features
            </a>
          </div>
          <div className="flex justify-end fixed right-[3.3rem]">
            <a href="/" className="bg-[#E5E5E5] rounded-full w-[40px] h-[40px] text-center">
              <span className="text-3xl text-black align-super">&times;</span>
            </a>
          </div>
          <section id="example-1" className="h-[100vh] flex flex-col">
            <div className="h-[80vh] flex items-center">
              <div className="w-[95%] text-left">
                <div>
                  <span className="text-[56px] font-nationalBold text-white font-extrabold leading-[108%]">
                    Linq is Adventure <br />Buddy
                  </span>
                </div>
                <div className="mt-6 w-4/5">
                  <span className="text-white text-base font-inter leading-[140%]">
                    Users could create or join group chats and meetups on the Map, allowing them to connect with other users in their area who share similar interests.
                  </span>
                </div>
              </div>
            </div>
            <div id="scrollspy1" data-te-nav-list-ref>
              <a
                data-te-nav-link-ref
                data-te-nav-link-active
                className="bg-transparent text-[#fff6] text-base font-inter font-bold leading-6"
                href="#example-2"
              >
                <p className="text-center">Scroll down</p>
                <div className="bg-white rounded-full w-[40px] h-[40px] mx-auto relative z-10 flex mt-3 animate-bounce">
                  <img src={require("../assets/images/arrow.svg").default} alt="arrow" className="m-auto" />
                </div>
              </a>
            </div>
          </section>
          <section id="example-2">
            <div className="h-[100vh] flex items-center">
              <div className="w-[95%] text-left">
                <div>
                  <span className="text-[56px] font-nationalBold text-white font-extrabold leading-[108%]">
                    Live event <br />tracking
                  </span>
                </div>
                <div className="mt-6 w-4/5">
                  <span className="text-white text-base font-inter leading-[140%]">
                    The Map could include live updates on events happening in the user's area, such as concerts, festivals, or other public gatherings. Users could opt-in to receive notifications for events that their interests, and the Map could display real-time updates on the event's location, crowd size, and other details.
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section id="example-3">
            <div className="h-[100vh] flex items-center">
              <div className="w-[90%] text-left">
                <div>
                  <span className="text-[56px] font-nationalBold text-white font-extrabold leading-[108%]">
                    Customizable <br />avatars
                  </span>
                </div>
                <div className="mt-6 w-4/5">
                  <span className="text-white text-base font-inter leading-[140%]">
                    Avatar on the Map, users could have more customization options for their avatars, such as adding accessories, clothing, and other personal touches. This would make it easier for users to identify their friends on the Map and create a more personalized experience.
                  </span>
                </div>
              </div>
            </div>
          </section>
          <div className="flex justify-end fixed bottom-[2.5rem] right-[3.3rem]">
            <span className="text-[13px] text-white">1/3</span>
          </div>
        </div>
      </div>
      <div className="md:flex lg:hidden sm:flex">
      </div>
    </div>
  )
}

export default Features;