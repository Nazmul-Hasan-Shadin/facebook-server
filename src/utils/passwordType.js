const passwordType = async (page, password) => {
    try {
        await page.waitForSelector('input[name="pass"]');
        await page.type('input[name="pass"]', password, { delay: 30 });
        await page.click('button._54k8._52jh._56bs._56b_._28lf._9cow._56bw._56bu', { delay: 3000 });

        // await Promise.race([
        //    await page.waitForSelector('div[data-sigil="m_login_notice"]', { timeout: 9000 }),
        //    await page.waitForSelector('button._54k8._56bs._26vk._56b_._56bw._56bu', { timeout: 19000 })
        // ]);

        // Handle success here
        console.log("trying to login!");
    } catch (error) {
        // Handle failure or timeout here
        console.log("Login failed or timed out.");
    }
};

module.exports = passwordType;
