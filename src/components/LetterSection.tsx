import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const letters = [
  {
    id: 0,
    tag: 'Love',
    num: 'Letter the First',
    title: 'A Love Letter, for my Harini',
    sub: 'Because some things are too true for midnight messages',
    content: (
      <>
        <p>Harini,</p>
        <p>I keep going back to one line you sent me — quietly, on an ordinary night — "Na lucky than ipdi oru bf kedachathuku." You said it like you'd noticed the weather. Just an observation. But I sat with that message for a long time, because Harini, you have it so completely backwards that I do not know where to begin correcting you. You are a woman who is simultaneously learning to save people's lives and carrying an entire art form inside your body every time you dance. You chose to let someone like me — who sends you unasked-for Tamil song parodies and overthinks your every "mm" — into that life. The lucky one here has a name, and it is Nithu. It has always been Nithu.</p>
        <p>I wrote you a song once. Not a great song — "iPhone 6 📱 nee endral, naan thaandi sengal settu ☎️, nee muthamittaal 😘, naan jallikattu 🐮, kaala pola thooki adichala, ennala ennala, kannala kannala enna konnalae" — those were my actual words, typed with full conviction at 10 PM on a weeknight. You called it flirting. I said "cha cha." We both knew what was really happening. Earlier that same night I told you "nee siricha azhaga irupahhhh ❤️" and backed it up with doctor's wisdom — "siricha health ku nallatha doctor sonnaga" — and you called me out immediately, saw through the joke to what I actually meant, and looked at me with a 🙄 that contained so much warmth I had to sit still for a moment. That is what I love about you. You see through every disguise and stay anyway.</p>
        <p>Do you remember the night you tried to call yourself a stranger — "Stranger," you said, flat and final, when I asked who you were to me? I said "No. Epovu illa. Nee en harini tha." I meant it then. I mean it now more than I knew how to mean it back then. There is only one person in this world I have ever called "en aalu" without pausing to perform anything — and it is you. You once tried "then find another one" and I said "I want this doctor — ena stranger thitra doctor tha vennu enaku." Not any doctor. Not a replacement. Specifically, precisely, stubbornly you. That is not a line from a film. That is the clearest thing I have ever said.</p>
        <p>And then there is the way you care — quietly, never announcing itself. You found out I skipped an exam and said "unga life mela ungaluke care illa." You were scolding me, but I heard the underneath of it: you had been watching my future even while managing your own storms. You notice when I disappear into my head, you say "ennachu" before I have figured out how to say it myself, you ask "saptingala?" not as ritual but as actual concern. One night, when I was in my worst headspace, you said "enkitta pesunga, ok ah" — talk to me, it's okay. You held space for me while you were still healing. That is a specific kind of love that most people never receive. I received it from you. I know what it cost you. I have not forgotten.</p>
        <p>I think about the forehead kiss often. "I want you to hold my face by your hands and kiss my forehead — could you?" I asked you that, and you said "I'm here for you — that's a promise 💘." I have been holding that promise like something breakable. Our first meeting. That exact moment, exactly as I described it. I plan to show up for it with everything I have. I have been planning it since the night you sent that heart. The plan has not changed. I will hold you to it, gently, for as long as you'll allow.</p>
        <p>A Japanese book I read once said that a strongest man can only be defeated by his love. I told you that and you said "irukatum" — let it be — with a calm that suggested you already knew. So let it be. Let me be defeated, completely, by you. Uriyi irukura varaiku neetha en girl. That is not something I say when I feel like saying it. That is something I am.</p>
      </>
    ),
    sig: 'Unnoda Nithu, always 🤍'
  },
  {
    id: 1,
    tag: 'Sorry',
    num: 'Letter the Second',
    title: 'A Sorry Letter, because you deserved far better',
    sub: 'Not a 2 AM message. A real one, with full attention.',
    content: (
      <>
        <p>Harini,</p>
        <p>I need to say this properly — not in the middle of the night, not buried in "srry deh" and a cascade of 🥺 emojis that I used because I did not know how to make you hear the real weight of what I felt. Properly. The way you deserve to be spoken to — clearly, without deflection, with nothing held back to protect myself.</p>
        <p>I shouted at you. Oru point mela — one point — and something in me gave way, and in the weeks that followed I felt the full cost of that moment. But here is the part I cannot stop returning to: you were already not okay. You were still taking medicine. You were inside a recovery I could not fully see, and instead of being the one corner of your world that felt safe and uncomplicated, I cracked it. Your Dharshini told me flat: "She doesn't like that kinda attitude, and she told me not to help you." You had already asked the people around you to hold the line. You had already decided, in your own quiet way, that you needed protection from the thing I had done. I reached out through every channel — your friends, messages upon messages — and I understand now that none of that was what you needed. What you needed was for it never to have happened. I cannot give you that. That is what I actually owe you an apology for.</p>
        <p>Your friend also said "She's kinda sad, idk why" — and I knew why, exactly why, even as I read those words. That particular sadness had a specific shape and I had made it. You were quiet in the way people go quiet when they are deciding whether something is safe anymore. That quiet of yours — measured, protected — told me more than any fight would have. And still, during those weeks, you said "She's fine, that's all I can say," holding even my worst fears at arm's length until you were ready to come back on your own terms. That is your dignity. I damaged it. I am sorry.</p>
        <p>During the worst night — when you said "I can't stay with you" and "It's too late" and "Na odanchuten" — I said "naa Otta vekuren. Evlow yrs aanalu seri harini, piece by piece ah Otta vepen." I meant that. I also said, in a moment I am not proud of, "suicide thoughts tha varuthu" — and I need you to know that was real, and I need you to know that you being on the other end of that conversation, saying "just relax," "enkitta pesunga ok ah," "everything will be alright" — you steadied something in me that I could not steady myself. You held me when you were the one who had been hurt. That is a grace I will not take for granted. I should have been the one steadying you. I am sorry I had it backwards.</p>
        <p>You told me once: "Suffer aagumbothu than pain puriyum." You said it when I was explaining my own feelings, and I heard it immediately for what it was — you already knew pain from the inside. You weren't theorising. And still you said "enkitta pesunga" on the nights I couldn't carry myself. You held space for me while you were still healing. That is not something I can respond to with just sorry. That deserves a life's worth of showing up. I intend to give it.</p>
        <p>You stayed. After everything I put you through in those months — every unanswered question, every pressure, every moment I pushed when I should have waited — you stayed. Not because I earned it. Because you decided the person underneath all the mistakes was someone worth staying for. I am still working on proving you right. I am working on it every single day. "Naa mara maten" — I will not change back. That version of me does not get to come near you again.</p>
      </>
    ),
    sig: 'Nithu, still becoming worthy of you 🙏'
  },
  {
    id: 2,
    tag: 'Missing',
    num: 'Letter the Third',
    title: 'A Missing You Letter, written from very far away',
    sub: 'Distance is just geography. It has never once stopped love from being stubborn.',
    content: (
      <>
        <p>Harini,</p>
        <p>Your phone went silent one morning — switched off, mid-conversation — and I lived through half an hour of worst-case scenarios before you came back and said "phone switchoff aagiduchu" like it was nothing. Like it was just a phone. I had already typed "unaku ena achunu" three times and deleted it twice. That is what missing you looks like from this side — not a slow ache you can manage, but sudden and sharp, like reaching for something and finding only air where it should be. Ten minutes of silence from you and my whole mind rewrites everything. "Enaku oru 10 mins silent ah aita kuda oru thoughts create aguthu nee safe ah iruka ah anga" — I said that once and meant it more literally than you might have thought.</p>
        <p>I text in the morning because the day starts with you. "Day starts with you" — I said that once and you replied with a 😏 that had entire paragraphs inside it. I ask "saptingala?" not as ritual but because for one moment your daily life becomes real and close through your answer. I say "gud night" and wait. On the nights you say "love you" before I do, I hold that sentence for longer than I should probably admit. On the night I told you "naa pona aprom apdiye irukatha" — don't be alone when I go — you said "mm" and I heard everything you meant by it. I always hear everything you mean by your "mm"s. I have been learning to read them for months.</p>
        <p>There is a particular texture to missing you that has no good translation. It is the 😏 you send when you are pretending not to care but clearly do. It is the way "neenga" sounds from you in that specific tone that means teasing and fond at the exact same time. It is you sending me 💋💋💋 and following it immediately with "ponga poi thungunga" — refusing me and laughing at me simultaneously, which is somehow more intimate than agreement would have been. It is "ennachu ethuku" when you can tell, even through a screen, that something is off. You notice things about me that I have not announced. You have always noticed. I miss being noticed by you in real time.</p>
        <p>In placement class, mid-lecture, a thought of you breaks through everything — not a composed thought, not a rehearsed one. Just something small: you saying "neenga ennala normal aaga try panringala" with that tone that meant you were asking something real underneath the surface question. Or the night you said "enaku neenga panrathu fun ah than irunthuchu" and I knew, in that moment, that I had genuinely made you happy without trying too hard. I hold onto those moments in the gaps between everything else. "Namma kuda irudha happy moments paru" — I gave you that advice once when things were bad. I have been taking it myself ever since.</p>
        <p>Enaku ipove unna pakkanu polu iruku. Unna hug pannikanu pola iruku — tight ah. I cannot explain "tight ah" the way I mean it. It is not a casual hug. It is the kind where neither person lets go first. Where you press your face into someone's shoulder and for ten seconds the whole world goes quiet and you are not performing okay, not performing fine, just present with another person in the same room. That is what I want to give you. That is what I want from you. Not something grand — just ten seconds of tight ah and knowing you are real and here.</p>
        <p>I looked up KMC Manipal once, quietly, at night, when things between us were at their most uncertain. I just looked at it. Held the geography of where you are. You asked me why I wanted to know — "naa sonna anga pogava?" — and I said "without your permission, I'm not gonna." But the truth is simpler: I wanted to know exactly where to go. Not hypothetically. Specifically. In case you needed me. The address is still in my head. "Inga ennala iruka mudiyala, epo anga varuvenu iruku" — I said that once and it has never stopped being true. Manipal is far. But I know the way.</p>
      </>
    ),
    sig: 'Nithu, counting the days between us 🫀'
  },
  {
    id: 3,
    tag: 'Waiting',
    num: 'Letter the Fourth',
    title: 'A Waiting Letter, a promise written in time',
    sub: 'I asked for six months. Then I came back. I will always come back.',
    content: (
      <>
        <p>Harini,</p>
        <p>I asked for six months once. "Oru 6 months ku yarukita interaction pannama, I wanna do my film and music." Not because I wanted to be away from you — never that — but because I had looked at myself honestly and decided: this version of me is not the one she deserves to be with yet. I need to build something real. I need to become someone who stands up straight when she looks at him. So I asked. You said "mm" and "bye" and "ipavathu thonuchu, all the best." I said "thanks" but what I meant was: just watch. I will come back with something worth bringing. The breathing space was not abandonment. It was a promise I was making to both of us.</p>
        <p>Before I went, I said: "Block panna, peslanu. Kandipa varuve unkita again." I said it and then I made myself remember it every single day. Not as pressure — as a compass. This is where I am going. This is who I am returning to. You text "no need" when I said I'd come back. You said "byee" in a way that tried to sound final. But you also said "mm" when I told you my love for you hadn't decreased. And I read that "mm" correctly: you were still there. You were listening. You were waiting in your own quiet way, the same way you do everything — without announcing it, just doing it.</p>
        <p>Naa unga wait um unaku wait pannitu irupen. I said that in July when everything was uncertain, and I meant it as both a fact and a promise rolled into one sentence. You later said "na lucky than ipdi oru bf kedachathuku" — and I understood: you had been waiting too. You had waited even when you didn't have to. When you could have walked away and been completely justified in doing so. You chose to wait instead. That choice is not something I overlook. That choice is everything.</p>
        <p>You mentioned 26 or 27 once, in the morning, as easily as discussing what to eat — "26 or 27 pannikalam, after mrg padikalam." You dropped it like it was already decided. Like we were already in that future and simply reviewing the schedule. "Naa help panre — unga studies ku. Naa home takecare pannirken, unnayu." You said "love irudha ellame easy tha" and I said yes, and I meant it in the most complete way I know. And you said "oh pakkalam" — we'll see — which from you means yes. I know your "pakkalam." I have been studying it for months.</p>
        <p>"Enna ketalum cook pannuven — if I don't know, I'll learn." I told you this and you laughed. You said "oh solrathu easy," which is true. Saying it is easy. But I want you to know I have been thinking about that promise very specifically. Not as metaphor. The actual scene: you studying something hard, me in a kitchen somewhere Googling how to make whatever you asked for, getting it wrong the first time, getting it right the second. That mundane, ordinary, completely domestic scene is one I want very much. I want the version of us that doesn't need to be dramatic to be real. I want us to be ordinary together and for that to be the best thing I have ever had.</p>
        <p>The Japanese book I told you about — "a strongest man can only be defeated by his love." You said "irukatum." Let it be. I have let it be. I am defeated, gladly, entirely. "En love unmela irukuppathu decrease aagala. Evlow yrs aanalu seri harini, naa mara maten — nenga enoda harini." I said that on one of the hardest nights we have ever had. I say it now on an ordinary day. I will say it on the ones we haven't had yet. It does not change with the season. It does not change with the difficulty. It is simply what is true.</p>
      </>
    ),
    sig: 'Nithu, your most faithful wait-er 🕯️'
  },
  {
    id: 4,
    tag: 'Birthday',
    num: 'Letter the Fifth',
    title: 'A Birthday Letter, for the day the world got you',
    sub: 'I missed the last one. I have been thinking about this one since.',
    content: (
      <>
        <p>Harini,</p>
        <p>I missed your last birthday and it sat in me like an unfinished scene — the kind that stays in the back of a director's head because something important was left out of the frame. I told you outright: "last bday eh pannalanu irudhe." And then I started planning the next one. I asked your top size — "M, L, illa S?" — in that casual way that was supposed to seem casual and didn't. You asked why. I said summa. You said "athellam vendam." I said "en! — last bday eh pannalanu irudhe, next bday ku plan pannala." You tried to decline. I did not accept. The plan still stands. It has never not stood.</p>
        <p>Let me tell you what I actually see when I think about you on your birthday. You are, in the same body, a healer and an artist. At KMC Manipal, you are doing one of the hardest things a person can choose to do — training to understand the human body well enough to protect it, carrying the weight of that responsibility with the quiet seriousness of someone who understands what is at stake. You don't announce your hard work. You just do it. And somewhere inside that same person is a classical dancer. Something that moves differently from the way ordinary people move, that carries memory and culture and emotion in the body and translates it into something the audience does not just watch but feels. I have never seen you dance. But I already know it is the truest version of you — the one that doesn't need words, the one that simply is what it does.</p>
        <p>You once found out I skipped an exam — I hadn't written it, mind had gone somewhere else — and you said "unga life mela ungaluke care illa." You were scolding me. You were right to. But underneath the scolding I heard something specific: you were watching my life. Keeping track of whether I showed up for myself. Caring about my future in a way I was not caring about it myself in that moment. That is a particular kind of love — the kind that refuses to let you shrink, that holds you accountable not with cruelty but with certainty, that says "you are better than this" and means it without softening. You did that from Manipal, through a screen, in the middle of your own hard year. You did it anyway.</p>
        <p>And on the nights I told you about the thoughts that came when things were at their worst — "suicide thoughts tha varuthu" — you didn't panic, you didn't pull away. You said "just relax," "enkitta pesunga ok ah," "everything will be alright." You were steady for me when I could not be steady for myself. That steadiness is something I have returned to in memory more times than you know. On hard nights, I remember: she was there. She stayed. She said everything will be alright and meant it. That memory has carried me through more than I have told you.</p>
        <p>You said once, "en bf enna romba care panranga, athan happy ah iruken 😉" — my boyfriend cares for me so much, that's why I'm happy. You said it easily, like a small admission that had slipped out before you could be careful about it. I hold that sentence for a long time. Because behind all the 😏 and "mm" and "apdila illa," this is the truth of what we are: you are happy. I made you happy. On someone's birthday, if you can honestly say the person who loves you makes you happy, then something in this world has gone right. Something has been done correctly.</p>
        <p>Happy birthday, en Harini. I hope this year gives you rest — actual rest, the kind that medical students almost never get but deserve completely. I hope it gives you a performance where everything flows, where the music and the movement arrive at the same place at the same time the way classical dance always promises and only sometimes delivers. I hope it gives you at least one long afternoon where you put down every weight you carry so naturally you forget it was there. And somewhere in this year, I hope you let me show up — at Manipal, wherever you are — and give you the forehead kiss I promised you, the tight-ah hug you deserve, and the birthday I have been planning since the last one I missed. The dress is already decided. The plan still stands. It has never not stood.</p>
      </>
    ),
    sig: 'Unnoda Nithu, your biggest fan, now and always 🎂🤍',
    date: 'June 17'
  }
]

