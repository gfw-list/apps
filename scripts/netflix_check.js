/**
 * Netflix Check for (Quantumult X)
  
 */

const node = $environment.params || ""; 
const flags = new Map([
    ["US","🇺🇸"], ["JP","🇯🇵"], ["CN","🇨🇳"], ["SG","🇸🇬"],
    ["GB","🇬🇧"], ["KR","🇰🇷"], ["DE","🇩🇪"], ["FR","🇫🇷"],
    ["HK","🇭🇰"], ["TW","🇼🇸"], ["MY","🇲🇾"],
]);

const urls = [
    "https://www.netflix.com/title/81280792", // LEGO Ninjago
    "https://www.netflix.com/title/70143836"  // Breaking Bad
];

// fetch based on specific node
const opts = { policy: node };

const headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
};

async function fetchPage(url) {
    try {
        const resp = await $task.fetch({ url, headers, opts });
        return resp.body;
    } catch (e) {
        return null;
    }
}

(async function main() {
    const page1 = await fetchPage(urls[0]);
    const page2 = await fetchPage(urls[1]);

    let result = "";

    if (!page1 || !page2) {
        result = "Connection Failed ❗️";
    } else {
        const blocked1 = page1.includes("Oh no!");
        const blocked2 = page2.includes("Oh no!");

        if (blocked1 && blocked2) {
            result = " ⚠️ Original Only";
        } else {
            // fetch region
            let regionMatch = page1.match(/data-country="([A-Z]{2})"/);
            let region = regionMatch ? regionMatch[1] : null;

            // test page2
            if (!region) {
                regionMatch = page2.match(/data-country="([A-Z]{2})"/);
                region = regionMatch ? regionMatch[1] : null;
            }

            if (!region) {
                result = "Not Available or No Region";
            } else {
                const flag = flags.get(region) || "";
                result = `🎉 Fully Unlocked </br></br> Region: ⟦${flag}⟧`;
            }
        }
    }

const content = `
    ─────────────</br></br>
    <font color="${ 
        /Fully/.test(result) 
        ? '#32CD32' 
        : /Original/.test(result) 
        ? '#FFD700' 
        : '#FF6347'
    }" size="4">${result}</font></br>
    ─────────────</br></br>
    <font color="
    #1D98A8"><b>Node</b> :
    ${node}</font></br>
    `;

const htmlMessage = `<p style="text-align: center; font-family: -apple-system; font-size: medium; font-weight: thin">${content}</p>`;

$done({ title: "📺 Netflix Check", htmlMessage });
})();
