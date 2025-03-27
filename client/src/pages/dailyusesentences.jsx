import React from "react";

// Sample data for 1000+ sentences (replace with your full dataset)
const sentences = [
  { hindi: "सूरज पूर्व में उगता है।", english: "The sun rises in the east." },
  {
    hindi: "पानी जीवन के लिए आवश्यक है।",
    english: "Water is essential for life.",
  },
  {
    hindi: "किताबें ज्ञान का स्रोत हैं।",
    english: "Books are a source of knowledge.",
  },
  {
    hindi: "पृथ्वी सूर्य के चारों ओर घूमती है।",
    english: "The earth revolves around the sun.",
  },
  {
    hindi: "मेहनत सफलता की ओर ले जाती है।",
    english: "Hard work leads to success.",
  },
  {
    english: "Good morning, everyone!",
    hindi: "सभी को सुप्रभात!",
  },
  {
    english: "What is the homework for today?",
    hindi: "आज के लिए होमवर्क क्या है?",
  },
  {
    english: "Please submit your assignments by tomorrow.",
    hindi: "कृपया अपने असाइनमेंट कल तक जमा कर दें।",
  },
  {
    english: "Can I borrow a pen?",
    hindi: "क्या मैं एक कलम उधार ले सकता हूँ?",
  },
  {
    english: "Let’s go to the library.",
    hindi: "चलो लाइब्रेरी चलते हैं।",
  },
  {
    english: "I need help with this problem.",
    hindi: "मुझे इस समस्या में मदद चाहिए।",
  },
  {
    english: "What is the next class?",
    hindi: "अगली क्लास क्या है?",
  },
  {
    english: "I forgot my notebook at home.",
    hindi: "मैं अपनी नोटबुक घर पर भूल गया।",
  },
  {
    english: "Can you explain this topic again?",
    hindi: "क्या आप इस टॉपिक को फिर से समझा सकते हैं?",
  },
  {
    english: "I will be absent tomorrow.",
    hindi: "मैं कल अनुपस्थित रहूँगा।",
  },
  {
    english: "Let’s study together.",
    hindi: "चलो साथ में पढ़ते हैं।",
  },
  {
    english: "What is the deadline for this project?",
    hindi: "इस प्रोजेक्ट की अंतिम तिथि क्या है?",
  },
  {
    english: "I need a break.",
    hindi: "मुझे एक ब्रेक चाहिए।",
  },
  {
    english: "Can I use your laptop?",
    hindi: "क्या मैं आपका लैपटॉप इस्तेमाल कर सकता हूँ?",
  },
  {
    english: "Let’s discuss this after class.",
    hindi: "चलो क्लास के बाद इस पर चर्चा करते हैं।",
  },
  {
    english: "I have a doubt in this chapter.",
    hindi: "मुझे इस अध्याय में एक संदेह है।",
  },
  {
    english: "Please turn off your phone.",
    hindi: "कृपया अपना फोन बंद कर दें।",
  },
  {
    english: "I will finish this by evening.",
    hindi: "मैं इसे शाम तक पूरा कर लूँगा।",
  },
  {
    english: "Can you share your notes?",
    hindi: "क्या आप अपने नोट्स शेयर कर सकते हैं?",
  },
  {
    english: "I need to print this document.",
    hindi: "मुझे इस दस्तावेज़ को प्रिंट करना है।",
  },
  {
    english: "Let’s meet in the cafeteria.",
    hindi: "चलो कैफेटेरिया में मिलते हैं।",
  },
  {
    english: "I have a meeting at 3 PM.",
    hindi: "मेरी 3 बजे एक मीटिंग है।",
  },
  {
    english: "Please send me the report.",
    hindi: "कृपया मुझे रिपोर्ट भेज दें।",
  },
  {
    english: "I will call you later.",
    hindi: "मैं आपको बाद में कॉल करूँगा।",
  },
  {
    english: "Can you help me with this task?",
    hindi: "क्या आप मेरी इस काम में मदद कर सकते हैं?",
  },
  {
    english: "I need to finish this presentation.",
    hindi: "मुझे यह प्रेजेंटेशन खत्म करना है।",
  },
  {
    english: "Let’s schedule a meeting.",
    hindi: "चलो एक मीटिंग शेड्यूल करते हैं।",
  },
  {
    english: "I am running late.",
    hindi: "मुझे देर हो रही है।",
  },
  {
    english: "Please check your email.",
    hindi: "कृपया अपना ईमेल चेक करें।",
  },
  {
    english: "I need to take a day off.",
    hindi: "मुझे एक दिन की छुट्टी लेनी है।",
  },
  {
    english: "Can you send me the details?",
    hindi: "क्या आप मुझे विवरण भेज सकते हैं?",
  },
  {
    english: "I will update you soon.",
    hindi: "मैं आपको जल्दी अपडेट करूँगा।",
  },
  {
    english: "Let’s work on this together.",
    hindi: "चलो इसे साथ में करते हैं।",
  },
  {
    english: "I need to attend a call.",
    hindi: "मुझे एक कॉल अटेंड करनी है।",
  },
  {
    english: "Please review this document.",
    hindi: "कृपया इस दस्तावेज़ की समीक्षा करें।",
  },
  {
    english: "I will send you the file.",
    hindi: "मैं आपको फाइल भेज दूँगा।",
  },
  {
    english: "Let’s discuss this tomorrow.",
    hindi: "चलो इस पर कल चर्चा करते हैं।",
  },
  {
    english: "I need to leave early today.",
    hindi: "मुझे आज जल्दी निकलना है।",
  },
  {
    english: "Can you reschedule the meeting?",
    hindi: "क्या आप मीटिंग को दोबारा शेड्यूल कर सकते हैं?",
  },
  {
    english: "I have completed the task.",
    hindi: "मैंने कार्य पूरा कर लिया है।",
  },
  {
    english: "Please forward this email.",
    hindi: "कृपया इस ईमेल को फॉरवर्ड करें।",
  },
  {
    english: "I need to take a break.",
    hindi: "मुझे एक ब्रेक लेना है।",
  },
  {
    english: "Let’s finalize the plan.",
    hindi: "चलो योजना को अंतिम रूप दें।",
  },
  {
    english: "I will prepare the report.",
    hindi: "मैं रिपोर्ट तैयार करूँगा।",
  },
  {
    english: "Can you explain this again?",
    hindi: "क्या आप इसे फिर से समझा सकते हैं?",
  },
  {
    english: "I need to make a phone call.",
    hindi: "मुझे एक फोन कॉल करनी है।",
  },
  {
    english: "Please remind me later.",
    hindi: "कृपया मुझे बाद में याद दिलाएं।",
  },
  {
    english: "I will check and revert.",
    hindi: "मैं चेक करके वापस आऊँगा।",
  },
  {
    english: "Let’s wrap up the meeting.",
    hindi: "चलो मीटिंग समाप्त करते हैं।",
  },
  {
    english: "I need to update the data.",
    hindi: "मुझे डेटा अपडेट करना है।",
  },
  {
    english: "Can you share the presentation?",
    hindi: "क्या आप प्रेजेंटेशन शेयर कर सकते हैं?",
  },
  {
    english: "I will follow up with you.",
    hindi: "मैं आपके साथ फॉलो अप करूँगा।",
  },
  {
    english: "Let’s plan for next week.",
    hindi: "चलो अगले हफ्ते की योजना बनाते हैं।",
  },
  {
    english: "I need to attend a training session.",
    hindi: "मुझे एक ट्रेनिंग सेशन अटेंड करना है।",
  },
  {
    english: "Please confirm your availability.",
    hindi: "कृपया अपनी उपलब्धता की पुष्टि करें।",
  },
  {
    english: "I will send the details shortly.",
    hindi: "मैं जल्दी ही विवरण भेज दूँगा।",
  },
  {
    english: "Let’s discuss this in detail.",
    hindi: "चलो इस पर विस्तार से चर्चा करते हैं।",
  },
  {
    english: "I need to prepare a presentation.",
    hindi: "मुझे एक प्रेजेंटेशन तैयार करना है।",
  },
  {
    english: "Can you share the meeting link?",
    hindi: "क्या आप मीटिंग लिंक शेयर कर सकते हैं?",
  },
  {
    english: "I will update the team.",
    hindi: "मैं टीम को अपडेट करूँगा।",
  },
  {
    english: "Let’s review the progress.",
    hindi: "चलो प्रगति की समीक्षा करते हैं।",
  },
  {
    english: "I need to check the schedule.",
    hindi: "मुझे शेड्यूल चेक करना है।",
  },
  {
    english: "Please share your feedback.",
    hindi: "कृपया अपनी प्रतिक्रिया साझा करें।",
  },
  {
    english: "I will coordinate with the team.",
    hindi: "मैं टीम के साथ समन्वय करूँगा।",
  },
  {
    english: "Let’s finalize the agenda.",
    hindi: "चलो एजेंडा को अंतिम रूप दें।",
  },
  {
    english: "I need to update the calendar.",
    hindi: "मुझे कैलेंडर अपडेट करना है।",
  },
  {
    english: "Can you send me the file?",
    hindi: "क्या आप मुझे फाइल भेज सकते हैं?",
  },
  {
    english: "I will share the minutes of the meeting.",
    hindi: "मैं मीटिंग के मिनट्स शेयर करूँगा।",
  },
  {
    english: "Let’s discuss this offline.",
    hindi: "चलो इस पर ऑफलाइन चर्चा करते हैं।",
  },
  {
    english: "I need to prepare the agenda.",
    hindi: "मुझे एजेंडा तैयार करना है।",
  },
  {
    english: "Please send me the updates.",
    hindi: "कृपया मुझे अपडेट भेज दें।",
  },
  {
    english: "I will confirm the time.",
    hindi: "मैं समय की पुष्टि करूँगा।",
  },
  {
    english: "Let’s plan for the next quarter.",
    hindi: "चलो अगली तिमाही की योजना बनाते हैं।",
  },
  {
    english: "I need to attend a client meeting.",
    hindi: "मुझे एक क्लाइंट मीटिंग अटेंड करनी है।",
  },
  {
    english: "Please share the report.",
    hindi: "कृपया रिपोर्ट साझा करें।",
  },
  {
    english: "I will prepare the agenda.",
    hindi: "मैं एजेंडा तैयार करूँगा।",
  },
  {
    english: "Let’s discuss the budget.",
    hindi: "चलो बजट पर चर्चा करते हैं।",
  },
  {
    english: "I need to update the project status.",
    hindi: "मुझे प्रोजेक्ट स्टेटस अपडेट करना है।",
  },
  {
    english: "Can you share the timeline?",
    hindi: "क्या आप टाइमलाइन शेयर कर सकते हैं?",
  },
  {
    english: "I will send the reminders.",
    hindi: "मैं रिमाइंडर भेज दूँगा।",
  },
  {
    english: "Let’s finalize the proposal.",
    hindi: "चलो प्रस्ताव को अंतिम रूप दें।",
  },
  {
    english: "I need to check the emails.",
    hindi: "मुझे ईमेल चेक करने हैं।",
  },
  {
    english: "Please share the action plan.",
    hindi: "कृपया एक्शन प्लान साझा करें।",
  },
  {
    english: "I will update the dashboard.",
    hindi: "मैं डैशबोर्ड अपडेट करूँगा।",
  },
  {
    english: "Let’s discuss the next steps.",
    hindi: "चलो अगले कदम पर चर्चा करते हैं।",
  },
  {
    english: "I need to prepare the report.",
    hindi: "मुझे रिपोर्ट तैयार करनी है।",
  },
  {
    english: "Can you share the updates?",
    hindi: "क्या आप अपडेट्स शेयर कर सकते हैं?",
  },
  {
    english: "I will send the agenda.",
    hindi: "मैं एजेंडा भेज दूँगा।",
  },
  {
    english: "Let’s plan for the next meeting.",
    hindi: "चलो अगली मीटिंग की योजना बनाते हैं।",
  },
  {
    english: "I need to update the team.",
    hindi: "मुझे टीम को अपडेट करना है।",
  },
  {
    english: "Please share the details.",
    hindi: "कृपया विवरण साझा करें।",
  },
  {
    english: "I will confirm the schedule.",
    hindi: "मैं शेड्यूल की पुष्टि करूँगा।",
  },
  {
    english: "Let’s discuss the project.",
    hindi: "चलो प्रोजेक्ट पर चर्चा करते हैं।",
  },
  {
    english: "I need to prepare the presentation.",
    hindi: "मुझे प्रेजेंटेशन तैयार करना है।",
  },
  {
    english: "Can you share the document?",
    hindi: "क्या आप दस्तावेज़ साझा कर सकते हैं?",
  },
  {
    english: "I will update the status.",
    hindi: "मैं स्टेटस अपडेट करूँगा।",
  },
  {
    english: "Let’s finalize the details.",
    hindi: "चलो विवरण को अंतिम रूप दें।",
  },
  {
    english: "I need to check the progress.",
    hindi: "मुझे प्रगति चेक करनी है।",
  },
  {
    english: "Please share the updates.",
    hindi: "कृपया अपडेट्स साझा करें।",
  },
  {
    english: "I will prepare the minutes.",
    hindi: "मैं मिनट्स तैयार करूँगा।",
  },
  {
    english: "Let’s discuss the timeline.",
    hindi: "चलो टाइमलाइन पर चर्चा करते हैं।",
  },
  {
    english: "I need to update the report.",
    hindi: "मुझे रिपोर्ट अपडेट करनी है।",
  },
  {
    english: "Can you share the progress?",
    hindi: "क्या आप प्रगति साझा कर सकते हैं?",
  },
  {
    english: "I will send the updates.",
    hindi: "मैं अपडेट्स भेज दूँगा।",
  },
  {
    english: "Let’s finalize the plan.",
    hindi: "चलो योजना को अंतिम रूप दें।",
  },
  {
    english: "I need to check the emails.",
    hindi: "मुझे ईमेल चेक करने हैं।",
  },
  {
    english: "Please share the action plan.",
    hindi: "कृपया एक्शन प्लान साझा करें।",
  },
  {
    english: "I will update the dashboard.",
    hindi: "मैं डैशबोर्ड अपडेट करूँगा।",
  },
  {
    english: "Let’s discuss the next steps.",
    hindi: "चलो अगले कदम पर चर्चा करते हैं।",
  },
  {
    english: "I need to prepare the report.",
    hindi: "मुझे रिपोर्ट तैयार करनी है।",
  },
  {
    english: "Can you share the updates?",
    hindi: "क्या आप अपडेट्स शेयर कर सकते हैं?",
  },
  {
    english: "I will send the agenda.",
    hindi: "मैं एजेंडा भेज दूँगा।",
  },
  {
    english: "Let’s plan for the next meeting.",
    hindi: "चलो अगली मीटिंग की योजना बनाते हैं।",
  },
  {
    english: "I need to update the team.",
    hindi: "मुझे टीम को अपडेट करना है।",
  },
  {
    english: "Please share the details.",
    hindi: "कृपया विवरण साझा करें।",
  },
  {
    english: "I will confirm the schedule.",
    hindi: "मैं शेड्यूल की पुष्टि करूँगा।",
  },
  {
    english: "Let’s discuss the project.",
    hindi: "चलो प्रोजेक्ट पर चर्चा करते हैं।",
  },
  {
    english: "I need to prepare the presentation.",
    hindi: "मुझे प्रेजेंटेशन तैयार करना है।",
  },
  {
    english: "Can you share the document?",
    hindi: "क्या आप दस्तावेज़ साझा कर सकते हैं?",
  },
  {
    english: "I will update the status.",
    hindi: "मैं स्टेटस अपडेट करूँगा।",
  },
  {
    english: "Let’s finalize the details.",
    hindi: "चलो विवरण को अंतिम रूप दें।",
  },
  {
    english: "I need to check the progress.",
    hindi: "मुझे प्रगति चेक करनी है।",
  },
  {
    english: "Please share the updates.",
    hindi: "कृपया अपडेट्स साझा करें।",
  },
  {
    english: "I will prepare the minutes.",
    hindi: "मैं मिनट्स तैयार करूँगा।",
  },
  {
    english: "Let’s discuss the timeline.",
    hindi: "चलो टाइमलाइन पर चर्चा करते हैं।",
  },
  {
    english: "I need to update the report.",
    hindi: "मुझे रिपोर्ट अपडेट करनी है।",
  },
  {
    english: "Can you share the progress?",
    hindi: "क्या आप प्रगति साझा कर सकते हैं?",
  },
  {
    english: "I will send the updates.",
    hindi: "मैं अपडेट्स भेज दूँगा।",
  },
  {
    english: "Let’s finalize the plan.",
    hindi: "चलो योजना को अंतिम रूप दें।",
  },
  {
    context: "Restaurant",
    english: "Can I see the menu, please?",
    hindi: "क्या मैं मेनू देख सकता/सकती हूँ?",
  },
  {
    context: "Restaurant",
    english: "I would like to order a pizza.",
    hindi: "मैं एक पिज़्ज़ा ऑर्डर करना चाहूंगा/चाहूंगी।",
  },
  {
    context: "Restaurant",
    english: "Could you bring some water?",
    hindi: "क्या आप थोड़ा पानी ला सकते हैं?",
  },
  {
    context: "Restaurant",
    english: "The food is delicious!",
    hindi: "खाना बहुत स्वादिष्ट है!",
  },
  {
    context: "Restaurant",
    english: "Can I get the bill, please?",
    hindi: "क्या मैं बिल ले सकता/सकती हूँ?",
  },
  {
    context: "With Friends",
    english: "What are you doing this weekend?",
    hindi: "इस वीकेंड तुम क्या कर रहे हो?",
  },
  {
    context: "With Friends",
    english: "Let's hang out at the mall.",
    hindi: "चलो मॉल में घूमने चलते हैं।",
  },
  {
    context: "With Friends",
    english: "I had a great time with you.",
    hindi: "मैंने तुम्हारे साथ बहुत अच्छा समय बिताया।",
  },
  {
    context: "With Friends",
    english: "Can you help me with this?",
    hindi: "क्या तुम मेरी इस काम में मदद कर सकते हो?",
  },
  {
    context: "With Friends",
    english: "Let's catch up soon!",
    hindi: "जल्दी मिलते हैं!",
  },
  {
    context: "Playground",
    english: "Pass me the ball!",
    hindi: "मुझे गेंद पास करो!",
  },
  {
    context: "Playground",
    english: "Let's play a game.",
    hindi: "चलो एक खेल खेलते हैं।",
  },
  {
    context: "Playground",
    english: "I won the match!",
    hindi: "मैंने मैच जीत लिया!",
  },
  {
    context: "Playground",
    english: "It's your turn now.",
    hindi: "अब तुम्हारी बारी है।",
  },
  {
    context: "Playground",
    english: "Let's take a break.",
    hindi: "चलो थोड़ा आराम करते हैं।",
  },
  {
    context: "Parties",
    english: "Happy birthday to you!",
    hindi: "जन्मदिन मुबारक हो!",
  },
  {
    context: "Parties",
    english: "Let's dance!",
    hindi: "चलो नाचते हैं!",
  },
  {
    context: "Parties",
    english: "This music is amazing!",
    hindi: "यह संगीत कमाल का है!",
  },
  {
    context: "Parties",
    english: "Can I have some cake?",
    hindi: "क्या मैं थोड़ा केक ले सकता/सकती हूँ?",
  },
  {
    context: "Parties",
    english: "Thank you for inviting me.",
    hindi: "मुझे आमंत्रित करने के लिए धन्यवाद।",
  },
  {
    context: "With Guests",
    english: "Welcome to our home!",
    hindi: "हमारे घर में आपका स्वागत है!",
  },
  {
    context: "With Guests",
    english: "Please make yourself comfortable.",
    hindi: "कृपया अपने आप को आरामदायक महसूस करें।",
  },
  {
    context: "With Guests",
    english: "Would you like some tea or coffee?",
    hindi: "क्या आप चाय या कॉफी लेंगे?",
  },
  {
    context: "With Guests",
    english: "Thank you for coming.",
    hindi: "आने के लिए धन्यवाद।",
  },
  {
    context: "With Guests",
    english: "Let me know if you need anything.",
    hindi: "अगर आपको कुछ चाहिए तो मुझे बताएं।",
  },
  {
    context: "With Family",
    english: "What's for dinner tonight?",
    hindi: "आज रात के खाने में क्या है?",
  },
  {
    context: "With Family",
    english: "Can you help me with the dishes?",
    hindi: "क्या तुम बर्तन धोने में मेरी मदद कर सकते हो?",
  },
  {
    context: "With Family",
    english: "Let's watch a movie together.",
    hindi: "चलो साथ में एक फिल्म देखते हैं।",
  },
  {
    context: "With Family",
    english: "I love spending time with you.",
    hindi: "मुझे तुम्हारे साथ समय बिताना अच्छा लगता है।",
  },
  {
    context: "With Family",
    english: "Don't forget to call Grandma.",
    hindi: "दादी को फोन करना मत भूलना।",
  },
  {
    context: "Tenses",
    english: "I am going to the market.",
    hindi: "मैं बाजार जा रहा/रही हूँ।",
  },
  {
    context: "Tenses",
    english: "She has finished her homework.",
    hindi: "उसने अपना होमवर्क पूरा कर लिया है।",
  },
  {
    context: "Tenses",
    english: "We will visit the museum tomorrow.",
    hindi: "हम कल संग्रहालय जाएंगे।",
  },
  {
    context: "Tenses",
    english: "They were playing cricket yesterday.",
    hindi: "वे कल क्रिकेट खेल रहे थे।",
  },
  {
    context: "Tenses",
    english: "I have been waiting for an hour.",
    hindi: "मैं एक घंटे से इंतज़ार कर रहा/रही हूँ।",
  },
  {
    context: "Modals",
    english: "You should eat healthy food.",
    hindi: "तुम्हें स्वस्थ भोजन खाना चाहिए।",
  },
  {
    context: "Modals",
    english: "Can I borrow your pen?",
    hindi: "क्या मैं तुम्हारी कलम उधार ले सकता/सकती हूँ?",
  },
  {
    context: "Modals",
    english: "You must complete this task.",
    hindi: "तुम्हें यह कार्य पूरा करना ही होगा।",
  },
  {
    context: "Modals",
    english: "May I come in?",
    hindi: "क्या मैं अंदर आ सकता/सकती हूँ?",
  },
  {
    context: "Modals",
    english: "You ought to respect your elders.",
    hindi: "तुम्हें अपने बड़ों का सम्मान करना चाहिए।",
  },
  {
    context: "Phrasal Verbs",
    english: "Please turn off the lights.",
    hindi: "कृपया लाइट बंद कर दो।",
  },
  {
    context: "Phrasal Verbs",
    english: "I will look after your dog.",
    hindi: "मैं तुम्हारे कुत्ते का ख्याल रखूंगा/रखूंगी।",
  },
  {
    context: "Phrasal Verbs",
    english: "Let's go over the plan again.",
    hindi: "चलो योजना को फिर से देखते हैं।",
  },
  {
    context: "Phrasal Verbs",
    english: "She ran into an old friend.",
    hindi: "उसकी एक पुराने दोस्त से मुलाकात हो गई।",
  },
  {
    context: "Phrasal Verbs",
    english: "We need to cut down on expenses.",
    hindi: "हमें खर्चे कम करने की जरूरत है।",
  },
  {
    context: "Restaurant",
    english: "Is this dish spicy?",
    hindi: "क्या यह व्यंजन मसालेदार है?",
  },
  {
    context: "Restaurant",
    english: "Could you recommend a vegetarian dish?",
    hindi: "क्या आप एक शाकाहारी व्यंजन सुझा सकते हैं?",
  },
  {
    context: "Restaurant",
    english: "I'd like to try the chef's special.",
    hindi: "मैं शेफ की स्पेशल डिश ट्राई करना चाहूंगा/चाहूंगी।",
  },
  {
    context: "Restaurant",
    english: "Can we get a table by the window?",
    hindi: "क्या हमें खिड़की के पास एक टेबल मिल सकती है?",
  },
  {
    context: "Restaurant",
    english: "The service here is excellent.",
    hindi: "यहाँ की सेवा उत्कृष्ट है।",
  },
  {
    context: "With Friends",
    english: "What’s your plan for the holidays?",
    hindi: "छुट्टियों के लिए तुम्हारी क्या योजना है?",
  },
  {
    context: "With Friends",
    english: "Let’s go for a road trip.",
    hindi: "चलो एक रोड ट्रिप पर चलते हैं।",
  },
  {
    context: "With Friends",
    english: "I’m so glad we met today.",
    hindi: "मुझे बहुत खुशी है कि हम आज मिले।",
  },
  {
    context: "With Friends",
    english: "Do you want to grab a coffee?",
    hindi: "क्या तुम कॉफी पीने चलोगे?",
  },
  {
    context: "With Friends",
    english: "I’ll always have your back.",
    hindi: "मैं हमेशा तुम्हारा साथ दूंगा/दूंगी।",
  },
  {
    context: "Playground",
    english: "Let’s form two teams.",
    hindi: "चलो दो टीमें बनाते हैं।",
  },
  {
    context: "Playground",
    english: "Who’s going to be the referee?",
    hindi: "रैफरी कौन बनेगा?",
  },
  {
    context: "Playground",
    english: "Don’t cheat during the game.",
    hindi: "खेल के दौरान धोखा मत दो।",
  },
  {
    context: "Playground",
    english: "We need to practice more.",
    hindi: "हमें और अभ्यास करने की जरूरत है।",
  },
  {
    context: "Playground",
    english: "Let’s celebrate our victory!",
    hindi: "चलो हमारी जीत का जश्न मनाते हैं!",
  },
  {
    context: "Parties",
    english: "This party is amazing!",
    hindi: "यह पार्टी कमाल की है!",
  },
  {
    context: "Parties",
    english: "Who’s the DJ tonight?",
    hindi: "आज रात का डीजे कौन है?",
  },
  {
    context: "Parties",
    english: "Let’s take a group photo.",
    hindi: "चलो एक ग्रुप फोटो लेते हैं।",
  },
  {
    context: "Parties",
    english: "I love the decorations here.",
    hindi: "मुझे यहाँ की सजावट बहुत पसंद है।",
  },
  {
    context: "Parties",
    english: "Can you pass me the snacks?",
    hindi: "क्या तुम मुझे स्नैक्स दे सकते हो?",
  },
  {
    context: "With Guests",
    english: "Please feel at home.",
    hindi: "कृपया अपने घर जैसा महसूस करें।",
  },
  {
    context: "With Guests",
    english: "Would you like some dessert?",
    hindi: "क्या आप कुछ मिठाई लेंगे?",
  },
  {
    context: "With Guests",
    english: "Thank you for the lovely gift.",
    hindi: "प्यारे तोहफे के लिए धन्यवाद।",
  },
  {
    context: "With Guests",
    english: "Let me know if you need anything else.",
    hindi: "अगर आपको कुछ और चाहिए तो मुझे बताएं।",
  },
  {
    context: "With Guests",
    english: "It’s so nice to have you here.",
    hindi: "आपको यहाँ पाकर बहुत अच्छा लगा।",
  },
  {
    context: "With Family",
    english: "What’s your favorite dish?",
    hindi: "तुम्हारा पसंदीदा व्यंजन क्या है?",
  },
  {
    context: "With Family",
    english: "Let’s plan a family picnic.",
    hindi: "चलो एक फैमिली पिकनिक प्लान करते हैं।",
  },
  {
    context: "With Family",
    english: "Can you help me with the groceries?",
    hindi: "क्या तुम किराने का सामान लाने में मेरी मदद कर सकते हो?",
  },
  {
    context: "With Family",
    english: "I’m so proud of you.",
    hindi: "मुझे तुम पर बहुत गर्व है।",
  },
  {
    context: "With Family",
    english: "Let’s spend more time together.",
    hindi: "चलो एक साथ और समय बिताते हैं।",
  },
  {
    context: "Tenses",
    english: "I have already finished my work.",
    hindi: "मैंने अपना काम पहले ही पूरा कर लिया है।",
  },
  {
    context: "Tenses",
    english: "She will be arriving at 5 PM.",
    hindi: "वह शाम 5 बजे आ रही होगी।",
  },
  {
    context: "Tenses",
    english: "They were discussing the project.",
    hindi: "वे प्रोजेक्ट पर चर्चा कर रहे थे।",
  },
  {
    context: "Tenses",
    english: "I had never seen such a beautiful place.",
    hindi: "मैंने ऐसी खूबसूरत जगह कभी नहीं देखी थी।",
  },
  {
    context: "Tenses",
    english: "We are going to visit the zoo tomorrow.",
    hindi: "हम कल चिड़ियाघर जाने वाले हैं।",
  },
  {
    context: "Modals",
    english: "You must follow the rules.",
    hindi: "तुम्हें नियमों का पालन करना ही होगा।",
  },
  {
    context: "Modals",
    english: "Can you please repeat that?",
    hindi: "क्या तुम कृपया इसे दोहरा सकते हो?",
  },
  {
    context: "Modals",
    english: "You should apologize for your mistake.",
    hindi: "तुम्हें अपनी गलती के लिए माफी माँगनी चाहिए।",
  },
  {
    context: "Modals",
    english: "May I use your phone?",
    hindi: "क्या मैं तुम्हारा फोन इस्तेमाल कर सकता/सकती हूँ?",
  },
  {
    context: "Modals",
    english: "You ought to be more careful.",
    hindi: "तुम्हें और सावधान रहना चाहिए।",
  },
  {
    context: "Phrasal Verbs",
    english: "Please turn on the fan.",
    hindi: "कृपया पंखा चालू कर दो।",
  },
  {
    context: "Phrasal Verbs",
    english: "I need to look up this word.",
    hindi: "मुझे इस शब्द को देखने की जरूरत है।",
  },
  {
    context: "Phrasal Verbs",
    english: "Let’s put off the meeting.",
    hindi: "चलो मीटिंग को स्थगित करते हैं।",
  },
  {
    context: "Phrasal Verbs",
    english: "She ran out of patience.",
    hindi: "उसका धैर्य खत्म हो गया।",
  },
  {
    english: "I wake up early in the morning.",
    hindi: "मैं सुबह जल्दी उठता हूँ।",
  },
  { english: "She is reading a book.", hindi: "वह एक किताब पढ़ रही है।" },
  { english: "The sun rises in the east.", hindi: "सूर्य पूर्व में उगता है।" },
  {
    english: "Water is essential for life.",
    hindi: "पानी जीवन के लिए आवश्यक है।",
  },
  {
    english: "He goes to school every day.",
    hindi: "वह हर दिन स्कूल जाता है।",
  },
  { english: "This is a beautiful place.", hindi: "यह एक खूबसूरत जगह है।" },
  { english: "I love eating mangoes.", hindi: "मुझे आम खाना पसंद है।" },
  { english: "She sings very well.", hindi: "वह बहुत अच्छा गाती है।" },
  {
    english: "Please give me a glass of water.",
    hindi: "कृपया मुझे एक गिलास पानी दीजिए।",
  },
  {
    english: "I am feeling very tired today.",
    hindi: "मैं आज बहुत थका हुआ महसूस कर रहा हूँ।",
  },
  {
    english: "Do you like tea or coffee?",
    hindi: "क्या आपको चाय पसंद है या कॉफी?",
  },
  {
    english: "It is raining heavily outside.",
    hindi: "बाहर बहुत तेज बारिश हो रही है।",
  },
  { english: "He is watching television.", hindi: "वह टेलीविजन देख रहा है।" },
  { english: "My father is a doctor.", hindi: "मेरे पिता एक डॉक्टर हैं।" },
  { english: "I am going to the market.", hindi: "मैं बाजार जा रहा हूँ।" },
  { english: "She has a pet dog.", hindi: "उसके पास एक पालतू कुत्ता है।" },
  {
    english: "The children are playing in the park.",
    hindi: "बच्चे पार्क में खेल रहे हैं।",
  },
  {
    english: "I need some help with my work.",
    hindi: "मुझे अपने काम में कुछ मदद चाहिए।",
  },
  {
    english: "This book is very interesting.",
    hindi: "यह किताब बहुत रोचक है।",
  },
  {
    english: "Can you open the door, please?",
    hindi: "क्या आप दरवाजा खोल सकते हैं, कृपया?",
  },
  { english: "The sky is blue.", hindi: "आसमान नीला है।" },
  {
    english: "He speaks English fluently.",
    hindi: "वह धाराप्रवाह अंग्रेजी बोलता है।",
  },
  { english: "I will call you later.", hindi: "मैं आपको बाद में कॉल करूंगा।" },
  { english: "She is very intelligent.", hindi: "वह बहुत बुद्धिमान है।" },
  {
    english: "We are going on a trip next week.",
    hindi: "हम अगले हफ्ते यात्रा पर जा रहे हैं।",
  },
  {
    english: "He is working on his laptop.",
    hindi: "वह अपने लैपटॉप पर काम कर रहा है।",
  },
  { english: "I like listening to music.", hindi: "मुझे संगीत सुनना पसंद है।" },
  { english: "She is cooking dinner.", hindi: "वह रात का खाना बना रही है।" },
  {
    english: "I need to buy some vegetables.",
    hindi: "मुझे कुछ सब्जियां खरीदनी हैं।",
  },
  {
    english: "We should respect our elders.",
    hindi: "हमें अपने बड़ों का सम्मान करना चाहिए।",
  },
  { english: "The baby is sleeping.", hindi: "बच्चा सो रहा है।" },
  { english: "He drives a car.", hindi: "वह कार चलाता है।" },
  {
    english: "She is wearing a red dress.",
    hindi: "वह लाल कपड़े पहनी हुई है।",
  },
  { english: "I have a headache.", hindi: "मुझे सिरदर्द हो रहा है।" },
  { english: "They are going to the cinema.", hindi: "वे सिनेमा जा रहे हैं।" },
  { english: "The train is late today.", hindi: "ट्रेन आज लेट है।" },
  { english: "My favorite color is blue.", hindi: "मेरा पसंदीदा रंग नीला है।" },
  { english: "He is very tall.", hindi: "वह बहुत लंबा है।" },
  { english: "She is my best friend.", hindi: "वह मेरी सबसे अच्छी दोस्त है।" },
  {
    english: "We should drink enough water.",
    hindi: "हमें पर्याप्त पानी पीना चाहिए।",
  },
  {
    english: "I need to charge my phone.",
    hindi: "मुझे अपना फोन चार्ज करना है।",
  },
  { english: "The food is very tasty.", hindi: "खाना बहुत स्वादिष्ट है।" },
  {
    english: "I forgot my wallet at home.",
    hindi: "मैं अपना बटुआ घर पर भूल गया।",
  },
  { english: "She likes painting.", hindi: "उसे पेंटिंग करना पसंद है।" },
  {
    english: "I have a lot of work to do.",
    hindi: "मुझे बहुत सारा काम करना है।",
  },
  {
    english: "The weather is very cold today.",
    hindi: "आज मौसम बहुत ठंडा है।",
  },
  { english: "We are watching a movie.", hindi: "हम एक फिल्म देख रहे हैं।" },
  {
    english: "He works in an IT company.",
    hindi: "वह एक आईटी कंपनी में काम करता है।",
  },
  { english: "The shop opens at 9 AM.", hindi: "दुकान सुबह 9 बजे खुलती है।" },
  {
    english: "We celebrate festivals with joy.",
    hindi: "हम त्योहारों को खुशी से मनाते हैं।",
  },
  {
    english: "My mother cooks delicious food.",
    hindi: "मेरी माँ स्वादिष्ट खाना बनाती हैं।",
  },

  // Add 1000+ more sentences here...
];

// Function to generate random background color

const SentencePage = () => {
  return (
    <div className="bg-black p-5 font-sans">
      <h1 className="text-center text-3xl font-bold text-white mb-8">
        Daily Use Sentences
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sentences.map((sentence, index) => (
          <div
            key={index}
            className="p-5 rounded-lg shadow-md"
            //   style={{ backgroundColor: getRandomColor() }}
          >
            <p className="text-lg font-semibold text-white mb-3">
              {sentence.hindi}
            </p>
            <p className="text-md text-white">{sentence.english}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SentencePage;
