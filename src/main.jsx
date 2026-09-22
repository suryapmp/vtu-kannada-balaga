import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const A = {
  gandaberunda: '/assets/images/gandaberunda.png',
  hero: '/assets/images/hero-background.jpg',
  story: '/assets/images/story-image.jpg',
  map: '/assets/images/karnataka.jpg',
  yakshagana: '/assets/images/yakshagana.jpg',
  folk: '/assets/images/folk-art.jpg',
  heritage: '/assets/images/heritage.jpg',
  music: '/assets/images/music.jpg',
  cuisine: '/assets/images/cuisine.jpg',
  theatre: '/assets/images/theatre.jpg',
  // flagMedia: '/assets/media/kannada-rajyotsava-flag.mp4',
  bgMusic: '/assets/audio/karnataka-ambient.mp3',
};

const culture = [
  ['ಯಕ್ಷಗಾನ','Yakshagana',A.yakshagana,'ಕರಾವಳಿಯ ರಂಗ, ನೃತ್ಯ, ಸಂಗೀತ ಮತ್ತು ಕಥನದ ಜೀವಂತ ಪರಂಪರೆ.'],
  ['ಜಾನಪದ ಕಲೆ','Folk Arts',A.folk,'ನಾಡಿನ ಜನಪದ ಸಂಭ್ರಮ, ವೇಷಭೂಷಣ ಮತ್ತು ಸಮುದಾಯದ ನೆನಪುಗಳು.'],
  ['ವಾಸ್ತುಶಿಲ್ಪ','Architecture',A.heritage,'ಹಂಪಿ, ಬಾದಾಮಿ, ಪಟ್ಟದಕಲ್ಲು ಮತ್ತು ಮೈಸೂರು ನಮ್ಮ ಇತಿಹಾಸದ ಗುರುತುಗಳು.'],
  ['ಸಂಗೀತ','Music',A.music,'ಭಾವಗೀತೆ, ವಾದ್ಯ, ಗಾಯನ ಮತ್ತು ಕನ್ನಡದ ಸಂಗೀತ ಪರಂಪರೆಯ ನಾದ.'],
  ['ಕರ್ನಾಟಕದ ರುಚಿ','Cuisine',A.cuisine,'ಉತ್ತರ ಕರ್ನಾಟಕದಿಂದ ಕರಾವಳಿವರೆಗೆ ಹರಡುವ ವೈವಿಧ್ಯಮಯ ಆಹಾರ ಸಂಸ್ಕೃತಿ.'],
  ['ರಂಗಭೂಮಿ','Theatre',A.theatre,'ನಾಟಕ, ಅಭಿನಯ ಮತ್ತು ವೇದಿಕೆಯ ಮೂಲಕ ಕಥೆ ಹೇಳುವ ಕನ್ನಡದ ಪರಂಪರೆ.'],
];

const events = [
  ['01','ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ','ನವೆಂಬರ್ 2026','ಕನ್ನಡದ ಹೆಮ್ಮೆ, ಕಲೆಯ ಸಂಭ್ರಮ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳ ಪ್ರತಿಭೆಯ ವಿಶೇಷ ಆಚರಣೆ.','/assets/images/event-01.jpg'],
  ['15','ಕವಿಗೋಷ್ಠಿ','ಆಗಸ್ಟ್ 2026','ಕವನ ವಾಚನ, ಸಾಹಿತ್ಯ ಚರ್ಚೆ ಮತ್ತು ಯುವ ಬರಹಗಾರರಿಗೆ ಮುಕ್ತ ವೇದಿಕೆ.','/assets/images/event-02.jpg'],
  ['10','ಜಾನಪದ ಸಂಜೆ','ಸೆಪ್ಟೆಂಬರ್ 2026','ಜಾನಪದ ಗೀತೆ, ನೃತ್ಯ ಮತ್ತು ಕರ್ನಾಟಕದ ವಿವಿಧ ಕಲಾ ರೂಪಗಳ ಸಾಂಸ್ಕೃತಿಕ ಸಂಜೆ.','/assets/images/event-03.jpg'],
  ['25','ರಂಗಭೂಮಿ ಕಾರ್ಯಾಗಾರ','ಅಕ್ಟೋಬರ್ 2026','ಅಭಿನಯ, ನಾಟಕ ಮತ್ತು ವೇದಿಕೆ ವಿನ್ಯಾಸದ ಕುರಿತು ಕಲಾವಿದರೊಂದಿಗೆ ಕಾರ್ಯಾಗಾರ.','/assets/images/event-04.jpg'],
];

