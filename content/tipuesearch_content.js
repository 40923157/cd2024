var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://40923157.github.io/cd2024/ \n 網誌: https://40923157.github.io/cd2024/blog \n 簡報:\xa0 https://40923157.github.io/cd2024/reveal \n 倉儲: https://github.com/40923157/cd2024 \n 學期評分:65分 \n 期中報告LaTeX\xa0 英翻中 \n \n 期中報告6-4,6-5.pdf \n https://software.nfu.edu.tw/MATLAB/R2022a.zip \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n', 'tags': '', 'url': 'Brython.html'}, {'title': '學期評分:65分', 'text': '', 'tags': '', 'url': '學期評分:65分.html'}, {'title': 'w5影片', 'text': '\n cd2024 2b w4 如何上傳 LaTeX 範例檔案並利用 Actions 在線上編譯出 pdf 12 \n https://drive.google.com/file/d/1FBEbQDDYT_5p_b3Ta67o6eP1wvUvAn_b/view?usp=sharing \n cd2024 2b w4 以第六組為例, 利用 Codespaces 改版 11 \n https://drive.google.com/file/d/17pRXBEXLI7ytVxdzQtqqSIW-V0pOBf73/view?usp=sharing \n \n', 'tags': '', 'url': 'w5影片.html'}, {'title': '其中前做了甚麼事情', 'text': '\n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n \n \n \xa0 .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n \n \n  editor2 結束  \n \n', 'tags': '', 'url': '其中前做了甚麼事情.html'}, {'title': 'w10', 'text': '', 'tags': '', 'url': 'w10.html'}, {'title': 'w10任務3', 'text': 'one1.stl \n two2.prt \n three3.prt \n four4.prt \n five5.prt \n \n', 'tags': '', 'url': 'w10任務3.html'}, {'title': '建立各班學員的倉儲、網站與分組連結', 'text': '這是 W10 實習的任務一: \n 已知: \xa0 2b 初步資料放入數列 \xa0 可以將 \xa0 2b.txt \xa0 即時資料取出, 並且將每一行隔開後, 逐一放入數列. \n', 'tags': '', 'url': '建立各班學員的倉儲、網站與分組連結.html'}, {'title': '鋼球平衡台 PID 控制與模擬', 'text': '請下載 \xa0 cd2024_ball_balancing_platform_control_ref.7z , 閱讀後請將摘要內容放入個人與分組網誌中. \n 閱讀結果，各篇論文要點摘要 \n', 'tags': '', 'url': '鋼球平衡台 PID 控制與模擬.html'}, {'title': '鋼球平衡台零組件繪圖', 'text': '使用校園電腦NX1872 或隨身碟中的 NX1872，執行零組件繪圖, 完成後請將過程影片放入個人與分組網站中. \n', 'tags': '', 'url': '鋼球平衡台零組件繪圖.html'}, {'title': 'w10 任務1', 'text': '這個程式的主要功能是從指定的 URL 中讀取 CSV 文件，然後將其解析並在網頁中顯示學員的相關信息，包括學號、個人網站、GitHub 倉庫、組站點和組倉庫的鏈接。 \n 要運行這個程式，您需要將它放在一個支持瀏覽器執行的環境中，因為它使用了  browser  模組。您可以將這段程式碼複製到一個 HTML 文件中，然後在支持 JavaScript 的瀏覽器中打開該文件來運行。 \n 當您運行該程式時，它會向指定的 URL 發送 AJAX 請求，獲取 CSV 文件的內容。然後，它會將 CSV 文件的內容解析並動態生成 HTML 元素，將學員的相關信息顯示在網頁中。 \n 在瀏覽器中打開包含這段程式碼的 HTML 文件後，程式將自動執行，並在網頁上生成所需的內容。 \n \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n', 'tags': '', 'url': 'w10 任務1.html'}, {'title': 'w10任務2', 'text': '\n \n \n 鋼球平衡台 PID 控制與模擬 \n cd2024_Construction and theoretical study.pdf 提供的PDF文件中的摘要內容包括以下要點：\n\n研究的應用和範圍，重點是使用控制設計方法實現、監控和分析球平衡平台。\n利用電阻式觸控螢幕、微控制器和伺服馬達等硬體組件來控制球在平台上的位置。\n研究中解決的研究問題，包括使用線性控制的球平衡平台的設計和構造、影響理論模擬和實驗結果的因素以及穩定不穩定係統的性能限制。\n介紹控制理論作為動態系統中數學的一個子領域，重點在於穩定不穩定係統或調節所需反應。\n自動控制理論的歷史背景可以追溯到工業革命及其在工程和機電一體化中的相關性。\n解釋專案中使用的比例積分微分 (PID) 控制器，重點介紹其組件和功能。\n利用 PID 控制器控制系統及其不同部分進行了詳細說明。\n如需更深入的了解和詳細信息，請參閱PDF文件中提到的具體頁面（第17、18和23頁）。 \n', 'tags': '', 'url': 'w10任務2.html'}, {'title': 'w11任務在nx操作回朔動作錄的影片', 'text': 'https://youtu.be/ryLJNYh0hnA?si=tuxa14AkHacqHaDU <iframe width="560" height="315" src="https://www.youtube.com/embed/ryLJNYh0hnA?si=tuxa14AkHacqHaDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> https://youtu.be/ryLJNYh0hnA?si=PpBDQsvuj46jR7CR', 'tags': '', 'url': 'w11任務在nx操作回朔動作錄的影片.html'}]};