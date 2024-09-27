import logo from "./bg01.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" class="text-xl font-bold">
            Logo
          </a>
          <nav>
            <ul class="flex space-x-6">
              <li>
                <a
                  href="#"
                  class="hover:text-blue-600 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-blue-600 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-blue-600 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="App-header pt-16">
        <div className="background-container flex flex-col items-center w-full">
          <div className="text-content w-full">
            <p className="text-2xl py-4 font-semibold">SRI 核心方案</p>
            <p
              className="text-3xl font-bold
              py-4"
            >
              業界唯一來自FAANG的講師，手把手帶領備考FAANG面試
            </p>

            <button className="mt-4 mb-2 button rounded-full shadow-md max-w-min font-semibold whitespace-nowrap">
              預約一小時免費技術諮詢
            </button>
          </div>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          <p className="text-2xl py-4 font-semibold">關於吉客</p>
          <p className="text-2xl py-4 font-semibold">
            由來自FAANG的資深工程師所組成的團隊，團隊中的講師都是非本科畢業，深知要成為FAANG工程師是多麼的困難，透過講師本人的經歷結合過往種種的經驗，我們歸納出了一套可行的核心方案，透過該核心方案
          </p>
        </div>
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
        <div>不知道要如何準備演算法或系統設計的面試</div>
        <div>不知道還需要學習多少網路知識</div>
        <div>2. 對於演算法系統設計類的題目，不知道正確的備考方式</div>
        <p>刷了上百題的Leetcode卻還是無法通過演算法面試</p>
        <p>學習了很多網路知識，卻還是對於系統設計相當陌生</p>
        <div>3. 如何獲取FAANG的面試機會</div>
        <div>不知道該透過何種方式，什麼樣的包裝方法才能獲得FAANG面試機會</div>

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
        <h1 class="text-3xl font-bold underline">Hello world!</h1>

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