const activities = [
  ['ಸಾಹಿತ್ಯ ಬಳಗ','ಕವಿಗೋಷ್ಠಿ, ಪುಸ್ತಕ ಪರಿಚಯ, ಚರ್ಚೆ ಮತ್ತು ಕನ್ನಡ ಬರವಣಿಗೆಗೆ ವೇದಿಕೆ.','✒'],
  ['ಕಲಾ ಬಳಗ','ಯಕ್ಷಗಾನ, ಜನಪದ, ನೃತ್ಯ, ಸಂಗೀತ ಮತ್ತು ರಂಗಭೂಮಿ ಕಾರ್ಯಕ್ರಮಗಳು.','✦'],
  ['ಚಿತ್ರ ಸಂಗ್ರಹ','ಬಳಗದ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ನೆನಪುಗಳನ್ನು ಡಿಜಿಟಲ್ ರೂಪದಲ್ಲಿ ಸಂಗ್ರಹಿಸುವುದು.','▧'],
  ['ರಾಜ್ಯೋತ್ಸವ','ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವದ ಸಂದರ್ಭದಲ್ಲಿ ವಿಶೇಷ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು.','★'],
  ['ವಿದ್ಯಾರ್ಥಿ ವೇದಿಕೆ','ವಿದ್ಯಾರ್ಥಿಗಳ ಪ್ರತಿಭೆ, ಭಾಷಣ, ಕವನ ಮತ್ತು ಸೃಜನಶೀಲತೆಗೆ ಮುಕ್ತ ವೇದಿಕೆ.','◉'],
  ['ಪಾರಂಪರ್ಯ ಪರಿಚಯ','ಕರ್ನಾಟಕದ ಸ್ಥಳ, ಕಲೆ, ಆಹಾರ ಮತ್ತು ಜನಪದ ಪರಂಪರೆಯ ಪರಿಚಯ.','⌂'],
];

const gallery = Array.from({length:8},(_,i)=>[`ಚಿತ್ರ ${String(i+1).padStart(2,'0')}`,`/assets/images/gallery-${String(i+1).padStart(2,'0')}.jpg`]);
const team = ['ಅಕ್ಷಯ','ರಮ್ಯಾ','ಕಾರ್ತಿಕ್','ಸಂಧ್ಯಾ','ಪ್ರಜ್ವಲ್'];

function ImageSlot({src,alt='',label='IMAGE PLACEHOLDER',className=''}){
  const [bad,setBad]=useState(false);
  if(bad) return <div className={`image-slot ${className}`}><span>▧</span><b>{label}</b><small>{src}</small></div>;
  return <img className={className} src={src} alt={alt} onError={()=>setBad(true)} />;
}

function Emblem({small=false}){
  return <div className={`emblem ${small?'small':''}`}><ImageSlot src={A.gandaberunda} alt="Gandaberunda" label="GANDABERUNDA" /></div>;
}

function FlagMedia({compact=false}){
  const [failed,setFailed]=useState(false);
  return <div className={`flag-media ${compact?'compact':''}`}>
    {!failed ? <video src={A.flagMedia} autoPlay muted loop playsInline preload="metadata" onError={()=>setFailed(true)} /> : <div className="media-placeholder"><span>ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ</span><b>GIF / VIDEO PLACEHOLDER</b><small>{A.flagMedia}</small></div>}
    <i className="media-sheen" />
  </div>;
}

function MusicControl(){
  const ref=useRef(null); const [on,setOn]=useState(false); const [available,setAvailable]=useState(true);
  const toggle=async()=>{ if(!ref.current)return; try{ if(ref.current.paused){await ref.current.play();setOn(true)}else{ref.current.pause();setOn(false)} }catch{setAvailable(false)} };
  return <><audio ref={ref} src={A.bgMusic} loop preload="none" onError={()=>setAvailable(false)}/><button className={`music ${on?'on':''}`} onClick={toggle} title={available?'Background music':'Add karnataka-ambient.mp3'}><span>♪</span><b>{on?'ಸಂಗೀತ ON':'ಸಂಗೀತ'}</b></button></>;
}

