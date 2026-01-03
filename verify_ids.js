
const getYoutubeVideoId = (url) => {
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') {
      return urlObj.pathname.substring(1).split('?')[0];
    }
    if (urlObj.hostname.includes('youtube.com')) {
      if (urlObj.pathname.includes('embed/')) {
        return urlObj.pathname.split('embed/')[1].split(/[?&]/)[0];
      }
      return urlObj.searchParams.get('v');
    }
  } catch (error) {
    console.error(`Failed to parse URL: ${url}`, error);
  }
  return null;
};

const videoData = {
  superMuslim: { title: "دورة سوبر مسلم", urls: ["https://youtu.be/7hlXvCqaps0?si=g1bFNWXnkgGOk6RU"], icon: 'Sparkles', description: "دورة متكاملة لبناء شخصية المسلم القوي والفعال في مجتمعه.", category: 'course' },
  qadSamia: { title: "دورة قد سمع", urls: ["https://youtu.be/cYvaCL9q9PQ?si=55AP912POkbTS1Dn", "https://youtu.be/gXUD9YHHooc?si=oIdOx5wfox8saFmC", "https://youtu.be/_rjH4vI0Cyo?si=atgsqcy8yVXEWxQs", "https://youtu.be/S0haNDn-NF0?si=e11GPA1VZCh782CE", "https://youtu.be/PH7dShgWtLM?si=Z7otOIOwH5KZ3j-I", "https://youtu.be/TDw0bUeFa0g?si=JUhlra8MAe39NlKl", "https://youtu.be/Tki1kueEPTY?si=721QbGxu18PBV4OQ", "https://youtu.be/vXowAKffZuM?si=15x8v__dsj6CmlnM", "https://youtu.be/WAjK6NGTTNQ?si=jU2BGNl--bJ9-pJj"], icon: 'BookOpen', description: "تفسير وتدبر جزء قد سمع من القرآن الكريم.", category: 'course' },
  nawawi: { title: "الأربعين النووية", urls: ["https://youtu.be/I4uZxRTgJIY?si=t5lzL4hLPIRjGj-S", "https://youtu.be/9u1MNMVn25o?si=zkZ1rEA7PEWPl2ia", "https://youtu.be/4ohLB6OiOJU?si=bHk1-DSzQd26tC0U", "https://youtu.be/5mG4qMJqqw4?si=q9xbmv_PZEt9ULpf", "https://youtu.be/TWJSgk8nE_4?si=X0smJYI8iAw-1bY7", "https://youtu.be/PfQPoLU_OCU?si=hYmDsm40GG3FoQxs", "https://youtu.be/tqq4zMdssAw?si=5je9WwIPZvc1ePGj", "https://youtu.be/IwtgNvhVF-c?si=coez2ITHVAn-vmIo", "https://youtu.be/G3roLahMctM?si=io-UXpgRIFidLj0T", "https://youtu.be/ua6SUbmBojg?si=02hV3-iQiwOtiH9v", "https://youtu.be/0s8v8YOSxDs?si=5JBrUtzhQoRCHljy", "https://youtu.be/h7p0Y_i671Y?si=-4yF3q-JRiix5a93", "https://youtu.be/79agv_qQXHk?si=JEPaSoj0F6yrXhUH", "https://youtu.be/WEYS9PGaed4?si=DlZmmjQVciC3pMyf", "https://youtu.be/53gYyv_KHwc?si=jFiK36fElyl61tF6", "https://youtu.be/LxtD-yNTFa4?si=Usc_gzw_5kdF2vfs"], icon: 'BookMarked', description: "شرح الأحاديث الأربعين التي جمعها الإمام النووي.", category: 'course' },
  sahaba: { title: "قصص الصحابة", urls: ["https://youtu.be/sdIeEh0q5Jw?si=JAdzB-bPcnQOPbmh", "https://youtu.be/lyjIP-KtLbU?si=q8xwPqlDF7DBpme4", "https://youtu.be/xnksSTslqGw?si=RwViAbcz9b6_YbBj", "https://youtu.be/ohVu1PaDwdM?si=6nw0bmUABP7TVgf4", "https://youtu.be/IL0CsVLYUWM?si=q2s824sZrJwKw1I", "https://youtu.be/qhoN4I_flYw?si=UbdKA3TwSdkHwFZU", "https://youtu.be/_jXTbYavBvc?si=e_5CqYzKWUiUAyAP", "https://youtu.be/_r0--GEO-ZY?si=trMfzMd0MCycN58g", "https://youtu.be/IbBR3jGnxFY?si=BUrvOJxMnR-GtBwT", "https://youtu.be/FM9CmJhoFII?si=1HAXfeRVVt3QppBn", "https://youtu.be/Lesujm_xNDw?si=K0n0r4ns6eq5fzlO", "https://youtu.be/1ZvoK0vPW6Q?si=Ufj30UhVIzUIXgGo", "https://youtu.be/rTP-F2IGA_I?si=J149UP1kqKWs_LjW", "https://youtu.be/c4ZYifJxmYI?si=_ND-MoE9e_B8PaQC"], icon: 'Users', description: "مواقف وعبر من حياة الصحابة رضوان الله عليهم.", category: 'course' },
  dhariyat: { title: "مدرسة الذاريات", urls: ["https://www.youtube.com/watch?v=S5xfAW09g9A", "https://www.youtube.com/watch?v=bhBWYF2vwN4", "https://www.youtube.com/watch?v=VMZxErF7se4", "https://www.youtube.com/watch?v=RvqCAcPjDc0", "https://www.youtube.com/watch?v=NlBKqk1PEnM", "https://www.youtube.com/watch?v=V20xhGzKSbg", "https://www.youtube.com/watch?v=lcSMKkVNO3k", "https://www.youtube.com/watch?v=S2doGv606bs", "https://www.youtube.com/watch?v=Pmc5tlLOiV4", "https://www.youtube.com/watch?v=PiQjTTihuzM", "https://www.youtube.com/watch?v=4B6Zy8eGLjA", "https://www.youtube.com/watch?v=WJfjwPgCua0", "https://www.youtube.com/watch?v=GJaBxNMQzbM", "https://www.youtube.com/watch?v=oTBtUxpn7cs", "https://www.youtube.com/watch?v=IUV3aXzUfGk", "https://www.youtube.com/watch?v=tD7JPRW15Ts", "https://www.youtube.com/watch?v=h1LR21XPrjg", "https://www.youtube.com/watch?v=4fZaPx9ntWY", "https://www.youtube.com/watch?v=WOQ-oTdoKjs"], icon: 'GraduationCap', description: "وقفات تدبرية مع سورة الذاريات.", category: 'course' },
  clinic: { title: "العيادة النفسية", urls: ["https://youtu.be/TCvWWx2jB6k?si=eDFNFlRkJkNVR3RO", "https://youtu.be/w_-1UDLHB64?si=6gklKTN7osp7XKUN", "https://youtu.be/pnQVcd_5aUE?si=qM35C08WuMP5RbEl", "https://youtu.be/rsd0MzKB08M?si=0Mb7ebpGXnK0dC_9", "https://youtu.be/Yrp2WvqFDFg?si=S0F_a1gAeJ2zjm7k", "https://youtu.be/rAfq1bWgT10?si=bmmKnWf4My-hqogM", "https://youtu.be/uAOl6co4C0E?si=bb63Xc3JWKd3ejZs", "https://youtu.be/lcSMKkVNO3k?si=pE-7eAoZEY-RBRHR", "https://youtu.be/lUm87adLucI?si=kB7iioOgOhAVxIfw", "https://youtu.be/XK9slg5rNj8?si=b28_2lC16OWPwcfj", "https://youtu.be/-IXRnyw6NB8?si=bjFt8qRq8hUqxWlw", "https://youtu.be/J_hfaaR8Xj0?si=YyDec-KEpRLawatE", "https://youtu.be/TNwZMQabvYU?si=LqVbbugUb-ycOOxv", "https://youtu.be/6I2P10ufqN8?si=s7Pwxxm_iUh0IRqP", "https://youtu.be/cClyylSy1-k?si=RYNQlrzrwgUlrIMH", "https://youtu.be/EMqOXvGNrhc?si=MjXmnSm-4x0_SIft", "https://youtu.be/M-zFcbV7i3o?si=wTvQWf2o8RtCNMow", "https://youtu.be/21tIyexPd3U?si=ZNYRz5xuwkpGAc4A", "https://youtu.be/xwV7YJ7_O0M?si=MeExiLFlE7ubxpLb", "https://youtu.be/rI3YyHvcrsk?si=nwSNfqNMMQBag_5G", "https://youtu.be/8WA6UyP6SZI?si=CY9d7btP0Y4KEEXi"], icon: 'HeartHandshake', description: "تناول قضايا النفس البشرية من منظور إيماني.", category: 'course' },
  juzAmma: { title: "تفسير جزء عم", urls: ["https://www.youtube.com/watch?v=5ylsZmGHtSU", "https://www.youtube.com/watch?v=v5jkapf066I", "https://www.youtube.com/watch?v=FxoryCD8wOI", "https://www.youtube.com/watch?v=7aEKZ3JSJ3s", "https://www.youtube.com/watch?v=DVfPA-rD0ng", "https://www.youtube.com/watch?v=uTbA4FaLfFg", "https://www.youtube.com/watch?v=yrXLq21D8DU", "https://www.youtube.com/watch?v=vWsK0uis7bk", "https://www.youtube.com/watch?v=NR2sHYW8vmg", "https://www.youtube.com/watch?v=mS144nlLMN4", "https://www.youtube.com/watch?v=ohpacpqMS8c", "https://www.youtube.com/watch?v=gSYuwR7XWu4", "https://www.youtube.com/watch?v=rlCnXjbM4AQ", "https://www.youtube.com/watch?v=vegUu1qmDfA", "https://www.youtube.com/watch?v=OSy0rBKM5Sc", "https://www.youtube.com/watch?v=3UXEcYTmTuw", "https://www.youtube.com/watch?v=o-8PO8C52Mc", "https://www.youtube.com/watch?v=oMI0IELSNO0", "https://www.youtube.com/watch?v=owulXxLk2vc", "https://www.youtube.com/watch?v=jxXpWm0DXAU", "https://www.youtube.com/watch?v=YC3AzNTKHgQ", "https://www.youtube.com/watch?v=aZM_XhwLG_c", "https://www.youtube.com/watch?v=icbyM5eOhAw", "https://www.youtube.com/watch?v=9HWA5VIhy_s", "https://www.youtube.com/watch?v=qxnIhaEpu-o", "https://www.youtube.com/watch?v=gVWIA9alXxA"], icon: 'BookHeart', description: "تفسير مبسط وشامل لسور جزء عم.", category: 'course' },
  recitations: { 
    title: "تلاوات خاشعة", 
    icon: 'MicVocal', 
    description: "مجموعة من التلاوات القرآنية المؤثرة للمهندس علاء حامد.", 
    category: 'recitation',
    videos: [
        { url: "https://www.youtube.com/watch?v=BJfGLcUHiY0", title: "تلاوة هادئة من سورة الكهف" },
        { url: "https://www.youtube.com/watch?v=Svtd5RepL5E", title: "تلاوة هادئة لسورة مريم" },
        { url: "https://www.youtube.com/watch?v=ax6YSge2TQQ", title: "تلاوة هادئة من سورة يس" },
        { url: "https://www.youtube.com/watch?v=4wEnqGBksDg", title: "تلاوة هادئة من سورة لقمان" },
        { url: "https://www.youtube.com/watch?v=JnEYrLmnLd8", title: "تلاوة ندية من سورة قمر" },
        { url: "https://www.youtube.com/watch?v=AQhj0ipn8tY", title: "تلاوة مباركة من سورة الرحمن" },
        { url: "https://www.youtube.com/watch?v=abja10UephQ", title: "تلاوة هادئة سورة طه" },
        { url: "https://www.youtube.com/watch?v=lXKbXG-A8y4", title: "تلاوة هادئة من سورة الأحزاب" },
        { url: "https://www.youtube.com/watch?v=cMBN9uxqqss", title: "تلاوة هادئة من سورة يوسف" },
        { url: "https://www.youtube.com/watch?v=R6aNozfAZHA", title: "تلاوة عطرة لسورة الحجرات" },
        { url: "https://www.youtube.com/watch?v=grYgVw-p3DE", title: "تلاوة سورة القصص" },
        { url: "https://www.youtube.com/watch?v=KP4BNLKCVTc", title: "تلاوة هادئة مؤثرة لسورة المجادلة" },
        { url: "https://www.youtube.com/watch?v=uamGpRiIDSI", title: "قراءة هادئة خاشعة من سورة الحشر" },
        { url: "https://www.youtube.com/watch?v=3noVvN5GC6o", title: "قراءة هادئة لسورة الممتحنة" },
        { url: "https://www.youtube.com/watch?v=jPB3uzRs1_w", title: "قراءة هادئة لسورة الصف"}
    ]
  },
  yusuf: { title: "تعلمت من يوسف عليه السلام", urls: ["https://youtu.be/4b42YbHztDE?si=IZbrnG6ph6gQ4k9e", "https://youtu.be/YkGA5qjVy9w?si=PNNdqfpm6X2tQwD3", "https://youtu.be/HUt1bJIwvhA?si=snh6sp99mUkk8fkE", "https://youtu.be/_t7554RaraQ?si=B_0C_9HCWnKAU8jV", "https://youtu.be/mCnaFPiLkSc?si=sJL9rYeEjFmfciHw", "https://youtu.be/b6zD3b8gXuA?si=OIqp3Hr3cHB9iDi4", "https://youtu.be/PD77DsqE0tE?si=Ze5PMlOZxSWdMfKs", "https://youtu.be/0EDd1jYyl7U?si=yvGlfo1_AphyBO6L", "https://youtu.be/niVQMDzNo9o?si=qF0OscTzUdPGhJ1F", "https://youtu.be/2ejKrps0GoA?si=LW_MaxNxn3gT21iD", "https://youtu.be/pEM_rYEHgQ0?si=QB4Qw_pzYzORzAkd", "https://youtu.be/cbmIJjIAilY?si=eIslCFvXzz7oVNMO", "https://youtu.be/ggOfhscaJJY?si=xD7IZu9XshgXkRWA", "https://youtu.be/cT5EhOAIK7A?si=WpjkGYbCmecZQxS7"], icon: 'BookHeart', description: "دروس وعبر مستفادة من قصة نبي الله يوسف عليه السلام.", category: 'course' },
  dua: { title: "جوامع الدعاء", urls: ["https://youtu.be/SNVuN00Cbxg?si=xgrgQ_vQO6QOKRqy", "https://youtu.be/88JZFb2r4Tw?si=AjfsPC_7ya0SJMmR", "https://youtu.be/u5RsiIy3IjQ?si=K-KiBssUCKpaRaLn", "https://youtu.be/nF3MnNOvK60?si=6HpwMB4pWu9Y8m-O", "https://youtu.be/T1mQYGXURRk?si=kNk2NJkGr3DtZXma", "https://youtu.be/ESfWYaFqvjo?si=aY4wMVNm3O5AKao6", "https://youtu.be/wdH6g3M-Z30?si=exCibju1lkE2fEC7", "https://youtu.be/2GiAQUL_tz0?si=0W4KqTerZ6ppsRtv", "https://youtu.be/IuHD0Ej7Mwc?si=73SL3bLQPxpO87Ju", "https://youtu.be/4h3rz_Uz4zQ?si=PAk5R8nO4tYrXv0k", "https://youtu.be/gid_6r8RSu8?si=I8uznt14qlXMJAmi", "https://youtu.be/mvL-IB_hjcg?si=rXyYYUn208hm8alX", "https://youtu.be/6dLhXQUXpJ0?si=neOA487Jtalb2MXi"], icon: 'HeartHandshake', description: "شرح لأدعية جامعة من السنة النبوية.", category: 'course' },
  ahzabTilawa: { title: "تصحيح تلاوة سورة الأحزاب", urls: ["https://youtu.be/lKn7mTU5HZs?si=4AatDXTHXIEsepJm", "https://youtu.be/aVVR8oK5deA?si=ujS51zNd-S626HkL", "https://youtu.be/1SO5jTizMNc?si=-h5SU-EOQoLpX95I", "https://youtu.be/uyxpCR3qv6k?si=PpxdY3XkN3tz_yYy"], icon: 'BookOpen', description: "دورة لتصحيح تلاوة سورة الأحزاب.", category: 'course' },
  ahzabSchool: { title: "مدرسة الأحزاب", urls: ["https://youtu.be/1EOWvuIPtSc?si=X8ZVeQ5x1bRLcMgz", "https://youtu.be/u70T5wKEptk?si=FSCtK1ntBCt7HVHi", "https://youtu.be/12oDKaxul_Y?si=8r4BH2K7sXP9kx0y", "https://youtu.be/VdGgX0zC3Oc?si=V9FE0KWYGX8NvXSQ", "https://youtu.be/NxsCZEt6PGU?si=B0afbRSZQTuaXfeN", "https://youtu.be/jkpRg4pc4zk?si=UV28riKLiq3rgdYk", "https://youtu.be/Xz6Q6-22_nY?si=7z8e-ZzV9tkEDC9r", "https://youtu.be/lAx-D9gbDGY?si=McstpQ6HNabTEdLQ", "https://youtu.be/-xGJiwl8L2s?si=IztooBgYgjmkGiSn"], icon: 'GraduationCap', description: "وقفات تدبرية مع سورة الأحزاب.", category: 'course' },
  prophets: { title: "قصص الأنبياء", urls: ["https://youtu.be/fcZa7Kn0_dY?si=BVeoAJL1EqVko5Oj", "https://youtu.be/UaGKElk1EeE?si=o08lkGK77orfVcw7", "https://youtu.be/3XmmX9bKr0E?si=Cdu3J-mhY7i3clWR", "https://youtu.be/TEI9DqKAUp0?si=-8TKMhQM5nBMwoO2", "https://youtu.be/7v6-mkpGyc8?si=dWccK5S3HTkxw--T", "https://youtu.be/EAovoSYD6aA?si=37cQKn__XLCOU_OI", "https://youtu.be/r53WxzsE4t0?si=ELGkZHaio4bV-QMc", "https://youtu.be/Eck9AB6O8_M?si=lIFhP2HbHoaWncpR", "https://youtu.be/T79VspTeWdE?si=2njAZVsfS-E59jC3", "https://youtu.be/UWtiLbzn0Lc?si=SSpSnjJILoQk2ASf"], icon: 'Users', description: "سلسلة قصص الأنبياء كما وردت في القرآن الكريم.", category: 'course' },
  tajweed: { title: "تعلم التجويد", urls: ["https://youtu.be/exqxpd33s1Q?si=HIZH74vmWiCW0Wpz", "https://youtu.be/mgKuf7JMYQg?si=vkIV0Fr5oqZLwq7Y", "https://youtu.be/P9gOC0jKqpU?si=_5DmtkhVWxvKAoM9", "https://youtu.be/VKxwdOPBLt4?si=gQo458TuYI2DtPaz", "https://youtu.be/hp-GlZQhBEk?si=mcoQ9lX1WvlNoIad", "https://youtu.be/Th6uDpvHxrQ?si=sDjrMxKGKQBxU5NY"], icon: 'BookOpen', description: "دروس مبسطة لتعلم أحكام تجويد القرآن الكريم.", category: 'course' },
};

let failureCount = 0;
let successCount = 0;

Object.keys(videoData).forEach(key => {
    const series = videoData[key];
    console.log(`Checking series: ${series.title}`);
    
    if (series.urls) {
        series.urls.forEach(url => {
            const id = getYoutubeVideoId(url);
            if (!id) {
                console.error(`FAILED: ${url}`);
                failureCount++;
            } else {
                successCount++;
            }
        });
    }

    if (series.videos) {
        series.videos.forEach(video => {
            const id = getYoutubeVideoId(video.url);
            if (!id) {
                console.error(`FAILED: ${video.url}`);
                failureCount++;
            } else {
                successCount++;
            }
        });
    }
});

console.log(`\nResults: ${successCount} successes, ${failureCount} failures.`);
