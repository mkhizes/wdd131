const quotes=[
    "In three words I can sum up everything I've learned about life, It goes on.", 
           "Life is a long lesson in humility", 
           "To live is the rarest thing in the world. Most people exist that is all.",
           "The most important thing is to enjoy your life to be happy it's all that matters.",
           "To succeed in life, you need three things: a wishbone, a backbone and a funnybone.",
           "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
           "Life is a succession of lessons which must be lived to be understood." ,
           "Love the life you live. Live the life you love.",
           "He who has a why to live for can bear almost any how.",
           "Bathande bonke kodwa ungathembi noyedwa, bheka uMdali noMsindisi uJesu Kristu"
     ]
     const usedIndexes=new Set()
     const quoteElement=document.getElementById("quotes")
     
     function generateQuote(){
        if (usedIndexes.size==quotes.length){
            usedIndexes.clear()
        }
        while(true){
            const randomIdx=Math.floor(Math.random()*quotes.length)
           if (usedIndexes.has(randomIdx)) continue

            const quote=quotes[randomIdx]
            quoteElement.innerHTML=quote;
            usedIndexes.add(randomIdx)
            break
        }
    }