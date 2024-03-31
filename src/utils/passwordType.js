
const passwordType=async(page,password)=>{
    await page.waitForSelector('input[name="pass"]')
    await page.type('input[name="pass"]',password, {delay:`${Math.random()*1200 +400}`})
    const loginBtn=  await page.click('button._54k8._52jh._56bs._56b_._28lf._9cow._56bw._56bu',{delay:900})

    
}

module.exports=passwordType