export function LetterSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const introPaperRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // ── Master Scroll Trigger for the whole section ──
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => window.dispatchEvent(new CustomEvent('pause-bgm')),
        onLeave: () => window.dispatchEvent(new CustomEvent('resume-bgm')),
        onEnterBack: () => window.dispatchEvent(new CustomEvent('pause-bgm')),
        onLeaveBack: () => window.dispatchEvent(new CustomEvent('resume-bgm')),
      })

      // ── The "Direct Connection" Animation ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.envelope-wrapper',
          start: 'top 10%',
          end: '+=150%',
          scrub: 1,
          pin: true,
        }
      })

      // 1. Open Flap
      tl.to('.envelope-flap', { rotateX: 180, duration: 1.5, ease: 'power2.inOut' })
      tl.to('.wax-seal', { opacity: 0, scale: 0.5, duration: 0.5 }, '-=1.2')
      
      // 2. Envelope "Bulge" (Realistic detail)
      tl.to('.envelope-front', { scaleY: 1.05, duration: 1, ease: 'power2.inOut' }, '-=0.8')
      
      // 3. Paper slides out with organic rotation
      tl.to(introPaperRef.current, { opacity: 1, duration: 0.1 }, '-=0.5')
      tl.to(introPaperRef.current, { 
        y: -300, 
        rotate: -2,
        duration: 2, 
        ease: 'power2.out' 
      }, '-=0.4')
      
      // 4. Zoom into the paper (Logical connection)
      tl.to(introPaperRef.current, { 
        scale: 2.5, 
        y: -400,
        rotate: 0,
        opacity: 0,
        duration: 1.5, 
        ease: 'power3.in' 
      }, '+=0.2')

      // 5. Restore envelope bulge
      tl.to('.envelope-front', { scaleY: 1, duration: 1 }, '-=1')

      // 6. Reveal the stack
      tl.from('.letters-stack', { 
        opacity: 0, 
        y: 200, 
        duration: 1.5, 
        ease: 'power3.out' 
      }, '-=1')

      // 7. Reveal each letter card on scroll
      const letterCards = gsap.utils.toArray<HTMLElement>('.letter-card')
      letterCards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 80,
          opacity: 0,
          scale: 0.98,
          duration: 1.5,
          ease: 'power3.out'
        })
      })

    }, containerRef)
    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative z-20 w-full bg-[#0a0807]">
      
      {/* ═══════════════════════════════════════════
          SCENE 1 — ENVELOPE INTRO
          ═══════════════════════════════════════════ */}
      <div className="envelope-wrapper relative overflow-hidden flex items-center justify-center" style={{ height: '100vh' }}>
        <div className="envelope-scene-bg absolute inset-0">
          <div className="absolute inset-0 bg-[#0f0c09]" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `
                radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 100%),
                linear-gradient(180deg, #2a1b12 0%, #3d2b1d 25%, #342418 50%, #2a1b12 75%, #1d140f 100%)
              `,
            }}
          />
        </div>

        <div className="relative envelope-container scale-[0.7] sm:scale-100 transform-gpu" style={{ width: '300px', smWidth: '340px', height: '220px', smHeight: '240px', perspective: '1200px' }}>
          {/* 1. Envelope Back */}
          <div className="absolute inset-0 bg-[#5d4037] rounded-[4px] shadow-[0_40px_100px_rgba(0,0,0,0.8)]" />

          {/* 2. The Intro Paper */}
          <div ref={introPaperRef} className="absolute overflow-hidden" style={{
            width: '300px', height: '220px', left: '20px', bottom: '10px',
            background: '#faf6ef', borderRadius: '2px', zIndex: 5,
            opacity: 0,
            boxShadow: '0 0 40px rgba(0,0,0,0.2)'
          }}>
            <div className="absolute inset-0 opacity-10" style={{
              background: 'repeating-linear-gradient(to bottom, transparent 0, transparent 20px, #14100d 20px, #14100d 21px)'
            }} />
          </div>

          {/* 3. Envelope Front Pocket */}
          <div className="envelope-front absolute inset-0 z-10 pointer-events-none transform-gpu origin-bottom">
            <svg width="340" height="240" viewBox="0 0 340 240">
              <polygon points="0,0 170,120 0,240" fill="#6d4c41" />
              <polygon points="340,0 170,120 340,240" fill="#6d4c41" />
              <polygon points="0,240 340,240 170,110" fill="#7d5a50" />
            </svg>
            
            {/* Wax Seal Detail */}
            <div className="wax-seal absolute top-[90px] left-[150px] w-10 h-10 rounded-full bg-[#7a2e2e] shadow-lg flex items-center justify-center border-2 border-[#5a1e1e]">
               <div className="w-6 h-6 border border-parchment/20 rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-parchment font-label">H</span>
               </div>
            </div>
          </div>

          {/* 4. Envelope Top Flap */}
          <div className="envelope-flap absolute" style={{
            width: '340px', height: '140px', top: '0', left: '0',
            transformOrigin: 'top center', zIndex: 20, backfaceVisibility: 'hidden',
          }}>
            <svg width="340" height="140" viewBox="0 0 340 140">
              <polygon points="0,0 340,0 170,138" fill="#5d4037" stroke="#3e2723" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          SCENE 2 — THE LETTERS
          ═══════════════════════════════════════════ */}
      <div className="letters-stack relative pb-40 -mt-[20vh]">
        {/* Header */}
        <div className="text-center mb-32">
          <p className="font-label text-[11px] tracking-[0.5em] uppercase text-rose/60 mb-6">Written for</p>
          <h2 className="font-harini text-5xl sm:text-9xl text-parchment italic tracking-tighter">Harini.</h2>
        </div>

        {/* Vertical Stack */}
        <div className="flex flex-col items-center gap-48 px-6">
          {letters.map((l) => (
            <div 
              key={l.id}
              className="letter-card relative max-w-[760px] w-full bg-[#faf6ef] shadow-[0_40px_120px_rgba(0,0,0,0.6)] overflow-hidden p-6 sm:p-16 md:p-24"
              style={{ 
                borderRadius: '2px',
              }}
            >
              {/* Paper lines and margin */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{
                background: 'repeating-linear-gradient(to bottom, transparent 0, transparent 33px, #14100d 33px, #14100d 34px)'
              }} />
              <div className="absolute top-0 left-[40px] sm:left-[80px] bottom-0 w-[1px] bg-[#7a2e2e]/15 pointer-events-none" />

              <div className="flex justify-between items-baseline mb-12 relative z-10">
                <div className="flex flex-col gap-1">
                  <span className="font-headline italic text-sm text-[#7a6a5c] tracking-wider">{l.num}</span>
                  {l.date && (
                    <span className="font-label text-[10px] tracking-[0.2em] uppercase text-[#7a2e2e]/50 italic">
                      {l.date}
                    </span>
                  )}
                </div>
                <span className="font-label text-[10px] tracking-[0.3em] uppercase text-[#7a2e2e] opacity-80">{l.tag}</span>
              </div>

              <h3 className="font-headline text-2xl sm:text-4xl font-bold text-[#14100d] leading-tight mb-2 relative z-10">
                {l.title}
              </h3>
              <p className="font-headline italic text-base sm:text-lg text-[#7a6a5c] mb-8 sm:mb-12 relative z-10">
                {l.sub}
              </p>

              <div className="w-full h-[1px] bg-[#dfd4c0] mb-12 relative z-10" />

              <div className="font-headline text-lg sm:text-[1.25rem] leading-[1.8] sm:leading-[2.2] text-[#3d3028] space-y-6 sm:space-y-8 relative z-10 italic">
                {l.content}
              </div>

              <div className="mt-16 pt-8 border-t border-[#dfd4c0] text-right relative z-10">
                 <span className="font-headline italic text-lg text-[#7a6a5c]">
                   {l.sig}
                 </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center flex flex-col items-center gap-8">
          <div className="w-[1px] h-20 bg-gradient-to-b from-rose/40 to-transparent" />
          
          <div className="flex flex-col items-center gap-6">
            <img 
              src="/stck/stck4.jpg" 
              alt="Sweet Sticker" 
              className="w-24 h-auto mix-blend-multiply opacity-80 hover:scale-110 transition-transform duration-700 animate-sticker-wobble"
            />
            <div className="flex items-center gap-3">
              <span className="text-rose/60 text-xs animate-pulse">💜</span>
              <p className="font-label text-[10px] tracking-[0.6em] uppercase text-rose/60">Advance Happy Birthday Harini</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
