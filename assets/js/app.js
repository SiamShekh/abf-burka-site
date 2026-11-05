(function(){
'use strict';
var WA='8801357213515';
var P=[
 {id:1,n:'কালো লেয়ার্ড স্লিভ বোরকা',p:2990,d:'লেয়ার্ড স্লিভ, ডিটেইল ট্রিম',c:[['কালো','#0B0B0B']]},
 {id:2,n:'গ্রে-ব্লু তিন কুচি বোরকা',p:3250,d:'তিন কুচি স্লিভ, হিজাব সেট',c:[['গ্রে-ব্লু','#5C6C85']]},
 {id:3,n:'নেভি প্লিটেড বেল-স্লিভ বোরকা',p:3490,d:'প্লিটেড বেল-স্লিভ, ম্যাচিং স্কার্ফ',c:[['নেভি','#1B2038'],['কালো','#0B0B0B']]},
 {id:4,n:'ব্রাউন টায়ার্ড বোরকা',p:2750,d:'টায়ার্ড রাফল ডিজাইন',c:[['ব্রাউন','#5A3A28']]},
 {id:5,n:'টিল ফ্লোরাল বোরকা সেট',p:3990,d:'ফ্লোরাল প্রিন্ট, হিজাবসহ',c:[['টিল','#1F6F6B']]},
 {id:6,n:'ব্ল্যাক ফ্লেয়ার্ড গোল্ডেন বর্ডার',p:3150,d:'ফ্লেয়ার্ড কাট, গোল্ডেন বর্ডার',c:[['কালো','#0B0B0B']]}
];
var B='০১২৩৪৫৬৭৮৯';
function bn(x){return String(x).replace(/\d/g,function(d){return B[d]});}
function money(x){return '৳ '+bn(String(x).replace(/\B(?=(\d{3})+(?!\d))/g,','));}
function q(s,r){return (r||document).querySelector(s);}
function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));}
function get(){try{return JSON.parse(localStorage.getItem('abf_cart')||'[]');}catch(e){return [];}}
function put(a){try{localStorage.setItem('abf_cart',JSON.stringify(a));}catch(e){}}
function pid(){var m=/[?&]id=(\d+)/.exec(location.search);var i=m?+m[1]:3;return P.filter(function(x){return x.id===i})[0]||P[2];}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]});}
function cartCount(){var n=get().reduce(function(a,b){return a+b.q},0);var e=q('#cc');if(e)e.textContent=bn(n);}
/* drawer */
var bg=q('#bg'),dr=q('#dr');
if(bg&&dr){bg.addEventListener('click',function(){dr.classList.add('open')});['#drb','#drx'].forEach(function(s){var e=q(s);e&&e.addEventListener('click',function(){dr.classList.remove('open')})});qa('a',dr).forEach(function(a){a.addEventListener('click',function(){dr.classList.remove('open')})});}
/* rails */
qa('[data-rail]').forEach(function(b){b.addEventListener('click',function(){var r=document.getElementById(b.dataset.rail);if(r)r.scrollBy({left:(+b.dataset.d)*r.clientWidth*0.8,behavior:'smooth'});});});
qa('.tabs').forEach(function(t){qa('.tab',t).forEach(function(b){b.addEventListener('click',function(){qa('.tab',t).forEach(function(x){x.classList.remove('on')});b.classList.add('on');});});});
/* product page */
if(q('#pn')){
 var p=pid(),size='৫৪',qty=1,color=p.c[0][0];
 document.title=p.n+' | ABF';
 q('#bc').textContent=p.n;q('#pn').textContent=p.n;q('#pp').textContent=money(p.p);q('#pc').textContent='ABF'+bn('0'+p.id);
 q('#ds').textContent=p.d;q('#ds2').textContent=p.d;
 var mi=q('#mi');mi.src='assets/img/p'+p.id+'.jpg';mi.alt=p.n;
 var th=q('#th');[p.id].concat(P.filter(function(x){return x.id!==p.id}).slice(0,3).map(function(x){return x.id})).forEach(function(i,k){var b=document.createElement('button');b.type='button';b.className=k?'':'on';b.setAttribute('aria-label','ছবি '+(k+1));b.innerHTML='<img src="assets/img/p'+i+'.jpg" alt="" loading="lazy">';b.addEventListener('click',function(){mi.src='assets/img/p'+i+'.jpg';qa('button',th).forEach(function(x){x.classList.remove('on')});b.classList.add('on');});th.appendChild(b);});
 var cl=q('#cl');p.c.forEach(function(c,k){var s=document.createElement('button');s.type='button';s.className='chip'+(k?'':' on');s.innerHTML='<span class="dot" style="background:'+c[1]+'"></span>'+esc(c[0]);s.addEventListener('click',function(){color=c[0];qa('.chip',cl).forEach(function(x){x.classList.remove('on')});s.classList.add('on');upd();});cl.appendChild(s);});
 var sz=q('#sz');['৫২','৫৪','৫৬','৫৮'].forEach(function(s){var b=document.createElement('button');b.type='button';b.className='chip s'+(s===size?' on':'');b.textContent=s;b.addEventListener('click',function(){size=s;qa('.chip',sz).forEach(function(x){x.classList.remove('on')});b.classList.add('on');upd();});sz.appendChild(b);});
 function upd(){q('#qv').textContent=bn(qty);var u='checkout.html?id='+p.id+'&size='+encodeURIComponent(size)+'&qty='+qty+'&color='+encodeURIComponent(color);q('#buy').href=u;q('#buy2').href=u;var t='আসসালামু আলাইকুম, আমি অর্ডার করতে চাই:\n'+p.n+'\nসাইজ: '+size+'\nরঙ: '+color+'\nপরিমাণ: '+qty;var w='https://wa.me/'+WA+'?text='+encodeURIComponent(t);q('#wa').href=w;q('#wa2').href=w;}
 q('#qm').addEventListener('click',function(){if(qty>1){qty--;upd();}});q('#qp').addEventListener('click',function(){if(qty<10){qty++;upd();}});
 q('#add').addEventListener('click',function(){var c=get(),f=c.filter(function(x){return x.id===p.id&&x.s===size&&x.c===color})[0];if(f)f.q+=qty;else c.push({id:p.id,s:size,c:color,q:qty});put(c);cartCount();var b=q('#add');var o=b.textContent;b.textContent='✓ যোগ হয়েছে';setTimeout(function(){b.textContent=o},1400);});
 var r3=q('#r3');P.filter(function(x){return x.id!==p.id}).forEach(function(x){var a=document.createElement('a');a.className='card';a.href='product.html?id='+x.id;a.innerHTML='<div class="ph"><img src="assets/img/p'+x.id+'.jpg" alt="'+esc(x.n)+'" loading="lazy" width="600" height="800"><span class="nb">নতুন</span></div><div class="b"><div class="nm">'+esc(x.n)+'</div><div class="pr">'+money(x.p)+'</div><span class="go">বিস্তারিত দেখুন</span></div>';r3.appendChild(a);});
 upd();
}
/* checkout */
if(q('#f')){
 var u=new URLSearchParams(location.search),cp=pid(),cs=u.get('size')||'৫৪',cq=Math.max(1,Math.min(10,+u.get('qty')||1)),cc=u.get('color')||cp.c[0][0];
 var cart=get();if(!u.get('id')&&cart.length){var c0=cart[0];cp=P.filter(function(x){return x.id===c0.id})[0]||cp;cs=c0.s;cq=c0.q;cc=c0.c;}
 q('#si').src='assets/img/p'+cp.id+'.jpg';q('#sn').textContent=cp.n;q('#ss').textContent='সাইজ: '+cs+'  ×  '+bn(cq);
 q('#back').href='product.html?id='+cp.id;
 function ship(){var r=q('input[name=area]:checked');return r?+r.value:80;}
 function tot(){var sub=cp.p*cq,s=ship();q('#sp').textContent=money(sub);q('#st').textContent=money(sub);q('#sd').textContent=money(s);q('#tt').textContent=money(sub+s);return sub+s;}
 qa('input[name=area]').forEach(function(r){r.addEventListener('change',tot)});tot();
 q('#f').addEventListener('submit',function(e){e.preventDefault();var ok=true;['nm','ph','ad'].forEach(function(i){var el=q('#'+i);var v=el.value.trim();var bad=!v||(i==='ph'&&!/^(\+?88)?0?1[3-9]\d{8}$/.test(v.replace(/[\s-]/g,'').replace(/[০-৯]/g,function(d){return B.indexOf(d)})));el.classList.toggle('err',bad);if(bad)ok=false;});
  if(!q('#tm').checked)ok=false;if(!ok){var f=q('.err');f&&f.focus();return;}
  var t=tot();var msg='নতুন অর্ডার\nনাম: '+q('#nm').value+'\nমোবাইল: '+q('#ph').value+'\nঠিকানা: '+q('#ad').value+'\nপণ্য: '+cp.n+' (সাইজ '+cs+', রঙ '+cc+') × '+cq+'\nমোট: ৳'+t+' (ক্যাশ অন ডেলিভারি)';
  q('#owa').href='https://wa.me/'+WA+'?text='+encodeURIComponent(msg);
  q('#f').style.display='none';q('#ok').classList.add('show');window.scrollTo({top:0,behavior:'smooth'});
  put([]);cartCount();
 });
}
cartCount();
})();
