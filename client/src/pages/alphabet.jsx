'use client';
import { useRouter } from 'next/router';
import ContentGrid from '../components/contentGrid';

const AlphabetPage = () => {
  const router = useRouter();
  const { topic } = router.query; // Get the topic from the query parameter

  // Define content based on the topic
  const content = {
    abc: {
      title: 'Learn ABC',
      data: [
        { 
          letter: 'A a', 
          english: 'Apple', 
          hindi: 'सेब', 
          pronunciation: 'एप्पल', 
          hindiMeaning: 'एक फल जो लाल या हरे रंग का होता है', 
          icon: '🍎', 
          bgColor: 'bg-red-100' 
        },
        { 
          letter: 'B b', 
          english: 'Ball', 
          hindi: 'गेंद', 
          pronunciation: 'बॉल', 
          hindiMeaning: 'एक गोल आकार की वस्तु जिसे खेल में उपयोग किया जाता है', 
          icon: '⚽', 
          bgColor: 'bg-blue-100' 
        },
        { 
          letter: 'C c', 
          english: 'Cat', 
          hindi: 'बिल्ली', 
          pronunciation: 'कैट', 
          hindiMeaning: 'एक छोटा पालतू जानवर जो चूहों को पकड़ता है', 
          icon: '🐱', 
          bgColor: 'bg-gray-100' 
        },
        { 
          letter: 'D d', 
          english: 'Dog', 
          hindi: 'कुत्ता', 
          pronunciation: 'डॉग', 
          hindiMeaning: 'एक वफादार पालतू जानवर', 
          icon: '🐶', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          letter: 'E e', 
          english: 'Elephant', 
          hindi: 'हाथी', 
          pronunciation: 'एलिफेंट', 
          hindiMeaning: 'एक बड़ा जानवर जिसकी सूंड होती है', 
          icon: '🐘', 
          bgColor: 'bg-purple-100' 
        },
        { 
          letter: 'F f', 
          english: 'Fish', 
          hindi: 'मछली', 
          pronunciation: 'फिश', 
          hindiMeaning: 'पानी में रहने वाला जीव', 
          icon: '🐟', 
          bgColor: 'bg-indigo-100' 
        },
        { 
          letter: 'G g', 
          english: 'Grapes', 
          hindi: 'अंगूर', 
          pronunciation: 'ग्रेप्स', 
          hindiMeaning: 'छोटे गोल फल जो गुच्छों में लगते हैं', 
          icon: '🍇', 
          bgColor: 'bg-pink-100' 
        },
        { 
          letter: 'H h', 
          english: 'Hat', 
          hindi: 'टोपी', 
          pronunciation: 'हैट', 
          hindiMeaning: 'सिर पर पहनने की वस्तु', 
          icon: '🎩', 
          bgColor: 'bg-green-100' 
        },
        { 
          letter: 'I i', 
          english: 'Ice Cream', 
          hindi: 'आइसक्रीम', 
          pronunciation: 'आइस क्रीम', 
          hindiMeaning: 'एक ठंडी मिठाई', 
          icon: '🍦', 
          bgColor: 'bg-teal-100' 
        },
        { 
          letter: 'J j', 
          english: 'Jug', 
          hindi: 'जग', 
          pronunciation: 'जग', 
          hindiMeaning: 'पानी रखने का बर्तन', 
          icon: '🥛', 
          bgColor: 'bg-orange-100' 
        },
        { 
          letter: 'K k', 
          english: 'Kite', 
          hindi: 'पतंग', 
          pronunciation: 'काइट', 
          hindiMeaning: 'हवा में उड़ने वाला खिलौना', 
          icon: '🪁', 
          bgColor: 'bg-cyan-100' 
        },
        { 
          letter: 'L l', 
          english: 'Lion', 
          hindi: 'शेर', 
          pronunciation: 'लायन', 
          hindiMeaning: 'जंगल का राजा', 
          icon: '🦁', 
          bgColor: 'bg-amber-100' 
        },
        { 
          letter: 'M m', 
          english: 'Monkey', 
          hindi: 'बंदर', 
          pronunciation: 'मंकी', 
          hindiMeaning: 'पेड़ों पर रहने वाला जानवर', 
          icon: '🐒', 
          bgColor: 'bg-lime-100' 
        },
        { 
          letter: 'N n', 
          english: 'Nest', 
          hindi: 'घोंसला', 
          pronunciation: 'नेस्ट', 
          hindiMeaning: 'पक्षियों का घर', 
          icon: '🪹', 
          bgColor: 'bg-emerald-100' 
        },
        { 
          letter: 'O o', 
          english: 'Orange', 
          hindi: 'संतरा', 
          pronunciation: 'ऑरेंज', 
          hindiMeaning: 'एक नारंगी रंग का फल', 
          icon: '🍊', 
          bgColor: 'bg-rose-100' 
        },
        { 
          letter: 'P p', 
          english: 'Parrot', 
          hindi: 'तोता', 
          pronunciation: 'पैरट', 
          hindiMeaning: 'रंग-बिरंगा पक्षी जो बोल सकता है', 
          icon: '🦜', 
          bgColor: 'bg-fuchsia-100' 
        },
        { 
          letter: 'Q q', 
          english: 'Queen', 
          hindi: 'रानी', 
          pronunciation: 'क्वीन', 
          hindiMeaning: 'राजा की पत्नी', 
          icon: '👑', 
          bgColor: 'bg-violet-100' 
        },
        { 
          letter: 'R r', 
          english: 'Rabbit', 
          hindi: 'खरगोश', 
          pronunciation: 'रैबिट', 
          hindiMeaning: 'एक छोटा जानवर जो कूदता है', 
          icon: '🐇', 
          bgColor: 'bg-sky-100' 
        },
        { 
          letter: 'S s', 
          english: 'Sun', 
          hindi: 'सूरज', 
          pronunciation: 'सन', 
          hindiMeaning: 'आकाश में चमकने वाला तारा', 
          icon: '☀️', 
          bgColor: 'bg-amber-100' 
        },
        { 
          letter: 'T t', 
          english: 'Tree', 
          hindi: 'पेड़', 
          pronunciation: 'ट्री', 
          hindiMeaning: 'पृथ्वी पर उगने वाला पौधा', 
          icon: '🌳', 
          bgColor: 'bg-green-100' 
        },
        { 
          letter: 'U u', 
          english: 'Umbrella', 
          hindi: 'छाता', 
          pronunciation: 'अम्ब्रेला', 
          hindiMeaning: 'बारिश से बचने का साधन', 
          icon: '☂️', 
          bgColor: 'bg-blue-100' 
        },
        { 
          letter: 'V v', 
          english: 'Van', 
          hindi: 'वैन', 
          pronunciation: 'वैन', 
          hindiMeaning: 'एक प्रकार की गाड़ी', 
          icon: '🚐', 
          bgColor: 'bg-indigo-100' 
        },
        { 
          letter: 'W w', 
          english: 'Watch', 
          hindi: 'घड़ी', 
          pronunciation: 'वॉच', 
          hindiMeaning: 'समय देखने का यंत्र', 
          icon: '⌚', 
          bgColor: 'bg-gray-100' 
        },
        { 
          letter: 'X x', 
          english: 'Xylophone', 
          hindi: 'जाइलोफोन', 
          pronunciation: 'जाइलोफोन', 
          hindiMeaning: 'एक संगीत वाद्ययंत्र', 
          icon: '🎼', 
          bgColor: 'bg-pink-100' 
        },
        { 
          letter: 'Y y', 
          english: 'Yak', 
          hindi: 'याक', 
          pronunciation: 'याक', 
          hindiMeaning: 'एक प्रकार का जानवर', 
          icon: '🐂', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          letter: 'Z z', 
          english: 'Zebra', 
          hindi: 'ज़ेबरा', 
          pronunciation: 'ज़ेबरा', 
          hindiMeaning: 'धारीदार जानवर', 
          icon: '🦓', 
          bgColor: 'bg-purple-100' 
        },
      ],
    },
    days: {
      title: 'Days Name',
      data: [
        { 
          english: 'Sunday', 
          hindi: 'रविवार', 
          pronunciation: 'सन्डे', 
          hindiMeaning: 'सप्ताह का पहला दिन', 
          icon: '☀️', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'Monday', 
          hindi: 'सोमवार', 
          pronunciation: 'मंडे', 
          hindiMeaning: 'सप्ताह का दूसरा दिन', 
          icon: '🌙', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'Tuesday', 
          hindi: 'मंगलवार', 
          pronunciation: 'ट्यूज़डे', 
          hindiMeaning: 'सप्ताह का तीसरा दिन', 
          icon: '🔥', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'Wednesday', 
          hindi: 'बुधवार', 
          pronunciation: 'वेडनेस्डे', 
          hindiMeaning: 'सप्ताह का चौथा दिन', 
          icon: '🌍', 
          bgColor: 'bg-green-100' 
        },
        { 
          english: 'Thursday', 
          hindi: 'गुरुवार', 
          pronunciation: 'थर्सडे', 
          hindiMeaning: 'सप्ताह का पाँचवा दिन', 
          icon: '🪐', 
          bgColor: 'bg-purple-100' 
        },
        { 
          english: 'Friday', 
          hindi: 'शुक्रवार', 
          pronunciation: 'फ्राइडे', 
          hindiMeaning: 'सप्ताह का छठा दिन', 
          icon: '🌟', 
          bgColor: 'bg-pink-100' 
        },
        { 
          english: 'Saturday', 
          hindi: 'शनिवार', 
          pronunciation: 'सैटरडे', 
          hindiMeaning: 'सप्ताह का सातवाँ दिन', 
          icon: '🪐', 
          bgColor: 'bg-indigo-100' 
        },
      ],
    },
    months: {
      title: 'Months Name',
      data: [
        { 
          english: 'January', 
          hindi: 'जनवरी', 
          pronunciation: 'जनवरी', 
          hindiMeaning: 'साल का पहला महीना', 
          icon: '❄️', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'February', 
          hindi: 'फरवरी', 
          pronunciation: 'फरवरी', 
          hindiMeaning: 'साल का दूसरा महीना', 
          icon: '🌨️', 
          bgColor: 'bg-purple-100' 
        },
        { 
          english: 'March', 
          hindi: 'मार्च', 
          pronunciation: 'मार्च', 
          hindiMeaning: 'साल का तीसरा महीना', 
          icon: '🌸', 
          bgColor: 'bg-pink-100' 
        },
        { 
          english: 'April', 
          hindi: 'अप्रैल', 
          pronunciation: 'अप्रैल', 
          hindiMeaning: 'साल का चौथा महीना', 
          icon: '🌧️', 
          bgColor: 'bg-green-100' 
        },
        { 
          english: 'May', 
          hindi: 'मई', 
          pronunciation: 'मई', 
          hindiMeaning: 'साल का पाँचवा महीना', 
          icon: '🌞', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'June', 
          hindi: 'जून', 
          pronunciation: 'जून', 
          hindiMeaning: 'साल का छठा महीना', 
          icon: '🌤️', 
          bgColor: 'bg-orange-100' 
        },
        { 
          english: 'July', 
          hindi: 'जुलाई', 
          pronunciation: 'जुलाई', 
          hindiMeaning: 'साल का सातवाँ महीना', 
          icon: '🌊', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'August', 
          hindi: 'अगस्त', 
          pronunciation: 'अगस्त', 
          hindiMeaning: 'साल का आठवाँ महीना', 
          icon: '🌻', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'September', 
          hindi: 'सितंबर', 
          pronunciation: 'सितंबर', 
          hindiMeaning: 'साल का नौवाँ महीना', 
          icon: '🍂', 
          bgColor: 'bg-brown-100' 
        },
        { 
          english: 'October', 
          hindi: 'अक्टूबर', 
          pronunciation: 'अक्टूबर', 
          hindiMeaning: 'साल का दसवाँ महीना', 
          icon: '🎃', 
          bgColor: 'bg-orange-100' 
        },
        { 
          english: 'November', 
          hindi: 'नवंबर', 
          pronunciation: 'नवंबर', 
          hindiMeaning: 'साल का ग्यारहवाँ महीना', 
          icon: '🍁', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'December', 
          hindi: 'दिसंबर', 
          pronunciation: 'दिसंबर', 
          hindiMeaning: 'साल का बारहवाँ महीना', 
          icon: '🎄', 
          bgColor: 'bg-green-100' 
        },
      ],
    },
    wildAnimals: {
      title: 'Wild Animals Name',
      data: [
        { 
          english: 'Lion', 
          hindi: 'शेर', 
          pronunciation: 'लायन', 
          hindiMeaning: 'जंगल का राजा', 
          icon: '🦁', 
          bgColor: 'bg-orange-100' 
        },
        { 
          english: 'Tiger', 
          hindi: 'बाघ', 
          pronunciation: 'टाइगर', 
          hindiMeaning: 'धारीदार जंगली जानवर', 
          icon: '🐯', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'Elephant', 
          hindi: 'हाथी', 
          pronunciation: 'एलिफेंट', 
          hindiMeaning: 'बड़े कान और सूंड वाला जानवर', 
          icon: '🐘', 
          bgColor: 'bg-purple-100' 
        },
        { 
          english: 'Giraffe', 
          hindi: 'जिराफ', 
          pronunciation: 'जिराफ', 
          hindiMeaning: 'लंबी गर्दन वाला जानवर', 
          icon: '🦒', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'Zebra', 
          hindi: 'ज़ेबरा', 
          pronunciation: 'ज़ेबरा', 
          hindiMeaning: 'धारीदार जानवर', 
          icon: '🦓', 
          bgColor: 'bg-black-100' 
        },
        { 
          english: 'Leopard', 
          hindi: 'तेंदुआ', 
          pronunciation: 'लेपर्ड', 
          hindiMeaning: 'तेज और फुर्तीला जानवर', 
          icon: '🐆', 
          bgColor: 'bg-orange-200' 
        },
        { 
          english: 'Cheetah', 
          hindi: 'चीता', 
          pronunciation: 'चीता', 
          hindiMeaning: 'दुनिया का सबसे तेज जानवर', 
          icon: '🐆', 
          bgColor: 'bg-yellow-200' 
        },
        { 
          english: 'Rhino', 
          hindi: 'गैंडा', 
          pronunciation: 'राइनो', 
          hindiMeaning: 'सींग वाला जानवर', 
          icon: '🦏', 
          bgColor: 'bg-gray-200' 
        },
        { 
          english: 'Hippopotamus', 
          hindi: 'दरियाई घोड़ा', 
          pronunciation: 'हिप्पोपोटामस', 
          hindiMeaning: 'बड़ा पानी में रहने वाला जानवर', 
          icon: '🦛', 
          bgColor: 'bg-pink-100' 
        },
        { 
          english: 'Gorilla', 
          hindi: 'गोरिल्ला', 
          pronunciation: 'गोरिल्ला', 
          hindiMeaning: 'बड़ा और शक्तिशाली जानवर', 
          icon: '🦍', 
          bgColor: 'bg-brown-100' 
        },
        { 
          english: 'Kangaroo', 
          hindi: 'कंगारू', 
          pronunciation: 'कंगारू', 
          hindiMeaning: 'छलांग लगाने वाला जानवर', 
          icon: '🦘', 
          bgColor: 'bg-orange-100' 
        },
        { 
          english: 'Panda', 
          hindi: 'पांडा', 
          pronunciation: 'पांडा', 
          hindiMeaning: 'काला और सफेद भालू', 
          icon: '🐼', 
          bgColor: 'bg-black-100' 
        },
        { 
          english: 'Wolf', 
          hindi: 'भेड़िया', 
          pronunciation: 'वुल्फ', 
          hindiMeaning: 'जंगली कुत्ते जैसा जानवर', 
          icon: '🐺', 
          bgColor: 'bg-gray-300' 
        },
        { 
          english: 'Fox', 
          hindi: 'लोमड़ी', 
          pronunciation: 'फॉक्स', 
          hindiMeaning: 'चालाक जानवर', 
          icon: '🦊', 
          bgColor: 'bg-orange-300' 
        },
        { 
          english: 'Bear', 
          hindi: 'भालू', 
          pronunciation: 'बेयर', 
          hindiMeaning: 'बड़ा और शक्तिशाली जानवर', 
          icon: '🐻', 
          bgColor: 'bg-brown-200' 
        },
        { 
          english: 'Crocodile', 
          hindi: 'मगरमच्छ', 
          pronunciation: 'क्रोकोडाइल', 
          hindiMeaning: 'पानी में रहने वाला खतरनाक जानवर', 
          icon: '🐊', 
          bgColor: 'bg-green-100' 
        },
        { 
          english: 'Alligator', 
          hindi: 'घड़ियाल', 
          pronunciation: 'ऐलिगेटर', 
          hindiMeaning: 'मगरमच्छ जैसा जानवर', 
          icon: '🐊', 
          bgColor: 'bg-green-200' 
        },
        { 
          english: 'Snake', 
          hindi: 'सांप', 
          pronunciation: 'स्नेक', 
          hindiMeaning: 'रेंगने वाला जहरीला जानवर', 
          icon: '🐍', 
          bgColor: 'bg-green-300' 
        },
        { 
          english: 'Eagle', 
          hindi: 'गरुड़', 
          pronunciation: 'ईगल', 
          hindiMeaning: 'तेज उड़ने वाला पक्षी', 
          icon: '🦅', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'Falcon', 
          hindi: 'बाज', 
          pronunciation: 'फाल्कन', 
          hindiMeaning: 'तेज और शक्तिशाली पक्षी', 
          icon: '🦅', 
          bgColor: 'bg-blue-200' 
        },
      ],
    },
    domesticAnimals: {
      title: 'Domestic Animals Name',
      data: [
        { 
          english: 'Dog', 
          hindi: 'कुत्ता', 
          pronunciation: 'डॉग', 
          hindiMeaning: 'वफादार पालतू जानवर', 
          icon: '🐶', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'Cat', 
          hindi: 'बिल्ली', 
          pronunciation: 'कैट', 
          hindiMeaning: 'छोटा और प्यारा पालतू जानवर', 
          icon: '🐱', 
          bgColor: 'bg-gray-100' 
        },
        { 
          english: 'Cow', 
          hindi: 'गाय', 
          pronunciation: 'काउ', 
          hindiMeaning: 'दूध देने वाला जानवर', 
          icon: '🐮', 
          bgColor: 'bg-white-100' 
        },
        { 
          english: 'Buffalo', 
          hindi: 'भैंस', 
          pronunciation: 'बफैलो', 
          hindiMeaning: 'भारी शरीर वाला दूध देने वाला जानवर', 
          icon: '🐃', 
          bgColor: 'bg-gray-200' 
        },
        { 
          english: 'Goat', 
          hindi: 'बकरी', 
          pronunciation: 'गोट', 
          hindiMeaning: 'छोटा दूध देने वाला जानवर', 
          icon: '🐐', 
          bgColor: 'bg-brown-100' 
        },
        { 
          english: 'Sheep', 
          hindi: 'भेड़', 
          pronunciation: 'शीप', 
          hindiMeaning: 'ऊन देने वाला जानवर', 
          icon: '🐑', 
          bgColor: 'bg-white-200' 
        },
        { 
          english: 'Horse', 
          hindi: 'घोड़ा', 
          pronunciation: 'हॉर्स', 
          hindiMeaning: 'तेज दौड़ने वाला जानवर', 
          icon: '🐴', 
          bgColor: 'bg-brown-200' 
        },
        { 
          english: 'Donkey', 
          hindi: 'गधा', 
          pronunciation: 'डॉन्की', 
          hindiMeaning: 'भार ढोने वाला जानवर', 
          icon: '🐴', 
          bgColor: 'bg-gray-300' 
        },
        { 
          english: 'Pig', 
          hindi: 'सूअर', 
          pronunciation: 'पिग', 
          hindiMeaning: 'गंदगी में रहने वाला जानवर', 
          icon: '🐷', 
          bgColor: 'bg-pink-100' 
        },
        { 
          english: 'Rabbit', 
          hindi: 'खरगोश', 
          pronunciation: 'रैबिट', 
          hindiMeaning: 'छोटा और फुर्तीला जानवर', 
          icon: '🐰', 
          bgColor: 'bg-white-300' 
        },
        { 
          english: 'Duck', 
          hindi: 'बत्तख', 
          pronunciation: 'डक', 
          hindiMeaning: 'पानी में तैरने वाला पक्षी', 
          icon: '🦆', 
          bgColor: 'bg-yellow-200' 
        },
        { 
          english: 'Chicken', 
          hindi: 'मुर्गी', 
          pronunciation: 'चिकन', 
          hindiMeaning: 'अंडे देने वाला पक्षी', 
          icon: '🐔', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'Rooster', 
          hindi: 'मुर्गा', 
          pronunciation: 'रूस्टर', 
          hindiMeaning: 'सुबह बांग देने वाला पक्षी', 
          icon: '🐓', 
          bgColor: 'bg-red-200' 
        },
        { 
          english: 'Turkey', 
          hindi: 'टर्की', 
          pronunciation: 'टर्की', 
          hindiMeaning: 'बड़ा पक्षी', 
          icon: '🦃', 
          bgColor: 'bg-brown-300' 
        },
        { 
          english: 'Goose', 
          hindi: 'हंस', 
          pronunciation: 'गूस', 
          hindiMeaning: 'पानी में तैरने वाला बड़ा पक्षी', 
          icon: '🦢', 
          bgColor: 'bg-white-400' 
        },
        { 
          english: 'Pigeon', 
          hindi: 'कबूतर', 
          pronunciation: 'पिजन', 
          hindiMeaning: 'संदेश ले जाने वाला पक्षी', 
          icon: '🕊️', 
          bgColor: 'bg-gray-400' 
        },
        { 
          english: 'Parrot', 
          hindi: 'तोता', 
          pronunciation: 'पैरट', 
          hindiMeaning: 'रंग-बिरंगा और बोलने वाला पक्षी', 
          icon: '🦜', 
          bgColor: 'bg-green-100' 
        },
        { 
          english: 'Camel', 
          hindi: 'ऊंट', 
          pronunciation: 'कैमल', 
          hindiMeaning: 'रेगिस्तान में चलने वाला जानवर', 
          icon: '🐪', 
          bgColor: 'bg-brown-400' 
        },
        { 
          english: 'Yak', 
          hindi: 'याक', 
          pronunciation: 'याक', 
          hindiMeaning: 'ठंडे इलाकों में रहने वाला जानवर', 
          icon: '🐃', 
          bgColor: 'bg-gray-500' 
        },
        { 
          english: 'Llama', 
          hindi: 'लामा', 
          pronunciation: 'लामा', 
          hindiMeaning: 'ऊन देने वाला जानवर', 
          icon: '🦙', 
          bgColor: 'bg-white-500' 
        },
      ],
    },
    birds: {
      title: 'Birds Name',
      data: [
        { 
          english: 'Sparrow', 
          hindi: 'गौरैया', 
          pronunciation: 'स्पैरो', 
          hindiMeaning: 'छोटा पक्षी', 
          icon: '🐦', 
          bgColor: 'bg-gray-100' 
        },
        { 
          english: 'Peacock', 
          hindi: 'मोर', 
          pronunciation: 'पीकॉक', 
          hindiMeaning: 'राष्ट्रीय पक्षी', 
          icon: '🦚', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'Pigeon', 
          hindi: 'कबूतर', 
          pronunciation: 'पिजन', 
          hindiMeaning: 'संदेश ले जाने वाला पक्षी', 
          icon: '🕊️', 
          bgColor: 'bg-gray-200' 
        },
        { 
          english: 'Crow', 
          hindi: 'कौआ', 
          pronunciation: 'क्रो', 
          hindiMeaning: 'काला पक्षी', 
          icon: '🐦‍⬛', 
          bgColor: 'bg-black-100' 
        },
        { 
          english: 'Eagle', 
          hindi: 'गरुड़', 
          pronunciation: 'ईगल', 
          hindiMeaning: 'तेज उड़ने वाला पक्षी', 
          icon: '🦅', 
          bgColor: 'bg-blue-200' 
        },
        { 
          english: 'Parrot', 
          hindi: 'तोता', 
          pronunciation: 'पैरट', 
          hindiMeaning: 'रंग-बिरंगा पक्षी', 
          icon: '🦜', 
          bgColor: 'bg-green-100' 
        },
        { 
          english: 'Owl', 
          hindi: 'उल्लू', 
          pronunciation: 'ओल', 
          hindiMeaning: 'रात में देखने वाला पक्षी', 
          icon: '🦉', 
          bgColor: 'bg-brown-100' 
        },
        { 
          english: 'Kingfisher', 
          hindi: 'रामचिरैया', 
          pronunciation: 'किंगफिशर', 
          hindiMeaning: 'मछली पकड़ने वाला पक्षी', 
          icon: '🐦', 
          bgColor: 'bg-blue-300' 
        },
        { 
          english: 'Swan', 
          hindi: 'हंस', 
          pronunciation: 'स्वान', 
          hindiMeaning: 'सफेद पक्षी', 
          icon: '🦢', 
          bgColor: 'bg-white-100' 
        },
        { 
          english: 'Duck', 
          hindi: 'बत्तख', 
          pronunciation: 'डक', 
          hindiMeaning: 'पानी में तैरने वाला पक्षी', 
          icon: '🦆', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'Crane', 
          hindi: 'सारस', 
          pronunciation: 'क्रेन', 
          hindiMeaning: 'लंबी गर्दन वाला पक्षी', 
          icon: '🐦', 
          bgColor: 'bg-gray-300' 
        },
        { 
          english: 'Flamingo', 
          hindi: 'राजहंस', 
          pronunciation: 'फ्लेमिंगो', 
          hindiMeaning: 'गुलाबी पक्षी', 
          icon: '🦩', 
          bgColor: 'bg-pink-100' 
        },
        { 
          english: 'Vulture', 
          hindi: 'गिद्ध', 
          pronunciation: 'वल्चर', 
          hindiMeaning: 'मृत जानवर खाने वाला पक्षी', 
          icon: '🦅', 
          bgColor: 'bg-brown-200' 
        },
        { 
          english: 'Woodpecker', 
          hindi: 'कठफोड़वा', 
          pronunciation: 'वुडपेकर', 
          hindiMeaning: 'पेड़ों पर चोंच मारने वाला पक्षी', 
          icon: '🐦', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'Robin', 
          hindi: 'रॉबिन', 
          pronunciation: 'रॉबिन', 
          hindiMeaning: 'छोटा लाल पक्षी', 
          icon: '🐦', 
          bgColor: 'bg-red-200' 
        },
        { 
          english: 'Seagull', 
          hindi: 'समुद्री पक्षी', 
          pronunciation: 'सीगल', 
          hindiMeaning: 'समुद्र के किनारे रहने वाला पक्षी', 
          icon: '🐦', 
          bgColor: 'bg-blue-400' 
        },
        { 
          english: 'Penguin', 
          hindi: 'पेंगुइन', 
          pronunciation: 'पेंगुइन', 
          hindiMeaning: 'ठंडे इलाकों में रहने वाला पक्षी', 
          icon: '🐧', 
          bgColor: 'bg-black-200' 
        },
        { 
          english: 'Hummingbird', 
          hindi: 'गुंजन पक्षी', 
          pronunciation: 'हमिंगबर्ड', 
          hindiMeaning: 'छोटा और तेज उड़ने वाला पक्षी', 
          icon: '🐦', 
          bgColor: 'bg-green-200' 
        },
        { 
          english: 'Ostrich', 
          hindi: 'शुतुरमुर्ग', 
          pronunciation: 'ऑस्ट्रिच', 
          hindiMeaning: 'दुनिया का सबसे बड़ा पक्षी', 
          icon: '🐦', 
          bgColor: 'bg-brown-300' 
        },
        { 
          english: 'Kite', 
          hindi: 'चील', 
          pronunciation: 'काइट', 
          hindiMeaning: 'मांस खाने वाला पक्षी', 
          icon: '🦅', 
          bgColor: 'bg-gray-400' 
        },
      ],
    },
    flowers: {
      title: 'Flowers Name',
      data: [
        { 
          english: 'Rose', 
          hindi: 'गुलाब', 
          pronunciation: 'रोज़', 
          hindiMeaning: 'सुगंधित फूल', 
          icon: '🌹', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'Lotus', 
          hindi: 'कमल', 
          pronunciation: 'लोटस', 
          hindiMeaning: 'पवित्र फूल', 
          icon: '🌸', 
          bgColor: 'bg-pink-100' 
        },
        { 
          english: 'Sunflower', 
          hindi: 'सूरजमुखी', 
          pronunciation: 'सनफ्लावर', 
          hindiMeaning: 'सूरज की तरह चमकने वाला फूल', 
          icon: '🌻', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'Jasmine', 
          hindi: 'चमेली', 
          pronunciation: 'जैस्मिन', 
          hindiMeaning: 'सुगंधित फूल', 
          icon: '🌸', 
          bgColor: 'bg-white-100' 
        },
        { 
          english: 'Marigold', 
          hindi: 'गेंदा', 
          pronunciation: 'मैरीगोल्ड', 
          hindiMeaning: 'पूजा में उपयोग होने वाला फूल', 
          icon: '🌼', 
          bgColor: 'bg-orange-100' 
        },
        { 
          english: 'Hibiscus', 
          hindi: 'गुड़हल', 
          pronunciation: 'हिबिस्कस', 
          hindiMeaning: 'बड़ा लाल फूल', 
          icon: '🌺', 
          bgColor: 'bg-red-200' 
        },
        { 
          english: 'Tulip', 
          hindi: 'ट्यूलिप', 
          pronunciation: 'ट्यूलिप', 
          hindiMeaning: 'सुंदर रंगीन फूल', 
          icon: '🌷', 
          bgColor: 'bg-pink-200' 
        },
        { 
          english: 'Daisy', 
          hindi: 'डेज़ी', 
          pronunciation: 'डेज़ी', 
          hindiMeaning: 'छोटा सफेद फूल', 
          icon: '🌼', 
          bgColor: 'bg-white-200' 
        },
        { 
          english: 'Lily', 
          hindi: 'लिली', 
          pronunciation: 'लिली', 
          hindiMeaning: 'सुगंधित फूल', 
          icon: '🌸', 
          bgColor: 'bg-purple-100' 
        },
        { 
          english: 'Orchid', 
          hindi: 'ऑर्किड', 
          pronunciation: 'ऑर्किड', 
          hindiMeaning: 'सुंदर और दुर्लभ फूल', 
          icon: '🌸', 
          bgColor: 'bg-pink-300' 
        },
        { 
          english: 'Lavender', 
          hindi: 'लैवेंडर', 
          pronunciation: 'लैवेंडर', 
          hindiMeaning: 'सुगंधित बैंगनी फूल', 
          icon: '🌸', 
          bgColor: 'bg-purple-200' 
        },
        { 
          english: 'Daffodil', 
          hindi: 'डैफोडिल', 
          pronunciation: 'डैफोडिल', 
          hindiMeaning: 'पीला फूल', 
          icon: '🌼', 
          bgColor: 'bg-yellow-200' 
        },
        { 
          english: 'Poppy', 
          hindi: 'पॉपी', 
          pronunciation: 'पॉपी', 
          hindiMeaning: 'लाल फूल', 
          icon: '🌸', 
          bgColor: 'bg-red-300' 
        },
        { 
          english: 'Dahlia', 
          hindi: 'डहलिया', 
          pronunciation: 'डहलिया', 
          hindiMeaning: 'बड़ा रंगीन फूल', 
          icon: '🌸', 
          bgColor: 'bg-pink-400' 
        },
        { 
          english: 'Iris', 
          hindi: 'आइरिस', 
          pronunciation: 'आइरिस', 
          hindiMeaning: 'रंगीन फूल', 
          icon: '🌸', 
          bgColor: 'bg-purple-300' 
        },
        { 
          english: 'Carnation', 
          hindi: 'कार्नेशन', 
          pronunciation: 'कार्नेशन', 
          hindiMeaning: 'सुगंधित फूल', 
          icon: '🌸', 
          bgColor: 'bg-pink-500' 
        },
        { 
          english: 'Chrysanthemum', 
          hindi: 'गुलदाउदी', 
          pronunciation: 'क्रिसेंथेमम', 
          hindiMeaning: 'बड़ा रंगीन फूल', 
          icon: '🌸', 
          bgColor: 'bg-yellow-300' 
        },
        { 
          english: 'Bluebell', 
          hindi: 'ब्लूबेल', 
          pronunciation: 'ब्लूबेल', 
          hindiMeaning: 'नीला फूल', 
          icon: '🌸', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'Peony', 
          hindi: 'पिओनी', 
          pronunciation: 'पिओनी', 
          hindiMeaning: 'बड़ा गुलाबी फूल', 
          icon: '🌸', 
          bgColor: 'bg-pink-600' 
        },
        { 
          english: 'Magnolia', 
          hindi: 'मैग्नोलिया', 
          pronunciation: 'मैग्नोलिया', 
          hindiMeaning: 'सुगंधित फूल', 
          icon: '🌸', 
          bgColor: 'bg-white-300' 
        },
      ],
    },
    vegetables: {
      title: 'Vegetables Name',
      data: [
        { 
          english: 'Tomato', 
          hindi: 'टमाटर', 
          pronunciation: 'टमाटर', 
          hindiMeaning: 'लाल सब्जी', 
          icon: '🍅', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'Potato', 
          hindi: 'आलू', 
          pronunciation: 'पोटैटो', 
          hindiMeaning: 'भूमिगत सब्जी', 
          icon: '🥔', 
          bgColor: 'bg-brown-100' 
        },
        { 
          english: 'Onion', 
          hindi: 'प्याज', 
          pronunciation: 'ऑनियन', 
          hindiMeaning: 'गोल सब्जी', 
          icon: '🧅', 
          bgColor: 'bg-purple-100' 
        },
        { 
          english: 'Carrot', 
          hindi: 'गाजर', 
          pronunciation: 'कैरट', 
          hindiMeaning: 'नारंगी सब्जी', 
          icon: '🥕', 
          bgColor: 'bg-orange-100' 
        },
        { 
          english: 'Cabbage', 
          hindi: 'पत्ता गोभी', 
          pronunciation: 'कैबेज', 
          hindiMeaning: 'हरी पत्तेदार सब्जी', 
          icon: '🥬', 
          bgColor: 'bg-green-100' 
        },
        { 
          english: 'Ladyfinger', 
          hindi: 'भिंडी', 
          pronunciation: 'लेडीफिंगर', 
          hindiMeaning: 'हरी लंबी सब्जी', 
          icon: '🥬', 
          bgColor: 'bg-green-400' 
        },
        { 
          english: 'Peas', 
          hindi: 'मटर', 
          pronunciation: 'पीज़', 
          hindiMeaning: 'छोटे हरे दाने', 
          icon: '🫛', 
          bgColor: 'bg-green-500' 
        },
        { 
          english: 'Corn', 
          hindi: 'मक्का', 
          pronunciation: 'कॉर्न', 
          hindiMeaning: 'पीले दाने वाली सब्जी', 
          icon: '🌽', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'Broccoli', 
          hindi: 'ब्रोकली', 
          pronunciation: 'ब्रोकली', 
          hindiMeaning: 'हरी फूल वाली सब्जी', 
          icon: '🥦', 
          bgColor: 'bg-green-600' 
        },
        { 
          english: 'Bell Pepper', 
          hindi: 'शिमला मिर्च', 
          pronunciation: 'बेल पेपर', 
          hindiMeaning: 'रंगीन मिर्च', 
          icon: '🫑', 
          bgColor: 'bg-red-300' 
        },
        { 
          english: 'Zucchini', 
          hindi: 'ज़ुकीनी', 
          pronunciation: 'ज़ुकीनी', 
          hindiMeaning: 'हरी लंबी सब्जी', 
          icon: '🥒', 
          bgColor: 'bg-green-700' 
        },
        { 
          english: 'Garlic', 
          hindi: 'लहसुन', 
          pronunciation: 'गार्लिक', 
          hindiMeaning: 'सफेद छोटे लौंग', 
          icon: '🧄', 
          bgColor: 'bg-white-300' 
        },
        { 
          english: 'Ginger', 
          hindi: 'अदरक', 
          pronunciation: 'जिंजर', 
          hindiMeaning: 'मसालेदार जड़', 
          icon: '🫚', 
          bgColor: 'bg-brown-100' 
        },
        { 
          english: 'Sweet Potato', 
          hindi: 'शकरकंद', 
          pronunciation: 'स्वीट पोटैटो', 
          hindiMeaning: 'मीठा आलू', 
          icon: '🍠', 
          bgColor: 'bg-orange-300' 
        },
        { 
          english: 'Turnip', 
          hindi: 'शलजम', 
          pronunciation: 'टर्निप', 
          hindiMeaning: 'सफेद जड़ वाली सब्जी', 
          icon: '🥕', 
          bgColor: 'bg-white-400' 
        },
      ],
    },
    colors: {
      title: 'Colors Name',
      data: [
        { 
          english: 'Red', 
          hindi: 'लाल', 
          pronunciation: 'रेड', 
          hindiMeaning: 'लाल रंग', 
          icon: '🔴', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'Blue', 
          hindi: 'नीला', 
          pronunciation: 'ब्लू', 
          hindiMeaning: 'नीला रंग', 
          icon: '🔵', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'Green', 
          hindi: 'हरा', 
          pronunciation: 'ग्रीन', 
          hindiMeaning: 'हरा रंग', 
          icon: '🟢', 
          bgColor: 'bg-green-100' 
        },
        { 
          english: 'Yellow', 
          hindi: 'पीला', 
          pronunciation: 'येलो', 
          hindiMeaning: 'पीला रंग', 
          icon: '🟡', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'Orange', 
          hindi: 'नारंगी', 
          pronunciation: 'ऑरेंज', 
          hindiMeaning: 'नारंगी रंग', 
          icon: '🟠', 
          bgColor: 'bg-orange-100' 
        },
        { 
          english: 'Purple', 
          hindi: 'बैंगनी', 
          pronunciation: 'पर्पल', 
          hindiMeaning: 'बैंगनी रंग', 
          icon: '🟣', 
          bgColor: 'bg-purple-100' 
        },
        { 
          english: 'Pink', 
          hindi: 'गुलाबी', 
          pronunciation: 'पिंक', 
          hindiMeaning: 'गुलाबी रंग', 
          icon: '🌸', 
          bgColor: 'bg-pink-100' 
        },
        { 
          english: 'Brown', 
          hindi: 'भूरा', 
          pronunciation: 'ब्राउन', 
          hindiMeaning: 'भूरा रंग', 
          icon: '🟤', 
          bgColor: 'bg-brown-100' 
        },
        { 
          english: 'Black', 
          hindi: 'काला', 
          pronunciation: 'ब्लैक', 
          hindiMeaning: 'काला रंग', 
          icon: '⚫', 
          bgColor: 'bg-black-100' 
        },
        { 
          english: 'White', 
          hindi: 'सफेद', 
          pronunciation: 'व्हाइट', 
          hindiMeaning: 'सफेद रंग', 
          icon: '⚪', 
          bgColor: 'bg-white-100' 
        },
        { 
          english: 'Gray', 
          hindi: 'स्लेटी', 
          pronunciation: 'ग्रे', 
          hindiMeaning: 'स्लेटी रंग', 
          icon: '⚪', 
          bgColor: 'bg-gray-100' 
        },
        { 
          english: 'Violet', 
          hindi: 'वायलेट', 
          pronunciation: 'वायलेट', 
          hindiMeaning: 'बैंगनी रंग', 
          icon: '🟣', 
          bgColor: 'bg-purple-200' 
        },
        { 
          english: 'Indigo', 
          hindi: 'इंडिगो', 
          pronunciation: 'इंडिगो', 
          hindiMeaning: 'गहरा नीला रंग', 
          icon: '🔵', 
          bgColor: 'bg-blue-200' 
        },
        { 
          english: 'Turquoise', 
          hindi: 'फ़िरोज़ा', 
          pronunciation: 'टर्कोइज़', 
          hindiMeaning: 'हल्का नीला-हरा रंग', 
          icon: '🟢', 
          bgColor: 'bg-blue-300' 
        },
        { 
          english: 'Gold', 
          hindi: 'सोना', 
          pronunciation: 'गोल्ड', 
          hindiMeaning: 'सुनहरा रंग', 
          icon: '🌟', 
          bgColor: 'bg-yellow-200' 
        },
        { 
          english: 'Silver', 
          hindi: 'चांदी', 
          pronunciation: 'सिल्वर', 
          hindiMeaning: 'चांदी जैसा रंग', 
          icon: '✨', 
          bgColor: 'bg-gray-200' 
        },
        { 
          english: 'Maroon', 
          hindi: 'मैरून', 
          pronunciation: 'मैरून', 
          hindiMeaning: 'गहरा लाल रंग', 
          icon: '🟤', 
          bgColor: 'bg-red-200' 
        },
        { 
          english: 'Cyan', 
          hindi: 'सायन', 
          pronunciation: 'सायन', 
          hindiMeaning: 'हल्का नीला रंग', 
          icon: '🔵', 
          bgColor: 'bg-blue-400' 
        },
        { 
          english: 'Magenta', 
          hindi: 'मैजेंटा', 
          pronunciation: 'मैजेंटा', 
          hindiMeaning: 'गहरा गुलाबी रंग', 
          icon: '🌸', 
          bgColor: 'bg-pink-200' 
        },
        { 
          english: 'Beige', 
          hindi: 'बेज', 
          pronunciation: 'बेज', 
          hindiMeaning: 'हल्का भूरा रंग', 
          icon: '🟤', 
          bgColor: 'bg-brown-200' 
        },
      ],
    },
    bodyParts: {
      title: 'Body Parts Name',
      data: [
        { 
          english: 'Head', 
          hindi: 'सिर', 
          pronunciation: 'हेड', 
          hindiMeaning: 'शरीर का ऊपरी हिस्सा', 
          icon: '👤', 
          bgColor: 'bg-gray-100' 
        },
        { 
          english: 'Eye', 
          hindi: 'आंख', 
          pronunciation: 'आई', 
          hindiMeaning: 'देखने का अंग', 
          icon: '👁️', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'Nose', 
          hindi: 'नाक', 
          pronunciation: 'नोज़', 
          hindiMeaning: 'सूंघने का अंग', 
          icon: '👃', 
          bgColor: 'bg-pink-100' 
        },
        { 
          english: 'Mouth', 
          hindi: 'मुंह', 
          pronunciation: 'माउथ', 
          hindiMeaning: 'बोलने और खाने का अंग', 
          icon: '👄', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'Ear', 
          hindi: 'कान', 
          pronunciation: 'ईयर', 
          hindiMeaning: 'सुनने का अंग', 
          icon: '👂', 
          bgColor: 'bg-brown-100' 
        },
        { 
          english: 'Hand', 
          hindi: 'हाथ', 
          pronunciation: 'हैंड', 
          hindiMeaning: 'काम करने का अंग', 
          icon: '✋', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'Leg', 
          hindi: 'पैर', 
          pronunciation: 'लेग', 
          hindiMeaning: 'चलने का अंग', 
          icon: '🦵', 
          bgColor: 'bg-orange-100' 
        },
        { 
          english: 'Foot', 
          hindi: 'पैर का तलवा', 
          pronunciation: 'फुट', 
          hindiMeaning: 'चलने का निचला हिस्सा', 
          icon: '🦶', 
          bgColor: 'bg-brown-200' 
        },
        { 
          english: 'Arm', 
          hindi: 'बांह', 
          pronunciation: 'आर्म', 
          hindiMeaning: 'हाथ का ऊपरी हिस्सा', 
          icon: '💪', 
          bgColor: 'bg-red-200' 
        },
        { 
          english: 'Finger', 
          hindi: 'उंगली', 
          pronunciation: 'फिंगर', 
          hindiMeaning: 'हाथ का छोटा हिस्सा', 
          icon: '👆', 
          bgColor: 'bg-yellow-200' 
        },
        { 
          english: 'Toe', 
          hindi: 'पैर की उंगली', 
          pronunciation: 'टो', 
          hindiMeaning: 'पैर का छोटा हिस्सा', 
          icon: '🦶', 
          bgColor: 'bg-brown-300' 
        },
        { 
          english: 'Stomach', 
          hindi: 'पेट', 
          pronunciation: 'स्टमक', 
          hindiMeaning: 'भोजन पचाने का अंग', 
          icon: '🤰', 
          bgColor: 'bg-pink-200' 
        },
        { 
          english: 'Back', 
          hindi: 'पीठ', 
          pronunciation: 'बैक', 
          hindiMeaning: 'शरीर का पिछला हिस्सा', 
          icon: '👤', 
          bgColor: 'bg-gray-200' 
        },
        { 
          english: 'Chest', 
          hindi: 'छाती', 
          pronunciation: 'चेस्ट', 
          hindiMeaning: 'शरीर का सामने का हिस्सा', 
          icon: '👤', 
          bgColor: 'bg-red-300' 
        },
        { 
          english: 'Neck', 
          hindi: 'गर्दन', 
          pronunciation: 'नेक', 
          hindiMeaning: 'सिर और धड़ को जोड़ने वाला हिस्सा', 
          icon: '👤', 
          bgColor: 'bg-gray-300' 
        },
        { 
          english: 'Shoulder', 
          hindi: 'कंधा', 
          pronunciation: 'शोल्डर', 
          hindiMeaning: 'हाथ और धड़ को जोड़ने वाला हिस्सा', 
          icon: '👤', 
          bgColor: 'bg-blue-200' 
        },
        { 
          english: 'Knee', 
          hindi: 'घुटना', 
          pronunciation: 'नी', 
          hindiMeaning: 'पैर और जांघ को जोड़ने वाला हिस्सा', 
          icon: '🦵', 
          bgColor: 'bg-brown-400' 
        },
        { 
          english: 'Elbow', 
          hindi: 'कोहनी', 
          pronunciation: 'एल्बो', 
          hindiMeaning: 'हाथ और बांह को जोड़ने वाला हिस्सा', 
          icon: '💪', 
          bgColor: 'bg-red-400' 
        },
        { 
          english: 'Hair', 
          hindi: 'बाल', 
          pronunciation: 'हेयर', 
          hindiMeaning: 'सिर के ऊपर के बाल', 
          icon: '👤', 
          bgColor: 'bg-black-100' 
        },
        { 
          english: 'Teeth', 
          hindi: 'दांत', 
          pronunciation: 'टीथ', 
          hindiMeaning: 'खाना चबाने का अंग', 
          icon: '🦷', 
          bgColor: 'bg-white-100' 
        },
      ],
    },
    transports: {
      title: 'Transports Name',
      data: [
        { 
          english: 'Car', 
          hindi: 'कार', 
          pronunciation: 'कार', 
          hindiMeaning: 'छोटा वाहन', 
          icon: '🚗', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'Bus', 
          hindi: 'बस', 
          pronunciation: 'बस', 
          hindiMeaning: 'बड़ा वाहन', 
          icon: '🚌', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'Train', 
          hindi: 'ट्रेन', 
          pronunciation: 'ट्रेन', 
          hindiMeaning: 'रेलगाड़ी', 
          icon: '🚆', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'Bicycle', 
          hindi: 'साइकिल', 
          pronunciation: 'साइकिल', 
          hindiMeaning: 'पैडल से चलने वाला वाहन', 
          icon: '🚲', 
          bgColor: 'bg-green-100' 
        },
        { 
          english: 'Motorcycle', 
          hindi: 'मोटरसाइकिल', 
          pronunciation: 'मोटरसाइकिल', 
          hindiMeaning: 'दोपहिया वाहन', 
          icon: '🏍️', 
          bgColor: 'bg-orange-100' 
        },
        { 
          english: 'Airplane', 
          hindi: 'हवाई जहाज', 
          pronunciation: 'एयरप्लेन', 
          hindiMeaning: 'हवा में उड़ने वाला वाहन', 
          icon: '✈️', 
          bgColor: 'bg-blue-200' 
        },
        { 
          english: 'Ship', 
          hindi: 'जहाज', 
          pronunciation: 'शिप', 
          hindiMeaning: 'पानी में चलने वाला वाहन', 
          icon: '🚢', 
          bgColor: 'bg-blue-300' 
        },
        { 
          english: 'Truck', 
          hindi: 'ट्रक', 
          pronunciation: 'ट्रक', 
          hindiMeaning: 'भारी सामान ले जाने वाला वाहन', 
          icon: '🚚', 
          bgColor: 'bg-yellow-200' 
        },
        { 
          english: 'Boat', 
          hindi: 'नाव', 
          pronunciation: 'बोट', 
          hindiMeaning: 'छोटा पानी का वाहन', 
          icon: '🛶', 
          bgColor: 'bg-blue-400' 
        },
        { 
          english: 'Helicopter', 
          hindi: 'हेलीकॉप्टर', 
          pronunciation: 'हेलीकॉप्टर', 
          hindiMeaning: 'हवा में उड़ने वाला छोटा वाहन', 
          icon: '🚁', 
          bgColor: 'bg-gray-100' 
        },
        { 
          english: 'Scooter', 
          hindi: 'स्कूटर', 
          pronunciation: 'स्कूटर', 
          hindiMeaning: 'छोटा दोपहिया वाहन', 
          icon: '🛵', 
          bgColor: 'bg-green-200' 
        },
        { 
          english: 'Rickshaw', 
          hindi: 'रिक्शा', 
          pronunciation: 'रिक्शा', 
          hindiMeaning: 'तीन पहियों वाला वाहन', 
          icon: '🚲', 
          bgColor: 'bg-yellow-300' 
        },
        { 
          english: 'Subway', 
          hindi: 'मेट्रो', 
          pronunciation: 'सबवे', 
          hindiMeaning: 'भूमिगत रेलगाड़ी', 
          icon: '🚇', 
          bgColor: 'bg-red-200' 
        },
        { 
          english: 'Taxi', 
          hindi: 'टैक्सी', 
          pronunciation: 'टैक्सी', 
          hindiMeaning: 'भाड़े पर चलने वाली कार', 
          icon: '🚕', 
          bgColor: 'bg-blue-500' 
        },
        { 
          english: 'Van', 
          hindi: 'वैन', 
          pronunciation: 'वैन', 
          hindiMeaning: 'छोटा मालवाहक वाहन', 
          icon: '🚐', 
          bgColor: 'bg-gray-200' 
        },
        { 
          english: 'Tram', 
          hindi: 'ट्राम', 
          pronunciation: 'ट्राम', 
          hindiMeaning: 'शहरी रेलगाड़ी', 
          icon: '🚊', 
          bgColor: 'bg-red-300' 
        },
        { 
          english: 'Bullet Train', 
          hindi: 'बुलेट ट्रेन', 
          pronunciation: 'बुलेट ट्रेन', 
          hindiMeaning: 'तेज रेलगाड़ी', 
          icon: '🚄', 
          bgColor: 'bg-blue-600' 
        },
        { 
          english: 'Ambulance', 
          hindi: 'एम्बुलेंस', 
          pronunciation: 'एम्बुलेंस', 
          hindiMeaning: 'रोगी वाहन', 
          icon: '🚑', 
          bgColor: 'bg-red-400' 
        },
        { 
          english: 'Fire Truck', 
          hindi: 'फायर ट्रक', 
          pronunciation: 'फायर ट्रक', 
          hindiMeaning: 'आग बुझाने वाला वाहन', 
          icon: '🚒', 
          bgColor: 'bg-red-500' 
        },
        { 
          english: 'Police Car', 
          hindi: 'पुलिस कार', 
          pronunciation: 'पुलिस कार', 
          hindiMeaning: 'पुलिस का वाहन', 
          icon: '🚓', 
          bgColor: 'bg-blue-700' 
        },
        { 
          english: 'Tractor', 
          hindi: 'ट्रैक्टर', 
          pronunciation: 'ट्रैक्टर', 
          hindiMeaning: 'खेतों में काम करने वाला वाहन', 
          icon: '🚜', 
          bgColor: 'bg-green-300' 
        },
        { 
          english: 'Rocket', 
          hindi: 'रॉकेट', 
          pronunciation: 'रॉकेट', 
          hindiMeaning: 'अंतरिक्ष में जाने वाला वाहन', 
          icon: '🚀', 
          bgColor: 'bg-gray-300' 
        },
      ],
    },
    shapes: {
      title: 'Shapes Name',
      data: [
        { 
          english: 'Circle', 
          hindi: 'वृत्त', 
          pronunciation: 'सर्कल', 
          hindiMeaning: 'गोल आकार', 
          icon: '⭕', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'Square', 
          hindi: 'वर्ग', 
          pronunciation: 'स्क्वेयर', 
          hindiMeaning: 'चार समान भुजाओं वाला आकार', 
          icon: '⬛', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'Triangle', 
          hindi: 'त्रिभुज', 
          pronunciation: 'ट्रायंगल', 
          hindiMeaning: 'तीन भुजाओं वाला आकार', 
          icon: '🔺', 
          bgColor: 'bg-green-100' 
        },
        { 
          english: 'Rectangle', 
          hindi: 'आयत', 
          pronunciation: 'रेक्टेंगल', 
          hindiMeaning: 'चार भुजाओं वाला आकार', 
          icon: '🟦', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'Oval', 
          hindi: 'अंडाकार', 
          pronunciation: 'ओवल', 
          hindiMeaning: 'लंबा गोल आकार', 
          icon: '🟢', 
          bgColor: 'bg-purple-100' 
        },
        { 
          english: 'Star', 
          hindi: 'तारा', 
          pronunciation: 'स्टार', 
          hindiMeaning: 'तारे जैसा आकार', 
          icon: '⭐', 
          bgColor: 'bg-yellow-200' 
        },
        { 
          english: 'Diamond', 
          hindi: 'हीरा', 
          pronunciation: 'डायमंड', 
          hindiMeaning: 'हीरे जैसा आकार', 
          icon: '♦️', 
          bgColor: 'bg-blue-200' 
        },
        { 
          english: 'Crescent', 
          hindi: 'अर्धचंद्र', 
          pronunciation: 'क्रेसेंट', 
          hindiMeaning: 'चंद्रमा जैसा आकार', 
          icon: '🌙', 
          bgColor: 'bg-gray-100' 
        },
        { 
          english: 'Hexagon', 
          hindi: 'षट्कोण', 
          pronunciation: 'हेक्सागोन', 
          hindiMeaning: 'छह भुजाओं वाला आकार', 
          icon: '⬢', 
          bgColor: 'bg-green-200' 
        },
      ],
    },
    dailyRoutine: {
      title: 'Daily Routine Words',
      data: [
        { 
          english: 'Wake Up', 
          hindi: 'उठना', 
          pronunciation: 'वेक अप', 
          hindiMeaning: 'सुबह उठना', 
          icon: '⏰', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'Brush Teeth', 
          hindi: 'दांत साफ करना', 
          pronunciation: 'ब्रश टीथ', 
          hindiMeaning: 'दांतों की सफाई', 
          icon: '🦷', 
          bgColor: 'bg-white-100' 
        },
        { 
          english: 'Take Bath', 
          hindi: 'नहाना', 
          pronunciation: 'टेक बाथ', 
          hindiMeaning: 'स्नान करना', 
          icon: '🚿', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'Eat Breakfast', 
          hindi: 'नाश्ता करना', 
          pronunciation: 'ईट ब्रेकफास्ट', 
          hindiMeaning: 'सुबह का खाना', 
          icon: '🍳', 
          bgColor: 'bg-orange-100' 
        },
        { 
          english: 'Go to School', 
          hindi: 'स्कूल जाना', 
          pronunciation: 'गो टू स्कूल', 
          hindiMeaning: 'स्कूल जाना', 
          icon: '🏫', 
          bgColor: 'bg-green-100' 
        },
        { 
          english: 'Study', 
          hindi: 'पढ़ाई करना', 
          pronunciation: 'स्टडी', 
          hindiMeaning: 'पढ़ाई करना', 
          icon: '📚', 
          bgColor: 'bg-purple-100' 
        },
        { 
          english: 'Play', 
          hindi: 'खेलना', 
          pronunciation: 'प्ले', 
          hindiMeaning: 'खेलना', 
          icon: '⚽', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'Eat Lunch', 
          hindi: 'दोपहर का खाना', 
          pronunciation: 'ईट लंच', 
          hindiMeaning: 'दोपहर का खाना', 
          icon: '🍱', 
          bgColor: 'bg-yellow-200' 
        },
        { 
          english: 'Take Nap', 
          hindi: 'झपकी लेना', 
          pronunciation: 'टेक नैप', 
          hindiMeaning: 'थोड़ी देर सोना', 
          icon: '😴', 
          bgColor: 'bg-gray-100' 
        },
        { 
          english: 'Do Homework', 
          hindi: 'होमवर्क करना', 
          pronunciation: 'डू होमवर्क', 
          hindiMeaning: 'घर का काम करना', 
          icon: '📝', 
          bgColor: 'bg-blue-200' 
        },
        { 
          english: 'Watch TV', 
          hindi: 'टीवी देखना', 
          pronunciation: 'वॉच टीवी', 
          hindiMeaning: 'टीवी देखना', 
          icon: '📺', 
          bgColor: 'bg-red-200' 
        },
        { 
          english: 'Eat Dinner', 
          hindi: 'रात का खाना', 
          pronunciation: 'ईट डिनर', 
          hindiMeaning: 'रात का खाना', 
          icon: '🍲', 
          bgColor: 'bg-orange-200' 
        },
        { 
          english: 'Brush Teeth', 
          hindi: 'दांत साफ करना', 
          pronunciation: 'ब्रश टीथ', 
          hindiMeaning: 'दांतों की सफाई', 
          icon: '🦷', 
          bgColor: 'bg-white-200' 
        },
        { 
          english: 'Go to Bed', 
          hindi: 'सोने जाना', 
          pronunciation: 'गो टू बेड', 
          hindiMeaning: 'सोने जाना', 
          icon: '🛏️', 
          bgColor: 'bg-gray-200' 
        },
        { 
          english: 'Read Book', 
          hindi: 'किताब पढ़ना', 
          pronunciation: 'रीड बुक', 
          hindiMeaning: 'किताब पढ़ना', 
          icon: '📖', 
          bgColor: 'bg-purple-200' 
        },
        { 
          english: 'Exercise', 
          hindi: 'व्यायाम करना', 
          pronunciation: 'एक्सरसाइज', 
          hindiMeaning: 'शारीरिक व्यायाम', 
          icon: '🏋️', 
          bgColor: 'bg-green-200' 
        },
        { 
          english: 'Meditate', 
          hindi: 'ध्यान करना', 
          pronunciation: 'मेडिटेट', 
          hindiMeaning: 'मन को शांत करना', 
          icon: '🧘', 
          bgColor: 'bg-blue-300' 
        },
        { 
          english: 'Cook Food', 
          hindi: 'खाना बनाना', 
          pronunciation: 'कुक फूड', 
          hindiMeaning: 'खाना पकाना', 
          icon: '🍳', 
          bgColor: 'bg-orange-300' 
        },
        { 
          english: 'Wash Clothes', 
          hindi: 'कपड़े धोना', 
          pronunciation: 'वॉश क्लोद्स', 
          hindiMeaning: 'कपड़े धोना', 
          icon: '🧺', 
          bgColor: 'bg-yellow-300' 
        },
        { 
          english: 'Clean House', 
          hindi: 'घर साफ करना', 
          pronunciation: 'क्लीन हाउस', 
          hindiMeaning: 'घर की सफाई', 
          icon: '🧹', 
          bgColor: 'bg-gray-300' 
        },
        { 
          english: 'Water Plants', 
          hindi: 'पौधों को पानी देना', 
          pronunciation: 'वॉटर प्लांट्स', 
          hindiMeaning: 'पौधों की देखभाल', 
          icon: '🌱', 
          bgColor: 'bg-green-300' 
        },
        { 
          english: 'Feed Pets', 
          hindi: 'पालतू जानवरों को खाना देना', 
          pronunciation: 'फीड पेट्स', 
          hindiMeaning: 'पालतू जानवरों की देखभाल', 
          icon: '🐶', 
          bgColor: 'bg-yellow-400' 
        },
        { 
          english: 'Go for a Walk', 
          hindi: 'टहलने जाना', 
          pronunciation: 'गो फॉर अ वॉक', 
          hindiMeaning: 'सैर करना', 
          icon: '🚶', 
          bgColor: 'bg-blue-400' 
        },
        { 
          english: 'Listen to Music', 
          hindi: 'संगीत सुनना', 
          pronunciation: 'लिसन टू म्यूजिक', 
          hindiMeaning: 'संगीत का आनंद लेना', 
          icon: '🎵', 
          bgColor: 'bg-purple-300' 
        },
        { 
          english: 'Write Diary', 
          hindi: 'डायरी लिखना', 
          pronunciation: 'राइट डायरी', 
          hindiMeaning: 'दैनिक जीवन के बारे में लिखना', 
          icon: '📔', 
          bgColor: 'bg-pink-100' 
        },
        { 
          english: 'Check Emails', 
          hindi: 'ईमेल चेक करना', 
          pronunciation: 'चेक ईमेल्स', 
          hindiMeaning: 'ईमेल पढ़ना और जवाब देना', 
          icon: '📧', 
          bgColor: 'bg-blue-500' 
        },
        { 
          english: 'Attend Meetings', 
          hindi: 'मीटिंग में शामिल होना', 
          pronunciation: 'अटेंड मीटिंग्स', 
          hindiMeaning: 'कार्यालय या स्कूल की मीटिंग', 
          icon: '👥', 
          bgColor: 'bg-green-400' 
        },
        { 
          english: 'Take a Shower', 
          hindi: 'शॉवर लेना', 
          pronunciation: 'टेक अ शॉवर', 
          hindiMeaning: 'नहाना', 
          icon: '🚿', 
          bgColor: 'bg-blue-600' 
        },
        { 
          english: 'Pack Lunch', 
          hindi: 'लंच पैक करना', 
          pronunciation: 'पैक लंच', 
          hindiMeaning: 'दोपहर के खाने को तैयार करना', 
          icon: '🍱', 
          bgColor: 'bg-yellow-500' 
        },
        { 
          english: 'Go to Work', 
          hindi: 'काम पर जाना', 
          pronunciation: 'गो टू वर्क', 
          hindiMeaning: 'कार्यस्थल पर जाना', 
          icon: '💼', 
          bgColor: 'bg-gray-400' 
        },
        { 
          english: 'Drive to Office', 
          hindi: 'ऑफिस गाड़ी चलाना', 
          pronunciation: 'ड्राइव टू ऑफिस', 
          hindiMeaning: 'कार्यालय तक गाड़ी चलाना', 
          icon: '🚗', 
          bgColor: 'bg-blue-700' 
        },
        { 
          english: 'Attend Classes', 
          hindi: 'कक्षाओं में शामिल होना', 
          pronunciation: 'अटेंड क्लासेज', 
          hindiMeaning: 'स्कूल या कॉलेज की कक्षाएं', 
          icon: '🎓', 
          bgColor: 'bg-green-500' 
        },
        { 
          english: 'Take Notes', 
          hindi: 'नोट्स लेना', 
          pronunciation: 'टेक नोट्स', 
          hindiMeaning: 'कक्षा या मीटिंग में नोट्स लिखना', 
          icon: '📝', 
          bgColor: 'bg-purple-400' 
        },
        { 
          english: 'Do Laundry', 
          hindi: 'कपड़े धोना', 
          pronunciation: 'डू लॉन्ड्री', 
          hindiMeaning: 'कपड़े धोने का काम', 
          icon: '🧺', 
          bgColor: 'bg-yellow-600' 
        },
        { 
          english: 'Iron Clothes', 
          hindi: 'कपड़े इस्त्री करना', 
          pronunciation: 'आयरन क्लोद्स', 
          hindiMeaning: 'कपड़ों को प्रेस करना', 
          icon: '👔', 
          bgColor: 'bg-blue-800' 
        },
        { 
          english: 'Go Shopping', 
          hindi: 'खरीदारी करना', 
          pronunciation: 'गो शॉपिंग', 
          hindiMeaning: 'सामान खरीदने जाना', 
          icon: '🛍️', 
          bgColor: 'bg-pink-200' 
        },
        { 
          english: 'Visit Friends', 
          hindi: 'दोस्तों से मिलना', 
          pronunciation: 'विजिट फ्रेंड्स', 
          hindiMeaning: 'दोस्तों के साथ समय बिताना', 
          icon: '👫', 
          bgColor: 'bg-green-600' 
        },
        { 
          english: 'Watch a Movie', 
          hindi: 'फिल्म देखना', 
          pronunciation: 'वॉच अ मूवी', 
          hindiMeaning: 'फिल्म का आनंद लेना', 
          icon: '🎬', 
          bgColor: 'bg-red-300' 
        },
        { 
          english: 'Play Games', 
          hindi: 'खेल खेलना', 
          pronunciation: 'प्ले गेम्स', 
          hindiMeaning: 'खेलों का आनंद लेना', 
          icon: '🎮', 
          bgColor: 'bg-blue-900' 
        },
        { 
          english: 'Take a Break', 
          hindi: 'ब्रेक लेना', 
          pronunciation: 'टेक अ ब्रेक', 
          hindiMeaning: 'थोड़ा आराम करना', 
          icon: '☕', 
          bgColor: 'bg-yellow-700' 
        },
        { 
          english: 'Plan the Day', 
          hindi: 'दिन की योजना बनाना', 
          pronunciation: 'प्लान द डे', 
          hindiMeaning: 'दिन के कार्यों की योजना बनाना', 
          icon: '📅', 
          bgColor: 'bg-purple-500' 
        },
        { 
          english: 'Set Alarm', 
          hindi: 'अलार्म सेट करना', 
          pronunciation: 'सेट अलार्म', 
          hindiMeaning: 'अगले दिन के लिए अलार्म लगाना', 
          icon: '⏰', 
          bgColor: 'bg-red-400' 
        },
        { 
          english: 'Pray', 
          hindi: 'प्रार्थना करना', 
          pronunciation: 'प्रे', 
          hindiMeaning: 'भगवान से प्रार्थना करना', 
          icon: '🙏', 
          bgColor: 'bg-green-700' 
        },
        { 
          english: 'Call Family', 
          hindi: 'परिवार को फोन करना', 
          pronunciation: 'कॉल फैमिली', 
          hindiMeaning: 'परिवार से बात करना', 
          icon: '📞', 
          bgColor: 'bg-blue-1000' 
        },
        { 
          english: 'Read News', 
          hindi: 'समाचार पढ़ना', 
          pronunciation: 'रीड न्यूज़', 
          hindiMeaning: 'दैनिक समाचार पढ़ना', 
          icon: '📰', 
          bgColor: 'bg-yellow-800' 
        },
        { 
          english: 'Go for a Run', 
          hindi: 'दौड़ने जाना', 
          pronunciation: 'गो फॉर अ रन', 
          hindiMeaning: 'शारीरिक व्यायाम के लिए दौड़ना', 
          icon: '🏃', 
          bgColor: 'bg-red-500' 
        },
        { 
          english: 'Practice Yoga', 
          hindi: 'योग करना', 
          pronunciation: 'प्रैक्टिस योग', 
          hindiMeaning: 'शारीरिक और मानसिक स्वास्थ्य के लिए योग', 
          icon: '🧘', 
          bgColor: 'bg-green-800' 
        },
        { 
          english: 'Take Medicine', 
          hindi: 'दवा लेना', 
          pronunciation: 'टेक मेडिसिन', 
          hindiMeaning: 'दवाई का सेवन करना', 
          icon: '💊', 
          bgColor: 'bg-blue-1100' 
        },
        { 
          english: 'Check Schedule', 
          hindi: 'समय सारणी जांचना', 
          pronunciation: 'चेक शेड्यूल', 
          hindiMeaning: 'दिन की योजना की समीक्षा करना', 
          icon: '📅', 
          bgColor: 'bg-purple-600' 
        },
        { 
          english: 'Relax', 
          hindi: 'आराम करना', 
          pronunciation: 'रिलैक्स', 
          hindiMeaning: 'शांत होकर आराम करना', 
          icon: '😌', 
          bgColor: 'bg-yellow-900' 
        },
      ],
    },
    familyMembers: {
      title: 'Family Members Name',
      data: [
        { 
          english: 'Father', 
          hindi: 'पिता', 
          pronunciation: 'फादर', 
          hindiMeaning: 'परिवार का मुखिया', 
          icon: '👨', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'Mother', 
          hindi: 'माता', 
          pronunciation: 'मदर', 
          hindiMeaning: 'परिवार की मुखिया', 
          icon: '👩', 
          bgColor: 'bg-pink-100' 
        },
        { 
          english: 'Brother', 
          hindi: 'भाई', 
          pronunciation: 'ब्रदर', 
          hindiMeaning: 'परिवार का लड़का', 
          icon: '👦', 
          bgColor: 'bg-green-100' 
        },
        { 
          english: 'Sister', 
          hindi: 'बहन', 
          pronunciation: 'सिस्टर', 
          hindiMeaning: 'परिवार की लड़की', 
          icon: '👧', 
          bgColor: 'bg-purple-100' 
        },
        { 
          english: 'Grandfather', 
          hindi: 'दादा', 
          pronunciation: 'ग्रैंडफादर', 
          hindiMeaning: 'पिता के पिता', 
          icon: '👴', 
          bgColor: 'bg-brown-100' 
        },
        { 
          english: 'Grandmother', 
          hindi: 'दादी', 
          pronunciation: 'ग्रैंडमदर', 
          hindiMeaning: 'पिता की माता', 
          icon: '👵', 
          bgColor: 'bg-brown-200' 
        },
        { 
          english: 'Uncle', 
          hindi: 'चाचा', 
          pronunciation: 'अंकल', 
          hindiMeaning: 'पिता का भाई', 
          icon: '👨', 
          bgColor: 'bg-blue-200' 
        },
        { 
          english: 'Aunt', 
          hindi: 'चाची', 
          pronunciation: 'आंट', 
          hindiMeaning: 'पिता की बहन', 
          icon: '👩', 
          bgColor: 'bg-pink-200' 
        },
        { 
          english: 'Cousin', 
          hindi: 'चचेरा भाई/बहन', 
          pronunciation: 'कज़िन', 
          hindiMeaning: 'चाचा/चाची का बच्चा', 
          icon: '👫', 
          bgColor: 'bg-green-200' 
        },
        { 
          english: 'Nephew', 
          hindi: 'भतीजा', 
          pronunciation: 'नेफ्यू', 
          hindiMeaning: 'भाई/बहन का बेटा', 
          icon: '👦', 
          bgColor: 'bg-blue-300' 
        },
        { 
          english: 'Niece', 
          hindi: 'भतीजी', 
          pronunciation: 'नीस', 
          hindiMeaning: 'भाई/बहन की बेटी', 
          icon: '👧', 
          bgColor: 'bg-pink-300' 
        },
        { 
          english: 'Son', 
          hindi: 'बेटा', 
          pronunciation: 'सन', 
          hindiMeaning: 'परिवार का लड़का', 
          icon: '👦', 
          bgColor: 'bg-blue-400' 
        },
        { 
          english: 'Daughter', 
          hindi: 'बेटी', 
          pronunciation: 'डॉटर', 
          hindiMeaning: 'परिवार की लड़की', 
          icon: '👧', 
          bgColor: 'bg-pink-400' 
        },
        { 
          english: 'Husband', 
          hindi: 'पति', 
          pronunciation: 'हसबैंड', 
          hindiMeaning: 'विवाहित पुरुष', 
          icon: '👨', 
          bgColor: 'bg-blue-500' 
        },
        { 
          english: 'Wife', 
          hindi: 'पत्नी', 
          pronunciation: 'वाइफ', 
          hindiMeaning: 'विवाहित महिला', 
          icon: '👩', 
          bgColor: 'bg-pink-500' 
        },
        { 
          english: 'Father-in-law', 
          hindi: 'ससुर', 
          pronunciation: 'फादर-इन-लॉ', 
          hindiMeaning: 'पति/पत्नी के पिता', 
          icon: '👴', 
          bgColor: 'bg-brown-300' 
        },
        { 
          english: 'Mother-in-law', 
          hindi: 'सास', 
          pronunciation: 'मदर-इन-लॉ', 
          hindiMeaning: 'पति/पत्नी की माता', 
          icon: '👵', 
          bgColor: 'bg-brown-400' 
        },
        { 
          english: 'Brother-in-law', 
          hindi: 'जीजा/देवर', 
          pronunciation: 'ब्रदर-इन-लॉ', 
          hindiMeaning: 'पति/पत्नी का भाई', 
          icon: '👨', 
          bgColor: 'bg-blue-600' 
        },
        { 
          english: 'Sister-in-law', 
          hindi: 'ननद/भाभी', 
          pronunciation: 'सिस्टर-इन-लॉ', 
          hindiMeaning: 'पति/पत्नी की बहन', 
          icon: '👩', 
          bgColor: 'bg-pink-600' 
        },
        { 
          english: 'Grandson', 
          hindi: 'पोता', 
          pronunciation: 'ग्रैंडसन', 
          hindiMeaning: 'बेटे/बेटी का बेटा', 
          icon: '👦', 
          bgColor: 'bg-blue-700' 
        },
        { 
          english: 'Granddaughter', 
          hindi: 'पोती', 
          pronunciation: 'ग्रैंडडॉटर', 
          hindiMeaning: 'बेटे/बेटी की बेटी', 
          icon: '👧', 
          bgColor: 'bg-pink-700' 
        },
      ],
    },
    oppositeWords: {
      title: 'Opposite Words',
      data: [
        { 
          english: 'Hot', 
          hindi: 'गर्म', 
          pronunciation: 'हॉट', 
          hindiMeaning: 'गर्म', 
          icon: '🔥', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'Cold', 
          hindi: 'ठंडा', 
          pronunciation: 'कोल्ड', 
          hindiMeaning: 'ठंडा', 
          icon: '❄️', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'Big', 
          hindi: 'बड़ा', 
          pronunciation: 'बिग', 
          hindiMeaning: 'बड़ा', 
          icon: '🐘', 
          bgColor: 'bg-green-100' 
        },
        { 
          english: 'Small', 
          hindi: 'छोटा', 
          pronunciation: 'स्मॉल', 
          hindiMeaning: 'छोटा', 
          icon: '🐭', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'Happy', 
          hindi: 'खुश', 
          pronunciation: 'हैप्पी', 
          hindiMeaning: 'खुश', 
          icon: '😊', 
          bgColor: 'bg-pink-100' 
        },
        { 
          english: 'Sad', 
          hindi: 'दुखी', 
          pronunciation: 'सैड', 
          hindiMeaning: 'दुखी', 
          icon: '😢', 
          bgColor: 'bg-purple-100' 
        },
        { 
          english: 'Fast', 
          hindi: 'तेज', 
          pronunciation: 'फास्ट', 
          hindiMeaning: 'तेज', 
          icon: '🚗', 
          bgColor: 'bg-red-200' 
        },
        { 
          english: 'Slow', 
          hindi: 'धीमा', 
          pronunciation: 'स्लो', 
          hindiMeaning: 'धीमा', 
          icon: '🐢', 
          bgColor: 'bg-blue-200' 
        },
        { 
          english: 'Light', 
          hindi: 'हल्का', 
          pronunciation: 'लाइट', 
          hindiMeaning: 'हल्का', 
          icon: '💡', 
          bgColor: 'bg-green-200' 
        },
        { 
          english: 'Heavy', 
          hindi: 'भारी', 
          pronunciation: 'हेवी', 
          hindiMeaning: 'भारी', 
          icon: '🏋️', 
          bgColor: 'bg-yellow-200' 
        },
        { 
          english: 'Day', 
          hindi: 'दिन', 
          pronunciation: 'डे', 
          hindiMeaning: 'दिन', 
          icon: '🌞', 
          bgColor: 'bg-pink-200' 
        },
        { 
          english: 'Night', 
          hindi: 'रात', 
          pronunciation: 'नाइट', 
          hindiMeaning: 'रात', 
          icon: '🌙', 
          bgColor: 'bg-purple-200' 
        },
        { 
          english: 'Up', 
          hindi: 'ऊपर', 
          pronunciation: 'अप', 
          hindiMeaning: 'ऊपर', 
          icon: '⬆️', 
          bgColor: 'bg-red-300' 
        },
        { 
          english: 'Down', 
          hindi: 'नीचे', 
          pronunciation: 'डाउन', 
          hindiMeaning: 'नीचे', 
          icon: '⬇️', 
          bgColor: 'bg-blue-300' 
        },
        { 
          english: 'Left', 
          hindi: 'बाएं', 
          pronunciation: 'लेफ्ट', 
          hindiMeaning: 'बाएं', 
          icon: '⬅️', 
          bgColor: 'bg-green-300' 
        },
        { 
          english: 'Right', 
          hindi: 'दाएं', 
          pronunciation: 'राइट', 
          hindiMeaning: 'दाएं', 
          icon: '➡️', 
          bgColor: 'bg-yellow-300' 
        },
        { 
          english: 'Open', 
          hindi: 'खुला', 
          pronunciation: 'ओपन', 
          hindiMeaning: 'खुला', 
          icon: '🚪', 
          bgColor: 'bg-pink-300' 
        },
        { 
          english: 'Close', 
          hindi: 'बंद', 
          pronunciation: 'क्लोज़', 
          hindiMeaning: 'बंद', 
          icon: '🚪', 
          bgColor: 'bg-purple-300' 
        },
        { 
          english: 'Full', 
          hindi: 'भरा हुआ', 
          pronunciation: 'फुल', 
          hindiMeaning: 'भरा हुआ', 
          icon: '🍶', 
          bgColor: 'bg-red-400' 
        },
        { 
          english: 'Empty', 
          hindi: 'खाली', 
          pronunciation: 'एम्प्टी', 
          hindiMeaning: 'खाली', 
          icon: '🍶', 
          bgColor: 'bg-blue-400' 
        },
        { 
          english: 'Young', 
          hindi: 'जवान', 
          pronunciation: 'यंग', 
          hindiMeaning: 'जवान', 
          icon: '👶', 
          bgColor: 'bg-green-400' 
        },
        { 
          english: 'Old', 
          hindi: 'बूढ़ा', 
          pronunciation: 'ओल्ड', 
          hindiMeaning: 'बूढ़ा', 
          icon: '👴', 
          bgColor: 'bg-yellow-400' 
        },
        { 
          english: 'Strong', 
          hindi: 'मजबूत', 
          pronunciation: 'स्ट्रॉन्ग', 
          hindiMeaning: 'मजबूत', 
          icon: '💪', 
          bgColor: 'bg-pink-400' 
        },
        { 
          english: 'Weak', 
          hindi: 'कमजोर', 
          pronunciation: 'वीक', 
          hindiMeaning: 'कमजोर', 
          icon: '🦵', 
          bgColor: 'bg-purple-400' 
        },
        { 
          english: 'Wet', 
          hindi: 'गीला', 
          pronunciation: 'वेट', 
          hindiMeaning: 'गीला', 
          icon: '🌧️', 
          bgColor: 'bg-red-500' 
        },
        { 
          english: 'Dry', 
          hindi: 'सूखा', 
          pronunciation: 'ड्राई', 
          hindiMeaning: 'सूखा', 
          icon: '☀️', 
          bgColor: 'bg-blue-500' 
        },
        { 
          english: 'Clean', 
          hindi: 'साफ', 
          pronunciation: 'क्लीन', 
          hindiMeaning: 'साफ', 
          icon: '🧹', 
          bgColor: 'bg-green-500' 
        },
        { 
          english: 'Dirty', 
          hindi: 'गंदा', 
          pronunciation: 'डर्टी', 
          hindiMeaning: 'गंदा', 
          icon: '🧹', 
          bgColor: 'bg-yellow-500' 
        },
        { 
          english: 'Inside', 
          hindi: 'अंदर', 
          pronunciation: 'इनसाइड', 
          hindiMeaning: 'अंदर', 
          icon: '🏠', 
          bgColor: 'bg-pink-500' 
        },
        { 
          english: 'Outside', 
          hindi: 'बाहर', 
          pronunciation: 'आउटसाइड', 
          hindiMeaning: 'बाहर', 
          icon: '🌳', 
          bgColor: 'bg-purple-500' 
        },
        { 
          english: 'True', 
          hindi: 'सच', 
          pronunciation: 'ट्रू', 
          hindiMeaning: 'सच', 
          icon: '✅', 
          bgColor: 'bg-red-600' 
        },
        { 
          english: 'False', 
          hindi: 'झूठ', 
          pronunciation: 'फॉल्स', 
          hindiMeaning: 'झूठ', 
          icon: '❌', 
          bgColor: 'bg-blue-600' 
        },
        { 
          english: 'Win', 
          hindi: 'जीत', 
          pronunciation: 'विन', 
          hindiMeaning: 'जीत', 
          icon: '🏆', 
          bgColor: 'bg-green-600' 
        },
        { 
          english: 'Lose', 
          hindi: 'हार', 
          pronunciation: 'लूज़', 
          hindiMeaning: 'हार', 
          icon: '😞', 
          bgColor: 'bg-yellow-600' 
        },
        { 
          english: 'Start', 
          hindi: 'शुरू', 
          pronunciation: 'स्टार्ट', 
          hindiMeaning: 'शुरू', 
          icon: '⏳', 
          bgColor: 'bg-pink-600' 
        },
        { 
          english: 'End', 
          hindi: 'अंत', 
          pronunciation: 'एंड', 
          hindiMeaning: 'अंत', 
          icon: '🔚', 
          bgColor: 'bg-purple-600' 
        },
        { 
          english: 'Love', 
          hindi: 'प्यार', 
          pronunciation: 'लव', 
          hindiMeaning: 'प्यार', 
          icon: '❤️', 
          bgColor: 'bg-red-700' 
        },
        { 
          english: 'Hate', 
          hindi: 'नफरत', 
          pronunciation: 'हेट', 
          hindiMeaning: 'नफरत', 
          icon: '💔', 
          bgColor: 'bg-blue-700' 
        },
        { 
          english: 'Friend', 
          hindi: 'दोस्त', 
          pronunciation: 'फ्रेंड', 
          hindiMeaning: 'दोस्त', 
          icon: '👫', 
          bgColor: 'bg-green-700' 
        },
        { 
          english: 'Enemy', 
          hindi: 'दुश्मन', 
          pronunciation: 'एनिमी', 
          hindiMeaning: 'दुश्मन', 
          icon: '⚔️', 
          bgColor: 'bg-yellow-700' 
        },
        { 
          english: 'Light', 
          hindi: 'रोशनी', 
          pronunciation: 'लाइट', 
          hindiMeaning: 'रोशनी', 
          icon: '💡', 
          bgColor: 'bg-pink-700' 
        },
        { 
          english: 'Dark', 
          hindi: 'अंधेरा', 
          pronunciation: 'डार्क', 
          hindiMeaning: 'अंधेरा', 
          icon: '🌑', 
          bgColor: 'bg-purple-700' 
        },
        { 
          english: 'High', 
          hindi: 'ऊंचा', 
          pronunciation: 'हाई', 
          hindiMeaning: 'ऊंचा', 
          icon: '⬆️', 
          bgColor: 'bg-red-800' 
        },
        { 
          english: 'Low', 
          hindi: 'नीचा', 
          pronunciation: 'लो', 
          hindiMeaning: 'नीचा', 
          icon: '⬇️', 
          bgColor: 'bg-blue-800' 
        },
        { 
          english: 'Forward', 
          hindi: 'आगे', 
          pronunciation: 'फॉरवर्ड', 
          hindiMeaning: 'आगे', 
          icon: '➡️', 
          bgColor: 'bg-green-800' 
        },
        { 
          english: 'Backward', 
          hindi: 'पीछे', 
          pronunciation: 'बैकवर्ड', 
          hindiMeaning: 'पीछे', 
          icon: '⬅️', 
          bgColor: 'bg-yellow-800' 
        },
        { 
          english: 'Above', 
          hindi: 'ऊपर', 
          pronunciation: 'अबव', 
          hindiMeaning: 'ऊपर', 
          icon: '⬆️', 
          bgColor: 'bg-pink-800' 
        },
        { 
          english: 'Below', 
          hindi: 'नीचे', 
          pronunciation: 'बिलो', 
          hindiMeaning: 'नीचे', 
          icon: '⬇️', 
          bgColor: 'bg-purple-800' 
        },
        { 
          english: 'Arrive', 
          hindi: 'पहुंचना', 
          pronunciation: 'अराइव', 
          hindiMeaning: 'पहुंचना', 
          icon: '🚗', 
          bgColor: 'bg-red-900' 
        },
        { 
          english: 'Depart', 
          hindi: 'प्रस्थान करना', 
          pronunciation: 'डिपार्ट', 
          hindiMeaning: 'प्रस्थान करना', 
          icon: '✈️', 
          bgColor: 'bg-blue-900' 
        },
        { 
          english: 'Buy', 
          hindi: 'खरीदना', 
          pronunciation: 'बाय', 
          hindiMeaning: 'खरीदना', 
          icon: '🛒', 
          bgColor: 'bg-green-900' 
        },
        { 
          english: 'Sell', 
          hindi: 'बेचना', 
          pronunciation: 'सेल', 
          hindiMeaning: 'बेचना', 
          icon: '💰', 
          bgColor: 'bg-yellow-900' 
        },
      ],
    },
    numbers: {
      title: '1 to 100 Numbers',
      data: [
        { 
          english: 'One', 
          hindi: 'एक', 
          pronunciation: 'वन', 
          hindiMeaning: 'संख्या 1', 
          icon: '1️⃣', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'Two', 
          hindi: 'दो', 
          pronunciation: 'टू', 
          hindiMeaning: 'संख्या 2', 
          icon: '2️⃣', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'Three', 
          hindi: 'तीन', 
          pronunciation: 'थ्री', 
          hindiMeaning: 'संख्या 3', 
          icon: '3️⃣', 
          bgColor: 'bg-green-100' 
        },
        { 
          english: 'Four', 
          hindi: 'चार', 
          pronunciation: 'फोर', 
          hindiMeaning: 'संख्या 4', 
          icon: '4️⃣', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'Five', 
          hindi: 'पांच', 
          pronunciation: 'फाइव', 
          hindiMeaning: 'संख्या 5', 
          icon: '5️⃣', 
          bgColor: 'bg-purple-100' 
        },
        { 
          english: 'Six', 
          hindi: 'छह', 
          pronunciation: 'सिक्स', 
          hindiMeaning: 'संख्या 6', 
          icon: '6️⃣', 
          bgColor: 'bg-pink-100' 
        },
        { 
          english: 'Seven', 
          hindi: 'सात', 
          pronunciation: 'सेवन', 
          hindiMeaning: 'संख्या 7', 
          icon: '7️⃣', 
          bgColor: 'bg-red-200' 
        },
        { 
          english: 'Eight', 
          hindi: 'आठ', 
          pronunciation: 'एट', 
          hindiMeaning: 'संख्या 8', 
          icon: '8️⃣', 
          bgColor: 'bg-blue-200' 
        },
        { 
          english: 'Nine', 
          hindi: 'नौ', 
          pronunciation: 'नाइन', 
          hindiMeaning: 'संख्या 9', 
          icon: '9️⃣', 
          bgColor: 'bg-green-200' 
        },
        { 
          english: 'Ten', 
          hindi: 'दस', 
          pronunciation: 'टेन', 
          hindiMeaning: 'संख्या 10', 
          icon: '🔟', 
          bgColor: 'bg-yellow-200' 
        },
        { 
          english: 'Eleven', 
          hindi: 'ग्यारह', 
          pronunciation: 'इलेवन', 
          hindiMeaning: 'संख्या 11', 
          icon: '1️⃣1️⃣', 
          bgColor: 'bg-purple-200' 
        },
        { 
          english: 'Twelve', 
          hindi: 'बारह', 
          pronunciation: 'ट्वेल्व', 
          hindiMeaning: 'संख्या 12', 
          icon: '1️⃣2️⃣', 
          bgColor: 'bg-pink-200' 
        },
        { 
          english: 'Thirteen', 
          hindi: 'तेरह', 
          pronunciation: 'थर्टीन', 
          hindiMeaning: 'संख्या 13', 
          icon: '1️⃣3️⃣', 
          bgColor: 'bg-red-300' 
        },
        { 
          english: 'Fourteen', 
          hindi: 'चौदह', 
          pronunciation: 'फोर्टीन', 
          hindiMeaning: 'संख्या 14', 
          icon: '1️⃣4️⃣', 
          bgColor: 'bg-blue-300' 
        },
        { 
          english: 'Fifteen', 
          hindi: 'पंद्रह', 
          pronunciation: 'फिफ्टीन', 
          hindiMeaning: 'संख्या 15', 
          icon: '1️⃣5️⃣', 
          bgColor: 'bg-green-300' 
        },
        { 
          english: 'Sixteen', 
          hindi: 'सोलह', 
          pronunciation: 'सिक्सटीन', 
          hindiMeaning: 'संख्या 16', 
          icon: '1️⃣6️⃣', 
          bgColor: 'bg-yellow-300' 
        },
        { 
          english: 'Seventeen', 
          hindi: 'सत्रह', 
          pronunciation: 'सेवनटीन', 
          hindiMeaning: 'संख्या 17', 
          icon: '1️⃣7️⃣', 
          bgColor: 'bg-purple-300' 
        },
        { 
          english: 'Eighteen', 
          hindi: 'अठारह', 
          pronunciation: 'एटीन', 
          hindiMeaning: 'संख्या 18', 
          icon: '1️⃣8️⃣', 
          bgColor: 'bg-pink-300' 
        },
        { 
          english: 'Nineteen', 
          hindi: 'उन्नीस', 
          pronunciation: 'नाइनटीन', 
          hindiMeaning: 'संख्या 19', 
          icon: '1️⃣9️⃣', 
          bgColor: 'bg-red-400' 
        },
        { 
          english: 'Twenty', 
          hindi: 'बीस', 
          pronunciation: 'ट्वेंटी', 
          hindiMeaning: 'संख्या 20', 
          icon: '2️⃣0️⃣', 
          bgColor: 'bg-blue-400' 
        },
        { 
          english: 'Twenty-One', 
          hindi: 'इक्कीस', 
          pronunciation: 'ट्वेंटी-वन', 
          hindiMeaning: 'संख्या 21', 
          icon: '2️⃣1️⃣', 
          bgColor: 'bg-green-400' 
        },
        { 
          english: 'Twenty-Two', 
          hindi: 'बाईस', 
          pronunciation: 'ट्वेंटी-टू', 
          hindiMeaning: 'संख्या 22', 
          icon: '2️⃣2️⃣', 
          bgColor: 'bg-yellow-400' 
        },
        { 
          english: 'Twenty-Three', 
          hindi: 'तेईस', 
          pronunciation: 'ट्वेंटी-थ्री', 
          hindiMeaning: 'संख्या 23', 
          icon: '2️⃣3️⃣', 
          bgColor: 'bg-purple-400' 
        },
        { 
          english: 'Twenty-Four', 
          hindi: 'चौबीस', 
          pronunciation: 'ट्वेंटी-फोर', 
          hindiMeaning: 'संख्या 24', 
          icon: '2️⃣4️⃣', 
          bgColor: 'bg-pink-400' 
        },
        { 
          english: 'Twenty-Five', 
          hindi: 'पच्चीस', 
          pronunciation: 'ट्वेंटी-फाइव', 
          hindiMeaning: 'संख्या 25', 
          icon: '2️⃣5️⃣', 
          bgColor: 'bg-red-500' 
        },
        { 
          english: 'Twenty-Six', 
          hindi: 'छब्बीस', 
          pronunciation: 'ट्वेंटी-सिक्स', 
          hindiMeaning: 'संख्या 26', 
          icon: '2️⃣6️⃣', 
          bgColor: 'bg-blue-500' 
        },
        { 
          english: 'Twenty-Seven', 
          hindi: 'सत्ताईस', 
          pronunciation: 'ट्वेंटी-सेवन', 
          hindiMeaning: 'संख्या 27', 
          icon: '2️⃣7️⃣', 
          bgColor: 'bg-green-500' 
        },
        { 
          english: 'Twenty-Eight', 
          hindi: 'अट्ठाईस', 
          pronunciation: 'ट्वेंटी-एट', 
          hindiMeaning: 'संख्या 28', 
          icon: '2️⃣8️⃣', 
          bgColor: 'bg-yellow-500' 
        },
        { 
          english: 'Twenty-Nine', 
          hindi: 'उनतीस', 
          pronunciation: 'ट्वेंटी-नाइन', 
          hindiMeaning: 'संख्या 29', 
          icon: '2️⃣9️⃣', 
          bgColor: 'bg-purple-500' 
        },
        { 
          english: 'Thirty', 
          hindi: 'तीस', 
          pronunciation: 'थर्टी', 
          hindiMeaning: 'संख्या 30', 
          icon: '3️⃣0️⃣', 
          bgColor: 'bg-pink-500' 
        },
        { 
          english: 'Thirty-One', 
          hindi: 'इकतीस', 
          pronunciation: 'थर्टी-वन', 
          hindiMeaning: 'संख्या 31', 
          icon: '3️⃣1️⃣', 
          bgColor: 'bg-red-600' 
        },
        { 
          english: 'Thirty-Two', 
          hindi: 'बत्तीस', 
          pronunciation: 'थर्टी-टू', 
          hindiMeaning: 'संख्या 32', 
          icon: '3️⃣2️⃣', 
          bgColor: 'bg-blue-600' 
        },
        { 
          english: 'Thirty-Three', 
          hindi: 'तैंतीस', 
          pronunciation: 'थर्टी-थ्री', 
          hindiMeaning: 'संख्या 33', 
          icon: '3️⃣3️⃣', 
          bgColor: 'bg-green-600' 
        },
        { 
          english: 'Thirty-Four', 
          hindi: 'चौंतीस', 
          pronunciation: 'थर्टी-फोर', 
          hindiMeaning: 'संख्या 34', 
          icon: '3️⃣4️⃣', 
          bgColor: 'bg-yellow-600' 
        },
        { 
          english: 'Thirty-Five', 
          hindi: 'पैंतीस', 
          pronunciation: 'थर्टी-फाइव', 
          hindiMeaning: 'संख्या 35', 
          icon: '3️⃣5️⃣', 
          bgColor: 'bg-purple-600' 
        },
        { 
          english: 'Thirty-Six', 
          hindi: 'छत्तीस', 
          pronunciation: 'थर्टी-सिक्स', 
          hindiMeaning: 'संख्या 36', 
          icon: '3️⃣6️⃣', 
          bgColor: 'bg-pink-600' 
        },
        { 
          english: 'Thirty-Seven', 
          hindi: 'सैंतीस', 
          pronunciation: 'थर्टी-सेवन', 
          hindiMeaning: 'संख्या 37', 
          icon: '3️⃣7️⃣', 
          bgColor: 'bg-red-700' 
        },
        { 
          english: 'Thirty-Eight', 
          hindi: 'अड़तीस', 
          pronunciation: 'थर्टी-एट', 
          hindiMeaning: 'संख्या 38', 
          icon: '3️⃣8️⃣', 
          bgColor: 'bg-blue-700' 
        },
        { 
          english: 'Thirty-Nine', 
          hindi: 'उनतालीस', 
          pronunciation: 'थर्टी-नाइन', 
          hindiMeaning: 'संख्या 39', 
          icon: '3️⃣9️⃣', 
          bgColor: 'bg-green-700' 
        },
        { 
          english: 'Forty', 
          hindi: 'चालीस', 
          pronunciation: 'फोर्टी', 
          hindiMeaning: 'संख्या 40', 
          icon: '4️⃣0️⃣', 
          bgColor: 'bg-yellow-700' 
        },
        { 
          english: 'Forty-One', 
          hindi: 'इकतालीस', 
          pronunciation: 'फोर्टी-वन', 
          hindiMeaning: 'संख्या 41', 
          icon: '4️⃣1️⃣', 
          bgColor: 'bg-purple-700' 
        },
        { 
          english: 'Forty-Two', 
          hindi: 'बयालीस', 
          pronunciation: 'फोर्टी-टू', 
          hindiMeaning: 'संख्या 42', 
          icon: '4️⃣2️⃣', 
          bgColor: 'bg-pink-700' 
        },
        { 
          english: 'Forty-Three', 
          hindi: 'तैंतालीस', 
          pronunciation: 'फोर्टी-थ्री', 
          hindiMeaning: 'संख्या 43', 
          icon: '4️⃣3️⃣', 
          bgColor: 'bg-red-800' 
        },
        { 
          english: 'Forty-Four', 
          hindi: 'चौवालीस', 
          pronunciation: 'फोर्टी-फोर', 
          hindiMeaning: 'संख्या 44', 
          icon: '4️⃣4️⃣', 
          bgColor: 'bg-blue-800' 
        },
        { 
          english: 'Forty-Five', 
          hindi: 'पैंतालीस', 
          pronunciation: 'फोर्टी-फाइव', 
          hindiMeaning: 'संख्या 45', 
          icon: '4️⃣5️⃣', 
          bgColor: 'bg-green-800' 
        },
        { 
          english: 'Forty-Six', 
          hindi: 'छियालीस', 
          pronunciation: 'फोर्टी-सिक्स', 
          hindiMeaning: 'संख्या 46', 
          icon: '4️⃣6️⃣', 
          bgColor: 'bg-yellow-800' 
        },
        { 
          english: 'Forty-Seven', 
          hindi: 'सैंतालीस', 
          pronunciation: 'फोर्टी-सेवन', 
          hindiMeaning: 'संख्या 47', 
          icon: '4️⃣7️⃣', 
          bgColor: 'bg-purple-800' 
        },
        { 
          english: 'Forty-Eight', 
          hindi: 'अड़तालीस', 
          pronunciation: 'फोर्टी-एट', 
          hindiMeaning: 'संख्या 48', 
          icon: '4️⃣8️⃣', 
          bgColor: 'bg-pink-800' 
        },
        { 
          english: 'Forty-Nine', 
          hindi: 'उनचास', 
          pronunciation: 'फोर्टी-नाइन', 
          hindiMeaning: 'संख्या 49', 
          icon: '4️⃣9️⃣', 
          bgColor: 'bg-red-900' 
        },
        { 
          english: 'Fifty', 
          hindi: 'पचास', 
          pronunciation: 'फिफ्टी', 
          hindiMeaning: 'संख्या 50', 
          icon: '5️⃣0️⃣', 
          bgColor: 'bg-blue-900' 
        },
        { 
          english: 'Fifty-One', 
          hindi: 'इक्यावन', 
          pronunciation: 'फिफ्टी-वन', 
          hindiMeaning: 'संख्या 51', 
          icon: '5️⃣1️⃣', 
          bgColor: 'bg-green-900' 
        },
        { 
          english: 'Fifty-Two', 
          hindi: 'बावन', 
          pronunciation: 'फिफ्टी-टू', 
          hindiMeaning: 'संख्या 52', 
          icon: '5️⃣2️⃣', 
          bgColor: 'bg-yellow-900' 
        },
        { 
          english: 'Fifty-Three', 
          hindi: 'तिरेपन', 
          pronunciation: 'फिफ्टी-थ्री', 
          hindiMeaning: 'संख्या 53', 
          icon: '5️⃣3️⃣', 
          bgColor: 'bg-purple-900' 
        },
        { 
          english: 'Fifty-Four', 
          hindi: 'चौवन', 
          pronunciation: 'फिफ्टी-फोर', 
          hindiMeaning: 'संख्या 54', 
          icon: '5️⃣4️⃣', 
          bgColor: 'bg-pink-900' 
        },
        { 
          english: 'Fifty-Five', 
          hindi: 'पचपन', 
          pronunciation: 'फिफ्टी-फाइव', 
          hindiMeaning: 'संख्या 55', 
          icon: '5️⃣5️⃣', 
          bgColor: 'bg-red-100' 
        },
        { 
          english: 'Fifty-Six', 
          hindi: 'छप्पन', 
          pronunciation: 'फिफ्टी-सिक्स', 
          hindiMeaning: 'संख्या 56', 
          icon: '5️⃣6️⃣', 
          bgColor: 'bg-blue-100' 
        },
        { 
          english: 'Fifty-Seven', 
          hindi: 'सत्तावन', 
          pronunciation: 'फिफ्टी-सेवन', 
          hindiMeaning: 'संख्या 57', 
          icon: '5️⃣7️⃣', 
          bgColor: 'bg-green-100' 
        },
        { 
          english: 'Fifty-Eight', 
          hindi: 'अठ्ठावन', 
          pronunciation: 'फिफ्टी-एट', 
          hindiMeaning: 'संख्या 58', 
          icon: '5️⃣8️⃣', 
          bgColor: 'bg-yellow-100' 
        },
        { 
          english: 'Fifty-Nine', 
          hindi: 'उनसठ', 
          pronunciation: 'फिफ्टी-नाइन', 
          hindiMeaning: 'संख्या 59', 
          icon: '5️⃣9️⃣', 
          bgColor: 'bg-purple-100' 
        },
        { 
          english: 'Sixty', 
          hindi: 'साठ', 
          pronunciation: 'सिक्स्टी', 
          hindiMeaning: 'संख्या 60', 
          icon: '6️⃣0️⃣', 
          bgColor: 'bg-pink-100' 
        },
        { 
          english: 'Sixty-One', 
          hindi: 'इकसठ', 
          pronunciation: 'सिक्स्टी-वन', 
          hindiMeaning: 'संख्या 61', 
          icon: '6️⃣1️⃣', 
          bgColor: 'bg-red-200' 
        },
        { 
          english: 'Sixty-Two', 
          hindi: 'बासठ', 
          pronunciation: 'सिक्स्टी-टू', 
          hindiMeaning: 'संख्या 62', 
          icon: '6️⃣2️⃣', 
          bgColor: 'bg-blue-200' 
        },
        { 
          english: 'Sixty-Three', 
          hindi: 'तिरसठ', 
          pronunciation: 'सिक्स्टी-थ्री', 
          hindiMeaning: 'संख्या 63', 
          icon: '6️⃣3️⃣', 
          bgColor: 'bg-green-200' 
        },
        { 
          english: 'Sixty-Four', 
          hindi: 'चौंसठ', 
          pronunciation: 'सिक्स्टी-फोर', 
          hindiMeaning: 'संख्या 64', 
          icon: '6️⃣4️⃣', 
          bgColor: 'bg-yellow-200' 
        },
        { 
          english: 'Sixty-Five', 
          hindi: 'पैंसठ', 
          pronunciation: 'सिक्स्टी-फाइव', 
          hindiMeaning: 'संख्या 65', 
          icon: '6️⃣5️⃣', 
          bgColor: 'bg-purple-200' 
        },
        { 
          english: 'Sixty-Six', 
          hindi: 'छियासठ', 
          pronunciation: 'सिक्स्टी-सिक्स', 
          hindiMeaning: 'संख्या 66', 
          icon: '6️⃣6️⃣', 
          bgColor: 'bg-pink-200' 
        },
        { 
          english: 'Sixty-Seven', 
          hindi: 'सड़सठ', 
          pronunciation: 'सिक्स्टी-सेवन', 
          hindiMeaning: 'संख्या 67', 
          icon: '6️⃣7️⃣', 
          bgColor: 'bg-red-300' 
        },
        { 
          english: 'Sixty-Eight', 
          hindi: 'अड़सठ', 
          pronunciation: 'सिक्स्टी-एट', 
          hindiMeaning: 'संख्या 68', 
          icon: '6️⃣8️⃣', 
          bgColor: 'bg-blue-300' 
        },
        { 
          english: 'Sixty-Nine', 
          hindi: 'उनहत्तर', 
          pronunciation: 'सिक्स्टी-नाइन', 
          hindiMeaning: 'संख्या 69', 
          icon: '6️⃣9️⃣', 
          bgColor: 'bg-green-300' 
        },
        { 
          english: 'Seventy', 
          hindi: 'सत्तर', 
          pronunciation: 'सेवेंटी', 
          hindiMeaning: 'संख्या 70', 
          icon: '7️⃣0️⃣', 
          bgColor: 'bg-yellow-300' 
        },
        { 
          english: 'Seventy-One', 
          hindi: 'इकहत्तर', 
          pronunciation: 'सेवेंटी-वन', 
          hindiMeaning: 'संख्या 71', 
          icon: '7️⃣1️⃣', 
          bgColor: 'bg-purple-300' 
        },
        { 
          english: 'Seventy-Two', 
          hindi: 'बहत्तर', 
          pronunciation: 'सेवेंटी-टू', 
          hindiMeaning: 'संख्या 72', 
          icon: '7️⃣2️⃣', 
          bgColor: 'bg-pink-300' 
        },
        { 
          english: 'Seventy-Three', 
          hindi: 'तिहत्तर', 
          pronunciation: 'सेवेंटी-थ्री', 
          hindiMeaning: 'संख्या 73', 
          icon: '7️⃣3️⃣', 
          bgColor: 'bg-red-400' 
        },
        { 
          english: 'Seventy-Four', 
          hindi: 'चौहत्तर', 
          pronunciation: 'सेवेंटी-फोर', 
          hindiMeaning: 'संख्या 74', 
          icon: '7️⃣4️⃣', 
          bgColor: 'bg-blue-400' 
        },
        { 
          english: 'Seventy-Five', 
          hindi: 'पचहत्तर', 
          pronunciation: 'सेवेंटी-फाइव', 
          hindiMeaning: 'संख्या 75', 
          icon: '7️⃣5️⃣', 
          bgColor: 'bg-green-400' 
        },
        { 
          english: 'Seventy-Six', 
          hindi: 'छिहत्तर', 
          pronunciation: 'सेवेंटी-सिक्स', 
          hindiMeaning: 'संख्या 76', 
          icon: '7️⃣6️⃣', 
          bgColor: 'bg-yellow-400' 
        },
        { 
          english: 'Seventy-Seven', 
          hindi: 'सतहत्तर', 
          pronunciation: 'सेवेंटी-सेवन', 
          hindiMeaning: 'संख्या 77', 
          icon: '7️⃣7️⃣', 
          bgColor: 'bg-purple-400' 
        },
        { 
          english: 'Seventy-Eight', 
          hindi: 'अठहत्तर', 
          pronunciation: 'सेवेंटी-एट', 
          hindiMeaning: 'संख्या 78', 
          icon: '7️⃣8️⃣', 
          bgColor: 'bg-pink-400' 
        },
        { 
          english: 'Seventy-Nine', 
          hindi: 'उनासी', 
          pronunciation: 'सेवेंटी-नाइन', 
          hindiMeaning: 'संख्या 79', 
          icon: '7️⃣9️⃣', 
          bgColor: 'bg-red-500' 
        },
        { 
          english: 'Eighty', 
          hindi: 'अस्सी', 
          pronunciation: 'एटी', 
          hindiMeaning: 'संख्या 80', 
          icon: '8️⃣0️⃣', 
          bgColor: 'bg-blue-500' 
        },
        { 
          english: 'Eighty-One', 
          hindi: 'इक्यासी', 
          pronunciation: 'एटी-वन', 
          hindiMeaning: 'संख्या 81', 
          icon: '8️⃣1️⃣', 
          bgColor: 'bg-green-500' 
        },
        { 
          english: 'Eighty-Two', 
          hindi: 'बयासी', 
          pronunciation: 'एटी-टू', 
          hindiMeaning: 'संख्या 82', 
          icon: '8️⃣2️⃣', 
          bgColor: 'bg-yellow-500' 
        },
        { 
          english: 'Eighty-Three', 
          hindi: 'तिरासी', 
          pronunciation: 'एटी-थ्री', 
          hindiMeaning: 'संख्या 83', 
          icon: '8️⃣3️⃣', 
          bgColor: 'bg-purple-500' 
        },
        { 
          english: 'Eighty-Four', 
          hindi: 'चौरासी', 
          pronunciation: 'एटी-फोर', 
          hindiMeaning: 'संख्या 84', 
          icon: '8️⃣4️⃣', 
          bgColor: 'bg-pink-500' 
        },
        { 
          english: 'Eighty-Five', 
          hindi: 'पचासी', 
          pronunciation: 'एटी-फाइव', 
          hindiMeaning: 'संख्या 85', 
          icon: '8️⃣5️⃣', 
          bgColor: 'bg-red-600' 
        },
        { 
          english: 'Eighty-Six', 
          hindi: 'छियासी', 
          pronunciation: 'एटी-सिक्स', 
          hindiMeaning: 'संख्या 86', 
          icon: '8️⃣6️⃣', 
          bgColor: 'bg-blue-600' 
        },
        { 
          english: 'Eighty-Seven', 
          hindi: 'सत्तासी', 
          pronunciation: 'एटी-सेवन', 
          hindiMeaning: 'संख्या 87', 
          icon: '8️⃣7️⃣', 
          bgColor: 'bg-green-600' 
        },
        { 
          english: 'Eighty-Eight', 
          hindi: 'अठासी', 
          pronunciation: 'एटी-एट', 
          hindiMeaning: 'संख्या 88', 
          icon: '8️⃣8️⃣', 
          bgColor: 'bg-yellow-600' 
        },
        { 
          english: 'Eighty-Nine', 
          hindi: 'नवासी', 
          pronunciation: 'एटी-नाइन', 
          hindiMeaning: 'संख्या 89', 
          icon: '8️⃣9️⃣', 
          bgColor: 'bg-purple-600' 
        },
        { 
          english: 'Ninety', 
          hindi: 'नब्बे', 
          pronunciation: 'नाइंटी', 
          hindiMeaning: 'संख्या 90', 
          icon: '9️⃣0️⃣', 
          bgColor: 'bg-pink-600' 
        },
        { 
          english: 'Ninety-One', 
          hindi: 'इक्यानवे', 
          pronunciation: 'नाइंटी-वन', 
          hindiMeaning: 'संख्या 91', 
          icon: '9️⃣1️⃣', 
          bgColor: 'bg-red-700' 
        },
        { 
          english: 'Ninety-Two', 
          hindi: 'बानवे', 
          pronunciation: 'नाइंटी-टू', 
          hindiMeaning: 'संख्या 92', 
          icon: '9️⃣2️⃣', 
          bgColor: 'bg-blue-700' 
        },
        { 
          english: 'Ninety-Three', 
          hindi: 'तिरानवे', 
          pronunciation: 'नाइंटी-थ्री', 
          hindiMeaning: 'संख्या 93', 
          icon: '9️⃣3️⃣', 
          bgColor: 'bg-green-700' 
        },
        { 
          english: 'Ninety-Four', 
          hindi: 'चौरानवे', 
          pronunciation: 'नाइंटी-फोर', 
          hindiMeaning: 'संख्या 94', 
          icon: '9️⃣4️⃣', 
          bgColor: 'bg-yellow-700' 
        },
        { 
          english: 'Ninety-Five', 
          hindi: 'पचानवे', 
          pronunciation: 'नाइंटी-फाइव', 
          hindiMeaning: 'संख्या 95', 
          icon: '9️⃣5️⃣', 
          bgColor: 'bg-purple-700' 
        },
        { 
          english: 'Ninety-Six', 
          hindi: 'छियानवे', 
          pronunciation: 'नाइंटी-सिक्स', 
          hindiMeaning: 'संख्या 96', 
          icon: '9️⃣6️⃣', 
          bgColor: 'bg-pink-700' 
        },
        { 
          english: 'Ninety-Seven', 
          hindi: 'सत्तानवे', 
          pronunciation: 'नाइंटी-सेवन', 
          hindiMeaning: 'संख्या 97', 
          icon: '9️⃣7️⃣', 
          bgColor: 'bg-red-800' 
        },
        { 
          english: 'Ninety-Eight', 
          hindi: 'अट्ठानवे', 
          pronunciation: 'नाइंटी-एट', 
          hindiMeaning: 'संख्या 98', 
          icon: '9️⃣8️⃣', 
          bgColor: 'bg-blue-800' 
        },
        { 
          english: 'Ninety-Nine', 
          hindi: 'निन्यानवे', 
          pronunciation: 'नाइंटी-नाइन', 
          hindiMeaning: 'संख्या 99', 
          icon: '9️⃣9️⃣', 
          bgColor: 'bg-green-800' 
        },
        { 
          english: 'One Hundred', 
          hindi: 'एक सौ', 
          pronunciation: 'वन हंड्रेड', 
          hindiMeaning: 'संख्या 100', 
          icon: '💯', 
          bgColor: 'bg-yellow-800' 
        },
      ],
    },
  };

  const selectedContent = content[topic] || { title: 'Not Found', data: [] };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">{selectedContent.title}</h1>
      <ContentGrid data={selectedContent.data} topic={topic} />
    </div>
  );
};

export default AlphabetPage;