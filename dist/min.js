I=c.createImageData(256,256),I.data.fill(t=256);setInterval(_=>{for(i=++t%7;i<256*256;i+=7)x=i%256-128,y=i/256-128,k=Math.max(Math.max(Math.abs(x-y),Math.abs(x+y))-99,Math.min(Math.abs(x-y),Math.abs(x+y)))%27<20,v=Math.sin(x*Math.cos(t/99)/33-y*Math.sin(t/99)/33+y*Math.cos(t/99)/33+x*Math.sin(t/99)/33)+Math.sin(y/33)+Math.sin(x/20)+Math.sin(Math.hypot(x+99*Math.cos(t/33),y+99*Math.sin(t/33))/20)+22*k,I.data[i*4]=127*k+127*Math.cos(t/30+v),I.data[i*4+1]=127*k+127*Math.cos(t/10+v*2),I.data[i*4+2]=127*k+127*Math.cos(t/13+v*3);createImageBitmap(I).then(I=>{c.resetTransform();c.fillRect(0,0,a.width,a.height);c.setTransform(Math.cos(t/33),Math.sin(t/33)*Math.sin(t/99),0,Math.cos(t/99),a.width/2+Math.sin(t/33)*Math.sign(Math.cos(t/33)*Math.cos(t/99))*128,a.height/2-Math.cos(t/33)*Math.sin(t/99)*Math.sign(Math.cos(t/33)*Math.cos(t/99))*128);c.drawImage(I,-128,-128);c.setTransform(-Math.sin(t/33),Math.cos(t/33)*Math.sin(t/99),0,Math.cos(t/99),a.width/2-Math.cos(t/33)*Math.sign(Math.sin(t/33)*Math.cos(t/99))*128,a.height/2-Math.sin(t/33)*Math.sin(t/99)*Math.sign(Math.sin(t/33)*Math.cos(t/99))*128);c.drawImage(I,-128,-128);c.setTransform(Math.cos(t/33),Math.sin(t/33)*Math.sin(t/99),Math.sin(t/33),-Math.cos(t/33)*Math.sin(t/99),a.width/2,a.height/2+Math.cos(t/99)*Math.sign(Math.sin(t/99))*128);c.drawImage(I,-128,-128)})},33)