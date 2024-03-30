
const autoScroll=async()=>{
  
   
    await  new Promise((resolve,reject)=>{
          let totalHeightThatIDown=0;
          let distance=200;
          const timer=setInterval(()=>{
              // const scrollHeight=document.body.scrollHeight;
              const scrollContainer=document.querySelector('.xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.xx8ngbg.xwo3gff.x1oyok0e.x1odjw0f.x1e4zzel.x1n2onr6.xq1qtft');
              if (!scrollContainer) {
                   console.log('not found scroll container');
                   reject(new Error('Scroll container not found'));
                   return;
              }
              scrollContainer.scrollTop=distance 
               distance +=130
              totalHeightThatIDown += distance
               
           

              if (totalHeightThatIDown >= scrollContainer.scrollHeight) {
                  clearInterval(timer)
                  resolve('scroll done bro');
              }
               
          },Math.random()*3000 + 1000)
      })

 
}

module.exports=autoScroll


// var element=document.querySelector('.xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.xx8ngbg.xwo3gff.x1oyok0e.x1odjw0f.x1e4zzel.x1n2onr6.xq1qtft');
// element.scrollTop = element.scrollHeight

