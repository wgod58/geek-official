import map from "./map.jpg";
import work from "./work.jpg";
import teach from "./teach.jpg";
import "./App.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

function Collapse({ title, content }) {
  const [state, setState] = useState(true);

  return (
    <section className="grid place-items-center pt-8">
      <label>
        <input
          className="peer/showLabel absolute scale-0"
          type="checkbox"
          onClick={() => {
            setState(!state);
          }}
        />
        <span className="block md:max-h-16 max-h-12  max-w-3xl overflow-hidden rounded-lg px-4 py-4  shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-full">
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
    <div className="App font-serif  flex justify-center items-center">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          Logo
        </div>
      </header>
      <div className=" Content pt-14">
        <div className="background-container flex flex-col items-center w-full ">
          <div className="text-content w-full py-48">
            <p className="text-xl md:text-3xl py-4 font-semibold">
              SRI Solution
            </p>
            <p className="text-xl md:text-4xl font-extrabold py-4">
              FAANG講師手把手帶領進入一線外商
            </p>
            <p className="text-xl md:text-3xl py-4 font-semibold">
              針對想進入FAANG的人
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
          <div className="font-serif text-4xl pb-20 font-bold">SRI Solution</div>
          <div className="flex flex-col md:flex-row gap-10">
            
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
          <div className="flex flex-col md:flex-row-reverse pt-20 gap-10">
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
          <div className="flex flex-col md:flex-row pt-20 gap-10">
            <div className="max-w-2xl">
              <div className="font-serif text-3xl py-4 font-bold">專屬頻道</div>
              <div>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  專屬頻道與講師溝通，獲得最直接的幫助
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  協助解答您的疑惑獲得更多解答
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  定期直播問答幫助你在最短時間內解決問題
                </p>
                <p className="text-xl  font-semibold max-w-3xl pt-4">
                  專屬個人的 Mock interview
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
          title="非本系畢業無相關經驗能不能參加課程？"
          content="課程適合有決心想進入FAANG的人
              零經驗或轉職工程師，透過該課程能夠清楚該如何安排自身職涯發展，規劃出清晰的道路成為FAANG工程師
              有經驗工程師，能在最短時間內調整正確方向，並且在面試的準備上獲得最直接的幫助"
        />
        <Collapse
          title="能與FAANG講師一對一溝通嗎？"
          content="會有專屬學員頻道，學員能透過頻道與FAANG講師進行溝通
              每週會有固定時間安排一對一的諮詢，針對你的問題去做解析"
        />
        <Collapse
          title="上課方式是什麼？"
          content="課程是小班制的線上教學，每週會有固定時間，FAANG講師一對一解惑
              並且有專屬頻道供學員發問問題 如何幫助我找到FAANG工作？
              兩位FAANG講師手把手教學，從履歷包裝到面試技巧，以及演算法系統設計題目的練習，一步一步帶領你完成
              最全面的分析與實戰經驗傳授，讓您能及早準備不浪費任何時間，在最短時間內成為FAANG工程師"
        />

        <Collapse
          title="有課程大綱嗎"
          content="正式上課前 mentor 會與你進行一次課前深度訪談，根據你的程度與目標，提供客製化的完整學習大綱"
        />
        <Collapse
          title="課程畢業後，有就業媒合嗎？"
          content="我們沒有提供就業媒合，因為好的職缺不會有就業媒合，目前已畢業學員，零經驗轉職軟體工程師第一份平均月薪 50k 以上，有工作經驗的平均跳槽 +20%"
        />
        <Collapse
          title="提供了哪些就業相關的幫助？"
          content="1. 履歷修改、模擬面試
2. 教你如何篩選好公司
3. 面試優先順序安排的建議
4. 面試問題反饋、修正
5. 面試技巧（談薪資、behavior question 應對、promo 自己）"
        />

        <div>FAANG面試指南</div>
        <div>業界唯一 FAANG講師 親自授課</div>
        <div>
          這份路線圖是您通往破解 FAANG
          面試成功之路的最佳指南。無論您是初露鋒芒的軟體工程師，還是目標晉升為高階職位的資深專業人士，這份路線圖都能為您提供在程式設計面試中取得成功所需的洞見、策略和工具。
          該路線圖的設計重點在於加速學習並以模式為基礎，避免了讓人不知所措的成千上萬個問題。它強調掌握解決大部分問題的關鍵模式。最終我們歸納出ＸＸ
          方法
        </div>

        <div>嚮往成為FAANG軟體工程師</div>
        <div>但卻不知道要如何規劃下一步</div>
        <div>1. 想進入FAANG，卻不知道如何準備面試</div>
        <div>不知道要如何準備FAANG面試</div>
        <div>非本科畢業的轉職軟體工程師，如何在五年內成功進入FAANG</div>
        <div>還需要學習多少知識準備多久，才夠資格參加面試</div>
        <div>是否通過面試的人都是絕頂天才？</div>
        <div>2. 不知道如何準備演算法，系統設計面試</div>
        <p>刷了上百題的Leetcode卻還是無法通過演算法面試</p>
        <p>學習了很多網路知識，卻還是對於系統設計相當陌生</p>
        <p>非本科轉職有辦法通過面試嗎？</p>
        <div>3. 如何獲取FAANG的面試機會</div>
        <div>不知道該透過何種方式，什麼樣的方法才能獲得FAANG面試機會</div>
        <div>沒有相關經驗或者非本科系是否意味著沒辦法獲得面試機會</div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        <p>
          常見問題 非本系畢業無相關經驗，能不能參加課程會適合我嗎？
          課程適合有決心想進入FAANG的人
          零經驗或轉職工程師，透過該課程能夠清楚該如何安排自身職涯發展，規劃出清晰的道路成為FAANG工程師
          有經驗工程師，能在最短時間內調整正確方向，並且在面試的準備上獲得最直接的幫助
          上課方式是什麼？
          課程是小班制的線上教學，每週會有固定時間，FAANG講師一對一解惑
          並且有專屬頻道供學員發問問題 如何幫助我找到FAANG工作？
          兩位FAANG講師手把手教學，從履歷包裝到面試技巧，以及演算法系統設計題目的練習，一步一步帶領你完成
          最全面的分析與實戰經驗傳授，讓您能及早準備不浪費任何時間，在最短時間內成為FAANG工程師
          能與FAANG講師一對一溝通嗎？
          會有專屬學員頻道，學員能透過頻道與FAANG講師進行溝通
          每週會有固定時間安排一對一的諮詢，針對你的問題去做解析
        </p>
      </div>
    </div>
  );
}

export default App;
