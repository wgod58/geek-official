import map from "./image/map.jpg";
import work from "./image/work.jpg";
import teach from "./image/teach.jpg";
import logo from "./image/logo.png";
import teacher1 from "./image/teacher1.jpg";
import teacher2 from "./image/teacher2.png";
import "./App.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
      <SpeedInsights />
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div
          className="mx-auto px-1 py-1 flex justify-between items-center"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img className="App-logo" src={logo} alt="logo" />
        </div>
      </header>
      <div className="Content pt-14">
        <div className="background-container flex flex-col items-center w-full ">
          <div className="text-content w-full md:py-48 py-6">
            <p className="text-xl md:text-3xl md:py-4 py-2 font-semibold">
              吉客學院
            </p>
            <p className="text-xl md:text-3xl font-semibold md:py-4 py-2">
              FAANG講師 手把手系統化教學
            </p>
            <p className="text-xl md:text-2xl md:py-4 py-2 font-semibold">
              軟體工程師 x 職涯規劃 x 提升競爭力
            </p>
            <p className="text-xl md:text-2xl md:py-4 py-2 font-semibold">
              針對想進入一線外商的工程師
            </p>
            <button
              className="button mt-4 rounded-2xl shadow-md max-w-min font-semibold whitespace-nowrap md:text-2xl text-xl"
              onClick={(event) => {
                event.preventDefault();
                window.open("https://page.line.me/428navbh");
              }}
            >
              預約免費諮詢
            </button>
          </div>
        </div>
        <div className="about flex flex-col items-center px-12 my-24 py-10">
          <p className="font-serif text-xl md:text-3xl md:py-4 py-2 font-semibold">
            關於吉客
          </p>
          <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
            吉客團隊由來自 FAANG 的資深工程師組成
          </p>
          <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
            對於通過 FAANG 面試過程中可能遇到的困難與挑戰有深刻的理解
          </p>
          <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
            憑藉豐富的經歷和實戰經驗，我們總結出了一套完整且高效的解決方案
          </p>
          <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
            通過系統化的教學方式，結合專屬的任務系統
          </p>
          <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
            致力於幫助學員最大化利用時間價值，邁向一線外商的職場目標。
          </p>
        </div>
        <div className="background-container why-section w-full">
          <div className="text-content w-full md:py-28 py-8 flex flex-col items-center">
            <p className="  font-serif md:text-3xl text-xl  font-semibold w-max">
              為何要進入FAANG
            </p>
            <ul className="list-disc text-left md:text-3xl text-xl font-semibold">
              <li className="md:pt-10 pt-4">豐厚的薪酬</li>
              <li className="md:pt-10 pt-4">挑戰性工作</li>
              <li className="md:pt-10 pt-4">國際影響力</li>
              <li className="md:pt-10 pt-4">個人發展機會</li>
              <li className="md:pt-10 pt-4">優秀的工作環境</li>
            </ul>
          </div>
        </div>
        <div className="py-20">
          <div className="font-serif md:text-4xl text-2xl md:pb-20 pb-10 font-bold">
            SRI 學習計劃
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            <div className="max-w-2xl ">
              <div className="font-serif md:text-3xl text-xl md:py-4 pt-4 font-bold">
                1. 學習地圖
              </div>
              <div>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  瞭解如何設定長期與短期目標
                </p>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  知悉往後職涯發展的具體路徑
                </p>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  分辨核心技能聚焦最具價值的學習內容
                </p>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  知道在不同階段需要累積的經驗以及關鍵技術
                </p>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  探索成為 TOP 1% 頂尖工程師的核心要素
                </p>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  全面解析面試流程，應對各個階段的挑戰與問題
                </p>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  評估自身能力，發現不足之處並有針對性地進行強化
                </p>
              </div>
            </div>
            <div className="max-w-2xl rounded-md">
              <img className="rounded-3xl" src={map} alt="map" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse pt-20 gap-10 items-center justify-center">
            <div className="max-w-2xl ">
              <div className="font-serif md:text-3xl text-xl md:py-4 pt-4 font-bold">
                2. 系統化學習
              </div>
              <div>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  透過系統化的教學與專屬任務系統
                </p>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  逐步達成階段性的學習目標
                </p>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  把握每個關鍵重點，最終構建完整的知識框架
                </p>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  職涯規劃、FAANG招聘分析、簡歷準備、行為面試、算法訓練，面試流程與實用技巧
                </p>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  在系統中全面學習，同時獲得精心設計的任務安排
                </p>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
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
              <div className="font-serif md:text-3xl text-xl md:py-4 pt-4 font-bold">
                3. 專屬社群平台
              </div>
              <div>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  會員專屬頻道與講師直接溝通
                </p>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  協助解答您的疑惑獲得精確的解答
                </p>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  定期舉辦直播問答幫助您在最短時間內釐清問題
                </p>
                <p className="md:text-xl text-base  font-semibold max-w-3xl pt-4">
                  與其他學員互動交流，建立軟體工程師人脈
                </p>
              </div>
            </div>
            <div className="max-w-2xl rounded-md">
              <img className="rounded-3xl" src={teach} alt="teach" />
            </div>
          </div>
        </div>
        <div className="md:py-20 py-10">
          <p className="font-serif md:text-4xl text-2xl py-4 font-bold">
            講師介紹
          </p>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="max-w-2xl introduce">
              <img className="rounded-3xl" src={teacher1} alt="teacher1" />
              <div className="min-height-[20rem] p-4">
                <div className="md:text-4xl text-2xl name py-3">
                  <p>Zedd</p>
                </div>
                <div className="font-bold text-xl flex flex-col justify-start">
                  <p className="md:text-xl text-base  font-semibold max-w-3xl pt-1">
                    資深全端工程師
                  </p>
                  <p className="md:text-xl text-base  font-semibold max-w-3xl pt-1">
                    在科技業大裁員時面試上Amazon Yahoo
                  </p>
                  <p className="md:text-xl text-base  font-semibold max-w-3xl pt-1">
                    深入淺出講解面試必問考題，短時間內幫助學員上手
                  </p>
                  <p className="md:text-xl text-base  font-semibold max-w-3xl pt-1">
                    有豐富的一線開發和面試經驗，並擅長行為面試指導
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-2xl introduce">
              <img className="rounded-3xl" src={teacher2} alt="teacher2" />
              <div className="min-height-[20rem] p-4">
                <div className="md:text-4xl text-2xl name py-3">
                  <p>Kao</p>
                </div>
                <div className="font-bold  text-xl flex flex-col justify-start">
                  <p className="md:text-xl text-base font-semibold max-w-3xl pt-1">
                    熟悉演算法與系統設計
                  </p>
                  <p className="md:text-xl text-base font-semibold max-w-3xl pt-1">
                    北美FAANG大廠資深軟體工程師
                  </p>
                  <p className="md:text-xl text-base font-semibold max-w-3xl pt-1">
                    累積1000+演算法題解，掌握各類題型要點
                  </p>
                  <p className="md:text-xl text-base font-semibold max-w-3xl pt-1">
                    豐富面試輔導經驗，提供清晰且實用的針對性輔導
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Collapse
          title="非本系或無相關經驗能不能參加課程？"
          content="本課程對非本系或無相關經驗者而言，提供完整的學習路徑，幫助您規劃職涯方向；對在職工程師來說，能快速補強算法觀念，提升面試競爭力。課程會依照您的程度調整進度，確保學習成效。"
        />
        <Collapse
          title="能與FAANG講師一對一溝通嗎？"
          content="會有專屬學員頻道，學員能透過頻道與FAANG講師直接進行溝通。並且每週會定期舉辦問題QA諮詢，在線上一對一針對你的問題去做回覆"
        />
        <Collapse
          title="要如何幫助我進入一線外商大廠？"
          content="專屬的任務系統以及系統化教學，讓你在學習的道路上有規劃與方向，幫助你有系統的學習。並且會有面試陪跑服務，透過來自大廠講師豐富的面試經驗幫助你拿到Offer"
        />
        <Collapse
          title="課程內容是什麼？"
          content="課程內容會包含：職涯規劃、FAANG招聘形勢、簡歷準備、BQ準備、算法與系統設計、面試技巧。並且提供學員Mock interview"
        />
        <Collapse
          title="提供什麼就業相關的幫助嗎？"
          content="提供模擬面試 履歷健檢 面試安排 面試技巧(演算法 系統設計 BQ 薪資 等等) 面試陪跑和內推資源分享"
        />

        <div className="w-full">
          <div className="w-full md:py-32 py-10 flex flex-col items-center">
            <p className="text-xl md:text-2xl font-extrabold pt-5">
              針對進入一線外商大廠的工程師
            </p>
            <ul className="list-disc text-left text-xl md:text-2xl font-semibold">
              <li className="md:pt-5 pt-4">系統教學</li>
              <li className="md:pt-5 pt-4">任務系統</li>
              <li className="md:pt-5 pt-4">短期衝刺</li>
              <li className="md:pt-5 pt-4">模擬面試</li>
              <li className="md:pt-5 pt-4">面試陪跑</li>
              <li className="md:pt-5 pt-4">內推分享</li>
            </ul>
            <button
              className="button mt-16 rounded-2xl shadow-md max-w-min font-semibold whitespace-nowrap md:text-2xl text-xl"
              onClick={(event) => {
                event.preventDefault();
                window.open("https://page.line.me/428navbh");
              }}
            >
              預約免費諮詢
            </button>
          </div>
        </div>
        <div className="fixed bottom-8 left-8">
          <a
            href="https://page.line.me/428navbh"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
                <circle
                  className="color-element"
                  cx="19.4395"
                  cy="19.4395"
                  r="19.4395"
                  fill="#38B900"
                ></circle>
                <path
                  d="M24 9.36561C24 4.19474 18.6178 0 12 0C5.38215 0 0 4.19474 0 9.36561C0 13.9825 4.25629 17.8606 10.0229 18.5993C10.4073 18.6785 10.9565 18.8368 11.0664 19.1797C11.1762 19.4699 11.1487 19.9184 11.0938 20.235C11.0938 20.235 10.9565 21.0528 10.9291 21.2111C10.8741 21.5013 10.6819 22.3456 11.9725 21.8443C13.2632 21.3167 18.8924 17.9398 21.3913 15.1433C23.1487 13.2702 24 11.4234 24 9.36561Z"
                  transform="translate(7 10)"
                  fill="white"
                ></path>
                <path
                  d="M1.0984 0H0.24714C0.10984 0 -2.09503e-07 0.105528 -2.09503e-07 0.211056V5.22364C-2.09503e-07 5.35555 0.10984 5.43469 0.24714 5.43469H1.0984C1.2357 5.43469 1.34554 5.32917 1.34554 5.22364V0.211056C1.34554 0.105528 1.2357 0 1.0984 0Z"
                  transform="translate(15.4577 16.8593)"
                  fill="#38B900"
                  className="color-element"
                ></path>
                <path
                  d="M4.66819 0H3.81693C3.67963 0 3.56979 0.105528 3.56979 0.211056V3.19222L1.18078 0.0791458C1.18078 0.0791458 1.18078 0.0527642 1.15332 0.0527642C1.15332 0.0527642 1.15332 0.0527641 1.12586 0.0263821C1.12586 0.0263821 1.12586 0.0263821 1.0984 0.0263821H0.247139C0.10984 0.0263821 4.19006e-07 0.13191 4.19006e-07 0.237438V5.25002C4.19006e-07 5.38193 0.10984 5.46108 0.247139 5.46108H1.0984C1.2357 5.46108 1.34554 5.35555 1.34554 5.25002V2.26885L3.73455 5.38193C3.76201 5.40831 3.76201 5.43469 3.78947 5.43469C3.78947 5.43469 3.78947 5.43469 3.81693 5.43469C3.81693 5.43469 3.81693 5.43469 3.84439 5.43469C3.87185 5.43469 3.87185 5.43469 3.89931 5.43469H4.75057C4.88787 5.43469 4.99771 5.32917 4.99771 5.22364V0.211056C4.91533 0.105528 4.80549 0 4.66819 0Z"
                  transform="translate(17.6819 16.8593)"
                  fill="#38B900"
                  className="color-element"
                ></path>
                <path
                  d="M3.62471 4.22112H1.34554V0.237438C1.34554 0.105528 1.2357 0 1.0984 0H0.24714C0.10984 0 -5.23757e-08 0.105528 -5.23757e-08 0.237438V5.25002C-5.23757e-08 5.30278 0.0274599 5.35555 0.0549198 5.40831C0.10984 5.43469 0.16476 5.46108 0.21968 5.46108H3.56979C3.70709 5.46108 3.78947 5.35555 3.78947 5.22364V4.4058C3.87185 4.32665 3.76201 4.22112 3.62471 4.22112Z"
                  transform="translate(10.8993 16.8593)"
                  fill="#38B900"
                  className="color-element"
                ></path>
                <path
                  d="M3.56979 1.29272C3.70709 1.29272 3.78947 1.18719 3.78947 1.05528V0.237438C3.78947 0.105528 3.67963 -1.00639e-07 3.56979 -1.00639e-07H0.219679C0.164759 -1.00639e-07 0.10984 0.0263821 0.0549199 0.0527641C0.02746 0.105528 -2.09503e-07 0.158292 -2.09503e-07 0.211056V5.22364C-2.09503e-07 5.2764 0.02746 5.32917 0.0549199 5.38193C0.10984 5.40831 0.164759 5.43469 0.219679 5.43469H3.56979C3.70709 5.43469 3.78947 5.32917 3.78947 5.19726V4.37941C3.78947 4.2475 3.67963 4.14198 3.56979 4.14198H1.29062V3.29775H3.56979C3.70709 3.29775 3.78947 3.19222 3.78947 3.06031V2.24247C3.78947 2.11056 3.67963 2.00503 3.56979 2.00503H1.29062V1.16081H3.56979V1.29272Z"
                  transform="translate(23.421 16.8329)"
                  fill="#38B900"
                  className="color-element"
                ></path>
              </svg>
            </span>
          </a>
        </div>
        <div className="container pb-10">
          <div className="text-lg">
            <p>Gike-Geek © 2024 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
