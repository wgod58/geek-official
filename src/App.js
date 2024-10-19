import map from "./map.jpg";
import work from "./work.jpg";
import teach from "./teach.jpg";
import "./App.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

function Collapse({ title, content }) {
  const [state, setState] = useState(true);

  return (
    <section className="grid place-items-center pt-8 max-w-3xl">
      <label className="w-full">
        <input
          className="peer/showLabel absolute scale-0"
          type="checkbox"
          onClick={() => {
            setState(!state);
          }}
        />
        <span className="block md:max-h-16 max-h-12 w-full  overflow-hidden rounded-lg px-4 py-4  shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-full">
          <div className="py-2 flex cursor-pointer  justify-between ">
            <div className="font-bold md:text-xl text-base">{title}</div>
            <div>
              <FaAngleUp className={` ${state ? "hidden" : ""}`} />
              <FaAngleDown className={` ${state ? "" : "hidden"}`} />
            </div>
          </div>
          <div className="mb-2 md:text-xl text-base">{content}</div>
        </span>
      </label>
    </section>
  );
}

function App() {
  return (
    <div className="App font-serif">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="mx-auto px-4 py-4 flex justify-between items-center">
          Logo
        </div>
      </header>
      <div className="Content pt-14">
        <div className="background-container flex flex-col items-center w-full ">
          <div className="text-content w-full py-48">
            <p className="text-xl md:text-3xl py-4 font-semibold">吉客 GEEK</p>
            <p className="text-xl md:text-4xl font-extrabold py-4">
              FAANG講師手把手帶領系統化學習
            </p>
            <p className="text-xl md:text-2xl py-4 font-semibold">
              針對想進入一線外商的工程師
            </p>
            <button className="button mt-4 rounded-2xl shadow-md max-w-min font-bold whitespace-nowrap text-3xl">
              預約免費技術諮詢
            </button>
          </div>
        </div>
        <div className="about flex flex-col items-center px-12 my-24 py-10">
          <p className="font-serif text-3xl py-4 font-semibold">關於吉客</p>
          <p className="text-xl  font-semibold max-w-3xl pt-4">
            團隊由來自FAANG的資深工程師所組成
          </p>
          <p className="text-xl  font-semibold max-w-3xl pt-4">
            深知要通過FAANG面試時，會遇到的困難與關卡
          </p>
          <p className="text-xl  font-semibold max-w-3xl pt-4">
            透過過往的經歷與經驗，歸納出了一套完整的解決方案
          </p>
          <p className="text-xl  font-semibold max-w-3xl pt-4">
            系統式教學以及專屬任務系統
          </p>
          <p className="text-xl  font-semibold max-w-3xl pt-4">
            將最大化你的時間價值幫助你進入一線外商
          </p>

          <p className="text-xl  font-semibold max-w-3xl pt-4"></p>
        </div>
        <div className="background-container why-section w-full">
          <div className="text-content w-full py-20 flex flex-col items-center">
            <p className="  font-serif text-3xl  font-semibold pt-10 w-max">
              為何要進入FAANG
            </p>
            <ul className="list-disc text-left text-3xl font-semibold">
              <li className="pt-10">豐厚的薪酬</li>
              <li className="pt-10">挑戰性工作</li>
              <li className="pt-10">國際影響力</li>
              <li className="pt-10">個人發展機會</li>
              <li className="pt-10">優秀的工作環境</li>
            </ul>
          </div>
        </div>
        <div className="py-20">
          <div className="font-serif text-4xl pb-20 font-bold">
            SRI Solution
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            <div className="max-w-2xl ">
              <div className="font-serif text-3xl py-4 font-bold">學習地圖</div>
              <div>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  瞭解如何設定長期與短期目標，並且知悉往後職涯發展的具體路徑
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  你會知道你該學什麼不該學什麼，專注在什麼樣的事情上才是重點
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  知道在不同階段需要累積的經驗以及關鍵技術
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  知道什麼才是成為TOP1%頂尖工程師的關鍵
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  面試流程的解析到如何應對不同階段的問題
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  學會評估自身能力，並針對性地強化不足之處
                </p>
              </div>
            </div>
            <div className="max-w-2xl rounded-md">
              <img className="rounded-3xl" src={map} alt="map" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse pt-20 gap-10 items-center justify-center">
            <div className="max-w-2xl ">
              <div className="font-serif text-3xl py-4 font-bold">
                系統化學習
              </div>
              <div>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  透過系統化教學與專屬任務系統
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  你會知道你該學什麼不該學什麼，專注在什麼樣的事情上才是重點
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  職涯規劃 FAANG招聘形勢 簡歷準備 BQ準備 算法準備 面試準備+技巧
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  你都會在此系統當中學習到，並且獲得相應的任務安排
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  有系統的規劃並且獲得最一線情報與幫助
                </p>
              </div>
            </div>
            <div className="max-w-2xl rounded-md">
              <img className="rounded-3xl" src={work} alt="work" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row pt-20 gap-10 items-center justify-center">
            <div className="max-w-2xl">
              <div className="font-serif text-3xl py-4 font-bold">專屬頻道</div>
              <div>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  會員專屬頻道與講師直接溝通
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  協助解答您的疑惑獲得精確的解答
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  定期直播問答幫助你在最短時間內解決問題
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  另外可與其他學員建立連結，建立軟體工程師人脈
                </p>
              </div>
            </div>
            <div className="max-w-2xl rounded-md">
              <img className="rounded-3xl" src={teach} alt="teach" />
            </div>
          </div>
        </div>
        <div className="py-20">
          <p className="font-serif text-4xl py-4 font-bold">講師介紹</p>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="max-w-2xl introduce">
              <img className="rounded-3xl" src={map} alt="map" />
              <div className="min-height-[20rem] p-4">
                <div className="text-4xl name py-3">
                  <p>Zedd</p>
                </div>
                <div className="font-bold text-xl flex flex-col justify-start">
                  <p className="  font-semibold max-w-3xl pt-1">
                    資深全端工程師
                  </p>
                  <p className="  font-semibold max-w-3xl pt-1">
                    在科技業大裁員時面試上FAANG
                  </p>
                  <p className="  font-semibold max-w-3xl pt-1">
                    深入淺出講解面試必問考題，短時間內幫助學員上手
                  </p>
                  <p className="  font-semibold max-w-3xl pt-1">
                    有豐富的一線開發和面試經驗，並擅長行為面試指導
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-2xl introduce">
              <img className="rounded-3xl" src={map} alt="map" />
              <div className="min-height-[20rem] p-4">
                <div className=" text-4xl name py-3">
                  <p>Kao</p>
                </div>
                <div className="font-bold  text-xl flex flex-col justify-start">
                  <p className="  font-semibold max-w-3xl pt-1">
                    熟悉演算法與系統設計
                  </p>
                  <p className="  font-semibold max-w-3xl pt-1">
                    北美FAANG大廠資深後端開發
                  </p>
                  <p className="  font-semibold max-w-3xl pt-1">
                    拿到頂尖美國offer10+，刷題1000+ 精通各類算法題型
                  </p>
                  <p className="  font-semibold max-w-3xl pt-1">
                    豐富的面試和麵試輔導經驗，提供簡潔易懂並且有效的針對性輔導
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Collapse
          title="非本系或無相關經驗能不能參加課程？"
          content="透過該課程非本科或無經驗者能夠清楚，如何安排職涯發展，規劃出清晰的道路一步一步的進步。而有經驗工程師，能在最短時間內調整正確方向，並且在面試的準備上獲得最直接的幫助"
        />
        <Collapse
          title="能與FAANG講師一對一溝通嗎？"
          content="會有專屬學員頻道，學員能透過頻道與FAANG講師直接進行溝通。並且每週會定期舉辦問題QA諮詢，在線上一對一針對你的問題去做回覆"
        />
        <Collapse
          title="要如何幫助我進入一線外商？"
          content="專屬的任務系統以及系統化教學，讓你在學習的道路上有規劃與方向，幫助你有系統的學習，不浪費任何時間在不必要的事情上"
        />
        <Collapse
          title="課程內容是什麼？"
          content="課程內容會包含：職涯規劃、FAANG招聘形勢、簡歷準備、BQ準備、算法與系統設計、面試技巧。並且提供學員Mock interview"
        />
        <Collapse
          title="提供什麼就業相關的幫助嗎？"
          content="提供模擬面試 履歷健檢 面試安排 面試技巧(演算法 系統設計 BQ 薪資 等等) 面試陪跑"
        />
        <iframe
          src="https://fang81.ck.page/4b8f49b1b9"
          name="iframe_a"
          height="450px"
          width="100%"
          title="Iframe Example"
          scrolling="no"
        ></iframe>

        <div className="container pt-20 pb-10">
          <div className="text-lg">
            <p>Gike-Geek © 2024 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
