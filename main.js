// 1. 聖經書卷對照結構表
const books = [
    { name: "創世記", shortName: "創", maxChapters: 50 }, { name: "出埃及記", shortName: "出", maxChapters: 40 },
    { name: "利未記", shortName: "利", maxChapters: 27 }, { name: "民數記", shortName: "民", maxChapters: 36 },
    { name: "申命記", shortName: "申", maxChapters: 34 }, { name: "約書亞記", shortName: "書", maxChunks: 24, maxChapters: 24 },
    { name: "士師記", shortName: "士", maxChapters: 21 }, { name: "路得記", shortName: "得", maxChapters: 4 },
    { name: "撒母耳記上", shortName: "撒上", maxChapters: 31 }, { name: "撒母耳記下", shortName: "撒下", maxChapters: 24 },
    { name: "列王紀上", shortName: "王上", maxChapters: 22 }, { name: "列王紀下", shortName: "王下", maxChapters: 25 },
    { name: "歷代志上", shortName: "代上", maxChapters: 29 }, { name: "歷代志下", shortName: "代下", maxChapters: 36 },
    { name: "以斯拉記", shortName: "拉", maxChapters: 10 }, { name: "尼希米記", shortName: "尼", maxChapters: 13 },
    { name: "以斯帖記", shortName: "斯", maxChapters: 10 }, { name: "約伯記", shortName: "伯", maxChapters: 42 },
    { name: "詩篇", shortName: "詩", maxChapters: 150 }, { name: "箴言", shortName: "箴", maxChapters: 31 },
    { name: "傳道書", shortName: "傳", maxChapters: 12 }, { name: "雅歌", shortName: "歌", maxChapters: 8 },
    { name: "以賽亞書", shortName: "賽", maxChapters: 66 }, { name: "耶利米書", shortName: "耶", maxChapters: 52 },
    { name: "耶利米哀歌", shortName: "哀", maxChapters: 5 }, { name: "以西結書", shortName: "結", maxChapters: 48 },
    { name: "但以理書", shortName: "但", maxChapters: 12 }, { name: "何西阿書", shortName: "何", maxChapters: 14 },
    { name: "約珥書", shortName: "珥", maxChapters: 3 }, { name: "阿摩司書", shortName: "摩", maxChapters: 9 },
    { name: "俄巴底亞書", shortName: "俄", maxChapters: 1 }, { name: "約拿書", shortName: "拿", maxChapters: 4 },
    { name: "彌迦書", shortName: "彌", maxChapters: 7 }, { name: "那鴻書", shortName: "鴻", maxChapters: 3 },
    { name: "哈巴谷書", shortName: "哈", maxChapters: 3 }, { name: "西番雅書", shortName: "番", maxChapters: 3 },
    { name: "哈該書", shortName: "該", maxChapters: 2 }, { name: "撒迦利亞書", shortName: "亞", maxChapters: 14 },
    { name: "瑪拉基書", shortName: "瑪", maxChapters: 4 }, { name: "馬太福音", shortName: "太", maxChapters: 28 },
    { name: "馬可福音", shortName: "可", maxChapters: 16 }, { name: "路加福音", shortName: "路", maxChapters: 24 },
    { name: "約翰福音", shortName: "約", maxChapters: 21 }, { name: "使徒行傳", shortName: "徒", maxChapters: 28 },
    { name: "羅馬書", shortName: "羅", maxChapters: 16 }, { name: "哥林多前書", shortName: "林前", maxChapters: 16 },
    { name: "哥林多後書", shortName: "林後", maxChapters: 13 }, { name: "加拉太書", shortName: "加", maxChapters: 6 },
    { name: "以弗所書", shortName: "弗", maxChapters: 6 }, { name: "腓立比書", shortName: "腓", maxChapters: 4 },
    { name: "歌羅西書", shortName: "西", maxChapters: 4 }, { name: "帖撒羅尼迦前書", shortName: "帖前", maxChapters: 5 },
    { name: "帖撒羅尼迦後書", shortName: "帖後", maxChapters: 3 }, { name: "提摩太前書", shortName: "提前", maxChapters: 6 },
    { name: "提摩太後書", shortName: "提後", maxChapters: 4 }, { name: "提多書", shortName: "多", maxChapters: 3 },
    { name: "腓利門書", shortName: "門", maxChapters: 1 }, { name: "希伯來書", shortName: "來", maxChapters: 13 },
    { name: "雅各書", shortName: "雅", maxChapters: 5 }, { name: "彼得前書", shortName: "彼前", maxChapters: 5 },
    { name: "彼得後書", shortName: "彼後", maxChapters: 3 }, { name: "約翰一書", shortName: "約一", maxChapters: 5 },
    { name: "約翰二書", shortName: "約二", maxChapters: 1 }, { name: "約翰三書", shortName: "約三", maxChapters: 1 },
    { name: "猶大書", shortName: "猶", maxChapters: 1 }, { name: "啟示錄", shortName: "啟", maxChapters: 22 }
];

