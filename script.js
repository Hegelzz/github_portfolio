// Project data - samma som i din ursprungliga kod
const projects = {
    "web-design": [
        {
            id: 1,
            title: "Hjärtstartarregistret",
            description: "Utveckling och förbättring av ett register för hjärtstartare.",
            image: "IMG_1300.png",
            tags: ["UX/UI Design", "Design Thinking", "Användarforskning", "Figma"],
            fullDescription: `<p style="margin: 10px 0; text-align: left;">I kursen Designmetoder och kreativa processer på Södertörns högskola genomförde jag ett gruppprojekt i samarbete med Decerno och Hjärtstartarregistret. Utmaningen vi ställdes inför var att besvara frågan: "Hur kan vi rädda fler människor från hjärtstopp i Sverige med hjälp av hjärtstartare?"</p>

<p style="margin: 10px 0; text-align: left;">Som en del av ett sexmannateam arbetade jag med att utveckla ett koncept som skulle förbättra tillgängligheten till hjärtstartarinformation. Jag hade ett särskilt ansvar för idegenereringsfasen, där jag ledde våra kreativa workshops och brainstorming-sessioner, men i övrigt arbetade vi som ett team där alla bidrog i alla delar av processen.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Identifiering av problemet</h3>
<p style="margin: 10px 0; text-align: left;">Genom intervjuer med allmänheten identifierade vi ett tydligt problem: många människor visste inte hur man snabbt hittar närmsta hjärtstartare i en akut situation. De flesta svarade att de skulle googla efter information, vilket tar värdefull tid när sekunder räknas. Vi upptäckte också att kunskapsnivån varierade stort – från personer inom vården som var trygga, till vanliga medborgare som kände sig osäkra och nervösa.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Designprocessen - Design Thinking</h3>
<p style="margin: 10px 0; text-align: left;">Vår designprocess följde Design Thinking-metodens fem faser. I empatifasen genomförde vi sex intervjuer och skapade en empatikarta för att förstå användarnas känslor och beteenden. I definieringsfasen utvecklade vi en persona, "Harriet 23 år", som representerade vår primära målgrupp: unga vuxna utan vårdbakgrund. Vi formulerade också "How Might We"-frågor som "Hur kan vi informera var hjärtstartare finns?"</p>

<p style="margin: 10px 0; text-align: left;">I idegenereringsfasen, som jag hade ett särskilt ansvar för, ledde jag flera kreativa workshops. Vi använde metoder som brainstorming och brainwriting, där vi kom på idéer individuellt och sedan byggde vidare på varandras förslag. Vi etablerade också "spelregler" för vårt samarbete: ingen stress, alla idéer ska höras, och regelbunden kommunikation om vad som hänt varje dag.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Lösningen: Hjärtkartan</h3>
<p style="margin: 10px 0; text-align: left;">Efter många idéer landade vi i konceptet "Hjärtkartan" – en integration av hjärtstartarinformation i Google Maps. Tanken var att göra informationen tillgänglig i en plattform som redan används dagligen av miljontals svenskar. Vi skapade först lo-fi prototyper på papper, där vi visualiserade hur en dedikerad ikon (ett vitt hjärta med grön blixt) skulle fungera i Google Maps navigeringsmeny.</p>

<p style="margin: 10px 0; text-align: left;">Därefter utvecklade vi en hi-fi prototyp i Figma som visade hur användaren skulle kunna se alla hjärtstartare på kartan, få information om deras placering och tillgänglighet, och till och med ringa 112 direkt från applikationen. Vi använde Google Maps befintliga designkonventioner, som att visa öppettider med gula markeringar när något snart stänger.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Testning och feedback</h3>
<p style="margin: 10px 0; text-align: left;">I testfasen presenterade vi vår prototyp för två andra studentgrupper och för några av våra ursprungliga intervjupersoner. Feedbacken var positiv – många uppskattade att vi valt en plattform som redan finns i de flesta mobiltelefoner. Förslag på förbättringar inkluderade att använda olika färger på hjärtstartarmarkörerna för att visa tillgänglighet, och att ha den närmsta hjärtstartaren blinkande på kartan.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Resultat och lärdom</h3>
<p style="margin: 10px 0; text-align: left;">Projektet resulterade i en välutvecklad prototyp som visade potential att öka tillgängligheten till livräddande information. Genom att integrera hjärtstartarinformation i en redan etablerad plattform som Google Maps kan vi nå en bredare publik och minska stressen i akuta situationer. Lösningen adresserar både kunskapsgapet och den praktiska tillgängligheten, och visar hur design kan användas för att göra konkret samhällsnytta.</p>

<p style="margin: 10px 0; text-align: left;">Personligen fick jag djupare erfarenhet av att leda kreativa processer, samarbeta i tvärfunktionella team, och översätta komplexa samhällsproblem till användarvänliga digitala lösningar. Projektet bekräftade för mig vikten av användarcentrerad design – att förstå människors faktiska beteenden och behov är avgörande för att skapa lösningar som faktiskt gör skillnad.</p>`,
            client: "Decerno",
            year: "2024",
            role: "UX-designer"
        },
        {
            id: 2,
            title: "Botkyrka Kommun - Tjänstedesign för Småföretag",
            description: "Tjänstedesign-projekt fokuserat på småföretagarnas behov i Alby, Botkyrka kommun.",
            image: "IMG_1345.png",
            tags: ["Tjänstedesign", "Användarforskning", "Service Blueprint", "Intervjuer"],
            fullDescription: `<p style="margin: 10px 0; text-align: left;">I kursen Tjänstedesign genomförde jag ett samarbetsprojekt med Botkyrka kommun med fokus på småföretag i Alby. Som del av ett sexmannateam utforskade vi hur kommunen kan förbättra sitt stöd till lokala företagare och besvara frågan: "Vad har småföretagen i Botkyrka kommun för behov av kommunens tjänster?"</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Fältarbete och Insikter</h3>
<p style="margin: 10px 0; text-align: left;">Vi genomförde semistrukturerade intervjuer med sju småföretag i Alby – ett bageri, trafikskola, pizzeria, två kiosker, apotek och frisör. Genom observationer och djupintervjuer samlade vi värdefull data om deras dagliga utmaningar och relation till kommunen. Vår analys avslöjade flera kritiska områden: bristfällig kommunikation mellan kommunala avdelningar, akut parkeringsproblem vid Tingstorget, ojämlik tillgång till nätverksträffar, låg kännedom om Företagslots-tjänsten, och språkbarriärer på kommunens webbplats.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Designprocess och Metod</h3>
<p style="margin: 10px 0; text-align: left;">Vi tillämpade en tjänstedesignansats genom att skapa kundresor som visualiserade företagens upplevelser, utvecklade personas för olika företagartyper, och designade service blueprints som kartlade både synliga och interna processer. Vi analyserade nuläget ur både användar- och leverantörsperspektiv för att få en helhetsbild av tjänsteleveransen.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Huvudrekommendationer</h3>
<p style="margin: 10px 0; text-align: left;">Vi presenterade fyra huvudsakliga förbättringsförslag till kommunen: synliggöra och stärka Företagslots-tjänsten genom aktiv marknadsföring, åtgärda parkeringssituationen vid Tingstorget med både kortsiktiga och långsiktiga lösningar, utveckla en förenklad och flerspråkig företagsportal, samt öka transparens och förtroende genom bättre kommunikation.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Lärdomar och Reflektion</h3>
<p style="margin: 10px 0; text-align: left;">Projektet gav mig värdefull insikt i hur offentliga tjänster designas. Jag lärde mig att tjänstedesign handlar om helhetssyn – att inte bara förbättra enskilda tjänster utan beakta hela ekosystemet av processer och kommunikation. Genom att verkligen lyssna på företagarnas berättelser kunde vi identifiera problem som inte fanns i officiella rapporter. Projektet visade vikten av empati och samarbete mellan olika aktörer för att överbrygga klyftan mellan organisationers intentioner och medborgarnas faktiska upplevelser.</p>`,
            client: "Botkyrka kommun",
            year: "2025",
            role: "Tjänstedesigner"
        },
        {
            id: 3,
            title: "Skansen - Affärsanalys och Digital Transformation",
            description: "Strategisk affärsanalys av Sveriges äldsta friluftsmuseum genom datadriven perspektiv.",
            image: "IMG_1900.png",
            tags: ["Affärsanalys", "Porter femkraftsmodell", "Business Intelligence", "Digitaliseringsstrategi"],
            fullDescription: `<p style="margin: 10px 0; text-align: left;">I kursen Medieteknik i organisation och samhälle genomförde jag en omfattande affärsanalys av Skansen – att undersöka hur denna etablerade kulturinstitution kan navigera digital transformation och förändrade besökarnas beteenden. Vi ville använda teoretiska affärsverktyg för att skapa en analys som var både akademisk och praktiskt tillämpbar.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Metodisk Ansats</h3>
<p style="margin: 10px 0; text-align: left;">Vi arbetade med triangulering av datainsamlingstekniker – direkta observationer, gästintervjuer och djupintervju med marknadschefen. Den största utmaningen var att balansera kvantitativa data med kvalitativa insikter. Vi löste detta genom att systematiskt koppla empiriska fynd till teoretiska ramverk som Porters femkraftsmodell och Balanced Scorecard, vilket skapade både strategisk tyngd och kundupplevelsenas nyanser.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Analyser och Fynd</h3>
<p style="margin: 10px 0; text-align: left;">Vi tillämpade Porters femkraftsmodell för att kartlägga Skansens konkurrenssituation – hög rivalitet med andra attraktioner, växande hot från digitala substitut, men också unik styrka i kombinationen av erbjudanden. Verksamhetsanalysen avslöjade en välskött organisation med starkt varumärke men också utmaningar: teknisk eftersättning, brist på integrerad dataanalys, och biljettsystem långt efter branschstandard. Denna spänning mellan traditionell styrka och digitalt utvecklingsbehov speglade större transformationen i kultursektorn.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Lärdomar och Tillämpning</h3>
<p style="margin: 10px 0; text-align: left;">Projektet fördjupade vår förståelse för hur teoretiska modeller översätts till praktiska rekommendationer. Vi lärde oss att organisationers komplexitet ofta kräver flera analytiska verktyg som kompletterar varandra. Arbetet visade hur affärsanalys fungerar som en bro mellan akademisk teori och organisatorisk verklighet. Rapporten erbjöd ett underlag för Skansens framtida satsningar inom digitalisering, kundupplevelse och hållbarhet – en demonstration av hur metodisk analys kan översättas till konkreta handlingsplaner.</p>`,
            client: "Södertörns högskola/Skansen",
            year: "2025",
            role: "Affärsanalytiker"
        }
    ],
    "web-development": [
        {
            id: 4,
            title: "Bullet Hell - Rymdspel",
            description: "Interaktivt rymdspel utvecklat med JavaScript och p5.play biblioteket, med avancerad spelmekanik.",
            image: "IMG_1250.png",
            tags: ["JavaScript", "p5.play", "OOP", "Speldesign"],
            fullDescription: `<p style="margin: 10px 0; text-align: left;">I en kurs på objektorienterad programmering ville vår grupp skapa något praktiskt och underhållande – ett rymdspel som kombinerar action och strategi. Inspirerade av klassiska arkadspel som Space Invaders utvecklade vi ett spel där spelaren kontrollerar ett rymdskepp som måste undvika meteorer, skjuta ner dem för poäng och möta ett slutboss-monster vid vissa poängträffar.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Spelkoncept och design</h3>
<p style="margin: 10px 0; text-align: left;">Vi ville balansera retroinspirationen från gamla 2D-spel med moderna gameplaymekaniker. Kärnelementet är enkelt men effektivt: navigera under press, skjuta lätt på det närmaste målet och få mer poäng. Spelet växer i svårighet ju längre du spelar, och när du når en viss poänggräns dyker bossen upp – ett större hot som kräver strategi för att besegra.</p>

<p style="margin: 10px 0; text-align: left;">Spelets uttryck bygger på balansen mellan reaktivitet och progression. Vi ville att varje spelarhandling omedelbar ska få feedback, och att skicklighet belönas med högre poäng och framsteg.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Teknisk implementering</h3>
<p style="margin: 10px 0; text-align: left;">Vi byggde spelet med objektorienterad JavaScript använd p5.play-biblioteket. Vi skapade separata klasser för spelaren, projektiler, meteorer och bossen – detta hjälpte oss hålla koden organiserad och möjliggjorde enkel utökning av spelmekanik.</p>

<p style="margin: 10px 0; text-align: left;">De största utmaningarna var att implementera effektiv kollisionsdetektering mellan alla spelöbjekt och att hantera olika spelstatus (start, spel, paus, game over, boss fight). Vi testade många varianter av hastigheter och svårighetsjusteringar för att få rätt balans – det tog ungefär 15 iterationer innan spelmekaniken kändes bra.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Feedback och utveckling</h3>
<p style="margin: 10px 0; text-align: left;">Under designkritiken fick vi feedback på att spelet hade en tydlig vision och välfungerande mekanik, men att det kunde bli mer visuellt levande med effekter. Vi implementerade några explosionseffekter, men planerar att lägga till partikeleffekter och bättre ljud för framtida versioner.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Lärdomar</h3>
<p style="margin: 10px 0; text-align: left;">Projektet gav oss praktisk erfarenhet av att arbeta med klasser, objekt och realtidsinteraktioner. Vi lärde oss om arkitektur vid komplexare applikationer, hur externa bibliotek kan accelerera utveckling, och vikten av iterativ testning vid spelutveckling. Det var också värdefullt att förstå hur många små detaljer tillsammans skapar en helhetsupplevelse som engagerar spelaren.</p>`,
            client: "Södertörns högskola",
            year: "2025",
            role: "Spelutvecklare"
        },
        {
            id: 5,
            title: "(Don't) Do Drugs!",
            description: "Interaktiv digital konstinstallation som utforskar programmering som konstnärligt medium.",
            image: "IMG_1735.png",
            tags: ["p5.js", "Interaktiv konst", "JavaScript", "Algoritmisk konst"],
            fullDescription: `<p style="margin: 10px 0; text-align: left;">I kursen The Art of Repetition skapade jag en interaktiv digital konstinstallation som utforskar hur programmering kan användas som konstnärligt medium. (Don't) Do Drugs! är en provocerande visuell upplevelse som simulerar sensorisk överstimulering genom hypnotiska mönster och intensiva färgskiften.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Konstnärligt koncept</h3>
<p style="margin: 10px 0; text-align: left;">Projektet växte ur en fascination för att kod i sig är upprepning – loopar, funktioner, iterationer. Inspiration kom från ravekulturens intensiva estetik med pulserande ljus och färger, samt psykadelisk konst. Verket fungerar på flera nivåer: på ytan är det hypnotiskt vacker med pulserande färger, men ju längre man tittar, desto mer överväldigande blir upplevelsen. Detta skapar en medveten dissonans mellan skönhet och obehag som reflekterar drogers lockelse och konsekvenser.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Teknisk implementering</h3>
<p style="margin: 10px 0; text-align: left;">Jag byggde installationen med p5.js, ett JavaScript-bibliotek för kreativ kodning. Nästlade for-loopar skapar komplexa geometriska mönster animerade i 60 bilder per sekund. Den största utmaningen var att balansera kaos och kontroll – jag löste detta genom att använda slumpalgoritmer inom strikt kontrollerade parametrar. Användarens musrörelser påverkar färgpaletten, rotationshastigheten och skalan på elementen direkt. En central funktion låter användaren klicka för att pausa animationen – både praktisk funktion och metafor för kontroll över egna sinnesintryck.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Lärdomar och reflektion</h3>
<p style="margin: 10px 0; text-align: left;">Projektet fördjupade min förståelse för hur tekniska verktyg kan skapa känslomässiga uttryck. Jag lärde mig att begränsningar skapar kreativitet – genom att arbeta inom ramarna för p5.js tvingades jag hitta innovativa lösningar. Verket visar att abstrakt kod inte bara är teknisk struktur utan kan bli pulsen i ett konstverk. Projektet stärkte min övertygelse om att teknik och humaniora kan förstärka varandra – att skriva kod som skapar konst kräver både logiskt och poetiskt tänkande.</p>`,
            client: "Södertörns högskola",
            year: "2024",
            role: "Digital konstnär"
        },
        {
            id: 6,
            title: "Musikspelare - Audiovisuell Plattform",
            description: "Interaktiv musikspelare som omvandlar musiklyssning till en visuell och känslomässig upplevelse.",
            image: "IMG_1780.png",
            tags: ["Web Audio API", "JavaScript", "Interaktiv design", "Visualisering"],
            fullDescription: `<p style="margin: 10px 0; text-align: left;">I detta projekt skapade jag tillsammans med mitt team en interaktiv musikspelare som omvandlar passiv musiklyssning till en levande audiovisuell upplevelse. Visionen var enkel men kraftfull: att göra musik inte bara till en funktionell aktivitet, utan till en känslomässigt engagerande upplevelse där användaren kunde se musiken komma till liv.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Koncept och design</h3>
<p style="margin: 10px 0; text-align: left;">Vi ville skapa ett visuellt språk för musik – att varje musikgenre fick sitt eget visuella identitet. En elektronisk danslåt kunde få pulserande geometriska former, medan en akustisk ballad fick mjuka vågrörelser. Genom experimentering utvecklade vi "visuell harmoni" där färger, former och rörelser reagerade direkt på musikens frekvenser, takt och intensitet. En populär funktion blev en "skakningseffekt" som gjorde albumomslagen dansa i takt med basgången.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Teknisk implementering</h3>
<p style="margin: 10px 0; text-align: left;">Vi byggde plattformen med HTML, CSS och JavaScript, med fokus på Web Audio API för realtidsanalys av ljud. Största utmaningen var att få visualiseringarna att reagera exakt på musiken – inte som slumpmässiga effekter, utan som en direkt översättning av ljudets beståndsdelar. Jag lärde mig frekvensanalys för att bryta ner ljud och mappa det till visuella parametrar. Under utvecklingen stötte vi på utmaningar med JavaScript-länkning som vi löste genom iterativ problemlösning och kontinuerlig testning.</p>

<h3 style="font-size: 1.3rem; color: var(--dark-text); margin: 30px 0 10px 0; text-align: left;">Lärdomar och reflektion</h3>
<p style="margin: 10px 0; text-align: left;">Projektet lärde mig vikten av balans i interaktiva upplevelser – tillräckligt mycket för att engagera, men inte så mycket att det blir överväldigande. Feedback avslöjade att för kraftiga effekter kunde distrahera från musiken. Jag insåg att även funktionella verktyg kan berika människors liv genom att skapa en upplevelse, inte bara lösa ett problem. De tekniska färdigheterna jag utvecklade – Web Audio API, realtidsgrafik, responsiva animationer – visade sig användbara i många projekt. Men viktigast var insikten om hur man skapar emotionell koppling genom interaktiv design.</p>`,
            client: "Södertörns högskola",
            year: "2025",
            role: "Webbutvecklare"
        }
    ],
    "mobile-apps": [
        {
            id: 7,
            title: "????",
            description: "On Progress",
            image: "",
            tags: [],
            fullDescription: "On Progress",
            client: "",
            year: "",
            role: ""
        },
        {
            id: 8,
            title: "????",
            description: "On Progress",
            image: "",
            tags: [],
            fullDescription: "On Progress",
            client: "",
            year: "",
            role: ""
        },
        {
            id: 9,
            title: "????",
            description: "On Progress",
            image: "",
            tags: [],
            fullDescription: "On Progress",
            client: "",
            year: "",
            role: ""
        }
    ]
};

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
    
    // Aktivera rätt nav-länk baserat på nuvarande sida
    activateCurrentNavLink();
    
    // Ladda projekt-detaljer om vi är på project-detail.html
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const projectId = urlParams.get('id');
    
    if (category && document.getElementById('detailContainer')) {
        if (projectId) {
            // Ladda specifikt projekt
            loadProjectDetail(parseInt(projectId), category);
        } else {
            // Ladda alla projekt i kategorin
            loadProjectsByCategory(category);
        }
    }
    
    // Event listeners för projekt-kort (om de finns på sidan)
    setupProjectCardListeners();
});