function Header({theme,setTheme}){
  const [open,setOpen]=useState(false);
  const links=[['ಮುಖಪುಟ','/'],['ನಮ್ಮ ಕಥೆ','/about'],['ಪರಂಪರೆ','/culture'],['ಕಾರ್ಯಕ್ರಮಗಳು','/events'],['ನಮ್ಮ ಬಳಗ','/team'],['ಚಿತ್ರ ಸಂಗ್ರಹ','/gallery'],['ನಾವು ಮಾಡುವದು','/activities'],['ಸಂಪರ್ಕಿಸಿ','/contact']];
  return <header className="header"><a className="brand" href="/"><Emblem small/><span><strong>ವಿಟಿಯು ಕನ್ನಡ ಬಳಗ</strong><small>VTU KANNADA BALAGA · LANGUAGE · CULTURE · UNITY</small></span></a><div className="head-actions"><MusicControl/><button className="theme" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label="Toggle theme">{theme==='dark'?'☼':'☾'}</button><button className="hamb" onClick={()=>setOpen(!open)}>☰</button></div><nav className={open?'open':''}>{links.map(([x,h])=><a key={h} href={h} onClick={()=>setOpen(false)}>{x}</a>)}<a className="nav-cta" href="/contact" onClick={()=>setOpen(false)}>ಸೇರಿಕೊಳ್ಳಿ →</a></nav></header>
}

function SectionTitle({eyebrow,title,sub='',light=false}){return <div className={`section-title ${light?'light':''} reveal`}><small>{eyebrow}</small><h2>{title}</h2>{sub&&<p>{sub}</p>}<div className="rule"><i/><i/><i/></div></div>}

function PageHero({eyebrow,title,sub,art=A.map}){return <section className="page-hero"><div className="page-hero-bg"/><div className="page-hero-inner"><div><small>{eyebrow}</small><h1>{title}</h1><p>{sub}</p></div><div className="page-hero-art"><ImageSlot src={art} alt="" label="PAGE IMAGE"/></div></div></section>}