const themes = [
    { name: "淵面黑暗", topBarBg: "#1F1F1F", topBarText: "#E3E3E3", contentBg: "#121212", contentText: "#E5E5E5" },
    { name: "青草地上", topBarBg: "#388E3C", topBarText: "#FFFFFF", contentBg: "#F1F8E9", contentText: "#1B5E20" },
    { name: "歸於塵土", topBarBg: "#8B5A2B", topBarText: "#FFFFFF", contentBg: "#F4ECD8", contentText: "#5D4037" },
    { name: "紫色的袍", topBarBg: "#4A148C", topBarText: "#EBEEFF", contentBg: "#1F033D", contentText: "#F3E5F5" }
];

const colors56 = [
    "#F5F5F5","#D6D6D6","#B5B5B5","#808080","#4A4A4A","#263238","#141414","#000000",
    "#FFFFEBEE","#FFFFCDD2","#EF9A9A","#E57373","#D32F2F","#B71C1C","#7F0000","#4A0000",
    "#FFFDE7","#FFF9C4","#FFE0B2","#FFFFCC80","#F57C00","#E65100","#BF360C","#5E1903",
    "#E8F5E9","#C8E6C9","#A5D6A7","#66BB6A","#388E3C","#1B5E20","#0D3C12","#041C06",
    "#E3F2FD","#E0F7FA","#80DEEA","#90CAF9","#42A5F5","#1976D2","#0D47A1","#051B40",
    "#F3E5F5","#E1BEE7","#CE93D8","#AB47BC","#8E24AA","#6A1B9A","#4A148C","#1F033D",
    "#EFEBE9","#D7CCC8","#BCAAA4","#A1887F","#6D4C41","#4E342E","#1F110B","#140B07"
];

// App 狀態
let currentBookIdx = parseInt(localStorage.getItem("lastBookIdx")) || 0;
let currentChapter = parseInt(localStorage.getItem("lastChapter")) || 1;
let fontSizeMultiplier = parseFloat(localStorage.getItem("fontSizeMultiplier")) || 1.0;
let isGlobalBold = localStorage.getItem("isGlobalBold") === "true";
let currentThemeName = localStorage.getItem("selectedTheme") || "紫色的袍";

let customBgColor = localStorage.getItem("customBgColor") || null;
let customTextColor = localStorage.getItem("customTextColor") || null;
let customBgImage = localStorage.getItem("customBgImage") || null;	
let bgOpacity = parseFloat(localStorage.getItem("bgOpacity")) || 0.45;

let allVerses = [];
let allVersesCache = [];
let selectedVersesMap = new Map();
let cropperInstance = null; 

const bookMap = {};
books.forEach((b, idx) => { bookMap[b.shortName] = { index: idx, value: b }; });

// 初始化
async function init() {
    setupUIListeners();
    renderBookSelectors();
    applyThemeSettings();
    
    try {
        const res = await fetch('bibleText.txt');
        if (!res.ok) throw new Error("檔案讀取失敗");
        const text = await res.text();
        const lines = text.split(/\r?\n/);

        lines.forEach(line => {
            let currentLine = line.trim();
            if (!currentLine) return;
            currentLine = currentLine.replace(/^[";,\s]+/, "").replace(/[";,\s]+$/, "").trim();
            if (currentLine.includes(":")) {
                allVerses.push(currentLine);
            }
        });

        buildSearchCache();
        renderCurrentChapter();
    } catch(e) {
        document.getElementById('contentView').innerHTML = `<div style="text-align:center;color:red;padding:20px;">聖經文字檔載入出錯。</div>`;
    }
}

