const autoScroll = async (page) => {
    // Evaluate the function within the page context
    await page.evaluate(async() => {
        const element = document.querySelector('.xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j.xx8ngbg.xwo3gff.x1oyok0e.x1odjw0f.x1e4zzel.x1n2onr6.xq1qtft');
        
        const observer =  new MutationObserver((mutationsList, observer) => {
            const oldHeight = observer.oldHeight || 0;
            const newHeight = element.scrollHeight;
        
            if (newHeight !== oldHeight) {
                element.scrollTop = element.scrollHeight / 3 ;
                observer.oldHeight = newHeight;
            }
        });
        
        observer.observe(element, { childList: true, subtree: true });
        
        // Initial scroll
        element.scrollTop = element.scrollHeight;
        
        // Scroll every 2 seconds after the initial scroll
        setInterval(() => {
            element.scrollTop = element.scrollHeight;
        }, 2000);

        await new Promise(resolve => {
            setTimeout(resolve, 4000); // Adjust timeout as needed
        });
        

    });
};

module.exports = autoScroll;