function Home(){
 const [ei,setEi]=useState(0); const [lightbox,setLightbox]=useState(null);
 return <>
  <section className="hero" id="home"><div className="hero-bg"/><div className="hero-shade"/><FlagMedia/><div className="hero-inner"><div className="hero-copy reveal"><span className="kicker">ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ · ೨೦೨೬</span><h1>ಕನ್ನಡದ ಹೆಮ್ಮೆ,<br/><em>ವಿಟಿಯುನ ಹೃದಯ</em></h1><p>ಕನ್ನಡ ಭಾಷೆ, ಸಾಹಿತ್ಯ, ಕಲೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಯನ್ನು ವಿಶ್ವೇಶ್ವರಯ್ಯ ತಾಂತ್ರಿಕ ವಿಶ್ವವಿದ್ಯಾಲಯದ ಆವರಣದಲ್ಲಿ ಜೀವಂತವಾಗಿಡುವ ಸಾಂಸ್ಕೃತಿಕ ವೇದಿಕೆ.</p><div className="actions"><a className="btn primary" href="/about">ನಮ್ಮ ಕಥೆ ಓದಿ →</a><a className="btn ghost" href="/events">ಕಾರ್ಯಕ್ರಮಗಳು →</a></div><blockquote>“ಕನ್ನಡವೇ ನಮ್ಮ ಗುರುತು, ಕನ್ನಡವೇ ನಮ್ಮ ಹೆಮ್ಮೆ.”</blockquote></div><div className="hero-side reveal"><div className="hero-emblem"><Emblem/></div><div className="hero-map"><ImageSlot src={A.map} alt="Karnataka cultural map" label="KARNATAKA MAP"/></div></div></div><div className="hero-bottom"><span>↓</span><small>ಕೆಳಗೆ ಸ್ಕ್ರೋಲ್ ಮಾಡಿ</small><div className="flag-line"/></div></section>
  <section className="quick"><a href="/about"><b>01</b><span>ನಮ್ಮ ಕಥೆ</span><small>ABOUT</small></a><a href="/culture"><b>02</b><span>ಪರಂಪರೆ</span><small>HERITAGE</small></a><a href="/events"><b>03</b><span>ಕಾರ್ಯಕ್ರಮಗಳು</span><small>EVENTS</small></a><a href="/gallery"><b>04</b><span>ಚಿತ್ರ ಸಂಗ್ರಹ</span><small>GALLERY</small></a><a href="/activities"><b>05</b><span>ಚಟುವಟಿಕೆ</span><small>ACTIVITIES</small></a></section>
  <section className="story section" id="story"><div className="story-card reveal"><div className="story-copy"><span>OUR STORY</span><h2>ನಮ್ಮ ಕಥೆ</h2><p>ವಿಟಿಯು ಕನ್ನಡ ಬಳಗವು ಕನ್ನಡ ಭಾಷೆ, ಸಾಹಿತ್ಯ, ಕಲೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ಸಂಭ್ರಮವನ್ನು ವಿಶ್ವವಿದ್ಯಾಲಯದ ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಸಿಬ್ಬಂದಿಯೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳುವ ವೇದಿಕೆ.</p><p>ನಾಡಿನ ಪರಂಪರೆಯನ್ನು ಹೊಸ ತಲೆಮಾರಿಗೆ ಪರಿಚಯಿಸುವುದು, ಕನ್ನಡದಲ್ಲಿ ಸೃಜನಶೀಲತೆಯನ್ನು ಉತ್ತೇಜಿಸುವುದು ಮತ್ತು ಎಲ್ಲರನ್ನು ಒಂದೇ ಸಾಂಸ್ಕೃತಿಕ ವೇದಿಕೆಯಲ್ಲಿ ಸೇರಿಸುವುದು ನಮ್ಮ ಆಶಯ.</p><a className="text-btn" href="/about">ಹೆಚ್ಚು ತಿಳಿಯಿರಿ →</a></div><div className="story-image"><ImageSlot src={A.story} alt="Kannada heritage" label="STORY IMAGE"/></div><div className="story-list"><span>✒ <b>ಭಾಷೆ</b></span><span>✦ <b>ಕಲೆ</b></span><span>◉ <b>ಸಂಸ್ಕೃತಿ</b></span><span>★ <b>ಸಾಹಿತ್ಯ</b></span></div></div></section>
  <section className="culture section" id="culture"><SectionTitle eyebrow="OUR HERITAGE" title="ಕರ್ನಾಟಕದ ಸಂಸ್ಕೃತಿ" sub="ಒಂದು ನಾಡು · ಅನೇಕ ಪರಂಪರೆಗಳು · ಒಂದೇ ಹೆಮ್ಮೆ"/><div className="culture-grid">{culture.map(([kn,en,img,desc],i)=><article className="culture-card reveal" key={en}><div className="card-media"><ImageSlot src={img} alt={en} label={en.toUpperCase()}/><span>0{i+1}</span></div><div className="card-copy"><small>{en}</small><h3>{kn}</h3><p>{desc}</p><a href="/culture">ಪರಂಪರೆ →</a></div></article>)}</div><a className="center-btn" href="/culture">ಎಲ್ಲಾ ಪರಂಪರೆಗಳನ್ನು ನೋಡಿ</a></section>
  <section className="events section" id="events"><SectionTitle light eyebrow="EVENTS" title="ಕಾರ್ಯಕ್ರಮಗಳು" sub="ಕನ್ನಡಕ್ಕಾಗಿ ನಾವು ನಡೆಸುವ ಸಂಭ್ರಮ, ಸಂವಾದ ಮತ್ತು ಸೃಜನಶೀಲ ಕಾರ್ಯಕ್ರಮಗಳು."/><div className="event-feature reveal"><div className="event-photo"><ImageSlot src={events[ei][4]} alt={events[ei][1]} label="EVENT IMAGE"/><span>{events[ei][0]} · 2026</span></div><div className="event-info"><small>{events[ei][2]}</small><h3>{events[ei][1]}</h3><p>{events[ei][3]}</p><div className="event-actions"><button onClick={()=>setEi((ei-1+events.length)%events.length)}>←</button><button onClick={()=>setEi((ei+1)%events.length)}>→</button><a href="/events">ಎಲ್ಲಾ ಕಾರ್ಯಕ್ರಮಗಳು →</a></div></div></div></section>
  <section className="team section"><SectionTitle eyebrow="OUR TEAM" title="ನಮ್ಮ ಬಳಗ" sub="ಕನ್ನಡದ ಮೇಲಿನ ಪ್ರೀತಿಯಿಂದ ಒಂದಾದ ನಮ್ಮ ತಂಡ."/><div className="team-grid">{team.map((n,i)=><article className="person reveal" key={n}><div className="avatar"><ImageSlot src={`/assets/images/member-0${i+1}.jpg`} alt={n} label="MEMBER PHOTO"/></div><h3>{n}</h3><small>ಬಳಗದ ಸದಸ್ಯ</small></article>)}<div className="team-note reveal"><span>“</span><p>ಕನ್ನಡದ ಕಲೆ ಮತ್ತು ಸಾಹಿತ್ಯವನ್ನು ಎಲ್ಲರಿಗೂ ಹತ್ತಿರ ಮಾಡುವುದೇ ನಮ್ಮ ಉದ್ದೇಶ.</p><small>ವಿಟಿಯು ಕನ್ನಡ ಬಳಗ</small></div></div></section>
  <section className="gallery section"><SectionTitle eyebrow="GALLERY" title="ಚಿತ್ರ ಸಂಗ್ರಹ" sub="ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳ ನೆನಪುಗಳು."/><div className="gallery-grid">{gallery.slice(0,6).map(([t,img],i)=><button className={`gallery-item gi-${i+1} reveal`} key={img} onClick={()=>setLightbox([t,img])}><ImageSlot src={img} alt={t} label="GALLERY IMAGE"/><span>{t}</span></button>)}</div><a className="center-btn" href="/gallery">ಎಲ್ಲಾ ಚಿತ್ರಗಳನ್ನು ನೋಡಿ</a></section>
  <section className="contact-strip section"><div className="contact-mini reveal"><div><small>CONTACT US</small><h2>ನಮ್ಮ ಜೊತೆ ಸಂಪರ್ಕಿಸಿ</h2><p>ಕಾರ್ಯಕ್ರಮ, ಸಹಭಾಗಿತ್ವ ಅಥವಾ ಕನ್ನಡ ಬಳಗಕ್ಕೆ ಸೇರಲು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.</p></div><a className="btn primary" href="/contact">ಸಂಪರ್ಕಿಸಿ →</a></div></section>
  {lightbox&&<div className="lightbox" onClick={()=>setLightbox(null)}><ImageSlot src={lightbox[1]} alt={lightbox[0]} label="GALLERY IMAGE"/><b>{lightbox[0]}</b></div>}
 </>
}