// Funktion för att aktivera rätt nav-länk
function activateCurrentNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Funktion för att ladda projekt efter kategori
function loadProjectsByCategory(category) {
    console.log('=== loadProjectsByCategory called ===');
    console.log('Category:', category);
    
    const categoryProjects = projects[category];
    const detailContainer = document.getElementById('detailContainer');
    
    console.log('Category projects:', categoryProjects);
    console.log('Detail container:', detailContainer);
    
    if (!categoryProjects) {
        console.error('No projects found for category:', category);
        if (detailContainer) {
            detailContainer.innerHTML = `<p style="color: red;">No projects found for category: ${category}</p>`;
        }
        return;
    }
    
    if (!detailContainer) {
        console.error('Detail container not found!');
        return;
    }
    
    let categoryTitle = '';
    if (category === 'web-design') categoryTitle = 'Med arbetsgivare';
    else if (category === 'web-development') categoryTitle = 'Webbutveckling';
    else if (category === 'mobile-apps') categoryTitle = 'Mobilappar';
    else categoryTitle = category;
    
    let projectsHTML = `<h2 class="section-title">${categoryTitle}</h2>`;
    projectsHTML += '<div class="projects-grid">';
    
    categoryProjects.forEach(project => {
        projectsHTML += `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="project-detail.html?category=${category}&id=${project.id}" class="btn">Läs mer</a>
                </div>
            </div>
        `;
    });
    
    projectsHTML += '</div>';
    detailContainer.innerHTML = projectsHTML;
    console.log('Projects loaded successfully!');
    
    // Lägg till event listeners för de nya projekten
    setupProjectCardListeners();
}

