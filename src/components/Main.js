import { useState } from 'react';

function Main() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isAccess, setIsAccess] = useState(false);

  function handleChange(e) {
    setEmail(e.target.value);
    setIsValid(e.target.checkValidity());
    setIsAccess(false);
  }

  function getAccess() {
    if (isValid) {
      setIsAccess(true);
    }
  }

  const LIST_ID = "W7b65Y";
  const PK = "pk_3a4c936177e4107cfe0ac995e126c61f8f";
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`https://a.klaviyo.com/api/v2/list/${LIST_ID}/subscribe?api_key=${PK}`, {
      method: 'GET',
      headers: {
        "access-control-allow-origin": "*",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

  };


  return (
    <div>
      <div className="lg:flex hidden">
        <div className="w-2/5 bg-[#CAF450] px-9 pt-8 pb-10 flex flex-col justify-between h-[100vh]">
          <div className="relative top-0">
            <img src={require("../assets/images/black_logo.png")} alt="logo" width={50} height={50} />
          </div>
          <div className="flex justify-center items-center">
            <img src={require("../assets/images/mobile.png")} alt="mobile image" width={"272px"} height={"553px"} />
          </div>
          <div className="text-left relative">
            <a href="/privacy" className="text-black text-sm font-medium leading-5 hover:underline">Privacy</a>
            <a href="/terms" className="text-black text-sm font-medium leading-5 hover:underline mx-3">Terms</a>
            <a href="/faq" className="text-black text-sm font-medium leading-5 hover:underline">FAQs</a>
          </div>
        </div>
        <div className="w-3/5 bg-white px-16 pr-9 pt-8 pb-10 h-[100vh] flex flex-col justify-between">
          <div className="block">
            <div className="flex justify-end">
              <a href="/features" className="bg-[#E5E5E5] rounded-[120px] px-6 py-3 text-black text-base font-medium leading-5 gap-4">
                Features
              </a>
            </div>
          </div>
          <div className="">
            <div className="w-[70%] text-left">
              <div>
                <span className="text-[56px] text-black font-extrabold leading-[108%]">Don't miss out on life, </span>
                <span className="text-[56px] text-[#CAF450] font-extrabold leading-[108%]">people & places</span>
              </div>
              <div className="mt-6">
                <span className="text-[#252525] text-xl font-inter leading-[125%]">
                  Linq is the ultimate social networking app that helps you connect with like-minded people around the world.
                </span>
              </div>
              <div className="mt-8 w-4/5">
                <div className="w-full">
                  <div className="relative">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        value={email}
                        onChange={handleChange}
                        className={`peer h-[64px] py-[14px] px-6 rounded-[120px] z-0 focus:shadow focus:outline-none border w-full 
                        font-medium text-sm leading-5 placeholder-[#1d1d2757] text-black 
                        ${email.trim() === "" ? '' : !isValid ? 'border-[#FF647C] ring-[#FF647C]' : ''}`}
                        placeholder="Enter Email"
                        required
                      />
                      {isAccess ?
                        <button className="pt-3 pb-4 px-6 rounded-[120px] bg-[#EBEBEA] absolute top-2 right-2 font-medium text-sm leading-5"
                          type="button">
                          👍 Thank you!
                        </button> :
                        <button
                          type="submit"
                          className={`pt-3 pb-4 px-6 rounded-[120px] absolute top-2 right-2 font-medium text-sm leading-5
                        ${isValid ? 'peer-valid bg-[#CAF450] text-black' : 'peer-empty bg-black text-white hover:bg-gray-800'}`}
                          disabled={!isValid}
                        // onClick={getAccess}
                        >
                          Get Early Access
                        </button>
                      }
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="flex opacity-50 gap-4">
                <img alt="instagram" src={require("../assets/images/instagram-icon.svg").default} />
                <img alt="facebook" src={require("../assets/images/facebook-icon.svg").default} />
              </div>
            </div>
            <div>
              <span>&copy;</span>
              <span className="text-xs text-[#00000080] font-medium leading-5">2023 Linq Inc.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex lg:hidden sm:flex">
        <div
          data-te-spy="scroll"
          data-te-target="#scrollspy1"
          data-te-offset="200"
          className="relative overflow-auto scroll-smooth w-full">
          <section id="example-1" className="h-[100vh] bg-[#CAF450] pt-8 px-6 pb-10 flex flex-col justify-between">
            <div className="flex justify-between">
              <img src={require("../assets/images/black_logo.png")} alt="logo" width={50} height={50} />
              <a href="/features" className="bg-[#E5E5E5] rounded-[120px] px-6 py-3 text-black text-base font-medium leading-5 gap-4">
                Features
              </a>
            </div>
            <div className="flex justify-center items-center h-[60vh]">
              <img src={require("../assets/images/mobile-tablet.png")} alt="mobile image" className="h-full" />
            </div>
            <div id="scrollspy1" data-te-nav-list-ref >
              <a
                data-te-nav-link-ref
                data-te-nav-link-active
                className="bg-transparent text-[#252525] text-base font-inter font-bold leading-6"
                href="#example-2"
              >
                <p className="text-center">Scroll down</p>
                <div className="bg-white rounded-full w-[40px] h-[40px] mx-auto relative z-10 flex mt-2 animate-bounce">
                  <img src={require("../assets/images/arrow.svg").default} alt="arrow" className="m-auto" />
                </div>
              </a>
            </div>
          </section>
          <section id="example-2" className="h-[100vh] bg-white pt-8 px-6 pb-10 flex flex-col justify-between">
            <div className="flex justify-between">
              <img src={require("../assets/images/black_logo.png")} alt="logo" width={50} height={50} />
              <button className="bg-[#E5E5E5] rounded-[120px] px-6 py-3 text-black text-base font-medium leading-5 gap-4">Features</button>
            </div>
            <div className="text-left">
              <div className="md:w-[80%] w-full">
                <div>
                  <span className="md:text-[56px] text-[40px] text-black font-extrabold leading-[108%]">Don't miss out on life, </span>
                  <span className="md:text-[56px] text-[40px] text-[#CAF450] font-extrabold leading-[108%]">people & places</span>
                </div>
                <div className="mt-6">
                  <span className="text-[#252525] md:text-xl text-base font-inter leading-[125%]">
                    Linq is the ultimate social networking app that helps you connect with like-minded people around the world.
                  </span>
                </div>
              </div>
              <div className="mt-8 w-full">
                <div className="w-full">
                  <div className="relative">
                    <form>
                      <input
                        type="email"
                        value={email}
                        onChange={handleChange}
                        className={`peer h-[64px] py-[14px] px-6 rounded-[120px] z-0 focus:shadow focus:outline-none border w-full
                        font-medium leading-5 placeholder-[#1d1d2757] text-black
                        md:text-sm text-base
                        ${email.trim() === "" ? '' : !isValid ? 'border-[#FF647C] ring-[#FF647C]' : ''}`}
                        placeholder="Enter Email"
                        required
                      />
                      {isAccess ?
                        <button className="pt-3 pb-4 px-6 rounded-[120px] bg-[#EBEBEA] absolute top-2 right-2 font-medium text-sm leading-5 hidden md:block"
                          type="button">
                          👍 Thank you!
                        </button> :
                        <button
                          type="submit"
                          className={`pt-3 pb-4 px-6 rounded-[120px] absolute top-2 right-2 font-medium text-sm leading-5 hidden md:block
                          ${isValid ? 'peer-valid bg-[#CAF450] text-black' : 'peer-empty bg-black text-white hover:bg-gray-800'}`}
                          disabled={!isValid}
                          onClick={getAccess}
                        >
                          Get Early Access
                        </button>
                      }

                      {isAccess ?
                        <button className="pt-3 pb-4 px-6 rounded-[120px] bg-[#EBEBEA] absolute top-2 right-2 font-medium text-sm leading-5 lg:hidden md:hidden block"
                          type="button">
                          👍
                        </button> :
                        <button
                          type="submit"
                          className={`pt-3 pb-4 px-6 rounded-[120px] absolute top-2 right-2 font-medium text-sm leading-5 lg:hidden md:hidden block
                          ${isValid ? 'peer-valid bg-[#CAF450] text-black' : 'peer-empty bg-black text-white hover:bg-gray-800'}`}
                          disabled={!isValid}
                          onClick={getAccess}
                        >
                          Get
                        </button>
                      }

                      {isAccess &&
                        <div></div>
                      }
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="scrollspy1" data-te-nav-list-ref >
                <a
                  data-te-nav-link-ref
                  data-te-nav-link-active
                  className="bg-transparent text-[#252525] text-base font-inter font-bold leading-6 flex justify-end"
                  href="#example-1"
                >
                  <div className="bg-[#EBEBEA] rounded-full w-[40px] h-[40px] relative z-10 flex mt-2">
                    <img src={require("../assets/images/arrow.svg").default} alt="arrow" className="m-auto rotate-180" />
                  </div>
                </a>
              </div>
              <div className="md:flex lg:flex justify-between mt-8 flex-col md:flex-row lg:flex-row">
                <div className="relative md:text-left lg:text-left text-center">
                  <a href="/privacy" className="text-[#00000080] text-sm font-medium leading-5 hover:underline">Privacy</a>
                  <a href="/terms" className="text-[#00000080] text-sm font-medium leading-5 hover:underline mx-3">Terms</a>
                  <a href="/faq" className="text-[#00000080] text-sm font-medium leading-5 hover:underline">FAQs</a>
                </div>
                <div className="my-6 md:my-0 lg:my-0">
                  <div className="flex opacity-50 gap-4 mx-auto justify-center">
                    <img alt="instagram" src={require("../assets/images/instagram-icon.svg").default} />
                    <img alt="facebook" src={require("../assets/images/facebook-icon.svg").default} />
                  </div>
                </div>
                <div>
                  <span>&copy;</span>
                  <span className="text-xs text-[#00000080] font-medium leading-5">2023 Linq Inc.</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Main;