function About(){return <><PageHero eyebrow="ABOUT VTU KANNADA BALAGA" title="ನಮ್ಮ ಕಥೆ" sub="ಭಾಷೆ, ಕಲೆ, ಸಾಹಿತ್ಯ ಮತ್ತು ಸಂಸ್ಕೃತಿಯನ್ನು ವಿಶ್ವವಿದ್ಯಾಲಯದ ಬದುಕಿನೊಂದಿಗೆ ಜೋಡಿಸುವ ಒಂದು ಸಾಂಸ್ಕೃತಿಕ ವೇದಿಕೆ." art={A.story}/><section className="content-section"><div className="two-col"><div className="copy-card"><span>01 · OUR PURPOSE</span><h2>ಕನ್ನಡ ನಮ್ಮ ಗುರುತು</h2><p>ವಿಟಿಯು ಕನ್ನಡ ಬಳಗದ ಉದ್ದೇಶ ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಕರ್ನಾಟಕದ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ವಿದ್ಯಾರ್ಥಿಗಳು, ಸಿಬ್ಬಂದಿ ಮತ್ತು ಸಮುದಾಯದೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳುವುದು.</p><p>ಸಾಹಿತ್ಯ, ಸಂಗೀತ, ನಾಟಕ, ಜನಪದ ಕಲೆ, ಚರ್ಚೆ ಮತ್ತು ಆಚರಣೆಗಳ ಮೂಲಕ ಕನ್ನಡದೊಂದಿಗೆ ನಿರಂತರ ಸಂಪರ್ಕವನ್ನು ಬೆಳೆಸುವುದು ನಮ್ಮ ಪ್ರಯತ್ನ.</p></div><ImageSlot src={A.map} alt="Karnataka" label="KARNATAKA HERITAGE"/></div><div className="values-grid">{[['ಭಾಷೆ','ಕನ್ನಡದ ಬಳಕೆ ಮತ್ತು ಅಭಿವ್ಯಕ್ತಿ'],['ಕಲೆ','ಸಾಂಸ್ಕೃತಿಕ ಪ್ರತಿಭೆಗೆ ವೇದಿಕೆ'],['ಸಾಹಿತ್ಯ','ಓದು, ಬರಹ ಮತ್ತು ಸಂವಾದ'],['ಏಕತೆ','ಎಲ್ಲರನ್ನೂ ಕನ್ನಡದೊಂದಿಗೆ ಜೋಡಿಸುವುದು']].map(x=><div className="value-card" key={x[0]}><b>{x[0]}</b><p>{x[1]}</p></div>)}</div></section></>}

