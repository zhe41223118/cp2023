var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/zhe41223118/cp2023 \xa0(倉儲連接)\xa0 \n', 'tags': '', 'url': 'About.html'}, {'title': 'w13', 'text': '在近端建立 OpenSSH 格式的 public key, putty 格式的 private 並且配合 putty session 讓使用者可以將倉儲 git clone 到近端維護 \n \n 檔案位置: tinyc裡的data ，需有 portablegit\xa0PuTTY\xa0Python311 三個檔案 \n \n 注意需在符合上述條件下開啟start_ipv6.bat，因為在虛擬主機(Y)所做的檔案更改不會影響自己本身的USB磁碟機 \n 也會影響後續在檔案傳輸和指示字元讀取倉儲檔案上出現問題 \n \n 在執行步驟上，使用 puttygen.exe 定位主機位置並獲得key，如圖(鼠標在其範圍內不斷移動直到綠條跑完) \n \n 將key(圖上藍色框選的亂碼)複製新增到自己倉儲帳號( 設定-SSH keys) ，同時也要點圖上的 Save private key \n 儲存到 tinyc-data-home (名稱學號) \n 在命令字元打上 reedit ，尋找到剛剛處存的key整葛目錄檔後右鍵匯出 \n 到Y槽輸入git clone --recurse-submodules\xa0 git@41223118:zhe41223118 /cp2023.git \n (上述藍色前者為自訂標題後者為倉儲帳號) \n 將倉儲資料複製到USB，之後cd進cp2023，輸入 cms \xa0 就可開啟近端網站進行維護了 \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w12', 'text': 'rrr \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w11', 'text': 'w11_1a.7z (個人網路設定檔) \n 更改內容IPv6，將其更改為個人IP序號 \n 目的是能夠用可攜式檔，只要有網路都可以用管理者執行該檔直截獲取IPv6 \n \n 在登錄網站後，選擇 \xa0 IUpload \xa0 (建議是新增一個頁面打開) \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w8', 'text': '遠端與倉儲帳號連接 \n \n chmod u+x acp \n mkdir public_html \n cd public_html \n git clone --recurse-submodules  https://github.com/zhe41223118/cp2023.git \n vi acp \n #! /bin/bash\ngit add .\ngit commit -m "$1"\ngit push\ncd ./../public_html/cp2023\ngit pull\n \n 必須根據 這裡 的說明設定目錄權限. \n ubuntu@www:~$ chmod 711 /home/ubuntu\nubuntu@www:~$ mkdir ~/public_html\nubuntu@www:~$ chmod 755 ~/public_html\nubuntu@www:~$ vi ~/public_html/index.html \n 帳號根目錄 (user directory) 必須設定 .gitconfig \n https://s1511.cycu.org:8022 \xa0 \n https://s1511.cycu.org/~cp41223118/cp2023 \xa0 \n \xa0 \n', 'tags': '', 'url': 'w8.html'}, {'title': 'work', 'text': 'cd-檔案 \n cc 檔案名+ -lgd -lm \n ./a.out \n \n 需在replit.nix進行\xa0  備註:Files最底下 藍色雪花圖形\xa0 \n \n { pkgs }: {\n\xa0\xa0\xa0\xa0deps = [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0pkgs.sudo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0pkgs.clang_12\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0pkgs.ccls\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0pkgs.gdb\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0pkgs.gnumake\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0pkgs.gnuplot\n\xa0\xa0\xa0\xa0];\n} \n \n \n 需在replit.nix進行 \n { pkgs }: {\ndeps = [\npkgs.vimHugeX\npkgs.gd\npkgs.gnuplot\n];\n} \n \n 其中 pkgs.gd 是必要 \n \n \n', 'tags': '', 'url': 'work.html'}, {'title': 'program', 'text': '曲線圖 \n #include <stdio.h>\n\nint main() {\n// Open a file to write displacement and velocity data\nFILE *outputFile = fopen("motion_data.txt", "w");\nif (!outputFile) {\nfprintf(stderr, "Failed to create data file.\\n");\nreturn 1;\n}\n\n// Simulate motion for 10 seconds and calculate displacement and velocity, while writing data to the file\ndouble x = 0.2; // Initial displacement\ndouble v = 0.0; // Initial velocity\ndouble dt = 0.01; // Time step\ndouble t = 0.0; // Time\n\nwhile (t <= 10.0) {\ndouble acceleration = (-10.0 * x - 0.5 * v) / 1.0; // Modified system parameters here\nv += acceleration * dt;\nx += v * dt;\n\nfprintf(outputFile, "%lf %lf %lf\\n", t, x, v);\n\nt += dt;\n}\n\n// Close the data file\nfclose(outputFile);\n\n// Start a Gnuplot process using popen\nFILE *gnuplotPipe = popen("gnuplot -persistent", "w");\nif (!gnuplotPipe) {\nfprintf(stderr, "Failed to start Gnuplot.\\n");\nreturn 1;\n}\n\n// Use Gnuplot plotting commands, specify font and output as PNG\nfprintf(gnuplotPipe, "set terminal pngcairo enhanced font \'default,10\' size 800,400\\n");\nfprintf(gnuplotPipe, "set output \'motion_plot.png\'\\n");\nfprintf(gnuplotPipe, "set title \'Displacement and Velocity vs. Time\'\\n");\nfprintf(gnuplotPipe, "set xlabel \'Time (s)\'\\n");\nfprintf(gnuplotPipe, "set ylabel \'Displacement (m)\'\\n");\nfprintf(gnuplotPipe, "plot \'motion_data.txt\' using 1:2 with lines lw 2 title \'Displacement\', \\\n\'motion_data.txt\' using 1:3 with lines lw 2 title \'Velocity\'\\n");\n\n// Close the Gnuplot process\nfprintf(gnuplotPipe, "exit\\n");\npclose(gnuplotPipe);\n\nreturn 0;\n} \n \n 台灣國旗 \n \n // 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n// 幾何形狀著色與繪圖練習\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\n// width 3: height 2\nint width = 1200;\n// 國旗長寬比為 3:2\nint height = (int)(width*2.0 / 3.0);\n\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n\ndraw_roc_flag(img);\n\nFILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "Error opening the output file.\\n");\nreturn 1;\n}\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\nreturn 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\nint red, white, blue;\n// 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\nint center_x = (int)(width/4);\nint center_y = (int)(height/4);\n// gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n// 由於中央白日圓形的半徑為青天寬度的 1/8\n// 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n// 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\nint sun_radius = (int)(width/8);\n// 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\nint white_circle_dia = sun_radius;\n// 中央藍色圓形半徑為中央白日的 1又 2/15\nint blue_circle_dia = white_circle_dia + white_circle_dia*2/15;\n// 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\nred = gdImageColorAllocate(img, 255, 0, 0); // 紅色\nwhite = gdImageColorAllocate(img, 255, 255, 255); // 白色\nblue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n// 根據畫布大小塗上紅色長方形區域\ngdImageFilledRectangle(img, 0, 0, width, height, red);\n// 青天面積為整面國旗的 1/4, 也是採用長方形塗色\ngdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n// 先設法以填色畫出六個白色堆疊菱形\ndraw_white_sun(img, center_x, center_y, sun_radius, white);\n// 利用一個藍色大圓與白色小圓畫出藍色環狀\ngdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\ngdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n\n}\n\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n// M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n// 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\nfloat deg = M_PI/180;\n// 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n// 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\nfloat sr = sun_radius/tan(75*deg);\nint ax, ay, bx, by, dx, dy, ex, ey;\ngdPoint points[4];\n/* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\nax = center_x;\nay = center_y - sun_radius;\nbx = center_x - sun_radius*tan(15*deg);\nby = center_y;\nex = center_x;\ney = center_y + sun_radius;\ndx = center_x + sun_radius*tan(15*deg);\ndy = center_y;\n// AB\ngdImageLine(img, ax, ay, bx, by, color);\n// BE\ngdImageLine(img, bx, by, ex, ey, color);\n// ED\ngdImageLine(img, ex, ey, dx, dy, color);\n// DA\ngdImageLine(img, dx, dy, ax, ay, color);\n*/\nax = center_x;\nay = center_y - sun_radius;\nbx = center_x - sun_radius*tan(15*deg);\nby = center_y;\nex = center_x;\ney = center_y + sun_radius;\ndx = center_x + sun_radius*tan(15*deg);\ndy = center_y;\n// 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\nfor (int i=1;i<=6;i++){\n// A\npoints[0].x = ax+sun_radius*sin(30*deg*i);\npoints[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n// B\npoints[1].x = bx+sr-sr*cos(30*deg*i);\npoints[1].y = by-sr*sin(30*deg*i);\n// E\npoints[2].x = ex-sun_radius*sin(30*deg*i);\npoints[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n// D\npoints[3].x = dx-(sr-sr*cos(30*deg*i));\npoints[3].y = dy+sr*sin(30*deg*i);\n// 對菱形區域範圍塗色\ngdImageFilledPolygon(img, points, 4, color);\n// 在菱形區域外圍畫線, 明確界定菱形範圍\ngdImagePolygon(img, points, 4, color);\n}\n} \n \n \n 美國國旗 \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color);\n\nint main() {\nint width = 800;\nint height = (int)(width / 1.9);\n\ngdImagePtr img = gdImageCreateTrueColor(width, height);\ngdImageAlphaBlending(img, 0);\n\ndraw_usa_flag(img);\n\nFILE *outputFile = fopen("./../images/usa_flag.png", "wb");\nif (outputFile == NULL) {\nfprintf(stderr, "Error opening the output file.\\n");\nreturn 1;\n}\n\ngdImagePngEx(img, outputFile, 9);\nfclose(outputFile);\ngdImageDestroy(img);\n\nreturn 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\nint width = gdImageSX(img);\nint height = gdImageSY(img);\nint red, white, blue;\n// Colors for the flag\nred = gdImageColorAllocate(img, 178, 34, 52); // Red stripes\nwhite = gdImageColorAllocate(img, 255, 255, 255); // White stripes\nblue = gdImageColorAllocate(img, 60, 59, 110); // Blue field\n\nint stripe_height = height / 13;\nint stripe_width = width;\nint star_size = (int)(0.0308 * height); // Corrected star size (half the original size)\n\nfor (int y = 0; y < height; y += stripe_height) {\nif (y / stripe_height % 2 == 0) {\ngdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n} else {\ngdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n}\n}\n\ngdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\nint star_spacing_x = (int)(0.126 * height); // Horizontal spacing between stars\nint star_spacing_y = (int)(0.054 * height); // Vertical spacing between stars\nint star_start_x = (int)(0.122 * height); // Starting X position for stars\nint star_start_y = (int)(0.0485 * height); // Starting Y position for stars\n\nfor (int row = 0; row < 9; row++) {\nint starsPerRow = (row % 2 == 0) ? 6 : 5;\nint space_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\nfor (int star = 0; star < starsPerRow; star++) {\nint x = star_start_x + star * star_spacing_x+space_x;\nint y = star_start_y + row * star_spacing_y;\ndraw_star(img, x, y, star_size, white);\n}\n}\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color) {\ngdPoint points[10];\n\nfor (int i = 0; i < 10; i++) {\ndouble angle = M_PI / 2 + i * 2 * M_PI / 10+M_PI;\nint radius = (i % 2 == 0) ? size : size / 2;\npoints[i].x = x + radius * cos(angle);\npoints[i].y = y + radius * sin(angle);\n}\n\n// Fill the star with white color\ngdImageFilledPolygon(img, points, 10, color);\n} \n \n \n', 'tags': '', 'url': 'program.html'}, {'title': 'file', 'text': '檔案總攬 \n \n tinyc.7z \xa0( Tiny C Compiler 編譯 C 程式, 包含 gd 與 gnuplot) \n \n w11_1a.7z \xa0( 網路設定檔案) \n \n python3114_git_putty.7z \xa0(將近端 cmsimde 啟動並改版後推向 Github 所需的檔案) \n \n \n', 'tags': '', 'url': 'file.html'}, {'title': 'Brython', 'text': '\n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};