'use client';
import {Suspense, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import Link from 'next/link';
import {rooms} from '../../lib/data';

function BookingForm(){
  const q=useSearchParams();
  const selected=rooms.find(r=>r.id===q.get('room'))||rooms[0];
  const[done,setDone]=useState(false);
  const[form,setForm]=useState({first:'',last:'',email:'',phone:'',checkIn:q.get('checkIn')||'',checkOut:q.get('checkOut')||'',guests:q.get('guests')||'2'});
  function submit(e:React.FormEvent){e.preventDefault();setDone(true)}
  return <main><section className="page-hero"><div className="container"><div className="eyebrow">Your stay starts here</div><h1 className="serif">Reserve your room.</h1><p>Complete the form and our concierge team will confirm your reservation details.</p></div></section><section className="section"><div className="container split"><form className="form-card" onSubmit={submit}><div className="eyebrow">Guest details</div><h2 className="serif" style={{fontSize:34}}>Tell us about your stay</h2>{done?<div className="success">Thank you, {form.first || 'guest'}! Your booking request has been received. We’ll contact you at {form.email || 'your email'} shortly.<div style={{marginTop:15}}><Link href="/my-bookings" className="btn btn-dark">View my booking</Link></div></div>:<><div className="form-grid"><div className="field"><label>First name</label><input required value={form.first} onChange={e=>setForm({...form,first:e.target.value})}/></div><div className="field"><label>Last name</label><input required value={form.last} onChange={e=>setForm({...form,last:e.target.value})}/></div><div className="field"><label>Email</label><input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div><div className="field"><label>Phone</label><input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></div><div className="field"><label>Check in</label><input type="date" required value={form.checkIn} onChange={e=>setForm({...form,checkIn:e.target.value})}/></div><div className="field"><label>Check out</label><input type="date" required value={form.checkOut} onChange={e=>setForm({...form,checkOut:e.target.value})}/></div><div className="field"><label>Guests</label><select value={form.guests} onChange={e=>setForm({...form,guests:e.target.value})}>{[1,2,3,4,5].map(n=><option key={n}>{n}</option>)}</select></div><div className="field"><label>Room</label><select defaultValue={selected.id}>{rooms.map(r=><option key={r.id} value={r.id}>{r.name} — ${r.price}/night</option>)}</select></div><div className="field full"><label>Special requests</label><textarea rows={4} placeholder="Airport transfer, celebration, accessibility needs…"/></div></div><button className="btn btn-gold" style={{marginTop:20,width:'100%'}}>Request reservation</button></>}</form><div><div className="eyebrow">Selected room</div><h2 className="serif" style={{fontSize:40}}>{selected.name}</h2><div className="split-image" style={{minHeight:330,backgroundImage:"url('" + selected.image + "')"}}/><p className="muted">{selected.description}</p><div className="features"><span>{selected.size}</span><span>{selected.beds}</span><span>From ${selected.price}/night</span></div></div></div></section></main>
}

export default function Booking(){
  return <Suspense fallback={<main><section className="section" style={{paddingTop:160}}><div className="container"><p>Loading booking form…</p></div></section></main>}><BookingForm/></Suspense>
}