function buildSearchCache() {
    allVersesCache = [];
    allVerses.forEach(line => {
        const colonIdx = line.indexOf(':');
        if (colonIdx === -1) return;
        const prefix = line.substring(0, colonIdx);
        
        let shortName = "";
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix.charAt(i);
            if (char >= '0' && char <= '9') break;
            shortName += char;
        }

        const chapterStr = prefix.substring(shortName.length);
        const chapter = parseInt(chapterStr, 10) || 1;
        const spaceIdx = line.indexOf(' ', colonIdx);
        const verseNum = spaceIdx !== -1 ? line.substring(colonIdx + 1, spaceIdx) : line.substring(colonIdx + 1);
        const verseContent = spaceIdx !== -1 ? line.substring(spaceIdx + 1) : "";

        const indexedBook = bookMap[shortName];
        if (!indexedBook) return;

        allVersesCache.push({
            bookIndex: indexedBook.index,
            bookName: indexedBook.value.name,
            bookShortName: shortName,
            chapter: chapter,
            verseNumber: verseNum,
            verseContent: verseContent
        });
    });
}

function getVerses(bookShortName, chapter) {
    const targetPrefix = `${bookShortName}${chapter}:`;
    return allVerses.filter(line => line.startsWith(targetPrefix) || line.includes(targetPrefix)).map(line => {
        if (line.includes(" ")) {
            const parts = line.split(/ (.*)/);
            const verseNum = parts[0].substring(parts[0].indexOf(":") + 1);
            return `${verseNum} ${parts[1]}`;
        }
        return line;
    });
}

function renderCurrentChapter() {
    const book = books[currentBookIdx];
    document.getElementById('lblBook').innerText = book.name;
    document.getElementById('lblChapter').innerText = `第 ${currentChapter} 章`;
    document.getElementById('lblBottomIndicator').innerText = `${book.shortName} ${currentChapter}`;
    
    document.getElementById('btnPrev').disabled = (currentBookIdx === 0 && currentChapter === 1);
    document.getElementById('btnNext').disabled = (currentBookIdx === books.length - 1 && currentChapter === books[books.length - 1].maxChapters);

    const container = document.getElementById('contentView');
    container.innerHTML = "";
    selectedVersesMap.clear();
    updateFloatingBar();

    const currentVerses = getVerses(book.shortName, currentChapter);
    
    currentVerses.forEach((fullVerseText, index) => {
        const spaceIdx = fullVerseText.indexOf(' ');
        const verseNumber = spaceIdx !== -1 ? fullVerseText.substring(0, spaceIdx) : "";
        const verseContent = spaceIdx !== -1 ? fullVerseText.substring(spaceIdx + 1) : fullVerseText;

        const row = document.createElement('div');
        row.className = "verse-row";
        
        const size = 18 * fontSizeMultiplier;
        row.style.fontSize = `${size}px`;
        row.style.lineHeight = `1.45`;
        if (isGlobalBold) row.style.fontWeight = "bold";

        // FIX: Syntax error here. Removed 'fullText = ' assignment inside arguments.
        row.onclick = () => handleVerseClick(index, fullVerseText, row, verseNumber);

        if (verseNumber) {
            const numSpan = document.createElement('span');
            numSpan.className = "verse-num";
            numSpan.innerText = verseNumber;
            // FIX: Variable reference error here. Changed 'allVersesCache' to 'fullVerseText'.
            numSpan.style.color = customBgImage ? "#FFFFFF" : (customTextColor || themes.find(t=>t.name===currentThemeName).contentText);
            numSpan.style.opacity = "0.5";
            numSpan.id = `vnum-${index}`;
            row.appendChild(numSpan);
        }

        const textSpan = document.createElement('span');
        textSpan.className = "verse-text";
        textSpan.innerText = verseContent;
        row.appendChild(textSpan);

        container.appendChild(row);
    });
    container.scrollTop = 0;
    
    localStorage.setItem("lastBookIdx", currentBookIdx);
    localStorage.setItem("lastChapter", currentChapter);
}

function handleVerseClick(index, fullText, rowElement, verseNumber) {
    const numSpan = document.getElementById(`vnum-${index}`);
    if (selectedVersesMap.has(index)) {
        selectedVersesMap.delete(index);
        rowElement.style.background = "transparent";
        if (numSpan) numSpan.style.color = "";
    } else {
        selectedVersesMap.set(index, fullText);
        rowElement.style.background = "rgba(255, 235, 59, 0.25)";
        if (numSpan) numSpan.style.color = "#FFB300";
    }
    updateFloatingBar();
}