function Culture(){return <><PageHero eyebrow="KARNATAKA HERITAGE" title="ಪರಂಪರೆ" sub="ಕರ್ನಾಟಕದ ವೈವಿಧ್ಯಮಯ ಕಲೆ, ಆಹಾರ, ಸಂಗೀತ, ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಜನಪದ ಬದುಕಿನ ಪರಿಚಯ." art={A.map}/><section className="content-section"><div className="culture-grid full">{culture.map(([kn,en,img,desc],i)=><article className="culture-card reveal" key={en}><div className="card-media"><ImageSlot src={img} alt={en} label={en.toUpperCase()}/><span>0{i+1}</span></div><div className="card-copy"><small>{en}</small><h3>{kn}</h3><p>{desc}</p></div></article>)}</div></section></>}

function Events(){return <><PageHero eyebrow="VTU KANNADA BALAGA" title="ಕಾರ್ಯಕ್ರಮಗಳು" sub="ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವದಿಂದ ಸಾಹಿತ್ಯ ಮತ್ತು ಕಲಾ ಕಾರ್ಯಕ್ರಮಗಳವರೆಗೆ — ನಮ್ಮ ಚಟುವಟಿಕೆಗಳ ದಿನಚರಿ." art={A.hero}/><section className="content-section"><div className="event-list">{events.map((e,i)=><article className="event-row reveal" key={e[1]}><div className="date"><b>{e[0]}</b><small>2026</small></div><ImageSlot src={e[4]} alt={e[1]} label="EVENT IMAGE"/><div><small>{e[2]}</small><h2>{e[1]}</h2><p>{e[3]}</p></div><a href="/contact">ವಿವರ →</a></article>)}</div></section></>}

function Activities(){return <><PageHero eyebrow="WHAT WE DO" title="ನಾವು ಮಾಡುವ ಚಟುವಟಿಕೆಗಳು" sub="ಕನ್ನಡದ ಭಾಷೆ, ಕಲೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಯನ್ನು ಆಚರಿಸುವ ನಿರಂತರ ಚಟುವಟಿಕೆಗಳು." art={A.story}/><section className="content-section"><div className="activity-grid">{activities.map(([t,d,icon],i)=><article className="activity reveal" key={t}><span>{icon}</span><small>0{i+1}</small><h2>{t}</h2><p>{d}</p><a href="/contact">ಸಹಭಾಗಿಯಾಗಿರಿ →</a></article>)}</div></section></>}

function Team(){return <><PageHero eyebrow="OUR PEOPLE" title="ನಮ್ಮ ಬಳಗ" sub="ಕನ್ನಡದ ಮೇಲಿನ ಪ್ರೀತಿಯಿಂದ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ರೂಪಿಸುವ ಮತ್ತು ನಡೆಸುವ ತಂಡ." art={A.gandaberunda}/><section className="content-section"><div className="people-grid">{team.map((n,i)=><article className="person big reveal" key={n}><div className="avatar"><ImageSlot src={`/assets/images/member-0${i+1}.jpg`} alt={n} label="MEMBER PHOTO"/></div><h2>{n}</h2><small>ಬಳಗದ ಸದಸ್ಯ</small><p>ಕಾರ್ಯಕ್ರಮಗಳು, ಸಂಸ್ಕೃತಿ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ ಸಹಭಾಗಿತ್ವ.</p></article>)}</div></section></>}

