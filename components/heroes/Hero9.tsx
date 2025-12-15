"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SplitText from 'gsap/SplitText'

/**
 * Hero9.tsx - Tailwind version, responsive.
 * - Large image uses "/modern_house.png" (place your image in public/modern_house.png or adjust path).
 * - On mobile/tablet everything is centered and stacked using flex-col; on md+ it uses absolute layout.
 */

// register SplitText (may require GSAP Club plugin availability)
const SplitTextPlugin: any = SplitText
try {
  gsap.registerPlugin(SplitTextPlugin)
} catch (e) {
  // if SplitText isn't available the code still runs but split animations will be skipped
}

/* -------------------------
   Top navigation (logo + links)
   ------------------------- */
const TopNav: React.FC = () => (
  <nav className="md:absolute top-5 left-7 right-7 flex w-full px-6 md:px-0 justify-center md:justify-between items-center pointer-events-auto z-30">
    <div className="font-extrabold text-xl">slow</div>
    <ul className="flex gap-6 list-none m-0 p-0 text-sm tracking-wide">
      <li>SHOP NOW</li>
      <li>INTRODUCTION</li>
      <li>SHOWCASE</li>
      <li>OUR TECH</li>
    </ul>
  </nav>
)

/* -------------------------
   Left floating controls (01 / 02 etc)
   ------------------------- */
const SideControls: React.FC = () => {
  const dot = (label: string, active = false) => (
    <div className={`flex items-center gap-2.5 rounded-full px-2.5 py-1.5 text-xs ${active ? 'bg-black/8' : 'bg-black/4'}`}>
      <div className={`w-3.5 h-3.5 rounded-full border-2 border-black/20 ${active ? 'bg-white' : 'bg-transparent'}`} />
      <div>{label}</div>
    </div>
  )

  return (
    <div className="md:absolute max-md:hidden left-6 bottom-10 -translate-y-1/2 flex flex-col gap-3 z-20">
      {dot('01', true)}
      {dot('02')}
      {dot('03')}
      {dot('04')}
    </div>
  )
}

/* -------------------------
   Big visual (large image + floating small items)
   For the large image use '/modern_house.png'
   ------------------------- */
type VisualProps = { rootRef?: React.RefObject<HTMLDivElement | null> }
const MainVisual: React.FC<VisualProps> = ({ rootRef }) => {
  return (
    <div
      ref={rootRef}
      className="md:absolute left-6 sm:left-8 md:left-10 lg:left-20 top-12 sm:top-10 md:top-16
                    w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px]
                    h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] z-20
                    mx-auto mb-6 md:mb-0"
    >
      {/* Large rotated image */}
      <img
        src="/cosmetic.png"
        alt="Modern house"
        className="w-full h-full max-md:w-60 object-contain block -rotate-12 drop-shadow-2xl"
      />

      {/* Floating bits - positioned with small arbitrary offsets */}
      <div className="absolute left-[-28px] top-[-18px] w-14 h-14 rounded-full bg-[#ffdede] flex items-center justify-center text-xs">Av</div>
      <div className="absolute left-[320px] top-[-12px] w-10 h-10 rounded-full bg-[#ffeb99]" />
      <div className="absolute left-[20px] top-[300px] w-9 h-9 rounded-md bg-[#b9f2c7]" />
      <div className="absolute left-[360px] top-[260px] w-7.5 h-7.5 rounded-full bg-[#f2c7ff]" />
    </div>
  )
}

/* -------------------------
   Headline (main text on the right)
   ------------------------- */
type HeadProps = { rootRef?: React.RefObject<HTMLDivElement | null> }
const Headline: React.FC<HeadProps> = ({ rootRef }) => {
  return (
    <div
      ref={rootRef}
      className="md:absolute right-5 md:right-30 top-28 md:top-28 w-full md:w-[52%] max-w-[760px] z-30 text-center md:text-left text-gray-900 px-6 md:px-0"
    >
      <p className="m-0 text-base md:text-xl opacity-90">Beauty doesn't have to be hard</p>

      {/* h1 will be target for SplitText animation */}
      <h1 className="mt-3 text-2xl md:text-4xl lg:text-6xl leading-tight">
        We make it <span className="font-extrabold">easy.</span>
      </h1>

      <p className="mt-4 text-xs md:text-sm text-gray-400">Mentioned in</p>
    </div>
  )
}