function updateFloatingBar() {
    const bar = document.getElementById('floatingBar');
    if (selectedVersesMap.size > 0) {
        bar.style.display = "flex";
        document.getElementById('lblSelectedCount').innerText = `已選 ${selectedVersesMap.size} 節`;
    } else {
        bar.style.display = "none";
    }
}

function clearSelection() {
    selectedVersesMap.clear();
    renderCurrentChapter();
}

function generateSelectedText() {
    const sortedKeys = Array.from(selectedVersesMap.keys()).sort((a,b)=>a-b);
    let sb = `${books[currentBookIdx].name} 第 ${currentChapter} 章\n`;
    sortedKeys.forEach(k => { sb += `${selectedVersesMap.get(k)}\n`; });
    return sb.trim();
}

function handleCopy() {
    const text = generateSelectedText();
    navigator.clipboard.writeText(text).then(() => {
        alert(`已複製 ${selectedVersesMap.size} 節經文`);
        clearSelection();
    });
}

function navigateChapter(direction) {
    currentChapter += direction;
    if (currentChapter < 1) {
        currentBookIdx--;
        if (currentBookIdx < 0) { currentBookIdx = 0; currentChapter = 1; return; }
        currentChapter = books[currentBookIdx].maxChapters;
    } else if (currentChapter > books[currentBookIdx].maxChapters) {
        currentBookIdx++;
        if (currentBookIdx >= books.length) { currentBookIdx = books.length - 1; currentChapter = books[currentBookIdx].maxChapters; return; }
        currentChapter = 1;
    }
    renderCurrentChapter();
}

function handleShare() {
    const text = generateSelectedText();
    if (navigator.share) { navigator.share({ text: text }).then(() => clearSelection()); } else { handleCopy(); }
}

// 🎨 核心：控制自選背景與工具列透明度
function applyThemeSettings() {
    const currentTheme = themes.find(t => t.name === currentThemeName) || themes[0];
    const topBar = document.getElementById('topBar');
    const bottomBar = document.getElementById('bottomBar');
    const body = document.body;

    const bg = customBgColor || currentTheme.contentBg;
    const txt = customTextColor || currentTheme.contentText;

    if (customBgImage) {
        // ✨ 自選背景圖片啟動
        body.style.backgroundImage = `url(${customBgImage})`;
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundAttachment = "fixed";

        // 📱 完美全透明工具列穿透效果
        topBar.style.background = "transparent";
        topBar.style.color = "#FFFFFF";
        bottomBar.style.background = "transparent";
        bottomBar.style.color = "#FFFFFF";
        bottomBar.style.borderTop = "none";

        // 調節背景遮罩透明度
        body.style.backgroundColor = `rgba(0, 0, 0, ${bgOpacity})`;
        body.style.backgroundBlendMode = "darken";

        const btnClear = document.getElementById('btnClearBgImg');
        const sliderGroup = document.getElementById('opacitySliderGroup');
        if(btnClear) btnClear.style.display = "inline-block";
        if(sliderGroup) sliderGroup.style.display = "flex";
    } else {
        // 🎨 普通主題或色板背景
        body.style.backgroundImage = "none";
        body.style.backgroundBlendMode = "normal";
        topBar.style.background = bg;
        bottomBar.style.background = bg;
        body.style.background = bg;
        topBar.style.color = txt;
        bottomBar.style.color = txt;
        bottomBar.style.borderTop = "1px solid rgba(0,0,0,0.05)";

        const btnClear = document.getElementById('btnClearBgImg');
        const sliderGroup = document.getElementById('opacitySliderGroup');
        if(btnClear) btnClear.style.display = "none";
        if(sliderGroup) sliderGroup.style.display = "none";
    }

    body.style.color = customBgImage ? "#FFFFFF" : txt;

    const buttons = document.querySelectorAll('.bottom-bar .btn');
    buttons.forEach(btn => {
        if (customBgImage) {
            btn.style.color = "#FFFFFF";
            btn.style.borderColor = "#FFFFFF";
            btn.style.background = "rgba(255,255,255,0.15)";
        } else {
            btn.style.color = txt;
            btn.style.borderColor = txt;
            btn.style.background = "transparent";
        }
    });
}