// Funktion för att ladda specifikt projekt
function loadProjectDetail(projectId, category) {
    const categoryProjects = projects[category];
    const detailContainer = document.getElementById('detailContainer');
    
    if (!categoryProjects || !detailContainer) return;
    
    const project = categoryProjects.find(p => p.id === projectId);
    
    if (!project) {
        detailContainer.innerHTML = '<p>Project not found. <a href="projects.html">Go back to projects</a></p>';
        return;
    }
    
    const detailHTML = `
        <div class="detail-content" style="max-width: 900px; margin: 0 auto 80px; display: flex; flex-direction: column; align-items: center;">
            <div class="detail-text" style="width: 100%; text-align: center; margin-bottom: 60px;">
                <h1 style="font-size: 2.2rem; font-weight: 700; color: var(--primary-color); margin: 0 0 40px 0; text-align: center;">${project.title}</h1>
            </div>
            <div style="text-align: center; margin-bottom: 60px; width: 100%;">
                <img src="${project.image}" alt="${project.title}" class="detail-img" style="width: 100%; max-width: 800px; height: auto; border-radius: 15px; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);">
            </div>
            <div class="detail-text" style="width: 100%; text-align: center;">
                <div style="color: var(--light-text); font-size: 1.1rem; line-height: 1.9; white-space: pre-wrap; max-width: 800px; margin: 0 auto;">
                    ${project.fullDescription}
                </div>
            </div>
        </div>

        <div style="background-color: var(--dark-card); padding: 50px; border-radius: 10px; margin-bottom: 50px; border: 1px solid var(--border-color); max-width: 900px; margin-left: auto; margin-right: auto;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; text-align: center;">
                <div>
                    <h4 style="color: var(--primary-color); font-size: 1.1rem; margin-bottom: 12px;">Klient</h4>
                    <p style="color: var(--light-text); font-size: 1.15rem; font-weight: 600;">${project.client}</p>
                </div>
                <div>
                    <h4 style="color: var(--primary-color); font-size: 1.1rem; margin-bottom: 12px;">År</h4>
                    <p style="color: var(--light-text); font-size: 1.15rem; font-weight: 600;">${project.year}</p>
                </div>
                <div>
                    <h4 style="color: var(--primary-color); font-size: 1.1rem; margin-bottom: 12px;">Roll</h4>
                    <p style="color: var(--light-text); font-size: 1.15rem; font-weight: 600;">${project.role}</p>
                </div>
            </div>
        </div>

        <div style="max-width: 900px; margin: 0 auto; text-align: center;">
            <h3 style="font-size: 1.8rem; margin-bottom: 30px; color: var(--dark-text);">Tekniker & Färdigheter</h3>
            <div class="project-tags" style="gap: 12px; justify-content: center;">
                ${project.tags.map(tag => `<span class="tag" style="padding: 10px 18px; font-size: 1.05rem;">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    detailContainer.innerHTML = detailHTML;
}

// Funktion för att sätta upp event listeners för projekt-kort
function setupProjectCardListeners() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Förhindra att klick på knappen triggar både knappen och kortet
            if (!e.target.classList.contains('btn') && !e.target.parentElement.classList.contains('btn')) {
                const link = this.querySelector('a.btn');
                if (link) {
                    window.location.href = link.getAttribute('href');
                }
            }
        });
    });
}

// Funktion för att markera kategori-knappar (för projekt.html)
function setupCategoryLinks() {
    const categoryLinks = document.querySelectorAll('.category-card a');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Låt länken fungera normalt - den har redan href="project-detail.html?category=..."
            // Denna funktion behövs kanske inte längre, men behålls för framtida use cases
        });
    });
}

// Kör setup för kategori-länkar om vi är på projects.html
if (window.location.pathname.includes('projects.html')) {
    document.addEventListener('DOMContentLoaded', setupCategoryLinks);
}

// Stäng mobilmenyn när man klickar på en länk
document.addEventListener('click', function(e) {
    const mainNav = document.getElementById('mainNav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (mainNav && mainNav.classList.contains('active') && 
        !e.target.closest('#mainNav') && 
        !e.target.closest('#mobileMenuBtn')) {
        mainNav.classList.remove('active');
    }
});