function Gallery(){const [light,setLight]=useState(null); return <><PageHero eyebrow="MEMORIES" title="ಚಿತ್ರ ಸಂಗ್ರಹ" sub="ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳ ಕ್ಷಣಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಉಳಿಸುವ ಡಿಜಿಟಲ್ ಸಂಗ್ರಹ." art={A.map}/><section className="content-section"><div className="gallery-grid gallery-page">{gallery.map(([t,img],i)=><button className="gallery-item reveal" key={img} onClick={()=>setLight([t,img])}><ImageSlot src={img} alt={t} label="GALLERY IMAGE"/><span>{t}</span></button>)}</div></section>{light&&<div className="lightbox" onClick={()=>setLight(null)}><ImageSlot src={light[1]} alt={light[0]} label="GALLERY IMAGE"/><b>{light[0]}</b></div>}</>}

function Contact(){return <><PageHero eyebrow="GET IN TOUCH" title="ಸಂಪರ್ಕಿಸಿ" sub="ಕಾರ್ಯಕ್ರಮ, ಸಹಭಾಗಿತ್ವ, ಸದಸ್ಯತ್ವ ಅಥವಾ ಯಾವುದೇ ಕನ್ನಡ ಚಟುವಟಿಕೆಗಾಗಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ." art={A.gandaberunda}/><section className="content-section"><div className="contact-page"><div className="contact-card"><small>VTU KANNADA BALAGA</small><h2>ನಮ್ಮ ಜೊತೆ ಮಾತನಾಡಿ</h2><p>Visvesvaraya Technological University, Belagavi</p><p>✉ kannadabalaga@vtu.ac.in</p><p>☎ +91 831 249 XXXX</p><div className="socials"><span>f</span><span>◎</span><span>▶</span><span>in</span></div></div><form className="form-card" onSubmit={e=>e.preventDefault()}><input placeholder="ನಿಮ್ಮ ಹೆಸರು"/><input type="email" placeholder="ಇಮೇಲ್"/><input placeholder="ವಿಷಯ"/><textarea placeholder="ನಿಮ್ಮ ಸಂದೇಶ"/><button className="btn primary" type="submit">ಸಂದೇಶ ಕಳುಹಿಸಿ →</button></form></div></section></>}

function App(){
 const [theme,setTheme]=useState(()=>localStorage.getItem('vkb-theme')||'dark');
 const path=window.location.pathname.replace(/\/$/,'')||'/';
 useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('vkb-theme',theme);window.scrollTo({top:0,behavior:'instant'});},[theme,path]);
 useEffect(()=>{const ctx=gsap.context(()=>{gsap.utils.toArray('.reveal').forEach((el,i)=>gsap.fromTo(el,{y:45,opacity:0},{y:0,opacity:1,duration:.75,delay:(i%5)*.05,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}})); gsap.utils.toArray('.page-hero h1,.hero h1').forEach(el=>gsap.fromTo(el,{y:55,opacity:0},{y:0,opacity:1,duration:1,ease:'power4.out'})); gsap.to('.hero-emblem',{y:-10,rotation:1.5,duration:3,repeat:-1,yoyo:true,ease:'sine.inOut'}); gsap.to('.page-hero-art',{y:-15,duration:4,repeat:-1,yoyo:true,ease:'sine.inOut'});},document); return ()=>ctx.revert();},[path]);
 let content=path==='/'?<Home/>:path==='/about'?<About/>:path==='/culture'?<Culture/>:path==='/events'?<Events/>:path==='/activities'?<Activities/>:path==='/team'?<Team/>:path==='/gallery'?<Gallery/>:path==='/contact'?<Contact/>:<About/>;
 return <div className="app"><Header theme={theme} setTheme={setTheme}/>{content}<Footer/></div>
}

function Footer(){return <footer><div className="footer-inner"><div><Emblem small/><strong>ವಿಟಿಯು ಕನ್ನಡ ಬಳಗ</strong><small>Visvesvaraya Technological University, Belagavi</small></div><FlagMedia compact/><div><p>ಕನ್ನಡದೊಂದಿಗೆ · ಸಂಸ್ಕೃತಿಯೊಂದಿಗೆ · ಒಂದಾಗಿ</p><small>© 2026 VTU Kannada Balaga</small></div></div></footer>}

createRoot(document.getElementById('root')).render(<App/>);