function changeFontSize(val) {
    fontSizeMultiplier = parseFloat(val);
    document.getElementById('lblFontSize').innerText = `${Math.round(val * 100)}%`;
    localStorage.setItem("fontSizeMultiplier", val);
    renderCurrentChapter();
}

function openModal(id) {
    if (id === 'chapterModal') {
        const grid = document.getElementById('chapterGrid');
        grid.innerHTML = "";
        document.getElementById('chapterModalTitle').innerText = `${books[currentBookIdx].name} - 選擇章數`;
        for (let i = 1; i <= books[currentBookIdx].maxChapters; i++) {
            const b = document.createElement('button');
            b.className = "grid-btn"; b.innerText = i;
            if (i === currentChapter) { b.style.background = "#4A148C"; b.style.color = "white"; }
            b.onclick = () => { currentChapter = i; renderCurrentChapter(); document.getElementById('chapterModal').style.display='none'; };
            grid.appendChild(b);
        }
    }
    document.getElementById(id).style.display = "flex";
}

function toggleBold(val) {
    isGlobalBold = val; localStorage.setItem("isGlobalBold", val); renderCurrentChapter();
}

function closeModal(e, id) {
    if (e.target.id === id) document.getElementById(id).style.display = "none";
}

let colorTargetMode = "bg";
function openColorSubModal(mode) {
    colorTargetMode = mode;
    document.getElementById('colorModalTitle').innerText = mode === 'bg' ? '請選擇背景顏色' : '請選擇文字顏色';
    const grid = document.getElementById('colorPaletteGrid');
    grid.innerHTML = "";
    
    colors56.forEach(color => {
        const dot = document.createElement('div');
        dot.className = "color-dot"; dot.style.background = color;
        if ((mode === 'bg' && customBgColor === color) || (mode === 'text' && customTextColor === color)) dot.innerText = "✓";

        dot.onclick = () => {
            if (mode === 'bg') { customBgColor = color; localStorage.setItem("customBgColor", color); } 
            else { customTextColor = color; localStorage.setItem("customTextColor", color); }
            customBgImage = null; localStorage.removeItem("customBgImage"); // 清除圖片背景以套用色彩
            applyThemeSettings(); renderCurrentChapter();
            document.getElementById('colorPaletteModal').style.display = 'none';
        };
        grid.appendChild(dot);
    });
    document.getElementById('colorPaletteModal').style.display = "flex";
}

function executeSearch() {
    const query = document.getElementById('txtSearch').value.trim().toLowerCase();
    const resultsView = document.getElementById('searchResultsView');
    if (!query) return;

    resultsView.innerHTML = "<div style='text-align:center;'>檢責中...</div>";
    
    setTimeout(() => {
        const filtered = allVersesCache.filter(item => item.verseContent.toLowerCase().includes(query));
        if (filtered.length === 0) {
            resultsView.innerHTML = "<div style='text-align:center;color:gray;margin-top:20px;'>搵唔到相關經文</div>";
            return;
        }

        resultsView.innerHTML = "";
        filtered.forEach(item => {
            const card = document.createElement('div');
            card.style.background = "rgba(0,0,0,0.04)"; card.style.padding = "10px"; card.style.borderRadius = "8px"; card.style.marginBottom = "8px"; card.style.cursor = "pointer";
            card.innerHTML = `<div style="font-weight:bold;color:#4A148C;font-size:13px;">${item.bookName} 第 ${item.chapter} 章 : ${item.verseNumber} 節</div><div style="margin-top:4px;">${item.verseContent}</div>`;
            
            card.onclick = () => {
                currentBookIdx = item.bookIndex; currentChapter = item.chapter; renderCurrentChapter();
                setTimeout(() => {
                    const idx = parseInt(item.verseNumber) - 1;
                    const rows = document.getElementsByClassName('verse-row');
                    if (rows[idx]) { rows[idx].scrollIntoView({ behavior: 'smooth', block: 'center' }); rows[idx].click(); }
                }, 300);
                document.getElementById('searchModal').style.display = "none";
            };
            resultsView.appendChild(card);
        });
    }, 50);
}