/* -------------------------
   Mentioned logos bar (faded logos)
   ------------------------- */
const MentionedLogos: React.FC = () => {
  const logoBox = (w = 'w-[88px]') => <div className={`${w} h-5 bg-gray-200 rounded-sm`} />

  return (
    <div className="md:absolute right-5 md:right-20 top-44 md:top-56 flex gap-4 opacity-50 z-30 flex-wrap justify-center md:justify-start mt-6 md:mt-0">
      {logoBox('w-[88px]')}
      {logoBox('w-[68px]')}
      {logoBox('w-[84px]')}
      {logoBox('w-[64px]')}
      {logoBox('w-[80px]')}
    </div>
  )
}

/* -------------------------
   Pink blob at the bottom (visual anchor)
   ------------------------- */
type PinkProps = { rootRef?: React.RefObject<HTMLDivElement | null> }
const PinkBlob: React.FC<PinkProps> = ({ rootRef }) => {
  return (
    <div
      ref={rootRef}
      className="md:absolute md:left-[10%] -md:translate-x-1/2 md:bottom-[-80px] bottom-0 mt-10 md:mt-0
                    w-[90%] sm:w-[86%] md:w-[82%] h-[220px] sm:h-[260px] md:h-[320px]
                    bg-pink-300 rounded-[180px] z-10 flex items-center justify-center"
    >
      <span className="text-white text-2xl sm:text-4xl font-extrabold">really starts</span>
    </div>
  )
}

/* -------------------------
   Scroll indicator (vertical right) - hide on small to keep centered layout
   ------------------------- */
const ScrollIndicator: React.FC = () => {
  return (
    <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-center z-30 text-gray-600 tracking-widest text-xs">
      SCROLL
    </div>
  )
}

/* -------------------------
   Hero9 (composition + animations)
   - On mobile/tablet: stacked centered column (flex-col)
   - On md+: absolute positioned composition
   ------------------------- */
const Hero9: React.FC = () => {
  const mainRef = useRef<HTMLDivElement | null>(null)
  const headRef = useRef<HTMLDivElement | null>(null)
  const pinkRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const elMain = mainRef.current
    const elHead = headRef.current
    const elPink = pinkRef.current
    if (!elMain || !elHead || !elPink) return

    // prepare splittext (if plugin available)
    let split: any = null
    try {
      split = new (SplitTextPlugin)(elHead.querySelector('h1'), { type: 'lines,words,chars', linesClass: 'split-line' })
    } catch (e) {
      split = null
    }

    // initialize pink rounding small so we can animate to rounded form
    gsap.set(elPink, { opacity: 0, y: 120, borderRadius: '24px' })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // 1) main image pans in from left
    tl.fromTo(
      elMain,
      { x: -220, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9 }
    )

    // 2) headline text - use split chars if available, animate from bottom
    if (split && split.chars && split.chars.length) {
      tl.fromTo(
        split.chars,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.02 },
        '-=0.35'
      )
    } else {
      // fallback: animate whole h1
      tl.fromTo(
        elHead.querySelector('h1'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.35'
      )
    }

    // 3) pink blob fades in from bottom and then forms roundness
    tl.to(
      elPink,
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.25'
    )
    // animate roundness after fade-in
    tl.to(
      elPink,
      { borderRadius: '180px', duration: 0.5 },
      '-=0.15'
    )

    return () => {
      tl.kill()
      try {
        if (split && typeof split.revert === 'function') split.revert()
      } catch (e) {}
    }
  }, [])

  return (
    <section className="flex flex-col items-center justify-center md:block relative w-full min-h-screen md:h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden rounded-2xl pt-16 md:pt-36">
      {/* <TopNav /> */}
      <SideControls />
      <MainVisual rootRef={mainRef} />
      <Headline rootRef={headRef} />
      <MentionedLogos />
      <PinkBlob rootRef={pinkRef} />
      <ScrollIndicator />
    </section>
  )
}

export default Hero9