function renderBookSelectors() {
    const otList = document.getElementById('otList');
    const ntList = document.getElementById('ntList');
    books.forEach((b, idx) => {
        const item = document.createElement('div');
        item.style.padding = "6px"; item.style.fontSize = "13px"; item.style.cursor = "pointer"; item.style.borderBottom = "1px solid #f0f0f0";
        item.innerText = b.name;
        item.onclick = () => { currentBookIdx = idx; currentChapter = 1; renderCurrentChapter(); document.getElementById('bookModal').style.display = 'none'; };
        if (idx < 39) otList.appendChild(item); else ntList.appendChild(item);
    });
}

function setupUIListeners() {
    document.getElementById('chkBold').checked = isGlobalBold;
    document.getElementById('sliderFont').value = fontSizeMultiplier;
    document.getElementById('lblFontSize').innerText = `${Math.round(fontSizeMultiplier * 100)}%`;

    const themeContainer = document.getElementById('themeList');
    themeContainer.innerHTML = "";
    themes.forEach(t => {
        const card = document.createElement('div');
        card.className = "theme-card"; card.style.background = t.contentBg; card.style.color = t.contentText;
        card.innerHTML = `<span>${t.name}</span><div style="display:flex;gap:4px;"><div style="width:16px;height:16px;background:${t.topBarBg}"></div><div style="width:16px;height:16px;background:${t.contentBg}"></div></div>`;
        card.onclick = () => {
            currentThemeName = t.name; localStorage.setItem("selectedTheme", t.name);
            customBgColor = null; customTextColor = null; customBgImage = null;
            localStorage.removeItem("customBgColor"); localStorage.removeItem("customTextColor"); localStorage.removeItem("customBgImage");
            applyThemeSettings(); renderCurrentChapter();
            document.getElementById('appearanceModal').style.display = 'none';
        };
        themeContainer.appendChild(card);
    });
}

// 🖼️ 處理圖片上傳與裁剪框啟動
function handleBgImageUpload(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const cropImage = document.getElementById('cropImage');
        cropImage.src = e.target.result;

        // 打開手動選取範圍的彈窗
        document.getElementById('cropModal').style.display = 'flex';

        if (cropperInstance) cropperInstance.destroy();
        
        cropperInstance = new Cropper(cropImage, {
            viewMode: 1,
            dragMode: 'move',
            autoCropArea: 1.0,
            restore: false,
            modal: true,
            guides: true,
            highlight: false,
            cropBoxMovable: true,  // 啟用手動拖拽移動
            cropBoxResizable: true // 啟用手動拉大縮小
        });
    };
    reader.readAsDataURL(file);
}

function cancelCrop() {
    if (cropperInstance) cropperInstance.destroy();
    document.getElementById('cropModal').style.display = 'none';
    document.getElementById('bgImageInput').value = "";
}

// 確定儲存裁剪後的高清背景
function saveCroppedImage() {
    if (!cropperInstance) return;

    // 💡 突破大圖體積限制：自動調整並轉碼高精細度畫質
    const canvas = cropperInstance.getCroppedCanvas({
        maxWidth: 2000,
        maxHeight: 2000
    });

    const compressedBase64 = canvas.toDataURL('image/jpeg', 0.75);

    try {
        customBgImage = compressedBase64;
        localStorage.setItem("customBgImage", compressedBase64);
        customBgColor = null; // 清除純色背景
        localStorage.removeItem("customBgColor");
        
        applyThemeSettings();
        renderCurrentChapter();
        
        document.getElementById('cropModal').style.display = 'none';
        document.getElementById('appearanceModal').style.display = 'none';
    } catch (error) {
        alert("手機瀏覽器儲存容量不足，建議清除一次快取重試。");
    }

    if (cropperInstance) cropperInstance.destroy();
}

function clearBgImage() {
    customBgImage = null;
    localStorage.removeItem("customBgImage");
    const fileInput = document.getElementById('bgImageInput');
    if (fileInput) fileInput.value = "";
    applyThemeSettings();
    renderCurrentChapter();
}

function changeBgOpacity(val) {
    bgOpacity = parseFloat(val);
    const label = document.getElementById('lblOpacity');
    if (label) label.innerText = `${Math.round(val * 100)}%`;
    localStorage.setItem("bgOpacity", val);
    applyThemeSettings();
}

window.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('sliderOpacity');
    const label = document.getElementById('lblOpacity');
    if (slider && label) {
        slider.value = bgOpacity;
        label.innerText = `${Math.round(bgOpacity * 100)}%`;
    }
    init();
});